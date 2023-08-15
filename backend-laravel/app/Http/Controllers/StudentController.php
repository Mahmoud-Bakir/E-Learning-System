<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Course;
use App\Models\CourseMaterial;
use App\Models\User;
use App\Models\StudentEnrollment;
use App\Models\Assignment;
use App\Models\Submission;


class StudentController extends Controller {

    function getAllCourses() {
        try {
            $auth_user = Auth::user();

            if (!$auth_user) {
                return response()->json(['error' => 'User is not authenticated.'], 401);
            }

            $enrolledCoursesIds = $auth_user->courses()->pluck('courses.id')->toArray();

            // $courses = Course::whereNotIn('id', $enrolledCoursesIds)->get();
            $courses = Course::whereNotIn('id', $enrolledCoursesIds)->with('teacher')->get();

        return response()->json([
            "status" => "success",
            "data" => $courses
        ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'An error occurred while fetching enrolled courses.',
                'exception'=> $e->getMessage()], 500);
        }
    }

    function enrollUserInCourse(Request $request) {

        $request->validate([
            'course_id' => 'required|exists:courses,id',
        ]);

        $userId = Auth::id();
        $courseId = $request->course_id;

        $user = User::find($userId);
        $course = Course::find($courseId);

        if (!$user || !$course) {
            return response()->json(['error' => 'User or course not found.'], 404);
        }

        if ($user->courses()->where('course_id', $courseId)->exists()) {
            return response()->json(['error' => 'User is already enrolled in this course.'], 409);
        }

        $user->courses()->attach($courseId, [
            'enrollment_date'=> now(),
            'attendance' => 0,
            ]);

            $classes_enrolled = $user->courses()->where('course_id', $courseId)->with('teacher')->first();

        return response()->json([
            "message" => "Enrollment successful.",
            "class enrolled" => $classes_enrolled,
            ], 200);
    }

    function getEnrolledCourses() {
        try {
            $auth_user = Auth::user();

            if (!$auth_user) {
                return response()->json(['error' => 'User is not authenticated.'], 401);
            }

            $classes_enrolled = $auth_user->courses()->with("teacher")->get();

            return response()->json([
                "status" => "success",
                "data" => $classes_enrolled
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'An error occurred while fetching enrolled courses.',
                'exception'=> $e->getMessage()], 500);
        }
    }

    function getCourseAssignments(Request $request) {
        $auth_user = Auth::user();

            if (!$auth_user) {
                return response()->json(['error' => 'User is not authenticated.'], 401);
            }

            $request->validate([
                'course_id' => 'required|exists:courses,id',
            ]);

            $courseId = $request->course_id;

            $course = Course::find($courseId);

            if (!$course) {
                return response()->json(['error' => 'Course not found.'], 404);
            }

            $class_assignments = $course->assignments()->with('submissions')->get();

            return response()->json([
                "message" => "Success.",
                "class assignments" => $class_assignments,
                ], 200);
    }

    public function submitAssignment(Request $request) {
        $request->validate([
            'assignment_id' => 'required|exists:assignments,id',
            // 'Filepath' => 'required|file|mimes:pdf,doc,docx|max:2048',
        ]);

        $userId = Auth::id();
        $assignmentId = $request->assignment_id;
        $filePath = $request->Filepath;

        $submission = new Submission([
            'student_id' => $userId,
            'assignment_id' => $assignmentId,
            'Filepath' => $filePath,
            'grade' => null,
        ]);

        $submission->save();

        return response()->json([
            'message' => 'Assignment submitted successfully.',
        ], 200);
    }

}
