<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Course;
use App\Models\Assignment;
use App\Models\CourseMaterial;
use App\Models\StudentEnrollment;
use App\Models\Submission;
use Illuminate\Support\Facades\Validator;




class TeacherController extends Controller
{

   function createAssignment(Request $request) {
    $assignment = new Assignment();
    $assignment->title = $request->title;
    $assignment->description = $request->description;
    $assignment->due_date = $request->date;
    $assignment->total_grade = $request->total_grade;
    $assignment->course_id = $request->id;
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

  function getClasses() {
    $auth_user = Auth::user();

    $courses = Course::join('categories', 'courses.category_id', '=', 'categories.id')
        ->leftJoin('student_enrollments', 'courses.id', '=', 'student_enrollments.course_id')
        ->select(
            'courses.id',
            'courses.course_name',
            'courses.description',
            'categories.category'
        )
        ->selectRaw('COUNT(student_enrollments.id) as enrollment_count')
        ->where('courses.teacher_id', $auth_user->id)
        ->groupBy('courses.id', 'courses.course_name', 'courses.description', 'categories.category')
        ->get();

    return response()->json([
        "message" => "success",
        "courses" => $courses,
    ], 200);
}

  function getCourseElements(Request $request){
    $auth_user = Auth::user();
    $course_id = $request->id;
    $course = Course::find($course_id);
    $assignments = $course->assignments()->get();
    $materials = $course->materials()->get();

    $averageAttendance = StudentEnrollment::where('course_id', $course_id)->avg('attendance');
    $averageGrade = Submission::join('assignments', 'submissions.assignment_id', '=', 'assignments.id')->where('assignments.course_id', $course_id)->avg('submissions.grade');

    $statistics = [
        "grade" => [
            'value' => $averageGrade
        ],
        "attendence" => [
            'value' => $averageAttendance,
        ]
    ];

    return response()->json([
        "message" => "success",
        "assignments" => $assignments,
        "materials" => $materials,
        "statistics" => $statistics,
        'meeting_link' => $course->meeting_link,
        'calendly_link' =>  $course->calendly_link,
    ], 200);
  }

  function addCalendly(Request $request)
  {
      $auth_user = Auth::user();
      $course_id = $request->id;
      $course = Course::find($course_id);
  
      if ($course) {
          $course->calendly_link = $request->calendly_link;
          $course->save();
  
          return response()->json([
              "message" => "Calendly link is set",
              'calendly_link' => $course->calendly_link,
          ], 200);
      } else {
          return response()->json([
              "message" => "Course not found",
          ], 404);
      }
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
