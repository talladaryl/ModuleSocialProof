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
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\DateTimePicker;
use Packages\SocialProof\Models\BannedIp;
use Packages\SocialProof\Filament\Admin\Resources\BannedIpResource\Pages;
use UnitEnum;
use BackedEnum;

class BannedIpResource extends Resource
{
    protected static ?string $model = BannedIp::class;
    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-shield-exclamation';
    protected static string|UnitEnum|null $navigationGroup = 'API & Sécurité';
    protected static ?int $navigationSort = 3;
    protected static ?string $navigationLabel = 'IPs Bannies';

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            Section::make('Informations')
                ->columns(2)
                ->schema([
                    TextInput::make('ip_address')
                        ->label('Adresse IP')
                        ->required()
                        ->unique(ignoreRecord: true),
                    Textarea::make('reason')
                        ->label('Raison')
                        ->rows(3),
                    Toggle::make('is_permanent')
                        ->label('Bannissement permanent')
                        ->default(false)
                        ->reactive(),
                    DateTimePicker::make('expires_at')
                        ->label('Expire le')
                        ->visible(fn ($get) => !$get('is_permanent')),
                ]),
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('ip_address')
                    ->label('Adresse IP')
                    ->searchable()
                    ->sortable()
                    ->copyable(),
                Tables\Columns\TextColumn::make('reason')
                    ->label('Raison')
                    ->limit(50),
                Tables\Columns\IconColumn::make('is_permanent')
                    ->label('Permanent')
                    ->boolean(),
                Tables\Columns\TextColumn::make('expires_at')
                    ->label('Expire le')
                    ->dateTime('d/m/Y H:i')
                    ->placeholder('Jamais'),
                Tables\Columns\IconColumn::make('is_active')
                    ->label('Actif')
                    ->getStateUsing(fn ($record) => $record->isActive())
                    ->boolean(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Banni le')
                    ->dateTime('d/m/Y H:i')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\TernaryFilter::make('is_permanent')
                    ->label('Permanent'),
                Tables\Filters\Filter::make('active')
                    ->label('Actifs uniquement')
                    ->query(fn ($query) => $query->where(function ($q) {
                        $q->where('is_permanent', true)
                            ->orWhere('expires_at', '>', now());
                    })),
            ])
            ->actions([
                Action::make('unban')
                    ->label('Débannir')
                    ->icon('heroicon-o-check')
                    ->color('success')
                    ->requiresConfirmation()
                    ->action(fn ($record) => $record->delete()),
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([BulkActionGroup::make([DeleteBulkAction::make()])]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBannedIps::route('/'),
            'create' => Pages\CreateBannedIp::route('/create'),
            'edit' => Pages\EditBannedIp::route('/{record}/edit'),
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::where(function ($q) {
            $q->where('is_permanent', true)->orWhere('expires_at', '>', now());
        })->count();
    }

    public static function getNavigationBadgeColor(): ?string
    {
        return 'danger';
    }
}
