<?php

namespace Packages\SocialProof\Filament\Client\Resources;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Packages\SocialProof\Models\NotificationExtended;
use Packages\SocialProof\Filament\Client\Resources\ClientNotificationResource\Pages;

class ClientNotificationResource extends Resource
{
    protected static ?string $model = NotificationExtended::class;
    protected static ?string $navigationIcon = 'heroicon-o-bell';
    protected static ?string $navigationLabel = 'Notifications';
    protected static ?string $navigationGroup = 'Social Proof';
    protected static ?int $navigationSort = 4;

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->where('client_id', auth('client')->user()->client_id);
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Informations de base')
                    ->schema([
                        Forms\Components\Select::make('campaign_id')
                            ->label('Campagne')
                            ->relationship('campaign', 'name', fn($query) => 
                                $query->where('client_id', auth('client')->user()->client_id)
                            )
                            ->required()
                            ->searchable()
                            ->preload(),

                        Forms\Components\TextInput::make('title')
                            ->label('Titre')
                            ->required()
                            ->maxLength(255),

                        Forms\Components\Textarea::make('message')
                            ->label('Message')
                            ->required()
                            ->rows(3)
                            ->maxLength(500),

                        Forms\Components\Select::make('type')
                            ->label('Type')
                            ->options([
                                'conversion' => 'Conversion',
                                'activity' => 'Activité',
                                'review' => 'Avis',
                                'signup' => 'Inscription',
                                'custom' => 'Personnalisé',
                            ])
                            ->required()
                            ->default('conversion'),

                        Forms\Components\Select::make('status')
                            ->label('Statut')
                            ->options([
                                'active' => 'Actif',
                                'paused' => 'En pause',
                                'draft' => 'Brouillon',
                            ])
                            ->required()
                            ->default('draft'),
                    ])->columns(2),

                Forms\Components\Section::make('Données')
                    ->schema([
                        Forms\Components\KeyValue::make('data')
                            ->label('Données personnalisées')
                            ->keyLabel('Clé')
                            ->valueLabel('Valeur')
                            ->reorderable(),
                    ]),

                Forms\Components\Section::make('Métadonnées')
                    ->schema([
                        Forms\Components\TextInput::make('url')
                            ->label('URL')
                            ->url()
                            ->maxLength(500),

                        Forms\Components\TextInput::make('image_url')
                            ->label('URL de l\'image')
                            ->url()
                            ->maxLength(500),

                        Forms\Components\TextInput::make('icon')
                            ->label('Icône')
                            ->maxLength(100),

                        Forms\Components\ColorPicker::make('color')
                            ->label('Couleur'),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('notification_id')
                    ->label('ID')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('campaign.name')
                    ->label('Campagne')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('title')
                    ->label('Titre')
                    ->searchable()
                    ->limit(30),

                Tables\Columns\TextColumn::make('type')
                    ->label('Type')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'conversion' => 'success',
                        'activity' => 'info',
                        'review' => 'warning',
                        'signup' => 'primary',
                        default => 'gray',
                    }),

                Tables\Columns\TextColumn::make('status')
                    ->label('Statut')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'active' => 'success',
                        'paused' => 'warning',
                        'draft' => 'gray',
                        default => 'gray',
                    }),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Créé le')
                    ->dateTime('d/m/Y H:i')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('type')
                    ->label('Type')
                    ->options([
                        'conversion' => 'Conversion',
                        'activity' => 'Activité',
                        'review' => 'Avis',
                        'signup' => 'Inscription',
                        'custom' => 'Personnalisé',
                    ]),

                Tables\Filters\SelectFilter::make('status')
                    ->label('Statut')
                    ->options([
                        'active' => 'Actif',
                        'paused' => 'En pause',
                        'draft' => 'Brouillon',
                    ]),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('created_at', 'desc');
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListClientNotifications::route('/'),
            'create' => Pages\CreateClientNotification::route('/create'),
            'edit' => Pages\EditClientNotification::route('/{record}/edit'),
        ];
    }
}
