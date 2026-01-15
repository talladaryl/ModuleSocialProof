<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource;

class ListClientCampaigns extends ListRecords
{
    protected static string $resource = ClientCampaignResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
