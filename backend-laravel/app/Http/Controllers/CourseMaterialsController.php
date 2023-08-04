<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\CourseMaterial;

class CourseMaterialsController extends Controller {

    function fetchCourseMaterials(Request $request) {

        $course_id = $request->course_id;
        $course = Course::find($course_id);

        if (!$course) {
            return response()->json(['error' => 'Course not found.'], 404);
        }

        $courseMaterials = CourseMaterial::where('course_id', $course_id)->get();

        return response()->json(['courseMaterials' => $courseMaterials]);

    }

}
