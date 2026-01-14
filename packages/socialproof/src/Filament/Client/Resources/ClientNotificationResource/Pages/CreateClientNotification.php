<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientNotificationResource\Pages;

use Filament\Resources\Pages\CreateRecord;
use Packages\SocialProof\Filament\Client\Resources\ClientNotificationResource;

class CreateClientNotification extends CreateRecord
{
    protected static string $resource = ClientNotificationResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data['client_id'] = auth('client')->user()->client_id;
        return $data;
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
