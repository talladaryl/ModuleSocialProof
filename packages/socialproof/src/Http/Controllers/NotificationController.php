<?php

namespace Packages\SocialProof\Http\Controllers;

use Illuminate\Http\Request;
use SocialProof\Models\Notification;
use SocialProof\Http\Requests\StoreNotificationRequest;
use SocialProof\Http\Requests\UpdateNotificationRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\View\View;

class NotificationController extends Controller
{
    public function index(Request $request): View|JsonResponse
    {
        $notifications = Notification::query()
            ->with(['widget', 'campaign'])
            ->when($request->search, function ($query, $search) {
                $query->where('title', 'like', "%{$search}%")
                      ->orWhere('message', 'like', "%{$search}%");
            })
            ->when($request->type, function ($query, $type) {
                $query->where('type', $type);
            })
            ->when($request->widget_id, function ($query, $widgetId) {
                $query->where('widget_id', $widgetId);
            })
            ->when($request->campaign_id, function ($query, $campaignId) {
                $query->where('campaign_id', $campaignId);
            })
            ->when($request->has('is_active'), function ($query) use ($request) {
                $query->where('is_active', $request->boolean('is_active'));
            })
            ->orderBy($request->get('sort', 'created_at'), $request->get('direction', 'desc'))
            ->paginate($request->get('per_page', 15));

        if ($request->expectsJson()) {
            return response()->json($notifications);
        }

        return view('socialproof::admin.notifications.index', compact('notifications'));
    }

    public function show(Notification $notification): View|JsonResponse
    {
        $notification->load(['widget', 'campaign']);
        
        if (request()->expectsJson()) {
            return response()->json($notification);
        }

        return view('socialproof::admin.notifications.show', compact('notification'));
    }

    public function create(): View
    {
        return view('socialproof::admin.notifications.create');
    }

    public function store(StoreNotificationRequest $request): JsonResponse
    {
        $notification = Notification::create($request->validated());

        return response()->json([
            'message' => 'Notification créée avec succès',
            'notification' => $notification->load(['widget', 'campaign'])
        ], 201);
    }

    public function edit(Notification $notification): View
    {
        $notification->load(['widget', 'campaign']);
        return view('socialproof::admin.notifications.edit', compact('notification'));
    }

    public function update(UpdateNotificationRequest $request, Notification $notification): JsonResponse
    {
        $notification->update($request->validated());

        return response()->json([
            'message' => 'Notification mise à jour avec succès',
            'notification' => $notification->fresh(['widget', 'campaign'])
        ]);
    }

    public function destroy(Notification $notification): JsonResponse
    {
        $notification->delete();

        return response()->json([
            'message' => 'Notification supprimée avec succès'
        ]);
    }

    public function updateStatus(Request $request, Notification $notification): JsonResponse
    {
        $request->validate([
            'is_active' => 'required|boolean'
        ]);

        $notification->update(['is_active' => $request->is_active]);

        return response()->json([
            'message' => 'Statut de la notification mis à jour avec succès',
            'notification' => $notification->fresh()
        ]);
    }

    public function bulkUpdate(Request $request): JsonResponse
    {
        $request->validate([
            'notification_ids' => 'required|array',
            'notification_ids.*' => 'exists:sp_notifications,notification_id',
            'action' => 'required|in:activate,deactivate,delete',
        ]);

        $query = Notification::whereIn('notification_id', $request->notification_ids);

        switch ($request->action) {
            case 'activate':
                $query->update(['is_active' => true]);
                $message = 'Notifications activées avec succès';
                break;
            case 'deactivate':
                $query->update(['is_active' => false]);
                $message = 'Notifications désactivées avec succès';
                break;
            case 'delete':
                $count = $query->count();
                $query->delete();
                $message = "{$count} notifications supprimées avec succès";
                break;
        }

        return response()->json(['message' => $message]);
    }

    public function duplicate(Notification $notification): JsonResponse
    {
        $newNotification = $notification->replicate();
        $newNotification->title = $notification->title . ' (Copie)';
        $newNotification->is_active = false;
        $newNotification->save();

        return response()->json([
            'message' => 'Notification dupliquée avec succès',
            'notification' => $newNotification->load(['widget', 'campaign'])
        ]);
    }
}