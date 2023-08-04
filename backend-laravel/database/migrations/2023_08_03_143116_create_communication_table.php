<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommunicationTable extends Migration{
    
    public function up(){

        Schema::create('message_types', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->string('extra')->nullable();
            $table->timestamps();
        });

        Schema::create('communication', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('SenderID');
            $table->unsignedBigInteger('ReceiverID');
            $table->unsignedBigInteger('MessageType');
            $table->string('MessageContent');
            $table->date('DateSent');
            $table->timestamps();

            // Add f;
            $table->foreign('SenderID')->references('id')->on('users');
            $table->foreign('ReceiverID')->references('id')->on('users');
            $table->foreign('MessageType')->references('id')->on('message_types');
        });

      
    }

    public function down(){
        Schema::dropIfExists('communication');
        Schema::dropIfExists('message_types');
        }
}
