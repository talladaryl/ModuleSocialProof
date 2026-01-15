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
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\KeyValue;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Models\DisplayRule;
use Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource\Pages;
use UnitEnum;
use BackedEnum;

class ClientDisplayRuleResource extends Resource
{
    protected static ?string $model = DisplayRule::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-adjustments-horizontal';
    protected static string|UnitEnum|null $navigationGroup = 'Social Proof';
    protected static ?int $navigationSort = 6;
    protected static ?string $navigationLabel = 'Règles d\'affichage';

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->where('client_id', Auth::guard('client')->user()->client_id);
    }

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Informations de base')
                ->columns(2)
                ->schema([
                    TextInput::make('name')
                        ->label('Nom de la règle')
                        ->required()
                        ->maxLength(255),

                    Select::make('widget_id')
                        ->label('Widget associé')
                        ->relationship('widget', 'name', fn($query) => 
                            $query->where('client_id', Auth::guard('client')->user()->client_id)
                        )
                        ->searchable()
                        ->preload()
                        ->required(),

                    Textarea::make('description')
                        ->label('Description')
                        ->columnSpanFull()
                        ->rows(2)
                        ->maxLength(500),
                ]),

            Section::make('Conditions d\'affichage')
                ->columns(2)
                ->schema([
                    Select::make('rule_type')
                        ->label('Type de règle')
                        ->options([
                            'url_match' => 'Correspondance URL',
                            'device' => 'Type d\'appareil',
                            'country' => 'Pays',
                            'time' => 'Plage horaire',
                            'visitor_type' => 'Type de visiteur',
                            'custom' => 'Personnalisé',
                        ])
                        ->required()
                        ->reactive(),

                    Select::make('operator')
                        ->label('Opérateur')
                        ->options([
                            'equals' => 'Égal à',
                            'not_equals' => 'Différent de',
                            'contains' => 'Contient',
                            'not_contains' => 'Ne contient pas',
                            'starts_with' => 'Commence par',
                            'ends_with' => 'Se termine par',
                            'in' => 'Dans la liste',
                            'not_in' => 'Pas dans la liste',
                        ])
                        ->required(),

                    Textarea::make('value')
                        ->label('Valeur')
                        ->columnSpanFull()
                        ->required()
                        ->rows(2)
                        ->helperText('Pour les listes, séparez les valeurs par des virgules'),
                ]),

            Section::make('Paramètres & Statut')
                ->columns(2)
                ->schema([
                    TextInput::make('priority')
                        ->label('Priorité')
                        ->numeric()
                        ->default(0)
                        ->helperText('Nombre élevé = priorité haute'),

                    Toggle::make('is_active')
                        ->label('Règle active')
                        ->default(true)
                        ->inline(false),

                    KeyValue::make('conditions')
                        ->label('Conditions JSON supplémentaires')
                        ->keyLabel('Condition')
                        ->valueLabel('Valeur')
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

                Tables\Columns\TextColumn::make('widget.name')
                    ->label('Widget')
                    ->sortable(),

                Tables\Columns\TextColumn::make('rule_type')
                    ->label('Type')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'url_match' => 'info',
                        'device' => 'warning',
                        'country' => 'success',
                        'time' => 'primary',
                        default => 'gray',
                    }),

                Tables\Columns\TextColumn::make('priority')
                    ->label('Priorité')
                    ->sortable()
                    ->badge()
                    ->color('gray'),

                Tables\Columns\IconColumn::make('is_active')
                    ->label('Statut')
                    ->boolean()
                    ->sortable(),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Créé le')
                    ->dateTime('d/m/Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('rule_type'),
                Tables\Filters\TernaryFilter::make('is_active')->label('Actif'),
            ])
            ->actions([
                // Ajout de l'action View pour la cohérence avec CampaignResource
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
            ->defaultSort('priority', 'desc');
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListClientDisplayRules::route('/'),
            'create' => Pages\CreateClientDisplayRule::route('/create'),
            'edit' => Pages\EditClientDisplayRule::route('/{record}/edit'),
        ];
    }
}