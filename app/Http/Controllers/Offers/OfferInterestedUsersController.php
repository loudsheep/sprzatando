<?php

namespace App\Http\Controllers\Offers;

use App\Http\Controllers\Controller;
use App\Models\Offer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OfferInterestedUsersController extends Controller
{
    public function show(Offer $offer)
    {
        $interestedUsers = $offer->usersInterested()
            ->withAvg('reviews', 'rating')
            ->withCount('contractedOffers')
            ->get()
            ->each(function ($i, $k) {
                $i->makeVisible(['email', 'created_at']);
            })
            ->toArray();

        dd($interestedUsers);
        return Inertia::render('Offers/UsersInterested', [
            'interestedUsers' => $interestedUsers
        ]);
    }
}
