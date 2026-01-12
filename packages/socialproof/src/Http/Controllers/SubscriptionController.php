<?php

namespace Packages\SocialProof\Http\Controllers;

use Illuminate\Http\Request;
use SocialProof\Models\Subscription;
use SocialProof\Http\Requests\StoreSubscriptionRequest;
use SocialProof\Http\Requests\UpdateSubscriptionRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\View\View;

class SubscriptionController extends Controller
{
    public function index(Request $request): View|JsonResponse
    {
        $subscriptions = Subscription::query()
            ->with(['client', 'plan'])
            ->when($request->search, function ($query, $search) {
                $query->whereHas('client', function ($q) use ($search) {
                    $q->where('name', 'like', "%{$search}%")
                      ->orWhere('email', 'like', "%{$search}%");
                })->orWhereHas('plan', function ($q) use ($search) {
                    $q->where('name', 'like', "%{$search}%");
                });
            })
            ->when($request->status, function ($query, $status) {
                $query->where('status', $status);
            })
            ->when($request->billing_cycle, function ($query, $cycle) {
                $query->where('billing_cycle', $cycle);
            })
            ->orderBy($request->get('sort', 'created_at'), $request->get('direction', 'desc'))
            ->paginate($request->get('per_page', 15));

        if ($request->expectsJson()) {
            return response()->json($subscriptions);
        }

        return view('socialproof::admin.subscriptions.index', compact('subscriptions'));
    }

    public function show(Subscription $subscription): View|JsonResponse
    {
        $subscription->load(['client', 'plan']);
        
        if (request()->expectsJson()) {
            return response()->json($subscription);
        }

        return view('socialproof::admin.subscriptions.show', compact('subscription'));
    }

    public function create(): View
    {
        return view('socialproof::admin.subscriptions.create');
    }

    public function store(StoreSubscriptionRequest $request): JsonResponse
    {
        $subscription = Subscription::create($request->validated());

        return response()->json([
            'message' => 'Abonnement créé avec succès',
            'subscription' => $subscription->load(['client', 'plan'])
        ], 201);
    }

    public function edit(Subscription $subscription): View
    {
        $subscription->load(['client', 'plan']);
        return view('socialproof::admin.subscriptions.edit', compact('subscription'));
    }

    public function update(UpdateSubscriptionRequest $request, Subscription $subscription): JsonResponse
    {
        $subscription->update($request->validated());

        return response()->json([
            'message' => 'Abonnement mis à jour avec succès',
            'subscription' => $subscription->fresh(['client', 'plan'])
        ]);
    }

    public function destroy(Subscription $subscription): JsonResponse
    {
        $subscription->delete();

        return response()->json([
            'message' => 'Abonnement supprimé avec succès'
        ]);
    }

    public function cancel(Request $request, Subscription $subscription): JsonResponse
    {
        $request->validate([
            'cancellation_reason' => 'nullable|string|max:1000'
        ]);

        $subscription->update([
            'status' => 'canceled',
            'canceled_at' => now(),
            'cancellation_reason' => $request->cancellation_reason
        ]);

        return response()->json([
            'message' => 'Abonnement annulé avec succès',
            'subscription' => $subscription->fresh()
        ]);
    }

    public function reactivate(Subscription $subscription): JsonResponse
    {
        if (!in_array($subscription->status, ['canceled', 'expired'])) {
            return response()->json([
                'message' => 'Seuls les abonnements annulés ou expirés peuvent être réactivés'
            ], 422);
        }

        $subscription->update([
            'status' => 'active',
            'canceled_at' => null,
            'cancellation_reason' => null,
            'ends_at' => now()->addMonth() // Réactiver pour un mois
        ]);

        return response()->json([
            'message' => 'Abonnement réactivé avec succès',
            'subscription' => $subscription->fresh()
        ]);
    }

    public function resetUsage(Subscription $subscription): JsonResponse
    {
        $subscription->update([
            'current_period_events' => 0,
            'usage_reset_at' => now()
        ]);

        return response()->json([
            'message' => 'Usage réinitialisé avec succès',
            'subscription' => $subscription->fresh()
        ]);
    }
}