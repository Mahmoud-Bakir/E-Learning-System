<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CoursesController;
use App\Http\Controllers\CourseMaterialsController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Added by Student-backend (Joe)
Route::post("login", [AuthController::class, "login"]);
Route::post("register", [AuthController::class, "register"]);

Route::get("get_all_courses", [CoursesController::class, "getAllCourses"]);

Route::post("fetch_course_materials", [CourseMaterialsController::class, "fetchCourseMaterials"]);
