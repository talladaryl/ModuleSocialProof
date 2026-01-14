<?php

namespace Packages\SocialProof\Filament\Client\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Models\Widget;
use Packages\SocialProof\Models\TrackNotification;
use Packages\SocialProof\Models\TrackConversion;
use Packages\SocialProof\Models\Event;

class ClientStatsWidget extends BaseWidget
{
    protected function getStats(): array
    {
        $clientId = Auth::guard('client')->user()->client_id;
        
        // Widgets actifs
        $activeWidgets = Widget::where('client_id', $clientId)
            ->where('status', 'active')
            ->count();
            
        // Notifications diffusées ce mois
        $monthlyNotifications = TrackNotification::where('client_id', $clientId)
            ->whereMonth('created_at', now()->month)
            ->whereYear('created_at', now()->year)
            ->count();
            
        // Conversions ce mois
        $monthlyConversions = TrackConversion::where('client_id', $clientId)
            ->whereMonth('created_at', now()->month)
            ->whereYear('created_at', now()->year)
            ->count();
            
        // Taux de clic moyen
        $clickRate = $monthlyNotifications > 0 
            ? round(($monthlyConversions / $monthlyNotifications) * 100, 2)
            : 0;
            
        // Événements récents (7 derniers jours)
        $recentEvents = Event::where('client_id', $clientId)
            ->where('created_at', '>=', now()->subDays(7))
            ->count();

        return [
            Stat::make('Widgets Actifs', $activeWidgets)
                ->description('Widgets en cours d\'utilisation')
                ->descriptionIcon('heroicon-m-arrow-trending-up')
                ->color('success'),
                
            Stat::make('Notifications', number_format($monthlyNotifications))
                ->description('Diffusées ce mois')
                ->descriptionIcon('heroicon-m-megaphone')
                ->color('info'),
                
            Stat::make('Conversions', number_format($monthlyConversions))
                ->description('Ce mois')
                ->descriptionIcon('heroicon-m-cursor-arrow-rays')
                ->color('warning'),
                
            Stat::make('Taux de Clic', $clickRate . '%')
                ->description('Moyenne mensuelle')
                ->descriptionIcon('heroicon-m-chart-bar')
                ->color($clickRate > 2 ? 'success' : 'danger'),
                
            Stat::make('Événements', number_format($recentEvents))
                ->description('7 derniers jours')
                ->descriptionIcon('heroicon-m-calendar-days')
                ->color('primary'),
        ];
    }
}