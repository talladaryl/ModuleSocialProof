<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sp_team_members', function (Blueprint $table) {
            $table->id('member_id');
            $table->unsignedBigInteger('team_id');
            $table->unsignedBigInteger('client_id'); // Utilisateur invité
            $table->string('email', 191); // Email d'invitation si pas encore inscrit
            
            // Rôle et permissions
            $table->enum('role', ['admin', 'manager', 'editor', 'viewer'])->default('viewer');
            $table->json('permissions')->nullable(); // Permissions spécifiques
            $table->json('site_access')->nullable(); // Sites auxquels il a accès
            
            // Status de l'invitation
            $table->enum('status', ['pending', 'active', 'inactive', 'declined'])->default('pending');
            $table->string('invitation_token', 191)->nullable();
            $table->timestamp('invited_at')->nullable();
            $table->timestamp('joined_at')->nullable();
            $table->timestamp('invitation_expires_at')->nullable();
            
            // Métadonnées
            $table->unsignedBigInteger('invited_by')->nullable(); // Client qui a invité
            $table->text('invitation_message')->nullable();
            $table->timestamp('last_activity_at')->nullable();
            
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('team_id')->references('team_id')->on('sp_teams')->onDelete('cascade');
            $table->foreign('client_id')->references('client_id')->on('sp_clients')->onDelete('cascade');
            $table->foreign('invited_by')->references('client_id')->on('sp_clients')->onDelete('set null');
            
            $table->unique(['team_id', 'client_id']);
            $table->index(['team_id', 'status']);
            $table->index(['client_id', 'status']);
            $table->index('invitation_token');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sp_team_members');
    }
};