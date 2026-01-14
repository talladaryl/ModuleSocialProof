<?php

namespace Packages\SocialProof\Filament\Client\Resources;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Models\Campaign;
use Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages;

class ClientCampaignResource extends Resource
{
    protected static ?string $model = Campaign::class;
    protected static ?string $navigationIcon = 'heroicon-o-megaphone';
    protected static ?string $navigationLabel = 'Campagnes';
    protected static ?string $navigationGroup = 'Social Proof';
    protected static ?int $navigationSort = 4;

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->where('client_id', Auth::guard('client')->user()->client_id);
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Informations de la campagne')
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->label('Nom de la campagne')
                            ->required()
                            ->maxLength(255),
                            
                        Forms\Components\Textarea::make('description')
                            ->label('Description')
                            ->maxLength(500)
                            ->rows(3),
                            
                        Forms\Components\Select::make('type')
                            ->label('Type de campagne')
                            ->options([
                                'purchase' => 'Achats',
                                'signup' => 'Inscriptions',
                                'download' => 'Téléchargements',
                                'view' => 'Vues',
                                'custom' => 'Personnalisé',
                            ])
                            ->required(),
                            
                        Forms\Components\Select::make('status')
                            ->label('Statut')
                            ->options([
                                'active' => 'Active',
                                'inactive' => 'Inactive',
                                'draft' => 'Brouillon',
                                'archived' => 'Archivée',
                            ])
                            ->default('draft')
                            ->required(),
                    ]),
                    
                Forms\Components\Section::make('Période')
                    ->schema([
                        Forms\Components\DateTimePicker::make('start_date')
                            ->label('Date de début')
                            ->default(now()),
                            
                        Forms\Components\DateTimePicker::make('end_date')
                            ->label('Date de fin')
                            ->after('start_date'),
                    ])
                    ->columns(2),
                    
                Forms\Components\Section::make('Configuration')
                    ->schema([
                        Forms\Components\KeyValue::make('settings')
                            ->label('Paramètres')
                            ->keyLabel('Clé')
                            ->valueLabel('Valeur')
                            ->default([]),
                            
                        Forms\Components\KeyValue::make('tracking_params')
                            ->label('Paramètres de tracking')
                            ->keyLabel('Paramètre')
                            ->valueLabel('Valeur')
                            ->default([]),
                    ])
                    ->collapsible(),
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
                    
                Tables\Columns\TextColumn::make('type')
                    ->label('Type')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'purchase' => 'success',
                        'signup' => 'info',
                        'download' => 'warning',
                        'view' => 'primary',
                        'custom' => 'gray',
                        default => 'gray',
                    }),
                    
                Tables\Columns\BadgeColumn::make('status')
                    ->label('Statut')
                    ->colors([
                        'success' => 'active',
                        'warning' => 'draft',
                        'danger' => 'inactive',
                        'gray' => 'archived',
                    ]),
                    
                Tables\Columns\TextColumn::make('widgets_count')
                    ->label('Widgets')
                    ->counts('widgets')
                    ->sortable(),
                    
                Tables\Columns\TextColumn::make('start_date')
                    ->label('Début')
                    ->dateTime('d/m/Y H:i')
                    ->sortable(),
                    
                Tables\Columns\TextColumn::make('end_date')
                    ->label('Fin')
                    ->dateTime('d/m/Y H:i')
                    ->sortable(),
                    
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Créée le')
                    ->dateTime('d/m/Y H:i')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->label('Statut')
                    ->options([
                        'active' => 'Active',
                        'inactive' => 'Inactive',
                        'draft' => 'Brouillon',
                        'archived' => 'Archivée',
                    ]),
                    
                Tables\Filters\SelectFilter::make('type')
                    ->label('Type')
                    ->options([
                        'purchase' => 'Achats',
                        'signup' => 'Inscriptions',
                        'download' => 'Téléchargements',
                        'view' => 'Vues',
                        'custom' => 'Personnalisé',
                    ]),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
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
            'index' => Pages\ListClientCampaigns::route('/'),
            'create' => Pages\CreateClientCampaign::route('/create'),
            'view' => Pages\ViewClientCampaign::route('/{record}'),
            'edit' => Pages\EditClientCampaign::route('/{record}/edit'),
        ];
    }
}