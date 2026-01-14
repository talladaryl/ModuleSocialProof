<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource;

class ListClientApiKeys extends ListRecords
{
    protected static string $resource = ClientApiKeyResource::class;
    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
