<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sp_teams', function (Blueprint $table) {
            $table->id();
            $table->uuid('team_id')->unique();
            $table->unsignedBigInteger('client_id'); // Propriétaire de l'équipe
            $table->string('name', 191);
            $table->text('description')->nullable();
            
            // Configuration de l'équipe
            $table->json('settings')->nullable(); // Paramètres spécifiques à l'équipe
            $table->integer('max_members')->default(10);
            
            // Status
            $table->boolean('is_active')->default(true);
            
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('client_id')->references('client_id')->on('sp_clients')->onDelete('cascade');
            
            $table->index(['client_id', 'is_active']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sp_teams');
    }
};