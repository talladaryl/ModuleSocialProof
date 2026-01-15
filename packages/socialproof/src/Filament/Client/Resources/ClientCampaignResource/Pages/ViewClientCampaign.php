<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;
use Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource;

class ViewClientCampaign extends ViewRecord
{
    protected static string $resource = ClientCampaignResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}
