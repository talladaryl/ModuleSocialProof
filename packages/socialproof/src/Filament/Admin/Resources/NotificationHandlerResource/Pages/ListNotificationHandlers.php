<?php

namespace Packages\SocialProof\Filament\Admin\Resources\NotificationHandlerResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Packages\SocialProof\Filament\Admin\Resources\NotificationHandlerResource;

class ListNotificationHandlers extends ListRecords
{
    protected static string $resource = NotificationHandlerResource::class;

    protected function getHeaderActions(): array
    {
        return [Actions\CreateAction::make()];
    }
}
