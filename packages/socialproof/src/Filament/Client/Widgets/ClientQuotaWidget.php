<?php

namespace Packages\SocialProof\Filament\Client\Widgets;

use Filament\Widgets\Widget;
use Illuminate\Support\Facades\Auth;

class ClientQuotaWidget extends Widget
{
    protected static string $view = 'socialproof::client.widgets.quota-widget';
    protected int | string | array $columnSpan = 'full';

    public function getViewData(): array
    {
        $client = Auth::guard('client')->user();
        $plan = $client->getCurrentPlan();
        
        if (!$plan) {
            return [
                'plan' => null,
                'quotas' => [],
            ];
        }

        $quotas = [
            'sites' => [
                'label' => 'Sites',
                'used' => $client->sites()->count(),
                'limit' => $plan->max_sites,
                'unlimited' => $plan->max_sites === -1,
            ],
            'widgets' => [
                'label' => 'Widgets',
                'used' => $client->widgets()->count(),
                'limit' => $plan->max_widgets,
                'unlimited' => $plan->max_widgets === -1,
            ],
            'notifications' => [
                'label' => 'Notifications',
                'used' => $client->notifications()->count(),
                'limit' => $plan->max_notifications,
                'unlimited' => $plan->max_notifications === -1,
            ],
            'monthly_events' => [
                'label' => 'Événements mensuels',
                'used' => $client->getMonthlyEventsCount(),
                'limit' => $plan->max_monthly_events,
                'unlimited' => $plan->max_monthly_events === -1,
            ],
            'team_members' => [
                'label' => 'Membres équipe',
                'used' => $client->teamMembers()->count(),
                'limit' => $plan->max_team_members,
                'unlimited' => $plan->max_team_members === -1,
            ],
            'api_keys' => [
                'label' => 'Clés API',
                'used' => $client->apiKeys()->count(),
                'limit' => $plan->max_api_keys,
                'unlimited' => $plan->max_api_keys === -1,
            ],
        ];

        return [
            'plan' => $plan,
            'quotas' => $quotas,
        ];
    }
}