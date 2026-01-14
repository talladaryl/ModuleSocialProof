<?php

namespace Packages\SocialProof\Filament\Client\Resources;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Packages\SocialProof\Models\DisplayRule;
use Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource\Pages;

class ClientDisplayRuleResource extends Resource
{
    protected static ?string $model = DisplayRule::class;
    protected static ?string $navigationIcon = 'heroicon-o-adjustments-horizontal';
    protected static ?string $navigationLabel = 'Règles d\'affichage';
    protected static ?string $navigationGroup = 'Social Proof';
    protected static ?int $navigationSort = 6;

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->where('client_id', auth('client')->user()->client_id);
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Informations de base')
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->label('Nom de la règle')
                            ->required()
                            ->maxLength(255),

                        Forms\Components\Textarea::make('description')
                            ->label('Description')
                            ->rows(2)
                            ->maxLength(500),

                        Forms\Components\Select::make('widget_id')
                            ->label('Widget')
                            ->relationship('widget', 'name', fn($query) => 
                                $query->where('client_id', auth('client')->user()->client_id)
                            )
                            ->searchable()
                            ->preload(),

                        Forms\Components\Toggle::make('is_active')
                            ->label('Actif')
                            ->default(true),
                    ])->columns(2),

                Forms\Components\Section::make('Conditions d\'affichage')
                    ->schema([
                        Forms\Components\Select::make('rule_type')
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

                        Forms\Components\Select::make('operator')
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

                        Forms\Components\Textarea::make('value')
                            ->label('Valeur')
                            ->required()
                            ->rows(2)
                            ->helperText('Pour les listes, séparez les valeurs par des virgules'),
                    ])->columns(2),

                Forms\Components\Section::make('Paramètres avancés')
                    ->schema([
                        Forms\Components\TextInput::make('priority')
                            ->label('Priorité')
                            ->numeric()
                            ->default(0)
                            ->helperText('Plus le nombre est élevé, plus la priorité est haute'),

                        Forms\Components\KeyValue::make('conditions')
                            ->label('Conditions supplémentaires')
                            ->keyLabel('Condition')
                            ->valueLabel('Valeur')
                            ->reorderable(),
                    ])->columns(1),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('rule_id')
                    ->label('ID')
                    ->sortable(),

                Tables\Columns\TextColumn::make('name')
                    ->label('Nom')
                    ->searchable()
                    ->limit(30),

                Tables\Columns\TextColumn::make('widget.name')
                    ->label('Widget')
                    ->sortable()
                    ->searchable(),

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

                Tables\Columns\TextColumn::make('operator')
                    ->label('Opérateur')
                    ->badge(),

                Tables\Columns\TextColumn::make('priority')
                    ->label('Priorité')
                    ->sortable()
                    ->badge()
                    ->color('info'),

                Tables\Columns\IconColumn::make('is_active')
                    ->label('Actif')
                    ->boolean()
                    ->sortable(),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Créé le')
                    ->dateTime('d/m/Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('rule_type')
                    ->label('Type')
                    ->options([
                        'url_match' => 'Correspondance URL',
                        'device' => 'Type d\'appareil',
                        'country' => 'Pays',
                        'time' => 'Plage horaire',
                        'visitor_type' => 'Type de visiteur',
                        'custom' => 'Personnalisé',
                    ]),

                Tables\Filters\TernaryFilter::make('is_active')
                    ->label('Actif'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
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
