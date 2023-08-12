<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'course_name',
        'description',
        'enrollment_limit',
        'sessions_number',
        'meeting_link' ,
    ];

    public function teacher()
    {
        return $this->belongsTo(User::class, 'teacher_id');
    }

    public function enrollments()
    {
        return $this->hasMany(StudentEnrollment::class, 'CourseID');
    }
    
    public function materials()
    {
        return $this->hasMany(CourseMaterial::class, 'CourseID');
    }
    
    public function assignments()
    {
        return $this->hasMany(Assignment::class, 'CourseID');
    }

}