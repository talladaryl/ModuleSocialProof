<?php

namespace Packages\SocialProof\Filament\Admin\Resources\ClientResource\RelationManagers;

use Filament\Forms;
use Filament\Tables;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Schemas\Schema;

class ApiKeysRelationManager extends RelationManager
{
    protected static string $relationship = 'apiKeys';
    protected static ?string $title = 'Clés API';

    public function form(Schema $schema): Schema
    {
        return $schema->schema([
            Forms\Components\TextInput::make('name')->required(),
            Forms\Components\TextInput::make('rate_limit')->numeric()->default(1000),
            Forms\Components\Toggle::make('is_active')->default(true),
            Forms\Components\DateTimePicker::make('expires_at'),
        ]);
    }

    public function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name'),
                Tables\Columns\IconColumn::make('is_active')->boolean(),
                Tables\Columns\TextColumn::make('usage_count')->badge(),
                Tables\Columns\TextColumn::make('last_used_at')->dateTime('d/m/Y H:i'),
                Tables\Columns\TextColumn::make('expires_at')->dateTime('d/m/Y'),
            ])
            ->headerActions([Tables\Actions\CreateAction::make()])
            ->actions([
                Tables\Actions\Action::make('revoke')
                    ->icon('heroicon-o-no-symbol')
                    ->color('danger')
                    ->requiresConfirmation()
                    ->action(fn ($record) => $record->update(['is_active' => false])),
                Tables\Actions\DeleteAction::make(),
            ]);
    }
}
