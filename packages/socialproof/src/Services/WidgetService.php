<?php

namespace Packages\SocialProof\Services;

use Packages\SocialProof\Models\Widget;
use Illuminate\Support\Str;

class WidgetService
{
    public function createWidget(array $data): Widget
    {
        return Widget::create([
            'name' => $data['name'],
            'domain' => $this->normalizeDomain($data['domain']),
            'user_id' => $data['user_id'] ?? null,
            'settings' => $data['settings'] ?? [],
        ]);
    }

    public function updateWidget(Widget $widget, array $data): Widget
    {
        $widget->update([
            'name' => $data['name'] ?? $widget->name,
            'domain' => isset($data['domain']) ? $this->normalizeDomain($data['domain']) : $widget->domain,
            'settings' => $data['settings'] ?? $widget->settings,
            'is_active' => $data['is_active'] ?? $widget->is_active,
        ]);

        return $widget->fresh();
    }

    public function findByApiKey(string $apiKey): ?Widget
    {
        return Widget::where('api_key', $apiKey)
            ->where('is_active', true)
            ->first();
    }

    public function generateWidgetScript(Widget $widget): string
    {
        $config = [
            'apiKey' => $widget->api_key,
            'domain' => $widget->domain,
            'settings' => $widget->settings,
        ];

        return view('socialproof::widget.script', compact('widget', 'config'))->render();
    }

    public function getWidgetConfig(Widget $widget): array
    {
        return [
            'id' => $widget->id,
            'domain' => $widget->domain,
            'settings' => $widget->settings,
            'api_endpoint' => route('socialproof.api.notifications', $widget->api_key),
            'websocket_channel' => "socialproof.widget.{$widget->id}",
        ];
    }

    private function normalizeDomain(string $domain): string
    {
        // Remove protocol and www
        $domain = preg_replace('/^https?:\/\//', '', $domain);
        $domain = preg_replace('/^www\./', '', $domain);
        
        // Remove trailing slash
        return rtrim($domain, '/');
    }

    public function validateDomain(string $domain, Widget $widget): bool
    {
        $normalizedDomain = $this->normalizeDomain($domain);
        $widgetDomain = $widget->domain;

        // Exact match
        if ($normalizedDomain === $widgetDomain) {
            return true;
        }

        // Subdomain match (if widget domain starts with *)
        if (Str::startsWith($widgetDomain, '*.')) {
            $baseDomain = substr($widgetDomain, 2);
            return Str::endsWith($normalizedDomain, $baseDomain);
        }

        return false;
    }

    public function getWidgetStats(Widget $widget, int $days = 7): array
    {
        $events = $widget->events()
            ->where('created_at', '>=', now()->subDays($days))
            ->get();

        $notifications = $widget->notifications()
            ->where('created_at', '>=', now()->subDays($days))
            ->get();

        return [
            'events_count' => $events->count(),
            'notifications_count' => $notifications->count(),
            'active_notifications' => $widget->notifications()->active()->count(),
            'events_by_type' => $events->groupBy('type')->map->count(),
            'daily_events' => $events->groupBy(function ($event) {
                return $event->created_at->format('Y-m-d');
            })->map->count(),
        ];
    }
}