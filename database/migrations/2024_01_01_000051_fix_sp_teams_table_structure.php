<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        // Vérifier si la table a l'ancienne structure (avec id et team_id séparés)
        $hasIdColumn = Schema::hasColumn('sp_teams', 'id');
        $hasTeamIdColumn = Schema::hasColumn('sp_teams', 'team_id');
        
        if ($hasIdColumn && $hasTeamIdColumn) {
            // Ancienne structure : supprimer team_id UUID et utiliser id comme team_id
            Schema::table('sp_teams', function (Blueprint $table) {
                $table->dropUnique(['team_id']);
                $table->dropColumn('team_id');
            });
            
            // Renommer id en team_id
            DB::statement('ALTER TABLE sp_teams CHANGE COLUMN id team_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT');
        }
        
        // Ajouter les colonnes manquantes
        Schema::table('sp_teams', function (Blueprint $table) {
            if (!Schema::hasColumn('sp_teams', 'plan_id')) {
                $table->unsignedBigInteger('plan_id')->nullable()->after('client_id');
            }
            
            if (!Schema::hasColumn('sp_teams', 'slug')) {
                $table->string('slug', 191)->nullable()->after('name');
            }
            
            if (!Schema::hasColumn('sp_teams', 'subscription_ends_at')) {
                $table->timestamp('subscription_ends_at')->nullable()->after('settings');
            }
            
            if (!Schema::hasColumn('sp_teams', 'trial_ends_at')) {
                $table->timestamp('trial_ends_at')->nullable()->after('subscription_ends_at');
            }
        });
        
        // Générer des slugs pour les équipes existantes
        $teams = DB::table('sp_teams')->whereNull('slug')->get();
        foreach ($teams as $team) {
            $slug = \Illuminate\Support\Str::slug($team->name);
            $originalSlug = $slug;
            $counter = 1;
            
            // S'assurer que le slug est unique
            while (DB::table('sp_teams')->where('slug', $slug)->where('team_id', '!=', $team->team_id)->exists()) {
                $slug = $originalSlug . '-' . $counter;
                $counter++;
            }
            
            DB::table('sp_teams')->where('team_id', $team->team_id)->update(['slug' => $slug]);
        }
        
        // Rendre le slug unique et non nullable
        Schema::table('sp_teams', function (Blueprint $table) {
            if (Schema::hasColumn('sp_teams', 'slug')) {
                DB::statement('ALTER TABLE sp_teams MODIFY slug VARCHAR(191) NOT NULL');
                $table->unique('slug');
            }
        });
        
        // Ajouter la clé étrangère pour plan_id si elle n'existe pas
        $foreignKeys = DB::select("
            SELECT CONSTRAINT_NAME 
            FROM information_schema.TABLE_CONSTRAINTS 
            WHERE TABLE_SCHEMA = DATABASE() 
            AND TABLE_NAME = 'sp_teams' 
            AND CONSTRAINT_TYPE = 'FOREIGN KEY'
        ");
        
        $hasPlanFk = collect($foreignKeys)->contains(function($fk) {
            return str_contains($fk->CONSTRAINT_NAME, 'plan');
        });
        
        if (!$hasPlanFk && Schema::hasColumn('sp_teams', 'plan_id')) {
            Schema::table('sp_teams', function (Blueprint $table) {
                $table->foreign('plan_id')->references('plan_id')->on('sp_plans')->onDelete('set null');
            });
        }
    }

    public function down(): void
    {
        // Supprimer la clé étrangère si elle existe
        $foreignKeys = DB::select("
            SELECT CONSTRAINT_NAME 
            FROM information_schema.TABLE_CONSTRAINTS 
            WHERE TABLE_SCHEMA = DATABASE() 
            AND TABLE_NAME = 'sp_teams' 
            AND CONSTRAINT_TYPE = 'FOREIGN KEY'
        ");
        
        $planFk = collect($foreignKeys)->first(function($fk) {
            return str_contains($fk->CONSTRAINT_NAME, 'plan');
        });
        
        if ($planFk) {
            Schema::table('sp_teams', function (Blueprint $table) use ($planFk) {
                $table->dropForeign($planFk->CONSTRAINT_NAME);
            });
        }
        
        // Supprimer les colonnes ajoutées
        Schema::table('sp_teams', function (Blueprint $table) {
            $columns = ['plan_id', 'slug', 'subscription_ends_at', 'trial_ends_at'];
            foreach ($columns as $column) {
                if (Schema::hasColumn('sp_teams', $column)) {
                    $table->dropColumn($column);
                }
            }
        });
    }
};
