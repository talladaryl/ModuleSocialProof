<?php

namespace Packages\SocialProof\Filament\Resources;

use Filament\Tables;
use Filament\Resources\Resource;
use Filament\Actions\Action;
use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Schemas\Schema;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\{
    TextInput, Textarea, Select, DateTimePicker, KeyValue, FileUpload
};
use Packages\SocialProof\Models\Client;
use Packages\SocialProof\Filament\Resources\ClientResource\Pages;
use UnitEnum;
use BackedEnum;

class ClientResource extends Resource
{
    protected static ?string $model = Client::class;

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-users';
    protected static string|UnitEnum|null $navigationGroup = 'SaaS Management';
    protected static ?int $navigationSort = 3;

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([

            Section::make('Personal Information')->columns(2)->schema([
                TextInput::make('name')->required(),
                TextInput::make('email')->email()->required()->unique(ignoreRecord: true),
                TextInput::make('phone'),
                FileUpload::make('avatar')->image()->directory('avatars')->avatar(),
            ]),

            Section::make('Company Information')->columns(2)->schema([
                TextInput::make('company'),
                TextInput::make('website')->url(),
                Select::make('country')->searchable()->options(config('countries')),
                Select::make('timezone')->searchable()->default('UTC')->options(config('timezones')),
            ]),

            Section::make('Account Settings')->columns(2)->schema([
                Select::make('status')->required()->options([
                    'active'=>'Active','inactive'=>'Inactive','suspended'=>'Suspended','pending'=>'Pending'
                ]),
                Select::make('language')->default('en')->options(['en'=>'English','fr'=>'French']),
                DateTimePicker::make('email_verified_at')->label('Email Verified At'),
                DateTimePicker::make('last_login_at')->label('Last Login')->disabled(),
            ]),

            Section::make('Configuration')->schema([
                KeyValue::make('settings')->columnSpanFull(),
                KeyValue::make('billing_info')->columnSpanFull(),
            ]),

            Section::make('Notes')->schema([
                Textarea::make('notes')->columnSpanFull()->rows(4),
            ]),
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('avatar')->circular(),

                Tables\Columns\TextColumn::make('name')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('email')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('company')->toggleable(),

                Tables\Columns\TextColumn::make('country')->badge(),
                Tables\Columns\TextColumn::make('status')->badge()->color(fn ($s)=>match($s){
                    'active'=>'success','inactive'=>'gray','suspended'=>'danger','pending'=>'warning',default=>'gray'
                }),

                Tables\Columns\TextColumn::make('created_at')->dateTime()->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')->options([
                    'active'=>'Active','inactive'=>'Inactive','suspended'=>'Suspended','pending'=>'Pending'
                ]),
            ])
            ->actions([
                Action::make('view')
                    ->label('Voir')
                    ->icon('heroicon-o-eye')
                    ->url(fn ($record) => static::getUrl('view', ['record' => $record]))
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
            'index'  => Pages\ListClients::route('/'),
            'create' => Pages\CreateClient::route('/create'),
            'view'   => Pages\ViewClient::route('/{record}'),
            'edit'   => Pages\EditClient::route('/{record}/edit'),
        ];
    }
}
