<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Course;
use App\Models\Assignment;
use Illuminate\Support\Facades\Validator;




class TeacherController extends Controller
{

   function createAssignment(Request $request) {
    $validator = Validator::make($request->all(), [
      'due_date' => 'required|date_format:Y-m-d'
  ]);

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
}
