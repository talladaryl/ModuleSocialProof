<?php

namespace Packages\SocialProof\Filament\Resources;

use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Schemas\Schema;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\DateTimePicker;
use Packages\SocialProof\Models\Team;
use Packages\SocialProof\Models\Plan;
use Filament\Tables\Actions\BulkActionGroup;
use Filament\Tables\Actions\DeleteBulkAction;
use Packages\SocialProof\Filament\Resources\TeamResource\Pages;
use BackedEnum;
use UnitEnum;

class TeamResource extends Resource
{
    protected static ?string $model = Team::class;

    protected static string | BackedEnum | null $navigationIcon = 'heroicon-o-user-group';
    protected static string | UnitEnum | null $navigationGroup = 'SaaS Management';
    protected static ?int $navigationSort = 1;

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([

            Section::make('Team Information')
                ->columns(2)
                ->schema([
                    TextInput::make('name')->required()->maxLength(255),
                    TextInput::make('slug')->required()->unique(ignoreRecord: true)->maxLength(255),
                    Textarea::make('description')->columnSpanFull(),
                ]),

            Section::make('Subscription')
                ->columns(3)
                ->schema([
                    Select::make('plan_id')
                        ->relationship('plan', 'name')
                        ->searchable()
                        ->preload(),

                    DateTimePicker::make('subscription_ends_at'),
                    DateTimePicker::make('trial_ends_at'),
                ]),

            Section::make('Settings')
                ->columns(2)
                ->schema([
                    Toggle::make('is_active')->default(true),
                    KeyValue::make('settings')->columnSpanFull(),
                ]),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('slug')->searchable()->sortable(),

                Tables\Columns\TextColumn::make('plan.name')
                    ->badge()
                    ->color(fn (?string $state) => match ($state) {
                        'Free' => 'gray',
                        'Starter' => 'success',
                        'Professional' => 'warning',
                        'Enterprise' => 'danger',
                        default => 'gray',
                    }),

                Tables\Columns\TextColumn::make('members_count')->counts('members')->badge(),
                Tables\Columns\TextColumn::make('sites_count')->counts('sites')->badge(),
                Tables\Columns\IconColumn::make('is_active')->boolean(),
                Tables\Columns\TextColumn::make('subscription_ends_at')->dateTime()->sortable(),
                Tables\Columns\TextColumn::make('created_at')->dateTime()->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('plan_id')->relationship('plan', 'name'),
                Tables\Filters\TernaryFilter::make('is_active'),
            ])
            ->actions([
                    Action::make('view')
                        ->label('Voir')
                        ->icon('heroicon-o-eye')
                        ->url(fn ($record) => static::getUrl('view', ['record' => $record]))
                        ->openUrlInNewTab(),

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
            'index' => Pages\ListTeams::route('/'),
            'create' => Pages\CreateTeam::route('/create'),
            'view' => Pages\ViewTeam::route('/{record}'),
            'edit' => Pages\EditTeam::route('/{record}/edit'),
        ];
    }
}
