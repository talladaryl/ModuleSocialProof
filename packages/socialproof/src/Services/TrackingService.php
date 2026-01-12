<?php

namespace Packages\SocialProof\Services;

use Packages\SocialProof\Models\Campaign;
use Packages\SocialProof\Models\NotificationExtended;
use Packages\SocialProof\Models\TrackNotification;
use Packages\SocialProof\Models\TrackConversion;
use Packages\SocialProof\Models\TrackLog;

class TrackingService
{
    public function trackNotificationEvent(
        NotificationExtended $notification,
        string $type,
        string $path,
        string $ip,
        array $data = []
    ): void {
        // Create tracking record
        TrackNotification::create([
            'user_id' => $notification->user_id,
            'campaign_id' => $notification->campaign_id,
            'notification_id' => $notification->notification_id,
            'type' => $type,
            'path' => $path,
        ]);

        // Update notification counters
        switch ($type) {
            case 'impression':
                $notification->incrementImpressions();
                break;
            case 'hover':
                $notification->incrementHovers();
                break;
            case 'click':
                $notification->incrementClicks();
                break;
            case 'form_submission':
                $notification->incrementFormSubmissions();
                break;
        }

        // Track general log for live counter
        if ($type === 'impression') {
            $this->trackLog($notification->campaign_id, $notification->user_id, $path, $ip);
        }
    }

    public function trackConversion(
        NotificationExtended $notification,
        array $data,
        string $path,
        string $ip,
        ?string $userAgent = null
    ): TrackConversion {
        // Get location data (simplified)
        $location = $this->getLocationData($ip);

        return TrackConversion::create([
            'user_id' => $notification->user_id,
            'notification_id' => $notification->notification_id,
            'type' => TrackConversion::TYPE_COLLECTOR,
            'data' => json_encode($data),
            'url' => $path,
            'page_title' => $data['page_title'] ?? null,
            'location' => json_encode($location),
        ]);
    }

    public function processWebhookData(Campaign $campaign, array $data): void
    {
        // Find notifications that should receive webhook data
        $notifications = NotificationExtended::where('campaign_id', $campaign->campaign_id)
            ->where('is_enabled', true)
            ->whereIn('type', [
                NotificationExtended::TYPE_CONVERSIONS,
                NotificationExtended::TYPE_EMAIL_COLLECTOR,
                NotificationExtended::TYPE_REQUEST_COLLECTOR,
            ])
            ->get();

        foreach ($notifications as $notification) {
            TrackConversion::create([
                'user_id' => $notification->user_id,
                'notification_id' => $notification->notification_id,
                'type' => TrackConversion::TYPE_WEBHOOK,
                'data' => json_encode($data),
                'url' => $data['url'] ?? null,
                'page_title' => $data['page_title'] ?? null,
                'location' => json_encode($this->getLocationData($data['ip'] ?? null)),
            ]);
        }
    }

    public function trackFeedback(
        NotificationExtended $notification,
        string $feedbackType,
        $feedbackValue,
        string $path
    ): void {
        $type = match ($feedbackType) {
            'emoji' => 'feedback_emoji_' . $feedbackValue,
            'score' => 'feedback_score_' . $feedbackValue,
            default => 'feedback_' . $feedbackType,
        };

        TrackNotification::create([
            'user_id' => $notification->user_id,
            'campaign_id' => $notification->campaign_id,
            'notification_id' => $notification->notification_id,
            'type' => $type,
            'path' => $path,
        ]);
    }

    private function trackLog(int $campaignId, int $userId, string $path, string $ip): void
    {
        TrackLog::create([
            'user_id' => $userId,
            'campaign_id' => $campaignId,
            'path' => $path,
            'ip_binary' => inet_pton($ip),
        ]);
    }

    private function getLocationData(?string $ip): array
    {
        if (!$ip) {
            return [];
        }

        // This would typically use a GeoIP service like MaxMind
        // For now, return empty data
        return [
            'continent_code' => null,
            'country_code' => null,
            'city_name' => null,
        ];
    }
}