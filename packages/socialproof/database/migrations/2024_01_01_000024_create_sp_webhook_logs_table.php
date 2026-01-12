<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sp_webhook_logs', function (Blueprint $table) {
            $table->id('webhook_log_id');
            $table->unsignedBigInteger('client_id')->nullable();
            $table->unsignedBigInteger('handler_id')->nullable();
            $table->string('url');
            $table->string('method', 10)->default('POST');
            $table->json('headers')->nullable();
            $table->json('payload')->nullable();
            $table->unsignedSmallInteger('response_code')->nullable();
            $table->text('response_body')->nullable();
            $table->unsignedInteger('response_time_ms')->nullable();
            $table->string('status', 20)->default('pending'); // pending, success, failed, retrying
            $table->unsignedTinyInteger('attempts')->default(0);
            $table->timestamp('next_retry_at')->nullable();
            $table->text('error_message')->nullable();
            $table->timestamps();

            $table->index(['client_id', 'created_at']);
            $table->index('status');
            $table->index('handler_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sp_webhook_logs');
    }
};
