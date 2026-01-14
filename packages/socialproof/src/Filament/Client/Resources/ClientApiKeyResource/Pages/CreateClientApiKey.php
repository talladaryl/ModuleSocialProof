<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource\Pages;

use Filament\Resources\Pages\CreateRecord;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource;

class CreateClientApiKey extends CreateRecord
{
    protected static string $resource = ClientApiKeyResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data['client_id'] = Auth::guard('client')->user()->client_id;
        $data['key'] = 'sp_' . Str::random(32);
        
        return $data;
    }
}
