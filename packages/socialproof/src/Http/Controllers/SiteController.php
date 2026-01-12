<?php

namespace Packages\SocialProof\Http\Controllers;

use Illuminate\Http\Request;
use SocialProof\Models\Site;
use SocialProof\Http\Requests\StoreSiteRequest;
use SocialProof\Http\Requests\UpdateSiteRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\View\View;

class SiteController extends Controller
{
    public function index(Request $request): View|JsonResponse
    {
        $sites = Site::query()
            ->with(['client', 'widgets'])
            ->when($request->search, function ($query, $search) {
                $query->where('name', 'like', "%{$search}%")
                      ->orWhere('domain', 'like', "%{$search}%")
                      ->orWhere('url', 'like', "%{$search}%");
            })
            ->when($request->has('is_active'), function ($query) use ($request) {
                $query->where('is_active', $request->boolean('is_active'));
            })
            ->when($request->client_id, function ($query, $clientId) {
                $query->where('client_id', $clientId);
            })
            ->orderBy($request->get('sort', 'created_at'), $request->get('direction', 'desc'))
            ->paginate($request->get('per_page', 15));

        if ($request->expectsJson()) {
            return response()->json($sites);
        }

        return view('socialproof::admin.sites.index', compact('sites'));
    }

    public function show(Site $site): View|JsonResponse
    {
        $site->load(['client', 'widgets.campaigns', 'apiKeys']);
        
        if (request()->expectsJson()) {
            return response()->json($site);
        }

        return view('socialproof::admin.sites.show', compact('site'));
    }

    public function create(): View
    {
        return view('socialproof::admin.sites.create');
    }

    public function store(StoreSiteRequest $request): JsonResponse
    {
        $site = Site::create($request->validated());

        return response()->json([
            'message' => 'Site créé avec succès',
            'site' => $site->load('client')
        ], 201);
    }

    public function edit(Site $site): View
    {
        $site->load('client');
        return view('socialproof::admin.sites.edit', compact('site'));
    }

    public function update(UpdateSiteRequest $request, Site $site): JsonResponse
    {
        $site->update($request->validated());

        return response()->json([
            'message' => 'Site mis à jour avec succès',
            'site' => $site->fresh(['client'])
        ]);
    }

    public function destroy(Site $site): JsonResponse
    {
        $site->delete();

        return response()->json([
            'message' => 'Site supprimé avec succès'
        ]);
    }

    public function updateStatus(Request $request, Site $site): JsonResponse
    {
        $request->validate([
            'is_active' => 'required|boolean'
        ]);

        $site->update(['is_active' => $request->is_active]);

        return response()->json([
            'message' => 'Statut du site mis à jour avec succès',
            'site' => $site->fresh()
        ]);
    }

    public function verify(Site $site): JsonResponse
    {
        // Logique de vérification du site
        // Vérifier si le domaine est accessible, si le script est installé, etc.
        
        $isVerified = $this->verifySiteInstallation($site);
        
        $site->update([
            'is_verified' => $isVerified,
            'verified_at' => $isVerified ? now() : null
        ]);

        return response()->json([
            'message' => $isVerified ? 'Site vérifié avec succès' : 'Échec de la vérification du site',
            'site' => $site->fresh(),
            'verified' => $isVerified
        ]);
    }

    private function verifySiteInstallation(Site $site): bool
    {
        // Implémentation de la vérification
        // Ceci est un exemple basique - vous devriez implémenter votre propre logique
        try {
            $response = \Http::timeout(10)->get($site->url);
            return $response->successful();
        } catch (\Exception $e) {
            return false;
        }
    }
}