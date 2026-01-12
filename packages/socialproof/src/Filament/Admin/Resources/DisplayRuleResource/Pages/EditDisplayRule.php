<?php

namespace Packages\SocialProof\Filament\Admin\Resources\DisplayRuleResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Packages\SocialProof\Filament\Admin\Resources\DisplayRuleResource;

class EditDisplayRule extends EditRecord
{
    protected static string $resource = DisplayRuleResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
