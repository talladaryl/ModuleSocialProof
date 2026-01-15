<?php

namespace Packages\SocialProof\Filament\Client\Resources;

use Filament\Tables;
use Filament\Resources\Resource;
use Filament\Actions\Action;
use Filament\Schemas\Schema;
use Filament\Schemas\Components\Section as SchemaSection;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Placeholder;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Models\Subscription;
use Packages\SocialProof\Filament\Client\Resources\ClientSubscriptionResource\Pages;
use UnitEnum;
use BackedEnum;

class ClientSubscriptionResource extends Resource
{
    protected static ?string $model = Subscription::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-credit-card';
    protected static string|UnitEnum|null $navigationGroup = 'Account';
    protected static ?int $navigationSort = 1;
    protected static ?string $navigationLabel = 'Abonnement';

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->where('client_id', Auth::guard('client')->user()->client_id)
            ->with('plan');
    }

    /**
     * Configuration du formulaire via Schema
     */
    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            SchemaSection::make('Détails de l\'abonnement')
                ->columns(2)
                ->schema([
                    Placeholder::make('plan_name')
                        ->label('Plan actuel')
                        ->content(fn ($record) => $record->plan?->name),
                    
                    Placeholder::make('status')
                        ->label('État du compte')
                        ->content(fn ($record) => strtoupper($record->status ?? 'INCONNU')),
                    
                    TextInput::make('current_period_end')
                        ->label('Fin de période')
                        ->disabled(),
                ]),
        ]);
    }

    /**
     * Correction de l'erreur fatale : Remplacement d'Infolist par Schema
     */
    public static function infolist(Schema $schema): Schema
    {
        return $schema
            ->schema([
                SchemaSection::make('Plan actuel')
                    ->columns(4)
                    ->schema([
                        // Dans le moteur Schema, on utilise Placeholder pour l'affichage en lecture seule
                        Placeholder::make('plan.name')
                            ->label('Plan')
                            ->content(fn ($record) => $record->plan?->name),
                        
                        Placeholder::make('status')
                            ->label('Statut')
                            ->content(fn ($record) => match ($record->status) {
                                'active' => 'Actif',
                                'trialing' => 'Essai',
                                'past_due' => 'Impayé',
                                'canceled' => 'Annulé',
                                default => $record->status,
                            }),
                        
                        Placeholder::make('plan.price')
                            ->label('Prix')
                            ->content(fn ($record) => number_format($record->plan?->price, 2) . ' € / mois'),
                        
                        Placeholder::make('current_period_end')
                            ->label('Prochaine facturation')
                            ->content(fn ($record) => $record->current_period_end?->format('d/m/Y')),
                    ]),

                SchemaSection::make('Limites du plan')
                    ->columns(3)
                    ->schema([
                        Placeholder::make('plan.max_sites')
                            ->label('Sites autorisés')
                            ->content(fn ($record) => $record->plan?->max_sites === -1 ? 'Illimité' : $record->plan?->max_sites),
                        
                        Placeholder::make('plan.max_widgets')
                            ->label('Widgets autorisés')
                            ->content(fn ($record) => $record->plan?->max_widgets === -1 ? 'Illimité' : $record->plan?->max_widgets),
                        
                        Placeholder::make('plan.max_monthly_events')
                            ->label('Événements / mois')
                            ->content(fn ($record) => $record->plan?->max_monthly_events === -1 ? 'Illimité' : number_format($record->plan?->max_monthly_events)),
                    ]),
            ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('plan.name')
                    ->label('Plan')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('status')
                    ->label('Statut')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'active' => 'success',
                        'trialing' => 'info',
                        'past_due' => 'warning',
                        'canceled' => 'danger',
                        default => 'gray',
                    }),

                Tables\Columns\TextColumn::make('plan.price')
                    ->label('Prix')
                    ->money('EUR')
                    ->suffix('/mois'),

                Tables\Columns\TextColumn::make('current_period_end')
                    ->label('Fin de période')
                    ->dateTime('d/m/Y')
                    ->sortable(),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Souscrit le')
                    ->dateTime('d/m/Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->actions([
                Action::make('view')
                    ->label('Détails')
                    ->icon('heroicon-o-eye')
                    ->url(fn ($record) => static::getUrl('view', ['record' => $record])),
            ])
            ->bulkActions([]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListClientSubscriptions::route('/'),
            'view' => Pages\ViewClientSubscription::route('/{record}'),
        ];
    }

    public static function canCreate(): bool
    {
        return false;
    }
}