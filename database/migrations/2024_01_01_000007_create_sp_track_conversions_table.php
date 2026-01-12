<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sp_track_conversions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('notification_id');
            $table->enum('type', ['webhook', 'auto_capture', 'collector', 'imported'])->nullable();
            $table->longText('data');
            $table->text('url')->nullable(); // Changé de string(2048) à text
            $table->string('page_title', 64)->nullable();
            $table->text('location')->nullable(); // Changé de string(512) à text
            $table->timestamps();

            $table->index('notification_id');
            $table->index('created_at');
            $table->index(['user_id', 'created_at']);
            
            $table->foreign('notification_id')->references('notification_id')->on('sp_notifications_extended')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sp_track_conversions');
    }
};