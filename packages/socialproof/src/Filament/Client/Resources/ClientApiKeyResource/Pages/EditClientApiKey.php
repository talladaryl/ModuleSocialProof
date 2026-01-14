<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource;

class EditClientApiKey extends EditRecord
{
    protected static string $resource = ClientApiKeyResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
