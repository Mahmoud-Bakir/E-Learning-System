<?php

namespace App\Models;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

    protected $appends = ['FullName'];
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

     /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }


    public function userType()
    {
        return $this->belongsTo(UserType::class);
    }

    public function parentRelationships()
     //Edited By Sally (, 'id')
    {
        return $this->hasMany(UserRelationship::class, 'parent_id', 'id');
    }

    public function childRelationships()
    {
        return $this->hasMany(UserRelationship::class, 'child_id');
    }


    public function courses(){
        return $this->belongsToMany(Course::class, 'student_enrollments', 'student_id', 'course_id')
                    ->withPivot('enrollment_date', 'attendance', 'progress');
    }

    //Added By Sally

    public function getFullNameAttribute() {
        return implode(" ", [$this->first_name, $this->last_name]);

        //$assg = Assignment::all()->pluck("grade")
    }

    public function children()
    {
        return $this->hasManyThrough(User::class, UserRelationship::class, 'parent_id', 'id', 'id', 'child_id');
    }

    public function enrollments()
    {
        return $this->hasMany(StudentEnrollment::class, 'student_id', 'id');
    }


    //Added By Sally
}



