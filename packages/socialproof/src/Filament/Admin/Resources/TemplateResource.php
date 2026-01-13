<?php

namespace Packages\SocialProof\Filament\Admin\Resources;

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
use Filament\Forms\Components\FileUpload;
use Packages\SocialProof\Models\Template;
use Packages\SocialProof\Filament\Admin\Resources\TemplateResource\Pages;
use UnitEnum;
use BackedEnum;

class TemplateResource extends Resource
{
    protected static ?string $model = Template::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-document-duplicate';
    protected static string|UnitEnum|null $navigationGroup = 'Templates & Règles';
    protected static ?int $navigationSort = 1;
    protected static ?string $navigationLabel = 'Templates';

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Informations')
                ->columns(2)
                ->schema([
                    TextInput::make('name')->label('Nom')->required(),
                    TextInput::make('slug')->required()->unique(ignoreRecord: true),
                    Textarea::make('description')->label('Description')->columnSpanFull(),
                ]),

            Section::make('Configuration')
                ->columns(2)
                ->schema([
                    Select::make('type')
                        ->label('Type')
                        ->required()
                        ->options([
                            'INFORMATIONAL' => 'Informational',
                            'COUPON' => 'Coupon',
                            'LIVE_COUNTER' => 'Live Counter',
                            'EMAIL_COLLECTOR' => 'Email Collector',
                            'CONVERSIONS' => 'Conversions',
                            'REVIEWS' => 'Reviews',
                            'VIDEO' => 'Video',
                            'CUSTOM_HTML' => 'Custom HTML',
                        ]),
                    Select::make('category')
                        ->label('Catégorie')
                        ->options([
                            'default' => 'Par défaut',
                            'ecommerce' => 'E-commerce',
                            'saas' => 'SaaS',
                            'marketing' => 'Marketing',
                            'custom' => 'Personnalisé',
                        ])
                        ->default('default'),
                    FileUpload::make('thumbnail')
                        ->label('Aperçu')
                        ->image()
                        ->directory('templates'),
                    Toggle::make('is_active')->label('Actif')->default(true),
                    Toggle::make('is_default')->label('Par défaut')->default(false),
                    Toggle::make('is_premium')->label('Premium')->default(false),
                ]),

            Section::make('Contenu HTML')
                ->schema([
                    Textarea::make('html_content')
                        ->label('HTML')
                        ->rows(10)
                        ->columnSpanFull(),
                ]),

            Section::make('Styles CSS')
                ->schema([
                    Textarea::make('css_content')
                        ->label('CSS')
                        ->rows(10)
                        ->columnSpanFull(),
                ]),

            Section::make('Configuration avancée')
                ->schema([
                    KeyValue::make('config')->label('Configuration')->columnSpanFull(),
                    KeyValue::make('style_config')->label('Styles personnalisés')->columnSpanFull(),
                    KeyValue::make('variables')->label('Variables')->columnSpanFull(),
                ]),
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('thumbnail')
                    ->label('Aperçu')
                    ->square(),
                Tables\Columns\TextColumn::make('name')
                    ->label('Nom')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('slug')
                    ->searchable(),
                Tables\Columns\TextColumn::make('type')
                    ->label('Type')
                    ->badge()
                    ->color(fn ($state) => match ($state) {
                        'CONVERSIONS' => 'success',
                        'COUPON' => 'warning',
                        'LIVE_COUNTER' => 'info',
                        'EMAIL_COLLECTOR' => 'primary',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('category')
                    ->label('Catégorie')
                    ->badge(),
                Tables\Columns\IconColumn::make('is_active')
                    ->label('Actif')
                    ->boolean(),
                Tables\Columns\IconColumn::make('is_default')
                    ->label('Défaut')
                    ->boolean(),
                Tables\Columns\IconColumn::make('is_premium')
                    ->label('Premium')
                    ->boolean(),
                Tables\Columns\TextColumn::make('notifications_count')
                    ->label('Utilisations')
                    ->counts('notifications')
                    ->badge()
                    ->color('info'),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Créé le')
                    ->dateTime('d/m/Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('type')
                    ->options([
                        'INFORMATIONAL' => 'Informational',
                        'COUPON' => 'Coupon',
                        'LIVE_COUNTER' => 'Live Counter',
                        'CONVERSIONS' => 'Conversions',
                    ]),
                Tables\Filters\SelectFilter::make('category')
                    ->options([
                        'default' => 'Par défaut',
                        'ecommerce' => 'E-commerce',
                        'saas' => 'SaaS',
                        'marketing' => 'Marketing',
                    ]),
                Tables\Filters\TernaryFilter::make('is_active')->label('Actif'),
                Tables\Filters\TernaryFilter::make('is_premium')->label('Premium'),
            ])
            ->actions([
                Action::make('view')
                    ->label('Voir')
                    ->icon('heroicon-o-eye')
                    ->url(fn ($record) => static::getUrl('view', ['record' => $record])),
                Action::make('duplicate')
                    ->label('Dupliquer')
                    ->icon('heroicon-o-document-duplicate')
                    ->action(function ($record) {
                        $new = $record->replicate();
                        $new->name = $record->name . ' (copie)';