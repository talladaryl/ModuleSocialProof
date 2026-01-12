<?php

namespace Packages\SocialProof\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Inertia\Inertia;
use Packages\SocialProof\Models\NotificationExtended;
use Packages\SocialProof\Models\Campaign;
use Packages\SocialProof\Models\NotificationHandler;
use Packages\SocialProof\Models\TrackConversion;
use Packages\SocialProof\Services\NotificationExtendedService;
use Packages\SocialProof\Http\Requests\StoreNotificationExtendedRequest;
use Packages\SocialProof\Http\Requests\UpdateNotificationExtendedRequest;

class NotificationExtendedController extends Controller
{
    public function __construct(
        private NotificationExtendedService $notificationService
    ) {}

    public function index(Request $request)
    {
        $notifications = NotificationExtended::forUser(auth()->id())
            ->with(['campaign'])
            ->when($request->search, function ($query, $search) {
                $query->where('name', 'like', "%{$search}%");
            })
            ->when($request->type, function ($query, $type) {
                $query->where('type', $type);
            })
            ->when($request->campaign_id, function ($query, $campaignId) {
                $query->where('campaign_id', $campaignId);
            })
            ->when($request->status !== null, function ($query) use ($request) {
                $query->where('is_enabled', $request->status === 'enabled');
            })
            ->orderBy($request->get('sort', 'notification_id'), $request->get('direction', 'desc'))
            ->paginate(15);

        $campaigns = Campaign::forUser(auth()->id())->get(['campaign_id', 'name']);

        return Inertia::render('socialproof/notifications/index', [
            'notifications' => $notifications,
            'campaigns' => $campaigns,
            'notification_types' => NotificationExtended::getAvailableTypes(),
            'filters' => $request->only(['search', 'type', 'campaign_id', 'status', 'sort', 'direction']),
        ]);
    }

    public function create(Request $request)
    {
        $campaigns = Campaign::forUser(auth()->id())->get(['campaign_id', 'name']);
        $notificationHandlers = NotificationHandler::forUser(auth()->id())->enabled()->get();

        return Inertia::render('socialproof/notifications/create', [
            'campaigns' => $campaigns,
            'notification_handlers' => $notificationHandlers,
            'notification_types' => NotificationExtended::getAvailableTypes(),
            'selected_campaign_id' => $request->get('campaign_id'),
        ]);
    }

    public function store(StoreNotificationExtendedRequest $request)
    {
        $notification = $this->notificationService->createNotification([
            ...$request->validated(),
            'user_id' => auth()->id(),
        ]);

        return redirect()
            ->route('socialproof.notifications.show', $notification)
            ->with('success', 'Notification created successfully!');
    }

    public function show(NotificationExtended $notification, Request $request)
    {
        $this->authorize('view', $notification);

        $method = $request->get('method', 'settings');

        $notification->load(['campaign']);

        $data = [
            'notification' => $notification,
            'method' => $method,
        ];

        switch ($method) {
            case 'settings':
                $notificationHandlers = NotificationHandler::forUser(auth()->id())->enabled()->get();
                $data['notification_handlers'] = $notificationHandlers;
                break;

            case 'statistics':
                $stats = $this->notificationService->getNotificationStatistics($notification, $request);
                $data = array_merge($data, $stats);
                break;

            case 'data':
                if (in_array($notification->type, [
                    NotificationExtended::TYPE_EMAIL_COLLECTOR,
                    NotificationExtended::TYPE_CONVERSIONS,
                    NotificationExtended::TYPE_CONVERSIONS_COUNTER,
                    NotificationExtended::TYPE_REQUEST_COLLECTOR,
                    NotificationExtended::TYPE_COUNTDOWN_COLLECTOR,
                    NotificationExtended::TYPE_COLLECTOR_BAR,
                    NotificationExtended::TYPE_COLLECTOR_MODAL,
                    NotificationExtended::TYPE_COLLECTOR_TWO_MODAL,
                    NotificationExtended::TYPE_TEXT_FEEDBACK,
                    NotificationExtended::TYPE_REVIEWS,
                ])) {
                    $conversions = TrackConversion::forNotification($notification->notification_id)
                        ->when($request->start_date && $request->end_date, function ($query) use ($request) {
                            $query->whereBetween('created_at', [$request->start_date, $request->end_date]);
                        })
                        ->orderBy('created_at', 'desc')
                        ->paginate(50);

                    $data['conversions'] = $conversions;
                }
                break;
        }

        return Inertia::render('socialproof/notifications/show', $data);
    }

