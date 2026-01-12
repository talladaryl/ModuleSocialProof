<?php

namespace Packages\SocialProof\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Packages\SocialProof\Models\Team;
use Packages\SocialProof\Models\Site;
use Packages\SocialProof\Models\Widget;
use Packages\SocialProof\Models\Template;
use Filament\Tables\Actions\BulkActionGroup;
use Filament\Tables\Actions\DeleteBulkAction;
use Packages\SocialProof\Filament\Resources\WidgetResource\Pages;
use Filament\Schemas\Schema;
use UnitEnum;
use BackedEnum;

class WidgetResource extends Resource
{
    protected static ?string $model = Widget::class;

    protected static string | BackedEnum | null $navigationIcon = 'heroicon-o-squares-2x2';

    protected static string | UnitEnum | null $navigationGroup = 'Social Proof';

    protected static ?int $navigationSort = 3;

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->schema([
                Forms\Components\Section::make('Widget Information')
                    ->schema([
                        Forms\Components\Select::make('team_id')
                            ->label('Team')
                            ->options(Team::pluck('name', 'id'))
                            ->searchable()
                            ->preload()
                            ->required(),
                        
                        Forms\Components\Select::make('site_id')
                            ->label('Site')
                            ->options(Site::pluck('name', 'id'))
                            ->searchable()
                            ->preload()
                            ->required(),
                        
                        Forms\Components\Select::make('template_id')
                            ->label('Template')
                            ->options(Template::pluck('name', 'id'))
                            ->searchable()
                            ->preload(),
                        
                        Forms\Components\TextInput::make('name')
                            ->required()
                            ->maxLength(255),
                        
                        Forms\Components\Textarea::make('description')
                            ->maxLength(1000)
                            ->columnSpanFull(),
                    ])
                    ->columns(2),

                Forms\Components\Section::make('Widget Settings')
                    ->schema([
                        Forms\Components\Select::make('type')
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
                        
                        Forms\Components\Select::make('status')
                            ->options([
                                'draft' => 'Draft',
                                'active' => 'Active',
                                'paused' => 'Paused',
                                'archived' => 'Archived',
                            ])
                            ->default('draft')
                            ->required(),
                        
                        Forms\Components\TextInput::make('priority')
                            ->numeric()
                            ->default(1)
                            ->required(),
                    ])
                    ->columns(3),

                Forms\Components\Section::make('Display Settings')
                    ->schema([
                        Forms\Components\Select::make('position')
                            ->options([
                                'top_left' => 'Top Left',
                                'top_right' => 'Top Right',
                                'bottom_left' => 'Bottom Left',
                                'bottom_right' => 'Bottom Right',
                                'center' => 'Center',
                                'inline' => 'Inline',
                            ])
                            ->default('bottom_right')
                            ->required(),
                        
                        Forms\Components\TextInput::make('display_duration')
                            ->label('Display Duration (seconds)')
                            ->numeric()
                            ->default(5),
                        
                        Forms\Components\TextInput::make('delay_before_show')
                            ->label('Delay Before Show (seconds)')
                            ->numeric()
                            ->default(0),
                        
                        Forms\Components\TextInput::make('frequency')
                            ->label('Frequency (seconds between shows)')
                            ->numeric()
                            ->default(30),
                    ])
                    ->columns(4),

                Forms\Components\Section::make('Targeting')
                    ->schema([
                        Forms\Components\Textarea::make('page_rules')
                            ->label('Page Rules (one per line)')
                            ->helperText('Enter URL patterns, one per line. Use * for wildcards.')
                            ->rows(3),
                        
                        Forms\Components\Textarea::make('device_targeting')
                            ->label('Device Targeting')
                            ->helperText('desktop, mobile, tablet (comma separated)')
                            ->rows(2),
                        
                        Forms\Components\Textarea::make('geo_targeting')
                            ->label('Geographic Targeting')
                            ->helperText('Country codes (comma separated)')
                            ->rows(2),
                    ])
                    ->columns(1),

                Forms\Components\Section::make('Configuration')
                    ->schema([
                        Forms\Components\KeyValue::make('config')
                            ->label('Widget Configuration')
                            ->keyLabel('Setting')
                            ->valueLabel('Value')
                            ->columnSpanFull(),
                        
                        Forms\Components\KeyValue::make('style_config')
                            ->label('Style Configuration')
                            ->keyLabel('CSS Property')
                            ->valueLabel('Value')
                            ->columnSpanFull(),
                    ]),

                Forms\Components\Section::make('Statistics')
                    ->schema([
                        Forms\Components\TextInput::make('views_count')
                            ->label('Views')
                            ->numeric()
                            ->disabled(),
                        
                        Forms\Components\TextInput::make('clicks_count')
                            ->label('Clicks')
                            ->numeric()
                            ->disabled(),
                        
                        Forms\Components\TextInput::make('conversions_count')
                            ->label('Conversions')
                            ->numeric()
                            ->disabled(),
                    ])
                    ->columns(3)
                    ->visibleOn('edit'),
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
                        'archived' => 'danger',
                        default => 'gray',
                    }),
                
                Tables\Columns\TextColumn::make('position')
                    ->badge(),
                
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
                        'archived' => 'Archived',
                    ]),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
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
            'index' => Pages\ListWidgets::route('/'),
            'create' => Pages\CreateWidget::route('/create'),
            'view' => Pages\ViewWidget::route('/{record}'),
            'edit' => Pages\EditWidget::route('/{record}/edit'),
        ];
    }
}