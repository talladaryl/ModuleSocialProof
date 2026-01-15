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
use Filament\Forms\Components\Select;
use Filament\Forms\Components\CheckboxList;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Packages\SocialProof\Models\TeamMember;
use Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource\Pages;
use UnitEnum;
use BackedEnum;

class ClientTeamMemberResource extends Resource
{
    protected static ?string $model = TeamMember::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-user-group';
    protected static string|UnitEnum|null $navigationGroup = 'Management';
    protected static ?int $navigationSort = 2;
    protected static ?string $navigationLabel = 'Équipe';

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->where('client_id', Auth::guard('client')->user()->client_id);
    }

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Informations du membre')
                ->columns(2)
                ->schema([
                    TextInput::make('name')
                        ->label('Nom complet')
                        ->required()
                        ->maxLength(255),

                    TextInput::make('email')
                        ->label('Email')
                        ->email()
                        ->required()
                        ->maxLength(255)
                        ->unique(ignoreRecord: true),

                    TextInput::make('password')
                        ->label('Mot de passe')
                        ->password()
                        ->required(fn ($context) => $context === 'create')
                        ->dehydrateStateUsing(fn ($state) => $state ? Hash::make($state) : null)
                        ->dehydrated(fn ($state) => filled($state))
                        ->helperText(fn ($context) => $context === 'edit' ? 'Laissez vide pour conserver le mot de passe actuel' : null),

                    Select::make('role')
                        ->label('Rôle')
                        ->options([
                            'admin' => 'Administrateur',
                            'manager' => 'Manager',
                            'editor' => 'Éditeur',
                            'viewer' => 'Lecteur',
                        ])
                        ->required()
                        ->default('viewer'),

                    Select::make('status')
                        ->label('Statut')
                        ->options([
                            'active' => 'Actif',
                            'inactive' => 'Inactif',
                            'pending' => 'En attente',
                        ])
                        ->default('pending')
                        ->required(),
                ]),

            Section::make('Permissions & Accès')
                ->schema([
                    CheckboxList::make('permissions')
                        ->label('Permissions spécifiques')
                        ->options([
                            'manage_sites' => 'Gérer les sites',
                            'manage_widgets' => 'Gérer les widgets',
                            'manage_campaigns' => 'Gérer les campagnes',
                            'manage_notifications' => 'Gérer les notifications',
                            'view_analytics' => 'Voir les analytics',
                            'manage_api_keys' => 'Gérer les clés API',
                            'manage_team' => 'Gérer l\'équipe',
                            'manage_billing' => 'Gérer la facturation',
                        ])
                        ->columns(3)
                        ->default(['view_analytics']),

                    Select::make('site_access')
                        ->label('Restriction d\'accès aux sites')
                        ->options([
                            'all' => 'Tous les sites du compte',
                            'specific' => 'Sites spécifiques uniquement',
                        ])
                        ->default('all')
                        ->live(),

                    Select::make('allowed_sites')
                        ->label('Sélection des sites')
                        ->multiple()
                        ->relationship('allowedSites', 'name', fn ($query) => 
                            $query->where('client_id', Auth::guard('client')->user()->client_id)
                        )
                        ->preload()
                        ->visible(fn ($get) => $get('site_access') === 'specific')
                        ->columnSpanFull(),
                ]),
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Membre')
                    ->description(fn ($record) => $record->email)
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('role')
                    ->label('Rôle')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'admin' => 'danger',
                        'manager' => 'warning',
                        'editor' => 'info',
                        'viewer' => 'gray',
                        default => 'gray',
                    })
                    ->formatStateUsing(fn (string $state): string => match ($state) {
                        'admin' => 'Administrateur',
                        'manager' => 'Manager',
                        'editor' => 'Éditeur',
                        'viewer' => 'Lecteur',
                        default => $state,
                    }),

                Tables\Columns\TextColumn::make('status')
                    ->label('Statut')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'active' => 'success',
                        'pending' => 'warning',
                        'inactive' => 'danger',
                        default => 'gray',
                    }),

                Tables\Columns\TextColumn::make('last_login_at')
                    ->label('Dernière activité')
                    ->dateTime('d/m/Y H:i')
                    ->placeholder('Jamais connecté')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('role'),
                Tables\Filters\SelectFilter::make('status'),
            ])
            ->actions([
                // Action personnalisée pour les invitations
                Action::make('resend_invite')
                    ->label('Réinviter')
                    ->icon('heroicon-o-envelope')
                    ->color('info')
                    ->visible(fn ($record) => $record->status === 'pending')
                    ->requiresConfirmation()
                    ->action(fn ($record) => /* Logique d'envoi */ null),

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
            'index' => Pages\ListClientTeamMembers::route('/'),
            'create' => Pages\CreateClientTeamMember::route('/create'),
            'edit' => Pages\EditClientTeamMember::route('/{record}/edit'),
        ];
    }

    public static function canCreate(): bool
    {
        $client = Auth::guard('client')->user();
        $plan = $client->getCurrentPlan();
        
        if (!$plan) return false;
        if ($plan->max_team_members === -1) return true;
        
        return $client->teamMembers()->count() < $plan->max_team_members;
    }
}