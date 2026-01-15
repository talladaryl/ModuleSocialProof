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
use Filament\Forms\Components\ColorPicker;
use Filament\Forms\Components\KeyValue;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Models\Widget;
use Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages;
use UnitEnum;
use BackedEnum;

class ClientWidgetResource extends Resource
{
    protected static ?string $model = Widget::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-squares-2x2';
    protected static string|UnitEnum|null $navigationGroup = 'Social Proof';
    protected static ?int $navigationSort = 2;
    protected static ?string $navigationLabel = 'Widgets';

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->where('client_id', Auth::guard('client')->user()->client_id);
    }

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Informations du Widget')
                ->columns(2)
                ->schema([
                    TextInput::make('name')
                        ->label('Nom du widget')
                        ->required()
                        ->maxLength(255),

                    Select::make('site_id')
                        ->label('Site')
                        ->relationship('site', 'name', fn($query) => 
                            $query->where('client_id', Auth::guard('client')->user()->client_id)
                        )
                        ->required()
                        ->searchable()
                        ->preload(),

                    Select::make('campaign_id')
                        ->label('Campagne')
                        ->relationship('campaign', 'name', fn($query) => 
                            $query->where('client_id', Auth::guard('client')->user()->client_id)
                        )
                        ->searchable()
                        ->preload(),

                    Select::make('template_id')
                        ->label('Template')
                        ->relationship('template', 'name', fn($query) => 
                            $query->where(function($q) {
                                $q->where('client_id', Auth::guard('client')->user()->client_id)
                                  ->orWhere('is_global', true);
                            })
                        )
                        ->searchable()
                        ->preload(),

                    Textarea::make('description')
                        ->label('Description')
                        ->columnSpanFull()
                        ->rows(2)
                        ->maxLength(500),
                ]),

            Section::make('Configuration')
                ->columns(2)
                ->schema([
                    Select::make('type')
                        ->label('Type de widget')
                        ->options([
                            'notification' => 'Notification',
                            'popup' => 'Popup',
                            'banner' => 'Bannière',
                            'toast' => 'Toast',
                            'counter' => 'Compteur',
                        ])
                        ->required()
                        ->default('notification'),

                    Select::make('position')
                        ->label('Position')
                        ->options([
                            'bottom-left' => 'Bas gauche',
                            'bottom-right' => 'Bas droite',
                            'top-left' => 'Haut gauche',
                            'top-right' => 'Haut droite',
                        ])
                        ->default('bottom-left'),

                    Select::make('status')
                        ->label('Statut')
                        ->options([
                            'active' => 'Actif',
                            'inactive' => 'Inactif',
                            'draft' => 'Brouillon',
                        ])
                        ->default('draft')
                        ->required(),

                    TextInput::make('display_duration')
                        ->label('Durée d\'affichage (ms)')
                        ->numeric()
                        ->default(5000),

                    TextInput::make('delay')
                        ->label('Délai avant affichage (ms)')
                        ->numeric()
                        ->default(3000),

                    TextInput::make('frequency')
                        ->label('Fréquence (secondes)')
                        ->numeric()
                        ->default(30),
                ]),

            Section::make('Apparence')
                ->columns(3)
                ->schema([
                    ColorPicker::make('background_color')
                        ->label('Couleur de fond')
                        ->default('#ffffff'),

                    ColorPicker::make('text_color')
                        ->label('Couleur du texte')
                        ->default('#333333'),

                    ColorPicker::make('accent_color')
                        ->label('Couleur d\'accent')
                        ->default('#3b82f6'),

                    Toggle::make('show_close_button')
                        ->label('Bouton fermer')
                        ->default(true),

                    Toggle::make('show_powered_by')
                        ->label('Afficher "Powered by"')
                        ->default(true),

                    Toggle::make('is_active')
                        ->label('Widget actif')
                        ->default(true),
                ]),

            Section::make('Paramètres avancés')
                ->collapsible()
                ->schema([
                    KeyValue::make('settings')
                        ->label('Configuration JSON')
                        ->keyLabel('Clé')
                        ->valueLabel('Valeur'),

                    KeyValue::make('targeting')
                        ->label('Ciblage')
                        ->keyLabel('Règle')
                        ->valueLabel('Valeur'),
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

                Tables\Columns\TextColumn::make('site.name')
                    ->label('Site')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('type')
                    ->label('Type')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'notification' => 'info',
                        'popup' => 'warning',
                        'banner' => 'success',
                        'toast' => 'primary',
                        'counter' => 'gray',
                        default => 'gray',
                    }),

                Tables\Columns\TextColumn::make('status')
                    ->label('Statut')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'active' => 'success',
                        'inactive' => 'danger',
                        'draft' => 'warning',
                        default => 'gray',
                    }),

                Tables\Columns\IconColumn::make('is_active')
                    ->label('Actif')
                    ->boolean(),

                Tables\Columns\TextColumn::make('views_count')
                    ->label('Vues')
                    ->numeric()
                    ->sortable()
                    ->default(0),

                Tables\Columns\TextColumn::make('clicks_count')
                    ->label('Clics')
                    ->numeric()
                    ->sortable()
                    ->default(0),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Créé le')
                    ->dateTime('d/m/Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->options([
                        'active' => 'Actif',
                        'inactive' => 'Inactif',
                        'draft' => 'Brouillon',
                    ]),
                Tables\Filters\SelectFilter::make('type')
                    ->options([
                        'notification' => 'Notification',
                        'popup' => 'Popup',
                        'banner' => 'Bannière',
                        'toast' => 'Toast',
                        'counter' => 'Compteur',
                    ]),
                Tables\Filters\SelectFilter::make('site_id')
                    ->label('Site')
                    ->relationship('site', 'name', fn($query) => 
                        $query->where('client_id', Auth::guard('client')->user()->client_id)
                    ),
            ])
            ->actions([
                Action::make('view')
                    ->label('Voir')
                    ->icon('heroicon-o-eye')
                    ->url(fn ($record) => static::getUrl('view', ['record' => $record])),
                Action::make('preview')
                    ->label('Prévisualiser')
                    ->icon('heroicon-o-play')
                    ->color('info')
                    ->url(fn ($record) => route('widget.preview', $record))
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
            'index' => Pages\ListClientWidgets::route('/'),
            'create' => Pages\CreateClientWidget::route('/create'),
            'view' => Pages\ViewClientWidget::route('/{record}'),
            'edit' => Pages\EditClientWidget::route('/{record}/edit'),
        ];
    }

    public static function canCreate(): bool
    {
        return Auth::guard('client')->user()?->canCreateWidgets() ?? false;
    }
}
