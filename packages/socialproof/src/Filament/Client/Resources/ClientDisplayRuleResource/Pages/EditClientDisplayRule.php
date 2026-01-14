<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource;

class EditClientDisplayRule extends EditRecord
{
    protected static string $resource = ClientDisplayRuleResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
