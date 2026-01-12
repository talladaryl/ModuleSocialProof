<?php

namespace Packages\SocialProof\Filament\Resources\TeamResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;
use Packages\SocialProof\Filament\Resources\TeamResource;

class ViewTeam extends ViewRecord
{
    protected static string $resource = TeamResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}