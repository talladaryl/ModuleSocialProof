<?php

namespace Packages\SocialProof\Http\Controllers;

use Illuminate\Http\Request;
use SocialProof\Models\ApiKey;
use SocialProof\Http\Requests\StoreApiKeyRequest;
use SocialProof\Http\Requests\UpdateApiKeyRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\View\View;
use Illuminate\Support\Str;

class ApiKeyController extends Controller
{
    public function index(Request $request): View|JsonResponse
    {
        $apiKeys = ApiKey::query()
            ->with(['client', 'site'])
            ->when($request->search, function ($query, $search) {
                $query->where('name', 'like', "%{$search}%")
                      ->orWhere('key_prefix', 'like', "%{$search}%");
            })
            ->when($request->has('is_active'), function ($query) use ($request) {
                $query->where('is_active', $request->boolean('is_active'));
            })
            ->when($request->client_id, function ($query, $clientId) {
                $query->where('client_id', $clientId);
            })
            ->when($request->site_id, function ($query, $siteId) {
                $query->where('site_id', $siteId);
            })
            ->orderBy($request->get('sort', 'created_at'), $request->get('direction', 'desc'))
            ->paginate($request->get('per_page', 15));

        if ($request->expectsJson()) {
            return response()->json($apiKeys);
        }

        return view('socialproof::admin.api-keys.index', compact('apiKeys'));
    }

    public function show(ApiKey $apiKey): View|JsonResponse
    {
        $apiKey->load(['client', 'site']);
        
        if (request()->expectsJson()) {
            return response()->json($apiKey);
        }

        return view('socialproof::admin.api-keys.show', compact('apiKey'));
    }

    public function create(): View
    {
        return view('socialproof::admin.api-keys.create');
    }

    public function store(StoreApiKeyRequest $request): JsonResponse
    {
        $data = $request->validated();
        
        // Générer la clé API
        $apiKey = $this->generateApiKey();
        $data['api_key'] = hash('sha256', $apiKey);
        $data['key_prefix'] = substr($apiKey, 0, 8);
        
        $apiKeyModel = ApiKey::create($data);

        return response()->json([
            'message' => 'Clé API créée avec succès',
            'api_key' => $apiKeyModel->load(['client', 'site']),
            'plain_key' => $apiKey // Retourner la clé en clair une seule fois
        ], 201);
    }

    public function edit(ApiKey $apiKey): View
    {
        $apiKey->load(['client', 'site']);
        return view('socialproof::admin.api-keys.edit', compact('apiKey'));
    }

    public function update(UpdateApiKeyRequest $request, ApiKey $apiKey): JsonResponse
    {
        $apiKey->update($request->validated());

        return response()->json([
            'message' => 'Clé API mise à jour avec succès',
            'api_key' => $apiKey->fresh(['client', 'site'])
        ]);
    }

    public function destroy(ApiKey $apiKey): JsonResponse
    {
        $apiKey->delete();

        return response()->json([
            'message' => 'Clé API supprimée avec succès'
        ]);
    }

    public function regenerate(ApiKey $apiKey): JsonResponse
    {
        $newApiKey = $this->generateApiKey();
        
        $apiKey->update([
            'api_key' => hash('sha256', $newApiKey),
            'key_prefix' => substr($newApiKey, 0, 8),
            'last_used_at' => null
        ]);

        return response()->json([
            'message' => 'Clé API régénérée avec succès',
            'api_key' => $apiKey->fresh(),
            'plain_key' => $newApiKey // Retourner la nouvelle clé en clair
        ]);
    }

    public function updateStatus(Request $request, ApiKey $apiKey): JsonResponse
    {
        $request->validate([
            'is_active' => 'required|boolean'
        ]);

        $apiKey->update(['is_active' => $request->is_active]);

        return response()->json([
            'message' => 'Statut de la clé API mis à jour avec succès',
            'api_key' => $apiKey->fresh()
        ]);
    }

    private function generateApiKey(): string
    {
        return 'sp_' . Str::random(32);
    }
}