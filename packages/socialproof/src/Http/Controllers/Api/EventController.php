<?php

namespace Packages\SocialProof\Http\Controllers\Api;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Packages\SocialProof\Http\Controllers\Controller;
use Packages\SocialProof\Http\Requests\TrackEventRequest;
use Packages\SocialProof\Services\EventEngine;
use Packages\SocialProof\Services\WidgetService;

class EventController extends Controller
{
    public function __construct(
        private EventEngine $eventEngine,
        private WidgetService $widgetService
    ) {}

    public function track(TrackEventRequest $request, string $apiKey): JsonResponse
    {
        $widget = $this->widgetService->findByApiKey($apiKey);
        
        if (!$widget) {
            return response()->json(['error' => 'Invalid API key'], 401);
        }

        // Validate domain
        $origin = $request->header('Origin') ?? $request->header('Referer');
        if ($origin && !$this->widgetService->validateDomain($origin, $widget)) {
            return response()->json(['error' => 'Domain not authorized'], 403);
        }

        $event = $this->eventEngine->trackEvent(
            $widget,
            $request->validated('type'),
            $request->validated('data', [])
        );

        return response()->json([
            'success' => true,
            'event_id' => $event->id,
            'message' => 'Event tracked successfully'
        ]);
    }

    public function index(Request $request, string $apiKey): JsonResponse
    {
        $widget = $this->widgetService->findByApiKey($apiKey);
        
        if (!$widget) {
            return response()->json(['error' => 'Invalid API key'], 401);
        }

        $minutes = $request->get('minutes', 60);
        $events = $this->eventEngine->getRecentEvents($widget, $minutes);

        return response()->json([
            'events' => $events->map(function ($event) {
                return [
                    'id' => $event->id,
                    'type' => $event->type,
                    'customer_name' => $event->formatted_customer_name,
                    'customer_location' => $event->customer_location,
                    'data' => $event->data,
                    'created_at' => $event->created_at->toISOString(),
                ];
            }),
            'total' => $events->count(),
        ]);
    }
}