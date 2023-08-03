<?php

namespace App\Models\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Submission extends Model
{
    use HasFactory;

    public function enrollment(){
        return $this->belongsTo(StudentEnrollment::class, 'EnrollmentID', 'ID');
    }

    public function assignment(){
        return $this->belongsTo(Assignment::class, 'AssignmentID', 'AssignmentID');
    }
}
