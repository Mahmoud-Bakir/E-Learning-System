<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ParentController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;
Route::group(["middleware" => "auth:api"], function (){
  Route::group(["middleware" => "auth.admin","prefix"=>"Admin"], function (){
    
  Route::post("/create_course", [AdminController::class, "createClass"]);
  Route::post("/update_course", [AdminController::class, "updateCourse"]);
  Route::post("/delete_course", [AdminController::class, "deleteCourse"]);

  Route::get("/get_students", [AdminController::class, "getAllStudents"]);
  Route::get("/courses_analytics", [AdminController::class, "getAllCoursesAnalytics"]);
  Route::post("/course_students_analytics", [AdminController::class, "getCourseStudentsAnalytics"]);
  Route::post("/student_analytics", [AdminController::class, "getStudentCoursesAnalytics"]);

 });

 Route::group(["prefix" => "Teacher"], function(){
  Route::post("/create_assignment", [TeacherController::class, "createAssignment"]);
  Route::get("/courses", [TeacherController::class, "getClasses"]);
  Route::post("/course_assignments", [TeacherController::class, "getCourseAssignments"]);
  Route::post("/course_elements", [TeacherController::class, "getCourseElements"]);
  Route::post("/submission", [TeacherController::class, "getAssignmentSubmissions"]);
 });

 Route::group(["prefix" => "Parent"], function(){
   Route::get("/get_all_children_Data", [ParentController::class, "getAllChildrenData"]);
 });

 Route::group(["prefix" => "Student"], function(){
    Route::get("/get_all_courses", [StudentController::class, "getAllCourses"]);
    Route::get("/get_all_enrolled_courses", [StudentController::class, "getEnrolledCourses"]);
    Route::post("/enroll", [StudentController::class, "enrollUserInCourse"]);
    Route::post("/class_assignments", [StudentController::class, "getCourseAssignments"]);
    Route::post("/submit_assignment", [StudentController::class, "submitAssignment"]);
  
 });

});


Route::get("unauthorized", [AuthController::class, "unauthorized"])->name("unauthorized");
Route::post("/login", [AuthController::class, "logIn"]);
Route::post("/logout", [AuthController::class, "logout"]);
