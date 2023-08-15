<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assignment extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'description',
        'due_date',
        'total_grade',
        'course_name',
        'course_id',
    
    ];
    public function course()
    {
        return $this->belongsTo(Course::class, 'course_id', 'id');
    }

    public function submissions()
    {
        return $this->hasMany(Submission::class, 'assignment_id', 'id');
    }
}