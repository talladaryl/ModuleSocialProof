<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource;

class ListClientTeamMembers extends ListRecords
{
    protected static string $resource = ClientTeamMemberResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
