<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages;

use Filament\Resources\Pages\CreateRecord;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource;

class CreateClientTemplate extends CreateRecord
{
    protected static string $resource = ClientTemplateResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data['client_id'] = Auth::guard('client')->user()->client_id;
        $data['is_global'] = false;
        
        return $data;
    }
}
