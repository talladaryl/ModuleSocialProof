<?php

namespace Packages\SocialProof\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Packages\SocialProof\Models\Campaign;
use Packages\SocialProof\Models\NotificationExtended;
use Packages\SocialProof\Models\TrackNotification;
use Packages\SocialProof\Models\TrackConversion;
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $userId = auth()->id();
        $dateRange = $this->getDateRange($request);

        // Get overview statistics
        $stats = $this->getOverviewStats($userId, $dateRange);

        // Get recent campaigns
        $recentCampaigns = Campaign::forUser($userId)
            ->with(['notifications' => function ($query) {
                $query->limit(3);
            }])
            ->withCount(['notifications'])
            ->latest()
            ->limit(5)
            ->get();

        // Get recent notifications
        $recentNotifications = NotificationExtended::forUser($userId)
            ->with(['campaign'])
            ->latest()
            ->limit(5)
            ->get();

        // Get chart data for the last 30 days
        $chartData = $this->getChartData($userId, $dateRange);

        // Get top performing notifications
        $topNotifications = NotificationExtended::forUser($userId)
            ->with(['campaign'])
            ->orderByDesc('clicks')
            ->limit(5)
            ->get();

        return Inertia::render('socialproof/dashboard/index', [
            'stats' => $stats,
            'recent_campaigns' => $recentCampaigns,
            'recent_notifications' => $recentNotifications,
            'chart_data' => $chartData,
            'top_notifications' => $topNotifications,
            'date_range' => $dateRange,
        ]);
    }

    private function getDateRange(Request $request): array
    {
        $startDate = $request->get('start_date', now()->subDays(30)->format('Y-m-d'));
        $endDate = $request->get('end_date', now()->format('Y-m-d'));

        return [
            'start_date' => $startDate,
            'end_date' => $endDate,
        ];
    }

    private function getOverviewStats(int $userId, array $dateRange): array
    {
        $startDate = $dateRange['start_date'];
        $endDate = $dateRange['end_date'];

        // Total campaigns
        $totalCampaigns = Campaign::forUser($userId)->count();

        // Total notifications
        $totalNotifications = NotificationExtended::forUser($userId)->count();

        // Total impressions in date range
        $totalImpressions = TrackNotification::forUser($userId)
            ->where('type', 'impression')
            ->whereBetween('created_at', [$startDate, $endDate])
            ->count();

        // Total clicks in date range
        $totalClicks = TrackNotification::forUser($userId)
            ->where('type', 'click')
            ->whereBetween('created_at', [$startDate, $endDate])
            ->count();

        // Total conversions in date range
        $totalConversions = TrackConversion::forUser($userId)
            ->whereBetween('created_at', [$startDate, $endDate])
            ->count();

        // Calculate CTR
        $ctr = $totalImpressions > 0 ? ($totalClicks / $totalImpressions) * 100 : 0;

        // Calculate conversion rate
        $conversionRate = $totalImpressions > 0 ? ($totalConversions / $totalImpressions) * 100 : 0;

        // Get previous period for comparison
        $previousStartDate = Carbon::parse($startDate)->subDays(
            Carbon::parse($endDate)->diffInDays(Carbon::parse($startDate))
        )->format('Y-m-d');

        $previousImpressions = TrackNotification::forUser($userId)
            ->where('type', 'impression')
            ->whereBetween('created_at', [$previousStartDate, $startDate])
            ->count();

        $previousClicks = TrackNotification::forUser($userId)
            ->where('type', 'click')
            ->whereBetween('created_at', [$previousStartDate, $startDate])
            ->count();

        $previousConversions = TrackConversion::forUser($userId)
            ->whereBetween('created_at', [$previousStartDate, $startDate])
            ->count();

        // Calculate growth percentages
        $impressionsGrowth = $previousImpressions > 0 
            ? (($totalImpressions - $previousImpressions) / $previousImpressions) * 100 
            : 0;

        $clicksGrowth = $previousClicks > 0 
            ? (($totalClicks - $previousClicks) / $previousClicks) * 100 
            : 0;

        $conversionsGrowth = $previousConversions > 0 
            ? (($totalConversions - $previousConversions) / $previousConversions) * 100 
            : 0;

        return [
            'total_campaigns' => $totalCampaigns,
            'total_notifications' => $totalNotifications,
            'total_impressions' => $totalImpressions,
            'total_clicks' => $totalClicks,
            'total_conversions' => $totalConversions,
            'ctr' => round($ctr, 2),
            'conversion_rate' => round($conversionRate, 2),
            'impressions_growth' => round($impressionsGrowth, 2),
            'clicks_growth' => round($clicksGrowth, 2),
            'conversions_growth' => round($conversionsGrowth, 2),
        ];
    }

    private function getChartData(int $userId, array $dateRange): array
    {
        $startDate = $dateRange['start_date'];
        $endDate = $dateRange['end_date'];

        $trackingData = TrackNotification::forUser($userId)
            ->whereBetween('created_at', [$startDate, $endDate])
            ->selectRaw('
                type,
                COUNT(*) as total,
                DATE(created_at) as date
            ')
            ->groupBy('type', 'date')
            ->orderBy('date')
            ->get();

        // Initialize chart data
        $chartData = [];
        $period = Carbon::parse($startDate)->daysUntil(Carbon::parse($endDate));

        foreach ($period as $date) {
            $dateKey = $date->format('Y-m-d');
            $chartData[$dateKey] = [
                'date' => $dateKey,
                'impressions' => 0,
                'clicks' => 0,
                'hovers' => 0,
                'form_submissions' => 0,
            ];
        }

        // Fill with actual data
        foreach ($trackingData as $data) {
            if (isset($chartData[$data->date])) {
                $type = $data->type === 'impression' ? 'impressions' : 
                       ($data->type === 'click' ? 'clicks' : 
                       ($data->type === 'hover' ? 'hovers' : 
                       ($data->type === 'form_submission' ? 'form_submissions' : $data->type)));
                
                if (isset($chartData[$data->date][$type])) {
                    $chartData[$data->date][$type] = $data->total;
                }
            }
        }

        return array_values($chartData);
    }
}