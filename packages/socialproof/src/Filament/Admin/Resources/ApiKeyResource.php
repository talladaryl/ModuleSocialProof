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
use Filament\Forms\Components\CheckboxList;
use Filament\Forms\Components\TagsInput;
use Packages\SocialProof\Models\ApiKey;
use Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages;
use UnitEnum;
use BackedEnum;

class ApiKeyResource extends Resource
{
    protected static ?string $model = ApiKey::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-key';
    protected static string|UnitEnum|null $navigationGroup = 'API & Sécurité';
    protected static ?int $navigationSort = 1;
    protected static ?string $navigationLabel = 'Clés API';

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Informations Générales')
                ->columns(2)
                ->schema([
                    TextInput::make('name')->label('Nom')->required(),
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
            Section::make('Permissions')
                ->schema([
                    CheckboxList::make('permissions')
                        ->options([
                            'read' => 'Lecture',
                            'write' => 'Écriture',
                            'delete' => 'Suppression',
                            '*' => 'Toutes',
                        ])
                        ->columns(4),
                ]),
            Section::make('Restrictions')
                ->columns(2)
                ->schema([
                    TextInput::make('rate_limit')->numeric()->default(1000),
                    DateTimePicker::make('expires_at')->label('Expiration'),
                    TagsInput::make('ip_whitelist')->label('IPs autorisées'),
                    TagsInput::make('domain_whitelist')->label('Domaines autorisés'),
                ]),
            Section::make('Statut')
                ->columns(3)
                ->schema([
                    Toggle::make('is_active')->label('Active')->default(true),
                    TextInput::make('usage_count')->numeric()->disabled(),
                    DateTimePicker::make('last_used_at')->disabled(),
                ]),
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('client.name')->label('Client')->sortable(),
                Tables\Columns\IconColumn::make('is_active')->boolean(),
                Tables\Columns\TextColumn::make('usage_count')->numeric()->sortable(),
                Tables\Columns\TextColumn::make('expires_at')->dateTime('d/m/Y')->sortable(),
                Tables\Columns\TextColumn::make('last_used_at')->dateTime('d/m/Y H:i')->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('client_id')->relationship('client', 'name'),
                Tables\Filters\TernaryFilter::make('is_active'),
            ])
            ->actions([
                Action::make('view')->icon('heroicon-o-eye')->url(fn ($record) => static::getUrl('view', ['record' => $record])),
                Action::make('revoke')->icon('heroicon-o-no-symbol')->color('danger')->requiresConfirmation()
                    ->visible(fn ($record) => $record->is_active)
                    ->action(fn ($record) => $record->update(['is_active' => false])),
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([BulkActionGroup::make([DeleteBulkAction::make()])]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListApiKeys::route('/'),
            'create' => Pages\CreateApiKey::route('/create'),
            'view' => Pages\ViewApiKey::route('/{record}'),
            'edit' => Pages\EditApiKey::route('/{record}/edit'),
        ];
    }
}
