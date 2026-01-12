<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Social Proof Configuration
    |--------------------------------------------------------------------------
    */

    'enabled' => env('SOCIALPROOF_ENABLED', true),

    /*
    |--------------------------------------------------------------------------
    | Database Configuration
    |--------------------------------------------------------------------------
    */
    'database' => [
        'connection' => env('SOCIALPROOF_DB_CONNECTION', config('database.default')),
        'prefix' => env('SOCIALPROOF_DB_PREFIX', 'sp_'),
    ],

    /*
    |--------------------------------------------------------------------------
    | Event Engine Configuration
    |--------------------------------------------------------------------------
    */
    'events' => [
        'enabled' => true,
        'queue' => env('SOCIALPROOF_QUEUE', 'default'),
        'retention_days' => env('SOCIALPROOF_RETENTION_DAYS', 30),
    ],

    /*
    |--------------------------------------------------------------------------
    | Widget Configuration
    |--------------------------------------------------------------------------
    */
    'widget' => [
        'default_position' => 'bottom-left',
        'default_theme' => 'modern',
        'animation_duration' => 5000,
        'display_duration' => 4000,
        'max_notifications' => 5,
    ],

    /*
    |--------------------------------------------------------------------------
    | Notification Types
    |--------------------------------------------------------------------------
    */
    'notification_types' => [
        'purchase' => [
            'enabled' => true,
            'template' => '{customer} just purchased {product}',
            'icon' => 'shopping-cart',
        ],
        'signup' => [
            'enabled' => true,
            'template' => '{customer} just signed up',
            'icon' => 'user-plus',
        ],
        'review' => [
            'enabled' => true,
            'template' => '{customer} left a {rating}-star review',
            'icon' => 'star',
        ],
        'visit' => [
            'enabled' => true,
            'template' => '{count} people are viewing this page',
            'icon' => 'eye',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Broadcasting Configuration
    |--------------------------------------------------------------------------
    */
    'broadcasting' => [
        'enabled' => env('SOCIALPROOF_BROADCASTING_ENABLED', false),
        'channel_prefix' => 'socialproof',
    ],

    /*
    |--------------------------------------------------------------------------
    | API Configuration
    |--------------------------------------------------------------------------
    */
    'api' => [
        'rate_limit' => env('SOCIALPROOF_API_RATE_LIMIT', '60,1'),
        'middleware' => ['api', 'throttle:socialproof'],
    ],
];