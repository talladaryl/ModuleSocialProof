<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('sp_sites', function (Blueprint $table) {
            // Ajouter url après domain
            if (!Schema::hasColumn('sp_sites', 'url')) {
                $table->string('url', 255)->nullable()->after('domain');
            }
            
            // Ajouter settings après language
            if (!Schema::hasColumn('sp_sites', 'settings')) {
                $table->json('settings')->nullable()->after('language');
            }
            
            // Ajouter tracking_config après settings
            if (!Schema::hasColumn('sp_sites', 'tracking_config')) {
                $table->json('tracking_config')->nullable()->after('settings');
            }
            
            // Ajouter verified_at après notes
            if (!Schema::hasColumn('sp_sites', 'verified_at')) {
                $table->timestamp('verified_at')->nullable()->after('notes');
            }
            
            // Ajouter last_activity_at après verified_at
            if (!Schema::hasColumn('sp_sites', 'last_activity_at')) {
                $table->timestamp('last_activity_at')->nullable()->after('verified_at');
            }
        });
    }

    public function down(): void
    {
        Schema::table('sp_sites', function (Blueprint $table) {
            $columns = [
                'url',
                'settings',
                'tracking_config',
                'verified_at',
                'last_activity_at'
            ];
            
            foreach ($columns as $column) {
                if (Schema::hasColumn('sp_sites', $column)) {
                    $table->dropColumn($column);
                }
            }
        });
    }
};
