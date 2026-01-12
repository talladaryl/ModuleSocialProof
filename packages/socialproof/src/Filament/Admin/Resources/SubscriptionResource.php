<?php

namespace Packages\SocialProof\Filament\Admin\Resources;

use Filament\Tables;
use Filament\Resources\Resource;
use Filament\Actions\Action;
use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Schemas\Schema;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\KeyValue;
use Packages\SocialProof\Models\Subscription;
use Packages\SocialProof\Filament\Admin\Resources\SubscriptionResource\Pages;
use UnitEnum;
use BackedEnum;

class SubscriptionResource extends Resource
{
    protected static ?string $model = Subscription::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-credit-card';
    protected static string|UnitEnum|null $navigationGroup = 'Clients & Abonnements';
    protected static ?int $navigationSort = 2;
    protected static ?string $navigationLabel = 'Abonnements';

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Abonnement')
                ->columns(2)
                ->schema([
                    Select::make('client_id')
                        ->relationship('client', 'name')
                        ->searchable()
                        ->preload()
                        ->required(),
                    Select::make('plan_id')
                        ->relationship('plan', 'name')
                        ->searchable()
                        ->preload()
                        ->required(),
                    Select::make('billing_cycle')
                        ->options(['monthly' => 'Mensuel', 'yearly' => 'Annuel'])
                        ->required(),
                    Select::make('status')
                        ->options([
                            'active' => 'Actif',
                            'trialing' => 'Essai',
                            'past_due' => 'En retard',
                            'canceled' => 'Annulé',
                            'unpaid' => 'Impayé',
                        ])
                        ->required(),
                ]),
            Section::make('Paiement')
                ->columns(3)
                ->schema([
                    TextInput::make('amount')->numeric()->prefix('€')->required(),
                    Select::make('currency')
                        ->options(['EUR' => 'EUR', 'USD' => 'USD', 'GBP' => 'GBP'])
                        ->default('EUR'),
                    TextInput::make('payment_method'),
                    TextInput::make('payment_provider'),
                    TextInput::make('provider_subscription_id'),
                    TextInput::make('provider_customer_id'),
                ]),
            Section::make('Dates')
                ->columns(3)
                ->schema([
                    DateTimePicker::make('trial_ends_at')->label('Fin essai'),
                    DateTimePicker::make('starts_at')->label('Début'),
                    DateTimePicker::make('ends_at')->label('Fin'),
                    DateTimePicker::make('canceled_at')->label('Annulé le'),
                    DateTimePicker::make('last_payment_at')->label('Dernier paiement'),
                    DateTimePicker::make('next_payment_at')->label('Prochain paiement'),
                ]),
            Section::make('Métadonnées')
                ->schema([
                    KeyValue::make('metadata')->columnSpanFull(),
                ]),
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('client.name')
                    ->label('Client')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('plan.name')
                    ->label('Plan')
                    ->badge()
                    ->color(fn (?string $state) => match ($state) {
                        'Free' => 'gray',
                        'Starter' => 'info',
                        'Professional' => 'warning',
                        'Enterprise' => 'success',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('billing_cycle')
                    ->label('Cycle')
                    ->badge()
                    ->color(fn ($state) => $state === 'yearly' ? 'success' : 'info'),
                Tables\Columns\TextColumn::make('amount')
                    ->label('Montant')
                    ->money('EUR')
                    ->sortable(),
                Tables\Columns\TextColumn::make('status')
                    ->label('Statut')
                    ->badge()
                    ->color(fn ($state) => match ($state) {
                        'active' => 'success',
                        'trialing' => 'warning',
                        'past_due' => 'danger',
                        'canceled' => 'gray',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('ends_at')
                    ->label('Expire le')
                    ->dateTime('d/m/Y')
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Créé le')
                    ->dateTime('d/m/Y')
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->options([
                        'active' => 'Actif',
                        'trialing' => 'Essai',
                        'past_due' => 'En retard',
                        'canceled' => 'Annulé',
                    ]),
                Tables\Filters\SelectFilter::make('billing_cycle')
                    ->options(['monthly' => 'Mensuel', 'yearly' => 'Annuel']),
                Tables\Filters\SelectFilter::make('plan_id')
                    ->relationship('plan', 'name'),
            ])
            ->actions([
                Action::make('view')
                    ->label('Voir')
                    ->icon('heroicon-o-eye')
                    ->url(fn ($record) => static::getUrl('view', ['record' => $record])),
                Action::make('cancel')
                    ->label('Annuler')
                    ->icon('heroicon-o-x-circle')
                    ->color('danger')
                    ->requiresConfirmation()
                    ->visible(fn ($record) => $record->status === 'active')
                    ->action(fn ($record) => $record->cancel()),
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListSubscriptions::route('/'),
            'create' => Pages\CreateSubscription::route('/create'),
            'view' => Pages\ViewSubscription::route('/{record}'),
            'edit' => Pages\EditSubscription::route('/{record}/edit'),
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::where('status', 'active')->count();
    }
}
