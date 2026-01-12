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
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\DateTimePicker;
use Packages\SocialProof\Models\NotificationHandler;
use Packages\SocialProof\Filament\Admin\Resources\NotificationHandlerResource\Pages;
use UnitEnum;
use BackedEnum;

class NotificationHandlerResource extends Resource
{
    protected static ?string $model = NotificationHandler::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-paper-airplane';
    protected static string|UnitEnum|null $navigationGroup = 'Social Proof';
    protected static ?int $navigationSort = 5;
    protected static ?string $navigationLabel = 'Handlers';

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Informations')
                ->columns(2)
                ->schema([
                    TextInput::make('name')
                        ->label('Nom')
                        ->required(),
                    TextInput::make('user_id')
                        ->label('User ID')
                        ->required(),
                    Select::make('type')
                        ->label('Type')
                        ->required()
                        ->options([
                            'email' => 'Email',
                            'webhook' => 'Webhook',
                            'slack' => 'Slack',
                            'discord' => 'Discord',
                            'telegram' => 'Telegram',
                            'microsoft_teams' => 'Microsoft Teams',
                            'twilio' => 'Twilio SMS',
                            'twilio_call' => 'Twilio Call',
                            'whatsapp' => 'WhatsApp',
                            'x' => 'X (Twitter)',
                        ]),
                    Toggle::make('is_enabled')
                        ->label('Activé')
                        ->default(true),
                ]),
            Section::make('Configuration')
                ->schema([
                    KeyValue::make('settings')
                        ->label('Paramètres')
                        ->columnSpanFull(),
                ]),
            Section::make('Statistiques')
                ->columns(2)
                ->schema([
                    DateTimePicker::make('last_datetime')
                        ->label('Dernière exécution')
                        ->disabled(),
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
                Tables\Columns\TextColumn::make('type')
                    ->label('Type')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'email' => 'info',
                        'webhook' => 'success',
                        'slack' => 'purple',
                        'discord' => 'indigo',
                        'telegram' => 'sky',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('user_id')
                    ->label('User ID')
                    ->searchable(),
                Tables\Columns\IconColumn::make('is_enabled')
                    ->label('Activé')
                    ->boolean(),
                Tables\Columns\TextColumn::make('last_datetime')
                    ->label('Dernière exécution')
                    ->dateTime('d/m/Y H:i')
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Créé le')
                    ->dateTime('d/m/Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('type')
                    ->options([
                        'email' => 'Email',
                        'webhook' => 'Webhook',
                        'slack' => 'Slack',
                        'discord' => 'Discord',
                        'telegram' => 'Telegram',
                    ]),
                Tables\Filters\TernaryFilter::make('is_enabled')
                    ->label('Activé'),
            ])
            ->actions([
                Action::make('test')
                    ->label('Tester')
                    ->icon('heroicon-o-play')
                    ->color('warning')
                    ->requiresConfirmation(),
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([BulkActionGroup::make([DeleteBulkAction::make()])]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListNotificationHandlers::route('/'),
            'create' => Pages\CreateNotificationHandler::route('/create'),
            'edit' => Pages\EditNotificationHandler::route('/{record}/edit'),
        ];
    }
}
