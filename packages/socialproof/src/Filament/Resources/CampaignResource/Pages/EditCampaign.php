<?php

namespace Packages\SocialProof\Filament\Resources\CampaignResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Packages\SocialProof\Filament\Resources\CampaignResource;

class EditCampaign extends EditRecord
{
    protected static string $resource = CampaignResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }
}