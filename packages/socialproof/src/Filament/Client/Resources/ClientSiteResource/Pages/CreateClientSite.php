<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages;

use Filament\Resources\Pages\CreateRecord;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Filament\Client\Resources\ClientSiteResource;

class CreateClientSite extends CreateRecord
{
    protected static string $resource = ClientSiteResource::class;

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