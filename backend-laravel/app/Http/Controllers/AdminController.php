<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

use App\Models\User;
use App\Models\Course;


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

        $user->update($request->only(['first_name', 'last_name', 'email', 'user_type']));

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
            'teacher_name' => 'required',
            'course_name' => 'required|unique:courses',
            'description' => 'required|string',
            'category_name' => 'required|string',
            'enrollment_limit' => 'required|numeric',
            'sessions_number' => 'required|numeric',
            'meeting_link' => 'required|unique:courses',
            
            'user_type' => 'exists:user_types,id',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $teacher_name = $request->teacher_name;
        $teacher = Category::where('first_name', $teacher_name)->first();

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

        $course = new course ();
        $course->teacher_id = $request->teacher->id;
        $course->course_name = $request->course_name;
        $course->description = $request->description;
        $course->category_id = $request->category->id;
        $course->enrollment_limit = $request->enrollment_limit;
        $course-> sessions_number = $request->sessions_number;
        $course-> meeting_link = $request->meeting_link;
        $course->save();

        return response() -> json([
            'message' => 'Course created successfully',
            'course' => $course,
        ]);
            
    }
    
}
