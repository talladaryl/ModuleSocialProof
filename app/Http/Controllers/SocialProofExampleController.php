<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use YourCompany\SocialProof\Services\EventEngine;
use YourCompany\SocialProof\Services\WidgetService;

class SocialProofExampleController extends Controller
{
    public function __construct(
        private EventEngine $eventEngine,
        private WidgetService $widgetService
    ) {}

    /**
     * Exemple d'utilisation du package SocialProof
     */
    public function trackPurchase(Request $request)
    {
        // Récupérer le widget par API key
        $widget = $this->widgetService->findByApiKey($request->get('api_key'));
        
        if (!$widget) {
            return response()->json(['error' => 'Invalid API key'], 401);
        }

        // Tracker un événement d'achat
        $event = $this->eventEngine->trackEvent($widget, 'purchase', [
            'customer_name' => $request->get('customer_name'),
            'customer_email' => $request->get('customer_email'),
            'product_name' => $request->get('product_name'),
            'customer_location' => $request->get('customer_location', 'France'),
        ]);

        return response()->json([
            'success' => true,
            'event_id' => $event->id,
            'message' => 'Purchase tracked successfully'
        ]);
    }

    /**
     * Exemple d'intégration avec un système d'inscription
     */
    public function trackSignup(Request $request)
    {
        $widget = $this->widgetService->findByApiKey($request->get('api_key'));
        
        if (!$widget) {
            return response()->json(['error' => 'Invalid API key'], 401);
        }

        // Tracker une inscription
        $event = $this->eventEngine->trackEvent($widget, 'signup', [
            'customer_name' => $request->get('customer_name'),
            'customer_email' => $request->get('customer_email'),
            'customer_location' => $request->get('customer_location', 'France'),
        ]);

        return response()->json([
            'success' => true,
            'event_id' => $event->id,
            'message' => 'Signup tracked successfully'
        ]);
    }

    /**
     * Exemple d'intégration avec un système d'avis
     */
    public function trackReview(Request $request)
    {
        $widget = $this->widgetService->findByApiKey($request->get('api_key'));
        
        if (!$widget) {
            return response()->json(['error' => 'Invalid API key'], 401);
        }

        // Tracker un avis
        $event = $this->eventEngine->trackEvent($widget, 'review', [
            'customer_name' => $request->get('customer_name'),
            'rating' => $request->get('rating', 5),
            'customer_location' => $request->get('customer_location', 'France'),
        ]);

        return response()->json([
            'success' => true,
            'event_id' => $event->id,
            'message' => 'Review tracked successfully'
        ]);
    }
}