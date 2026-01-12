<?php

namespace Packages\SocialProof\Http\Controllers\Api;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Packages\SocialProof\Http\Controllers\Controller;
use Packages\SocialProof\Services\WidgetService;

class WidgetController extends Controller
{
    public function __construct(
        private WidgetService $widgetService
    ) {}

    public function config(string $apiKey): JsonResponse
    {
        $widget = $this->widgetService->findByApiKey($apiKey);
        
        if (!$widget) {
            return response()->json(['error' => 'Invalid API key'], 401);
        }

        return response()->json([
            'config' => $this->widgetService->getWidgetConfig($widget)
        ]);
    }

    public function stats(Request $request, string $apiKey): JsonResponse
    {
        $widget = $this->widgetService->findByApiKey($apiKey);
        
        if (!$widget) {
            return response()->json(['error' => 'Invalid API key'], 401);
        }

        $days = $request->get('days', 7);
        $stats = $this->widgetService->getWidgetStats($widget, $days);

        return response()->json([
            'stats' => $stats,
            'period' => "{$days} days"
        ]);
    }
}