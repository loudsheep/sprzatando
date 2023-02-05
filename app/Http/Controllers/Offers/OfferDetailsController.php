<?php

namespace App\Http\Controllers\Offers;

use App\Http\Controllers\Controller;
use App\Models\Offer;
use Illuminate\Http\Request;
use Inertia\Inertia;


class OfferDetailsController extends Controller
{
    // public function show(Request $request)
    // {
    //     // $offers = $request->offer()->createdOffers()->with('creator')->orderBy('created_at', 'desc')->get()->toArray();

    //     return Inertia::render('OfferDetails', [
    //         "offer" => 'offer detailss'
    //     ]);
    // }

    public function show(Request $request)
    {
        // offer info
        $offer = Offer::find($request->id);
        if ($offer == null) {
            abort(404);
        }

        // user that created this offer
        $creator = $offer->creator->toArray();

        // additional images MAY BE EMPTY! (does not include main image)
        $images = $offer->images->toArray();

        return Inertia::render('OfferDetails', [
            "offer" => $offer->toArray(),
            'creator' => $creator,
            'images' => $images
        ]);
    }
}
