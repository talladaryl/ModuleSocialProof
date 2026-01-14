<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource;

class ListClientTemplates extends ListRecords
{
    protected static string $resource = ClientTemplateResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
