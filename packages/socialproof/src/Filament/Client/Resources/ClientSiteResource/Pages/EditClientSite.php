<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientSiteResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Packages\SocialProof\Filament\Client\Resources\ClientSiteResource;

class EditClientSite extends EditRecord
{
    protected static string $resource = ClientSiteResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}