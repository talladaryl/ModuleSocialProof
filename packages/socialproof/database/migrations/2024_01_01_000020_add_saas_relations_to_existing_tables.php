<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Ajouter les relations SaaS aux widgets existants
        Schema::table('sp_widgets', function (Blueprint $table) {
            $table->unsignedBigInteger('client_id')->nullable()->after('id');
            $table->unsignedBigInteger('site_id')->nullable()->after('client_id');
            
            $table->foreign('client_id')->references('client_id')->on('sp_clients')->onDelete('cascade');
            $table->foreign('site_id')->references('site_id')->on('sp_sites')->onDelete('cascade');
            
            $table->index(['client_id', 'is_active']);
            $table->index(['site_id', 'is_active']);
        });

        // Ajouter les relations SaaS aux campaigns existantes
        Schema::table('sp_campaigns', function (Blueprint $table) {
            $table->unsignedBigInteger('client_id')->nullable()->after('id');
            $table->unsignedBigInteger('site_id')->nullable()->after('client_id');
            
            $table->foreign('client_id')->references('client_id')->on('sp_clients')->onDelete('cascade');
            $table->foreign('site_id')->references('site_id')->on('sp_sites')->onDelete('cascade');
            
            $table->index(['client_id', 'is_enabled']);
            $table->index(['site_id', 'is_enabled']);
        });

        // Ajouter les relations SaaS aux notifications étendues
        Schema::table('sp_notifications_extended', function (Blueprint $table) {
            $table->unsignedBigInteger('client_id')->nullable()->after('notification_id');
            $table->unsignedBigInteger('site_id')->nullable()->after('client_id');
            $table->unsignedBigInteger('template_id')->nullable()->after('site_id');
            
            $table->foreign('client_id')->references('client_id')->on('sp_clients')->onDelete('cascade');
            $table->foreign('site_id')->references('site_id')->on('sp_sites')->onDelete('cascade');
            $table->foreign('template_id')->references('template_id')->on('sp_templates')->onDelete('set null');
            
            $table->index(['client_id', 'is_enabled']);
            $table->index(['site_id', 'is_enabled']);
            $table->index('template_id');
        });

        // Ajouter les relations SaaS aux domaines
        Schema::table('sp_domains', function (Blueprint $table) {
            $table->unsignedBigInteger('client_id')->nullable()->after('domain_id');
            
            $table->foreign('client_id')->references('client_id')->on('sp_clients')->onDelete('cascade');
            
            $table->index(['client_id', 'is_enabled']);
        });

        // Ajouter les relations SaaS aux notification handlers
        Schema::table('sp_notification_handlers', function (Blueprint $table) {
            $table->unsignedBigInteger('client_id')->nullable()->after('notification_handler_id');
            
            $table->foreign('client_id')->references('client_id')->on('sp_clients')->onDelete('cascade');
            
            $table->index(['client_id', 'is_enabled']);
        });

        // Ajouter la foreign key pour display_rules vers notifications_extended
        Schema::table('sp_display_rules', function (Blueprint $table) {
            $table->foreign('notification_id')->references('notification_id')->on('sp_notifications_extended')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        // Supprimer les foreign keys et colonnes dans l'ordre inverse
        Schema::table('sp_display_rules', function (Blueprint $table) {
            $table->dropForeign(['notification_id']);
        });

        Schema::table('sp_notification_handlers', function (Blueprint $table) {
            $table->dropForeign(['client_id']);
            $table->dropIndex(['client_id', 'is_enabled']);
            $table->dropColumn('client_id');
        });

        Schema::table('sp_domains', function (Blueprint $table) {
            $table->dropForeign(['client_id']);
            $table->dropIndex(['client_id', 'is_enabled']);
            $table->dropColumn('client_id');
        });

        Schema::table('sp_notifications_extended', function (Blueprint $table) {
            $table->dropForeign(['client_id']);
            $table->dropForeign(['site_id']);
            $table->dropForeign(['template_id']);
            $table->dropIndex(['client_id', 'is_enabled']);
            $table->dropIndex(['site_id', 'is_enabled']);
            $table->dropIndex(['template_id']);
            $table->dropColumn(['client_id', 'site_id', 'template_id']);
        });

        Schema::table('sp_campaigns', function (Blueprint $table) {
            $table->dropForeign(['client_id']);
            $table->dropForeign(['site_id']);
            $table->dropIndex(['client_id', 'is_enabled']);
            $table->dropIndex(['site_id', 'is_enabled']);
            $table->dropColumn(['client_id', 'site_id']);
        });

        Schema::table('sp_widgets', function (Blueprint $table) {
            $table->dropForeign(['client_id']);
            $table->dropForeign(['site_id']);
            $table->dropIndex(['client_id', 'is_active']);
            $table->dropIndex(['site_id', 'is_active']);
            $table->dropColumn(['client_id', 'site_id']);
        });
    }
};