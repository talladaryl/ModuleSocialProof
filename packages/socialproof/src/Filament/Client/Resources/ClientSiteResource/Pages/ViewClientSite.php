<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;
use Packages\SocialProof\Filament\Client\Resources\ClientSiteResource;

class ViewClientSite extends ViewRecord
{
    protected static string $resource = ClientSiteResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}