<?php

namespace App\Providers;

use App\Notifications\DatabaseChannel;
use Illuminate\Notifications\Channels\DatabaseChannel as BaseDatabaseChannel;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton(BaseDatabaseChannel::class, DatabaseChannel::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Fix pour MySQL avec utf8mb4 - limite la longueur des index à 191 caractères
        Schema::defaultStringLength(191);
    }
}
