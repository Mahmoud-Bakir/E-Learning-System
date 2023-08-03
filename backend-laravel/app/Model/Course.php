<?php

namespace App\Models\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    public function teacher(){
        return $this->belongsTo(User::class, 'TeacherID', 'ID');
    }

    public function meetingType(){
        return $this->belongsTo(MeetingType::class, 'meetType', 'id');
    }

}
