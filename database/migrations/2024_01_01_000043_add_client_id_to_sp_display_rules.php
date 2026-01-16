<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('sp_display_rules', function (Blueprint $table) {
            if (!Schema::hasColumn('sp_display_rules', 'client_id')) {
                $table->unsignedBigInteger('client_id')->nullable()->after('rule_id');
                $table->index('client_id');
                $table->foreign('client_id')->references('client_id')->on('sp_clients')->onDelete('cascade');
            }
        });
    }

    public function down(): void
    {
        Schema::table('sp_display_rules', function (Blueprint $table) {
            if (Schema::hasColumn('sp_display_rules', 'client_id')) {
                $table->dropForeign(['client_id']);
                $table->dropIndex(['client_id']);
                $table->dropColumn('client_id');
            }
        });
    }
};
