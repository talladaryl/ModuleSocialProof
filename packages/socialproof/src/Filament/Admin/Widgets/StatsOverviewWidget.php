<?php

namespace Packages\SocialProof\Filament\Admin\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Packages\SocialProof\Models\Client;
use Packages\SocialProof\Models\Subscription;
use Packages\SocialProof\Models\Event;
use Packages\SocialProof\Models\Widget;
use Packages\SocialProof\Models\TrackConversion;
use Packages\SocialProof\Models\ApiKey;

class StatsOverviewWidget extends BaseWidget
{
    protected static ?int $sort = 1;
    protected int|string|array $columnSpan = 'full';

    protected function getStats(): array
    {
        $activeClients = Client::where('status', 'active')->count();
        $totalClients = Client::count();
        
        $mrr = Subscription::where('status', 'active')
            ->where('billing_cycle', 'monthly')
            ->sum('amount');
        $arr = Subscription::where('status', 'active')
            ->where('billing_cycle', 'yearly')
            ->sum('amount');
        $totalMrr = $mrr + ($arr / 12);
        
        $todayEvents = Event::whereDate('created_at', today())->count();
        $yesterdayEvents = Event::whereDate('created_at', today()->subDay())->count();
        $eventsChange = $yesterdayEvents > 0 
            ? round((($todayEvents - $yesterdayEvents) / $yesterdayEvents) * 100, 1) 
            : 0;
        
        $activeWidgets = Widget::where('status', 'active')->count();
        
        $todayConversions = TrackConversion::whereDate('created_at', today())->count();
        
        $activeApiKeys = ApiKey::where('is_active', true)
            ->where(function ($q) {
                $q->whereNull('expires_at')->orWhere('expires_at', '>', now());
            })->count();

        return [
            Stat::make('Clients Actifs', $activeClients)
                ->description($totalClients . ' clients au total')
                ->descriptionIcon('heroicon-m-users')
                ->color('success')
                ->chart([7, 3, 4, 5, 6, 3, 5, 8]),

            Stat::make('MRR', '€' . number_format($totalMrr, 2))
                ->description('Revenu mensuel récurrent')
                ->descriptionIcon('heroicon-m-currency-euro')
                ->color('primary')
                ->chart([4, 5, 6, 5, 7, 8, 9, 10]),

            Stat::make('Events Aujourd\'hui', number_format($todayEvents))
                ->description($eventsChange >= 0 ? "+{$eventsChange}%" : "{$eventsChange}%")
                ->descriptionIcon($eventsChange >= 0 ? 'heroicon-m-arrow-trending-up' : 'heroicon-m-arrow-trending-down')
                ->color($eventsChange >= 0 ? 'success' : 'danger')
                ->chart([3, 5, 4, 6, 5, 7, 6, 8]),

            Stat::make('Widgets Actifs', $activeWidgets)
                ->description('Widgets en production')
                ->descriptionIcon('heroicon-m-squares-2x2')
                ->color('info'),

            Stat::make('Conversions Aujourd\'hui', $todayConversions)
                ->description('Conversions trackées')
                ->descriptionIcon('heroicon-m-chart-bar')
                ->color('warning'),

            Stat::make('API Keys Actives', $activeApiKeys)
                ->description('Clés API en service')
                ->descriptionIcon('heroicon-m-key')
                ->color('gray'),
        ];
    }
}
