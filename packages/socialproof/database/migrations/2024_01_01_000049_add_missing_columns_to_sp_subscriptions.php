<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('sp_subscriptions', function (Blueprint $table) {
            // Ajouter payment_method après currency
            if (!Schema::hasColumn('sp_subscriptions', 'payment_method')) {
                $table->string('payment_method', 50)->nullable()->after('currency');
            }
            
            // Ajouter provider_subscription_id après payment_provider_id
            if (!Schema::hasColumn('sp_subscriptions', 'provider_subscription_id')) {
                $table->string('provider_subscription_id', 191)->nullable()->after('payment_provider_id');
            }
            
            // Ajouter provider_customer_id après provider_subscription_id
            if (!Schema::hasColumn('sp_subscriptions', 'provider_customer_id')) {
                $table->string('provider_customer_id', 191)->nullable()->after('provider_subscription_id');
            }
            
            // Ajouter last_payment_at après canceled_at
            if (!Schema::hasColumn('sp_subscriptions', 'last_payment_at')) {
                $table->timestamp('last_payment_at')->nullable()->after('canceled_at');
            }
            
            // Ajouter next_payment_at après last_payment_at
            if (!Schema::hasColumn('sp_subscriptions', 'next_payment_at')) {
                $table->timestamp('next_payment_at')->nullable()->after('last_payment_at');
            }
        });
    }

    public function down(): void
    {
        Schema::table('sp_subscriptions', function (Blueprint $table) {
            $columns = [
                'payment_method',
                'provider_subscription_id',
                'provider_customer_id',
                'last_payment_at',
                'next_payment_at'
            ];
            
            foreach ($columns as $column) {
                if (Schema::hasColumn('sp_subscriptions', $column)) {
                    $table->dropColumn($column);
                }
            }
        });
    }
};
