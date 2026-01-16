<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('sp_api_keys', function (Blueprint $table) {
            // Ajouter les colonnes manquantes utilisées par le modèle
            if (!Schema::hasColumn('sp_api_keys', 'rate_limit')) {
                $table->integer('rate_limit')->default(1000)->after('permissions');
            }
            
            if (!Schema::hasColumn('sp_api_keys', 'is_active')) {
                $table->boolean('is_active')->default(true)->after('rate_limit');
            }
            
            if (!Schema::hasColumn('sp_api_keys', 'usage_count')) {
                $table->bigInteger('usage_count')->default(0)->after('is_active');
            }
            
            if (!Schema::hasColumn('sp_api_keys', 'ip_whitelist')) {
                $table->json('ip_whitelist')->nullable()->after('usage_count');
            }
            
            if (!Schema::hasColumn('sp_api_keys', 'domain_whitelist')) {
                $table->json('domain_whitelist')->nullable()->after('ip_whitelist');
            }
        });
        
        // Migrer les données existantes si nécessaire
        if (Schema::hasColumn('sp_api_keys', 'status')) {
            DB::table('sp_api_keys')->update([
                'is_active' => DB::raw("CASE WHEN status = 'active' THEN 1 ELSE 0 END")
            ]);
        }
        
        if (Schema::hasColumn('sp_api_keys', 'total_requests')) {
            DB::table('sp_api_keys')->update([
                'usage_count' => DB::raw('total_requests')
            ]);
        }
        
        if (Schema::hasColumn('sp_api_keys', 'allowed_ips')) {
            DB::table('sp_api_keys')->whereNotNull('allowed_ips')->update([
                'ip_whitelist' => DB::raw('allowed_ips')
            ]);
        }
        
        if (Schema::hasColumn('sp_api_keys', 'allowed_domains')) {
            DB::table('sp_api_keys')->whereNotNull('allowed_domains')->update([
                'domain_whitelist' => DB::raw('allowed_domains')
            ]);
        }
    }

    public function down(): void
    {
        Schema::table('sp_api_keys', function (Blueprint $table) {
            $columns = ['rate_limit', 'is_active', 'usage_count', 'ip_whitelist', 'domain_whitelist'];
            foreach ($columns as $column) {
                if (Schema::hasColumn('sp_api_keys', $column)) {
                    $table->dropColumn($column);
                }
            }
        });
    }
};
