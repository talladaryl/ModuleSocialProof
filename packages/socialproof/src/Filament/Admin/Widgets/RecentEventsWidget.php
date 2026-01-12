<?php

namespace Packages\SocialProof\Filament\Admin\Widgets;

use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;
use Packages\SocialProof\Models\Event;

class RecentEventsWidget extends BaseWidget
{
    protected static ?string $heading = 'Événements Récents';
    protected static ?int $sort = 4;
    protected int|string|array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                Event::query()
                    ->with('widget')
                    ->latest()
                    ->limit(15)
            )
            ->columns([
                Tables\Columns\TextColumn::make('type')
                    ->label('Type')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'purchase' => 'success',
                        'signup' => 'info',
                        'review' => 'warning',
                        'visit' => 'gray',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('customer_name')
                    ->label('Client')
                    ->limit(20),
                Tables\Columns\TextColumn::make('customer_location')
                    ->label('Localisation')
                    ->limit(20),
                Tables\Columns\TextColumn::make('widget.name')
                    ->label('Widget')
                    ->limit(20),
                Tables\Columns\IconColumn::make('processed_at')
                    ->label('Traité')
                    ->boolean()
                    ->trueIcon('heroicon-o-check-circle')
                    ->falseIcon('heroicon-o-clock')
                    ->getStateUsing(fn ($record) => $record->processed_at !== null),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Date')
                    ->dateTime('d/m/Y H:i')
                    ->sortable(),
            ])
            ->defaultSort('created_at', 'desc')
            ->paginated([5, 10, 15]);
    }
}
