<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\User;


class coursesController extends Controller {

    function getAllCourses() {
        try {
        $courses = Course::all();

        $courseArray = [];

        foreach ($courses as $course) {
            $courseArray[] = [
                'id' => $course->id,
                'name' => $course->course_name,
                'description' => $course->description,
                'limit' => $course->limit,
                'teacher_id' => $course->teacher_id,
                'meeting_link' => $course->meeting_link,
                'sessions_number' => $course->sessions_number
            ];
        }

        return response()->json(['courses' => $courseArray]);
        } catch (Exception $e) {
        return response()->json(['error' => 'An error occurred while fetching courses.'], 500);
        }
    }

}
