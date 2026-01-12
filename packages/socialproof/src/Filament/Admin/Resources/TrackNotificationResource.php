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
use Filament\Forms\Components\Select;
use Packages\SocialProof\Models\TrackNotification;
use Packages\SocialProof\Filament\Admin\Resources\TrackNotificationResource\Pages;
use UnitEnum;
use BackedEnum;

class TrackNotificationResource extends Resource
{
    protected static ?string $model = TrackNotification::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-bell-alert';
    protected static string|UnitEnum|null $navigationGroup = 'Tracking & Analytics';
    protected static ?int $navigationSort = 2;
    protected static ?string $navigationLabel = 'Track Notifications';

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Informations')
                ->columns(2)
                ->schema([
                    TextInput::make('user_id')->label('User ID'),
                    Select::make('campaign_id')
                        ->label('Campagne')
                        ->relationship('campaign', 'name')
                        ->searchable()
                        ->preload(),
                    Select::make('notification_id')
                        ->label('Notification')
                        ->relationship('notification', 'title')
                        ->searchable()
                        ->preload(),
                    Select::make('type')
                        ->label('Type')
                        ->options([
                            'hover' => 'Hover',
                            'impression' => 'Impression',
                            'click' => 'Click',
                            'form_submission' => 'Form Submission',
                        ]),
                    TextInput::make('path')->label('Path')->columnSpanFull(),
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
                        'click' => 'success',
                        'impression' => 'info',
                        'hover' => 'warning',
                        'form_submission' => 'primary',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('user_id')
                    ->label('User ID')
                    ->searchable()
                    ->limit(15),
                Tables\Columns\TextColumn::make('campaign.name')
                    ->label('Campagne')
                    ->sortable(),
                Tables\Columns\TextColumn::make('notification.title')
                    ->label('Notification')
                    ->limit(30),
                Tables\Columns\TextColumn::make('path')
                    ->label('Path')
                    ->limit(40)
                    ->toggleable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Date')
                    ->dateTime('d/m/Y H:i')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('type')
                    ->options([
                        'hover' => 'Hover',
                        'impression' => 'Impression',
                        'click' => 'Click',
                        'form_submission' => 'Form Submission',
                    ]),
                Tables\Filters\SelectFilter::make('campaign_id')
                    ->relationship('campaign', 'name'),
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
            'index' => Pages\ListTrackNotifications::route('/'),
            'view' => Pages\ViewTrackNotification::route('/{record}'),
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::whereDate('created_at', today())->count();
    }
}
