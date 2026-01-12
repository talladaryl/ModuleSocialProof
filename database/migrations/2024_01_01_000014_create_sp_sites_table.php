<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sp_sites', function (Blueprint $table) {
            $table->id('site_id');
            $table->unsignedBigInteger('client_id');
            $table->string('name', 191);
            $table->string('domain', 191);
            $table->text('description')->nullable();
            
            // Configuration du site
            $table->text('favicon_url')->nullable();
            $table->text('logo_url')->nullable();
            $table->json('brand_colors')->nullable(); // primary, secondary, etc.
            $table->string('timezone', 50)->default('UTC');
            $table->string('language', 10)->default('en');
            
            // Paramètres de sécurité
            $table->json('allowed_domains')->nullable(); // Domaines autorisés pour CORS
            $table->json('blocked_ips')->nullable();
            $table->boolean('require_https')->default(true);
            
            // Paramètres d'affichage globaux
            $table->json('global_settings')->nullable(); // CSS global, scripts, etc.
            $table->boolean('enable_analytics')->default(true);
            $table->boolean('enable_gdpr_compliance')->default(true);
            
            // Statistiques
            $table->bigInteger('total_events')->default(0);
            $table->bigInteger('monthly_events')->default(0);
            $table->timestamp('last_event_at')->nullable();
            $table->timestamp('monthly_reset_at')->nullable();
            
            // Status
            $table->enum('status', ['active', 'inactive', 'suspended'])->default('active');
            $table->text('notes')->nullable();
            
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('client_id')->references('client_id')->on('sp_clients')->onDelete('cascade');
            
            $table->index(['client_id', 'status']);
            $table->index('domain');
            $table->index(['status', 'created_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sp_sites');
    }
};