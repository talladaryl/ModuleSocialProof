<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sp_track_logs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('campaign_id')->nullable();
            $table->string('path', 500); // Réduit pour éviter les problèmes d'index
            $table->binary('ip_binary', 16)->nullable();
            $table->timestamps();

            $table->index('user_id');
            $table->index('ip_binary');
            $table->index('campaign_id');
            
            $table->foreign('campaign_id')->references('campaign_id')->on('sp_campaigns')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sp_track_logs');
    }
};