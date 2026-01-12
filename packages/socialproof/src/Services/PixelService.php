<?php

namespace Packages\SocialProof\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Packages\SocialProof\Models\Campaign;
use Packages\SocialProof\Models\NotificationExtended;
use Packages\SocialProof\Models\TrackConversion;
use Jaybizzle\CrawlerDetect\CrawlerDetect;

class PixelService
{
    public function isCrawler(Request $request): bool
    {
        $crawlerDetect = new CrawlerDetect();
        return $crawlerDetect->isCrawler($request->header('User-Agent'));
    }

    public function isDomainAllowed(Campaign $campaign, Request $request): bool
    {
        if (!$campaign->domain) {
            return true;
        }

        $referer = $request->header('Referer');
        if (!$referer) {
            return false;
        }

        $domain = parse_url($referer, PHP_URL_HOST);
        $domain = preg_replace('/^www\./', '', $domain);

        return $domain === $campaign->domain;
    }

    public function isIpExcluded($user, Request $request): bool
    {
        $excludedIps = $user->preferences['excluded_ips'] ?? [];
        return in_array($request->ip(), $excludedIps);
    }

    public function hasExceededLimits($user): bool
    {
        $planSettings = $user->plan_settings ?? [];
        $impressionLimit = $planSettings['notifications_impressions_limit'] ?? -1;

        if ($impressionLimit === -1) {
            return false;
        }

        return $user->current_month_notifications_impressions >= $impressionLimit;
    }

    public function getActiveNotifications(Campaign $campaign, Request $request): Collection
    {
        $notifications = NotificationExtended::where('campaign_id', $campaign->campaign_id)
            ->where('is_enabled', true)
            ->get();

        $filteredNotifications = collect();

        foreach ($notifications as $notification) {
            if ($this->shouldShowNotification($notification, $request)) {
                $processedNotification = $this->processNotification($notification, $request);
                if ($processedNotification) {
                    $filteredNotifications->push($processedNotification);
                }
            }
        }

        return $filteredNotifications;
    }

    public function generatePixelScript(Campaign $campaign, Collection $notifications, Request $request): string
    {
        $notificationsData = $notifications->map(function ($notification) {
            return [
                'id' => $notification->notification_id,
                'type' => $notification->type,
                'settings' => $notification->settings,
                'branding' => $notification->branding ?? null,
            ];
        });

        $config = [
            'pixel_key' => $campaign->pixel_key,
            'notifications' => $notificationsData,
            'api_url' => route('socialproof.pixel.track'),
            'conversion_url' => route('socialproof.pixel.conversion'),
        ];

        $jsTemplate = file_get_contents(__DIR__ . '/../../resources/js/pixel-template.js');
        
        return str_replace(
            '{{CONFIG}}',
            json_encode($config),
            $jsTemplate
        );
    }

    private function shouldShowNotification(NotificationExtended $notification, Request $request): bool
    {
        $settings = $notification->settings;

        // Check targeting
        if (!$this->checkTargeting($settings, $request)) {
            return false;
        }

        // Check scheduling
        if (!$this->checkScheduling($settings)) {
            return false;
        }

        return true;
    }

    private function checkTargeting(array $settings, Request $request): bool
    {
        // Get user location and browser info
        $userInfo = $this->getUserInfo($request);

        // Check continent targeting
        if (!empty($settings['display_continents']) && 
            !in_array($userInfo['continent_code'], $settings['display_continents'])) {
            return false;
        }

        // Check country targeting
        if (!empty($settings['display_countries']) && 
            !in_array($userInfo['country_code'], $settings['display_countries'])) {
            return false;
        }

        // Check city targeting
        if (!empty($settings['display_cities']) && 
            !in_array($userInfo['city_name'], $settings['display_cities'])) {
            return false;
        }

        // Check language targeting
        if (!empty($settings['display_languages']) && 
            !in_array($userInfo['browser_language'], $settings['display_languages'])) {
            return false;
        }

        // Check OS targeting
        if (!empty($settings['display_operating_systems']) && 
            !in_array($userInfo['os_name'], $settings['display_operating_systems'])) {
            return false;
        }

        // Check browser targeting
        if (!empty($settings['display_browsers']) && 
            !in_array($userInfo['browser_name'], $settings['display_browsers'])) {
            return false;
        }

        // Check device targeting
        if (!$settings['display_mobile'] && $userInfo['device_type'] === 'mobile') {
            return false;
        }

        if (!$settings['display_desktop'] && $userInfo['device_type'] === 'desktop') {
            return false;
        }

        return true;
    }

    private function checkScheduling(array $settings): bool
    {
        if (!$settings['schedule']) {
            return true;
        }

        $now = now();
        $startDate = $settings['start_date'] ? \Carbon\Carbon::parse($settings['start_date']) : null;
        $endDate = $settings['end_date'] ? \Carbon\Carbon::parse($settings['end_date']) : null;

        if ($startDate && $now->lt($startDate)) {
            return false;
        }

        if ($endDate && $now->gt($endDate)) {
            return false;
        }

        return true;
    }

