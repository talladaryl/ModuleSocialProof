<?php

namespace Packages\SocialProof\Services;

use Packages\SocialProof\Models\Event;
use Packages\SocialProof\Models\Notification;
use Packages\SocialProof\Models\Widget;

class NotificationService
{
    public function createFromEvent(Event $event): ?Notification
    {
        $widget = $event->widget;
        $notificationConfig = config("socialproof.notification_types.{$event->type}");

        if (!$notificationConfig || !$notificationConfig['enabled']) {
            return null;
        }

        $message = $this->generateMessage($event, $notificationConfig['template']);
        
        return Notification::create([
            'widget_id' => $widget->id,
            'event_id' => $event->id,
            'type' => $event->type,
            'title' => $this->generateTitle($event),
            'message' => $message,
            'icon' => $notificationConfig['icon'] ?? null,
            'data' => $this->prepareNotificationData($event),
            'expires_at' => now()->addHours(24), // Notifications expire after 24h
        ]);
    }

    public function getActiveNotifications(Widget $widget, int $limit = null): \Illuminate\Database\Eloquent\Collection
    {
        $query = $widget->notifications()
            ->active()
            ->orderBy('created_at', 'desc');

        if ($limit) {
            $query->limit($limit);
        }

        return $query->get();
    }

    public function getRecentNotifications(Widget $widget, int $minutes = 60): \Illuminate\Database\Eloquent\Collection
    {
        return $widget->notifications()
            ->active()
            ->recent($minutes)
            ->orderBy('created_at', 'desc')
            ->get();
    }

    private function generateMessage(Event $event, string $template): string
    {
        $replacements = [
            '{customer}' => $event->formatted_customer_name,
            '{product}' => $event->data['product_name'] ?? 'a product',
            '{rating}' => $event->data['rating'] ?? '5',
            '{count}' => $event->data['count'] ?? '1',
            '{location}' => $event->customer_location ?? 'somewhere',
        ];

        return str_replace(array_keys($replacements), array_values($replacements), $template);
    }

    private function generateTitle(Event $event): string
    {
        return match ($event->type) {
            'purchase' => 'Recent Purchase',
            'signup' => 'New User',
            'review' => 'New Review',
            'visit' => 'Live Activity',
            default => 'Activity',
        };
    }

    private function prepareNotificationData(Event $event): array
    {
        return [
            'event_type' => $event->type,
            'customer_location' => $event->customer_location,
            'timestamp' => $event->created_at->toISOString(),
            'event_data' => $event->data,
        ];
    }

    public function markAsDisplayed(Notification $notification): void
    {
        $notification->markAsDisplayed();
    }

    public function deactivateNotification(Notification $notification): void
    {
        $notification->update(['is_active' => false]);
    }

    public function cleanupExpiredNotifications(): int
    {
        return Notification::where('expires_at', '<', now())
            ->update(['is_active' => false]);
    }
}