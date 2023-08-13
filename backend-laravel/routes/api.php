<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ParentController;
use App\Http\Controllers\StudentController;

Route::group(["prefix" => "Admin"], function(){

  Route::post("/create_user", [AuthController::class, "signUp"]);
  Route::post("/update_user", [AdminController::class, "updateUser"]);
  Route::post("/delete_user", [AdminController::class, "deleteUser"]);

  Route::post("/create_course", [AdminController::class, "createClass"]);
  Route::post("/update_course", [AdminController::class, "updateCourse"]);
  Route::post("/delete_course", [AdminController::class, "deleteCourse"]);

  Route::get("/courses_analytics", [AdminController::class, "getAllCoursesAnalytics"]);
  Route::post("/course_students_analytics", [AdminController::class, "getCourseStudentsAnalytics"]);
  Route::post("/student_analytics", [AdminController::class, "getStudentCoursesAnalytics"]);

 });



 Route::group(["prefix" => "Teacher"], function(){
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




Route::get("unauthorized", [AuthController::class, "unauthorized"])->name("unauthorized");
Route::post("/login", [AuthController::class, "logIn"]);
Route::post("/logout", [AuthController::class, "logout"]);
