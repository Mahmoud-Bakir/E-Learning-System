<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseMaterial extends Model
{
    use HasFactory;
    //Edited By Sally
    public function course(){
        return $this->belongsTo(Course::class, 'course_id', 'id');
    }
}
