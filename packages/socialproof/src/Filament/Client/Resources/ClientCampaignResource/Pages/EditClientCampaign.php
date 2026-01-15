<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource;

class EditClientCampaign extends EditRecord
{
    protected static string $resource = ClientCampaignResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
