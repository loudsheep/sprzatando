<?php

namespace App\Http\Controllers\Offers;

use App\Http\Controllers\Controller;
use App\Models\Offer;
use App\Models\User;
use Inertia\Inertia;

class OfferInterestedUsersController extends Controller
{
    public function show(Offer $offer)
    {
        $this->authorize('update', $offer);

        if ($offer->done_at !== null) {
            abort(404);
        }

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
            || $offer->done_at !== null || $offer->is_banned
        ) {
            abort(403);
        }

        $offer->contractor()->associate($user);
        $offer->done_at = now();
        $offer->save();

        return redirect()->route('offers.created')->with('tab', 'done');
    }
}
