<?php

namespace App\Http\Controllers\Offers;

use App\Http\Controllers\Controller;
use App\Models\Offer;
use Illuminate\Http\Request;
use Inertia\Inertia;


class OfferDetailsController extends Controller
{
    public function show(Request $request)
    {
        // offer info
        $offer = Offer::find($request->id);
        if ($offer == null) {
            abort(404);
        }
        $ends = $offer->ends;

        // user that created this offer
        $creator = $offer->creator->toArray();

        // additional images MAY BE EMPTY! (does not include main image)
        $urls = [];
        $images = $offer->images->toArray();
        foreach($images as $image) {
            array_push($urls, $image['url']);
        }

        $offer = $offer->toArray();
        $offer["ends"] = date('d.m.Y', strtotime($ends));
        // $offer["ended"] = false;

        return Inertia::render('Offers/OfferDetails', [
            "offer" => $offer,
            'creator' => $creator,
            'images' => $urls
        ]);
    }
}
