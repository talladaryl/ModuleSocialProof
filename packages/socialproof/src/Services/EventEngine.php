<?php

namespace Packages\SocialProof\Services;

use Packages\SocialProof\Models\Event;
use Packages\SocialProof\Models\Widget;
use Packages\SocialProof\Jobs\ProcessEventJob;
use Illuminate\Support\Facades\Queue;

class EventEngine
{
    public function __construct(
        private NotificationService $notificationService
    ) {}

    public function trackEvent(Widget $widget, string $type, array $data = []): Event
    {
        $event = Event::create([
            'widget_id' => $widget->id,
            'type' => $type,
            'data' => $data,
            'customer_name' => $data['customer_name'] ?? null,
            'customer_email' => $data['customer_email'] ?? null,
            'customer_location' => $data['customer_location'] ?? null,
            'ip_address' => request()->ip(),
            'user_agent' => request()->userAgent(),
        ]);

        // Process event asynchronously if queue is enabled
        if (config('socialproof.events.queue')) {
            Queue::push(new ProcessEventJob($event));
        } else {
            $this->processEvent($event);
        }

        return $event;
    }

    public function processEvent(Event $event): void
    {
        if ($event->processed_at) {
            return; // Already processed
        }

        $widget = $event->widget;
        $settings = $widget->settings ?? [];
        $enabledTypes = $settings['enabled_types'] ?? [];

        // Check if this event type is enabled for the widget
        if (!in_array($event->type, $enabledTypes)) {
            $event->markAsProcessed();
            return;
        }

        // Create notification based on event
        $this->notificationService->createFromEvent($event);

        $event->markAsProcessed();
    }

    public function getRecentEvents(Widget $widget, int $minutes = 60): \Illuminate\Database\Eloquent\Collection
    {
        return $widget->events()
            ->recent($minutes)
            ->orderBy('created_at', 'desc')
            ->get();
    }

    public function getEventStats(Widget $widget, int $days = 7): array
    {
        $events = $widget->events()
            ->where('created_at', '>=', now()->subDays($days))
            ->get();

        return [
            'total' => $events->count(),
            'by_type' => $events->groupBy('type')->map->count(),
            'by_day' => $events->groupBy(function ($event) {
                return $event->created_at->format('Y-m-d');
            })->map->count(),
        ];
    }

    public function cleanupOldEvents(): int
    {
        $retentionDays = config('socialproof.events.retention_days', 30);
        
        return Event::where('created_at', '<', now()->subDays($retentionDays))
            ->delete();
    }
}