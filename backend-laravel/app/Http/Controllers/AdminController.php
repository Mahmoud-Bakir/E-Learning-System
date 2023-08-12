<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

use App\Models\User;
use App\Models\Course;


class AdminController extends Controller{

    public function updateUser(Request $request){
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


    
}
