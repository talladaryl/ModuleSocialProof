<?php

namespace Packages\SocialProof\Filament\Admin\Pages;

use Filament\Pages\Dashboard as BaseDashboard;

class AdminDashboard extends BaseDashboard
{
    protected static ?string $navigationIcon = 'heroicon-o-home';
    protected static ?string $navigationLabel = 'Dashboard';
    protected static ?string $title = 'Dashboard Admin SocialProof';
    protected static ?int $navigationSort = -2;

    public function getWidgets(): array
    {
        return [
            \Packages\SocialProof\Filament\Admin\Widgets\StatsOverviewWidget::class,
            \Packages\SocialProof\Filament\Admin\Widgets\RevenueChartWidget::class,
            \Packages\SocialProof\Filament\Admin\Widgets\TopClientsWidget::class,
            \Packages\SocialProof\Filament\Admin\Widgets\RecentEventsWidget::class,
        ];
    }

    public function getColumns(): int|string|array
    {
        return 2;
    }
}
