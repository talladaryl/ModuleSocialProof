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
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\KeyValue;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Models\Campaign;
use Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages;
use UnitEnum;
use BackedEnum;

class ClientCampaignResource extends Resource
{
    protected static ?string $model = Campaign::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-megaphone';
    protected static string|UnitEnum|null $navigationGroup = 'Social Proof';
    protected static ?int $navigationSort = 4;
    protected static ?string $navigationLabel = 'Campagnes';

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->where('client_id', Auth::guard('client')->user()->client_id);
    }

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Informations de la campagne')
                ->columns(2)
                ->schema([
                    TextInput::make('name')
                        ->label('Nom de la campagne')
                        ->required()
                        ->maxLength(255),
                    
                    Select::make('status')
                        ->label('Statut')
                        ->options([
                            'active' => 'Active',
                            'inactive' => 'Inactive',
                            'draft' => 'Brouillon',
                            'archived' => 'Archivée',
                        ])
                        ->default('draft')
                        ->required(),

                    Textarea::make('description')
                        ->label('Description')
                        ->columnSpanFull()
                        ->rows(3)
                        ->maxLength(500),
                ]),
                
            Section::make('Configuration du Type')
                ->columns(2)
                ->schema([
                    Select::make('type')
                        ->label('Type de campagne')
                        ->options([
                            'purchase' => 'Achats',
                            'signup' => 'Inscriptions',
                            'download' => 'Téléchargements',
                            'view' => 'Vues',
                            'custom' => 'Personnalisé',
                        ])
                        ->required(),

                    TextInput::make('widgets_count')
                        ->label('Widgets liés')
                        ->numeric()
                        ->disabled()
                        ->visibleOn('edit'),
                ]),

            Section::make('Période de diffusion')
                ->columns(2)
                ->schema([
                    DateTimePicker::make('start_date')
                        ->label('Date de début')
                        ->default(now()),
                        
                    DateTimePicker::make('end_date')
                        ->label('Date de fin')
                        ->after('start_date'),
                ]),
                
            Section::make('Paramètres avancés')
                ->schema([
                    KeyValue::make('settings')
                        ->label('Configuration JSON')
                        ->keyLabel('Clé')
                        ->valueLabel('Valeur'),
                        
                    KeyValue::make('tracking_params')
                        ->label('Paramètres de tracking')
                        ->keyLabel('Paramètre')
                        ->valueLabel('Valeur'),
                ])->collapsible(),
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
                    
                Tables\Columns\TextColumn::make('type')
                    ->label('Type')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'purchase' => 'success',
                        'signup' => 'info',
                        'download' => 'warning',
                        'view' => 'primary',
                        default => 'gray',
                    }),
                    
                Tables\Columns\TextColumn::make('status')
                    ->label('Statut')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'active' => 'success',
                        'draft' => 'warning',
                        'inactive' => 'danger',
                        'archived' => 'gray',
                        default => 'gray',
                    }),
                    
                Tables\Columns\TextColumn::make('widgets_count')
                    ->label('Widgets')
                    ->counts('widgets')
                    ->sortable(),
                    
                Tables\Columns\TextColumn::make('start_date')
                    ->label('Début')
                    ->dateTime('d/m/Y')
                    ->sortable(),
                    
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Créée le')
                    ->dateTime('d/m/Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->options([
                        'active' => 'Active',
                        'inactive' => 'Inactive',
                        'draft' => 'Brouillon',
                        'archived' => 'Archivée',
                    ]),
                Tables\Filters\SelectFilter::make('type')
                    ->options([
                        'purchase' => 'Achats',
                        'signup' => 'Inscriptions',
                        'download' => 'Téléchargements',
                        'view' => 'Vues',
                        'custom' => 'Personnalisé',
                    ]),
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
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
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