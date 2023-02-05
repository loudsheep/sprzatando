<?php

namespace App\Http\Controllers\Offers;

use App\Http\Controllers\Controller;
// use App\Models\Offer;
// use App\Models\OfferImages;
use Illuminate\Http\Request;
use Inertia\Inertia;


class OfferDetailsController extends Controller
{
    public function show(Request $request)
    {
        // $offers = $request->offer()->createdOffers()->with('creator')->orderBy('created_at', 'desc')->get()->toArray();

        return Inertia::render('OfferDetails', [
            "offer" => 'offer detailss'
        ]);
    }
}
