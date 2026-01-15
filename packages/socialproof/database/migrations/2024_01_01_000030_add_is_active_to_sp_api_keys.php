<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('sp_api_keys') && !Schema::hasColumn('sp_api_keys', 'is_active')) {
            Schema::table('sp_api_keys', function (Blueprint $table) {
                $table->boolean('is_active')->default(true)->after('status');
                $table->index('is_active');
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('sp_api_keys') && Schema::hasColumn('sp_api_keys', 'is_active')) {
            Schema::table('sp_api_keys', function (Blueprint $table) {
                $table->dropIndex(['is_active']);
                $table->dropColumn('is_active');
            });
        }
    }
};
