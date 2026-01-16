<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sp_events', function (Blueprint $table) {
            $table->id();
            $table->foreignId('widget_id')->constrained('sp_widgets')->onDelete('cascade');
            $table->string('type', 50);
            $table->json('data')->nullable();
            $table->string('customer_name', 191)->nullable();
            $table->string('customer_email', 191)->nullable();
            $table->string('customer_location', 191)->nullable();
            $table->ipAddress('ip_address')->nullable();
            $table->text('user_agent')->nullable();
            $table->timestamp('processed_at')->nullable();
            $table->timestamps();

            $table->index(['widget_id', 'type']);
            $table->index(['widget_id', 'created_at']);
            $table->index('processed_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sp_events');
    }
};