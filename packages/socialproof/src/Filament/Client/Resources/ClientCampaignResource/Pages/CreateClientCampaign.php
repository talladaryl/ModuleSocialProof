<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource\Pages;

use Filament\Resources\Pages\CreateRecord;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource;

class CreateClientCampaign extends CreateRecord
{
    protected static string $resource = ClientCampaignResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data['client_id'] = Auth::guard('client')->user()->client_id;
        
        return $data;
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
