<?php

namespace Packages\SocialProof\Filament\Client\Widgets;

use Filament\Widgets\Widget;
use Illuminate\Support\Facades\Auth;

class ClientQuotaWidget extends Widget
{
    // Filament 4 : $view n'est PAS statique
    protected string $view = 'socialproof::client.widgets.quota-widget';

    // Typage explicite pour Filament 4
    protected int | string | array $columnSpan = 'full';

    /**
     * Dans Filament 4, les données peuvent être passées via getData() 
     * ou calculées directement dans la vue.
     */
    protected function getViewData(): array
    {
        /** @var \Packages\SocialProof\Models\Client $client */
        $client = Auth::guard('client')->user();
        
        // Sécurité : si le client n'est pas trouvé ou déconnecté
        if (!$client) {
            return [
                'plan' => null,
                'quotas' => [],
            ];
        }

        $plan = $client->getCurrentPlan();
        
        if (!$plan) {
            return [
                'plan' => null,
                'quotas' => [],
            ];
        }

        // Optimisation : On définit les clés à surveiller
        $quotaDefinitions = [
            'sites'           => ['label' => 'Sites', 'relation' => 'sites', 'limit' => $plan->max_sites],
            'widgets'         => ['label' => 'Widgets', 'relation' => 'widgets', 'limit' => $plan->max_widgets],
            'notifications'   => ['label' => 'Notifications', 'relation' => 'notifications', 'limit' => $plan->max_notifications],
            'monthly_events'  => ['label' => 'Événements mensuels', 'method' => 'getMonthlyEventsCount', 'limit' => $plan->max_monthly_events],
            'team_members'    => ['label' => 'Membres équipe', 'relation' => 'teamMembers', 'limit' => $plan->max_team_members],
            'api_keys'        => ['label' => 'Clés API', 'relation' => 'apiKeys', 'limit' => $plan->max_api_keys],
        ];

        $quotas = [];

        foreach ($quotaDefinitions as $key => $def) {
            // On récupère la valeur "utilisée" soit par relation, soit par méthode
            $used = isset($def['relation']) 
                ? $client->{$def['relation']}()->count() 
                : $client->{$def['method']}();

            $quotas[$key] = [
                'label'     => $def['label'],
                'used'      => $used,
                'limit'     => $def['limit'],
                'unlimited' => (int) $def['limit'] === -1,
                // On ajoute un pourcentage pour faciliter le rendu d'une barre de progression dans la vue
                'percentage' => ((int) $def['limit'] === -1) 
                    ? 0 
                    : min(100, round(($used / $def['limit']) * 100)),
            ];
        }

        return [
            'plan'   => $plan,
            'quotas' => $quotas,
        ];
    }
}