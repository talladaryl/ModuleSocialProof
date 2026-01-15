<?php

namespace Packages\SocialProof;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Gate;
use Packages\SocialProof\Console\Commands\InstallSocialProofCommand;
use Packages\SocialProof\Console\Commands\GenerateStatsCommand;
use Packages\SocialProof\Filament\SocialProofPanelProvider;
use Packages\SocialProof\Filament\Admin\AdminPanelProvider;
use Packages\SocialProof\Filament\ClientPanelProvider;
use Packages\SocialProof\Services\EventEngine;
use Packages\SocialProof\Services\NotificationService;
use Packages\SocialProof\Services\WidgetService;
use Packages\SocialProof\Services\CampaignService;
use Packages\SocialProof\Services\NotificationExtendedService;
use Packages\SocialProof\Services\PixelService;
use Packages\SocialProof\Services\TrackingService;
use Packages\SocialProof\Services\NotificationHandlerService;
use Packages\SocialProof\Models\Campaign;
use Packages\SocialProof\Models\NotificationExtended;
use Packages\SocialProof\Models\Domain;
use Packages\SocialProof\Models\NotificationHandler;
use Packages\SocialProof\Policies\CampaignPolicy;
use Packages\SocialProof\Policies\NotificationExtendedPolicy;
use Packages\SocialProof\Policies\DomainPolicy;
use Packages\SocialProof\Policies\NotificationHandlerPolicy;

class SocialProofServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        // Merge package config
        $this->mergeConfigFrom(__DIR__.'/../config/socialproof.php', 'socialproof');

        // Register Filament Panel Providers
        $this->app->register(SocialProofPanelProvider::class);
        $this->app->register(AdminPanelProvider::class);
        $this->app->register(ClientPanelProvider::class);
        

        // Register services
        $this->app->singleton(EventEngine::class);
        $this->app->singleton(NotificationService::class);
        $this->app->singleton(WidgetService::class);
        $this->app->singleton(CampaignService::class);
        $this->app->singleton(NotificationExtendedService::class);
        $this->app->singleton(PixelService::class);
        $this->app->singleton(TrackingService::class);
        $this->app->singleton(NotificationHandlerService::class);

        // Register commands
        if ($this->app->runningInConsole()) {
            $this->commands([
                InstallSocialProofCommand::class,
                GenerateStatsCommand::class,
            ]);
        }
    }

    public function boot(): void
    {
        // Fix MySQL string length issue
        Schema::defaultStringLength(191);
        
        // Load routes
        $this->loadRoutesFrom(__DIR__.'/../routes/api.php');
        $this->loadRoutesFrom(__DIR__.'/../routes/web.php');

        // Load migrations
        $this->loadMigrationsFrom(__DIR__.'/../database/migrations');

        // Load views
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'socialproof');

        // Register policies
        $this->registerPolicies();

        // Publish assets
        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__.'/../config/socialproof.php' => config_path('socialproof.php'),
            ], 'socialproof-config');

            $this->publishes([
                __DIR__.'/../database/migrations' => database_path('migrations'),
            ], 'socialproof-migrations');

            $this->publishes([
                __DIR__.'/../resources/views' => resource_path('views/vendor/socialproof'),
            ], 'socialproof-views');

            $this->publishes([
                __DIR__.'/../public' => public_path('vendor/socialproof'),
            ], 'socialproof-assets');
        }
    }

    protected function registerPolicies(): void
    {
        Gate::policy(Campaign::class, CampaignPolicy::class);
        Gate::policy(NotificationExtended::class, NotificationExtendedPolicy::class);
        Gate::policy(Domain::class, DomainPolicy::class);
        Gate::policy(NotificationHandler::class, NotificationHandlerPolicy::class);
    }
}