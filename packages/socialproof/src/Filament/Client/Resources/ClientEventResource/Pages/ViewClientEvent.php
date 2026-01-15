<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientEventResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;
use Packages\SocialProof\Filament\Client\Resources\ClientEventResource;

class ViewClientEvent extends ViewRecord
{
    protected static string $resource = ClientEventResource::class;

    protected function getHeaderActions(): array
    {
        return [];
    }
}
