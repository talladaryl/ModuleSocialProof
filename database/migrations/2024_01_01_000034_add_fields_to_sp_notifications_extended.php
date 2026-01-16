<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('sp_notifications_extended')) {
            Schema::table('sp_notifications_extended', function (Blueprint $table) {
                if (!Schema::hasColumn('sp_notifications_extended', 'team_id')) {
                    $table->unsignedBigInteger('team_id')->nullable()->after('campaign_id');
                    $table->index('team_id');
                }
                if (!Schema::hasColumn('sp_notifications_extended', 'site_id')) {
                    $table->unsignedBigInteger('site_id')->nullable()->after('team_id');
                    $table->index('site_id');
                }
                if (!Schema::hasColumn('sp_notifications_extended', 'template_id')) {
                    $table->unsignedBigInteger('template_id')->nullable()->after('site_id');
                    $table->index('template_id');
                }
                if (!Schema::hasColumn('sp_notifications_extended', 'title')) {
                    $table->string('title', 191)->nullable()->after('type');
                    $table->index('title');
                }
                if (!Schema::hasColumn('sp_notifications_extended', 'message')) {
                    $table->text('message')->nullable()->after('title');
                }
                if (!Schema::hasColumn('sp_notifications_extended', 'url')) {
                    $table->text('url')->nullable()->after('message');
                }
                if (!Schema::hasColumn('sp_notifications_extended', 'image_url')) {
                    $table->text('image_url')->nullable()->after('url');
                }
                if (!Schema::hasColumn('sp_notifications_extended', 'priority')) {
                    $table->integer('priority')->default(1)->after('status');
                }
                if (!Schema::hasColumn('sp_notifications_extended', 'display_duration')) {
                    $table->integer('display_duration')->default(5)->after('priority');
                }
                if (!Schema::hasColumn('sp_notifications_extended', 'delay_before_show')) {
                    $table->integer('delay_before_show')->default(0)->after('display_duration');
                }
                if (!Schema::hasColumn('sp_notifications_extended', 'position')) {
                    $table->string('position', 50)->default('bottom_right')->after('delay_before_show');
                }
                if (!Schema::hasColumn('sp_notifications_extended', 'starts_at')) {
                    $table->timestamp('starts_at')->nullable()->after('position');
                }
                if (!Schema::hasColumn('sp_notifications_extended', 'ends_at')) {
                    $table->timestamp('ends_at')->nullable()->after('starts_at');
                }
                if (!Schema::hasColumn('sp_notifications_extended', 'config')) {
                    $table->json('config')->nullable()->after('settings');
                }
                if (!Schema::hasColumn('sp_notifications_extended', 'targeting_rules')) {
                    $table->json('targeting_rules')->nullable()->after('config');
                }
                if (!Schema::hasColumn('sp_notifications_extended', 'views_count')) {
                    $table->unsignedBigInteger('views_count')->default(0)->after('targeting_rules');
                }
                if (!Schema::hasColumn('sp_notifications_extended', 'clicks_count')) {
                    $table->unsignedBigInteger('clicks_count')->default(0)->after('views_count');
                }
                if (!Schema::hasColumn('sp_notifications_extended', 'conversions_count')) {
                    $table->unsignedBigInteger('conversions_count')->default(0)->after('clicks_count');
                }
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('sp_notifications_extended')) {
            Schema::table('sp_notifications_extended', function (Blueprint $table) {
                $columns = ['conversions_count', 'clicks_count', 'views_count', 'targeting_rules', 'config', 
                           'ends_at', 'starts_at', 'position', 'delay_before_show', 'display_duration', 
                           'priority', 'image_url', 'url', 'message', 'title', 'template_id', 'site_id', 'team_id'];
                foreach ($columns as $column) {
                    if (Schema::hasColumn('sp_notifications_extended', $column)) {
                        $table->dropColumn($column);
                    }
                }
            });
        }
    }
};
