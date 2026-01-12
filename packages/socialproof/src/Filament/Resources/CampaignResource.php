<?php

namespace Packages\SocialProof\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Packages\SocialProof\Models\Team;
use Packages\SocialProof\Models\Site;
use Packages\SocialProof\Models\Campaign;
use Filament\Actions\Action;
use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\KeyValue;
use Packages\SocialProof\Filament\Resources\CampaignResource\Pages;
use Filament\Schemas\Schema;
use UnitEnum;
use BackedEnum;

class CampaignResource extends Resource
{
    protected static ?string $model = Campaign::class;

    protected static string | BackedEnum | null $navigationIcon = 'heroicon-o-megaphone';

    protected static string | UnitEnum | null $navigationGroup = 'Social Proof';

    protected static ?int $navigationSort = 1;

    public static function form(Schema $schema): Schema
{
    return $schema->schema([

        Section::make('Campaign Information')
            ->columns(3)
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

                TextInput::make('name')
                    ->required()
                    ->maxLength(255),

                Textarea::make('description')
                    ->maxLength(1000)
                    ->columnSpanFull(),
            ]),

        Section::make('Campaign Settings')
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
                        'draft' => 'Draft',
                        'active' => 'Active',
                        'paused' => 'Paused',
                        'completed' => 'Completed',
                    ])
                    ->default('draft')
                    ->required(),

                TextInput::make('priority')
                    ->numeric()
                    ->default(1)
                    ->required(),
            ]),

        Section::make('Schedule')
            ->columns(2)
            ->schema([
                DateTimePicker::make('starts_at')->label('Start Date'),
                DateTimePicker::make('ends_at')->label('End Date'),
            ]),

        Section::make('Configuration')
            ->schema([
                KeyValue::make('config')
                    ->label('Campaign Configuration')
                    ->columnSpanFull(),

                KeyValue::make('targeting_rules')
                    ->label('Targeting Rules')
                    ->columnSpanFull(),
            ]),

        Section::make('Statistics')
            ->visibleOn('edit')
            ->columns(3)
            ->schema([
                TextInput::make('views_count')->numeric()->disabled(),
                TextInput::make('clicks_count')->numeric()->disabled(),
                TextInput::make('conversions_count')->numeric()->disabled(),
            ]),
    ]);
}


    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->searchable()
                    ->sortable(),
                
                Tables\Columns\TextColumn::make('team.name')
                    ->label('Team')
                    ->searchable()
                    ->sortable(),
                
                Tables\Columns\TextColumn::make('site.name')
                    ->label('Site')
                    ->searchable()
                    ->sortable(),
                
                Tables\Columns\TextColumn::make('type')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'INFORMATIONAL' => 'gray',
                        'COUPON' => 'success',
                        'LIVE_COUNTER' => 'info',
                        'EMAIL_COLLECTOR' => 'warning',
                        'CONVERSIONS' => 'danger',
                        default => 'gray',
                    }),
                
                Tables\Columns\TextColumn::make('status')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'draft' => 'gray',
                        'active' => 'success',
                        'paused' => 'warning',
                        'completed' => 'info',
                        default => 'gray',
                    }),
                
                Tables\Columns\TextColumn::make('views_count')
                    ->label('Views')
                    ->numeric()
                    ->sortable(),
                
                Tables\Columns\TextColumn::make('clicks_count')
                    ->label('Clicks')
                    ->numeric()
                    ->sortable(),
                
                Tables\Columns\TextColumn::make('conversions_count')
                    ->label('Conversions')
                    ->numeric()
                    ->sortable(),
                
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('team_id')
                    ->label('Team')
                    ->options(Team::pluck('name', 'id')),
                
                Tables\Filters\SelectFilter::make('type')
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
                
                Tables\Filters\SelectFilter::make('status')
                    ->options([
                        'draft' => 'Draft',
                        'active' => 'Active',
                        'paused' => 'Paused',
                        'completed' => 'Completed',
                    ]),
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
            ]);
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
            'index' => Pages\ListCampaigns::route('/'),
            'create' => Pages\CreateCampaign::route('/create'),
            'view' => Pages\ViewCampaign::route('/{record}'),
            'edit' => Pages\EditCampaign::route('/{record}/edit'),
        ];
    }
}