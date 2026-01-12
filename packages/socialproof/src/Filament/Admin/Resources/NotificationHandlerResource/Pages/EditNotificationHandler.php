<?php

namespace Packages\SocialProof\Filament\Admin\Resources\NotificationHandlerResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Packages\SocialProof\Filament\Admin\Resources\NotificationHandlerResource;

class EditNotificationHandler extends EditRecord
{
    protected static string $resource = NotificationHandlerResource::class;

    protected function getHeaderActions(): array
    {
        return [Actions\DeleteAction::make()];
    }
}
