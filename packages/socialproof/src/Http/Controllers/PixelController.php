<?php

namespace Packages\SocialProof\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Packages\SocialProof\Models\Campaign;
use Packages\SocialProof\Models\NotificationExtended;
use Packages\SocialProof\Services\PixelService;
use Packages\SocialProof\Services\TrackingService;

class PixelController extends Controller
{
    public function __construct(
        private PixelService $pixelService,
        private TrackingService $trackingService
    ) {}

    public function index(Request $request, string $pixelKey)
    {
        $secondsToCache = config('socialproof.pixel_cache', 3600);
        
        $response = new Response();
        $response->header('Content-Type', 'application/javascript');
        $response->header('Expires', gmdate('D, d M Y H:i:s', time() + $secondsToCache) . ' GMT');
        $response->header('Pragma', 'cache');
        $response->header('Cache-Control', 'max-age=' . $secondsToCache);

        // Check against bots
        if ($this->pixelService->isCrawler($request)) {
            return $response->setContent("console.log('Social Proof: Bot usage detected, pixel stopped.');");
        }

        // Get campaign by pixel key
        $campaign = Campaign::where('pixel_key', $pixelKey)->first();

        if (!$campaign) {
            return $response->setContent("console.log('Social Proof: No campaign found for this pixel.');");
        }

        if (!$campaign->is_enabled) {
            return $response->setContent("console.log('Social Proof: Campaign disabled.');");
        }

        // Check user status and limits
        $user = $campaign->user ?? null;
        if (!$user || $user->status !== 1) {
            return $response->setContent("console.log('Social Proof: Campaign owner not found or disabled.');");
        }

        // Check domain restrictions
        if (!$this->pixelService->isDomainAllowed($campaign, $request)) {
            return $response->setContent("console.log('Social Proof: Domain not allowed.');");
        }

        // Check IP restrictions
        if ($this->pixelService->isIpExcluded($user, $request)) {
            return $response->setContent("console.log('Social Proof: Tracking disabled for this IP.');");
        }

        // Check impression limits
        if ($this->pixelService->hasExceededLimits($user)) {
            return $response->setContent("console.log('Social Proof: Impression limits exceeded.');");
        }

        // Get notifications for this campaign
        $notifications = $this->pixelService->getActiveNotifications($campaign, $request);

        // Generate JavaScript code
        $jsCode = $this->pixelService->generatePixelScript($campaign, $notifications, $request);

        return $response->setContent($jsCode);
    }

    public function track(Request $request)
    {
        $request->validate([
            'pixel_key' => 'required|string',
            'notification_id' => 'required|integer',
            'type' => 'required|string|in:impression,hover,click,form_submission',
            'path' => 'required|string',
            'data' => 'sometimes|array',
        ]);

        $campaign = Campaign::where('pixel_key', $request->pixel_key)->first();

        if (!$campaign || !$campaign->is_enabled) {
            return response()->json(['error' => 'Invalid campaign'], 400);
        }

        $notification = NotificationExtended::where('notification_id', $request->notification_id)
            ->where('campaign_id', $campaign->campaign_id)
            ->where('is_enabled', true)
            ->first();

        if (!$notification) {
            return response()->json(['error' => 'Invalid notification'], 400);
        }

        // Track the event
        $this->trackingService->trackNotificationEvent(
            $notification,
            $request->type,
            $request->path,
            $request->ip(),
            $request->data ?? []
        );

        return response()->json(['success' => true]);
    }

    public function conversion(Request $request)
    {
        $request->validate([
            'pixel_key' => 'required|string',
            'notification_id' => 'required|integer',
            'data' => 'required|array',
            'path' => 'required|string',
        ]);

        $campaign = Campaign::where('pixel_key', $request->pixel_key)->first();

        if (!$campaign || !$campaign->is_enabled) {
            return response()->json(['error' => 'Invalid campaign'], 400);
        }

        $notification = NotificationExtended::where('notification_id', $request->notification_id)
            ->where('campaign_id', $campaign->campaign_id)
            ->where('is_enabled', true)
            ->first();

        if (!$notification) {
            return response()->json(['error' => 'Invalid notification'], 400);
        }

        // Track the conversion
        $this->trackingService->trackConversion(
            $notification,
            $request->data,
            $request->path,
            $request->ip(),
            $request->header('User-Agent')
        );

        return response()->json(['success' => true]);
    }

    public function webhook(Request $request, string $pixelKey)
    {
        $campaign = Campaign::where('pixel_key', $pixelKey)->first();

        if (!$campaign || !$campaign->is_enabled) {
            return response()->json(['error' => 'Invalid campaign'], 400);
        }

        // Process webhook data
        $this->trackingService->processWebhookData($campaign, $request->all());

        return response()->json(['success' => true]);
    }
}