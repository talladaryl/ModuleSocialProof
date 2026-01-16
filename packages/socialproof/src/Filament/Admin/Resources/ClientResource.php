<?php

namespace Packages\SocialProof\Filament\Admin\Resources;

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
use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\FileUpload;
use Packages\SocialProof\Models\Client;
use Packages\SocialProof\Filament\Admin\Resources\ClientResource\Pages;
use Packages\SocialProof\Filament\Admin\Resources\ClientResource\RelationManagers;
use UnitEnum;
use BackedEnum;

class ClientResource extends Resource
{
    protected static ?string $model = Client::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-users';
    protected static string|UnitEnum|null $navigationGroup = 'Clients & Abonnements';
    protected static ?int $navigationSort = 1;
    protected static ?string $navigationLabel = 'Clients';

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Informations Personnelles')
                ->columns(2)
                ->schema([
                    TextInput::make('name')->label('Nom')->required(),
                    TextInput::make('email')->label('Email')->email()->required()->unique(ignoreRecord: true),
                    TextInput::make('password')
                        ->label('Mot de passe')
                        ->password()
                        ->required(fn ($context) => $context === 'create')
                        ->dehydrated(fn ($state) => filled($state))
                        ->confirmed(),
                    TextInput::make('password_confirmation')
                        ->label('Confirmer le mot de passe')
                        ->password()
                        ->required(fn ($context) => $context === 'create')
                        ->dehydrated(false),
                    TextInput::make('phone')->label('Téléphone'),
                    FileUpload::make('avatar')->image()->directory('avatars')->avatar(),
                ]),

            Section::make('Entreprise')
                ->columns(2)
                ->schema([
                    TextInput::make('company')->label('Entreprise'),
                    TextInput::make('website')->label('Site web')->url(),
                    Select::make('country')->label('Pays')->searchable()->options([
                        'FR' => 'France', 'BE' => 'Belgique', 'CH' => 'Suisse', 'CA' => 'Canada',
                        'US' => 'États-Unis', 'GB' => 'Royaume-Uni', 'DE' => 'Allemagne',
                    ]),
                    Select::make('timezone')->label('Fuseau horaire')->searchable()->default('Europe/Paris')->options([
                        'Europe/Paris' => 'Europe/Paris', 'Europe/Brussels' => 'Europe/Brussels',
                        'America/New_York' => 'America/New_York', 'UTC' => 'UTC',
                    ]),
                ]),

            Section::make('Compte')
                ->columns(2)
                ->schema([
                    Select::make('status')->label('Statut')->required()->options([
                        'active' => 'Actif',
                        'inactive' => 'Inactif',
                        'suspended' => 'Suspendu',
                        'pending' => 'En attente',
                    ])->default('pending'),
                    Select::make('language')->label('Langue')->default('fr')->options([
                        'fr' => 'Français',
                        'en' => 'English',
                    ]),
                    DateTimePicker::make('email_verified_at')->label('Email vérifié le'),
                    DateTimePicker::make('last_login_at')->label('Dernière connexion')->disabled(),
                ]),

            Section::make('Configuration')
                ->schema([
                    KeyValue::make('settings')->label('Paramètres')->columnSpanFull(),
                    KeyValue::make('billing_info')->label('Informations de facturation')->columnSpanFull(),
                ]),

            Section::make('Notes')
                ->schema([
                    Textarea::make('notes')->label('Notes internes')->columnSpanFull()->rows(4),
                ]),
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('avatar')->circular(),
                Tables\Columns\TextColumn::make('name')->label('Nom')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('email')->label('Email')->searchable()->sortable()->copyable(),
                Tables\Columns\TextColumn::make('company')->label('Entreprise')->toggleable(),
                Tables\Columns\TextColumn::make('subscription.plan.name')
                    ->label('Plan')
                    ->badge()
                    ->color(fn (?string $state) => match ($state) {
                        'Free' => 'gray',
                        'Starter' => 'info',
                        'Professional' => 'warning',
                        'Enterprise' => 'success',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('sites_count')
                    ->label('Sites')
                    ->counts('sites')
                    ->badge()
                    ->color('info'),
                Tables\Columns\TextColumn::make('status')
                    ->label('Statut')
                    ->badge()
                    ->color(fn ($state) => match ($state) {
                        'active' => 'success',
                        'inactive' => 'gray',
                        'suspended' => 'danger',
                        'pending' => 'warning',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Créé le')
                    ->dateTime('d/m/Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->label('Statut')
                    ->options([
                        'active' => 'Actif',
                        'inactive' => 'Inactif',
                        'suspended' => 'Suspendu',
                        'pending' => 'En attente',
                    ]),
            ])
            ->actions([
                Action::make('view')
                    ->label('Voir')
                    ->icon('heroicon-o-eye')
                    ->url(fn ($record) => static::getUrl('view', ['record' => $record])),
                Action::make('suspend')
                    ->label('Suspendre')
                    ->icon('heroicon-o-no-symbol')
                    ->color('danger')
                    ->requiresConfirmation()
                    ->visible(fn ($record) => $record->status === 'active')
                    ->action(fn ($record) => $record->update(['status' => 'suspended'])),
                Action::make('activate')
                    ->label('Activer')
                    ->icon('heroicon-o-check')
                    ->color('success')
                    ->visible(fn ($record) => $record->status !== 'active')
                    ->action(fn ($record) => $record->update(['status' => 'active'])),
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([
                BulkActionGroup::make([
                    \Filament\Actions\BulkAction::make('activate')
                        ->label('Activer')
                        ->icon('heroicon-o-check')
                        ->action(fn ($records) => $records->each->update(['status' => 'active'])),
                    \Filament\Actions\BulkAction::make('suspend')
                        ->label('Suspendre')
                        ->icon('heroicon-o-no-symbol')
                        ->color('danger')
                        ->requiresConfirmation()
                        ->action(fn ($records) => $records->each->update(['status' => 'suspended'])),
                    DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            RelationManagers\SubscriptionsRelationManager::class,
            RelationManagers\SitesRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListClients::route('/'),
            'create' => Pages\CreateClient::route('/create'),
            'view' => Pages\ViewClient::route('/{record}'),
            'edit' => Pages\EditClient::route('/{record}/edit'),
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::where('status', 'active')->count();
    }
}

