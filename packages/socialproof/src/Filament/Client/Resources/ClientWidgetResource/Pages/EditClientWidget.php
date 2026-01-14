<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource;

class EditClientWidget extends EditRecord
{
    protected static string $resource = ClientWidgetResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}