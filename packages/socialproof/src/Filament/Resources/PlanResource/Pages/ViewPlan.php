<?php

namespace Packages\SocialProof\Filament\Resources\PlanResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;
use Packages\SocialProof\Filament\Resources\PlanResource;

class ViewPlan extends ViewRecord
{
    protected static string $resource = PlanResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}