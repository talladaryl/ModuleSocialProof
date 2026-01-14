<?php

namespace Packages\SocialProof\Filament\Client\Resources;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Packages\SocialProof\Models\TeamMember;
use Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource\Pages;

class ClientTeamMemberResource extends Resource
{
    protected static ?string $model = TeamMember::class;
    protected static ?string $navigationIcon = 'heroicon-o-user-group';
    protected static ?string $navigationLabel = 'Équipe';
    protected static ?string $navigationGroup = 'Management';
    protected static ?int $navigationSort = 2;

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->where('client_id', Auth::guard('client')->user()->client_id);
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Informations du membre')
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->label('Nom complet')
                            ->required()
                            ->maxLength(255),

                        Forms\Components\TextInput::make('email')
                            ->label('Email')
                            ->email()
                            ->required()
                            ->maxLength(255)
                            ->unique(ignoreRecord: true),

                        Forms\Components\TextInput::make('password')
                            ->label('Mot de passe')
                            ->password()
                            ->required(fn ($context) => $context === 'create')
                            ->dehydrateStateUsing(fn ($state) => $state ? Hash::make($state) : null)
                            ->dehydrated(fn ($state) => filled($state))
                            ->helperText(fn ($context) => $context === 'edit' ? 'Laissez vide pour conserver le mot de passe actuel' : null),

                        Forms\Components\Select::make('role')
                            ->label('Rôle')
                            ->options([
                                'admin' => 'Administrateur',
                                'manager' => 'Manager',
                                'editor' => 'Éditeur',
                                'viewer' => 'Lecteur',
                            ])
                            ->required()
                            ->default('viewer'),

                        Forms\Components\Select::make('status')
                            ->label('Statut')
                            ->options([
                                'active' => 'Actif',
                                'inactive' => 'Inactif',
                                'pending' => 'En attente',
                            ])
                            ->default('pending')
                            ->required(),
                    ])->columns(2),

                Forms\Components\Section::make('Permissions')
                    ->schema([
                        Forms\Components\CheckboxList::make('permissions')
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
                                'manage_settings' => 'Gérer les paramètres',
                            ])
                            ->columns(3)
                            ->default(['view_analytics']),
                    ]),

                Forms\Components\Section::make('Restrictions')
                    ->schema([
                        Forms\Components\Select::make('site_access')
                            ->label('Accès aux sites')
                            ->options([
                                'all' => 'Tous les sites',
                                'specific' => 'Sites spécifiques',
                            ])
                            ->default('all')
                            ->live(),

                        Forms\Components\Select::make('allowed_sites')
                            ->label('Sites autorisés')
                            ->multiple()
                            ->relationship('allowedSites', 'name', fn ($query) => 
                                $query->where('client_id', Auth::guard('client')->user()->client_id)
                            )
                            ->preload()
                            ->visible(fn ($get) => $get('site_access') === 'specific'),
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

                Tables\Columns\TextColumn::make('email')
                    ->label('Email')
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

                Tables\Columns\BadgeColumn::make('status')
                    ->label('Statut')
                    ->colors([
                        'success' => 'active',
                        'warning' => 'pending',
                        'danger' => 'inactive',
                    ]),

                Tables\Columns\TextColumn::make('last_login_at')
                    ->label('Dernière connexion')
                    ->dateTime('d/m/Y H:i')
                    ->placeholder('Jamais')
                    ->sortable(),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Ajouté le')
                    ->dateTime('d/m/Y')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('role')
                    ->label('Rôle')
                    ->options([
                        'admin' => 'Administrateur',
                        'manager' => 'Manager',
                        'editor' => 'Éditeur',
                        'viewer' => 'Lecteur',
                    ]),

                Tables\Filters\SelectFilter::make('status')
                    ->label('Statut')
                    ->options([
                        'active' => 'Actif',
                        'inactive' => 'Inactif',
                        'pending' => 'En attente',
                    ]),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\Action::make('resend_invite')
                    ->label('Renvoyer invitation')
                    ->icon('heroicon-o-envelope')
                    ->color('info')
                    ->visible(fn ($record) => $record->status === 'pending')
                    ->action(function ($record) {
                        // Logique d'envoi d'invitation
                        // $record->notify(new TeamInviteNotification());
                    }),
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
