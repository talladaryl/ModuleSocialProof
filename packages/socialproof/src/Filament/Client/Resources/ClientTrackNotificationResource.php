<?php

namespace Packages\SocialProof\Filament\Client\Resources;

use Filament\Tables;
use Filament\Resources\Resource;
use Filament\Actions\Action;
use Filament\Actions\DeleteAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Schemas\Schema;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Placeholder;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Models\TrackNotification;
use Packages\SocialProof\Filament\Client\Resources\ClientTrackNotificationResource\Pages;
use UnitEnum;
use BackedEnum;

class ClientTrackNotificationResource extends Resource
{
    protected static ?string $model = TrackNotification::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-chart-bar';
    protected static string|UnitEnum|null $navigationGroup = 'Tracking';
    protected static ?int $navigationSort = 3;
    protected static ?string $navigationLabel = 'Logs Notifications';

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->where('client_id', Auth::guard('client')->user()->client_id)
            ->with(['campaign', 'notification']);
    }

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Détails de l\'interaction')
                ->columns(2)
                ->schema([
                    Placeholder::make('campaign_name')
                        ->label('Campagne')
                        ->content(fn ($record) => $record->campaign?->name ?? 'N/A'),

                    TextInput::make('type')
                        ->label('Type d\'interaction')
                        ->disabled(),

                    TextInput::make('path')
                        ->label('URL de la page')
                        ->columnSpanFull()
                        ->disabled(),

                    Placeholder::make('created_at')
                        ->label('Date et heure')
                        ->content(fn ($record) => $record->created_at?->format('d/m/Y H:i:s')),
                ]),
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Date')
                    ->description(fn ($record) => $record->created_at->diffForHumans())
                    ->dateTime('d/m/Y H:i:s')
                    ->sortable(),

                Tables\Columns\TextColumn::make('campaign.name')
                    ->label('Campagne')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('type')
                    ->label('Interaction')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'click' => 'success',
                        'impression' => 'gray',
                        'hover' => 'info',
                        'form_submission' => 'warning',
                        default => 'gray',
                    })
                    ->formatStateUsing(fn (string $state): string => match ($state) {
                        'impression' => 'Affichage',
                        'hover' => 'Survol',
                        'click' => 'Clic',
                        'form_submission' => 'Conversion',
                        default => $state,
                    }),

                Tables\Columns\TextColumn::make('path')
                    ->label('Page')
                    ->limit(40)
                    ->copyable()
                    ->tooltip(fn ($record) => $record->path),
            ])
            ->defaultSort('created_at', 'desc')
            ->filters([
                Tables\Filters\SelectFilter::make('type')
                    ->label('Type')
                    ->options([
                        'click' => 'Clics',
                        'impression' => 'Affichages',
                        'hover' => 'Survols',
                        'form_submission' => 'Conversions',
                    ]),
                Tables\Filters\SelectFilter::make('campaign_id')
                    ->label('Campagne')
                    ->relationship('campaign', 'name', fn($query) => 
                        $query->where('client_id', Auth::guard('client')->user()->client_id)
                    ),
            ])
            ->actions([
                Action::make('view')
                    ->label('Voir')
                    ->icon('heroicon-o-eye')
                    ->url(fn ($record) => static::getUrl('view', ['record' => $record])),
                DeleteAction::make(),
            ])
            ->bulkActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListClientTrackNotifications::route('/'),
            'view' => Pages\ViewClientTrackNotification::route('/{record}'),
        ];
    }

    public static function canCreate(): bool
    {
        return false;
    }
}
