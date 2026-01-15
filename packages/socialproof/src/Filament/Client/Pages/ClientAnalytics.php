<?php

namespace Packages\SocialProof\Filament\Client\Pages;

use Filament\Pages\Page;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Models\TrackNotification;
use Packages\SocialProof\Models\TrackConversion;
use Packages\SocialProof\Models\Event;
// Imports nécessaires pour Filament 4
use UnitEnum;
use BackedEnum;
use Illuminate\Support\Facades\DB;

class ClientAnalytics extends Page
{
    // Correction du type : BackedEnum
    protected static BackedEnum|string|null $navigationIcon = 'heroicon-o-chart-bar';
    
    // Correction : Suppression du static
    protected string $view = 'socialproof::client.pages.analytics';
    
    protected static ?string $navigationLabel = 'Analytics';
    
    // Correction du type : UnitEnum
    protected static UnitEnum|string|null $navigationGroup = 'Tracking';
    
    protected static ?int $navigationSort = 1;

    public array $stats = [];
    public array $chartData = [];
    public string $period = '30'; // 7, 30, 90 jours

    public function mount(): void
    {
        $this->loadAnalytics();
    }

    public function updatedPeriod(): void
    {
        $this->loadAnalytics();
    }

    private function loadAnalytics(): void
    {
        $user = Auth::guard('client')->user();
        $clientId = $user->client_id;
        $days = (int) $this->period;
        $startDate = now()->subDays($days);

        // Statistiques générales
        $this->stats = [
            'total_notifications' => TrackNotification::where('client_id', $clientId)
                ->where('created_at', '>=', $startDate)
                ->count(),
                
            'total_conversions' => TrackConversion::where('client_id', $clientId)
                ->where('created_at', '>=', $startDate)
                ->count(),
                
            'total_events' => Event::where('client_id', $clientId)
                ->where('created_at', '>=', $startDate)
                ->count(),
                
            'conversion_rate' => $this->calculateConversionRate($clientId, $startDate),
        ];

        // Données pour les graphiques
        $this->chartData = [
            'notifications' => $this->getNotificationsChartData($clientId, $days),
            'conversions' => $this->getConversionsChartData($clientId, $days),
            'events_by_type' => $this->getEventsByTypeData($clientId, $startDate),
        ];
    }

    private function calculateConversionRate(int $clientId, $startDate): float
    {
        $notifications = TrackNotification::where('client_id', $clientId)
            ->where('created_at', '>=', $startDate)
            ->count();
            
        $conversions = TrackConversion::where('client_id', $clientId)
            ->where('created_at', '>=', $startDate)
            ->count();

        return $notifications > 0 ? round(($conversions / $notifications) * 100, 2) : 0;
    }

    private function getNotificationsChartData(int $clientId, int $days): array
    {
        $startDate = now()->subDays($days - 1)->startOfDay();
        
        // Optimisation : une seule requête au lieu d'une boucle
        $results = TrackNotification::where('client_id', $clientId)
            ->where('created_at', '>=', $startDate)
            ->select(DB::raw('DATE(created_at) as date'), DB::raw('count(*) as count'))
            ->groupBy('date')
            ->pluck('count', 'date');

        $data = [];
        $labels = [];

        for ($i = $days - 1; $i >= 0; $i--) {
            $date = now()->subDays($i)->format('Y-m-d');
            $labels[] = now()->subDays($i)->format('d/m');
            $data[] = $results[$date] ?? 0;
        }

        return ['labels' => $labels, 'data' => $data];
    }

    private function getConversionsChartData(int $clientId, int $days): array
    {
        $startDate = now()->subDays($days - 1)->startOfDay();

        // Optimisation : une seule requête
        $results = TrackConversion::where('client_id', $clientId)
            ->where('created_at', '>=', $startDate)
            ->select(DB::raw('DATE(created_at) as date'), DB::raw('count(*) as count'))
            ->groupBy('date')
            ->pluck('count', 'date');

        $data = [];
        $labels = [];

        for ($i = $days - 1; $i >= 0; $i--) {
            $date = now()->subDays($i)->format('Y-m-d');
            $labels[] = now()->subDays($i)->format('d/m');
            $data[] = $results[$date] ?? 0;
        }

        return ['labels' => $labels, 'data' => $data];
    }

    private function getEventsByTypeData(int $clientId, $startDate): array
    {
        return Event::where('client_id', $clientId)
            ->where('created_at', '>=', $startDate)
            ->selectRaw('type, COUNT(*) as count')
            ->groupBy('type')
            ->pluck('count', 'type')
            ->toArray();
    }
}