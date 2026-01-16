<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('sp_widgets', function (Blueprint $table) {
            // Ajouter client_id
            if (!Schema::hasColumn('sp_widgets', 'client_id')) {
                $table->unsignedBigInteger('client_id')->nullable()->after('user_id');
            }
            
            // Ajouter site_id
            if (!Schema::hasColumn('sp_widgets', 'site_id')) {
                $table->unsignedBigInteger('site_id')->nullable()->after('client_id');
            }
        });
        
        // Ajouter les clés étrangères
        Schema::table('sp_widgets', function (Blueprint $table) {
            if (Schema::hasColumn('sp_widgets', 'client_id')) {
                $table->foreign('client_id')->references('client_id')->on('sp_clients')->onDelete('cascade');
            }
            
            if (Schema::hasColumn('sp_widgets', 'site_id')) {
                $table->foreign('site_id')->references('site_id')->on('sp_sites')->onDelete('cascade');
            }
        });
    }

    public function down(): void
    {
        Schema::table('sp_widgets', function (Blueprint $table) {
            // Supprimer les clés étrangères
            $table->dropForeign(['client_id']);
            $table->dropForeign(['site_id']);
            
            // Supprimer les colonnes
            if (Schema::hasColumn('sp_widgets', 'client_id')) {
                $table->dropColumn('client_id');
            }
            
            if (Schema::hasColumn('sp_widgets', 'site_id')) {
                $table->dropColumn('site_id');
            }
        });
    }
};
