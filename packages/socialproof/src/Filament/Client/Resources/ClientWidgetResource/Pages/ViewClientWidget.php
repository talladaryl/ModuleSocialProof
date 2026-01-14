<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;
use Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource;

class ViewClientWidget extends ViewRecord
{
    protected static string $resource = ClientWidgetResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}