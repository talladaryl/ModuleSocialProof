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
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\DateTimePicker;
use Packages\SocialProof\Models\Domain;
use Packages\SocialProof\Filament\Admin\Resources\DomainResource\Pages;
use UnitEnum;
use BackedEnum;

class DomainResource extends Resource
{
    protected static ?string $model = Domain::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-globe-alt';
    protected static string|UnitEnum|null $navigationGroup = 'Sites & Teams';
    protected static ?int $navigationSort = 3;
    protected static ?string $navigationLabel = 'Domaines';

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Informations du Domaine')
                ->columns(2)
                ->schema([
                    TextInput::make('domain')
                        ->label('Domaine')
                        ->required()
                        ->url()
                        ->placeholder('exemple.com'),
                    Select::make('client_id')
                        ->label('Client')
                        ->relationship('client', 'name')
                        ->searchable()
                        ->preload()
                        ->required(),
                    Select::make('site_id')
                        ->label('Site')
                        ->relationship('site', 'name')
                        ->searchable()
                        ->preload(),
                ]),
            Section::make('Vérification')
                ->columns(2)
                ->schema([
                    Toggle::make('is_verified')
                        ->label('Vérifié')
                        ->default(false),
                    DateTimePicker::make('verified_at')
                        ->label('Vérifié le'),
                    TextInput::make('verification_token')
                        ->label('Token de vérification')
                        ->disabled(),
                ]),
            Section::make('Statut')
                ->columns(2)
                ->schema([
                    Toggle::make('is_active')
                        ->label('Actif')
                        ->default(true),
                    Toggle::make('is_primary')
                        ->label('Domaine principal')
                        ->default(false),
                ]),
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('domain')
                    ->label('Domaine')
                    ->searchable()
                    ->sortable()
                    ->copyable(),
                Tables\Columns\TextColumn::make('client.name')
                    ->label('Client')
                    ->sortable(),
                Tables\Columns\TextColumn::make('site.name')
                    ->label('Site')
                    ->placeholder('-'),
                Tables\Columns\IconColumn::make('is_verified')
                    ->label('Vérifié')
                    ->boolean(),
                Tables\Columns\IconColumn::make('is_active')
                    ->label('Actif')
                    ->boolean(),
                Tables\Columns\IconColumn::make('is_primary')
                    ->label('Principal')
                    ->boolean(),
                Tables\Columns\TextColumn::make('verified_at')
                    ->label('Vérifié le')
                    ->dateTime('d/m/Y')
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Créé le')
                    ->dateTime('d/m/Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('client_id')
                    ->relationship('client', 'name'),
                Tables\Filters\TernaryFilter::make('is_verified')
                    ->label('Vérifié'),
                Tables\Filters\TernaryFilter::make('is_active')
                    ->label('Actif'),
            ])
            ->actions([
                Action::make('verify')
                    ->label('Vérifier')
                    ->icon('heroicon-o-check-badge')
                    ->color('success')
                    ->requiresConfirmation()
                    ->visible(fn ($record) => !$record->is_verified)
                    ->action(fn ($record) => $record->update(['is_verified' => true, 'verified_at' => now()])),
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([BulkActionGroup::make([DeleteBulkAction::make()])]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListDomains::route('/'),
            'create' => Pages\CreateDomain::route('/create'),
            'edit' => Pages\EditDomain::route('/{record}/edit'),
        ];
    }
}
