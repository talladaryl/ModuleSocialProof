<?php

namespace Packages\SocialProof\Filament\Admin\Widgets;

use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;
use Packages\SocialProof\Models\Client;

class TopClientsWidget extends BaseWidget
{
    protected static ?string $heading = 'Top Clients';
    protected static ?int $sort = 3;
    protected int|string|array $columnSpan = 1;

    public function table(Table $table): Table
    {
        return $table
            ->query(
                Client::query()
                    ->where('status', 'active')
                    ->withCount(['sites', 'widgets', 'notifications'])
                    ->orderByDesc('widgets_count')
                    ->limit(10)
            )
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Client')
                    ->searchable()
                    ->limit(20),
                Tables\Columns\TextColumn::make('company')
                    ->label('Entreprise')
                    ->limit(15)
                    ->toggleable(),
                Tables\Columns\TextColumn::make('sites_count')
                    ->label('Sites')
                    ->badge()
                    ->color('info'),
                Tables\Columns\TextColumn::make('widgets_count')
                    ->label('Widgets')
                    ->badge()
                    ->color('success'),
                Tables\Columns\TextColumn::make('subscription.plan.name')
                    ->label('Plan')
                    ->badge()
                    ->color(fn (?string $state) => match ($state) {
                        'Free' => 'gray',
                        'Starter' => 'info',
                        'Professional' => 'warning',
                        'Enterprise' => 'success',
                        default => 'gray',
                    }),
            ])
            ->paginated(false);
    }
}
