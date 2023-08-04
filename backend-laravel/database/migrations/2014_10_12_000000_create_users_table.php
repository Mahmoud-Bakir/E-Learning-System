<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    public function up()
    {   

        Schema::create('user_types', function (Blueprint $table) {
            $table->id();
            $table->string('role');
            $table->string('extra')->nullable();
        });


        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_type'); // The foreign key to user_types
            $table->string('email')->unique();
            $table->string('password');
            $table->string('first_name');
            $table->string('last_name');
            $table->timestamps();

            // Add foreign keys
            $table->foreign('UserType')->references('id')->on('user_types')->onDelete('cascade');

        });

      
        Schema::create('user_relationships', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('parent_id');
            $table->unsignedBigInteger('child_id');
            $table->timestamps();

            // Add foreign keys
            $table->foreign('parent_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('child_id')->references('id')->on('users')->onDelete('cascade');
        });

    }

    public function down()
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists("user_types");
        Schema::dropIfExists('user_relationships');
    }
}
