<?php

namespace App\Http\Controllers\Offers;

use App\Http\Controllers\Controller;
use App\Models\Offer;
use App\Models\UserReviews;
use Illuminate\Http\Request;

class ReviewOfferController extends Controller
{
    public function review(Request $request, Offer $offer)
    {
        $this->authorize('review', $offer);

        $request->validate([
            'rating' => ['integer', 'min:1', 'max:5', 'required'],
            'description' => ['string', 'min:20', 'max:255', 'required']
        ]);

        $offer->review()->create(
            ['rating' => $request->rating, 'description' => $request->description]
        );

        $offer->save();

        return back();
    }
}
