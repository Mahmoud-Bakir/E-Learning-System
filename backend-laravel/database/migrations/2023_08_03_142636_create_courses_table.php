<?php


use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCoursesTable extends Migration
{
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('category')->unique();
            $table->timestamps();
        });

        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('teacher_id'); // The foreign key to users table
            $table->string('course_name');
            $table->text('description')->nullable();
            $table->unsignedBigInteger('category_id');
            $table->integer('enrollment_limit')->nullable();
            $table->integer('sessions_number')->nullable();
            $table->string('meeting_link');
            $table->string('calendly_link')->nullable();
            $table->timestamps();

            $table->foreign('teacher_id')->references('id')->on('users');
            $table->foreign('category_id')->references('id')->on('categories');

        });

     

        Schema::create('student_enrollments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('student_id'); // The foreign key to users table
            $table->unsignedBigInteger('course_id'); // The foreign key to courses table
            $table->date('enrollment_date');
            $table->integer('attendance')->default(0);;
            $table->timestamps();

            $table->foreign('student_id')->references('id')->on('users');
            $table->foreign('course_id')->references('id')->on('courses');
        });

        Schema::create('course_materials', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('course_id'); // The foreign key to courses table
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('file_URL')->nullable();
            $table->timestamps();

            $table->foreign('course_id')->references('id')->on('courses');
        });

        Schema::create('assignments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('course_id'); // The foreign key to courses table
            $table->string('title');
            $table->text('description')->nullable();
            $table->date('due_date')->nullable();
            $table->decimal('total_grade', 5, 2);
            $table->timestamps();

            $table->foreign('course_id')->references('id')->on('courses');
        });
        
        Schema::create('submissions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('student_id'); // The foreign key to student_enrollments table
            $table->unsignedBigInteger('assignment_id'); // The foreign key to assignments table
            $table->string('Filepath')->nullable();
            $table->decimal('grade', 5, 2)->nullable();
            
            $table->foreign('student_id')->references('student_id')->on('student_enrollments');
            $table->foreign('assignment_id')->references('id')->on('assignments');
        });
    }

    public function down()
    {
        Schema::dropIfExists('courses');
        Schema::dropIfExists('course_materials');
        Schema::dropIfExists('assignments');
        Schema::dropIfExists('submissions');
        Schema::dropIfExists('student_enrollments');
    }
}
