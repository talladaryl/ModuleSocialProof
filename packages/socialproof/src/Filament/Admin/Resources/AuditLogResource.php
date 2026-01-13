<?php

namespace Packages\SocialProof\Filament\Admin\Resources;

use Filament\Tables;
use Filament\Resources\Resource;
use Filament\Actions\Action;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Schemas\Schema;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\KeyValue;
use Packages\SocialProof\Models\AuditLog;
use Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages;
use UnitEnum;
use BackedEnum;

class AuditLogResource extends Resource
{
    protected static ?string $model = AuditLog::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-clipboard-document-list';
    protected static string|UnitEnum|null $navigationGroup = 'Système';
    protected static ?int $navigationSort = 1;
    protected static ?string $navigationLabel = 'Audit Logs';

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Informations')
                ->columns(2)
                ->schema([
                    TextInput::make('action')->label('Action')->disabled(),
                    Select::make('client_id')->relationship('client', 'name')->disabled(),
                    TextInput::make('model_type')->label('Type de modèle')->disabled(),
                    TextInput::make('model_id')->label('ID du modèle')->disabled(),
                    TextInput::make('ip_address')->label('Adresse IP')->disabled(),
                    TextInput::make('url')->label('URL')->disabled()->columnSpanFull(),
                ]),
            Section::make('Données')
                ->schema([
                    KeyValue::make('old_values')->label('Anciennes valeurs')->disabled(),
                    KeyValue::make('new_values')->label('Nouvelles valeurs')->disabled(),
                    KeyValue::make('metadata')->label('Métadonnées')->disabled(),
                ]),
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('action')
                    ->label('Action')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'create' => 'success',
                        'update' => 'warning',
                        'delete' => 'danger',
                        'login' => 'info',
                        'logout' => 'gray',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('client.name')
                    ->label('Client')
                    ->sortable(),
                Tables\Columns\TextColumn::make('model_type')
                    ->label('Modèle')
                    ->formatStateUsing(fn ($state) => class_basename($state)),
                Tables\Columns\TextColumn::make('model_id')
                    ->label('ID'),
                Tables\Columns\TextColumn::make('ip_address')
                    ->label('IP')
                    ->toggleable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Date')
                    ->dateTime('d/m/Y H:i')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('action')
                    ->options([
                        'create' => 'Création',
                        'update' => 'Modification',
                        'delete' => 'Suppression',
                        'login' => 'Connexion',
                        'logout' => 'Déconnexion',
                    ]),
                Tables\Filters\SelectFilter::make('client_id')
                    ->relationship('client', 'name'),
            ])
            ->actions([
                Action::make('view')
                    ->icon('heroicon-o-eye')
                    ->url(fn ($record) => static::getUrl('view', ['record' => $record])),
            ])
            ->bulkActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                    \Filament\Actions\BulkAction::make('cleanup')
                        ->label('Nettoyer (> 90 jours)')
                        ->icon('heroicon-o-trash')
                        ->color('danger')
                        ->requiresConfirmation()
                        ->action(fn () => AuditLog::where('created_at', '<', now()->subDays(90))->delete()),
                ]),
            ])
            ->defaultSort('created_at', 'desc');
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListAuditLogs::route('/'),
            'view' => Pages\ViewAuditLog::route('/{record}'),
        ];
    }
}

