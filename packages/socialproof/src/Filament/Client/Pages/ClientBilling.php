<?php

namespace Packages\SocialProof\Filament\Client\Pages;

use Filament\Pages\Page;
use Filament\Notifications\Notification;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Models\Plan;
use BackedEnum;
use UnitEnum;

class ClientBilling extends Page
{
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-credit-card';
    protected static string|UnitEnum|null $navigationGroup = 'Account';
    protected static ?string $navigationLabel = 'Facturation';
    protected static ?int $navigationSort = 2;
    
    protected string $view = 'socialproof::client.pages.billing';

    public $plans = [];
    public $currentSubscription = null;
    public $invoices = [];

    public function mount(): void
    {
        $client = Auth::guard('client')->user();
        
        $this->plans = Plan::where('is_active', true)
            ->orderBy('price_monthly')
            ->get();
            
        $this->currentSubscription = $client->subscription;
        
        $this->invoices = $client->subscriptions()
            ->with('plan')
            ->orderBy('created_at', 'desc')
            ->limit(10)
            ->get();
    }

    public function selectPlan($planId): void
    {
        $plan = Plan::find($planId);
        
        if (!$plan) {
            Notification::make()
                ->title('Plan non trouvé')
                ->danger()
                ->send();
            return;
        }

        Notification::make()
            ->title('Redirection vers le paiement...')
            ->info()
            ->send();
    }

    public function cancelSubscription(): void
    {
        $client = Auth::guard('client')->user();
        
        if ($this->currentSubscription) {
            $this->currentSubscription->update([
                'status' => 'canceled',
                'canceled_at' => now(),
            ]);
            
            Notification::make()
                ->title('Abonnement annulé')
                ->success()
                ->send();
                
            $this->mount();
        }
    }
}
