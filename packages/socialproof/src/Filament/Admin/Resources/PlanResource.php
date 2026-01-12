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
use Filament\Forms\Components\CheckboxList;
use Packages\SocialProof\Models\Plan;
use Packages\SocialProof\Filament\Admin\Resources\PlanResource\Pages;
use UnitEnum;
use BackedEnum;

class PlanResource extends Resource
{
    protected static ?string $model = Plan::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static string|UnitEnum|null $navigationGroup = 'Clients & Abonnements';
    protected static ?int $navigationSort = 3;
    protected static ?string $navigationLabel = 'Plans';

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Informations')
                ->columns(2)
                ->schema([
                    TextInput::make('name')->label('Nom')->required(),
                    TextInput::make('slug')->required()->unique(ignoreRecord: true),
                    Textarea::make('description')->columnSpanFull(),
                ]),
            Section::make('Tarification')
                ->columns(4)
                ->schema([
                    TextInput::make('price_monthly')->label('Prix mensuel')->numeric()->prefix('€')->required(),
                    TextInput::make('price_yearly')->label('Prix annuel')->numeric()->prefix('€')->required(),
                    Select::make('currency')->options(['EUR' => 'EUR', 'USD' => 'USD'])->default('EUR'),
                    TextInput::make('trial_days')->label('Jours d\'essai')->numeric()->default(14),
                ]),
            Section::make('Limites')
                ->columns(3)
                ->schema([
                    TextInput::make('max_sites')->label('Sites max')->numeric()->helperText('-1 = illimité'),
                    TextInput::make('max_widgets')->label('Widgets max')->numeric()->helperText('-1 = illimité'),
                    TextInput::make('max_notifications')->label('Notifications max')->numeric()->helperText('-1 = illimité'),
                    TextInput::make('max_monthly_events')->label('Events/mois max')->numeric()->helperText('-1 = illimité'),
                    TextInput::make('max_team_members')->label('Membres équipe max')->numeric()->helperText('-1 = illimité'),
                    TextInput::make('max_api_keys')->label('Clés API max')->numeric()->helperText('-1 = illimité'),
                ]),
            Section::make('Types de notifications')
                ->schema([
                    CheckboxList::make('notification_types')
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
                        ->columns(4),
                ]),
            Section::make('Paramètres')
                ->columns(3)
                ->schema([
                    Toggle::make('is_active')->label('Actif')->default(true),
                    Toggle::make('is_popular')->label('Populaire')->default(false),
                    TextInput::make('sort_order')->label('Ordre')->numeric()->default(1),
                ]),
            Section::make('Features')
                ->schema([
                    KeyValue::make('features')->columnSpanFull(),
                ]),
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')->label('Nom')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('price_monthly')->label('Mensuel')->money('EUR')->sortable(),
                Tables\Columns\TextColumn::make('price_yearly')->label('Annuel')->money('EUR')->sortable(),
                Tables\Columns\TextColumn::make('max_sites')->label('Sites')->badge(),
                Tables\Columns\TextColumn::make('max_widgets')->label('Widgets')->badge(),
                Tables\Columns\TextColumn::make('subscriptions_count')
                    ->label('Abonnés')
                    ->counts('subscriptions')
                    ->badge()
                    ->color('success'),
                Tables\Columns\IconColumn::make('is_popular')->label('Populaire')->boolean(),
                Tables\Columns\IconColumn::make('is_active')->label('Actif')->boolean(),
                Tables\Columns\TextColumn::make('sort_order')->label('Ordre')->sortable(),
            ])
            ->reorderable('sort_order')
            ->actions([
                Action::make('view')
                    ->label('Voir')
                    ->icon('heroicon-o-eye')
                    ->url(fn ($record) => static::getUrl('view', ['record' => $record])),
                Action::make('duplicate')
                    ->label('Dupliquer')
                    ->icon('heroicon-o-document-duplicate')
                    ->action(function ($record) {
                        $new = $record->replicate();
                        $new->name = $record->name . ' (copie)';
                        $new->slug = $record->slug . '-copy-' . time();
                        $new->save();
                    }),
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([
                BulkActionGroup::make([DeleteBulkAction::make()]),
            ])
            ->defaultSort('sort_order');
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPlans::route('/'),
            'create' => Pages\CreatePlan::route('/create'),
            'view' => Pages\ViewPlan::route('/{record}'),
            'edit' => Pages\EditPlan::route('/{record}/edit'),
        ];
    }
}
