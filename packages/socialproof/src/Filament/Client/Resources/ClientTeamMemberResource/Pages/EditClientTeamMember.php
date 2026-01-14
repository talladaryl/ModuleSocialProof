<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource;

class EditClientTeamMember extends EditRecord
{
    protected static string $resource = ClientTeamMemberResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
