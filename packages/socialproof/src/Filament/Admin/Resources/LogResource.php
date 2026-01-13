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
use Packages\SocialProof\Models\TrackLog;
use Packages\SocialProof\Filament\Admin\Resources\LogResource\Pages;
use UnitEnum;
use BackedEnum;

class LogResource extends Resource
{
    protected static ?string $model = TrackLog::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-document-text';
    protected static string|UnitEnum|null $navigationGroup = 'Tracking & Analytics';
    protected static ?int $navigationSort = 4;
    protected static ?string $navigationLabel = 'Logs';

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
                    TextInput::make('path')->label('Path'),
                ]),
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('user_id')
                    ->label('User ID')
                    ->searchable()
                    ->limit(20),
                Tables\Columns\TextColumn::make('campaign.name')
                    ->label('Campagne')
                    ->sortable(),
                Tables\Columns\TextColumn::make('path')
                    ->label('Path')
                    ->limit(50)
                    ->searchable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Date')
                    ->dateTime('d/m/Y H:i')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('campaign_id')
                    ->relationship('campaign', 'name'),
            ])
            ->actions([
                Action::make('view')
                    ->icon('heroicon-o-eye')
                    ->url(fn ($record) => static::getUrl('view', ['record' => $record])),
                DeleteAction::make(),
            ])
            ->bulkActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                    \Filament\Actions\BulkAction::make('cleanup')
                        ->label('Nettoyer (> 30 jours)')
                        ->icon('heroicon-o-trash')
                        ->color('danger')
                        ->requiresConfirmation()
                        ->action(fn () => TrackLog::where('created_at', '<', now()->subDays(30))->delete()),
                ]),
            ])
            ->defaultSort('created_at', 'desc');
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListLogs::route('/'),
            'view' => Pages\ViewLog::route('/{record}'),
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::whereDate('created_at', today())->count();
    }
}

