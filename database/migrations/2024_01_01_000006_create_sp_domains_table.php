<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sp_domains', function (Blueprint $table) {
            $table->id('domain_id');
            $table->unsignedBigInteger('user_id')->nullable();
            $table->string('scheme', 8)->default('');
            $table->string('host', 128)->default('');
            $table->string('custom_index_url', 256)->nullable();
            $table->string('custom_not_found_url', 256)->nullable();
            $table->tinyInteger('type')->default(0);
            $table->boolean('is_enabled')->default(false);
            $table->datetime('last_datetime')->nullable();
            $table->timestamps();

            $table->index('user_id');
            $table->index('host');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sp_domains');
    }
};