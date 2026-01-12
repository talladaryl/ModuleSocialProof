<?php

namespace Packages\SocialProof\Http\Controllers;

use Illuminate\Http\Request;
use SocialProof\Models\Plan;
use SocialProof\Http\Requests\StorePlanRequest;
use SocialProof\Http\Requests\UpdatePlanRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\View\View;

class PlanController extends Controller
{
    public function index(Request $request): View|JsonResponse
    {
        $plans = Plan::query()
            ->when($request->search, function ($query, $search) {
                $query->where('name', 'like', "%{$search}%")
                      ->orWhere('slug', 'like', "%{$search}%");
            })
            ->when($request->has('is_active'), function ($query) use ($request) {
                $query->where('is_active', $request->boolean('is_active'));
            })
            ->orderBy($request->get('sort', 'sort_order'), $request->get('direction', 'asc'))
            ->paginate($request->get('per_page', 15));

        if ($request->expectsJson()) {
            return response()->json($plans);
        }

        return view('socialproof::admin.plans.index', compact('plans'));
    }

    public function show(Plan $plan): View|JsonResponse
    {
        $plan->load(['subscriptions' => function ($query) {
            $query->with('client')->latest()->take(10);
        }]);
        
        if (request()->expectsJson()) {
            return response()->json($plan);
        }

        return view('socialproof::admin.plans.show', compact('plan'));
    }

    public function create(): View
    {
        return view('socialproof::admin.plans.create');
    }

    public function store(StorePlanRequest $request): JsonResponse
    {
        $plan = Plan::create($request->validated());

        return response()->json([
            'message' => 'Plan créé avec succès',
            'plan' => $plan
        ], 201);
    }

    public function edit(Plan $plan): View
    {
        return view('socialproof::admin.plans.edit', compact('plan'));
    }

    public function update(UpdatePlanRequest $request, Plan $plan): JsonResponse
    {
        $plan->update($request->validated());

        return response()->json([
            'message' => 'Plan mis à jour avec succès',
            'plan' => $plan->fresh()
        ]);
    }

    public function destroy(Plan $plan): JsonResponse
    {
        // Vérifier s'il y a des abonnements actifs
        if ($plan->subscriptions()->whereIn('status', ['active', 'trial'])->exists()) {
            return response()->json([
                'message' => 'Impossible de supprimer un plan avec des abonnements actifs'
            ], 422);
        }

        $plan->delete();

        return response()->json([
            'message' => 'Plan supprimé avec succès'
        ]);
    }

    public function updateStatus(Request $request, Plan $plan): JsonResponse
    {
        $request->validate([
            'is_active' => 'required|boolean'
        ]);

        $plan->update(['is_active' => $request->is_active]);

        return response()->json([
            'message' => 'Statut du plan mis à jour avec succès',
            'plan' => $plan->fresh()
        ]);
    }

    public function reorder(Request $request): JsonResponse
    {
        $request->validate([
            'plans' => 'required|array',
            'plans.*.id' => 'required|exists:sp_plans,plan_id',
            'plans.*.sort_order' => 'required|integer|min:0'
        ]);

        foreach ($request->plans as $planData) {
            Plan::where('plan_id', $planData['id'])
                ->update(['sort_order' => $planData['sort_order']]);
        }

        return response()->json([
            'message' => 'Ordre des plans mis à jour avec succès'
        ]);
    }
}