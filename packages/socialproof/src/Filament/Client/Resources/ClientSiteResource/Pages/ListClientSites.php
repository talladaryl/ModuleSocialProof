<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Packages\SocialProof\Filament\Client\Resources\ClientSiteResource;

class ListClientSites extends ListRecords
{
    protected static string $resource = ClientSiteResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}