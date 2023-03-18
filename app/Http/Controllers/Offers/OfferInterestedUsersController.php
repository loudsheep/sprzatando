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
        $interestedUsers = $offer->usersInterested()->get()->toArray();

        return Inertia::render('Offers/UsersInterested', [
            'interestedUsers' => $interestedUsers
        ]);
    }
}
