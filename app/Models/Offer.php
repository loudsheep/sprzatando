<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    use HasFactory;

    public function creator() {
        return $this->belongsTo(User::class, 'creator_id', 'id');
    }

    public function contractor() {
        return $this->belongsTo(User::class, 'contractor_id', 'id');
    }
}
