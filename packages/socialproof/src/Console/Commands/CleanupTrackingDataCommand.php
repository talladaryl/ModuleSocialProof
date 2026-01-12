<?php

namespace Packages\SocialProof\Console\Commands;

use Illuminate\Console\Command;
use Packages\SocialProof\Models\TrackNotification;
use Packages\SocialProof\Models\TrackConversion;
use Packages\SocialProof\Models\TrackLog;
use Carbon\Carbon;

class CleanupTrackingDataCommand extends Command
{
    protected $signature = 'socialproof:cleanup {--days=90 : Number of days to keep data}';
    protected $description = 'Clean up old tracking data';

    public function handle()
    {
        $days = (int) $this->option('days');
        $cutoffDate = Carbon::now()->subDays($days);

        $this->info("Cleaning up tracking data older than {$days} days...");

        // Clean up track_notifications
        $deletedNotifications = TrackNotification::where('created_at', '<', $cutoffDate)->delete();
        $this->line("Deleted {$deletedNotifications} notification tracking records");

        // Clean up track_conversions
        $deletedConversions = TrackConversion::where('created_at', '<', $cutoffDate)->delete();
        $this->line("Deleted {$deletedConversions} conversion tracking records");

        // Clean up track_logs
        $deletedLogs = TrackLog::where('created_at', '<', $cutoffDate)->delete();
        $this->line("Deleted {$deletedLogs} log tracking records");

        $total = $deletedNotifications + $deletedConversions + $deletedLogs;
        $this->info("Total records deleted: {$total}");
    }
}