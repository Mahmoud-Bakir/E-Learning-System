<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;

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
 });



 Route::group(["prefix" => "Student"], function(){
 });




Route::get("unauthorized", [AuthController::class, "unauthorized"])->name("unauthorized");
Route::post("/login", [AuthController::class, "logIn"]);
Route::post("/logout", [AuthController::class, "logout"]);