<?php

namespace Packages\SocialProof\Filament\Resources\NotificationExtendedResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Packages\SocialProof\Filament\Resources\NotificationExtendedResource;

class ListNotificationExtendeds extends ListRecords
{
    protected static string $resource = NotificationExtendedResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}