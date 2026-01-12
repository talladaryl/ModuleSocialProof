<?php

namespace Packages\SocialProof\Filament\Admin\Resources\WidgetResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;
use Packages\SocialProof\Filament\Admin\Resources\WidgetResource;

class ViewWidget extends ViewRecord
{
    protected static string $resource = WidgetResource::class;

    protected function getHeaderActions(): array
    {
        return [Actions\EditAction::make()];
    }
}
