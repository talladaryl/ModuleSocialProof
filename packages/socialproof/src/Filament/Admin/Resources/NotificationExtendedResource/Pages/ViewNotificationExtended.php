<?php

namespace Packages\SocialProof\Filament\Admin\Resources\NotificationExtendedResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;
use Packages\SocialProof\Filament\Resources\NotificationExtendedResource;

class ViewNotificationExtended extends ViewRecord
{
    protected static string $resource = NotificationExtendedResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}