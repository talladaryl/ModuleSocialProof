<?php

namespace Packages\SocialProof\Filament\Client\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Models\Widget;
use Packages\SocialProof\Models\TrackNotification;
use Packages\SocialProof\Models\TrackConversion;
use Packages\SocialProof\Models\Event;
use Illuminate\Support\Facades\DB;

class ClientStatsWidget extends BaseWidget
{
    // On peut définir le temps de rafraîchissement si nécessaire (ex: toutes les 30s)
    protected static ?string $pollingInterval = '30s';

    protected function getStats(): array
    {
        $user = Auth::guard('client')->user();
        $clientId = $user->client_id;
        
        // 1. Widgets actifs
        $activeWidgets = Widget::where('client_id', $clientId)
            ->where('status', 'active')
            ->count();
            
        // 2. Notifications diffusées ce mois (avec petit graphique de tendance sur 7 jours)
        $monthlyNotifications = TrackNotification::where('client_id', $clientId)
            ->whereMonth('created_at', now()->month)
            ->whereYear('created_at', now()->year)
            ->count();

        $notifTrend = TrackNotification::where('client_id', $clientId)
            ->where('created_at', '>=', now()->subDays(7))
            ->select(DB::raw('count(*) as count'))
            ->groupBy(DB::raw('DATE(created_at)'))
            ->pluck('count')
            ->toArray();
            
        // 3. Conversions ce mois
        $monthlyConversions = TrackConversion::where('client_id', $clientId)
            ->whereMonth('created_at', now()->month)
            ->whereYear('created_at', now()->year)
            ->count();
            
        // 4. Taux de clic moyen
        $clickRate = $monthlyNotifications > 0 
            ? round(($monthlyConversions / $monthlyNotifications) * 100, 2)
            : 0;
            
        // 5. Événements récents (7 derniers jours)
        $recentEvents = Event::where('client_id', $clientId)
            ->where('created_at', '>=', now()->subDays(7))
            ->count();

        return [
            Stat::make('Widgets Actifs', $activeWidgets)
                ->description('Indicateurs en ligne')
                ->descriptionIcon('heroicon-m-check-circle')
                ->color('success'),
                
            Stat::make('Notifications', number_format($monthlyNotifications))
                ->description('Diffusées ce mois')
                ->descriptionIcon('heroicon-m-megaphone')
                ->chart($notifTrend) // Ajoute une petite courbe de tendance
                ->color('info'),
                
            Stat::make('Conversions', number_format($monthlyConversions))
                ->description('Actions enregistrées')
                ->descriptionIcon('heroicon-m-cursor-arrow-rays')
                ->color('warning'),
                
            Stat::make('Taux de Clic', $clickRate . ' %')
                ->description($clickRate > 2 ? 'Performance élevée' : 'À optimiser')
                ->descriptionIcon($clickRate > 2 ? 'heroicon-m-arrow-trending-up' : 'heroicon-m-arrow-trending-down')
                ->color($clickRate > 2 ? 'success' : 'danger'),
                
            Stat::make('Événements', number_format($recentEvents))
                ->description('Total 7 derniers jours')
                ->descriptionIcon('heroicon-m-calendar-days')
                ->color('primary'),
        ];
    }
}