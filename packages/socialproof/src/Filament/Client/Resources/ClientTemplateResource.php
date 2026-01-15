<?php

namespace Packages\SocialProof\Filament\Client\Resources;

use Filament\Tables;
use Filament\Resources\Resource;
use Filament\Actions\Action;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Schemas\Schema;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\ColorPicker;
use Filament\Forms\Components\Toggle;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Models\Template;
use Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages;
use UnitEnum;
use BackedEnum;

class ClientTemplateResource extends Resource
{
    protected static ?string $model = Template::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-document-text';
    protected static string|UnitEnum|null $navigationGroup = 'Social Proof';
    protected static ?int $navigationSort = 5;
    protected static ?string $navigationLabel = 'Templates';

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->where(function ($query) {
                $query->where('client_id', Auth::guard('client')->user()->client_id)
                    ->orWhere('is_global', true);
            });
    }

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Configuration du Template')
                ->columns(2)
                ->schema([
                    TextInput::make('name')
                        ->label('Nom du template')
                        ->required()
                        ->maxLength(255),

                    Select::make('type')
                        ->label('Type d\'affichage')
                        ->options([
                            'notification' => 'Notification',
                            'popup' => 'Popup',
                            'banner' => 'Bannière',
                            'toast' => 'Toast',
                        ])
                        ->required()
                        ->default('notification'),

                    Select::make('category')
                        ->label('Catégorie d\'usage')
                        ->options([
                            'purchase' => 'Achat',
                            'signup' => 'Inscription',
                            'review' => 'Avis',
                            'activity' => 'Activité',
                            'custom' => 'Personnalisé',
                        ])
                        ->required()
                        ->default('purchase'),

                    Toggle::make('is_active')
                        ->label('Template activé')
                        ->default(true)
                        ->inline(false),

                    Textarea::make('description')
                        ->label('Note interne / Description')
                        ->rows(2)
                        ->maxLength(500)
                        ->columnSpanFull(),
                ]),

            Section::make('Contenu Dynamique')
                ->description('Utilisez les variables entre doubles accolades.')
                ->schema([
                    TextInput::make('title_template')
                        ->label('Structure du titre')
                        ->required()
                        ->maxLength(255)
                        ->helperText('Variables: {{customer_name}}, {{product_name}}, {{city}}, {{time_ago}}'),

                    Textarea::make('message_template')
                        ->label('Structure du message')
                        ->required()
                        ->rows(3)
                        ->maxLength(1000)
                        ->helperText('Variables: {{amount}}, {{product_name}}, {{time_ago}}'),

                    TextInput::make('icon')
                        ->label('Icône (Heroicon)')
                        ->placeholder('heroicon-o-shopping-cart'),

                    TextInput::make('image_url')
                        ->label('URL de l\'image par défaut')
                        ->url(),
                ]),

            Section::make('Design & Animation')
                ->columns(3)
                ->schema([
                    Select::make('position')
                        ->label('Position écran')
                        ->options([
                            'bottom-left' => 'Bas gauche',
                            'bottom-right' => 'Bas droite',
                            'top-left' => 'Haut gauche',
                            'top-right' => 'Haut droite',
                        ])
                        ->default('bottom-left'),

                    TextInput::make('border_radius')
                        ->label('Rayon bordure')
                        ->numeric()
                        ->suffix('px')
                        ->default(8),

                    Toggle::make('show_shadow')
                        ->label('Ombre portée')
                        ->default(true)
                        ->inline(false),

                    ColorPicker::make('background_color')
                        ->label('Fond')
                        ->default('#ffffff'),

                    ColorPicker::make('text_color')
                        ->label('Texte')
                        ->default('#333333'),

                    ColorPicker::make('accent_color')
                        ->label('Accentuation')
                        ->default('#3b82f6'),

                    Select::make('animation_in')
                        ->label('Entrée')
                        ->options([
                            'fadeIn' => 'Fondu',
                            'slideInUp' => 'Glissement haut',
                            'slideInDown' => 'Glissement bas',
                            'bounceIn' => 'Rebond',
                        ])->default('slideInUp'),

                    Select::make('animation_out')
                        ->label('Sortie')
                        ->options([
                            'fadeOut' => 'Fondu',
                            'slideOutDown' => 'Glissement bas',
                        ])->default('fadeOut'),

                    TextInput::make('display_duration')
                        ->label('Durée (ms)')
                        ->numeric()
                        ->default(5000),
                ]),
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Nom')
                    ->description(fn ($record) => $record->description)
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

                Tables\Columns\IconColumn::make('is_global')
                    ->label('Officiel')
                    ->boolean()
                    ->trueIcon('heroicon-s-check-badge')
                    ->trueColor('primary')
                    ->falseIcon('heroicon-o-user')
                    ->falseColor('gray'),

                Tables\Columns\ToggleColumn::make('is_active')
                    ->label('Actif')
                    ->disabled(fn ($record) => $record->is_global),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Créé le')
                    ->dateTime('d/m/Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('type'),
                Tables\Filters\TernaryFilter::make('is_global')
                    ->label('Source')
                    ->placeholder('Tous les templates')
                    ->trueLabel('Templates globaux')
                    ->falseLabel('Mes templates'),
            ])
            ->actions([
                // Action standardisée "Voir" avec l'icône o-eye
                Action::make('view_details')
                    ->label('Voir')
                    ->icon('heroicon-o-eye')
                    ->url(fn ($record) => static::getUrl('view', ['record' => $record])),

                EditAction::make()
                    ->visible(fn ($record) => !$record->is_global),

                Action::make('duplicate')
                    ->label('Dupliquer')
                    ->icon('heroicon-o-document-duplicate')
                    ->color('info')
                    ->action(function ($record) {
                        $newTemplate = $record->replicate();
                        $newTemplate->name = $record->name . ' (Copie)';
                        $newTemplate->is_global = false;
                        $newTemplate->client_id = Auth::guard('client')->user()->client_id;
                        $newTemplate->save();
                    }),

                DeleteAction::make()
                    ->visible(fn ($record) => !$record->is_global),
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
            'index' => Pages\ListClientTemplates::route('/'),
            'create' => Pages\CreateClientTemplate::route('/create'),
            'view' => Pages\ViewClientTemplate::route('/{record}'),
            'edit' => Pages\EditClientTemplate::route('/{record}/edit'),
        ];
    }
}