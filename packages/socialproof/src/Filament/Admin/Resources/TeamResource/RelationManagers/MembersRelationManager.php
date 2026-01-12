<?php

namespace Packages\SocialProof\Filament\Admin\Resources\TeamResource\RelationManagers;

use Filament\Forms;
use Filament\Tables;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Schemas\Schema;

class MembersRelationManager extends RelationManager
{
    protected static string $relationship = 'members';
    protected static ?string $title = 'Membres';

    public function form(Schema $schema): Schema
    {
        return $schema->schema([
            Forms\Components\TextInput::make('email')->email()->required(),
            Forms\Components\Select::make('role')
                ->options([
                    'admin' => 'Admin',
                    'manager' => 'Manager',
                    'editor' => 'Éditeur',
                    'viewer' => 'Lecteur',
                ])
                ->required(),
            Forms\Components\Select::make('status')
                ->options([
                    'pending' => 'En attente',
                    'active' => 'Actif',
                    'inactive' => 'Inactif',
                ])
                ->default('pending'),
        ]);
    }

    public function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('email')->searchable(),
                Tables\Columns\TextColumn::make('role')
                    ->badge()
                    ->color(fn ($state) => match ($state) {
                        'admin' => 'danger',
                        'manager' => 'warning',
                        'editor' => 'info',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('status')
                    ->badge()
                    ->color(fn ($state) => match ($state) {
                        'active' => 'success',
                        'pending' => 'warning',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('joined_at')->dateTime('d/m/Y'),
            ])
            ->headerActions([Tables\Actions\CreateAction::make()])
            ->actions([Tables\Actions\EditAction::make(), Tables\Actions\DeleteAction::make()]);
    }
}
