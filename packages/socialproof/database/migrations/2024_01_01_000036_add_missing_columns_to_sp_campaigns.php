<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('sp_campaigns')) {
            Schema::table('sp_campaigns', function (Blueprint $table) {
                if (!Schema::hasColumn('sp_campaigns', 'team_id')) {
                    $table->unsignedBigInteger('team_id')->nullable()->after('user_id');
                    $table->index('team_id');
                }
                if (!Schema::hasColumn('sp_campaigns', 'site_id')) {
                    $table->unsignedBigInteger('site_id')->nullable()->after('team_id');
                    $table->index('site_id');
                }
                if (!Schema::hasColumn('sp_campaigns', 'description')) {
                    $table->text('description')->nullable()->after('name');
                }
                if (!Schema::hasColumn('sp_campaigns', 'type')) {
                    $table->string('type', 50)->default('INFORMATIONAL')->after('description');
                }
                if (!Schema::hasColumn('sp_campaigns', 'status')) {
                    $table->string('status', 20)->default('draft')->after('type');
                }
                if (!Schema::hasColumn('sp_campaigns', 'priority')) {
                    $table->integer('priority')->default(1)->after('status');
                }
                if (!Schema::hasColumn('sp_campaigns', 'starts_at')) {
                    $table->datetime('starts_at')->nullable()->after('priority');
                }
                if (!Schema::hasColumn('sp_campaigns', 'ends_at')) {
                    $table->datetime('ends_at')->nullable()->after('starts_at');
                }
                if (!Schema::hasColumn('sp_campaigns', 'config')) {
                    $table->json('config')->nullable()->after('ends_at');
                }
                if (!Schema::hasColumn('sp_campaigns', 'targeting_rules')) {
                    $table->json('targeting_rules')->nullable()->after('config');
                }
                if (!Schema::hasColumn('sp_campaigns', 'views_count')) {
                    $table->unsignedInteger('views_count')->default(0)->after('targeting_rules');
                }
                if (!Schema::hasColumn('sp_campaigns', 'clicks_count')) {
                    $table->unsignedInteger('clicks_count')->default(0)->after('views_count');
                }
                if (!Schema::hasColumn('sp_campaigns', 'conversions_count')) {
                    $table->unsignedInteger('conversions_count')->default(0)->after('clicks_count');
                }
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('sp_campaigns')) {
            Schema::table('sp_campaigns', function (Blueprint $table) {
                $columns = ['team_id', 'site_id', 'description', 'type', 'status', 'priority', 
                           'starts_at', 'ends_at', 'config', 'targeting_rules', 
                           'views_count', 'clicks_count', 'conversions_count'];
                foreach ($columns as $column) {
                    if (Schema::hasColumn('sp_campaigns', $column)) {
                        $table->dropColumn($column);
                    }
                }
            });
        }
    }
};
