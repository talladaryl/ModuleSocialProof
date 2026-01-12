<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sp_subscriptions', function (Blueprint $table) {
            $table->id('subscription_id');
            $table->unsignedBigInteger('client_id');
            $table->unsignedBigInteger('plan_id');
            
            // Informations d'abonnement
            $table->enum('status', ['active', 'canceled', 'expired', 'trial', 'past_due', 'suspended'])->default('trial');
            $table->enum('billing_cycle', ['monthly', 'yearly'])->default('monthly');
            $table->decimal('amount', 10, 2);
            $table->string('currency', 3)->default('USD');
            
            // Dates importantes
            $table->timestamp('trial_starts_at')->nullable();
            $table->timestamp('trial_ends_at')->nullable();
            $table->timestamp('starts_at');
            $table->timestamp('ends_at')->nullable();
            $table->timestamp('canceled_at')->nullable();
            $table->timestamp('next_billing_at')->nullable();
            
            // Intégration paiement
            $table->string('payment_provider', 50)->nullable(); // stripe, paypal, etc.
            $table->string('payment_provider_id', 191)->nullable();
            $table->string('payment_method_id', 191)->nullable();
            $table->json('payment_metadata')->nullable();
            
            // Usage tracking
            $table->bigInteger('current_period_events')->default(0);
            $table->timestamp('usage_reset_at')->nullable();
            
            // Métadonnées
            $table->json('metadata')->nullable();
            $table->text('cancellation_reason')->nullable();
            
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('client_id')->references('client_id')->on('sp_clients')->onDelete('cascade');
            $table->foreign('plan_id')->references('plan_id')->on('sp_plans')->onDelete('restrict');
            
            $table->index(['client_id', 'status']);
            $table->index(['status', 'ends_at']);
            $table->index('payment_provider_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sp_subscriptions');
    }
};