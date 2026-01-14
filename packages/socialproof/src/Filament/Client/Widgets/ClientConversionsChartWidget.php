<?php

namespace Packages\SocialProof\Filament\Client\Widgets;

use Filament\Widgets\ChartWidget;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Models\TrackConversion;

class ClientConversionsChartWidget extends ChartWidget
{
    protected static ?string $heading = 'Conversions des 30 derniers jours';
    protected static string $color = 'info';
    protected int | string | array $columnSpan = 2;

    protected function getData(): array
    {
        $clientId = Auth::guard('client')->user()->client_id;
        
        // Récupérer les conversions des 30 derniers jours
        $conversions = TrackConversion::where('client_id', $clientId)
            ->where('created_at', '>=', now()->subDays(30))
            ->selectRaw('DATE(created_at) as date, COUNT(*) as count')
            ->groupBy('date')
            ->orderBy('date')
            ->get();

        // Créer un tableau avec tous les jours des 30 derniers jours
        $labels = [];
        $data = [];
        
        for ($i = 29; $i >= 0; $i--) {
            $date = now()->subDays($i)->format('Y-m-d');
            $labels[] = now()->subDays($i)->format('d/m');
            
            $conversion = $conversions->firstWhere('date', $date);
            $data[] = $conversion ? $conversion->count : 0;
        }

        return [
            'datasets' => [
                [
                    'label' => 'Conversions',
                    'data' => $data,
                    'borderColor' => '#3b82f6',
                    'backgroundColor' => 'rgba(59, 130, 246, 0.1)',
                    'fill' => true,
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
                ],
            ],
            'plugins' => [
                'legend' => [
                    'display' => false,
                ],
            ],
        ];
    }
}