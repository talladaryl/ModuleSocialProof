<?php

namespace Packages\SocialProof\Filament\Resources\CampaignResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;
use Packages\SocialProof\Filament\Resources\CampaignResource;

class ViewCampaign extends ViewRecord
{
    protected static string $resource = CampaignResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}