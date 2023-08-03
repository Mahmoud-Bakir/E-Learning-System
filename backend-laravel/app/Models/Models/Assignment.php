<?php

namespace App\Models\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assignment extends Model
{
    use HasFactory;

    public function course(){
        return $this->belongsTo(Course::class, 'CourseID', 'ID');
    }
}
