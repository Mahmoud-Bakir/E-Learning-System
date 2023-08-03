<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id('UserID');
            $table->unsignedBigInteger('UserType'); // The foreign key to user_types
            $table->string('Username')->unique();
            $table->string('Email')->unique();
            $table->string('Password');
            $table->string('FirstName');
            $table->string('LastName');
            // Add other user-related columns as needed
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('users');
    }
}
