<?php

namespace Packages\SocialProof\Filament\Admin\Resources;

use Filament\Tables;
use Filament\Resources\Resource;
use Filament\Actions\Action;
use Filament\Actions\DeleteAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Schemas\Schema;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\KeyValue;
use Packages\SocialProof\Models\TrackConversion;
use Packages\SocialProof\Filament\Admin\Resources\ConversionResource\Pages;
use UnitEnum;
use BackedEnum;

class ConversionResource extends Resource
{
    protected static ?string $model = TrackConversion::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-chart-bar';
    protected static string|UnitEnum|null $navigationGroup = 'Tracking & Analytics';
    protected static ?int $navigationSort = 3;
    protected static ?string $navigationLabel = 'Conversions';

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Informations')
                ->columns(2)
                ->schema([
                    TextInput::make('user_id')->label('User ID'),
                    Select::make('notification_id')
                        ->label('Notification')
                        ->relationship('notification', 'title')
                        ->searchable()
                        ->preload(),
                    Select::make('type')
                        ->label('Type')
                        ->options([
                            'webhook' => 'Webhook',
                            'auto_capture' => 'Auto Capture',
                            'collector' => 'Collector',
                            'imported' => 'Imported',
                        ]),
                    TextInput::make('url')->label('URL'),
                    TextInput::make('page_title')->label('Titre de la page'),
                ]),
            Section::make('Données')
                ->schema([
                    KeyValue::make('data')->label('Données'),
                    KeyValue::make('location')->label('Localisation'),
                ]),
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('type')
                    ->label('Type')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'webhook' => 'success',
                        'auto_capture' => 'info',
                        'collector' => 'warning',
                        'imported' => 'gray',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('user_id')
                    ->label('User ID')
                    ->searchable()
                    ->limit(15),
                Tables\Columns\TextColumn::make('notification.title')
                    ->label('Notification')
                    ->limit(30),
                Tables\Columns\TextColumn::make('url')
                    ->label('URL')
                    ->limit(40)
                    ->toggleable(),
                Tables\Columns\TextColumn::make('page_title')
                    ->label('Page')
                    ->limit(30)
                    ->toggleable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Date')
                    ->dateTime('d/m/Y H:i')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('type')
                    ->options([
                        'webhook' => 'Webhook',
                        'auto_capture' => 'Auto Capture',
                        'collector' => 'Collector',
                        'imported' => 'Imported',
                    ]),
                Tables\Filters\SelectFilter::make('notification_id')
                    ->relationship('notification', 'title'),
            ])
            ->actions([
                Action::make('view')
                    ->icon('heroicon-o-eye')
                    ->url(fn ($record) => static::getUrl('view', ['record' => $record])),
                DeleteAction::make(),
            ])
            ->bulkActions([BulkActionGroup::make([DeleteBulkAction::make()])])
            ->defaultSort('created_at', 'desc');
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListConversions::route('/'),
            'view' => Pages\ViewConversion::route('/{record}'),
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::whereDate('created_at', today())->count();
    }

    public static function getNavigationBadgeColor(): ?string
    {
        return 'success';
    }
}
