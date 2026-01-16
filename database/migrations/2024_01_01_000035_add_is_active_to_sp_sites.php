<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('sp_sites') && !Schema::hasColumn('sp_sites', 'is_active')) {
            Schema::table('sp_sites', function (Blueprint $table) {
                $table->boolean('is_active')->default(true)->after('status');
                $table->index('is_active');
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('sp_sites') && Schema::hasColumn('sp_sites', 'is_active')) {
            Schema::table('sp_sites', function (Blueprint $table) {
                $table->dropIndex(['is_active']);
                $table->dropColumn('is_active');
            });
        }
    }
};
