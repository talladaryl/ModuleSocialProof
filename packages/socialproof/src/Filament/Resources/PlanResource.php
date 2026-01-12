<?php

namespace Packages\SocialProof\Filament\Resources;

use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Schemas\Schema;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\CheckboxList;
use Packages\SocialProof\Models\Plan;
use Filament\Actions\Action;
use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Packages\SocialProof\Filament\Resources\PlanResource\Pages;
use UnitEnum;
use BackedEnum;

class PlanResource extends Resource
{
    protected static ?string $model = Plan::class;

    protected static string | BackedEnum | null $navigationIcon = 'heroicon-o-credit-card';
    protected static string | UnitEnum | null $navigationGroup = 'SaaS Management';
    protected static ?int $navigationSort = 2;

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([

            Section::make('Plan Details')
                ->columns(2)
                ->schema([
                    TextInput::make('name')->required()->maxLength(255),
                    TextInput::make('slug')->required()->unique(ignoreRecord: true)->maxLength(255),
                    Textarea::make('description')->required()->maxLength(1000)->columnSpanFull(),
                ]),

            Section::make('Pricing')
                ->columns(4)
                ->schema([
                    TextInput::make('price_monthly')->numeric()->prefix('$')->required(),
                    TextInput::make('price_yearly')->numeric()->prefix('$')->required(),
                    Select::make('currency')->options(['USD'=>'USD','EUR'=>'EUR','GBP'=>'GBP'])->default('USD')->required(),
                    TextInput::make('trial_days')->numeric()->default(0),
                ]),

            Section::make('Limits')
                ->columns(3)
                ->schema([
                    TextInput::make('max_sites')->numeric()->helperText('-1 = unlimited'),
                    TextInput::make('max_widgets')->numeric()->helperText('-1 = unlimited'),
                    TextInput::make('max_notifications')->numeric()->helperText('-1 = unlimited'),
                    TextInput::make('max_monthly_events')->numeric()->helperText('-1 = unlimited'),
                    TextInput::make('max_team_members')->numeric()->helperText('-1 = unlimited'),
                    TextInput::make('max_api_keys')->numeric()->helperText('-1 = unlimited'),
                ]),

            Section::make('Features')
                ->schema([
                    KeyValue::make('features')->columnSpanFull(),
                ]),

            Section::make('Notification Types')
                ->schema([
                    CheckboxList::make('notification_types')
                        ->options([
                            'INFORMATIONAL'=>'Informational',
                            'COUPON'=>'Coupon',
                            'LIVE_COUNTER'=>'Live Counter',
                            'EMAIL_COLLECTOR'=>'Email Collector',
                            'CONVERSIONS'=>'Conversions',
                            'REVIEWS'=>'Reviews',
                            'VIDEO'=>'Video',
                            'CUSTOM_HTML'=>'Custom HTML',
                        ])
                        ->columns(4)
                        ->columnSpanFull(),
                ]),

            Section::make('Settings')
                ->columns(3)
                ->schema([
                    Toggle::make('is_active')->default(true),
                    Toggle::make('is_popular')->default(false),
                    TextInput::make('sort_order')->numeric()->default(1),
                ]),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('slug')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('price_monthly')->money('USD')->sortable(),
                Tables\Columns\TextColumn::make('price_yearly')->money('USD')->sortable(),
                Tables\Columns\IconColumn::make('is_popular')->boolean(),
                Tables\Columns\IconColumn::make('is_active')->boolean(),
                Tables\Columns\TextColumn::make('sort_order')->sortable(),
            ])
            ->actions([
                Action::make('view')
                    ->label('Voir')
                    ->icon('heroicon-o-eye')
                    ->url(fn ($record) => static::getUrl('view', ['record' => $record]))
                    ->openUrlInNewTab(),

                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('sort_order');
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
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
