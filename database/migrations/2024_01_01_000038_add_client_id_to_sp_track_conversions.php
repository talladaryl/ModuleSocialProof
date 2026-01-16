<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('sp_track_conversions', function (Blueprint $table) {
            $table->unsignedBigInteger('client_id')->nullable()->after('id');
            
            $table->index('client_id');
            $table->index(['client_id', 'created_at']);
            
            $table->foreign('client_id')->references('client_id')->on('sp_clients')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::table('sp_track_conversions', function (Blueprint $table) {
            $table->dropForeign(['client_id']);
            $table->dropIndex(['client_id']);
            $table->dropIndex(['client_id', 'created_at']);
            $table->dropColumn('client_id');
        });
    }
};
