<?php

namespace Packages\SocialProof\Http\Controllers\Api;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Packages\SocialProof\Http\Controllers\Controller;
use Packages\SocialProof\Models\Notification;
use Packages\SocialProof\Services\NotificationService;
use Packages\SocialProof\Services\WidgetService;

class NotificationController extends Controller
{
    public function __construct(
        private NotificationService $notificationService,
        private WidgetService $widgetService
    ) {}

    public function index(Request $request, string $apiKey): JsonResponse
    {
        $widget = $this->widgetService->findByApiKey($apiKey);
        
        if (!$widget) {
            return response()->json(['error' => 'Invalid API key'], 401);
        }

        $limit = $request->get('limit', $widget->settings['max_notifications'] ?? 5);
        $notifications = $this->notificationService->getActiveNotifications($widget, $limit);

        return response()->json([
            'notifications' => $notifications->map(function ($notification) {
                return [
                    'id' => $notification->id,
                    'type' => $notification->type,
                    'title' => $notification->title,
                    'message' => $notification->message,
                    'icon' => $notification->icon,
                    'data' => $notification->data,
                    'created_at' => $notification->created_at->toISOString(),
                ];
            }),
            'widget_settings' => $widget->settings,
        ]);
    }

    public function markDisplayed(Request $request, string $apiKey, Notification $notification): JsonResponse
    {
        $widget = $this->widgetService->findByApiKey($apiKey);
        
        if (!$widget || $notification->widget_id !== $widget->id) {
            return response()->json(['error' => 'Invalid API key or notification'], 401);
        }

        $this->notificationService->markAsDisplayed($notification);

        return response()->json([
            'success' => true,
            'message' => 'Notification marked as displayed'
        ]);
    }
}