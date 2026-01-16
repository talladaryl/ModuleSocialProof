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
use Filament\Forms\Components\KeyValue;
use Packages\SocialProof\Models\Widget;
use Packages\SocialProof\Filament\Admin\Resources\WidgetResource\Pages;
use UnitEnum;
use BackedEnum;

class WidgetResource extends Resource
{
    protected static ?string $model = Widget::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-squares-2x2';
    protected static string|UnitEnum|null $navigationGroup = 'Social Proof';
    protected static ?int $navigationSort = 1;
    protected static ?string $navigationLabel = 'Widgets';

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Informations')
                ->columns(2)
                ->schema([
                    TextInput::make('name')
                        ->label('Nom')
                        ->required()
                        ->maxLength(191),
                    TextInput::make('domain')
                        ->label('Domaine')
                        ->required()
                        ->maxLength(191)
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
                    Select::make('campaign_id')
                        ->label('Campagne')
                        ->relationship('campaign', 'name')
                        ->searchable()
                        ->preload(),
                ]),

            Section::make('Configuration')
                ->columns(2)
                ->schema([
                    Toggle::make('is_active')
                        ->label('Actif')
                        ->default(true),
                    Select::make('status')
                        ->label('Statut')
                        ->options([
                            'active' => 'Actif',
                            'inactive' => 'Inactif',
                            'draft' => 'Brouillon',
                            'archived' => 'Archivé',
                        ])
                        ->default('active'),
                ]),

            Section::make('Clé API')
                ->schema([
                    TextInput::make('api_key')
                        ->label('Clé API')
                        ->disabled()
                        ->dehydrated(false)
                        ->helperText('Générée automatiquement à la création')
                        ->visibleOn('edit'),
                ]),

            Section::make('Paramètres')
                ->schema([
                    KeyValue::make('settings')
                        ->label('Configuration')
                        ->columnSpanFull()
                        ->helperText('Position, thème, durée d\'animation, etc.'),
                ]),
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Nom')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('domain')
                    ->label('Domaine')
                    ->searchable()
                    ->sortable()
                    ->copyable(),
                Tables\Columns\TextColumn::make('client.name')
                    ->label('Client')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('site.name')
                    ->label('Site')
                    ->searchable()
                    ->placeholder('-'),
                Tables\Columns\TextColumn::make('campaign.name')
                    ->label('Campagne')
                    ->limit(30)
                    ->placeholder('-')
                    ->toggleable(),
                Tables\Columns\TextColumn::make('status')
                    ->label('Statut')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'active' => 'success',
                        'inactive' => 'danger',
                        'draft' => 'warning',
                        'archived' => 'gray',
                        default => 'gray',
                    }),
                Tables\Columns\IconColumn::make('is_active')
                    ->label('Actif')
                    ->boolean(),
                Tables\Columns\TextColumn::make('events_count')
                    ->label('Événements')
                    ->counts('events')
                    ->badge()
                    ->color('info')
                    ->toggleable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Créé le')
                    ->dateTime('d/m/Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->options([
                        'active' => 'Actif',
                        'inactive' => 'Inactif',
                        'draft' => 'Brouillon',
                        'archived' => 'Archivé',
                    ]),
                Tables\Filters\TernaryFilter::make('is_active')
                    ->label('Actif'),
                Tables\Filters\SelectFilter::make('client_id')
                    ->label('Client')
                    ->relationship('client', 'name'),
                Tables\Filters\SelectFilter::make('site_id')
                    ->label('Site')
                    ->relationship('site', 'name'),
            ])
            ->actions([
                Action::make('view')
                    ->label('Voir')
                    ->icon('heroicon-o-eye')
                    ->url(fn ($record) => static::getUrl('view', ['record' => $record])),
                Action::make('regenerate_key')
                    ->label('Régénérer clé')
                    ->icon('heroicon-o-key')
                    ->color('warning')
                    ->requiresConfirmation()
                    ->action(function ($record) {
                        $newKey = $record->generateApiKey();
                        \Filament\Notifications\Notification::make()
                            ->title('Clé API régénérée')
                            ->body("Nouvelle clé: {$newKey}")
                            ->success()
                            ->send();
                    }),
                Action::make('toggle_status')
                    ->label(fn ($record) => $record->is_active ? 'Désactiver' : 'Activer')
                    ->icon(fn ($record) => $record->is_active ? 'heroicon-o-pause' : 'heroicon-o-play')
                    ->color(fn ($record) => $record->is_active ? 'warning' : 'success')
                    ->action(fn ($record) => $record->update(['is_active' => !$record->is_active])),
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([
                BulkActionGroup::make([
                    \Filament\Actions\BulkAction::make('activate')
                        ->label('Activer')
                        ->icon('heroicon-o-check')
                        ->action(fn ($records) => $records->each->update(['is_active' => true, 'status' => 'active'])),
                    \Filament\Actions\BulkAction::make('deactivate')
                        ->label('Désactiver')
                        ->icon('heroicon-o-x-mark')
                        ->action(fn ($records) => $records->each->update(['is_active' => false, 'status' => 'inactive'])),
                    DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('created_at', 'desc');
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListWidgets::route('/'),
            'create' => Pages\CreateWidget::route('/create'),
            'view' => Pages\ViewWidget::route('/{record}'),
            'edit' => Pages\EditWidget::route('/{record}/edit'),
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::where('is_active', true)->count();
    }

    public static function getNavigationBadgeColor(): ?string
    {
        return 'success';
    }
}
