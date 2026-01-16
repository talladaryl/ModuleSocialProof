<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sp_teams', function (Blueprint $table) {
            $table->id('team_id');
            $table->unsignedBigInteger('client_id'); // Propriétaire de l'équipe
            $table->unsignedBigInteger('plan_id')->nullable();
            $table->string('name', 191);
            $table->string('slug', 191)->unique();
            $table->text('description')->nullable();
            
            // Configuration de l'équipe
            $table->json('settings')->nullable(); // Paramètres spécifiques à l'équipe
            $table->integer('max_members')->default(10);
            
            // Subscription info
            $table->timestamp('subscription_ends_at')->nullable();
            $table->timestamp('trial_ends_at')->nullable();
            
            // Status
            $table->boolean('is_active')->default(true);
            
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('client_id')->references('client_id')->on('sp_clients')->onDelete('cascade');
            $table->foreign('plan_id')->references('plan_id')->on('sp_plans')->onDelete('set null');
            
            $table->index(['client_id', 'is_active']);
            $table->index('slug');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sp_teams');
    }
};