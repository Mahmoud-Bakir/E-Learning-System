<?php

namespace App\Models\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;
    
    public function userType()
    {
        return $this->belongsTo(UserType::class);
    }

    public function parentRelationships()
    {
        return $this->hasMany(UserRelationship::class, 'parent_id');
    }

    public function childRelationships()
    {
        return $this->hasMany(UserRelationship::class, 'child_id');
    }
}
