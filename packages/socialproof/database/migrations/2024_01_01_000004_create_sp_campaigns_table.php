<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sp_campaigns', function (Blueprint $table) {
            $table->id()->unique();
            $table->id('campaign_id');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('domain_id')->nullable();
            $table->string('pixel_key', 32)->unique();
            $table->string('name', 191)->default('');
            $table->string('domain', 191)->default(''); // Réduit à 191 pour l'index
            $table->json('branding')->nullable();
            $table->json('email_reports')->nullable();
            $table->datetime('email_reports_last_datetime')->nullable();
            $table->tinyInteger('email_reports_count')->default(0);
            $table->boolean('is_enabled')->default(false);
            $table->datetime('last_datetime')->nullable();
            $table->timestamps();

            $table->index('user_id');
            $table->index('domain');
            $table->index('pixel_key');
            $table->index('domain_id');
            $table->index('email_reports_count');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sp_campaigns');
    }
};