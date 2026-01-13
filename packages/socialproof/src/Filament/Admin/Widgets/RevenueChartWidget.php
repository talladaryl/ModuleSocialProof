<?php

namespace Packages\SocialProof\Filament\Admin\Widgets;

use Filament\Widgets\ChartWidget;
use Packages\SocialProof\Models\Subscription;
use Carbon\Carbon;

class RevenueChartWidget extends ChartWidget
{
    protected ?string $heading = 'Revenus (12 derniers mois)';
    protected static ?int $sort = 2;
    protected int|string|array $columnSpan = 1;

    protected function getData(): array
    {
        $data = [];
        $labels = [];

        for ($i = 11; $i >= 0; $i--) {
            $date = Carbon::now()->subMonths($i);
            $labels[] = $date->format('M Y');
            
            $monthlyRevenue = Subscription::where('status', 'active')
                ->whereMonth('created_at', '<=', $date->month)
                ->whereYear('created_at', '<=', $date->year)
                ->get()
                ->sum(function ($sub) {
                    return $sub->billing_cycle === 'yearly' 
                        ? $sub->amount / 12 
                        : $sub->amount;
                });
            
            $data[] = $monthlyRevenue;
        }

        return [
            'datasets' => [
                [
                    'label' => 'MRR (€)',
                    'data' => $data,
                    'backgroundColor' => 'rgba(99, 102, 241, 0.2)',
                    'borderColor' => 'rgb(99, 102, 241)',
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
}
