<?php

namespace Packages\SocialProof\Filament\Resources\NotificationExtendedResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Packages\SocialProof\Filament\Resources\NotificationExtendedResource;

class EditNotificationExtended extends EditRecord
{
    protected static string $resource = NotificationExtendedResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }
}