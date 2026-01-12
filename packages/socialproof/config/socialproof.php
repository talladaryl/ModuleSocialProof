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
    | Pixel Configuration
    |--------------------------------------------------------------------------
    */
    'pixel' => [
        'cache_duration' => env('SOCIALPROOF_PIXEL_CACHE', 3600), // 1 hour
        'bot_detection' => env('SOCIALPROOF_BOT_DETECTION', true),
        'ip_exclusion' => env('SOCIALPROOF_IP_EXCLUSION', true),
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
        'INFORMATIONAL' => [
            'enabled' => true,
            'name' => 'Informational',
            'description' => 'Display informational messages',
            'icon' => 'info-circle',
            'category' => 'basic',
        ],
        'INFORMATIONAL_MINI' => [
            'enabled' => true,
            'name' => 'Informational Mini',
            'description' => 'Compact informational messages',
            'icon' => 'info',
            'category' => 'basic',
        ],
        'COUPON' => [
            'enabled' => true,
            'name' => 'Coupon',
            'description' => 'Display coupon codes',
            'icon' => 'tag',
            'category' => 'marketing',
        ],
        'LIVE_COUNTER' => [
            'enabled' => true,
            'name' => 'Live Counter',
            'description' => 'Show live visitor count',
            'icon' => 'users',
            'category' => 'social_proof',
        ],
        'EMAIL_COLLECTOR' => [
            'enabled' => true,
            'name' => 'Email Collector',
            'description' => 'Collect email addresses',
            'icon' => 'envelope',
            'category' => 'lead_generation',
        ],
        'CONVERSIONS' => [
            'enabled' => true,
            'name' => 'Conversions',
            'description' => 'Show recent conversions',
            'icon' => 'shopping-cart',
            'category' => 'social_proof',
        ],
        'CONVERSIONS_COUNTER' => [
            'enabled' => true,
            'name' => 'Conversions Counter',
            'description' => 'Display conversion count',
            'icon' => 'chart-bar',
            'category' => 'social_proof',
        ],
        'REVIEWS' => [
            'enabled' => true,
            'name' => 'Reviews',
            'description' => 'Display customer reviews',
            'icon' => 'star',
            'category' => 'social_proof',
        ],
        'VIDEO' => [
            'enabled' => true,
            'name' => 'Video',
            'description' => 'Embed video content',
            'icon' => 'play-circle',
            'category' => 'media',
        ],
        'AUDIO' => [
            'enabled' => true,
            'name' => 'Audio',
            'description' => 'Play audio notifications',
            'icon' => 'volume-up',
            'category' => 'media',
        ],
        'SOCIAL_SHARE' => [
            'enabled' => true,
            'name' => 'Social Share',
            'description' => 'Social sharing buttons',
            'icon' => 'share-alt',
            'category' => 'social',
        ],
        'EMOJI_FEEDBACK' => [
            'enabled' => true,
            'name' => 'Emoji Feedback',
            'description' => 'Collect emoji feedback',
            'icon' => 'smile',
            'category' => 'feedback',
        ],
        'SCORE_FEEDBACK' => [
            'enabled' => true,
            'name' => 'Score Feedback',
            'description' => 'Collect numeric ratings',
            'icon' => 'star-half-alt',
            'category' => 'feedback',
        ],
        'TEXT_FEEDBACK' => [
            'enabled' => true,
            'name' => 'Text Feedback',
            'description' => 'Collect text feedback',
            'icon' => 'comment',
            'category' => 'feedback',
        ],
        'COOKIE_NOTIFICATION' => [
            'enabled' => true,
            'name' => 'Cookie Notification',
            'description' => 'Cookie consent notices',
            'icon' => 'cookie-bite',
            'category' => 'compliance',
        ],
        'CUSTOM_HTML' => [
            'enabled' => true,
            'name' => 'Custom HTML',
            'description' => 'Custom HTML content',
            'icon' => 'code',
            'category' => 'advanced',
        ],
        'CONTACT_US' => [
            'enabled' => true,
            'name' => 'Contact Us',
            'description' => 'Contact information widget',
            'icon' => 'phone',
            'category' => 'contact',
        ],
        'WHATSAPP_CHAT' => [
            'enabled' => true,
            'name' => 'WhatsApp Chat',
            'description' => 'WhatsApp chat integration',
            'icon' => 'whatsapp',
            'category' => 'contact',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Display Positions
    |--------------------------------------------------------------------------
    */
    'positions' => [
        'top_left' => 'Top Left',
        'top_center' => 'Top Center',
        'top_right' => 'Top Right',
        'middle_left' => 'Middle Left',
        'middle_center' => 'Middle Center',
        'middle_right' => 'Middle Right',
        'bottom_left' => 'Bottom Left',
        'bottom_center' => 'Bottom Center',
        'bottom_right' => 'Bottom Right',
        'top' => 'Top Bar',
        'bottom' => 'Bottom Bar',
        'top_floating' => 'Top Floating',
        'bottom_floating' => 'Bottom Floating',
    ],

    /*
    |--------------------------------------------------------------------------
    | Trigger Types
    |--------------------------------------------------------------------------
    */
    'triggers' => [
        'delay' => 'Time Delay',
        'time_on_site' => 'Time on Site',
        'pageviews' => 'Page Views',
        'inactivity' => 'Inactivity',
        'exit_intent' => 'Exit Intent',
        'scroll' => 'Scroll Percentage',
        'click' => 'Element Click',
        'hover' => 'Element Hover',
    ],

    /*
    |--------------------------------------------------------------------------
    | Display Frequencies
    |--------------------------------------------------------------------------
    */
    'frequencies' => [
        'all_time' => 'Every Time',
        'once_per_session' => 'Once per Session',
        'once_per_browser' => 'Once per Browser',
    ],

    /*
    |--------------------------------------------------------------------------
    | Animations
    |--------------------------------------------------------------------------
    */
    'animations' => [
        'on' => [
            'fadeIn' => 'Fade In',
            'slideInUp' => 'Slide In Up',
            'slideInDown' => 'Slide In Down',
            'zoomIn' => 'Zoom In',
            'bounceIn' => 'Bounce In',
        ],
        'off' => [
            'fadeOut' => 'Fade Out',
            'slideOutUp' => 'Slide Out Up',
            'slideOutDown' => 'Slide Out Down',
            'zoomOut' => 'Zoom Out',
            'bounceOut' => 'Bounce Out',
        ],
        'hover' => [
            '' => 'None',
            'fast_scale_up' => 'Fast Scale Up',
            'slow_scale_up' => 'Slow Scale Up',
            'fast_scale_down' => 'Fast Scale Down',
            'slow_scale_down' => 'Slow Scale Down',
        ],
        'continuous' => [
            '' => 'None',
            'heartbeat' => 'Heartbeat',
            'bounce' => 'Bounce',
            'flash' => 'Flash',
            'pulse' => 'Pulse',
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

    /*
    |--------------------------------------------------------------------------
    | File Upload Configuration
    |--------------------------------------------------------------------------
    */
    'uploads' => [
        'max_size' => env('SOCIALPROOF_MAX_UPLOAD_SIZE', 2048), // KB
        'allowed_types' => ['jpg', 'jpeg', 'png', 'gif', 'webp'],
        'path' => 'socialproof/uploads',
    ],

    /*
    |--------------------------------------------------------------------------
    | Tracking Configuration
    |--------------------------------------------------------------------------
    */
    'tracking' => [
        'enabled' => env('SOCIALPROOF_TRACKING_ENABLED', true),
        'anonymize_ip' => env('SOCIALPROOF_ANONYMIZE_IP', true),
        'retention_days' => env('SOCIALPROOF_TRACKING_RETENTION', 90),
    ],
];