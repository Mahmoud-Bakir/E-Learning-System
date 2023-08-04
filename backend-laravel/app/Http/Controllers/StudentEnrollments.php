<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Course;
use App\Models\User;
use App\Models\StudentEnrollment;

class StudentEnrollments extends Controller
{
    function enrollUserInCourse(Request $request) {

        $request->validate([
            'userId' => 'required|exists:users,id,user_type,student',
            'courseId' => 'required|exists:courses,id',
        ]);

        $userId = $request->user_id;
        $courseId = $request->course_id;

        $user = User::find($userId);
        $course = Course::find($courseId);

        if (!$user || !$course) {
            return response()->json(['error' => 'User or course not found.'], 404);
        }

        if ($user->courses()->where('course_id', $courseId)->exists()) {
            return response()->json(['error' => 'User is already enrolled in this course.'], 409);
        }

        $user->courses()->attach($courseId);

        return response()->json(['message' => 'Enrollment successful.'], 200);
    }


    function getUserProgress($userId) {

    $user = User::where('id', $userId)
                ->where('user_type', 2)
                ->first();

    if (!$user) {
        return response()->json(['data' => ['error' => 'Student not found.']], 404);
    }

    $enrollments = StudentEnrollment::where('student_id', $userId)->get();

    return response()->json(['data' => ['progress' => $enrollments]]);
}

    function getEnrolledCourses() {

    }
}
