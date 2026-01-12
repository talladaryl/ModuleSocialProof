<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sp_templates', function (Blueprint $table) {
            $table->id('template_id');
            $table->unsignedBigInteger('client_id')->nullable(); // Null = template système
            $table->string('name', 191);
            $table->string('slug', 191);
            $table->text('description')->nullable();
            $table->string('category', 50); // minimal, toast, card, modal, bar, etc.
            $table->string('notification_type', 50); // INFORMATIONAL, COUPON, etc.
            
            // Design et structure
            $table->json('design_config'); // Couleurs, fonts, spacing, etc.
            $table->json('layout_config'); // Position, taille, animations
            $table->text('custom_css')->nullable();
            $table->text('custom_html')->nullable();
            
            // Aperçu et métadonnées
            $table->text('preview_image')->nullable();
            $table->json('preview_data')->nullable(); // Données d'exemple pour l'aperçu
            $table->json('tags')->nullable(); // Tags pour filtrage
            
            // Utilisation et popularité
            $table->integer('usage_count')->default(0);
            $table->decimal('rating', 3, 2)->default(0); // Note moyenne
            $table->integer('rating_count')->default(0);
            
            // Status et visibilité
            $table->enum('visibility', ['public', 'private', 'system'])->default('private');
            $table->enum('status', ['active', 'inactive', 'deprecated'])->default('active');
            $table->boolean('is_featured')->default(false);
            $table->integer('sort_order')->default(0);
            
            // Versioning
            $table->string('version', 20)->default('1.0.0');
            $table->unsignedBigInteger('parent_template_id')->nullable(); // Pour les versions
            
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('client_id')->references('client_id')->on('sp_clients')->onDelete('cascade');
            $table->foreign('parent_template_id')->references('template_id')->on('sp_templates')->onDelete('set null');
            
            $table->index(['client_id', 'status']);
            $table->index(['category', 'notification_type']);
            $table->index(['visibility', 'status', 'is_featured']);
            $table->index('slug');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sp_templates');
    }
};