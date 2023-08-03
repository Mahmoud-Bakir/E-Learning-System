<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('UserType'); // The foreign key to user_types
            $table->string('Email')->unique();
            $table->string('Password');
            $table->string('FirstName');
            $table->string('LastName');
            $table->timestamps();
        });

        Schema::create('user_types', function (Blueprint $table) {
            $table->id();
            $table->string('role');
            $table->string('extra')->nullable();
        });

        Schema::create('admins', function (Blueprint $table) {
            $table->id();
            $table->string('Email')->unique();
            $table->string('Password');
            $table->string('FirstName');
            $table->string('LastName');
            $table->timestamps();
        });

    }

    public function down()
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists("user_types");
        Schema::dropIfExists('admins');
    }
}
