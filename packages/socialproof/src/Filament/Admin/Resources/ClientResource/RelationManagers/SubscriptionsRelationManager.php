<?php

namespace Packages\SocialProof\Filament\Admin\Resources\ClientResource\RelationManagers;

use Filament\Forms;
use Filament\Tables;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Schemas\Schema;

class SubscriptionsRelationManager extends RelationManager
{
    protected static string $relationship = 'subscriptions';
    protected static ?string $title = 'Abonnements';

    public function form(Schema $schema): Schema
    {
        return $schema->schema([
            Forms\Components\Select::make('plan_id')
                ->relationship('plan', 'name')
                ->required(),
            Forms\Components\Select::make('billing_cycle')
                ->options(['monthly' => 'Mensuel', 'yearly' => 'Annuel'])
                ->required(),
            Forms\Components\Select::make('status')
                ->options([
                    'active' => 'Actif',
                    'trialing' => 'Essai',
                    'past_due' => 'En retard',
                    'canceled' => 'Annulé',
                ])
                ->required(),
            Forms\Components\TextInput::make('amount')->numeric()->prefix('€'),
            Forms\Components\DateTimePicker::make('starts_at'),
            Forms\Components\DateTimePicker::make('ends_at'),
        ]);
    }

    public function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('plan.name')->badge(),
                Tables\Columns\TextColumn::make('billing_cycle')
                    ->badge()
                    ->color(fn ($state) => $state === 'yearly' ? 'success' : 'info'),
                Tables\Columns\TextColumn::make('status')
                    ->badge()
                    ->color(fn ($state) => match ($state) {
                        'active' => 'success',
                        'trialing' => 'warning',
                        'canceled' => 'danger',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('amount')->money('EUR'),
                Tables\Columns\TextColumn::make('ends_at')->dateTime('d/m/Y'),
            ])
            ->headerActions([Tables\Actions\CreateAction::make()])
            ->actions([Tables\Actions\EditAction::make(), Tables\Actions\DeleteAction::make()]);
    }
}