    public function edit(NotificationExtended $notification)
    {
        $this->authorize('update', $notification);

        $campaigns = Campaign::forUser(auth()->id())->get(['campaign_id', 'name']);
        $notificationHandlers = NotificationHandler::forUser(auth()->id())->enabled()->get();

        return Inertia::render('socialproof/notifications/edit', [
            'notification' => $notification,
            'campaigns' => $campaigns,
            'notification_handlers' => $notificationHandlers,
            'notification_types' => NotificationExtended::getAvailableTypes(),
        ]);
    }

    public function update(UpdateNotificationExtendedRequest $request, NotificationExtended $notification)
    {
        $this->authorize('update', $notification);

        $this->notificationService->updateNotification($notification, $request->validated());

        return redirect()
            ->route('socialproof.notifications.show', $notification)
            ->with('success', 'Notification updated successfully!');
    }

    public function destroy(NotificationExtended $notification)
    {
        $this->authorize('delete', $notification);

        $notification->delete();

        return redirect()
            ->route('socialproof.notifications.index')
            ->with('success', 'Notification deleted successfully!');
    }

    public function duplicate(NotificationExtended $notification)
    {
        $this->authorize('view', $notification);

        $newNotification = $this->notificationService->duplicateNotification($notification);

        return redirect()
            ->route('socialproof.notifications.show', $newNotification)
            ->with('success', 'Notification duplicated successfully!');
    }

    public function bulkAction(Request $request): JsonResponse
    {
        $request->validate([
            'action' => 'required|in:delete,enable,disable',
            'notifications' => 'required|array|min:1',
            'notifications.*' => 'exists:sp_notifications_extended,notification_id',
        ]);

        $notifications = NotificationExtended::whereIn('notification_id', $request->notifications)
            ->forUser(auth()->id())
            ->get();

        foreach ($notifications as $notification) {
            switch ($request->action) {
                case 'delete':
                    $this->authorize('delete', $notification);
                    $notification->delete();
                    break;
                case 'enable':
                    $this->authorize('update', $notification);
                    $notification->update(['is_enabled' => true]);
                    break;
                case 'disable':
                    $this->authorize('update', $notification);
                    $notification->update(['is_enabled' => false]);
                    break;
            }
        }

        $message = match ($request->action) {
            'delete' => 'Notifications deleted successfully!',
            'enable' => 'Notifications enabled successfully!',
            'disable' => 'Notifications disabled successfully!',
        };

        return response()->json(['message' => $message]);
    }

    public function resetStatistics(NotificationExtended $notification, Request $request)
    {
        $this->authorize('update', $notification);

        $request->validate([
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
        ]);

        $this->notificationService->resetNotificationStatistics(
            $notification,
            $request->start_date,
            $request->end_date
        );

        return back()->with('success', 'Statistics reset successfully!');
    }

    public function importData(NotificationExtended $notification, Request $request)
    {
        $this->authorize('update', $notification);

        $request->validate([
            'data' => 'required|array',
            'data.*.name' => 'required|string|max:255',
            'data.*.email' => 'nullable|email|max:255',
            'data.*.location' => 'nullable|string|max:255',
        ]);

        $this->notificationService->importConversionData($notification, $request->data);

        return back()->with('success', 'Data imported successfully!');
    }

    public function exportData(NotificationExtended $notification, Request $request)
    {
        $this->authorize('view', $notification);

        $format = $request->get('format', 'json');

        return $this->notificationService->exportConversionData($notification, $format);
    }
}