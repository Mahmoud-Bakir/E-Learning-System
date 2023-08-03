<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommunicationTable extends Migration{
    
    public function up(){
        Schema::create('communication', function (Blueprint $table) {
            $table->id('CommunicationID');
            $table->unsignedBigInteger('SenderID'); // The foreign key to users table
            $table->unsignedBigInteger('ReceiverID'); // The foreign key to users table
            $table->unsignedBigInteger('MessageType'); // The foreign key to messageTypes table
            $table->string('MessageContent');
            $table->date('DateSent');
            $table->timestamps();
        });

        Schema::create('meetingtypes', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->unsignedBigInteger('user'); // The foreign key to users table
            $table->timestamps();
        });
    }

    public function down(){
        Schema::dropIfExists('communication');
        Schema::dropIfExists('meetingtypes');
    }
}
