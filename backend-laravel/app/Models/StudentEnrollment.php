<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentEnrollment extends Model
{
    use HasFactory;

    public function user(){
        return $this->belongsTo(User::class, 'user_id','id');
    }

    public function course(){
        return $this->belongsTo(Course::class, 'course_id','id');
    }

    public function submissions(){
        return $this->hasMany(Submission::class, 'EnrollmentID');
    }
}
