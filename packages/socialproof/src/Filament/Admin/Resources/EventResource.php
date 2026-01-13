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
use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\DateTimePicker;
use Packages\SocialProof\Models\Event;
use Packages\SocialProof\Filament\Admin\Resources\EventResource\Pages;
use UnitEnum;
use BackedEnum;

class EventResource extends Resource
{
    protected static ?string $model = Event::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-bolt';
    protected static string|UnitEnum|null $navigationGroup = 'Tracking & Analytics';
    protected static ?int $navigationSort = 1;
    protected static ?string $navigationLabel = 'Événements';

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Informations')
                ->columns(2)
                ->schema([
                    Select::make('widget_id')
                        ->label('Widget')
                        ->relationship('widget', 'name')
                        ->searchable()
                        ->preload(),
                    Select::make('type')
                        ->label('Type')
                        ->required()
                        ->options([
                            'purchase' => 'Achat',
                            'signup' => 'Inscription',
                            'review' => 'Avis',
                            'visit' => 'Visite',
                            'custom' => 'Personnalisé',
                        ]),
                ]),

            Section::make('Client')
                ->columns(2)
                ->schema([
                    TextInput::make('customer_name')->label('Nom du client'),
                    TextInput::make('customer_email')->label('Email du client')->email(),
                    TextInput::make('customer_location')->label('Localisation'),
                ]),

            Section::make('Technique')
                ->columns(2)
                ->schema([
                    TextInput::make('ip_address')->label('Adresse IP'),
                    TextInput::make('user_agent')->label('User Agent')->columnSpanFull(),
                    DateTimePicker::make('processed_at')->label('Traité le'),
                ]),

            Section::make('Données')
                ->schema([
                    KeyValue::make('data')->label('Données personnalisées')->columnSpanFull(),
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
                        'purchase' => 'success',
                        'signup' => 'info',
                        'review' => 'warning',
                        'visit' => 'gray',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('customer_name')
                    ->label('Client')
                    ->searchable()
                    ->limit(20),
                Tables\Columns\TextColumn::make('customer_email')
                    ->label('Email')
                    ->searchable()
                    ->limit(25)
                    ->toggleable(),
                Tables\Columns\TextColumn::make('customer_location')
                    ->label('Localisation')
                    ->limit(20)
                    ->toggleable(),
                Tables\Columns\TextColumn::make('widget.name')
                    ->label('Widget')
                    ->sortable()
                    ->limit(20),
                Tables\Columns\IconColumn::make('processed_at')
                    ->label('Traité')
                    ->boolean()
                    ->trueIcon('heroicon-o-check-circle')
                    ->falseIcon('heroicon-o-clock')
                    ->getStateUsing(fn ($record) => $record->processed_at !== null),
                Tables\Columns\TextColumn::make('ip_address')
                    ->label('IP')
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Date')
                    ->dateTime('d/m/Y H:i')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('type')
                    ->options([
                        'purchase' => 'Achat',
                        'signup' => 'Inscription',
                        'review' => 'Avis',
                        'visit' => 'Visite',
                        'custom' => 'Personnalisé',
                    ]),
                Tables\Filters\SelectFilter::make('widget_id')
                    ->label('Widget')
                    ->relationship('widget', 'name'),
                Tables\Filters\TernaryFilter::make('processed')
                    ->label('Traité')
                    ->queries(
                        true: fn ($query) => $query->whereNotNull('processed_at'),
                        false: fn ($query) => $query->whereNull('processed_at'),
                    ),
            ])
            ->actions([
                Action::make('view')
                    ->label('Voir')
                    ->icon('heroicon-o-eye')
                    ->url(fn ($record) => static::getUrl('view', ['record' => $record])),
                Action::make('process')
                    ->label('Marquer traité')
                    ->icon('heroicon-o-check')
                    ->color('success')
                    ->visible(fn ($record) => $record->processed_at === null)
                    ->action(fn ($record) => $record->markAsProcessed()),
                DeleteAction::make(),
            ])
            ->bulkActions([
                BulkActionGroup::make([
                    Tables\Actions\BulkAction::make('process')
                        ->label('Marquer traités')
                        ->icon('heroicon-o-check')
                        ->action(fn ($records) => $records->each->markAsProcessed()),
                    DeleteBulkAction::make(),
                    Tables\Actions\BulkAction::make('cleanup')
                        ->label('Nettoyer (> 30 jours)')
                        ->icon('heroicon-o-trash')
                        ->color('danger')
                        ->requiresConfirmation()
                        ->action(fn () => Event::where('created_at', '<', now()->subDays(30))->delete()),
                ]),
            ])
            ->defaultSort('created_at', 'desc');
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListEvents::route('/'),
            'view' => Pages\ViewEvent::route('/{record}'),
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::whereDate('created_at', today())->count();
    }

    public static function getNavigationBadgeColor(): ?string
    {
        return 'info';
    }
}
