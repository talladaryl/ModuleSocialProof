<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('sp_teams')) {
            Schema::table('sp_teams', function (Blueprint $table) {
                if (!Schema::hasColumn('sp_teams', 'plan_id')) {
                    $table->unsignedBigInteger('plan_id')->nullable()->after('client_id');
                    $table->index('plan_id');
                }
                if (!Schema::hasColumn('sp_teams', 'slug')) {
                    $table->string('slug', 191)->nullable()->after('name');
                    $table->index('slug');
                }
                if (!Schema::hasColumn('sp_teams', 'subscription_ends_at')) {
                    $table->timestamp('subscription_ends_at')->nullable()->after('settings');
                }
                if (!Schema::hasColumn('sp_teams', 'trial_ends_at')) {
                    $table->timestamp('trial_ends_at')->nullable()->after('subscription_ends_at');
                }
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('sp_teams')) {
            Schema::table('sp_teams', function (Blueprint $table) {
                $columns = ['trial_ends_at', 'subscription_ends_at', 'slug', 'plan_id'];
                foreach ($columns as $column) {
                    if (Schema::hasColumn('sp_teams', $column)) {
                        if (in_array($column, ['slug', 'plan_id'])) {
                            $table->dropIndex([$column]);
                        }
                        $table->dropColumn($column);
                    }
                }
            });
        }
    }
};
