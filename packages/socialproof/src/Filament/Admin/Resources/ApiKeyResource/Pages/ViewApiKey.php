<?php

namespace Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;
use Packages\SocialProof\Filament\Admin\Resources\ApiKeyResource;

class ViewApiKey extends ViewRecord
{
    protected static string $resource = ApiKeyResource::class;

    protected function getHeaderActions(): array
    {
        return [Actions\EditAction::make()];
    }
}
