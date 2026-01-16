<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sp_quotas_usage', function (Blueprint $table) {
            $table->id('usage_id');
            $table->unsignedBigInteger('client_id');
            $table->string('quota_type', 50); // events, notifications, widgets, sites, api_calls
            $table->unsignedInteger('used')->default(0);
            $table->unsignedInteger('limit')->default(0);
            $table->date('period_start');
            $table->date('period_end');
            $table->timestamps();

            $table->unique(['client_id', 'quota_type', 'period_start']);
            $table->index(['client_id', 'period_start']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sp_quotas_usage');
    }
};
