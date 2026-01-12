<?php

use Illuminate\Support\Facades\Route;
use Packages\SocialProof\Http\Controllers\Api\EventController;
use Packages\SocialProof\Http\Controllers\Api\NotificationController;
use Packages\SocialProof\Http\Controllers\Api\WidgetController;

Route::prefix('api/socialproof')
    ->name('socialproof.api.')
    ->middleware(config('socialproof.api.middleware'))
    ->group(function () {
        
        // Widget endpoints
        Route::get('widget/{apiKey}/config', [WidgetController::class, 'config'])
            ->name('widget.config');
        
        // Event tracking endpoints
        Route::post('widget/{apiKey}/events', [EventController::class, 'track'])
            ->name('events.track');
        
        Route::get('widget/{apiKey}/events', [EventController::class, 'index'])
            ->name('events.index');
        
        // Notification endpoints
        Route::get('widget/{apiKey}/notifications', [NotificationController::class, 'index'])
            ->name('notifications');
        
        Route::post('widget/{apiKey}/notifications/{notification}/displayed', [NotificationController::class, 'markDisplayed'])
            ->name('notifications.displayed');
        
        // Stats endpoints
        Route::get('widget/{apiKey}/stats', [WidgetController::class, 'stats'])
            ->name('widget.stats');
    });