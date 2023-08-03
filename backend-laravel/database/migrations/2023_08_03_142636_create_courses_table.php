<?php


use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCoursesTable extends Migration
{
    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id('ID');
            $table->string('CourseName');
            $table->text('Description')->nullable();
            $table->integer('EnrollmentLimit')->nullable();
            $table->unsignedBigInteger('TeacherID'); // The foreign key to users table
            $table->unsignedBigInteger('meetType')->nullable(); // The foreign key to meetingtypes table
            $table->timestamps();
        });

        Schema::create('student_enrollments', function (Blueprint $table) {
            $table->id('ID');
            $table->unsignedBigInteger('UserID'); // The foreign key to users table
            $table->unsignedBigInteger('CourseID'); // The foreign key to courses table
            $table->date('EnrollmentDate');
            $table->integer('attendance');
            $table->integer('progress');
            $table->timestamps();
        });

        Schema::create('course_materials', function (Blueprint $table) {
            $table->id('ID');
            $table->unsignedBigInteger('CourseID'); // The foreign key to courses table
            $table->string('Title');
            $table->text('Description')->nullable();
            $table->string('FileURL')->nullable();
            $table->timestamps();
        });

        Schema::create('assignments', function (Blueprint $table) {
            $table->id('AssignmentID');
            $table->unsignedBigInteger('CourseID'); // The foreign key to courses table
            $table->string('Title');
            $table->text('Description')->nullable();
            $table->date('DueDate')->nullable();
            $table->timestamps();
        });
        
        Schema::create('submissions', function (Blueprint $table) {
            $table->id('ID');
            $table->unsignedBigInteger('EnrollmentID'); // The foreign key to student_enrollments table
            $table->unsignedBigInteger('AssignmentID'); // The foreign key to assignments table
            $table->string('Filepath')->nullable();
            $table->timestamps();
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
