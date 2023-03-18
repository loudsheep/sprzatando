<?php

namespace App\Http\Controllers\Offers;

use App\Http\Controllers\Controller;
use App\Models\Offer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FollowOfferController extends Controller
{
    public function store(Request $request, Offer $offer)
    {
        $this->authorize('follow', $offer);

        $request->user()->interestedInOffers()->toggle($offer);

        return back();
    }

    public function show(Request $request)
    {
        $interestedInOffers = $request->user()->interestedInOffers()->with('creator')
            ->where('is_done', '=', false)
            // ->where()
            ->get()->toArray();

        $contractedOffers = $request->user()->contractedOffers()->with('creator')->get()->toArray();

        return Inertia::render('Offers/InterestedInOffers', [
            'interestedInOffers' => $interestedInOffers,
            'doneOffers' => $contractedOffers,
        ]);
    }
}
