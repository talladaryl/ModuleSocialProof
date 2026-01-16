<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('sp_sites', function (Blueprint $table) {
            $table->text('url')->nullable()->after('domain');
        });
    }

    public function down(): void
    {
        Schema::table('sp_sites', function (Blueprint $table) {
            $table->dropColumn('url');
        });
    }
};