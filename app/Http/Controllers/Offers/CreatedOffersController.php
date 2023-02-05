<?php

namespace App\Http\Controllers\Offers;

use App\Http\Controllers\Controller;
use App\Models\Offer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;


class CreatedOffersController extends Controller
{
    public function showCreated(Request $request)
    {
        $offers = $request->user()->createdOffers()->with('creator')->orderBy('created_at', 'desc')->get()->toArray();

        return Inertia::render('UserOffer', [
            'createdOffers' => $offers
        ]);
    }

    public function showInterested(Request $request)
    {
        dd($request->user()->interestedInOffers()->where('is_done', '=', false)->get()->toArray());
    }

    public function showDone(Request $request)
    {
        dd($request->user()->contractedOffers()->where('is_done', '=', true)->get()->toArray());
    }

    public function details(Request $request)
    {
        $offer = Offer::find($request->id);
        if ($offer == null) {
            abort(404);
        }

        $creator = $offer->creator;
        dd($creator->toArray());
    }
}
