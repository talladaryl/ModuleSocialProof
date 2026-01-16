<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sp_api_rate_logs', function (Blueprint $table) {
            $table->id('rate_log_id');
            $table->unsignedBigInteger('api_key_id')->nullable();
            $table->unsignedBigInteger('client_id')->nullable();
            $table->string('endpoint');
            $table->string('method', 10);
            $table->string('ip_address', 45);
            $table->unsignedSmallInteger('response_code');
            $table->unsignedInteger('response_time_ms')->nullable();
            $table->boolean('rate_limited')->default(false);
            $table->json('metadata')->nullable();
            $table->timestamps();

            $table->index(['api_key_id', 'created_at']);
            $table->index(['client_id', 'created_at']);
            $table->index(['ip_address', 'created_at']);
            $table->index('rate_limited');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sp_api_rate_logs');
    }
};
