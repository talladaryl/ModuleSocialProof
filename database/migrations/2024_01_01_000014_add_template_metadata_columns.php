<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('sp_templates', function (Blueprint $table) {
            if (!Schema::hasColumn('sp_templates', 'author')) {
                $table->string('author', 191)->nullable()->after('description');
            }
            if (!Schema::hasColumn('sp_templates', 'license')) {
                $table->string('license', 191)->nullable()->after('author');
            }
            if (!Schema::hasColumn('sp_templates', 'custom_js')) {
                $table->text('custom_js')->nullable()->after('custom_css');
            }
            if (!Schema::hasColumn('sp_templates', 'default_content')) {
                $table->json('default_content')->nullable()->after('layout_config');
            }
        });
    }

    public function down(): void
    {
        Schema::table('sp_templates', function (Blueprint $table) {
            if (Schema::hasColumn('sp_templates', 'author')) {
                $table->dropColumn('author');
            }
            if (Schema::hasColumn('sp_templates', 'license')) {
                $table->dropColumn('license');
            }
            if (Schema::hasColumn('sp_templates', 'custom_js')) {
                $table->dropColumn('custom_js');
            }
            if (Schema::hasColumn('sp_templates', 'default_content')) {
                $table->dropColumn('default_content');
            }
        });
    }
};
