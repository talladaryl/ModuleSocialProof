<?php

namespace Packages\SocialProof\Filament\Admin\Resources\AuditLogResource\Pages;

use Filament\Resources\Pages\ListRecords;
use Packages\SocialProof\Filament\Admin\Resources\AuditLogResource;

class ListAuditLogs extends ListRecords
{
    protected static string $resource = AuditLogResource::class;
}
