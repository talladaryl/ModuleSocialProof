<?php

namespace Packages\SocialProof\Filament\Admin\Resources\QuotaUsageResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Packages\SocialProof\Filament\Admin\Resources\QuotaUsageResource;

class ListQuotaUsages extends ListRecords
{
    protected static string $resource = QuotaUsageResource::class;

    protected function getHeaderActions(): array
    {
        return [Actions\CreateAction::make()];
    }
}
