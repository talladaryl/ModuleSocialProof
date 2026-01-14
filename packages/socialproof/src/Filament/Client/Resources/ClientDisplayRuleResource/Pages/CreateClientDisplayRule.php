<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource\Pages;

use Filament\Resources\Pages\CreateRecord;
use Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource;

class CreateClientDisplayRule extends CreateRecord
{
    protected static string $resource = ClientDisplayRuleResource::class;

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
