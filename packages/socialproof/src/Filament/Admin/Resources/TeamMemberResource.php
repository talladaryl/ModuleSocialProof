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
use Filament\Forms\Components\Select;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\Textarea;
use Packages\SocialProof\Models\TeamMember;
use Packages\SocialProof\Filament\Admin\Resources\TeamMemberResource\Pages;
use UnitEnum;
use BackedEnum;

class TeamMemberResource extends Resource
{
    protected static ?string $model = TeamMember::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-user-plus';
    protected static string|UnitEnum|null $navigationGroup = 'Sites & Teams';
    protected static ?int $navigationSort = 3;
    protected static ?string $navigationLabel = 'Membres';
    protected static ?string $modelLabel = 'Membre';
    protected static ?string $pluralModelLabel = 'Membres';

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Informations du Membre')
                ->columns(2)
                ->schema([
                    Select::make('team_id')
                        ->label('Équipe')
                        ->relationship('team', 'name')
                        ->searchable()
                        ->preload()
                        ->required(),
                    Select::make('client_id')
                        ->label('Client')
                        ->relationship('client', 'name')
                        ->searchable()
                        ->preload(),
                    TextInput::make('email')
                        ->label('Email')
                        ->email()
                        ->required(),
                    Select::make('role')
                        ->label('Rôle')
                        ->required()
                        ->options([
                            'admin' => 'Administrateur',
                            'manager' => 'Manager',
                            'editor' => 'Éditeur',
                            'viewer' => 'Lecteur',
                        ])
                        ->default('viewer'),
                ]),

            Section::make('Statut & Permissions')
                ->columns(2)
                ->schema([
                    Select::make('status')
                        ->label('Statut')
                        ->required()
                        ->options([
                            'pending' => 'En attente',
                            'active' => 'Actif',
                            'inactive' => 'Inactif',
                            'declined' => 'Refusé',
                        ])
                        ->default('pending'),
                    KeyValue::make('permissions')
                        ->label('Permissions')
                        ->columnSpanFull(),
                    KeyValue::make('site_access')
                        ->label('Accès aux sites')
                        ->columnSpanFull(),
                ]),

            Section::make('Invitation')
                ->columns(2)
                ->schema([
                    DateTimePicker::make('invited_at')
                        ->label('Invité le'),
                    DateTimePicker::make('joined_at')
                        ->label('Rejoint le'),
                    DateTimePicker::make('invitation_expires_at')
                        ->label('Expiration invitation'),
                    DateTimePicker::make('last_activity_at')
                        ->label('Dernière activité')
                        ->disabled(),
                    Textarea::make('invitation_message')
                        ->label('Message d\'invitation')
                        ->columnSpanFull(),
                ]),
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('email')
                    ->label('Email')
                    ->searchable()
                    ->sortable()
                    ->copyable(),
                Tables\Columns\TextColumn::make('team.name')
                    ->label('Équipe')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('client.name')
                    ->label('Client')
                    ->searchable()
                    ->toggleable(),
                Tables\Columns\TextColumn::make('role')
                    ->label('Rôle')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'admin' => 'danger',
                        'manager' => 'warning',
                        'editor' => 'info',
                        'viewer' => 'gray',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('status')
                    ->label('Statut')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'active' => 'success',
                        'pending' => 'warning',
                        'inactive' => 'gray',
                        'declined' => 'danger',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('joined_at')
                    ->label('Rejoint le')
                    ->dateTime('d/m/Y')
                    ->sortable(),
                Tables\Columns\TextColumn::make('last_activity_at')
                    ->label('Dernière activité')
                    ->dateTime('d/m/Y H:i')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->label('Statut')
                    ->options([
                        'pending' => 'En attente',
                        'active' => 'Actif',
                        'inactive' => 'Inactif',
                        'declined' => 'Refusé',
                    ]),
                Tables\Filters\SelectFilter::make('role')
                    ->label('Rôle')
                    ->options([
                        'admin' => 'Administrateur',
                        'manager' => 'Manager',
                        'editor' => 'Éditeur',
                        'viewer' => 'Lecteur',
                    ]),
                Tables\Filters\SelectFilter::make('team_id')
                    ->label('Équipe')
                    ->relationship('team', 'name'),
            ])
            ->actions([
                Action::make('activate')
                    ->label('Activer')
                    ->icon('heroicon-o-check')
                    ->color('success')
                    ->requiresConfirmation()
                    ->visible(fn ($record) => $record->status !== 'active')
                    ->action(fn ($record) => $record->update(['status' => 'active', 'joined_at' => now()])),
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

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTeamMembers::route('/'),
            'create' => Pages\CreateTeamMember::route('/create'),
            'edit' => Pages\EditTeamMember::route('/{record}/edit'),
        ];
    }
}
