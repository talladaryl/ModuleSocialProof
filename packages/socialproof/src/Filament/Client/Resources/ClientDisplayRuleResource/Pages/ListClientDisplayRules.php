<?php

namespace Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource;

class ListClientDisplayRules extends ListRecords
{
    protected static string $resource = ClientDisplayRuleResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
