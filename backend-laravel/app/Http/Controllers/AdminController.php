<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

use App\Models\User;
use App\Models\Course;
use App\Models\Category;
use App\Models\StudentEnrollment;
use App\Models\Submission;


class AdminController extends Controller{

    function updateUser(Request $request){
        $user_id = $request->user_id;
        $validator = Validator::make($request->all(), [
            'first_name' => 'string',
            'last_name' => 'string',
            'email' => 'email|unique:users,email',
            'user_type' => 'exists:user_types,id',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::find($user_id);
        if(!$user){return response() -> json(['Error' => 'No user found'],404);}

        $user->update($request->only([
            'first_name' ??$user->first_name,
            'last_name' ??$user->last_name,
            'email' ??$user->email,
            'user_type' ??$user->user_type
        ]));

        return response()->json([
            'status' => 'success',
            'message' => 'User account updated successfully',
            'data' => [
                'user_id' => $user_id,
                'user' => $user,
            ],
        ]);
    }

    function deleteUser(Request $request){
        $userId = $request->user_id;
        $user = User::find($userId);

        if(!$user){return response() -> json(['Error' => 'No user found'],404);}

        $user->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'User account deleted successfully',
        ]);
    }

    function createClass (Request $request){

        $validator = Validator::make($request->all(), [
            'teacher_email' => 'required|email',
            'course_name' => 'required|unique:courses',
            'category_name' => 'required|string',
            'enrollment_limit' => 'required|numeric|min:0',
            'sessions_number' => 'required|numeric|min:0',
            'meeting_link' => 'required|unique:courses',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $teacher_email = $request->teacher_email;
        $teacher = User::where('email', $teacher_email)->first();

        if (!$teacher || $teacher->user_type != 2) {
            return response()->json(["No teacher was found, try again"],404);
        }

        $categoryName = $request->category_name;
        $category = Category::where('category', $categoryName)->first();

        if (!$category) {
            $category = new Category();
            $category->category = $categoryName;
            $category->save();
            return response()->json(["Category created, please try again"]);
        }

        $course = new Course();
        $course->teacher_id = $teacher->id;
        $course->course_name = $request->course_name;
        $course->description = $request->description;
        $course->category_id = $category->id;
        $course->enrollment_limit = $request->enrollment_limit;
        $course-> sessions_number = $request->sessions_number;
        $course-> meeting_link = $request->meeting_link;
        $course->save();

        return response() -> json([
            'message' => 'Course created successfully',
            'Teacher Email' => $teacher->email,
            'course' => $course,
        ]);
            
    }

    function updateCourse(Request $request){
    
        $course = Course::find($request->course_id);
        if(!$course){return response() -> json(['Error' => 'No course found'],404);}


        $course->update([
            'course_name' => $request->course_name?? $course->course_name,
            'description' => $request->description ?? $course->description,
            'enrollment_limit' => $request->enrollment_limit?? $course->enrollment_limit,
            'sessions_number' => $request->sessions_number?? $course->sessions_number,
            'meeting_link' => $request->meeting_link?? $course->meeting_link,
        ]);

        return response()->json([
            'message' => 'Course updated successfully',
            'course' => $course,
        ]);
    }

    function deleteCourse(Request $request){
        $course = Course::find($request->course_id);
        if(!$course){return response() -> json(['Error' => 'No course found'],404);}

        $course->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'User course deleted successfully',
        ]);
    }

    function getAllCoursesAnalytics(Request $request){
        $courses = Course::all();

        $analytics = [];

        foreach ($courses as $course) {
            $course_id = $course->id;

            $averageAttendance = StudentEnrollment::where('course_id', $course_id)->avg('attendance');
            $enrollmentCount = StudentEnrollment::where('course_id', $course_id)->count();
            $averageGrade = Submission::join('assignments', 'submissions.assignment_id', '=', 'assignments.id')
                ->where('assignments.course_id', $course_id)->avg('submissions.grade');

            $analytics[] = [
                'course' => $course,
                'enrollment_count' => $enrollmentCount,
                'average_attendance' => $averageAttendance,
                'average_grade' => $averageGrade,
            ];
        }

        return response()->json([
            'analytics' => $analytics,
        ]);
    }

    function getCourseStudentsAnalytics(Request $request){
        $course_id = $request->course_id; 
        $course = Course::find($course_id);

        if (!$course) {
            return response()->json([
                'message' => 'Course not found',
            ], 404);
        }

        $enrollments = StudentEnrollment::where('course_id', $course_id)->get();

        $analytics = [];

        foreach ($enrollments as $enrollment) {
            $student_id = $enrollment->student_id;
            $student = User::find($student_id);

            $attendance = $enrollment->attendance;

            $assignments = Submission::join('assignments', 'submissions.assignment_id', '=', 'assignments.id')
                ->where('submissions.student_id', $student_id)
                ->where('assignments.course_id', $course_id)
                ->select('assignments.title as assignment_title', 'submissions.grade')
                ->get();

            $analytics[] = [
                'student' => $student,
                'attendance' => $attendance,
                'assignments' => $assignments,
            ];
        }

        return response()->json([
            'course' => $course,
            'student_analytics' => $analytics,
        ]);
    }

    function getStudentCoursesAnalytics(Request $request){
        $student_id = $request->student_id;
        $student = User::find($student_id);

        if (!$student) { return response()->json([ 'message' => 'Student not found',], 404);}

        $enrollments = StudentEnrollment::where('student_id', $student_id)->get();

        $analytics = [];

        foreach ($enrollments as $enrollment) {
            $course_id = $enrollment->course_id;
            $course = Course::find($course_id);

            $attendance = $enrollment->attendance;

            $submissionDetails = Submission::join('assignments', 'submissions.assignment_id', '=', 'assignments.id')
                ->where('submissions.student_id', $student_id)
                ->where('assignments.course_id', $course_id)
                ->select('assignments.title as assignment_title', 'submissions.grade')
                ->get();

            $analytics[] = [
                'course' => $course,
                'attendance' => $attendance,
                'submissions' => $submissionDetails,
            ];
        }

        return response()->json([
            'student' => $student,
            'course_analytics' => $analytics,
        ]);
    }

}
