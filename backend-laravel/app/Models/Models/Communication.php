<?php

namespace App\Models\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Communication extends Model
{
    use HasFactory;

    public function sender(){
        return $this->belongsTo(User::class, 'SenderID', 'ID');
    }

    public function receiver(){
        return $this->belongsTo(User::class, 'ReceiverID', 'ID');
    }

    public function messageType(){
        return $this->belongsTo(MessageType::class, 'MessageType', 'id');
    }
}
