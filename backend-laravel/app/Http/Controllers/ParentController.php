<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Course;
use App\Models\CourseMaterial;
use App\Models\User;
use App\Models\StudentEnrollment;

class ParentController extends Controller {
    
    function getAllChildrenData() {
        $auth_user = Auth::user();
        if (!$auth_user) {
            return response()->json(['error' => 'User is not authenticated.'], 401);
        }
        $userId = Auth::id();
        $parent = User::find($userId);

        if ($parent) {
            $children = $parent->children()->select('users.id', 'users.first_name','users.last_name')->get();
        }
        foreach ($children as $child) {
            $classesForChild = $child->courses;
            $totalGradeSum = 0;
            $totalAssignments = 0;

            foreach ($classesForChild as $class) {
                $classMaterials = $class->materials;
                $classAssignments = $class->assignments;
                $teacher = $class->teacher;

                foreach ($classAssignments as $assignment) {
                    $assignmentSubmissions = $assignment->submissions;

                    // $assignmentGradeSum = $assignmentSubmissions->sum('grade');
                    // $totalGradeSum += $assignmentGradeSum;
                    // $totalAssignments++;
                }
                // $averageGrade = ($totalAssignments > 0) ? $totalGradeSum / $totalAssignments : 0;
                // $assignment->$averageGrade;
                // echo "Average grade for {$child->first_name} {$child->last_name}: $averageGrade\n";
                // , 'average'=> $averageGrade 
            }

            // $assignment->averageGrade;
        }
        return response()->json(['data' => ['children' => $children]]);
        
    }

    
}


