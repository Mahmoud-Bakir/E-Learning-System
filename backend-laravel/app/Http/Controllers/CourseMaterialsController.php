<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\CourseMaterial;

class CourseMaterialsController extends Controller {

    function getCourseMaterials($courseId) {

    $course = Course::find($courseId);

    if (!$course) {
        return response()->json(['error' => 'Course not found.'], 404);
    }

    $courseMaterials = CourseMaterial::where('course_id', $courseId)->get();

    return response()->json(['data' => ['courseMaterials' => $courseMaterials]]);

    }

}
