<?php

namespace Packages\SocialProof\Filament\Client;

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

// Import des Resources Client
use Packages\SocialProof\Filament\Client\Resources\ClientSiteResource;
use Packages\SocialProof\Filament\Client\Resources\ClientWidgetResource;
use Packages\SocialProof\Filament\Client\Resources\ClientCampaignResource;
use Packages\SocialProof\Filament\Client\Resources\ClientNotificationResource;
use Packages\SocialProof\Filament\Client\Resources\ClientDisplayRuleResource;
use Packages\SocialProof\Filament\Client\Resources\ClientTemplateResource;
use Packages\SocialProof\Filament\Client\Resources\ClientEventResource;
use Packages\SocialProof\Filament\Client\Resources\ClientTrackNotificationResource;
use Packages\SocialProof\Filament\Client\Resources\ClientConversionResource;
use Packages\SocialProof\Filament\Client\Resources\ClientApiKeyResource;
use Packages\SocialProof\Filament\Client\Resources\ClientTeamMemberResource;
use Packages\SocialProof\Filament\Client\Resources\ClientSubscriptionResource;

// Import des Pages Client
use Packages\SocialProof\Filament\Client\Pages\ClientDashboard;
use Packages\SocialProof\Filament\Client\Pages\ClientSettings;
use Packages\SocialProof\Filament\Client\Pages\ClientBilling;
use Packages\SocialProof\Filament\Client\Pages\ClientAnalytics;
use Packages\SocialProof\Filament\Client\Pages\WidgetBuilder;

// Import des Middlewares
use Packages\SocialProof\Http\Middleware\ClientTenantMiddleware;

class ClientPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->id('client')
            ->path('client')
            ->login()
            ->authGuard('client')
            ->colors([
                'primary' => Color::Indigo,
                'success' => Color::Green,
                'warning' => Color::Orange,
                'danger' => Color::Red,
            ])
            ->resources([
                // Core Resources
                ClientSiteResource::class,
                ClientWidgetResource::class,
                ClientCampaignResource::class,
                ClientNotificationResource::class,
                ClientTemplateResource::class,
                ClientDisplayRuleResource::class,
                
                // Tracking & Events
                ClientEventResource::class,
                ClientConversionResource::class,
                ClientTrackNotificationResource::class,
                
                // Management
                ClientApiKeyResource::class,
                ClientTeamMemberResource::class,
                ClientSubscriptionResource::class,
            ])
            ->pages([
                ClientDashboard::class,
                ClientAnalytics::class,
                WidgetBuilder::class,
                ClientSettings::class,
                ClientBilling::class,
            ])
            ->discoverWidgets(in: __DIR__.'/Client/Widgets', for: 'Packages\\SocialProof\\Filament\\Client\\Widgets')
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
                ClientTenantMiddleware::class,
            ])
            ->brandName('SocialProof Dashboard')
            ->brandLogo(fn () => auth('client')->user()?->settings['logo'] ?? null)
            ->favicon('/favicon.ico')
            ->navigationGroups([
                'Dashboard' => [
                    'sort' => 1,
                    'icon' => 'heroicon-o-home',
                ],
                'Social Proof' => [
                    'sort' => 2,
                    'icon' => 'heroicon-o-megaphone',
                ],
                'Tracking' => [
                    'sort' => 3,
                    'icon' => 'heroicon-o-chart-bar',
                ],
                'Management' => [
                    'sort' => 4,
                    'icon' => 'heroicon-o-cog-6-tooth',
                ],
                'Account' => [
                    'sort' => 5,
                    'icon' => 'heroicon-o-user-circle',
                ],
            ])
            ->sidebarCollapsibleOnDesktop()
            ->maxContentWidth('full');
    }
}