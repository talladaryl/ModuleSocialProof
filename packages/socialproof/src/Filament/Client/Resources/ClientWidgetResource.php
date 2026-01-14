<?php

namespace Packages\SocialProof\Filament\Client\Resources;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Models\Widget;
use Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages;

class ClientWidgetResource extends Resource
{
    protected static ?string $model = Widget::class;
    protected static ?string $navigationIcon = 'heroicon-o-squares-2x2';
    protected static ?string $navigationLabel = 'Widgets';
    protected static ?string $navigationGroup = 'Social Proof';
    protected static ?int $navigationSort = 2;

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->where('client_id', Auth::guard('client')->user()->client_id)
            ->with(['site', 'template', 'campaign']);
    }

    public static function form(Form $form): Form
    {
        $clientId = Auth::guard('client')->user()->client_id;
        
        return $form
            ->schema([
                Forms\Components\Section::make('Configuration du Widget')
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->label('Nom du widget')
                            ->required()
                            ->maxLength(255),
                            
                        Forms\Components\Select::make('site_id')
                            ->label('Site')
                            ->relationship('site', 'name', fn (Builder $query) => $query->where('client_id', $clientId))
                            ->required()
                            ->searchable()
                            ->preload(),
                            
                        Forms\Components\Select::make('template_id')
                            ->label('Template')
                            ->relationship('template', 'name')
                            ->required()
                            ->searchable()
                            ->preload(),
                            
                        Forms\Components\Select::make('campaign_id')
                            ->label('Campagne')
                            ->relationship('campaign', 'name', fn (Builder $query) => $query->where('client_id', $clientId))
                            ->searchable()
                            ->preload(),
                            
                        Forms\Components\Select::make('type')
                            ->label('Type')
                            ->options([
                                'notification' => 'Notification',
                                'counter' => 'Compteur',
                                'testimonial' => 'Témoignage',
                                'recent_activity' => 'Activité récente',
                            ])
                            ->required(),
                            
                        Forms\Components\Select::make('status')
                            ->label('Statut')
                            ->options([
                                'active' => 'Actif',
                                'inactive' => 'Inactif',
                                'draft' => 'Brouillon',
                            ])
                            ->default('draft')
                            ->required(),
                    ]),
                    
                Forms\Components\Section::make('Apparence')
                    ->schema([
                        Forms\Components\Select::make('position')
                            ->label('Position')
                            ->options([
                                'bottom-left' => 'Bas gauche',
                                'bottom-right' => 'Bas droite',
                                'top-left' => 'Haut gauche',
                                'top-right' => 'Haut droite',
                                'center' => 'Centre',
                            ])
                            ->default('bottom-left')
                            ->required(),
                            
                        Forms\Components\ColorPicker::make('settings.primary_color')
                            ->label('Couleur principale')
                            ->default('#3b82f6'),
                            
                        Forms\Components\ColorPicker::make('settings.text_color')
                            ->label('Couleur du texte')
                            ->default('#ffffff'),
                            
                        Forms\Components\Toggle::make('settings.show_close_button')
                            ->label('Bouton fermer')
                            ->default(true),
                            
                        Forms\Components\Toggle::make('settings.auto_hide')
                            ->label('Masquage automatique')
                            ->default(true),
                            
                        Forms\Components\TextInput::make('settings.display_duration')
                            ->label('Durée d\'affichage (secondes)')
                            ->numeric()
                            ->default(5)
                            ->minValue(1)
                            ->maxValue(60),
                    ]),
                    
                Forms\Components\Section::make('Règles d\'affichage')
                    ->schema([
                        Forms\Components\TextInput::make('settings.delay')
                            ->label('Délai avant affichage (secondes)')
                            ->numeric()
                            ->default(3)
                            ->minValue(0),
                            
                        Forms\Components\TextInput::make('settings.frequency')
                            ->label('Fréquence (secondes entre affichages)')
                            ->numeric()
                            ->default(30)
                            ->minValue(5),
                            
                        Forms\Components\Toggle::make('settings.mobile_enabled')
                            ->label('Actif sur mobile')
                            ->default(true),
                            
                        Forms\Components\Toggle::make('settings.desktop_enabled')
                            ->label('Actif sur desktop')
                            ->default(true),
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
                    
                Tables\Columns\TextColumn::make('site.name')
                    ->label('Site')
                    ->searchable()
                    ->sortable(),
                    
                Tables\Columns\TextColumn::make('type')
                    ->label('Type')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'notification' => 'info',
                        'counter' => 'success',
                        'testimonial' => 'warning',
                        'recent_activity' => 'primary',
                        default => 'gray',
                    }),
                    
                Tables\Columns\BadgeColumn::make('status')
                    ->label('Statut')
                    ->colors([
                        'success' => 'active',
                        'warning' => 'draft',
                        'danger' => 'inactive',
                    ]),
                    
                Tables\Columns\TextColumn::make('position')
                    ->label('Position')
                    ->formatStateUsing(fn (string $state): string => match ($state) {
                        'bottom-left' => 'Bas gauche',
                        'bottom-right' => 'Bas droite',
                        'top-left' => 'Haut gauche',
                        'top-right' => 'Haut droite',
                        'center' => 'Centre',
                        default => $state,
                    }),
                    
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
                        'draft' => 'Brouillon',
                    ]),
                    
                Tables\Filters\SelectFilter::make('type')
                    ->label('Type')
                    ->options([
                        'notification' => 'Notification',
                        'counter' => 'Compteur',
                        'testimonial' => 'Témoignage',
                        'recent_activity' => 'Activité récente',
                    ]),
                    
                Tables\Filters\SelectFilter::make('site_id')
                    ->label('Site')
                    ->relationship('site', 'name'),
            ])
            ->actions([
                Tables\Actions\Action::make('preview')
                    ->label('Aperçu')
                    ->icon('heroicon-o-eye')
                    ->url(fn ($record) => route('socialproof.widget.preview', $record))
                    ->openUrlInNewTab(),
                    
                Tables\Actions\Action::make('copy_code')
                    ->label('Code d\'intégration')
                    ->icon('heroicon-o-code-bracket')
                    ->modalContent(fn ($record) => view('socialproof::client.widget-code', compact('record')))
                    ->modalSubmitAction(false)
                    ->modalCancelActionLabel('Fermer'),
                    
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
            'index' => Pages\ListClientWidgets::route('/'),
            'create' => Pages\CreateClientWidget::route('/create'),
            'view' => Pages\ViewClientWidget::route('/{record}'),
            'edit' => Pages\EditClientWidget::route('/{record}/edit'),
        ];
    }

    public static function canCreate(): bool
    {
        return Auth::guard('client')->user()->canCreateWidgets();
    }
}