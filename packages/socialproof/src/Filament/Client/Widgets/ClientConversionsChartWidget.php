<?php

namespace Packages\SocialProof\Filament\Client\Widgets;

use Filament\Widgets\ChartWidget;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Models\TrackConversion;
use Illuminate\Support\Carbon;

class ClientConversionsChartWidget extends ChartWidget
{
    // ChartWidget : $heading est NON-statique
    protected ?string $heading = 'Conversions des 30 derniers jours';
    
    protected int | string | array $columnSpan = 2;

    protected function getData(): array
    {
        $clientId = Auth::guard('client')->user()->client_id;
        $now = now(); 
        
        // Récupérer les conversions des 30 derniers jours
        $conversions = TrackConversion::where('client_id', $clientId)
            ->where('created_at', '>=', $now->copy()->subDays(30))
            ->selectRaw('DATE(created_at) as date, COUNT(*) as count')
            ->groupBy('date')
            ->orderBy('date')
            ->get();

        $labels = [];
        $data = [];
        
        for ($i = 29; $i >= 0; $i--) {
            $currentDate = $now->copy()->subDays($i);
            $dateString = $currentDate->format('Y-m-d');
            
            $labels[] = $currentDate->format('d/m');
            
            $conversion = $conversions->firstWhere('date', $dateString);
            $data[] = $conversion ? (int) $conversion->count : 0;
        }

        return [
            'datasets' => [
                [
                    'label' => 'Conversions',
                    'data' => $data,
                    'borderColor' => '#3b82f6',
                    'backgroundColor' => 'rgba(59, 130, 246, 0.1)',
                    'fill' => 'start', 
                    'tension' => 0.3, 
                ],
            ],
            'labels' => $labels,
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }

    protected function getOptions(): array
    {
        return [
            'scales' => [
                'y' => [
                    'beginAtZero' => true,
                    'ticks' => [
                        'stepSize' => 1,
                    ],
                ],
            ],
            'plugins' => [
                'legend' => [
                    'display' => false,
                ],
            ],
            'elements' => [
                'point' => [
                    'radius' => 3,
                    'hitRadius' => 10,
                ],
            ],
        ];
    }
}