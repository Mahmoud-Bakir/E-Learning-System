<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\StudentController;

Route::group(["prefix" => "Admin"], function(){

  Route::post("/createuser", [AuthController::class, "signUp"]);
  Route::post("/updateuser", [AdminController::class, "updateUser"]);
  Route::post("/deleteuser", [AdminController::class, "deleteUser"]);

  Route::post("/createcourse", [AdminController::class, "createClass"]);
 });



 Route::group(["prefix" => "Teacher"], function(){
 });



 Route::group(["prefix" => "Parent"], function(){
 });



 Route::group(["prefix" => "Student"], function(){
    Route::get("/get_all_courses", [StudentController::class, "getAllCourses"]);
    Route::get("/get_all_enrolled_courses", [StudentController::class, "getEnrolledCourses"]);
    Route::post("/enroll", [StudentController::class, "enrollUserInCourse"]);
    Route::post("/class_assignments", [StudentController::class, "getCourseAssignments"]);
 });




Route::get("unauthorized", [AuthController::class, "unauthorized"])->name("unauthorized");
Route::post("/login", [AuthController::class, "logIn"]);
Route::post("/logout", [AuthController::class, "logout"]);
