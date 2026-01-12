<?php

namespace Packages\SocialProof\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Packages\SocialProof\Models\Campaign;
use Packages\SocialProof\Models\NotificationExtended;
use Packages\SocialProof\Models\TrackNotification;
use Carbon\Carbon;

class CampaignService
{
    public function createCampaign(array $data): Campaign
    {
        $data['pixel_key'] = $this->generateUniquePixelKey();

        return Campaign::create($data);
    }

    public function updateCampaign(Campaign $campaign, array $data): Campaign
    {
        $campaign->update($data);
        return $campaign->fresh();
    }

    public function duplicateCampaign(Campaign $campaign): Campaign
    {
        $newCampaign = $campaign->replicate();
        $newCampaign->name = $campaign->name . ' - Copy';
        $newCampaign->pixel_key = $this->generateUniquePixelKey();
        $newCampaign->is_enabled = false;
        $newCampaign->save();

        // Duplicate all notifications
        foreach ($campaign->notifications as $notification) {
            $newNotification = $notification->replicate();
            $newNotification->campaign_id = $newCampaign->campaign_id;
            $newNotification->notification_key = md5($newCampaign->user_id . $newNotification->notification_id . time() . Str::random(16));
            $newNotification->is_enabled = false;
            $newNotification->impressions = 0;
            $newNotification->hovers = 0;
            $newNotification->clicks = 0;
            $newNotification->form_submissions = 0;
            $newNotification->save();
        }

        return $newCampaign;
    }

    public function getCampaignStatistics(Campaign $campaign, Request $request): array
    {
        $startDate = $request->get('start_date', now()->subDays(30)->format('Y-m-d'));
        $endDate = $request->get('end_date', now()->format('Y-m-d'));

        // Get tracking data
        $trackingData = TrackNotification::forCampaign($campaign->campaign_id)
            ->whereBetween('created_at', [$startDate, $endDate])
            ->selectRaw('
                type,
                COUNT(*) as total,
                DATE(created_at) as date
            ')
            ->groupBy('type', 'date')
            ->orderBy('date')
            ->get();

        // Process chart data
        $chartData = $this->processChartData($trackingData, $startDate, $endDate);

        // Get totals
        $totals = $this->calculateTotals($trackingData);

        // Get top pages
        $topPages = TrackNotification::forCampaign($campaign->campaign_id)
            ->whereBetween('created_at', [$startDate, $endDate])
            ->selectRaw('
                path,
                type,
                COUNT(*) as total
            ')
            ->groupBy('path', 'type')
            ->orderByDesc('total')
            ->limit(25)
            ->get();

        return [
            'chart_data' => $chartData,
            'totals' => $totals,
            'top_pages' => $topPages,
            'date_range' => [
                'start_date' => $startDate,
                'end_date' => $endDate,
            ],
        ];
    }

    public function resetCampaignStatistics(Campaign $campaign, string $startDate, string $endDate): void
    {
        TrackNotification::forCampaign($campaign->campaign_id)
            ->whereBetween('created_at', [$startDate, $endDate])
            ->delete();
    }

    private function generateUniquePixelKey(): string
    {
        do {
            $pixelKey = Str::random(32);
        } while (Campaign::where('pixel_key', $pixelKey)->exists());

        return $pixelKey;
    }

    private function processChartData($trackingData, string $startDate, string $endDate): array
    {
        $chartData = [];
        $period = Carbon::parse($startDate)->daysUntil(Carbon::parse($endDate));

        // Initialize chart data with zeros
        foreach ($period as $date) {
            $dateKey = $date->format('Y-m-d');
            $chartData[$dateKey] = [
                'impression' => 0,
                'hover' => 0,
                'click' => 0,
                'form_submission' => 0,
            ];
        }

        // Fill with actual data
        foreach ($trackingData as $data) {
            if (isset($chartData[$data->date])) {
                $chartData[$data->date][$data->type] = $data->total;
            }
        }

        return array_values($chartData);
    }

    private function calculateTotals($trackingData): array
    {
        $totals = [
            'impression' => 0,
            'hover' => 0,
            'click' => 0,
            'form_submission' => 0,
            'ctr' => 0,
            'conversions' => 0,
        ];

        foreach ($trackingData as $data) {
            if (isset($totals[$data->type])) {
                $totals[$data->type] += $data->total;
            }
        }

        // Calculate CTR and conversion rate
        if ($totals['impression'] > 0) {
            $totals['ctr'] = ($totals['click'] / $totals['impression']) * 100;
            $totals['conversions'] = ($totals['form_submission'] / $totals['impression']) * 100;
        }

        return $totals;
    }
}