<?php

namespace Packages\SocialProof\Filament\Admin\Resources\BannedIpResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Packages\SocialProof\Filament\Admin\Resources\BannedIpResource;

class EditBannedIp extends EditRecord
{
    protected static string $resource = BannedIpResource::class;

    protected function getHeaderActions(): array
    {
        return [Actions\DeleteAction::make()];
    }
}
