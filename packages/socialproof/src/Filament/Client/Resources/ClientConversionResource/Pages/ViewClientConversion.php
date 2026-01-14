<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientConversionResource\Pages;

use Filament\Resources\Pages\ViewRecord;
use Filament\Infolists\Infolist;
use Filament\Infolists\Components;
use Packages\SocialProof\Filament\Client\Resources\ClientConversionResource;

class ViewClientConversion extends ViewRecord
{
    protected static string $resource = ClientConversionResource::class;

    public function infolist(Infolist $infolist): Infolist
    {
        return $infolist
            ->schema([
                Components\Section::make('Informations de la conversion')
                    ->schema([
                        Components\TextEntry::make('conversion_id')
                            ->label('ID'),
                        Components\TextEntry::make('action')
                            ->label('Action')
                            ->badge(),
                        Components\TextEntry::make('notification.title')
                            ->label('Notification'),
                        Components\TextEntry::make('site.name')
                            ->label('Site'),
                        Components\TextEntry::make('created_at')
                            ->label('Date')
                            ->dateTime('d/m/Y H:i:s'),
                    ])->columns(5),

                Components\Section::make('Informations techniques')
                    ->schema([
                        Components\TextEntry::make('page_url')
                            ->label('URL de la page')
                            ->url(fn ($record) => $record->page_url)
                            ->openUrlInNewTab(),
                        Components\TextEntry::make('ip_address')
                            ->label('Adresse IP'),
                        Components\TextEntry::make('user_agent')
                            ->label('User Agent'),
                    ])->columns(3),
            ]);
    }
}
