<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('sp_widgets', function (Blueprint $table) {
            if (!Schema::hasColumn('sp_widgets', 'campaign_id')) {
                $table->unsignedBigInteger('campaign_id')->nullable()->after('site_id');
                $table->index('campaign_id');
            }
        });
    }

    public function down(): void
    {
        Schema::table('sp_widgets', function (Blueprint $table) {
            $table->dropIndex(['campaign_id']);
            $table->dropColumn('campaign_id');
        });
    }
};
