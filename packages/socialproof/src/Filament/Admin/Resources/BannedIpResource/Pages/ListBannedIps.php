<?php

namespace Packages\SocialProof\Filament\Admin\Resources\BannedIpResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Packages\SocialProof\Filament\Admin\Resources\BannedIpResource;

class ListBannedIps extends ListRecords
{
    protected static string $resource = BannedIpResource::class;

    protected function getHeaderActions(): array
    {
        return [Actions\CreateAction::make()];
    }
}
