<?php

namespace App\Http\Controllers\Offers;

use App\Http\Controllers\Controller;
use App\Models\Offer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FollowOfferController extends Controller
{
    public function store(Offer $offer) {
        if($offer->creator == auth()->user()) {
            abort(403);
        }
        auth()->user()->interestedInOffers()->toggle($offer);

        return redirect("/offer/{$offer->id}");
    }
}
