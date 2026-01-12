<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sp_notifications_extended', function (Blueprint $table) {
            $table->id('notification_id');
            $table->unsignedBigInteger('campaign_id');
            $table->unsignedBigInteger('user_id');
            $table->string('name', 256)->default('');
            $table->string('type', 64)->default('');
            $table->longText('settings');
            $table->text('notifications')->nullable();
            $table->datetime('last_action_date')->nullable();
            $table->string('notification_key', 32)->default('');
            $table->unsignedBigInteger('impressions')->default(0);
            $table->unsignedBigInteger('hovers')->default(0);
            $table->unsignedBigInteger('clicks')->default(0);
            $table->unsignedBigInteger('form_submissions')->default(0);
            $table->boolean('is_enabled')->default(false);
            $table->datetime('last_datetime')->nullable();
            $table->timestamps();

            $table->index('campaign_id');
            $table->index('user_id');
            $table->index('notification_key');
            $table->index(['type', 'is_enabled']);
            
            $table->foreign('campaign_id')->references('campaign_id')->on('sp_campaigns')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sp_notifications_extended');
    }
};