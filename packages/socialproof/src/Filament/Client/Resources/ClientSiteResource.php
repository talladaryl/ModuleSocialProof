<?php

namespace Packages\SocialProof\Filament\Client\Resources;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Models\Site;
use Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages;

class ClientSiteResource extends Resource
{
    protected static ?string $model = Site::class;
    protected static ?string $navigationIcon = 'heroicon-o-globe-alt';
    protected static ?string $navigationLabel = 'Sites';
    protected static ?string $navigationGroup = 'Social Proof';
    protected static ?int $navigationSort = 1;

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->where('client_id', Auth::guard('client')->user()->client_id);
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Informations du Site')
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->label('Nom du site')
                            ->required()
                            ->maxLength(255),
                            
                        Forms\Components\TextInput::make('domain')
                            ->label('Domaine')
                            ->required()
                            ->url()
                            ->maxLength(255)
                            ->helperText('Ex: https://monsite.com'),
                            
                        Forms\Components\Textarea::make('description')
                            ->label('Description')
                            ->maxLength(500)
                            ->rows(3),
                            
                        Forms\Components\Select::make('status')
                            ->label('Statut')
                            ->options([
                                'active' => 'Actif',
                                'inactive' => 'Inactif',
                                'pending' => 'En attente',
                            ])
                            ->default('active')
                            ->required(),
                    ]),
                    
                Forms\Components\Section::make('Configuration')
                    ->schema([
                        Forms\Components\KeyValue::make('settings')
                            ->label('Paramètres')
                            ->keyLabel('Clé')
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
                    
                Tables\Columns\TextColumn::make('domain')
                    ->label('Domaine')
                    ->searchable()
                    ->url(fn ($record) => $record->domain)
                    ->openUrlInNewTab(),
                    
                Tables\Columns\BadgeColumn::make('status')
                    ->label('Statut')
                    ->colors([
                        'success' => 'active',
                        'warning' => 'pending',
                        'danger' => 'inactive',
                    ]),
                    
                Tables\Columns\TextColumn::make('widgets_count')
                    ->label('Widgets')
                    ->counts('widgets')
                    ->sortable(),
                    
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Créé le')
                    ->dateTime('d/m/Y H:i')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->label('Statut')
                    ->options([
                        'active' => 'Actif',
                        'inactive' => 'Inactif',
                        'pending' => 'En attente',
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
            'index' => Pages\ListClientSites::route('/'),
            'create' => Pages\CreateClientSite::route('/create'),
            'view' => Pages\ViewClientSite::route('/{record}'),
            'edit' => Pages\EditClientSite::route('/{record}/edit'),
        ];
    }

    public static function canCreate(): bool
    {
        return Auth::guard('client')->user()->canCreateSites();
    }
}