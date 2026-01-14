<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientNotificationResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Packages\SocialProof\Filament\Client\Resources\ClientNotificationResource;

class EditClientNotification extends EditRecord
{
    protected static string $resource = ClientNotificationResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
