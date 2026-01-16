<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('sp_display_rules', function (Blueprint $table) {
            if (!Schema::hasColumn('sp_display_rules', 'widget_id')) {
                $table->unsignedBigInteger('widget_id')->nullable()->after('client_id');
                $table->index('widget_id');
            }
        });
    }

    public function down(): void
    {
        Schema::table('sp_display_rules', function (Blueprint $table) {
            if (Schema::hasColumn('sp_display_rules', 'widget_id')) {
                $table->dropIndex(['widget_id']);
                $table->dropColumn('widget_id');
            }
        });
    }
};
