<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sp_clients', function (Blueprint $table) {
            $table->id('client_id');
            $table->string('name', 191);
            $table->string('email', 191)->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('company_name', 191)->nullable();
            $table->string('phone', 50)->nullable();
            $table->text('address')->nullable();
            $table->string('country', 2)->nullable();
            $table->string('timezone', 50)->default('UTC');
            $table->string('language', 10)->default('en');
            $table->string('currency', 3)->default('USD');
            $table->json('preferences')->nullable();
            $table->json('billing_info')->nullable();
            $table->string('avatar', 191)->nullable();
            $table->enum('status', ['active', 'inactive', 'suspended', 'pending'])->default('pending');
            $table->timestamp('last_login_at')->nullable();
            $table->string('last_login_ip', 45)->nullable();
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();

            $table->index(['email', 'status']);
            $table->index('status');
            $table->index('created_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sp_clients');
    }
};