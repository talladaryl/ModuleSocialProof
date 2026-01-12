<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sp_track_notifications', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->unsignedBigInteger('campaign_id')->nullable();
            $table->unsignedBigInteger('notification_id');
            $table->enum('type', [
                'hover', 
                'impression', 
                'click', 
                'form_submission',
                'feedback_emoji_angry',
                'feedback_emoji_sad',
                'feedback_emoji_neutral',
                'feedback_emoji_happy',
                'feedback_emoji_excited',
                'feedback_score_1',
                'feedback_score_2',
                'feedback_score_3',
                'feedback_score_4',
                'feedback_score_5'
            ])->nullable();
            $table->string('path', 500); // Réduit pour éviter les problèmes d'index
            $table->timestamps();

            $table->index('notification_id');
            $table->index('created_at');
            $table->index('campaign_id');
            $table->index('user_id');
            $table->index(['user_id', 'created_at']);
            
            $table->foreign('campaign_id')->references('campaign_id')->on('sp_campaigns')->onDelete('cascade');
            $table->foreign('notification_id')->references('notification_id')->on('sp_notifications_extended')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sp_track_notifications');
    }
};