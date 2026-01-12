<?php

namespace Packages\SocialProof\Filament\Resources\PlanResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Packages\SocialProof\Filament\Resources\PlanResource;

class ListPlans extends ListRecords
{
    protected static string $resource = PlanResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}