<?php

namespace Packages\SocialProof\Filament\Client\Resources;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Packages\SocialProof\Models\ApiKey;
use Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource\Pages;

class ClientApiKeyResource extends Resource
{
    protected static ?string $model = ApiKey::class;
    protected static ?string $navigationIcon = 'heroicon-o-key';
    protected static ?string $navigationLabel = 'Clés API';
    protected static ?string $navigationGroup = 'Management';
    protected static ?int $navigationSort = 1;

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->where('client_id', Auth::guard('client')->user()->client_id);
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Configuration de la clé API')
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->label('Nom de la clé')
                            ->required()
                            ->maxLength(255)
                            ->helperText('Un nom descriptif pour identifier cette clé'),

                        Forms\Components\Textarea::make('description')
                            ->label('Description')
                            ->maxLength(500)
                            ->rows(2),

                        Forms\Components\Select::make('type')
                            ->label('Type')
                            ->options([
                                'public' => 'Publique (tracking)',
                                'private' => 'Privée (API complète)',
                                'webhook' => 'Webhook',
                            ])
                            ->required()
                            ->default('public'),

                        Forms\Components\Select::make('status')
                            ->label('Statut')
                            ->options([
                                'active' => 'Active',
                                'inactive' => 'Inactive',
                                'revoked' => 'Révoquée',
                            ])
                            ->required()
                            ->default('active'),
                    ])->columns(2),

                Forms\Components\Section::make('Permissions')
                    ->schema([
                        Forms\Components\CheckboxList::make('permissions')
                            ->label('Permissions accordées')
                            ->options([
                                'read:events' => 'Lire les événements',
                                'write:events' => 'Créer des événements',
                                'read:conversions' => 'Lire les conversions',
                                'write:conversions' => 'Créer des conversions',
                                'read:widgets' => 'Lire les widgets',
                                'read:analytics' => 'Lire les analytics',
                                'webhooks' => 'Recevoir les webhooks',
                            ])
                            ->columns(2)
                            ->default(['read:events', 'write:events']),
                    ]),

                Forms\Components\Section::make('Restrictions')
                    ->schema([
                        Forms\Components\TagsInput::make('allowed_domains')
                            ->label('Domaines autorisés')
                            ->helperText('Laissez vide pour autoriser tous les domaines')
                            ->placeholder('Ajouter un domaine'),

                        Forms\Components\TagsInput::make('allowed_ips')
                            ->label('IPs autorisées')
                            ->helperText('Laissez vide pour autoriser toutes les IPs')
                            ->placeholder('Ajouter une IP'),

                        Forms\Components\TextInput::make('rate_limit')
                            ->label('Limite de requêtes/minute')
                            ->numeric()
                            ->default(60)
                            ->minValue(1)
                            ->maxValue(1000),

                        Forms\Components\DateTimePicker::make('expires_at')
                            ->label('Date d\'expiration')
                            ->helperText('Laissez vide pour une clé sans expiration'),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Nom')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('key')
                    ->label('Clé')
                    ->formatStateUsing(fn ($state) => Str::mask($state, '*', 8, -4))
                    ->copyable()
                    ->copyMessage('Clé copiée!')
                    ->copyMessageDuration(1500),

                Tables\Columns\TextColumn::make('type')
                    ->label('Type')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'public' => 'info',
                        'private' => 'warning',
                        'webhook' => 'success',
                        default => 'gray',
                    }),

                Tables\Columns\BadgeColumn::make('status')
                    ->label('Statut')
                    ->colors([
                        'success' => 'active',
                        'warning' => 'inactive',
                        'danger' => 'revoked',
                    ]),

                Tables\Columns\TextColumn::make('last_used_at')
                    ->label('Dernière utilisation')
                    ->dateTime('d/m/Y H:i')
                    ->placeholder('Jamais')
                    ->sortable(),

                Tables\Columns\TextColumn::make('expires_at')
                    ->label('Expiration')
                    ->dateTime('d/m/Y')
                    ->placeholder('Jamais')
                    ->sortable(),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Créé le')
                    ->dateTime('d/m/Y H:i')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('type')
                    ->label('Type')
                    ->options([
                        'public' => 'Publique',
                        'private' => 'Privée',
                        'webhook' => 'Webhook',
                    ]),

                Tables\Filters\SelectFilter::make('status')
                    ->label('Statut')
                    ->options([
                        'active' => 'Active',
                        'inactive' => 'Inactive',
                        'revoked' => 'Révoquée',
                    ]),
            ])
            ->actions([
                Tables\Actions\Action::make('regenerate')
                    ->label('Régénérer')
                    ->icon('heroicon-o-arrow-path')
                    ->color('warning')
                    ->requiresConfirmation()
                    ->modalHeading('Régénérer la clé API')
                    ->modalDescription('Cette action va générer une nouvelle clé. L\'ancienne clé ne fonctionnera plus.')
                    ->action(function ($record) {
                        $record->update([
                            'key' => 'sp_' . Str::random(32),
                            'last_used_at' => null,
                        ]);
                    }),
                Tables\Actions\Action::make('revoke')
                    ->label('Révoquer')
                    ->icon('heroicon-o-x-circle')
                    ->color('danger')
                    ->requiresConfirmation()
                    ->visible(fn ($record) => $record->status !== 'revoked')
                    ->action(fn ($record) => $record->update(['status' => 'revoked'])),
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListClientApiKeys::route('/'),
            'create' => Pages\CreateClientApiKey::route('/create'),
            'edit' => Pages\EditClientApiKey::route('/{record}/edit'),
        ];
    }

    public static function canCreate(): bool
    {
        $client = Auth::guard('client')->user();
        $plan = $client->getCurrentPlan();
        
        if (!$plan) return false;
        if ($plan->max_api_keys === -1) return true;
        
        return $client->apiKeys()->count() < $plan->max_api_keys;
    }
}
