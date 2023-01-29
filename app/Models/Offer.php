<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'city',
        'zip_code',
        'hourly_rate',
        'category',
        'description',
        'ends',
        'image',
    ];


    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id', 'id');
    }

    public function contractor()
    {
        return $this->belongsTo(User::class, 'contractor_id', 'id');
    }

    public function usersIntrested()
    {
        return $this->belongsToMany(User::class, 'intrested_in_offer', 'offer_id', 'intrested_user_id')
            ->withTimestamps();
    }
}
