<?php

namespace Packages\SocialProof\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ClientTenantMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if (!Auth::guard('client')->check()) {
            return redirect()->route('filament.client.auth.login');
        }

        $client = Auth::guard('client')->user();

        if (!$client->isActive()) {
            Auth::guard('client')->logout();
            return redirect()->route('filament.client.auth.login')
                ->with('error', 'Votre compte est inactif. Veuillez contacter le support.');
        }

        // Injecter le client_id dans toutes les requêtes Eloquent
        config(['socialproof.current_client_id' => $client->client_id]);

        return $next($request);
    }
}
