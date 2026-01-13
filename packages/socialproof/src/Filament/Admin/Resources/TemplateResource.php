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
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TagsInput;
use Packages\SocialProof\Models\Template;
use Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages;
use UnitEnum;
use BackedEnum;

class TemplateResource extends Resource
{
    protected static ?string $model = Template::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-document-duplicate';
    protected static string|UnitEnum|null $navigationGroup = 'Templates & Règles';
    protected static ?int $navigationSort = 1;
    protected static ?string $navigationLabel = 'Templates';

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Informations')
                ->columns(2)
                ->schema([
                    TextInput::make('name')->label('Nom')->required(),
                    TextInput::make('slug')->required()->unique(ignoreRecord: true),
                    Textarea::make('description')->label('Description')->columnSpanFull(),
                    TextInput::make('author')->label('Auteur'),
                    TextInput::make('license')->label('Licence'),
                ]),

            Section::make('Configuration')
                ->columns(2)
                ->schema([
                    Select::make('notification_type')
                        ->label('Type de notification')
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
                    Select::make('category')
                        ->label('Catégorie')
                        ->options([
                            'toast' => 'Toast Notifications',
                            'card' => 'Card Notifications',
                            'bar' => 'Bar Notifications',
                            'modal' => 'Modal Notifications',
                            'popup' => 'Popup Notifications',
                            'banner' => 'Banner Notifications',
                            'sidebar' => 'Sidebar Notifications',
                            'corner' => 'Corner Notifications',
                        ])
                        ->default('toast'),
                    Select::make('visibility')
                        ->label('Visibilité')
                        ->options([
                            'public' => 'Public',
                            'private' => 'Privé',
                            'system' => 'Système',
                        ])
                        ->default('public'),
                    Select::make('status')
                        ->label('Statut')
                        ->options([
                            'active' => 'Actif',
                            'inactive' => 'Inactif',
                            'draft' => 'Brouillon',
                        ])
                        ->default('draft'),
                    FileUpload::make('preview_image')
                        ->label('Image d\'aperçu')
                        ->image()
                        ->directory('templates'),
                    TextInput::make('version')->label('Version')->default('1.0.0'),
                    Toggle::make('is_featured')->label('Mis en avant')->default(false),
                    TextInput::make('sort_order')->label('Ordre')->numeric()->default(1),
                ]),

            Section::make('Tags')
                ->schema([
                    TagsInput::make('tags')->label('Tags')->columnSpanFull(),
                ]),

            Section::make('CSS personnalisé')
                ->schema([
                    Textarea::make('custom_css')
                        ->label('CSS')
                        ->rows(10)
                        ->columnSpanFull(),
                ]),

            Section::make('JavaScript personnalisé')
                ->schema([
                    Textarea::make('custom_js')
                        ->label('JavaScript')
                        ->rows(10)
                        ->columnSpanFull(),
                ]),

            Section::make('Configuration avancée')
                ->schema([
                    KeyValue::make('design_config')->label('Configuration design')->columnSpanFull(),
                    KeyValue::make('layout_config')->label('Configuration layout')->columnSpanFull(),
                    KeyValue::make('default_content')->label('Contenu par défaut')->columnSpanFull(),
                ]),
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('preview_image')
                    ->label('Aperçu')
                    ->square(),
                Tables\Columns\TextColumn::make('name')
                    ->label('Nom')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('slug')
                    ->searchable(),
                Tables\Columns\TextColumn::make('notification_type')
                    ->label('Type')
                    ->badge()
                    ->color(fn ($state) => match ($state) {
                        'CONVERSIONS' => 'success',
                        'COUPON' => 'warning',
                        'LIVE_COUNTER' => 'info',
                        'EMAIL_COLLECTOR' => 'primary',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('category')
                    ->label('Catégorie')
                    ->badge(),
                Tables\Columns\TextColumn::make('visibility')
                    ->label('Visibilité')
                    ->badge()
                    ->color(fn ($state) => match ($state) {
                        'public' => 'success',
                        'private' => 'warning',
                        'system' => 'info',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('status')
                    ->label('Statut')
                    ->badge()
                    ->color(fn ($state) => match ($state) {
                        'active' => 'success',
                        'inactive' => 'danger',
                        'draft' => 'warning',
                        default => 'gray',
                    }),
                Tables\Columns\IconColumn::make('is_featured')
                    ->label('Vedette')
                    ->boolean(),
                Tables\Columns\TextColumn::make('notifications_count')
                    ->label('Utilisations')
                    ->counts('notifications')
                    ->badge()
                    ->color('info'),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Créé le')
                    ->dateTime('d/m/Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('notification_type')
                    ->label('Type')
                    ->options([
                        'INFORMATIONAL' => 'Informational',
                        'COUPON' => 'Coupon',
                        'LIVE_COUNTER' => 'Live Counter',
                        'CONVERSIONS' => 'Conversions',
                    ]),
                Tables\Filters\SelectFilter::make('category')
                    ->options([
                        'toast' => 'Toast',
                        'card' => 'Card',
                        'bar' => 'Bar',
                        'modal' => 'Modal',
                    ]),
                Tables\Filters\SelectFilter::make('status')
                    ->options([
                        'active' => 'Actif',
                        'inactive' => 'Inactif',
                        'draft' => 'Brouillon',
                    ]),
                Tables\Filters\TernaryFilter::make('is_featured')->label('Mis en avant'),
            ])
            ->actions([
                Action::make('view')
                    ->label('Voir')
                    ->icon('heroicon-o-eye')
                    ->url(fn ($record) => static::getUrl('view', ['record' => $record])),
                Action::make('duplicate')
                    ->label('Dupliquer')
                    ->icon('heroicon-o-document-duplicate')
                    ->action(function ($record) {
                        $record->duplicate();
                    }),
                Action::make('feature')
                    ->label('Mettre en avant')
                    ->icon('heroicon-o-star')
                    ->color('warning')
                    ->visible(fn ($record) => !$record->is_featured)
                    ->action(fn ($record) => $record->feature()),
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([
                BulkActionGroup::make([
                    \Filament\Actions\BulkAction::make('activate')
                        ->label('Activer')
                        ->action(fn ($records) => $records->each->activate()),
                    \Filament\Actions\BulkAction::make('deactivate')
                        ->label('Désactiver')
                        ->action(fn ($records) => $records->each->deactivate()),
                    DeleteBulkAction::make(),
                ]),
            ])
            ->reorderable('sort_order')
            ->defaultSort('sort_order');
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTemplates::route('/'),
            'create' => Pages\CreateTemplate::route('/create'),
            'view' => Pages\ViewTemplate::route('/{record}'),
            'edit' => Pages\EditTemplate::route('/{record}/edit'),
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::where('status', 'active')->count();
    }
}

