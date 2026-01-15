<?php

namespace Packages\SocialProof\Filament\Client\Pages;

use Filament\Pages\Dashboard as BaseDashboard;
use Packages\SocialProof\Filament\Client\Widgets\ClientStatsWidget;
use Packages\SocialProof\Filament\Client\Widgets\ClientRecentEventsWidget;
use Packages\SocialProof\Filament\Client\Widgets\ClientConversionsChartWidget;
use Packages\SocialProof\Filament\Client\Widgets\ClientQuotaWidget;
use BackedEnum;

class ClientDashboard extends BaseDashboard
{
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-home';
    protected static ?string $navigationLabel = 'Dashboard';
    protected static ?string $title = 'Dashboard';
    protected static ?int $navigationSort = -2;

    public function getWidgets(): array
    {
        return [
            ClientStatsWidget::class,
            ClientQuotaWidget::class,
            ClientConversionsChartWidget::class,
            ClientRecentEventsWidget::class,
        ];
    }

    public function getColumns(): int|array
    {
        return [
            'md' => 2,
            'xl' => 3,
        ];
    }
}
