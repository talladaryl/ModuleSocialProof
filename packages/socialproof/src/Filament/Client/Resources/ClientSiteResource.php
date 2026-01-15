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
use Filament\Forms\Components\KeyValue;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Models\Site;
use Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages;
use UnitEnum;
use BackedEnum;

class ClientSiteResource extends Resource
{
    protected static ?string $model = Site::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-globe-alt';
    protected static string|UnitEnum|null $navigationGroup = 'Social Proof';
    protected static ?int $navigationSort = 1;
    protected static ?string $navigationLabel = 'Sites';

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->where('client_id', Auth::guard('client')->user()->client_id);
    }

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Informations du Site')
                ->columns(2)
                ->schema([
                    TextInput::make('name')
                        ->label('Nom du site')
                        ->required()
                        ->maxLength(255),
                    
                    TextInput::make('domain')
                        ->label('Domaine')
                        ->required()
                        ->url()
                        ->placeholder('https://monsite.com')
                        ->maxLength(255),

                    Textarea::make('description')
                        ->label('Description')
                        ->columnSpanFull()
                        ->rows(3),
                ]),

            Section::make('Configuration & Statut')
                ->columns(2)
                ->schema([
                    Select::make('status')
                        ->label('Statut')
                        ->options([
                            'active' => 'Actif',
                            'inactive' => 'Inactif',
                            'pending' => 'En attente',
                        ])
                        ->default('active')
                        ->required(),

                    // Champ informatif si vous avez un décompte de widgets
                    TextInput::make('widgets_count')
                        ->label('Nombre de Widgets')
                        ->numeric()
                        ->disabled()
                        ->visibleOn('edit'),
                ]),

            Section::make('Configuration Avancée')
                ->schema([
                    KeyValue::make('settings')
                        ->label('Paramètres JSON')
                        ->keyLabel('Clé')
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
                
                Tables\Columns\TextColumn::make('domain')
                    ->label('Domaine')
                    ->searchable()
                    ->url(fn ($record) => $record->domain)
                    ->openUrlInNewTab(),

                Tables\Columns\TextColumn::make('status')
                    ->badge()
                    ->color(fn ($state) => match ($state) {
                        'active' => 'success',
                        'pending' => 'warning',
                        'inactive' => 'danger',
                        default => 'gray',
                    }),

                Tables\Columns\TextColumn::make('widgets_count')
                    ->label('Widgets')
                    ->counts('widgets')
                    ->sortable(),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Créé le')
                    ->dateTime('d/m/Y')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->options([
                        'active' => 'Actif',
                        'inactive' => 'Inactif',
                        'pending' => 'En attente',
                    ]),
            ])
            ->actions([
                // Utilisation de Action::make('view') comme dans ton modèle Campaign
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

    public static function getRelations(): array
    {
        return [];
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
        return Auth::guard('client')->user()?->canCreateSites() ?? false;
    }
}