<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('sp_notifications') && !Schema::hasColumn('sp_notifications', 'notifiable_type')) {
            Schema::table('sp_notifications', function (Blueprint $table) {
                $table->string('notifiable_type')->nullable()->after('type');
                $table->unsignedBigInteger('notifiable_id')->nullable()->after('notifiable_type');
                $table->timestamp('read_at')->nullable()->after('data');
                $table->index(['notifiable_type', 'notifiable_id']);
                $table->index('read_at');
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('sp_notifications') && Schema::hasColumn('sp_notifications', 'notifiable_type')) {
            Schema::table('sp_notifications', function (Blueprint $table) {
                $table->dropIndex(['notifiable_type', 'notifiable_id']);
                $table->dropIndex(['read_at']);
                $table->dropColumn(['notifiable_type', 'notifiable_id', 'read_at']);
            });
        }
    }
};
