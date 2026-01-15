<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientConversionResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;
use Packages\SocialProof\Filament\Client\Resources\ClientConversionResource;

class ViewClientConversion extends ViewRecord
{
    protected static string $resource = ClientConversionResource::class;

    protected function getHeaderActions(): array
    {
        return [];
    }
}
