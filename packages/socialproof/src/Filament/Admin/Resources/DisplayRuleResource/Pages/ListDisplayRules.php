<?php

namespace Packages\SocialProof\Filament\Admin\Resources\DisplayRuleResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Packages\SocialProof\Filament\Admin\Resources\DisplayRuleResource;

class ListDisplayRules extends ListRecords
{
    protected static string $resource = DisplayRuleResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
