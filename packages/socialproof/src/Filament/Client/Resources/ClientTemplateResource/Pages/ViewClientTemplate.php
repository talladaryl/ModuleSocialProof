<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;
use Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource;

class ViewClientTemplate extends ViewRecord
{
    protected static string $resource = ClientTemplateResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make()
                ->visible(fn ($record) => !$record->is_global),
        ];
    }
}
