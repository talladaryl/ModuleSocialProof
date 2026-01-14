<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource;

class EditClientTemplate extends EditRecord
{
    protected static string $resource = ClientTemplateResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }
}
