<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sp_plans', function (Blueprint $table) {
            $table->id('plan_id');
            $table->string('name', 100);
            $table->string('slug', 100)->unique();
            $table->text('description')->nullable();
            $table->decimal('price_monthly', 10, 2)->default(0);
            $table->decimal('price_yearly', 10, 2)->default(0);
            $table->string('currency', 3)->default('USD');
            $table->integer('trial_days')->default(0);
            
            // Limites du plan
            $table->integer('max_sites')->default(1);
            $table->integer('max_widgets')->default(5);
            $table->integer('max_notifications')->default(10);
            $table->bigInteger('max_monthly_events')->default(10000);
            $table->integer('max_team_members')->default(1);
            $table->integer('max_api_keys')->default(3);
            
            // Fonctionnalités
            $table->json('features')->nullable(); // Analytics, Custom CSS, API Access, etc.
            $table->json('notification_types')->nullable(); // Types de notifications autorisés
            
            // Configuration
            $table->boolean('is_popular')->default(false);
            $table->boolean('is_active')->default(true);
            $table->integer('sort_order')->default(0);
            $table->json('metadata')->nullable();
            
            $table->timestamps();
            $table->softDeletes();

            $table->index(['is_active', 'sort_order']);
            $table->index('slug');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sp_plans');
    }
};