<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        // Insérer les plans par défaut
        DB::table('sp_plans')->insert([
            [
                'name' => 'Free',
                'slug' => 'free',
                'description' => 'Perfect for getting started with social proof',
                'price_monthly' => 0.00,
                'price_yearly' => 0.00,
                'currency' => 'USD',
                'trial_days' => 0,
                'max_sites' => 1,
                'max_widgets' => 2,
                'max_notifications' => 5,
                'max_monthly_events' => 1000,
                'max_team_members' => 1,
                'max_api_keys' => 1,
                'features' => json_encode([
                    'basic_analytics' => true,
                    'custom_css' => false,
                    'api_access' => false,
                    'priority_support' => false,
                    'white_label' => false
                ]),
                'notification_types' => json_encode([
                    'INFORMATIONAL', 'LIVE_COUNTER'
                ]),
                'is_popular' => false,
                'is_active' => true,
                'sort_order' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Starter',
                'slug' => 'starter',
                'description' => 'Great for small businesses and growing websites',
                'price_monthly' => 19.00,
                'price_yearly' => 190.00,
                'currency' => 'USD',
                'trial_days' => 14,
                'max_sites' => 3,
                'max_widgets' => 10,
                'max_notifications' => 25,
                'max_monthly_events' => 10000,
                'max_team_members' => 3,
                'max_api_keys' => 5,
                'features' => json_encode([
                    'basic_analytics' => true,
                    'advanced_analytics' => true,
                    'custom_css' => true,
                    'api_access' => true,
                    'priority_support' => false,
                    'white_label' => false
                ]),
                'notification_types' => json_encode([
                    'INFORMATIONAL', 'COUPON', 'LIVE_COUNTER', 'EMAIL_COLLECTOR', 'CONVERSIONS'
                ]),
                'is_popular' => true,
                'is_active' => true,
                'sort_order' => 2,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Professional',
                'slug' => 'professional',
                'description' => 'Perfect for agencies and high-traffic websites',
                'price_monthly' => 49.00,
                'price_yearly' => 490.00,
                'currency' => 'USD',
                'trial_days' => 14,
                'max_sites' => 10,
                'max_widgets' => 50,
                'max_notifications' => 100,
                'max_monthly_events' => 100000,
                'max_team_members' => 10,
                'max_api_keys' => 20,
                'features' => json_encode([
                    'basic_analytics' => true,
                    'advanced_analytics' => true,
                    'custom_css' => true,
                    'api_access' => true,
                    'priority_support' => true,
                    'white_label' => true,
                    'a_b_testing' => true,
                    'advanced_targeting' => true
                ]),
                'notification_types' => json_encode([
                    'INFORMATIONAL', 'COUPON', 'LIVE_COUNTER', 'EMAIL_COLLECTOR', 
                    'CONVERSIONS', 'REVIEWS', 'VIDEO', 'CUSTOM_HTML'
                ]),
                'is_popular' => false,
                'is_active' => true,
                'sort_order' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Enterprise',
                'slug' => 'enterprise',
                'description' => 'Custom solution for large organizations',
                'price_monthly' => 199.00,
                'price_yearly' => 1990.00,
                'currency' => 'USD',
                'trial_days' => 30,
                'max_sites' => -1, // Illimité
                'max_widgets' => -1,
                'max_notifications' => -1,
                'max_monthly_events' => -1,
                'max_team_members' => -1,
                'max_api_keys' => -1,
                'features' => json_encode([
                    'basic_analytics' => true,
                    'advanced_analytics' => true,
                    'custom_css' => true,
                    'api_access' => true,
                    'priority_support' => true,
                    'white_label' => true,
                    'a_b_testing' => true,
                    'advanced_targeting' => true,
                    'custom_integrations' => true,
                    'dedicated_support' => true,
                    'sla_guarantee' => true
                ]),
                'notification_types' => json_encode('all'), // Tous les types
                'is_popular' => false,
                'is_active' => true,
                'sort_order' => 4,
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);

        // Insérer des templates par défaut
        DB::table('sp_templates')->insert([
            [
                'name' => 'Minimal Toast',
                'slug' => 'minimal-toast',
                'description' => 'Clean and minimal toast notification',
                'category' => 'toast',
                'notification_type' => 'INFORMATIONAL',
                'design_config' => json_encode([
                    'background_color' => '#ffffff',
                    'text_color' => '#333333',
                    'border_radius' => '8px',
                    'shadow' => 'subtle',
                    'font_family' => 'system'
                ]),
                'layout_config' => json_encode([
                    'width' => '320px',
                    'padding' => '16px',
                    'position' => 'bottom_right',
                    'animation_in' => 'slideInUp',
                    'animation_out' => 'slideOutDown'
                ]),
                'visibility' => 'system',
                'status' => 'active',
                'is_featured' => true,
                'sort_order' => 1,
                'version' => '1.0.0',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Modern Card',
                'slug' => 'modern-card',
                'description' => 'Modern card-style notification with image support',
                'category' => 'card',
                'notification_type' => 'CONVERSIONS',
                'design_config' => json_encode([
                    'background_color' => '#ffffff',
                    'text_color' => '#333333',
                    'border_radius' => '12px',
                    'shadow' => '3d',
                    'font_family' => 'system'
                ]),
                'layout_config' => json_encode([
                    'width' => '380px',
                    'padding' => '20px',
                    'position' => 'bottom_left',
                    'animation_in' => 'fadeIn',
                    'animation_out' => 'fadeOut'
                ]),
                'visibility' => 'system',
                'status' => 'active',
                'is_featured' => true,
                'sort_order' => 2,
                'version' => '1.0.0',
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);
    }

    public function down(): void
    {
        DB::table('sp_templates')->where('visibility', 'system')->delete();
        DB::table('sp_plans')->whereIn('slug', ['free', 'starter', 'professional', 'enterprise'])->delete();
    }
};