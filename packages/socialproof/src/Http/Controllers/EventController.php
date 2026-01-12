<?php

namespace Packages\SocialProof\Http\Controllers;

use Illuminate\Http\Request;
use SocialProof\Models\Event;
use SocialProof\Http\Requests\StoreEventRequest;
use SocialProof\Http\Requests\UpdateEventRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\View\View;

class EventController extends Controller
{
    public function index(Request $request): View|JsonResponse
    {
        $events = Event::query()
            ->with(['site', 'widget'])
            ->when($request->search, function ($query, $search) {
                $query->where('event_type', 'like', "%{$search}%")
                      ->orWhere('event_name', 'like', "%{$search}%")
                      ->orWhere('visitor_id', 'like', "%{$search}%");
            })
            ->when($request->event_type, function ($query, $type) {
                $query->where('event_type', $type);
            })
            ->when($request->site_id, function ($query, $siteId) {
                $query->where('site_id', $siteId);
            })
            ->when($request->widget_id, function ($query, $widgetId) {
                $query->where('widget_id', $widgetId);
            })
            ->when($request->date_from, function ($query, $dateFrom) {
                $query->where('created_at', '>=', $dateFrom);
            })
            ->when($request->date_to, function ($query, $dateTo) {
                $query->where('created_at', '<=', $dateTo);
            })
            ->orderBy($request->get('sort', 'created_at'), $request->get('direction', 'desc'))
            ->paginate($request->get('per_page', 15));

        if ($request->expectsJson()) {
            return response()->json($events);
        }

        return view('socialproof::admin.events.index', compact('events'));
    }

    public function show(Event $event): View|JsonResponse
    {
        $event->load(['site', 'widget']);
        
        if (request()->expectsJson()) {
            return response()->json($event);
        }

        return view('socialproof::admin.events.show', compact('event'));
    }

    public function store(StoreEventRequest $request): JsonResponse
    {
        $event = Event::create($request->validated());

        return response()->json([
            'message' => 'Événement créé avec succès',
            'event' => $event->load(['site', 'widget'])
        ], 201);
    }

    public function update(UpdateEventRequest $request, Event $event): JsonResponse
    {
        $event->update($request->validated());

        return response()->json([
            'message' => 'Événement mis à jour avec succès',
            'event' => $event->fresh(['site', 'widget'])
        ]);
    }

    public function destroy(Event $event): JsonResponse
    {
        $event->delete();

        return response()->json([
            'message' => 'Événement supprimé avec succès'
        ]);
    }

    public function bulkDelete(Request $request): JsonResponse
    {
        $request->validate([
            'event_ids' => 'required|array',
            'event_ids.*' => 'exists:sp_events,event_id'
        ]);

        $deletedCount = Event::whereIn('event_id', $request->event_ids)->delete();

        return response()->json([
            'message' => "{$deletedCount} événements supprimés avec succès"
        ]);
    }

    public function stats(Request $request): JsonResponse
    {
        $request->validate([
            'date_from' => 'nullable|date',
            'date_to' => 'nullable|date|after_or_equal:date_from',
            'site_id' => 'nullable|exists:sp_sites,site_id',
            'widget_id' => 'nullable|exists:sp_widgets,widget_id'
        ]);

        $query = Event::query();

        if ($request->date_from) {
            $query->where('created_at', '>=', $request->date_from);
        }

        if ($request->date_to) {
            $query->where('created_at', '<=', $request->date_to);
        }

        if ($request->site_id) {
            $query->where('site_id', $request->site_id);
        }

        if ($request->widget_id) {
            $query->where('widget_id', $request->widget_id);
        }

        $stats = [
            'total_events' => $query->count(),
            'events_by_type' => $query->groupBy('event_type')
                ->selectRaw('event_type, count(*) as count')
                ->pluck('count', 'event_type'),
            'events_by_day' => $query->selectRaw('DATE(created_at) as date, count(*) as count')
                ->groupBy('date')
                ->orderBy('date')
                ->get(),
            'unique_visitors' => $query->distinct('visitor_id')->count('visitor_id')
        ];

        return response()->json($stats);
    }
}