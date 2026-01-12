<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sp_notification_handlers', function (Blueprint $table) {
            $table->id('notification_handler_id');
            $table->unsignedBigInteger('user_id')->nullable();
            $table->string('type', 32)->nullable();
            $table->string('name', 128)->nullable();
            $table->text('settings')->nullable();
            $table->boolean('is_enabled')->default(true);
            $table->datetime('last_datetime')->nullable();
            $table->timestamps();

            $table->index('user_id');
            $table->index(['type', 'is_enabled']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sp_notification_handlers');
    }
};