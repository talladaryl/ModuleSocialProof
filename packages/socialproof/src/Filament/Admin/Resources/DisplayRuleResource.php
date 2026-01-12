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
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\KeyValue;
use Packages\SocialProof\Models\DisplayRule;
use Packages\SocialProof\Filament\Admin\Resources\DisplayRuleResource\Pages;
use UnitEnum;
use BackedEnum;

class DisplayRuleResource extends Resource
{
    protected static ?string $model = DisplayRule::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-funnel';
    protected static string|UnitEnum|null $navigationGroup = 'Templates & Règles';
    protected static ?int $navigationSort = 2;
    protected static ?string $navigationLabel = 'Règles d\'affichage';
    protected static ?string $modelLabel = 'Règle d\'affichage';
    protected static ?string $pluralModelLabel = 'Règles d\'affichage';

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Informations de la Règle')
                ->columns(2)
                ->schema([
                    Select::make('notification_id')
                        ->label('Notification')
                        ->relationship('notification', 'title')
                        ->searchable()
                        ->preload()
                        ->required(),
                    TextInput::make('name')
                        ->label('Nom')
                        ->required()
                        ->maxLength(255),
                    Select::make('trigger_type')
                        ->label('Type de déclencheur')
                        ->required()
                        ->options([
                            'page_load' => 'Chargement de page',
                            'scroll' => 'Scroll',
                            'time_delay' => 'Délai',
                            'exit_intent' => 'Intention de sortie',
                            'click' => 'Clic',
                            'hover' => 'Survol',
                            'form_submit' => 'Soumission formulaire',
                            'new_visitor' => 'Nouveau visiteur',
                            'returning_visitor' => 'Visiteur récurrent',
                        ]),
                    TextInput::make('priority')
                        ->label('Priorité')
                        ->numeric()
                        ->default(1),
                    Toggle::make('is_active')
                        ->label('Actif')
                        ->default(true),
                ]),

            Section::make('Configuration du Déclencheur')
                ->schema([
                    KeyValue::make('trigger_config')
                        ->label('Configuration')
                        ->columnSpanFull(),
                ]),

            Section::make('Ciblage')
                ->schema([
                    KeyValue::make('targeting_config')
                        ->label('Configuration de ciblage')
                        ->columnSpanFull(),
                ]),

            Section::make('Timing')
                ->schema([
                    KeyValue::make('timing_config')
                        ->label('Configuration de timing')
                        ->columnSpanFull(),
                ]),

            Section::make('Fréquence')
                ->schema([
                    KeyValue::make('frequency_config')
                        ->label('Configuration de fréquence')
                        ->columnSpanFull(),
                ]),

            Section::make('Conditions')
                ->schema([
                    KeyValue::make('conditions')
                        ->label('Conditions supplémentaires')
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
                Tables\Columns\TextColumn::make('notification.title')
                    ->label('Notification')
                    ->searchable()
                    ->limit(30),
                Tables\Columns\TextColumn::make('trigger_type')
                    ->label('Déclencheur')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'page_load' => 'gray',
                        'scroll' => 'info',
                        'time_delay' => 'warning',
                        'exit_intent' => 'danger',
                        'click' => 'success',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('priority')
                    ->label('Priorité')
                    ->sortable()
                    ->badge(),
                Tables\Columns\IconColumn::make('is_active')
                    ->label('Actif')
                    ->boolean(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Créé le')
                    ->dateTime('d/m/Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('trigger_type')
                    ->label('Déclencheur')
                    ->options([
                        'page_load' => 'Chargement de page',
                        'scroll' => 'Scroll',
                        'time_delay' => 'Délai',
                        'exit_intent' => 'Intention de sortie',
                        'click' => 'Clic',
                    ]),
                Tables\Filters\TernaryFilter::make('is_active')
                    ->label('Actif'),
            ])
            ->actions([
                Action::make('toggle')
                    ->label(fn ($record) => $record->is_active ? 'Désactiver' : 'Activer')
                    ->icon(fn ($record) => $record->is_active ? 'heroicon-o-pause' : 'heroicon-o-play')
                    ->color(fn ($record) => $record->is_active ? 'warning' : 'success')
                    ->action(fn ($record) => $record->update(['is_active' => !$record->is_active])),
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('priority', 'desc');
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListDisplayRules::route('/'),
            'create' => Pages\CreateDisplayRule::route('/create'),
            'edit' => Pages\EditDisplayRule::route('/{record}/edit'),
        ];
    }
}
