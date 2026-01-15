<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('sp_notifications_extended') && !Schema::hasColumn('sp_notifications_extended', 'status')) {
            Schema::table('sp_notifications_extended', function (Blueprint $table) {
                $table->string('status', 20)->default('draft')->after('type');
                $table->index('status');
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('sp_notifications_extended') && Schema::hasColumn('sp_notifications_extended', 'status')) {
            Schema::table('sp_notifications_extended', function (Blueprint $table) {
                $table->dropIndex(['status']);
                $table->dropColumn('status');
            });
        }
    }
};
