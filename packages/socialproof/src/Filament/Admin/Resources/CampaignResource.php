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
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\KeyValue;
use Packages\SocialProof\Models\Campaign;
use Packages\SocialProof\Filament\Admin\Resources\CampaignResource\Pages;
use UnitEnum;
use BackedEnum;

class CampaignResource extends Resource
{
    protected static ?string $model = Campaign::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-megaphone';
    protected static string|UnitEnum|null $navigationGroup = 'Social Proof';
    protected static ?int $navigationSort = 2;
    protected static ?string $navigationLabel = 'Campagnes';

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
                            'completed' => 'Terminé',
                        ])
                        ->default('draft'),
                    TextInput::make('priority')->numeric()->default(1),
                ]),
            Section::make('Planification')
                ->columns(2)
                ->schema([
                    DateTimePicker::make('starts_at')->label('Début'),
                    DateTimePicker::make('ends_at')->label('Fin'),
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
                    KeyValue::make('targeting_rules')->label('Règles de ciblage')->columnSpanFull(),
                ]),
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')->label('Nom')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('team.name')->label('Team')->searchable(),
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
                        'completed' => 'info',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('views_count')->label('Vues')->numeric()->sortable(),
                Tables\Columns\TextColumn::make('clicks_count')->label('Clics')->numeric()->sortable(),
                Tables\Columns\TextColumn::make('conversions_count')->label('Conv.')->numeric()->sortable(),
                Tables\Columns\TextColumn::make('starts_at')->label('Début')->dateTime('d/m/Y')->sortable(),
                Tables\Columns\TextColumn::make('ends_at')->label('Fin')->dateTime('d/m/Y')->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('type'),
                Tables\Filters\SelectFilter::make('status')
                    ->options([
                        'draft' => 'Brouillon',
                        'active' => 'Actif',
                        'paused' => 'En pause',
                        'completed' => 'Terminé',
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
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([
                BulkActionGroup::make([DeleteBulkAction::make()]),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCampaigns::route('/'),
            'create' => Pages\CreateCampaign::route('/create'),
            'view' => Pages\ViewCampaign::route('/{record}'),
            'edit' => Pages\EditCampaign::route('/{record}/edit'),
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::where('status', 'active')->count();
    }
}
