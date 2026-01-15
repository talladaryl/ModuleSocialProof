<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('sp_track_conversions', function (Blueprint $table) {
            if (!Schema::hasColumn('sp_track_conversions', 'site_id')) {
                $table->unsignedBigInteger('site_id')->nullable()->after('client_id');
                $table->index('site_id');
                $table->foreign('site_id')->references('site_id')->on('sp_sites')->onDelete('cascade');
            }
        });
    }

    public function down(): void
    {
        Schema::table('sp_track_conversions', function (Blueprint $table) {
            if (Schema::hasColumn('sp_track_conversions', 'site_id')) {
                $table->dropForeign(['site_id']);
                $table->dropIndex(['site_id']);
                $table->dropColumn('site_id');
            }
        });
    }
};
