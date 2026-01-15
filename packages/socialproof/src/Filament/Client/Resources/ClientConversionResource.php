<?php

namespace Packages\SocialProof\Filament\Client\Resources;

use Filament\Tables;
use Filament\Resources\Resource;
use Filament\Actions\Action;
use Filament\Schemas\Schema;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Placeholder;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Models\TrackConversion;
use Packages\SocialProof\Filament\Client\Resources\ClientConversionResource\Pages;
use UnitEnum;
use BackedEnum;

class ClientConversionResource extends Resource
{
    protected static ?string $model = TrackConversion::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-cursor-arrow-rays';
    protected static string|UnitEnum|null $navigationGroup = 'Tracking';
    protected static ?int $navigationSort = 2;
    protected static ?string $navigationLabel = 'Conversions';

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->where('client_id', Auth::guard('client')->user()->client_id);
    }

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Détails de la Conversion')
                ->columns(2)
                ->schema([
                    Placeholder::make('notification')
                        ->label('Notification source')
                        ->content(fn ($record) => $record->notification?->title ?? 'N/A'),

                    Placeholder::make('site')
                        ->label('Site Web')
                        ->content(fn ($record) => $record->site?->name ?? 'N/A'),

                    TextInput::make('action')
                        ->label('Type d\'action')
                        ->disabled(),

                    TextInput::make('created_at')
                        ->label('Date du tracking')
                        ->disabled(),
                ]),

            Section::make('Informations techniques')
                ->columns(2)
                ->schema([
                    TextInput::make('page_url')
                        ->label('URL de la page')
                        ->columnSpanFull()
                        ->disabled(),

                    TextInput::make('ip_address')
                        ->label('Adresse IP')
                        ->disabled(),

                    TextInput::make('user_agent')
                        ->label('Navigateur / User Agent')
                        ->disabled(),
                ]),
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('conversion_id')
                    ->label('ID')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true),

                Tables\Columns\TextColumn::make('notification.title')
                    ->label('Notification')
                    ->searchable()
                    ->limit(30),

                Tables\Columns\TextColumn::make('site.name')
                    ->label('Site')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('action')
                    ->label('Action')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'click' => 'success',
                        'view' => 'info',
                        'dismiss' => 'warning',
                        default => 'gray',
                    }),

                Tables\Columns\TextColumn::make('page_url')
                    ->label('Page')
                    ->limit(40)
                    ->url(fn ($record) => $record->page_url)
                    ->openUrlInNewTab(),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Date')
                    ->dateTime('d/m/Y H:i')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('action')
                    ->options([
                        'click' => 'Clic',
                        'view' => 'Vue',
                        'dismiss' => 'Fermé',
                    ]),

                Tables\Filters\SelectFilter::make('site_id')
                    ->label('Site')
                    ->relationship('site', 'name', fn ($query) => 
                        $query->where('client_id', Auth::guard('client')->user()->client_id)
                    ),

                Tables\Filters\Filter::make('created_at')
                    ->form([
                        DatePicker::make('from')->label('Du'),
                        DatePicker::make('until')->label('Au'),
                    ])
                    ->query(function (Builder $query, array $data): Builder {
                        return $query
                            ->when($data['from'], fn ($q, $date) => $q->whereDate('created_at', '>=', $date))
                            ->when($data['until'], fn ($q, $date) => $q->whereDate('created_at', '<=', $date));
                    }),
            ])
            ->actions([
                // Bouton "Voir" personnalisé comme sur la ressource Campaign
                Action::make('view')
                    ->label('Voir')
                    ->icon('heroicon-o-eye')
                    ->url(fn ($record) => static::getUrl('view', ['record' => $record])),
            ])
            ->bulkActions([])
            ->defaultSort('created_at', 'desc');
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListClientConversions::route('/'),
            'view' => Pages\ViewClientConversion::route('/{record}'),
        ];
    }

    public static function canCreate(): bool
    {
        return false; // Les conversions sont créées par le script de tracking, pas manuellement
    }
}