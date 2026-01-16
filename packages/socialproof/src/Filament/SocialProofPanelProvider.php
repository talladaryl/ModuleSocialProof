<?php

namespace Packages\SocialProof\Filament;

use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Pages;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Filament\Widgets;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\AuthenticateSession;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;

// Import des Resources
use Packages\SocialProof\Filament\Resources\TeamResource;
use Packages\SocialProof\Filament\Resources\PlanResource;
use Packages\SocialProof\Filament\Resources\ClientResource;
use Packages\SocialProof\Filament\Resources\CampaignResource;
use Packages\SocialProof\Filament\Resources\NotificationExtendedResource;
use Packages\SocialProof\Filament\Resources\WidgetResource;

class SocialProofPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->id('socialproof')
            ->path('socialproof-admin')
            ->login()
            ->databaseNotifications(false)
            ->colors([
                'primary' => Color::Blue,
            ])
            ->resources([
                // SaaS Management
                TeamResource::class,
                PlanResource::class,
                ClientResource::class,
                
                // Social Proof
                CampaignResource::class,
                NotificationExtendedResource::class,
                WidgetResource::class,
            ])
            ->discoverResources(in: __DIR__.'/Resources', for: 'Packages\\SocialProof\\Filament\\Resources')
            ->discoverPages(in: __DIR__.'/Pages', for: 'Packages\\SocialProof\\Filament\\Pages')
            ->discoverWidgets(in: __DIR__.'/Widgets', for: 'Packages\\SocialProof\\Filament\\Widgets')
            ->pages([
                Pages\Dashboard::class,
            ])
            ->widgets([
                Widgets\AccountWidget::class,
                Widgets\FilamentInfoWidget::class,
            ])
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ])
            ->brandName('SocialProof Admin')
            ->favicon('/favicon.ico');
    }
}