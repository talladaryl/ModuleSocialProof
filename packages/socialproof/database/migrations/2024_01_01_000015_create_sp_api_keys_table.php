<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sp_api_keys', function (Blueprint $table) {
            $table->id('api_key_id');
            $table->unsignedBigInteger('client_id');
            $table->unsignedBigInteger('site_id')->nullable(); // Null = clé globale pour tous les sites
            $table->string('name', 191);
            $table->string('key_hash', 191)->unique(); // Hash de la clé pour sécurité
            $table->string('key_prefix', 20); // Préfixe visible (ex: sp_live_)
            $table->text('description')->nullable();
            
            // Permissions et restrictions
            $table->json('permissions')->nullable(); // read, write, delete, analytics
            $table->json('allowed_ips')->nullable(); // IPs autorisées
            $table->json('allowed_domains')->nullable(); // Domaines autorisés
            $table->integer('rate_limit_per_minute')->default(1000);
            $table->integer('rate_limit_per_hour')->default(10000);
            
            // Usage tracking
            $table->bigInteger('total_requests')->default(0);
            $table->timestamp('last_used_at')->nullable();
            $table->string('last_used_ip', 45)->nullable();
            
            // Expiration et status
            $table->timestamp('expires_at')->nullable();
            $table->enum('status', ['active', 'inactive', 'revoked'])->default('active');
            $table->timestamp('revoked_at')->nullable();
            $table->text('revocation_reason')->nullable();
            
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('client_id')->references('client_id')->on('sp_clients')->onDelete('cascade');
            $table->foreign('site_id')->references('site_id')->on('sp_sites')->onDelete('cascade');
            
            $table->index(['client_id', 'status']);
            $table->index(['site_id', 'status']);
            $table->index('key_hash');
            $table->index(['status', 'expires_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sp_api_keys');
    }
};