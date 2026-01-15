<?php

namespace Packages\SocialProof\Filament\Client\Widgets;

use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Models\Event;

class ClientRecentEventsWidget extends BaseWidget
{
    // TableWidget : $heading est STATIQUE
    protected static ?string $heading = 'Événements Récents';
    
    protected int | string | array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                // On retire le ->limit(10) d'ici pour laisser Filament gérer l'affichage
                Event::where('client_id', Auth::guard('client')->user()->client_id)
                    ->latest()
            )
            // On limite via la pagination de Filament pour éviter les bugs de tri
            ->defaultPaginationPageOption(10)
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
                    ->placeholder('Anonyme'), // Utilisation de placeholder au lieu de default pour la clarté
                    
                Tables\Columns\TextColumn::make('data.product_name')
                    ->label('Produit')
                    ->limit(30)
                    ->placeholder('-'),
                    
                Tables\Columns\TextColumn::make('data.amount')
                    ->label('Montant')
                    ->money('EUR')
                    ->placeholder('-'),
                    
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Il y a')
                    ->since() // Plus dynamique pour un dashboard : affiche "il y a 2 min"
                    ->sortable(),
            ])
            ->defaultSort('created_at', 'desc')
            ->paginated(false); // On garde paginated(false) car c'est un widget "aperçu"
    }
}