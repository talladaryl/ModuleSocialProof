<?php

namespace Packages\SocialProof\Console\Commands;

use Illuminate\Console\Command;
use Packages\SocialProof\Models\Campaign;
use Packages\SocialProof\Models\NotificationExtended;
use Packages\SocialProof\Models\TrackNotification;
use Packages\SocialProof\Models\TrackConversion;
use Carbon\Carbon;

class GenerateStatsCommand extends Command
{
    protected $signature = 'socialproof:stats {--period=30 : Number of days to analyze}';
    protected $description = 'Generate social proof statistics';

    public function handle()
    {
        $period = (int) $this->option('period');
        $startDate = Carbon::now()->subDays($period);

        $this->info("Generating statistics for the last {$period} days...");
        $this->line('');

        // Overall stats
        $totalCampaigns = Campaign::count();
        $activeCampaigns = Campaign::where('is_enabled', true)->count();
        $totalNotifications = NotificationExtended::count();
        $activeNotifications = NotificationExtended::where('is_enabled', true)->count();

        $this->table(['Metric', 'Count'], [
            ['Total Campaigns', $totalCampaigns],
            ['Active Campaigns', $activeCampaigns],
            ['Total Notifications', $totalNotifications],
            ['Active Notifications', $activeNotifications],
        ]);

        // Tracking stats for the period
        $impressions = TrackNotification::where('type', 'impression')
            ->where('created_at', '>=', $startDate)
            ->count();

        $clicks = TrackNotification::where('type', 'click')
            ->where('created_at', '>=', $startDate)
            ->count();

        $hovers = TrackNotification::where('type', 'hover')
            ->where('created_at', '>=', $startDate)
            ->count();

        $conversions = TrackConversion::where('created_at', '>=', $startDate)->count();

        $ctr = $impressions > 0 ? round(($clicks / $impressions) * 100, 2) : 0;
        $conversionRate = $impressions > 0 ? round(($conversions / $impressions) * 100, 2) : 0;

        $this->line('');
        $this->info("Performance Stats (Last {$period} days):");
        $this->table(['Metric', 'Count'], [
            ['Impressions', number_format($impressions)],
            ['Clicks', number_format($clicks)],
            ['Hovers', number_format($hovers)],
            ['Conversions', number_format($conversions)],
            ['Click-through Rate', $ctr . '%'],
            ['Conversion Rate', $conversionRate . '%'],
        ]);

        // Top performing notifications
        $topNotifications = NotificationExtended::select('name', 'type', 'clicks', 'impressions')
            ->where('impressions', '>', 0)
            ->orderByDesc('clicks')
            ->limit(5)
            ->get();

        if ($topNotifications->isNotEmpty()) {
            $this->line('');
            $this->info('Top Performing Notifications:');
            $tableData = $topNotifications->map(function ($notification) {
                $ctr = $notification->impressions > 0 
                    ? round(($notification->clicks / $notification->impressions) * 100, 2) 
                    : 0;
                
                return [
                    $notification->name,
                    $notification->type,
                    number_format($notification->impressions),
                    number_format($notification->clicks),
                    $ctr . '%'
                ];
            })->toArray();

            $this->table(['Name', 'Type', 'Impressions', 'Clicks', 'CTR'], $tableData);
        }

        // Daily breakdown for the last 7 days
        $this->line('');
        $this->info('Daily Breakdown (Last 7 days):');
        $dailyStats = [];

        for ($i = 6; $i >= 0; $i--) {
            $date = Carbon::now()->subDays($i);
            $dayStart = $date->copy()->startOfDay();
            $dayEnd = $date->copy()->endOfDay();

            $dayImpressions = TrackNotification::where('type', 'impression')
                ->whereBetween('created_at', [$dayStart, $dayEnd])
                ->count();

            $dayClicks = TrackNotification::where('type', 'click')
                ->whereBetween('created_at', [$dayStart, $dayEnd])
                ->count();

            $dayConversions = TrackConversion::whereBetween('created_at', [$dayStart, $dayEnd])
                ->count();

            $dailyStats[] = [
                $date->format('M j'),
                number_format($dayImpressions),
                number_format($dayClicks),
                number_format($dayConversions),
            ];
        }

        $this->table(['Date', 'Impressions', 'Clicks', 'Conversions'], $dailyStats);
    }
}