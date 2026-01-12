<?php

namespace Packages\SocialProof\Filament\Admin\Resources\QuotaUsageResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Packages\SocialProof\Filament\Admin\Resources\QuotaUsageResource;

class EditQuotaUsage extends EditRecord
{
    protected static string $resource = QuotaUsageResource::class;

    protected function getHeaderActions(): array
    {
        return [Actions\DeleteAction::make()];
    }
}
