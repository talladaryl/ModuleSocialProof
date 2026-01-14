<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource;

class ListClientWidgets extends ListRecords
{
    protected static string $resource = ClientWidgetResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}