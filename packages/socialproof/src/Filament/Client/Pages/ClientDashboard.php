<?php

namespace Packages\SocialProof\Filament\Client\Pages;

use Filament\Pages\Dashboard;
use Filament\Widgets\StatsOverviewWidget;
use Packages\SocialProof\Filament\Client\Widgets\ClientStatsWidget;
use Packages\SocialProof\Filament\Client\Widgets\ClientRecentEventsWidget;
use Packages\SocialProof\Filament\Client\Widgets\ClientConversionsChartWidget;
use Packages\SocialProof\Filament\Client\Widgets\ClientQuotaWidget;

class ClientDashboard extends Dashboard
{
    protected static ?string $navigationIcon = 'heroicon-o-home';
    protected static string $view = 'filament-panels::pages.dashboard';
    protected static ?string $navigationGroup = 'Dashboard';
    protected static ?int $navigationSort = 1;

    public function getWidgets(): array
    {
        return [
            ClientStatsWidget::class,
            ClientQuotaWidget::class,
            ClientConversionsChartWidget::class,
            ClientRecentEventsWidget::class,
        ];
    }

    public function getColumns(): int | string | array
    {
        return [
            'md' => 2,
            'xl' => 3,
        ];
    }
}