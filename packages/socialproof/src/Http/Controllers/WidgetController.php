<?php

namespace Packages\SocialProof\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Packages\SocialProof\Models\Widget;
use Packages\SocialProof\Services\WidgetService;
use Packages\SocialProof\Http\Requests\StoreWidgetRequest;
use Packages\SocialProof\Http\Requests\UpdateWidgetRequest;

class WidgetController extends Controller
{
    public function __construct(
        private WidgetService $widgetService
    ) {}

    public function index()
    {
        $widgets = Widget::where('user_id', auth()->id())
            ->withCount(['events', 'notifications'])
            ->latest()
            ->get();

        return Inertia::render('socialproof/widgets/index', [
            'widgets' => $widgets,
        ]);
    }

    public function create()
    {
        return Inertia::render('socialproof/widgets/create', [
            'notification_types' => config('socialproof.notification_types'),
        ]);
    }

 
    public function store(StoreWidgetRequest $request)
    {
        $widget = $this->widgetService->createWidget([
            ...$request->validated(),
            'user_id' => auth()->id(),
        ]);

        return redirect()
            ->route('socialproof.widgets.show', $widget)
            ->with('success', 'Widget created successfully!');
    }

    public function show(Widget $widget)
    {
        $this->authorize('view', $widget);

        $widget->load(['events' => function ($query) {
            $query->latest()->limit(10);
        }, 'notifications' => function ($query) {
            $query->latest()->limit(10);
        }]);

        $stats = $this->widgetService->getWidgetStats($widget);

        return Inertia::render('socialproof/widgets/show', [
            'widget' => $widget,
            'stats' => $stats,
        ]);
    }

    public function edit(Widget $widget)
    {
        $this->authorize('update', $widget);

        return Inertia::render('socialproof/widgets/edit', [
            'widget' => $widget,
            'notification_types' => config('socialproof.notification_types'),
        ]);
    }

    public function update(UpdateWidgetRequest $request, Widget $widget)
    {
        $this->authorize('update', $widget);

        $this->widgetService->updateWidget($widget, $request->validated());

        return redirect()
            ->route('socialproof.widgets.show', $widget)
            ->with('success', 'Widget updated successfully!');
    }

    public function destroy(Widget $widget)
    {
        $this->authorize('delete', $widget);

        $widget->delete();

        return redirect()
            ->route('socialproof.widgets.index')
            ->with('success', 'Widget deleted successfully!');
    }

    public function script(Widget $widget)
    {
        $this->authorize('view', $widget);

        $script = $this->widgetService->generateWidgetScript($widget);

        return response($script)
            ->header('Content-Type', 'application/javascript');
    }

    public function preview(Widget $widget)
    {
        $this->authorize('view', $widget);

        return Inertia::render('socialproof/widgets/preview', [
            'widget' => $widget,
            'script' => $this->widgetService->generateWidgetScript($widget),
        ]);
    }

    public function regenerateKey(Widget $widget)
    {
        $this->authorize('update', $widget);

        $widget->generateApiKey();

        return back()->with('success', 'API key regenerated successfully!');
    }
}