<?php

namespace Packages\SocialProof\Filament\Admin;

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

class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->id('admin')
            ->path('admin')
            ->login()
            ->databaseNotifications(false)
            ->colors([
                'primary' => Color::Indigo,
                'danger' => Color::Rose,
                'success' => Color::Emerald,
                'warning' => Color::Amber,
                'info' => Color::Sky,
            ])
            ->discoverResources(in: __DIR__.'/Resources', for: 'Packages\\SocialProof\\Filament\\Admin\\Resources')
            ->discoverPages(in: __DIR__.'/Pages', for: 'Packages\\SocialProof\\Filament\\Admin\\Pages')
            ->discoverWidgets(in: __DIR__.'/Widgets', for: 'Packages\\SocialProof\\Filament\\Admin\\Widgets')
            ->pages([
                Pages\AdminDashboard::class,
            ])
            ->widgets([
                Widgets\StatsOverviewWidget::class,
                Widgets\RevenueChartWidget::class,
                Widgets\TopClientsWidget::class,
                Widgets\RecentEventsWidget::class,
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
            ->authGuard('web')
            ->brandName(null)
            ->brandLogo(null)
            ->favicon('/favicon.ico')
            ->sidebarCollapsibleOnDesktop(false)
            ->sidebarFullyCollapsibleOnDesktop(false)
            ->navigationItems([])
            ->navigationGroups([
                NavigationGroup::make()
                    ->label('Dashboard'),
                NavigationGroup::make()
                    ->label('Clients & Abonnements'),
                NavigationGroup::make()
                    ->label('Sites & Teams'),
                NavigationGroup::make()
                    ->label('Social Proof'),
                NavigationGroup::make()
                    ->label('Templates & Règles'),
                NavigationGroup::make()
                    ->label('Tracking & Analytics'),
                NavigationGroup::make()
                    ->label('API & Sécurité'),
                NavigationGroup::make()
                    ->label('Système'),
            ])
            ->renderHook(
                \Filament\View\PanelsRenderHook::BODY_START,
                fn () => view('socialproof::components.floating-vertical-menu'),
            )
            ->renderHook(
                \Filament\View\PanelsRenderHook::HEAD_END,
                fn () => '<style>' . file_get_contents(__DIR__ . '/../../../public/css/filament-custom.css') . '</style>'
            );
    }
}
