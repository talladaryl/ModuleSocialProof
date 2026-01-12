<?php

use App\Http\Controllers\SocialProofExampleController;
use Illuminate\Support\Facades\Route;

/**
 * Routes d'exemple pour l'utilisation du package SocialProof
 * Ces routes montrent comment intégrer le package dans votre application
 */

Route::prefix('examples/socialproof')
    ->name('examples.socialproof.')
    ->group(function () {
        
        // Exemples d'API pour tracker les événements
        Route::post('track/purchase', [SocialProofExampleController::class, 'trackPurchase'])
            ->name('track.purchase');
        
        Route::post('track/signup', [SocialProofExampleController::class, 'trackSignup'])
            ->name('track.signup');
        
        Route::post('track/review', [SocialProofExampleController::class, 'trackReview'])
            ->name('track.review');
    });