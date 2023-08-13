<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Course;
use App\Models\CourseMaterial;
use App\Models\User;
use App\Models\StudentEnrollment;

class ParentController extends Controller {


    function getAllChildrenData(){
        $auth_user = Auth::user();
        if (!$auth_user) {
            return response()->json(['error' => 'User is not authenticated.'], 401);
        }
        $userId = Auth::id();
        $parent = User::find($userId);


        if ($parent) {
            $children = $parent->children()->select('users.id', 'users.first_name', 'users.last_name')->get();

            foreach ($children as $child) {
                $childData = [
                    'id' => $child->id,
                    'full_name' => $child->first_name . ' ' . $child->last_name,
                    'average_grade' => 0,
                    'classes' => [],
                ];

                $classesForChild = $child->courses;

                foreach ($classesForChild as $class) {
                    $classMaterials = $class->materials;
                    $classAssignments = $class->assignments;
                    $teacher = $class->teacher;

                    $classData = [
                        'id' => $class->id,
                        'course_name' => $class->course_name,
                        'description'=>$class->description,
                        'sessions_number'=>$class->sessions_number,
                        'teacher' => [
                            'id' => $teacher->id,
                            'full_name' => $child->first_name . ' ' . $child->last_name,
                        ],
                        // 'pivot' => $class->pivot,
                        'materials' => [],
                        'assignments' => [],
                        'average_class_grade' => 0,
                        'attendance' => $class->pivot->attendance,
                    ];

                    foreach ($classMaterials as $material) {
                        $materialData = [
                            'id' => $material->id,
                            'title' => $material->title,
                            'description' => $material->description,
                            'file_URL' => $material->file_URL,
                        ];

                        $classData['materials'][] = $materialData;
                    }

                    $classTotalGradeSum = 0;
                    $classTotalSubmissions = 0;

                    foreach ($classAssignments as $assignment) {
                        $assignmentSubmissions = $assignment->submissions->where('student_id', $child->id);
                        $totalGradeSum = $assignmentSubmissions->sum('grade');
                        $totalSubmissions = $assignmentSubmissions->count();
                        $averageGrade = ($totalSubmissions > 0) ? $totalGradeSum / $totalSubmissions : 0;

                        $submissionData = [];
                        foreach ($assignmentSubmissions as $submission) {
                            $submissionData[] = [
                                'id' => $submission->id,
                                'grade' => $submission->grade,
                            ];
                        }

                        $assignmentData = [
                            'id' => $assignment->id,
                            'title' => $assignment->title,
                            'submissions' => $submissionData,
                        ];

                        $classData['assignments'][] = $assignmentData;
                        $classTotalGradeSum += $totalGradeSum;
                        $classTotalSubmissions += $totalSubmissions;
                    }
                    $classData['average_class_grade'] = ($classTotalSubmissions > 0)? $classTotalGradeSum / $classTotalSubmissions: 0;

                    $childData['classes'][] = $classData;
                }
                $childData['average_grade'] = $childData['classes']
                    ? collect($childData['classes'])->pluck('average_class_grade')->avg(): 0;

                $childrenData[] = $childData;
            }
        }
        return response()->json(['data' => ['children' => $childrenData]]);

    }
    
}


