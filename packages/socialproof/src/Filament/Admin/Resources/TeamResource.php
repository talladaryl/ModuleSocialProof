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
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\DateTimePicker;
use Packages\SocialProof\Models\Team;
use Packages\SocialProof\Filament\Admin\Resources\TeamResource\Pages;
use Packages\SocialProof\Filament\Admin\Resources\TeamResource\RelationManagers;
use UnitEnum;
use BackedEnum;

class TeamResource extends Resource
{
    protected static ?string $model = Team::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-user-group';
    protected static string|UnitEnum|null $navigationGroup = 'Sites & Teams';
    protected static ?int $navigationSort = 2;
    protected static ?string $navigationLabel = 'Teams';

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Informations')
                ->columns(2)
                ->schema([
                    Select::make('client_id')
                        ->label('Client')
                        ->relationship('client', 'name')
                        ->searchable()
                        ->preload()
                        ->required(),
                    TextInput::make('name')->label('Nom')->required(),
                    TextInput::make('slug')->required()->unique(ignoreRecord: true),
                    Textarea::make('description')->columnSpanFull(),
                ]),
            Section::make('Abonnement')
                ->columns(3)
                ->schema([
                    Select::make('plan_id')
                        ->label('Plan')
                        ->relationship('plan', 'name')
                        ->searchable()
                        ->preload(),
                    DateTimePicker::make('subscription_ends_at')->label('Fin abonnement'),
                    DateTimePicker::make('trial_ends_at')->label('Fin essai'),
                ]),
            Section::make('Paramètres')
                ->columns(2)
                ->schema([
                    Toggle::make('is_active')->label('Actif')->default(true),
                    KeyValue::make('settings')->label('Paramètres')->columnSpanFull(),
                ]),
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('client.name')
                    ->label('Client')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('name')->label('Nom')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('slug')->searchable(),
                Tables\Columns\TextColumn::make('plan.name')
                    ->label('Plan')
                    ->badge()
                    ->color(fn (?string $state) => match ($state) {
                        'Free' => 'gray',
                        'Starter' => 'info',
                        'Professional' => 'warning',
                        'Enterprise' => 'success',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('members_count')
                    ->label('Membres')
                    ->counts('members')
                    ->badge()
                    ->color('info'),
                Tables\Columns\TextColumn::make('sites_count')
                    ->label('Sites')
                    ->counts('sites')
                    ->badge()
                    ->color('success'),
                Tables\Columns\IconColumn::make('is_active')->label('Actif')->boolean(),
                Tables\Columns\TextColumn::make('subscription_ends_at')
                    ->label('Expire le')
                    ->dateTime('d/m/Y')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('client_id')
                    ->label('Client')
                    ->relationship('client', 'name'),
                Tables\Filters\SelectFilter::make('plan_id')
                    ->label('Plan')
                    ->relationship('plan', 'name'),
                Tables\Filters\TernaryFilter::make('is_active')->label('Actif'),
            ])
            ->actions([
                Action::make('view')
                    ->label('Voir')
                    ->icon('heroicon-o-eye')
                    ->url(fn ($record) => static::getUrl('view', ['record' => $record])),
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([
                BulkActionGroup::make([DeleteBulkAction::make()]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            RelationManagers\MembersRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTeams::route('/'),
            'create' => Pages\CreateTeam::route('/create'),
            'view' => Pages\ViewTeam::route('/{record}'),
            'edit' => Pages\EditTeam::route('/{record}/edit'),
        ];
    }
}
