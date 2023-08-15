<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Course;
use App\Models\Assignment;
use App\Models\CourseMaterial;
use Illuminate\Support\Facades\Validator;




class TeacherController extends Controller
{

   function createAssignment(Request $request) {
    $course_name= $request->course_name;
    $course_id = Course::where("course_name",$course_name)->first();
    $assignment = new Assignment();
    $assignment->title = $request->title;
    $assignment->description = $request->description;
    $assignment->due_date = $request->date;
    $assignment->total_grade = $request->total_grade;
    $assignment->course_id = $course_id->id;
    $assignment->save();
    return response()->json([
        "message" => "assignment created.",
        "assignment" => $assignment,
        ], 200);
  }
  function createMaterial(Request $request) {
    $course_name= $request->course_name;
    $course_id = Course::where("course_name",$course_name)->first();
    $material = new CourseMaterial();
    $material->course_id = $course_id->id;
    $material->title = $request->title;
    $material->description = $request->description;
    $material->file_URL = $request->file_URL;
    $material->save();
    return response()->json([
        "message" => "material created.",
        "assignment" => $material,
        ], 200);
  }

  function getClasses(){
    $auth_user = Auth::user();
    $courses = $auth_user->teacherCourses()->get();
    return response()->json([
      "message" => "success",
      "courses" => $courses,
      ], 200);
  }
  function getCourseElements(Request $request){
    $auth_user = Auth::user();
    $course_name= $request->course_name;
    $course_id = Course::where("course_name",$course_name)->first();
    $course = Course::find($course_id);
    $assignments = $course->assignments()->get();
    $materials= $course->materials()->get();
    return response()->json([
      "message" => "success",
      "assignments" => $assignments,
      "materials" => $materials,
      ], 200);
  }
  function getAssignmentSubmissions(Request $request){
    $auth_user = Auth::user();
    $assignment = Assignment::find($request->assignment_id);
    $submissions = $assignment->submissions()->get();
    return response()->json([
      "message" => "success",
      "submission" => $submissions,
      ], 200);
  }
}
