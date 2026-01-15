<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('sp_widgets') && !Schema::hasColumn('sp_widgets', 'status')) {
            Schema::table('sp_widgets', function (Blueprint $table) {
                $table->string('status', 20)->default('active')->after('is_active');
                $table->index('status');
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('sp_widgets') && Schema::hasColumn('sp_widgets', 'status')) {
            Schema::table('sp_widgets', function (Blueprint $table) {
                $table->dropIndex(['status']);
                $table->dropColumn('status');
            });
        }
    }
};
