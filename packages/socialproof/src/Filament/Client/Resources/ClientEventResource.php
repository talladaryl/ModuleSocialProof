<?php

namespace Packages\SocialProof\Filament\Client\Resources;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Models\Event;
use Packages\SocialProof\Filament\Client\Resources\ClientEventResource\Pages;

class ClientEventResource extends Resource
{
    protected static ?string $model = Event::class;
    protected static ?string $navigationIcon = 'heroicon-o-bolt';
    protected static ?string $navigationLabel = 'Événements';
    protected static ?string $navigationGroup = 'Tracking';
    protected static ?int $navigationSort = 1;

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->where('client_id', Auth::guard('client')->user()->client_id);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('event_id')
                    ->label('ID')
                    ->searchable()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),

                Tables\Columns\TextColumn::make('type')
                    ->label('Type')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'purchase' => 'success',
                        'signup' => 'info',
                        'view' => 'warning',
                        'click' => 'primary',
                        'custom' => 'gray',
                        default => 'gray',
                    })
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('site.name')
                    ->label('Site')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('data.customer_name')
                    ->label('Client')
                    ->default('Anonyme')
                    ->searchable(),

                Tables\Columns\TextColumn::make('data.product_name')
                    ->label('Produit')
                    ->limit(30)
                    ->default('-'),

                Tables\Columns\TextColumn::make('data.amount')
                    ->label('Montant')
                    ->money('EUR')
                    ->default('-'),

                Tables\Columns\TextColumn::make('ip_address')
                    ->label('IP')
                    ->toggleable(isToggledHiddenByDefault: true),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Date')
                    ->dateTime('d/m/Y H:i')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('type')
                    ->label('Type')
                    ->options([
                        'purchase' => 'Achat',
                        'signup' => 'Inscription',
                        'view' => 'Vue',
                        'click' => 'Clic',
                        'custom' => 'Personnalisé',
                    ]),

                Tables\Filters\SelectFilter::make('site_id')
                    ->label('Site')
                    ->relationship('site', 'name', fn ($query) => 
                        $query->where('client_id', Auth::guard('client')->user()->client_id)
                    ),

                Tables\Filters\Filter::make('created_at')
                    ->form([
                        Forms\Components\DatePicker::make('from')
                            ->label('Du'),
                        Forms\Components\DatePicker::make('until')
                            ->label('Au'),
                    ])
                    ->query(function (Builder $query, array $data): Builder {
                        return $query
                            ->when(
                                $data['from'],
                                fn (Builder $query, $date): Builder => $query->whereDate('created_at', '>=', $date),
                            )
                            ->when(
                                $data['until'],
                                fn (Builder $query, $date): Builder => $query->whereDate('created_at', '<=', $date),
                            );
                    }),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
            ])
            ->bulkActions([])
            ->defaultSort('created_at', 'desc');
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListClientEvents::route('/'),
            'view' => Pages\ViewClientEvent::route('/{record}'), 
        ];
    }

    public static function canCreate(): bool
    {
        return false;
    }
}
