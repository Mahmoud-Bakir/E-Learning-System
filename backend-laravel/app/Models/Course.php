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
        return $this->belongsTo(User::class, 'teacher_id', 'id');
    }

    public function enrollments()
    {
        return $this->hasMany(StudentEnrollment::class, 'course_id');
    }

    public function materials()
    {
        return $this->hasMany(CourseMaterial::class, 'course_id', 'id');
    }
    public function assignments()
    {
        return $this->hasMany(Assignment::class, 'course_id', 'id');
    }

}
