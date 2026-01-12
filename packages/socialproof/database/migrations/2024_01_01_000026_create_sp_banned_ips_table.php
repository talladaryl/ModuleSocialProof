<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sp_banned_ips', function (Blueprint $table) {
            $table->id('ban_id');
            $table->string('ip_address', 45);
            $table->string('reason')->nullable();
            $table->unsignedBigInteger('banned_by')->nullable();
            $table->timestamp('expires_at')->nullable();
            $table->boolean('is_permanent')->default(false);
            $table->timestamps();

            $table->unique('ip_address');
            $table->index('expires_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sp_banned_ips');
    }
};
