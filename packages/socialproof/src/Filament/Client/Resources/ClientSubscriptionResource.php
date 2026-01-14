<?php

namespace Packages\SocialProof\Filament\Client\Resources;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Infolists;
use Filament\Infolists\Infolist;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Models\Subscription;
use Packages\SocialProof\Filament\Client\Resources\ClientSubscriptionResource\Pages;

class ClientSubscriptionResource extends Resource
{
    protected static ?string $model = Subscription::class;
    protected static ?string $navigationIcon = 'heroicon-o-credit-card';
    protected static ?string $navigationLabel = 'Abonnement';
    protected static ?string $navigationGroup = 'Account';
    protected static ?int $navigationSort = 1;

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->where('client_id', Auth::guard('client')->user()->client_id)
            ->with('plan');
    }

    public static function infolist(Infolist $infolist): Infolist
    {
        return $infolist
            ->schema([
                Infolists\Components\Section::make('Plan actuel')
                    ->schema([
                        Infolists\Components\TextEntry::make('plan.name')
                            ->label('Plan'),
                        Infolists\Components\TextEntry::make('status')
                            ->label('Statut')
                            ->badge()
                            ->color(fn (string $state): string => match ($state) {
                                'active' => 'success',
                                'trialing' => 'info',
                                'past_due' => 'warning',
                                'canceled' => 'danger',
                                default => 'gray',
                            }),
                        Infolists\Components\TextEntry::make('plan.price')
                            ->label('Prix')
                            ->money('EUR')
                            ->suffix('/mois'),
                        Infolists\Components\TextEntry::make('current_period_end')
                            ->label('Prochaine facturation')
                            ->dateTime('d/m/Y'),
                    ])->columns(4),
                Infolists\Components\Section::make('Limites du plan')
                    ->schema([
                        Infolists\Components\TextEntry::make('plan.max_sites')
                            ->label('Sites max')
                            ->formatStateUsing(fn ($state) => $state === -1 ? 'Illimité' : $state),
                        Infolists\Components\TextEntry::make('plan.max_widgets')
                            ->label('Widgets max')
                            ->formatStateUsing(fn ($state) => $state === -1 ? 'Illimité' : $state),
                        Infolists\Components\TextEntry::make('plan.max_monthly_events')
                            ->label('Événements/mois')
                            ->formatStateUsing(fn ($state) => $state === -1 ? 'Illimité' : number_format($state)),
                    ])->columns(3),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('plan.name')
                    ->label('Plan')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\BadgeColumn::make('status')
                    ->label('Statut')
                    ->colors([
                        'success' => 'active',
                        'info' => 'trialing',
                        'warning' => 'past_due',
                        'danger' => 'canceled',
                    ]),
                Tables\Columns\TextColumn::make('plan.price')
                    ->label('Prix')
                    ->money('EUR')
                    ->suffix('/mois'),
                Tables\Columns\TextColumn::make('current_period_end')
                    ->label('Période fin')
                    ->dateTime('d/m/Y')
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Souscrit le')
                    ->dateTime('d/m/Y')
                    ->sortable(),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
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
