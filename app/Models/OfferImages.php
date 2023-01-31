<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OfferImages extends Model
{
    use HasFactory;

    protected $fillable = [
        'url'
    ];

    public function offer()
    {
        return $this->belongsTo(Offer::class, 'offer_id', 'id');
    }
}