    private function processNotification(NotificationExtended $notification, Request $request)
    {
        switch ($notification->type) {
            case NotificationExtended::TYPE_CONVERSIONS:
                return $this->processConversionsNotification($notification);
            
            case NotificationExtended::TYPE_CONVERSIONS_COUNTER:
                return $this->processConversionsCounterNotification($notification);
            
            case NotificationExtended::TYPE_LIVE_COUNTER:
                return $this->processLiveCounterNotification($notification);
            
            case NotificationExtended::TYPE_REVIEWS:
                return $this->processReviewsNotification($notification);
            
            default:
                return $notification;
        }
    }

    private function processConversionsNotification(NotificationExtended $notification)
    {
        $settings = $notification->settings;
        $orderBy = ($settings['order'] ?? 'descending') === 'descending' ? 'created_at DESC' : 'RAND()';
        $count = $settings['conversions_count'] ?? 5;

        $conversions = TrackConversion::forNotification($notification->notification_id)
            ->orderByRaw($orderBy)
            ->limit($count)
            ->get();

        if ($conversions->isEmpty()) {
            return $notification;
        }

        $processedNotifications = collect();
        $originalDelay = $settings['display_trigger_value'] ?? 0;

        foreach ($conversions as $index => $conversion) {
            $processedNotification = clone $notification;
            $processedSettings = $settings;

            // Replace variables in settings
            $data = $conversion->data;
            foreach (['title', 'description', 'image', 'url'] as $field) {
                if (isset($processedSettings[$field])) {
                    $processedSettings[$field] = $this->replaceVariables($processedSettings[$field], $data);
                }
            }

            // Adjust delay for multiple notifications
            if ($index > 0 && isset($settings['in_between_delay'])) {
                $processedSettings['display_trigger_value'] = $originalDelay + ($index * $settings['in_between_delay']);
            }

            $processedNotification->settings = $processedSettings;
            $processedNotification->last_action_date = $conversion->created_at;

            $processedNotifications->push($processedNotification);
        }

        return $processedNotifications;
    }

    private function processConversionsCounterNotification(NotificationExtended $notification)
    {
        $settings = $notification->settings;
        $lastActivity = $settings['last_activity'] ?? 24;

        $startDate = now()->subHours($lastActivity);
        $count = TrackConversion::forNotification($notification->notification_id)
            ->where('created_at', '>=', $startDate)
            ->count();

        $notification->counter = $count;
        return $notification;
    }

    private function processLiveCounterNotification(NotificationExtended $notification)
    {
        $settings = $notification->settings;
        $lastActivity = $settings['last_activity'] ?? 5;

        $startDate = now()->subMinutes($lastActivity);
        $count = \Packages\SocialProof\Models\TrackLog::forCampaign($notification->campaign_id)
            ->where('created_at', '>=', $startDate)
            ->distinct('ip_binary')
            ->count();

        $notification->counter = $count;
        return $notification;
    }

    private function processReviewsNotification(NotificationExtended $notification)
    {
        $settings = $notification->settings;
        $orderBy = ($settings['order'] ?? 'descending') === 'descending' ? 'created_at DESC' : 'RAND()';
        $count = $settings['reviews_count'] ?? 5;

        $reviews = TrackConversion::forNotification($notification->notification_id)
            ->orderByRaw($orderBy)
            ->limit($count)
            ->get();

        if ($reviews->isEmpty()) {
            return $notification;
        }

        $processedNotifications = collect();
        $originalDelay = $settings['display_trigger_value'] ?? 0;

        foreach ($reviews as $index => $review) {
            $processedNotification = clone $notification;
            $processedSettings = $settings;

            $data = $review->data;
            $processedSettings['title'] = $data['title'] ?? '';
            $processedSettings['description'] = $data['description'] ?? '';
            $processedSettings['image'] = $data['image'] ?? $settings['image'];
            $processedSettings['stars'] = (int) ($data['stars'] ?? 5);

            // Adjust delay for multiple notifications
            if ($index > 0 && isset($settings['in_between_delay'])) {
                $processedSettings['display_trigger_value'] = $originalDelay + ($index * $settings['in_between_delay']);
            }

            $processedNotification->settings = $processedSettings;
            $processedNotifications->push($processedNotification);
        }

        return $processedNotifications;
    }

    private function replaceVariables(string $text, array $data): string
    {
        preg_match_all('/\{([a-zA-Z0-9_\-\.]+)\}/', $text, $matches);

        foreach ($matches[1] as $variable) {
            $value = $data[$variable] ?? '';
            $text = str_replace('{' . $variable . '}', htmlspecialchars($value, ENT_QUOTES, 'UTF-8'), $text);
        }

        return $text;
    }

    private function getUserInfo(Request $request): array
    {
        // This would typically use a GeoIP service
        return [
            'continent_code' => null,
            'country_code' => null,
            'city_name' => null,
            'browser_language' => substr($request->header('Accept-Language', ''), 0, 2),
            'browser_name' => null,
            'os_name' => null,
            'device_type' => 'desktop', // Simplified
        ];
    }
}