<?php

use Illuminate\Support\Facades\Route;
use Packages\SocialProof\Http\Controllers\DashboardController;
use Packages\SocialProof\Http\Controllers\WidgetController;
use Packages\SocialProof\Http\Controllers\CampaignController;
use Packages\SocialProof\Http\Controllers\NotificationExtendedController;
use Packages\SocialProof\Http\Controllers\DomainController;
use Packages\SocialProof\Http\Controllers\NotificationHandlerController;
use Packages\SocialProof\Http\Controllers\PixelController;

Route::prefix('socialproof')
    ->name('socialproof.')
    ->middleware(['web', 'auth'])
    ->group(function () {
        
        // Dashboard
        Route::get('/', [DashboardController::class, 'index'])
            ->name('dashboard');
        
        // Widget management (original)
        Route::resource('widgets', WidgetController::class);
        
        Route::get('widgets/{widget}/script', [WidgetController::class, 'script'])
            ->name('widgets.script');
        
        Route::get('widgets/{widget}/preview', [WidgetController::class, 'preview'])
            ->name('widgets.preview');
        
        Route::post('widgets/{widget}/regenerate-key', [WidgetController::class, 'regenerateKey'])
            ->name('widgets.regenerate-key');

        // Campaign routes
        Route::resource('campaigns', CampaignController::class);
        Route::post('campaigns/{campaign}/duplicate', [CampaignController::class, 'duplicate'])->name('campaigns.duplicate');
        Route::post('campaigns/{campaign}/regenerate-pixel-key', [CampaignController::class, 'regeneratePixelKey'])->name('campaigns.regenerate-pixel-key');
        Route::post('campaigns/bulk-action', [CampaignController::class, 'bulkAction'])->name('campaigns.bulk-action');
        Route::post('campaigns/{campaign}/reset-statistics', [CampaignController::class, 'resetStatistics'])->name('campaigns.reset-statistics');

        // Notification routes
        Route::resource('notifications', NotificationExtendedController::class);
        Route::post('notifications/{notification}/duplicate', [NotificationExtendedController::class, 'duplicate'])->name('notifications.duplicate');
        Route::post('notifications/bulk-action', [NotificationExtendedController::class, 'bulkAction'])->name('notifications.bulk-action');
        Route::post('notifications/{notification}/reset-statistics', [NotificationExtendedController::class, 'resetStatistics'])->name('notifications.reset-statistics');
        Route::post('notifications/{notification}/import-data', [NotificationExtendedController::class, 'importData'])->name('notifications.import-data');
        Route::get('notifications/{notification}/export-data', [NotificationExtendedController::class, 'exportData'])->name('notifications.export-data');

        // Domain routes
        Route::resource('domains', DomainController::class);
        Route::post('domains/bulk-action', [DomainController::class, 'bulkAction'])->name('domains.bulk-action');

        // Notification Handler routes
        Route::resource('notification-handlers', NotificationHandlerController::class);
        Route::post('notification-handlers/{handler}/test', [NotificationHandlerController::class, 'test'])->name('notification-handlers.test');
        Route::post('notification-handlers/bulk-action', [NotificationHandlerController::class, 'bulkAction'])->name('notification-handlers.bulk-action');
    });

// Public pixel routes (no auth required)
Route::prefix('socialproof')->name('socialproof.')->group(function () {
    Route::get('pixel/{pixel_key}', [PixelController::class, 'index'])->name('pixel');
    Route::post('pixel/track', [PixelController::class, 'track'])->name('pixel.track');
    Route::post('pixel/conversion', [PixelController::class, 'conversion'])->name('pixel.conversion');
    Route::post('pixel/{pixel_key}/webhook', [PixelController::class, 'webhook'])->name('pixel.webhook');
});