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
    Select, TextInput, Textarea, DateTimePicker, FileUpload, KeyValue
};
use Packages\SocialProof\Models\{Team, Site, Campaign, Template, NotificationExtended};
use Packages\SocialProof\Filament\Resources\NotificationExtendedResource\Pages;
use UnitEnum;
use BackedEnum;

class NotificationExtendedResource extends Resource
{
    protected static ?string $model = NotificationExtended::class;

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-bell';
    protected static string|UnitEnum|null $navigationGroup = 'Social Proof';
    protected static ?int $navigationSort = 2;
    protected static ?string $navigationLabel = 'Notifications';

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([

            Section::make('Basic Information')->columns(2)->schema([
                Select::make('team_id')->relationship('team','name')->required()->searchable()->preload(),
                Select::make('site_id')->relationship('site','name')->required()->searchable()->preload(),
                Select::make('campaign_id')->relationship('campaign','name')->searchable()->preload(),
                Select::make('template_id')->relationship('template','name')->searchable()->preload(),
            ]),

            Section::make('Content')->columns(2)->schema([
                TextInput::make('title')->required(),
                Textarea::make('message')->required()->columnSpanFull(),
                TextInput::make('url')->url(),
                FileUpload::make('image_url')->image()->directory('notifications'),
            ]),

            Section::make('Settings')->columns(3)->schema([
                Select::make('type')->required()->options([
                    'INFORMATIONAL'=>'Informational','COUPON'=>'Coupon','LIVE_COUNTER'=>'Live Counter',
                    'EMAIL_COLLECTOR'=>'Email Collector','CONVERSIONS'=>'Conversions',
                    'REVIEWS'=>'Reviews','VIDEO'=>'Video','CUSTOM_HTML'=>'Custom HTML'
                ]),
                Select::make('status')->required()->default('draft')->options([
                    'draft'=>'Draft','active'=>'Active','paused'=>'Paused','archived'=>'Archived'
                ]),
                TextInput::make('priority')->numeric()->default(1),
            ]),

            Section::make('Display')->columns(3)->schema([
                TextInput::make('display_duration')->numeric()->default(5),
                TextInput::make('delay_before_show')->numeric()->default(0),
                Select::make('position')->default('bottom_right')->options([
                    'top_left'=>'Top Left','top_right'=>'Top Right',
                    'bottom_left'=>'Bottom Left','bottom_right'=>'Bottom Right','center'=>'Center'
                ]),
            ]),

            Section::make('Schedule')->columns(2)->schema([
                DateTimePicker::make('starts_at'),
                DateTimePicker::make('ends_at'),
            ]),

            Section::make('Configuration')->schema([
                KeyValue::make('config')->columnSpanFull(),
                KeyValue::make('targeting_rules')->columnSpanFull(),
            ]),

            Section::make('Statistics')->visibleOn('edit')->columns(3)->schema([
                TextInput::make('views_count')->numeric()->disabled(),
                TextInput::make('clicks_count')->numeric()->disabled(),
                TextInput::make('conversions_count')->numeric()->disabled(),
            ]),
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')->searchable()->sortable()->limit(50),
                Tables\Columns\TextColumn::make('team.name')->sortable(),
                Tables\Columns\TextColumn::make('site.name')->sortable(),

                Tables\Columns\TextColumn::make('type')->badge()->color(fn($s)=>match($s){
                    'COUPON'=>'success','LIVE_COUNTER'=>'info','EMAIL_COLLECTOR'=>'warning',
                    'CONVERSIONS'=>'danger',default=>'gray'
                }),

                Tables\Columns\TextColumn::make('status')->badge()->color(fn($s)=>match($s){
                    'active'=>'success','paused'=>'warning','archived'=>'danger',default=>'gray'
                }),

                Tables\Columns\TextColumn::make('views_count')->numeric()->sortable(),
                Tables\Columns\TextColumn::make('clicks_count')->numeric()->sortable(),
                Tables\Columns\TextColumn::make('conversions_count')->numeric()->sortable(),

                Tables\Columns\TextColumn::make('created_at')->dateTime()->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('type')->options([
                    'INFORMATIONAL'=>'Informational','COUPON'=>'Coupon','LIVE_COUNTER'=>'Live Counter',
                    'EMAIL_COLLECTOR'=>'Email Collector','CONVERSIONS'=>'Conversions',
                    'REVIEWS'=>'Reviews','VIDEO'=>'Video','CUSTOM_HTML'=>'Custom HTML'
                ]),
                Tables\Filters\SelectFilter::make('status')->options([
                    'draft'=>'Draft','active'=>'Active','paused'=>'Paused','archived'=>'Archived'
                ]),
            ])
            ->actions([
                Action::make('view')
                    ->label('Voir')
                    ->icon('heroicon-o-eye')
                    ->url(fn ($record) => static::getUrl('view', ['record'=>$record]))
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

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index'  => Pages\ListNotificationExtendeds::route('/'),
            'create' => Pages\CreateNotificationExtended::route('/create'),
            'view'   => Pages\ViewNotificationExtended::route('/{record}'),
            'edit'   => Pages\EditNotificationExtended::route('/{record}/edit'),
        ];
    }
}
