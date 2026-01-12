<?php

namespace Packages\SocialProof\Filament\Resources\ClientResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;
use Packages\SocialProof\Filament\Resources\ClientResource;

class ViewClient extends ViewRecord
{
    protected static string $resource = ClientResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}