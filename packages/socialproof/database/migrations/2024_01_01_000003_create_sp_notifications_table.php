<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sp_notifications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('widget_id')->constrained('sp_widgets')->onDelete('cascade');
            $table->foreignId('event_id')->nullable()->constrained('sp_events')->onDelete('set null');
            $table->string('type', 50);
            $table->string('title', 191);
            $table->text('message');
            $table->string('icon', 50)->nullable();
            $table->json('data')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamp('displayed_at')->nullable();
            $table->timestamp('expires_at')->nullable();
            $table->timestamps();

            $table->index(['widget_id', 'is_active']);
            $table->index(['widget_id', 'created_at']);
            $table->index('expires_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sp_notifications');
    }
};