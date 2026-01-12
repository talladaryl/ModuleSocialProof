<?php

namespace Packages\SocialProof\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Inertia\Inertia;
use Packages\SocialProof\Models\NotificationHandler;
use Packages\SocialProof\Services\NotificationHandlerService;
use Packages\SocialProof\Http\Requests\StoreNotificationHandlerRequest;
use Packages\SocialProof\Http\Requests\UpdateNotificationHandlerRequest;

class NotificationHandlerController extends Controller
{
    public function __construct(
        private NotificationHandlerService $handlerService
    ) {}

    public function index(Request $request)
    {
        $handlers = NotificationHandler::forUser(auth()->id())
            ->when($request->search, function ($query, $search) {
                $query->where('name', 'like', "%{$search}%");
            })
            ->when($request->type, function ($query, $type) {
                $query->where('type', $type);
            })
            ->when($request->status !== null, function ($query) use ($request) {
                $query->where('is_enabled', $request->status === 'enabled');
            })
            ->orderBy($request->get('sort', 'notification_handler_id'), $request->get('direction', 'desc'))
            ->paginate(15);

        return Inertia::render('socialproof/notification-handlers/index', [
            'handlers' => $handlers,
            'handler_types' => NotificationHandler::getAvailableTypes(),
            'filters' => $request->only(['search', 'type', 'status', 'sort', 'direction']),
        ]);
    }

    public function create()
    {
        return Inertia::render('socialproof/notification-handlers/create', [
            'handler_types' => NotificationHandler::getAvailableTypes(),
        ]);
    }

    public function store(StoreNotificationHandlerRequest $request)
    {
        $handler = NotificationHandler::create([
            ...$request->validated(),
            'user_id' => auth()->id(),
        ]);

        return redirect()
            ->route('socialproof.notification-handlers.show', $handler)
            ->with('success', 'Notification handler created successfully!');
    }

    public function show(NotificationHandler $handler)
    {
        $this->authorize('view', $handler);

        return Inertia::render('socialproof/notification-handlers/show', [
            'handler' => $handler,
        ]);
    }

    public function edit(NotificationHandler $handler)
    {
        $this->authorize('update', $handler);

        return Inertia::render('socialproof/notification-handlers/edit', [
            'handler' => $handler,
            'handler_types' => NotificationHandler::getAvailableTypes(),
        ]);
    }

    public function update(UpdateNotificationHandlerRequest $request, NotificationHandler $handler)
    {
        $this->authorize('update', $handler);

        $handler->update($request->validated());

        return redirect()
            ->route('socialproof.notification-handlers.show', $handler)
            ->with('success', 'Notification handler updated successfully!');
    }

    public function destroy(NotificationHandler $handler)
    {
        $this->authorize('delete', $handler);

        $handler->delete();

        return redirect()
            ->route('socialproof.notification-handlers.index')
            ->with('success', 'Notification handler deleted successfully!');
    }

    public function test(NotificationHandler $handler)
    {
        $this->authorize('update', $handler);

        $testData = [
            'event_type' => 'test',
            'message' => 'This is a test notification from Social Proof',
            'timestamp' => now()->toISOString(),
        ];

        try {
            $this->handlerService->send($handler, $testData);
            
            return back()->with('success', 'Test notification sent successfully!');
        } catch (\Exception $e) {
            return back()->with('error', 'Failed to send test notification: ' . $e->getMessage());
        }
    }

    public function bulkAction(Request $request): JsonResponse
    {
        $request->validate([
            'action' => 'required|in:delete,enable,disable',
            'handlers' => 'required|array|min:1',
            'handlers.*' => 'exists:sp_notification_handlers,notification_handler_id',
        ]);

        $handlers = NotificationHandler::whereIn('notification_handler_id', $request->handlers)
            ->forUser(auth()->id())
            ->get();

        foreach ($handlers as $handler) {
            switch ($request->action) {
                case 'delete':
                    $this->authorize('delete', $handler);
                    $handler->delete();
                    break;
                case 'enable':
                    $this->authorize('update', $handler);
                    $handler->update(['is_enabled' => true]);
                    break;
                case 'disable':
                    $this->authorize('update', $handler);
                    $handler->update(['is_enabled' => false]);
                    break;
            }
        }

        $message = match ($request->action) {
            'delete' => 'Notification handlers deleted successfully!',
            'enable' => 'Notification handlers enabled successfully!',
            'disable' => 'Notification handlers disabled successfully!',
        };

        return response()->json(['message' => $message]);
    }
}