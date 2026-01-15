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
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\CheckboxList;
use Filament\Forms\Components\TagsInput;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Packages\SocialProof\Models\ApiKey;
use Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource\Pages;
use UnitEnum;
use BackedEnum;

class ClientApiKeyResource extends Resource
{
    protected static ?string $model = ApiKey::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-key';
    protected static string|UnitEnum|null $navigationGroup = 'Management';
    protected static ?int $navigationSort = 1;
    protected static ?string $navigationLabel = 'Clés API';

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->where('client_id', Auth::guard('client')->user()->client_id);
    }

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Configuration de la clé API')
                ->columns(2)
                ->schema([
                    TextInput::make('name')
                        ->label('Nom de la clé')
                        ->required()
                        ->maxLength(255)
                        ->helperText('Un nom descriptif pour identifier cette clé'),

                    Select::make('type')
                        ->label('Type')
                        ->options([
                            'public' => 'Publique (tracking)',
                            'private' => 'Privée (API complète)',
                            'webhook' => 'Webhook',
                        ])
                        ->required()
                        ->default('public'),

                    Textarea::make('description')
                        ->label('Description')
                        ->columnSpanFull()
                        ->maxLength(500)
                        ->rows(2),

                    Select::make('status')
                        ->label('Statut')
                        ->options([
                            'active' => 'Active',
                            'inactive' => 'Inactive',
                            'revoked' => 'Révoquée',
                        ])
                        ->required()
                        ->default('active'),
                ]),

            Section::make('Permissions & Restrictions')
                ->columns(2)
                ->schema([
                    CheckboxList::make('permissions')
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

                    TextInput::make('rate_limit')
                        ->label('Limite de requêtes/minute')
                        ->numeric()
                        ->default(60)
                        ->minValue(1)
                        ->maxValue(1000),
                ]),

            Section::make('Sécurité & Expiration')
                ->columns(2)
                ->schema([
                    TagsInput::make('allowed_domains')
                        ->label('Domaines autorisés')
                        ->placeholder('Ajouter un domaine'),

                    TagsInput::make('allowed_ips')
                        ->label('IPs autorisées')
                        ->placeholder('Ajouter une IP'),

                    DateTimePicker::make('expires_at')
                        ->label('Date d\'expiration')
                        ->columnSpanFull(),
                ]),
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
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
                    ->copyMessage('Clé copiée!'),

                Tables\Columns\TextColumn::make('type')
                    ->badge()
                    ->color(fn ($state) => match ($state) {
                        'public' => 'info',
                        'private' => 'warning',
                        'webhook' => 'success',
                        default => 'gray',
                    }),

                Tables\Columns\TextColumn::make('status')
                    ->badge()
                    ->color(fn ($state) => match ($state) {
                        'active' => 'success',
                        'inactive' => 'warning',
                        'revoked' => 'danger',
                        default => 'gray',
                    }),

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
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('type'),
                Tables\Filters\SelectFilter::make('status'),
            ])
            ->actions([
                // Bouton Voir personnalisé comme sur CampaignResource
                Action::make('view')
                    ->label('Voir')
                    ->icon('heroicon-o-eye')
                    ->url(fn ($record) => static::getUrl('edit', ['record' => $record])),

                // Action de régénération personnalisée
                Action::make('regenerate')
                    ->label('Régénérer')
                    ->icon('heroicon-o-arrow-path')
                    ->color('warning')
                    ->requiresConfirmation()
                    ->action(function ($record) {
                        $record->update([
                            'key' => 'sp_' . Str::random(32),
                            'last_used_at' => null,
                        ]);
                    }),

                EditAction::make(),
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
            'index' => Pages\ListClientApiKeys::route('/'),
            'create' => Pages\CreateClientApiKey::route('/create'),
            'edit' => Pages\EditClientApiKey::route('/{record}/edit'),
        ];
    }

    public static function canCreate(): bool
    {
        $client = Auth::guard('client')->user();
        if (!$client) return false;

        $plan = $client->getCurrentPlan();
        if (!$plan) return false;
        
        if ($plan->max_api_keys === -1) return true;
        
        return $client->apiKeys()->count() < $plan->max_api_keys;
    }
}