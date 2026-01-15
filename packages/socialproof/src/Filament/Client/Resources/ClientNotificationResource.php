<?php

namespace Packages\SocialProof\Filament\Client\Resources;

use Filament\Tables;
use Filament\Resources\Resource;
use Filament\Actions\Action;
use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Schemas\Schema;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\ColorPicker;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Models\NotificationExtended;
use Packages\SocialProof\Filament\Client\Resources\ClientNotificationResource\Pages;
use UnitEnum;
use BackedEnum;

class ClientNotificationResource extends Resource
{
    protected static ?string $model = NotificationExtended::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-bell';
    protected static string|UnitEnum|null $navigationGroup = 'Social Proof';
    protected static ?int $navigationSort = 4;
    protected static ?string $navigationLabel = 'Notifications';

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->where('client_id', Auth::guard('client')->user()->client_id);
    }

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Configuration de base')
                ->columns(2)
                ->schema([
                    Select::make('campaign_id')
                        ->label('Campagne')
                        ->relationship('campaign', 'name', fn($query) => 
                            $query->where('client_id', Auth::guard('client')->user()->client_id)
                        )
                        ->required()
                        ->searchable()
                        ->preload(),

                    Select::make('status')
                        ->label('Statut')
                        ->options([
                            'active' => 'Actif',
                            'paused' => 'En pause',
                            'draft' => 'Brouillon',
                        ])
                        ->required()
                        ->default('draft'),

                    TextInput::make('title')
                        ->label('Titre')
                        ->required()
                        ->maxLength(255)
                        ->columnSpanFull(),

                    Textarea::make('message')
                        ->label('Message de la notification')
                        ->required()
                        ->rows(3)
                        ->maxLength(500)
                        ->columnSpanFull(),
                ]),

            Section::make('Apparence & Type')
                ->columns(2)
                ->schema([
                    Select::make('type')
                        ->label('Type de preuve sociale')
                        ->options([
                            'conversion' => 'Conversion',
                            'activity' => 'Activité',
                            'review' => 'Avis',
                            'signup' => 'Inscription',
                            'custom' => 'Personnalisé',
                        ])
                        ->required(),

                    ColorPicker::make('color')
                        ->label('Couleur d\'accentuation'),

                    TextInput::make('url')
                        ->label('Lien de redirection (URL)')
                        ->url()
                        ->maxLength(500),

                    TextInput::make('image_url')
                        ->label('URL de l\'image / Avatar')
                        ->url()
                        ->maxLength(500),

                    TextInput::make('icon')
                        ->label('Nom de l\'icône')
                        ->maxLength(100),
                ]),

            Section::make('Données dynamiques')
                ->schema([
                    KeyValue::make('data')
                        ->label('Variables personnalisées')
                        ->keyLabel('Variable')
                        ->valueLabel('Valeur par défaut')
                        ->reorderable(),
                ]),
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->label('Titre')
                    ->searchable()
                    ->sortable()
                    ->limit(30),

                Tables\Columns\TextColumn::make('campaign.name')
                    ->label('Campagne')
                    ->sortable()
                    ->searchable(),

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
                    ->dateTime('d/m/Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('type'),
                Tables\Filters\SelectFilter::make('status'),
            ])
            ->actions([
                // Bouton Voir cohérent avec les autres ressources
                Action::make('view')
                    ->label('Voir')
                    ->icon('heroicon-o-eye')
                    ->url(fn ($record) => static::getUrl('edit', ['record' => $record])),
                
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
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