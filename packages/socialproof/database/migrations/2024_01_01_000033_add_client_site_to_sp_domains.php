<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('sp_domains')) {
            Schema::table('sp_domains', function (Blueprint $table) {
                if (!Schema::hasColumn('sp_domains', 'client_id')) {
                    $table->unsignedBigInteger('client_id')->nullable()->after('domain_id');
                    $table->index('client_id');
                }
                if (!Schema::hasColumn('sp_domains', 'site_id')) {
                    $table->unsignedBigInteger('site_id')->nullable()->after('client_id');
                    $table->index('site_id');
                }
                if (!Schema::hasColumn('sp_domains', 'is_active')) {
                    $table->boolean('is_active')->default(true)->after('type');
                    $table->index('is_active');
                }
                if (!Schema::hasColumn('sp_domains', 'is_verified')) {
                    $table->boolean('is_verified')->default(false)->after('is_active');
                    $table->index('is_verified');
                }
                if (!Schema::hasColumn('sp_domains', 'is_primary')) {
                    $table->boolean('is_primary')->default(false)->after('is_verified');
                    $table->index('is_primary');
                }
                if (!Schema::hasColumn('sp_domains', 'verified_at')) {
                    $table->timestamp('verified_at')->nullable()->after('is_primary');
                }
                if (!Schema::hasColumn('sp_domains', 'verification_token')) {
                    $table->string('verification_token', 191)->nullable()->after('verified_at');
                }
                if (!Schema::hasColumn('sp_domains', 'domain')) {
                    $table->string('domain', 191)->nullable()->after('host');
                    $table->index('domain');
                }
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('sp_domains')) {
            Schema::table('sp_domains', function (Blueprint $table) {
                $indexedColumns = ['domain', 'is_primary', 'is_verified', 'is_active', 'site_id', 'client_id'];
                $simpleColumns = ['verification_token', 'verified_at'];
                
                foreach ($indexedColumns as $column) {
                    if (Schema::hasColumn('sp_domains', $column)) {
                        $table->dropIndex([$column]);
                        $table->dropColumn($column);
                    }
                }
                foreach ($simpleColumns as $column) {
                    if (Schema::hasColumn('sp_domains', $column)) {
                        $table->dropColumn($column);
                    }
                }
            });
        }
    }
};
