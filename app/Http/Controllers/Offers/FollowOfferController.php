<?php

namespace App\Http\Controllers\Offers;

use App\Http\Controllers\Controller;
use App\Models\Offer;
use Illuminate\Http\Request;

class FollowOfferController extends Controller
{
    public function store(Offer $offer) {
        if($offer->creator == auth()->user()) {
            return;
        }
        return auth()->user()->interestedInOffers()->toggle($offer);
    }
}
