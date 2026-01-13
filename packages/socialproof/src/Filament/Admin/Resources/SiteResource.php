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
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\DateTimePicker;
use Packages\SocialProof\Models\Site;
use Packages\SocialProof\Filament\Admin\Resources\SiteResource\Pages;
use UnitEnum;
use BackedEnum;

class SiteResource extends Resource
{
    protected static ?string $model = Site::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-globe-alt';
    protected static string|UnitEnum|null $navigationGroup = 'Sites & Teams';
    protected static ?int $navigationSort = 1;
    protected static ?string $navigationLabel = 'Sites';

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Informations')
                ->columns(2)
                ->schema([
                    Select::make('client_id')
                        ->label('Client')
                        ->relationship('client', 'name')
                        ->searchable()
                        ->preload()
                        ->required(),
                    TextInput::make('name')->label('Nom')->required(),
                    TextInput::make('domain')->label('Domaine')->required(),
                    TextInput::make('url')->label('URL')->url(),
                    Textarea::make('description')->columnSpanFull(),
                ]),
            Section::make('Configuration')
                ->columns(3)
                ->schema([
                    TextInput::make('favicon_url')->label('Favicon URL'),
                    Select::make('timezone')
                        ->label('Fuseau horaire')
                        ->options(['Europe/Paris' => 'Europe/Paris', 'UTC' => 'UTC'])
                        ->default('Europe/Paris'),
                    Select::make('language')
                        ->label('Langue')
                        ->options(['fr' => 'Français', 'en' => 'English'])
                        ->default('fr'),
                ]),
            Section::make('Statut')
                ->columns(3)
                ->schema([
                    Toggle::make('is_active')->label('Actif')->default(true),
                    DateTimePicker::make('verified_at')->label('Vérifié le'),
                    DateTimePicker::make('last_activity_at')->label('Dernière activité')->disabled(),
                ]),
            Section::make('Paramètres')
                ->schema([
                    KeyValue::make('settings')->label('Paramètres')->columnSpanFull(),
                    KeyValue::make('tracking_config')->label('Configuration tracking')->columnSpanFull(),
                ]),
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')->label('Nom')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('domain')->label('Domaine')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('client.name')->label('Client')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('widgets_count')
                    ->label('Widgets')
                    ->counts('widgets')
                    ->badge()
                    ->color('info'),
                Tables\Columns\TextColumn::make('campaigns_count')
                    ->label('Campagnes')
                    ->counts('campaigns')
                    ->badge()
                    ->color('success'),
                Tables\Columns\IconColumn::make('is_active')->label('Actif')->boolean(),
                Tables\Columns\IconColumn::make('verified_at')
                    ->label('Vérifié')
                    ->boolean()
                    ->getStateUsing(fn ($record) => $record->verified_at !== null),
                Tables\Columns\TextColumn::make('last_activity_at')
                    ->label('Dernière activité')
                    ->dateTime('d/m/Y H:i')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('client_id')
                    ->label('Client')
                    ->relationship('client', 'name'),
                Tables\Filters\TernaryFilter::make('is_active')->label('Actif'),
                Tables\Filters\TernaryFilter::make('verified_at')
                    ->label('Vérifié')
                    ->nullable(),
            ])
            ->actions([
                Action::make('view')
                    ->label('Voir')
                    ->icon('heroicon-o-eye')
                    ->url(fn ($record) => static::getUrl('view', ['record' => $record])),
                Action::make('verify')
                    ->label('Vérifier')
                    ->icon('heroicon-o-check-badge')
                    ->color('success')
                    ->visible(fn ($record) => !$record->verified_at)
                    ->action(fn ($record) => $record->update(['verified_at' => now()])),
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([
                BulkActionGroup::make([
                    \Filament\Actions\BulkAction::make('activate')
                        ->label('Activer')
                        ->icon('heroicon-o-check')
                        ->action(fn ($records) => $records->each->update(['is_active' => true])),
                    \Filament\Actions\BulkAction::make('deactivate')
                        ->label('Désactiver')
                        ->icon('heroicon-o-x-mark')
                        ->action(fn ($records) => $records->each->update(['is_active' => false])),
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
            'index' => Pages\ListSites::route('/'),
            'create' => Pages\CreateSite::route('/create'),
            'view' => Pages\ViewSite::route('/{record}'),
            'edit' => Pages\EditSite::route('/{record}/edit'),
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::where('is_active', true)->count();
    }
}

