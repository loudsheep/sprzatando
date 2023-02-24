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
        'creator_id',
        'city',
        'zip_code',
        'price',
        'category',
        'title',
        'description',
        'ends',
        'main_image',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'is_done',
        'is_reported',
        'is_banned',
    ];

    // relations
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

    public function images()
    {
        return $this->hasMany(OfferImages::class, 'offer_id', 'id');
    }

    public function review()
    {
        return $this->hasOne(UserReviews::class, 'offer_id', 'id');
    }

    // queries
    public static function getOffersForMainPage()
    {
        return Offer::with('creator')->orderBy('created_at', 'desc')
            ->where('is_done', '==', 'false')
            ->where('is_banned', '==', 'false')
            ->has('creator');
    }
}
