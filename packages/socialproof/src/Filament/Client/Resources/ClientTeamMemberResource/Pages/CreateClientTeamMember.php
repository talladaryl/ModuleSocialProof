<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource\Pages;

use Filament\Resources\Pages\CreateRecord;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource;

class CreateClientTeamMember extends CreateRecord
{
    protected static string $resource = ClientTeamMemberResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data['client_id'] = Auth::guard('client')->user()->client_id;
        
        return $data;
    }
}
