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
use Filament\Forms\Components\KeyValue;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Models\Event;
use Packages\SocialProof\Filament\Client\Resources\ClientEventResource\Pages;
use UnitEnum;
use BackedEnum;

class ClientEventResource extends Resource
{
    protected static ?string $model = Event::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-bolt';
    protected static string|UnitEnum|null $navigationGroup = 'Tracking';
    protected static ?int $navigationSort = 1;
    protected static ?string $navigationLabel = 'Événements';

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->where('client_id', Auth::guard('client')->user()->client_id);
    }

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Détails de l\'Événement')
                ->columns(2)
                ->schema([
                    TextInput::make('type')
                        ->label('Type d\'événement')
                        ->disabled(),

                    Placeholder::make('site')
                        ->label('Site Web')
                        ->content(fn ($record) => $record->site?->name ?? 'N/A'),

                    TextInput::make('created_at')
                        ->label('Date de capture')
                        ->disabled(),

                    TextInput::make('ip_address')
                        ->label('Adresse IP')
                        ->disabled(),
                ]),

            Section::make('Données collectées (Payload)')
                ->schema([
                    KeyValue::make('data')
                        ->label('Contenu de l\'événement')
                        ->keyLabel('Propriété')
                        ->valueLabel('Valeur')
                        ->columnSpanFull(),
                ]),
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('event_id')
                    ->label('ID')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true),

                Tables\Columns\TextColumn::make('type')
                    ->label('Type')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'purchase' => 'success',
                        'signup' => 'info',
                        'view' => 'warning',
                        'click' => 'primary',
                        default => 'gray',
                    })
                    ->sortable(),

                Tables\Columns\TextColumn::make('site.name')
                    ->label('Site')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('data.customer_name')
                    ->label('Client')
                    ->default('Anonyme')
                    ->searchable(),

                Tables\Columns\TextColumn::make('data.amount')
                    ->label('Montant')
                    ->money('EUR')
                    ->default('-'),

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
                        'view' => 'Vue',
                        'click' => 'Clic',
                        'custom' => 'Personnalisé',
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
            'index' => Pages\ListClientEvents::route('/'),
            'view' => Pages\ViewClientEvent::route('/{record}'),
        ];
    }

    public static function canCreate(): bool
    {
        return false;
    }
}