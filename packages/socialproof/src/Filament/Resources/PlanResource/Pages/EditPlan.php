<?php

namespace Packages\SocialProof\Filament\Resources\PlanResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Packages\SocialProof\Filament\Resources\PlanResource;

class EditPlan extends EditRecord
{
    protected static string $resource = PlanResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }
}