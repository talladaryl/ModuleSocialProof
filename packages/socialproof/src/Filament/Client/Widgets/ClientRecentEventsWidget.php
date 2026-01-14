<?php

namespace Packages\SocialProof\Filament\Client\Widgets;

use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Models\Event;

class ClientRecentEventsWidget extends BaseWidget
{
    protected static ?string $heading = 'Événements Récents';
    protected int | string | array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                Event::where('client_id', Auth::guard('client')->user()->client_id)
                    ->latest()
                    ->limit(10)
            )
            ->columns([
                Tables\Columns\TextColumn::make('type')
                    ->label('Type')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'purchase' => 'success',
                        'signup' => 'info',
                        'view' => 'warning',
                        default => 'gray',
                    }),
                    
                Tables\Columns\TextColumn::make('data.customer_name')
                    ->label('Client')
                    ->default('Anonyme'),
                    
                Tables\Columns\TextColumn::make('data.product_name')
                    ->label('Produit')
                    ->limit(30),
                    
                Tables\Columns\TextColumn::make('data.amount')
                    ->label('Montant')
                    ->money('EUR')
                    ->default('-'),
                    
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Date')
                    ->dateTime('d/m/Y H:i')
                    ->sortable(),
            ])
            ->defaultSort('created_at', 'desc')
            ->paginated(false);
    }
}