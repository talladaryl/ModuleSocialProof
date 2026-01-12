<?php

namespace Packages\SocialProof\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Inertia\Inertia;
use Packages\SocialProof\Models\Campaign;
use Packages\SocialProof\Models\Domain;
use Packages\SocialProof\Models\NotificationExtended;
use Packages\SocialProof\Models\TrackNotification;
use Packages\SocialProof\Services\CampaignService;
use Packages\SocialProof\Http\Requests\StoreCampaignRequest;
use Packages\SocialProof\Http\Requests\UpdateCampaignRequest;

class CampaignController extends Controller
{
    public function __construct(
        private CampaignService $campaignService
    ) {}

    public function index(Request $request)
    {
        $campaigns = Campaign::forUser(auth()->id())
            ->withCount(['notifications'])
            ->when($request->search, function ($query, $search) {
                $query->where('name', 'like', "%{$search}%")
                      ->orWhere('domain', 'like', "%{$search}%");
            })
            ->when($request->status, function ($query, $status) {
                $query->where('is_enabled', $status === 'enabled');
            })
            ->orderBy($request->get('sort', 'campaign_id'), $request->get('direction', 'desc'))
            ->paginate(15);

        return Inertia::render('socialproof/campaigns/index', [
            'campaigns' => $campaigns,
            'filters' => $request->only(['search', 'status', 'sort', 'direction']),
        ]);
    }

    public function create()
    {
        $domains = Domain::forUser(auth()->id())->enabled()->get();

        return Inertia::render('socialproof/campaigns/create', [
            'domains' => $domains,
        ]);
    }

    public function store(StoreCampaignRequest $request)
    {
        $campaign = $this->campaignService->createCampaign([
            ...$request->validated(),
            'user_id' => auth()->id(),
        ]);

        return redirect()
            ->route('socialproof.campaigns.show', $campaign)
            ->with('success', 'Campaign created successfully!');
    }

    public function show(Campaign $campaign, Request $request)
    {
        $this->authorize('view', $campaign);

        $method = $request->get('method', 'settings');

        $campaign->load(['domain', 'notifications' => function ($query) {
            $query->latest()->limit(10);
        }]);

        $data = [
            'campaign' => $campaign,
            'method' => $method,
        ];

        switch ($method) {
            case 'settings':
                $notifications = NotificationExtended::where('campaign_id', $campaign->campaign_id)
                    ->where('user_id', auth()->id())
                    ->when($request->search, function ($query, $search) {
                        $query->where('name', 'like', "%{$search}%");
                    })
                    ->when($request->type, function ($query, $type) {
                        $query->where('type', $type);
                    })
                    ->when($request->status !== null, function ($query) use ($request) {
                        $query->where('is_enabled', $request->status === 'enabled');
                    })
                    ->orderBy($request->get('sort', 'notification_id'), $request->get('direction', 'desc'))
                    ->paginate(15);

                $data['notifications'] = $notifications;
                $data['notification_types'] = NotificationExtended::getAvailableTypes();
                $data['filters'] = $request->only(['search', 'type', 'status', 'sort', 'direction']);
                break;

            case 'statistics':
                $stats = $this->campaignService->getCampaignStatistics($campaign, $request);
                $data = array_merge($data, $stats);
                break;
        }

        return Inertia::render('socialproof/campaigns/show', $data);
    }

    public function edit(Campaign $campaign)
    {
        $this->authorize('update', $campaign);

        $domains = Domain::forUser(auth()->id())->enabled()->get();

        return Inertia::render('socialproof/campaigns/edit', [
            'campaign' => $campaign,
            'domains' => $domains,
        ]);
    }

    public function update(UpdateCampaignRequest $request, Campaign $campaign)
    {
        $this->authorize('update', $campaign);

        $this->campaignService->updateCampaign($campaign, $request->validated());

        return redirect()
            ->route('socialproof.campaigns.show', $campaign)
            ->with('success', 'Campaign updated successfully!');
    }

    public function destroy(Campaign $campaign)
    {
        $this->authorize('delete', $campaign);

        $campaign->delete();

        return redirect()
            ->route('socialproof.campaigns.index')
            ->with('success', 'Campaign deleted successfully!');
    }

    public function duplicate(Campaign $campaign)
    {
        $this->authorize('view', $campaign);

        $newCampaign = $this->campaignService->duplicateCampaign($campaign);

        return redirect()
            ->route('socialproof.campaigns.show', $newCampaign)
            ->with('success', 'Campaign duplicated successfully!');
    }

    public function regeneratePixelKey(Campaign $campaign)
    {
        $this->authorize('update', $campaign);

        $campaign->generatePixelKey();

        return back()->with('success', 'Pixel key regenerated successfully!');
    }

    public function bulkAction(Request $request): JsonResponse
    {
        $request->validate([
            'action' => 'required|in:delete,enable,disable',
            'campaigns' => 'required|array|min:1',
            'campaigns.*' => 'exists:sp_campaigns,campaign_id',
        ]);

        $campaigns = Campaign::whereIn('campaign_id', $request->campaigns)
            ->forUser(auth()->id())
            ->get();

        foreach ($campaigns as $campaign) {
            switch ($request->action) {
                case 'delete':
                    $this->authorize('delete', $campaign);
                    $campaign->delete();
                    break;
                case 'enable':
                    $this->authorize('update', $campaign);
                    $campaign->update(['is_enabled' => true]);
                    break;
                case 'disable':
                    $this->authorize('update', $campaign);
                    $campaign->update(['is_enabled' => false]);
                    break;
            }
        }

        $message = match ($request->action) {
            'delete' => 'Campaigns deleted successfully!',
            'enable' => 'Campaigns enabled successfully!',
            'disable' => 'Campaigns disabled successfully!',
        };

        return response()->json(['message' => $message]);
    }

    public function resetStatistics(Campaign $campaign, Request $request)
    {
        $this->authorize('update', $campaign);

        $request->validate([
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
        ]);

        $this->campaignService->resetCampaignStatistics(
            $campaign,
            $request->start_date,
            $request->end_date
        );

        return back()->with('success', 'Statistics reset successfully!');
    }
}