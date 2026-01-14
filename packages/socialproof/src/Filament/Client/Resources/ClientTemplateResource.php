<?php

namespace Packages\SocialProof\Filament\Client\Resources;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Models\Template;
use Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages;

class ClientTemplateResource extends Resource
{
    protected static ?string $model = Template::class;
    protected static ?string $navigationIcon = 'heroicon-o-document-duplicate';
    protected static ?string $navigationLabel = 'Templates';
    protected static ?string $navigationGroup = 'Social Proof';
    protected static ?int $navigationSort = 5;

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->where(function ($query) {
                $query->where('client_id', Auth::guard('client')->user()->client_id)
                    ->orWhere('is_global', true);
            });
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Informations du template')
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->label('Nom')
                            ->required()
                            ->maxLength(255),

                        Forms\Components\Select::make('type')
                            ->label('Type')
                            ->options([
                                'notification' => 'Notification',
                                'popup' => 'Popup',
                                'banner' => 'Bannière',
                                'toast' => 'Toast',
                            ])
                            ->required()
                            ->default('notification'),

                        Forms\Components\Select::make('category')
                            ->label('Catégorie')
                            ->options([
                                'purchase' => 'Achat',
                                'signup' => 'Inscription',
                                'review' => 'Avis',
                                'activity' => 'Activité',
                                'custom' => 'Personnalisé',
                            ])
                            ->required()
                            ->default('purchase'),

                        Forms\Components\Textarea::make('description')
                            ->label('Description')
                            ->rows(2)
                            ->maxLength(500),
                    ])->columns(2),

                Forms\Components\Section::make('Contenu')
                    ->schema([
                        Forms\Components\TextInput::make('title_template')
                            ->label('Template du titre')
                            ->required()
                            ->maxLength(255)
                            ->helperText('Variables: {{customer_name}}, {{product_name}}, {{city}}, {{time_ago}}'),

                        Forms\Components\Textarea::make('message_template')
                            ->label('Template du message')
                            ->required()
                            ->rows(3)
                            ->maxLength(1000)
                            ->helperText('Variables: {{customer_name}}, {{product_name}}, {{amount}}, {{city}}, {{time_ago}}'),

                        Forms\Components\TextInput::make('icon')
                            ->label('Icône')
                            ->maxLength(100)
                            ->placeholder('heroicon-o-shopping-cart'),

                        Forms\Components\TextInput::make('image_url')
                            ->label('URL de l\'image')
                            ->url()
                            ->maxLength(500),
                    ]),

                Forms\Components\Section::make('Style')
                    ->schema([
                        Forms\Components\Select::make('position')
                            ->label('Position')
                            ->options([
                                'bottom-left' => 'Bas gauche',
                                'bottom-right' => 'Bas droite',
                                'top-left' => 'Haut gauche',
                                'top-right' => 'Haut droite',
                            ])
                            ->default('bottom-left'),

                        Forms\Components\ColorPicker::make('background_color')
                            ->label('Couleur de fond')
                            ->default('#ffffff'),

                        Forms\Components\ColorPicker::make('text_color')
                            ->label('Couleur du texte')
                            ->default('#333333'),

                        Forms\Components\ColorPicker::make('accent_color')
                            ->label('Couleur d\'accent')
                            ->default('#3b82f6'),

                        Forms\Components\TextInput::make('border_radius')
                            ->label('Rayon de bordure')
                            ->numeric()
                            ->default(8)
                            ->suffix('px'),

                        Forms\Components\Toggle::make('show_shadow')
                            ->label('Afficher l\'ombre')
                            ->default(true),
                    ])->columns(3),

                Forms\Components\Section::make('Animation')
                    ->schema([
                        Forms\Components\Select::make('animation_in')
                            ->label('Animation d\'entrée')
                            ->options([
                                'fadeIn' => 'Fondu',
                                'slideInLeft' => 'Glissement gauche',
                                'slideInRight' => 'Glissement droite',
                                'slideInUp' => 'Glissement haut',
                                'slideInDown' => 'Glissement bas',
                                'bounceIn' => 'Rebond',
                            ])
                            ->default('slideInUp'),

                        Forms\Components\Select::make('animation_out')
                            ->label('Animation de sortie')
                            ->options([
                                'fadeOut' => 'Fondu',
                                'slideOutLeft' => 'Glissement gauche',
                                'slideOutRight' => 'Glissement droite',
                                'slideOutUp' => 'Glissement haut',
                                'slideOutDown' => 'Glissement bas',
                            ])
                            ->default('fadeOut'),

                        Forms\Components\TextInput::make('display_duration')
                            ->label('Durée d\'affichage')
                            ->numeric()
                            ->default(5000)
                            ->suffix('ms'),
                    ])->columns(3),

                Forms\Components\Section::make('Statut')
                    ->schema([
                        Forms\Components\Toggle::make('is_active')
                            ->label('Actif')
                            ->default(true),
                    ]),
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
                        'notification' => 'info',
                        'popup' => 'warning',
                        'banner' => 'success',
                        'toast' => 'primary',
                        default => 'gray',
                    }),

                Tables\Columns\TextColumn::make('category')
                    ->label('Catégorie')
                    ->badge(),

                Tables\Columns\IconColumn::make('is_global')
                    ->label('Global')
                    ->boolean(),

                Tables\Columns\IconColumn::make('is_active')
                    ->label('Actif')
                    ->boolean(),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Créé le')
                    ->dateTime('d/m/Y')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('type')
                    ->label('Type')
                    ->options([
                        'notification' => 'Notification',
                        'popup' => 'Popup',
                        'banner' => 'Bannière',
                        'toast' => 'Toast',
                    ]),

                Tables\Filters\SelectFilter::make('category')
                    ->label('Catégorie')
                    ->options([
                        'purchase' => 'Achat',
                        'signup' => 'Inscription',
                        'review' => 'Avis',
                        'activity' => 'Activité',
                        'custom' => 'Personnalisé',
                    ]),

                Tables\Filters\TernaryFilter::make('is_global')
                    ->label('Templates globaux'),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make()
                    ->visible(fn ($record) => !$record->is_global),
                Tables\Actions\Action::make('duplicate')
                    ->label('Dupliquer')
                    ->icon('heroicon-o-document-duplicate')
                    ->action(function ($record) {
                        $newTemplate = $record->replicate();
                        $newTemplate->name = $record->name . ' (copie)';
                        $newTemplate->is_global = false;
                        $newTemplate->client_id = Auth::guard('client')->user()->client_id;
                        $newTemplate->save();
                    }),
                Tables\Actions\DeleteAction::make()
                    ->visible(fn ($record) => !$record->is_global),
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
            'index' => Pages\ListClientTemplates::route('/'),
            'create' => Pages\CreateClientTemplate::route('/create'),
            'view' => Pages\ViewClientTemplate::route('/{record}'),
            'edit' => Pages\EditClientTemplate::route('/{record}/edit'),
        ];
    }
}
