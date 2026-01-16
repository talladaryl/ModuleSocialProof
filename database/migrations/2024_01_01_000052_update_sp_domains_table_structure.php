<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('sp_domains', function (Blueprint $table) {
            // Ajouter client_id et site_id
            if (!Schema::hasColumn('sp_domains', 'client_id')) {
                $table->unsignedBigInteger('client_id')->nullable()->after('domain_id');
            }
            
            if (!Schema::hasColumn('sp_domains', 'site_id')) {
                $table->unsignedBigInteger('site_id')->nullable()->after('client_id');
            }
            
            // Ajouter le champ domain (URL complète)
            if (!Schema::hasColumn('sp_domains', 'domain')) {
                $table->string('domain', 255)->nullable()->after('site_id');
            }
            
            // Ajouter les champs de vérification
            if (!Schema::hasColumn('sp_domains', 'is_verified')) {
                $table->boolean('is_verified')->default(false)->after('is_enabled');
            }
            
            if (!Schema::hasColumn('sp_domains', 'verified_at')) {
                $table->timestamp('verified_at')->nullable()->after('is_verified');
            }
            
            if (!Schema::hasColumn('sp_domains', 'verification_token')) {
                $table->string('verification_token', 64)->nullable()->after('verified_at');
            }
            
            // Ajouter is_active (alias de is_enabled)
            if (!Schema::hasColumn('sp_domains', 'is_active')) {
                $table->boolean('is_active')->default(true)->after('verification_token');
            }
            
            // Ajouter is_primary
            if (!Schema::hasColumn('sp_domains', 'is_primary')) {
                $table->boolean('is_primary')->default(false)->after('is_active');
            }
        });
        
        // Migrer les données existantes : copier host dans domain
        DB::statement("UPDATE sp_domains SET domain = CONCAT(scheme, '://', host) WHERE domain IS NULL");
        
        // Ajouter les clés étrangères
        Schema::table('sp_domains', function (Blueprint $table) {
            if (Schema::hasColumn('sp_domains', 'client_id')) {
                $table->foreign('client_id')->references('client_id')->on('sp_clients')->onDelete('cascade');
            }
            
            if (Schema::hasColumn('sp_domains', 'site_id')) {
                $table->foreign('site_id')->references('site_id')->on('sp_sites')->onDelete('cascade');
            }
        });
    }

    public function down(): void
    {
        Schema::table('sp_domains', function (Blueprint $table) {
            // Supprimer les clés étrangères
            $table->dropForeign(['client_id']);
            $table->dropForeign(['site_id']);
            
            // Supprimer les colonnes ajoutées
            $columns = [
                'client_id',
                'site_id',
                'domain',
                'is_verified',
                'verified_at',
                'verification_token',
                'is_active',
                'is_primary'
            ];
            
            foreach ($columns as $column) {
                if (Schema::hasColumn('sp_domains', $column)) {
                    $table->dropColumn($column);
                }
            }
        });
    }
};
