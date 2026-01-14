<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages;

use Filament\Resources\Pages\CreateRecord;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource;

class CreateClientWidget extends CreateRecord
{
    protected static string $resource = ClientWidgetResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data['client_id'] = Auth::guard('client')->user()->client_id;
        $data['widget_id'] = 'widget_' . Str::random(16);
        
        return $data;
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}