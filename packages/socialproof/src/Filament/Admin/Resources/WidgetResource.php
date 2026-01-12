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
                    Select::make('team_id')
                        ->label('Team')
                        ->relationship('team', 'name')
                        ->searchable()
                        ->preload()
                        ->required(),
                    Select::make('site_id')
                        ->label('Site')
                        ->relationship('site', 'name')
                        ->searchable()
                        ->preload()
                        ->required(),
                    Select::make('template_id')
                        ->label('Template')
                        ->relationship('template', 'name')
                        ->searchable()
                        ->preload(),
                    TextInput::make('name')->label('Nom')->required(),
                    Textarea::make('description')->columnSpanFull(),
                ]),
            Section::make('Configuration')
                ->columns(3)
                ->schema([
                    Select::make('type')
                        ->options([
                            'INFORMATIONAL' => 'Informational',
                            'COUPON' => 'Coupon',
                            'LIVE_COUNTER' => 'Live Counter',
                            'EMAIL_COLLECTOR' => 'Email Collector',
                            'CONVERSIONS' => 'Conversions',
                            'REVIEWS' => 'Reviews',
                            'VIDEO' => 'Video',
                            'CUSTOM_HTML' => 'Custom HTML',
                        ])
                        ->required(),
                    Select::make('status')
                        ->options([
                            'draft' => 'Brouillon',
                            'active' => 'Actif',
                            'paused' => 'En pause',
                            'archived' => 'Archivé',
                        ])
                        ->default('draft'),
                    TextInput::make('priority')->numeric()->default(1),
                ]),
            Section::make('Affichage')
                ->columns(4)
                ->schema([
                    Select::make('position')
                        ->options([
                            'top_left' => 'Haut gauche',
                            'top_right' => 'Haut droite',
                            'bottom_left' => 'Bas gauche',
                            'bottom_right' => 'Bas droite',
                            'center' => 'Centre',
                        ])
                        ->default('bottom_right'),
                    TextInput::make('display_duration')->label('Durée (s)')->numeric()->default(5),
                    TextInput::make('delay_before_show')->label('Délai (s)')->numeric()->default(0),
                    TextInput::make('frequency')->label('Fréquence (s)')->numeric()->default(30),
                ]),
            Section::make('Statistiques')
                ->columns(3)
                ->visibleOn('edit')
                ->schema([
                    TextInput::make('views_count')->label('Vues')->numeric()->disabled(),
                    TextInput::make('clicks_count')->label('Clics')->numeric()->disabled(),
                    TextInput::make('conversions_count')->label('Conversions')->numeric()->disabled(),
                ]),
            Section::make('Configuration avancée')
                ->schema([
                    KeyValue::make('config')->columnSpanFull(),
                    KeyValue::make('style_config')->label('Styles CSS')->columnSpanFull(),
                ]),
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')->label('Nom')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('site.name')->label('Site')->searchable(),
                Tables\Columns\TextColumn::make('type')
                    ->badge()
                    ->color(fn ($state) => match ($state) {
                        'CONVERSIONS' => 'success',
                        'COUPON' => 'warning',
                        'LIVE_COUNTER' => 'info',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('status')
                    ->badge()
                    ->color(fn ($state) => match ($state) {
                        'active' => 'success',
                        'paused' => 'warning',
                        'archived' => 'danger',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('views_count')->label('Vues')->numeric()->sortable(),
                Tables\Columns\TextColumn::make('clicks_count')->label('Clics')->numeric()->sortable(),
                Tables\Columns\TextColumn::make('conversions_count')->label('Conv.')->numeric()->sortable(),
                Tables\Columns\TextColumn::make('created_at')->dateTime('d/m/Y')->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('type')
                    ->options([
                        'INFORMATIONAL' => 'Informational',
                        'COUPON' => 'Coupon',
                        'LIVE_COUNTER' => 'Live Counter',
                        'CONVERSIONS' => 'Conversions',
                    ]),
                Tables\Filters\SelectFilter::make('status')
                    ->options([
                        'draft' => 'Brouillon',
                        'active' => 'Actif',
                        'paused' => 'En pause',
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
                    Tables\Actions\BulkAction::make('activate')
                        ->label('Activer')
                        ->action(fn ($records) => $records->each->update(['status' => 'active'])),
                    Tables\Actions\BulkAction::make('pause')
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
            'index' => Pages\ListWidgets::route('/'),
            'create' => Pages\CreateWidget::route('/create'),
            'view' => Pages\ViewWidget::route('/{record}'),
            'edit' => Pages\EditWidget::route('/{record}/edit'),
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::where('status', 'active')->count();
    }
}
