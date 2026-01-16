<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        // Étape 1: Supprimer l'auto-increment et la clé primaire
        DB::statement('ALTER TABLE sp_notifications MODIFY id BIGINT UNSIGNED NOT NULL');
        DB::statement('ALTER TABLE sp_notifications DROP PRIMARY KEY');
        
        // Étape 2: Changer le type de colonne en UUID
        Schema::table('sp_notifications', function (Blueprint $table) {
            $table->uuid('id')->change();
        });
        
        // Étape 3: Réajouter la clé primaire
        Schema::table('sp_notifications', function (Blueprint $table) {
            $table->primary('id');
        });
    }

    public function down(): void
    {
        // Étape 1: Supprimer la clé primaire
        Schema::table('sp_notifications', function (Blueprint $table) {
            $table->dropPrimary('id');
        });
        
        // Étape 2: Changer le type de colonne en BIGINT
        DB::statement('ALTER TABLE sp_notifications MODIFY id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT');
        
        // Étape 3: Réajouter la clé primaire
        Schema::table('sp_notifications', function (Blueprint $table) {
            $table->primary('id');
        });
    }
};