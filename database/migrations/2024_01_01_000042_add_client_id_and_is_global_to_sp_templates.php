<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('sp_templates', function (Blueprint $table) {
            if (!Schema::hasColumn('sp_templates', 'client_id')) {
                $table->unsignedBigInteger('client_id')->nullable()->after('template_id');
                $table->index('client_id');
                $table->foreign('client_id')->references('client_id')->on('sp_clients')->onDelete('cascade');
            }
            
            if (!Schema::hasColumn('sp_templates', 'is_global')) {
                $table->boolean('is_global')->default(false);
                $table->index('is_global');
            }
            
            if (!Schema::hasColumn('sp_templates', 'is_active')) {
                $table->boolean('is_active')->default(true);
            }
        });
    }

    public function down(): void
    {
        Schema::table('sp_templates', function (Blueprint $table) {
            if (Schema::hasColumn('sp_templates', 'client_id')) {
                $table->dropForeign(['client_id']);
                $table->dropIndex(['client_id']);
                $table->dropColumn('client_id');
            }
            if (Schema::hasColumn('sp_templates', 'is_global')) {
                $table->dropIndex(['is_global']);
                $table->dropColumn('is_global');
            }
            if (Schema::hasColumn('sp_templates', 'is_active')) {
                $table->dropColumn('is_active');
            }
        });
    }
};
