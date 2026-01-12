<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sp_display_rules', function (Blueprint $table) {
            $table->id('rule_id');
            $table->unsignedBigInteger('notification_id'); // Lien vers sp_notifications ou sp_notifications_extended
            $table->string('name', 191);
            $table->text('description')->nullable();
            
            // Règles de déclenchement
            $table->enum('trigger_type', [
                'page_load', 'time_delay', 'scroll_percentage', 'exit_intent', 
                'click_element', 'hover_element', 'form_submission', 'custom_event'
            ])->default('page_load');
            $table->json('trigger_config')->nullable(); // Configuration spécifique au trigger
            
            // Règles de ciblage
            $table->json('page_rules')->nullable(); // URLs, patterns, exclusions
            $table->json('visitor_rules')->nullable(); // Nouveau/récurrent, source, device
            $table->json('geographic_rules')->nullable(); // Pays, régions, villes
            $table->json('temporal_rules')->nullable(); // Heures, jours, dates
            
            // Règles de fréquence
            $table->enum('frequency_type', [
                'always', 'once_per_session', 'once_per_day', 
                'once_per_week', 'once_per_month', 'custom'
            ])->default('always');
            $table->json('frequency_config')->nullable(); // Configuration personnalisée
            
            // Règles d'affichage
            $table->integer('display_duration')->default(5000); // ms
            $table->integer('display_delay')->default(0); // ms
            $table->enum('display_position', [
                'top_left', 'top_center', 'top_right',
                'middle_left', 'middle_center', 'middle_right',
                'bottom_left', 'bottom_center', 'bottom_right',
                'custom'
            ])->default('bottom_right');
            $table->json('position_config')->nullable(); // Coordonnées personnalisées
            
            // Animations
            $table->string('entrance_animation', 50)->default('fadeIn');
            $table->string('exit_animation', 50)->default('fadeOut');
            $table->integer('animation_duration')->default(300); // ms
            
            // Conditions d'arrêt
            $table->json('stop_conditions')->nullable(); // Conditions pour arrêter l'affichage
            $table->integer('max_displays_per_session')->nullable();
            $table->integer('max_displays_per_day')->nullable();
            
            // A/B Testing
            $table->string('ab_test_group', 50)->nullable();
            $table->integer('traffic_percentage')->default(100); // % du trafic ciblé
            
            // Priorité et status
            $table->integer('priority')->default(0); // Plus élevé = plus prioritaire
            $table->boolean('is_active')->default(true);
            
            $table->timestamps();
            $table->softDeletes();

            // Note: La foreign key sera ajoutée après selon la table de notifications utilisée
            $table->index(['notification_id', 'is_active']);
            $table->index(['trigger_type', 'is_active']);
            $table->index(['priority', 'is_active']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sp_display_rules');
    }
};