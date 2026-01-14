<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientEventResource\Pages;

use Filament\Resources\Pages\ViewRecord;
use Filament\Infolists\Infolist;
use Filament\Infolists\Components;
use Packages\SocialProof\Filament\Client\Resources\ClientEventResource;

class ViewClientEvent extends ViewRecord
{
    protected static string $resource = ClientEventResource::class;

    public function infolist(Infolist $infolist): Infolist
    {
        return $infolist
            ->schema([
                Components\Section::make('Informations de l\'événement')
                    ->schema([
                        Components\TextEntry::make('event_id')
                            ->label('ID'),
                        Components\TextEntry::make('type')
                            ->label('Type')
                            ->badge(),
                        Components\TextEntry::make('site.name')
                            ->label('Site'),
                        Components\TextEntry::make('created_at')
                            ->label('Date')
                            ->dateTime('d/m/Y H:i:s'),
                    ])->columns(4),

                Components\Section::make('Données')
                    ->schema([
                        Components\TextEntry::make('data.customer_name')
                            ->label('Client')
                            ->default('Anonyme'),
                        Components\TextEntry::make('data.product_name')
                            ->label('Produit')
                            ->default('-'),
                        Components\TextEntry::make('data.amount')
                            ->label('Montant')
                            ->money('EUR')
                            ->default('-'),
                        Components\TextEntry::make('data.city')
                            ->label('Ville')
                            ->default('-'),
                    ])->columns(4),

                Components\Section::make('Informations techniques')
                    ->schema([
                        Components\TextEntry::make('ip_address')
                            ->label('Adresse IP'),
                        Components\TextEntry::make('user_agent')
                            ->label('User Agent'),
                        Components\TextEntry::make('page_url')
                            ->label('URL de la page'),
                    ])->columns(3),
            ]);
    }
}
