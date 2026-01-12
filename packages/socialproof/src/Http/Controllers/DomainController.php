<?php

namespace Packages\SocialProof\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Inertia\Inertia;
use Packages\SocialProof\Models\Domain;
use Packages\SocialProof\Http\Requests\StoreDomainRequest;
use Packages\SocialProof\Http\Requests\UpdateDomainRequest;

class DomainController extends Controller
{
    public function index(Request $request)
    {
        $domains = Domain::forUser(auth()->id())
            ->when($request->search, function ($query, $search) {
                $query->where('host', 'like', "%{$search}%");
            })
            ->when($request->status !== null, function ($query) use ($request) {
                $query->where('is_enabled', $request->status === 'enabled');
            })
            ->orderBy($request->get('sort', 'domain_id'), $request->get('direction', 'desc'))
            ->paginate(15);

        return Inertia::render('socialproof/domains/index', [
            'domains' => $domains,
            'filters' => $request->only(['search', 'status', 'sort', 'direction']),
        ]);
    }

    public function create()
    {
        return Inertia::render('socialproof/domains/create');
    }

    public function store(StoreDomainRequest $request)
    {
        $domain = Domain::create([
            ...$request->validated(),
            'user_id' => auth()->id(),
        ]);

        return redirect()
            ->route('socialproof.domains.index')
            ->with('success', 'Domain created successfully!');
    }

    public function show(Domain $domain)
    {
        $this->authorize('view', $domain);

        $domain->load(['campaigns' => function ($query) {
            $query->latest()->limit(10);
        }]);

        return Inertia::render('socialproof/domains/show', [
            'domain' => $domain,
        ]);
    }

    public function edit(Domain $domain)
    {
        $this->authorize('update', $domain);

        return Inertia::render('socialproof/domains/edit', [
            'domain' => $domain,
        ]);
    }

    public function update(UpdateDomainRequest $request, Domain $domain)
    {
        $this->authorize('update', $domain);

        $domain->update($request->validated());

        return redirect()
            ->route('socialproof.domains.show', $domain)
            ->with('success', 'Domain updated successfully!');
    }

    public function destroy(Domain $domain)
    {
        $this->authorize('delete', $domain);

        $domain->delete();

        return redirect()
            ->route('socialproof.domains.index')
            ->with('success', 'Domain deleted successfully!');
    }

    public function bulkAction(Request $request): JsonResponse
    {
        $request->validate([
            'action' => 'required|in:delete,enable,disable',
            'domains' => 'required|array|min:1',
            'domains.*' => 'exists:sp_domains,domain_id',
        ]);

        $domains = Domain::whereIn('domain_id', $request->domains)
            ->forUser(auth()->id())
            ->get();

        foreach ($domains as $domain) {
            switch ($request->action) {
                case 'delete':
                    $this->authorize('delete', $domain);
                    $domain->delete();
                    break;
                case 'enable':
                    $this->authorize('update', $domain);
                    $domain->update(['is_enabled' => true]);
                    break;
                case 'disable':
                    $this->authorize('update', $domain);
                    $domain->update(['is_enabled' => false]);
                    break;
            }
        }

        $message = match ($request->action) {
            'delete' => 'Domains deleted successfully!',
            'enable' => 'Domains enabled successfully!',
            'disable' => 'Domains disabled successfully!',
        };

        return response()->json(['message' => $message]);
    }
}