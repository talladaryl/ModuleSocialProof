<?php

namespace Packages\SocialProof\Filament;

use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Filament\Navigation\NavigationGroup;
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

// Import des Widgets Client
use Packages\SocialProof\Filament\Client\Widgets\ClientStatsWidget;
use Packages\SocialProof\Filament\Client\Widgets\ClientQuotaWidget;
use Packages\SocialProof\Filament\Client\Widgets\ClientConversionsChartWidget;
use Packages\SocialProof\Filament\Client\Widgets\ClientRecentEventsWidget;

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
                'info' => Color::Sky,
            ])
            ->resources([
                // Core Resources - Social Proof
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
            ->widgets([
                ClientStatsWidget::class,
                ClientQuotaWidget::class,
                ClientConversionsChartWidget::class,
                ClientRecentEventsWidget::class,
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
                ClientTenantMiddleware::class,
            ])
            ->brandName('SocialProof')
            ->brandLogo(fn () => auth('client')->user()?->settings['logo'] ?? null)
            ->favicon('/favicon.ico')
            ->topNavigation()
            ->navigationGroups([
                NavigationGroup::make()
                    ->label('Dashboard'),
                NavigationGroup::make()
                    ->label('Social Proof'),
                NavigationGroup::make()
                    ->label('Design'),
                NavigationGroup::make()
                    ->label('Tracking'),
                NavigationGroup::make()
                    ->label('Management'),
                NavigationGroup::make()
                    ->label('Account'),
            ])
            ->maxContentWidth('full')
            ->databaseNotifications()
            ->databaseNotificationsPolling('30s');
    }
}
