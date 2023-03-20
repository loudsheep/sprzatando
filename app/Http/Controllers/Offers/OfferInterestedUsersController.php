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

        if (
            !$offer->usersInterested->contains($user)
            || $offer->is_done || $offer->is_banned
        ) {
            abort(403);
        }

        $offer->contractor()->associate($user);
        $offer->is_done = true;
        $offer->save();

        // TODO change to back()
        dd($offer, $user);
        // return back();
    }
}
