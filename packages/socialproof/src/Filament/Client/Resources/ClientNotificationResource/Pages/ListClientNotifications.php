<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientNotificationResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Packages\SocialProof\Filament\Client\Resources\ClientNotificationResource;

class ListClientNotifications extends ListRecords
{
    protected static string $resource = ClientNotificationResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
