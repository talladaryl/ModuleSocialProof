<?php

namespace Packages\SocialProof\Filament\Client\Pages;

use Filament\Pages\Page;
use Illuminate\Support\Facades\Auth;
use Packages\SocialProof\Models\Site;
use Packages\SocialProof\Models\Template;
// Imports obligatoires pour Filament 4
use UnitEnum;
use BackedEnum;

class WidgetBuilder extends Page
{
    // Type BackedEnum obligatoire
    protected static BackedEnum|string|null $navigationIcon = 'heroicon-o-wrench-screwdriver';

    // Type UnitEnum obligatoire (l'origine de votre erreur)
    protected static UnitEnum|string|null $navigationGroup = 'Design'; 

    protected static ?string $navigationLabel = 'Widget Builder';
    
    protected static ?int $navigationSort = 2;

    // Suppression du "static" ici (obligatoire en Filament 4)
    protected string $view = 'socialproof::client.pages.widget-builder';

    // ... le reste de vos méthodes (mount, etc.)
}