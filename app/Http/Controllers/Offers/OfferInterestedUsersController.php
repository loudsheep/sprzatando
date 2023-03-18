<?php

namespace App\Http\Controllers\Offers;

use App\Http\Controllers\Controller;
use App\Models\Offer;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OfferInterestedUsersController extends Controller
{
    public function show(Offer $offer)
    {
        $this->authorize('update', $offer);

        $interestedUsers = $offer->usersInterested()
            ->withAvg('reviews', 'rating')
            ->withCount('contractedOffers')
            ->get()
            ->each(function ($i, $k) {
                $i->makeVisible(['email', 'created_at']);
            })
            ->toArray();

        return Inertia::render('Offers/UsersInterested', [
            'offer' => $offer,
            'interestedUsers' => $interestedUsers
        ]);
    }

    public function store(Offer $offer, User $user)
    {
        $this->authorize('update', $offer);

        dd($offer, $user);

        // TODO the rest of this method
    }
}
