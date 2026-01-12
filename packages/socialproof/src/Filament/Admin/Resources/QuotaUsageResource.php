<?php

namespace Packages\SocialProof\Filament\Admin\Resources;

use Filament\Tables;
use Filament\Resources\Resource;
use Filament\Actions\Action;
use Filament\Actions\EditAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Schemas\Schema;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\DatePicker;
use Packages\SocialProof\Models\QuotaUsage;
use Packages\SocialProof\Filament\Admin\Resources\QuotaUsageResource\Pages;
use UnitEnum;
use BackedEnum;

class QuotaUsageResource extends Resource
{
    protected static ?string $model = QuotaUsage::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-chart-pie';
    protected static string|UnitEnum|null $navigationGroup = 'Système';
    protected static ?int $navigationSort = 2;
    protected static ?string $navigationLabel = 'Quotas';

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Informations')
                ->columns(2)
                ->schema([
                    Select::make('client_id')
                        ->label('Client')
                        ->relationship('client', 'name')
                        ->required()
                        ->searchable()
                        ->preload(),
                    Select::make('quota_type')
                        ->label('Type de quota')
                        ->required()
                        ->options([
                            'events' => 'Événements',
                            'notifications' => 'Notifications',
                            'widgets' => 'Widgets',
                            'sites' => 'Sites',
                            'api_calls' => 'Appels API',
                        ]),
                    TextInput::make('used')
                        ->label('Utilisé')
                        ->numeric()
                        ->required(),
                    TextInput::make('limit')
                        ->label('Limite')
                        ->numeric()
                        ->required(),
                    DatePicker::make('period_start')
                        ->label('Début de période')
                        ->required(),
                    DatePicker::make('period_end')
                        ->label('Fin de période')
                        ->required(),
                ]),
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('client.name')
                    ->label('Client')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('quota_type')
                    ->label('Type')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'events' => 'info',
                        'notifications' => 'success',
                        'widgets' => 'warning',
                        'sites' => 'primary',
                        'api_calls' => 'gray',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('used')
                    ->label('Utilisé')
                    ->numeric(),
                Tables\Columns\TextColumn::make('limit')
                    ->label('Limite')
                    ->numeric(),
                Tables\Columns\TextColumn::make('usage_percentage')
                    ->label('Utilisation')
                    ->getStateUsing(fn ($record) => $record->getUsagePercentage() . '%')
                    ->badge()
                    ->color(fn ($record) => match (true) {
                        $record->getUsagePercentage() >= 100 => 'danger',
                        $record->getUsagePercentage() >= 80 => 'warning',
                        default => 'success',
                    }),
                Tables\Columns\TextColumn::make('period_start')
                    ->label('Période')
                    ->date('d/m/Y'),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('quota_type')
                    ->options([
                        'events' => 'Événements',
                        'notifications' => 'Notifications',
                        'widgets' => 'Widgets',
                        'sites' => 'Sites',
                        'api_calls' => 'Appels API',
                    ]),
                Tables\Filters\SelectFilter::make('client_id')
                    ->relationship('client', 'name'),
            ])
            ->actions([
                Action::make('reset')
                    ->label('Reset')
                    ->icon('heroicon-o-arrow-path')
                    ->color('warning')
                    ->requiresConfirmation()
                    ->action(fn ($record) => $record->update(['used' => 0])),
                EditAction::make(),
            ])
            ->bulkActions([BulkActionGroup::make([DeleteBulkAction::make()])]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListQuotaUsages::route('/'),
            'create' => Pages\CreateQuotaUsage::route('/create'),
            'edit' => Pages\EditQuotaUsage::route('/{record}/edit'),
        ];
    }
}
