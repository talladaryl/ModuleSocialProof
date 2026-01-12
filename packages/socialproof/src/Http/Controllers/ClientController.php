<?php

namespace Packages\SocialProof\Http\Controllers;

use Illuminate\Http\Request;
use SocialProof\Models\Client;
use SocialProof\Http\Requests\StoreClientRequest;
use SocialProof\Http\Requests\UpdateClientRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\View\View;

class ClientController extends Controller
{
    public function index(Request $request): View|JsonResponse
    {
        $clients = Client::query()
            ->when($request->search, function ($query, $search) {
                $query->where('name', 'like', "%{$search}%")
                      ->orWhere('email', 'like', "%{$search}%")
                      ->orWhere('company_name', 'like', "%{$search}%");
            })
            ->when($request->status, function ($query, $status) {
                $query->where('status', $status);
            })
            ->orderBy($request->get('sort', 'created_at'), $request->get('direction', 'desc'))
            ->paginate($request->get('per_page', 15));

        if ($request->expectsJson()) {
            return response()->json($clients);
        }

        return view('socialproof::admin.clients.index', compact('clients'));
    }

    public function show(Client $client): View|JsonResponse
    {
        $client->load(['subscriptions.plan', 'sites', 'teams']);
        
        if (request()->expectsJson()) {
            return response()->json($client);
        }

        return view('socialproof::admin.clients.show', compact('client'));
    }

    public function create(): View
    {
        return view('socialproof::admin.clients.create');
    }

    public function store(StoreClientRequest $request): JsonResponse
    {
        $client = Client::create($request->validated());

        return response()->json([
            'message' => 'Client créé avec succès',
            'client' => $client
        ], 201);
    }

    public function edit(Client $client): View
    {
        return view('socialproof::admin.clients.edit', compact('client'));
    }

    public function update(UpdateClientRequest $request, Client $client): JsonResponse
    {
        $client->update($request->validated());

        return response()->json([
            'message' => 'Client mis à jour avec succès',
            'client' => $client->fresh()
        ]);
    }

    public function destroy(Client $client): JsonResponse
    {
        $client->delete();

        return response()->json([
            'message' => 'Client supprimé avec succès'
        ]);
    }

    public function updateStatus(Request $request, Client $client): JsonResponse
    {
        $request->validate([
            'status' => 'required|in:active,inactive,suspended,pending'
        ]);

        $client->update(['status' => $request->status]);

        return response()->json([
            'message' => 'Statut du client mis à jour avec succès',
            'client' => $client->fresh()
        ]);
    }
}