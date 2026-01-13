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
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\KeyValue;
use Packages\SocialProof\Models\NotificationExtended;
use Packages\SocialProof\Filament\Admin\Resources\NotificationExtendedResource\Pages;
use UnitEnum;
use BackedEnum;

class NotificationExtendedResource extends Resource
{
    protected static ?string $model = NotificationExtended::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-bell';
    protected static string|UnitEnum|null $navigationGroup = 'Social Proof';
    protected static ?int $navigationSort = 3;
    protected static ?string $navigationLabel = 'Notifications';

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Informations de base')
                ->columns(2)
                ->schema([
                    Select::make('team_id')
                        ->label('Team')
                        ->relationship('team', 'name')
                        ->required()
                        ->searchable()
                        ->preload(),
                    Select::make('site_id')
                        ->label('Site')
                        ->relationship('site', 'name')
                        ->required()
                        ->searchable()
                        ->preload(),
                    Select::make('campaign_id')
                        ->label('Campagne')
                        ->relationship('campaign', 'name')
                        ->searchable()
                        ->preload(),
                    Select::make('template_id')
                        ->label('Template')
                        ->relationship('template', 'name')
                        ->searchable()
                        ->preload(),
                ]),

            Section::make('Contenu')
                ->columns(2)
                ->schema([
                    TextInput::make('title')->label('Titre')->required(),
                    Textarea::make('message')->label('Message')->required()->columnSpanFull(),
                    TextInput::make('url')->label('URL')->url(),
                    FileUpload::make('image_url')->label('Image')->image()->directory('notifications'),
                ]),

            Section::make('Configuration')
                ->columns(3)
                ->schema([
                    Select::make('type')
                        ->label('Type')
                        ->required()
                        ->options([
                            'INFORMATIONAL' => 'Informational',
                            'COUPON' => 'Coupon',
                            'LIVE_COUNTER' => 'Live Counter',
                            'EMAIL_COLLECTOR' => 'Email Collector',
                            'CONVERSIONS' => 'Conversions',
                            'REVIEWS' => 'Reviews',
                            'VIDEO' => 'Video',
                            'CUSTOM_HTML' => 'Custom HTML',
                        ]),
                    Select::make('status')
                        ->label('Statut')
                        ->required()
                        ->default('draft')
                        ->options([
                            'draft' => 'Brouillon',
                            'active' => 'Actif',
                            'paused' => 'En pause',
                            'archived' => 'Archivé',
                        ]),
                    TextInput::make('priority')->label('Priorité')->numeric()->default(1),
                ]),

            Section::make('Affichage')
                ->columns(3)
                ->schema([
                    TextInput::make('display_duration')->label('Durée (s)')->numeric()->default(5),
                    TextInput::make('delay_before_show')->label('Délai (s)')->numeric()->default(0),
                    Select::make('position')
                        ->label('Position')
                        ->default('bottom_right')
                        ->options([
                            'top_left' => 'Haut gauche',
                            'top_right' => 'Haut droite',
                            'bottom_left' => 'Bas gauche',
                            'bottom_right' => 'Bas droite',
                            'center' => 'Centre',
                        ]),
                ]),

            Section::make('Planification')
                ->columns(2)
                ->schema([
                    DateTimePicker::make('starts_at')->label('Début'),
                    DateTimePicker::make('ends_at')->label('Fin'),
                ]),

            Section::make('Configuration avancée')
                ->schema([
                    KeyValue::make('config')->label('Configuration')->columnSpanFull(),
                    KeyValue::make('targeting_rules')->label('Règles de ciblage')->columnSpanFull(),
                ]),

            Section::make('Statistiques')
                ->visibleOn('edit')
                ->columns(3)
                ->schema([
                    TextInput::make('views_count')->label('Vues')->numeric()->disabled(),
                    TextInput::make('clicks_count')->label('Clics')->numeric()->disabled(),
                    TextInput::make('conversions_count')->label('Conversions')->numeric()->disabled(),
                ]),
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->label('Titre')
                    ->searchable()
                    ->sortable()
                    ->limit(50),
                Tables\Columns\TextColumn::make('team.name')
                    ->label('Team')
                    ->sortable(),
                Tables\Columns\TextColumn::make('site.name')
                    ->label('Site')
                    ->sortable(),
                Tables\Columns\TextColumn::make('type')
                    ->label('Type')
                    ->badge()
                    ->color(fn ($state) => match ($state) {
                        'COUPON' => 'success',
                        'LIVE_COUNTER' => 'info',
                        'EMAIL_COLLECTOR' => 'warning',
                        'CONVERSIONS' => 'danger',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('status')
                    ->label('Statut')
                    ->badge()
                    ->color(fn ($state) => match ($state) {
                        'active' => 'success',
                        'paused' => 'warning',
                        'archived' => 'danger',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('views_count')
                    ->label('Vues')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('clicks_count')
                    ->label('Clics')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('conversions_count')
                    ->label('Conv.')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Créé le')
                    ->dateTime('d/m/Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('type')
                    ->options([
                        'INFORMATIONAL' => 'Informational',
                        'COUPON' => 'Coupon',
                        'LIVE_COUNTER' => 'Live Counter',
                        'EMAIL_COLLECTOR' => 'Email Collector',
                        'CONVERSIONS' => 'Conversions',
                    ]),
                Tables\Filters\SelectFilter::make('status')
                    ->options([
                        'draft' => 'Brouillon',
                        'active' => 'Actif',
                        'paused' => 'En pause',
                        'archived' => 'Archivé',
                    ]),
            ])
            ->actions([
                Action::make('view')
                    ->label('Voir')
                    ->icon('heroicon-o-eye')
                    ->url(fn ($record) => static::getUrl('view', ['record' => $record])),
                Action::make('activate')
                    ->label('Activer')
                    ->icon('heroicon-o-play')
                    ->color('success')
                    ->visible(fn ($record) => $record->status !== 'active')
                    ->action(fn ($record) => $record->update(['status' => 'active'])),
                Action::make('pause')
                    ->label('Pause')
                    ->icon('heroicon-o-pause')
                    ->color('warning')
                    ->visible(fn ($record) => $record->status === 'active')
                    ->action(fn ($record) => $record->update(['status' => 'paused'])),
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([
                BulkActionGroup::make([
                    \Filament\Actions\BulkAction::make('activate')
                        ->label('Activer')
                        ->action(fn ($records) => $records->each->update(['status' => 'active'])),
                    \Filament\Actions\BulkAction::make('pause')
                        ->label('Mettre en pause')
                        ->action(fn ($records) => $records->each->update(['status' => 'paused'])),
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
            'index' => Pages\ListNotificationExtendeds::route('/'),
            'create' => Pages\CreateNotificationExtended::route('/create'),
            'view' => Pages\ViewNotificationExtended::route('/{record}'),
            'edit' => Pages\EditNotificationExtended::route('/{record}/edit'),
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::where('status', 'active')->count();
    }
}

