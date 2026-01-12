<?php

namespace Packages\SocialProof\Filament\Resources\TeamResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Packages\SocialProof\Filament\Resources\TeamResource;

class EditTeam extends EditRecord
{
    protected static string $resource = TeamResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }
}