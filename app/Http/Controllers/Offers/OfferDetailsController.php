<?php

namespace App\Http\Controllers\Offers;

use App\Http\Controllers\Controller;
use App\Models\Offer;
use Illuminate\Http\Request;
use Inertia\Inertia;


class OfferDetailsController extends Controller
{
    public function show(Request $request, Offer $offer)
    {
        if($offer->is_banned && $request->user()->role === "user") {
            abort(404);
        }

        $ends = $offer->ends;

        // user that created this offer
        $creator = $offer->creator->toArray();

        // additional images MAY BE EMPTY! (does not include main image)
        $urls = [];
        $images = $offer->images->toArray();
        foreach ($images as $image) {
            array_push($urls, $image['url']);
        }

        // $offer = $offer->toArray();
        $offer->ends = date('d.m.Y', strtotime($ends));
        // $offer["ended"] = false;

        // info about user
        $user = $request->user();

        $isLoggedIn = $user != null;
        $isOwner = $isLoggedIn && $user->id === $offer["creator_id"];
        $isAdmin = $isLoggedIn && $user->role === "admin";
        $isRegularUser = !$isAdmin;
        $currentUserInterestedInOffer = $isLoggedIn && $offer->usersIntrested()->where('users.id', '=', $user->id)->get()->count() > 0;

        return Inertia::render('Offers/OfferDetails', [
            "offer" => $offer->toArray(),
            'creator' => $creator,
            'images' => $urls,
            'isBanned' => $offer->is_banned,

            'isLoggedIn' => $isLoggedIn,
            'isOwner' => $isOwner,
            'isAdmin' => $isAdmin,
            'isRegularUser' => $isRegularUser,
            'currentUserInterestedInOffer' => $currentUserInterestedInOffer,
        ]);
    }
}
