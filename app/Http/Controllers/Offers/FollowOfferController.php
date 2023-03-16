<?php

namespace App\Http\Controllers\Offers;

use App\Http\Controllers\Controller;
use App\Models\Offer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FollowOfferController extends Controller
{
    public function store(Offer $offer)
    {
        if ($offer->creator == auth()->user()) {
            abort(403);
        }
        auth()->user()->interestedInOffers()->toggle($offer);

        return redirect("/offer/{$offer->id}");
    }

    public function show(Request $request)
    {
        // $activeOffers = $request->user()->createdOffers()->with('creator')->withCount('usersIntrested')
        //     ->where('is_banned', '=', false)
        //     ->where('is_done', '=', false)
        //     ->where('ends', '>=', today())
        //     ->orderBy('created_at', 'desc')->get()->toArray();

        // $bannedOffers = $request->user()->createdOffers()->with('creator')
        //     ->where('is_banned', '=', true)
        //     ->orderBy('created_at', 'desc')->get()->toArray();

        // $doneOffers = $request->user()->createdOffers()->with('creator')
        //     ->where('is_done', '=', true)
        //     ->where('is_banned', '=', false)
        //     ->orderBy('created_at', 'desc')->get()->toArray();

        // $expiredOffers = $request->user()->createdOffers()->with('creator')
        //     ->where('is_banned', '=', false)
        //     ->where('is_done', '=', false)
        //     ->where('ends', '<', today())
        //     ->orderBy('created_at', 'desc')->get()->toArray();

        $interestedInOffers = $request->user()->interestedInOffers()->with('creator')
        ->where('is_done', '=', false)
        // ->where()
        ->get()->toArray()
        ;

        $contractedOffers = $request->user()->contractedOffers()->with('creator')->get()->toArray();

        // dd($interestedInOffers, $contractedOffers);

        return Inertia::render('Offers/InterestedInOffers', [
            'interestedInOffers' => $interestedInOffers,
            'doneOffers' => $contractedOffers,
            // 'bannedOffers' => $bannedOffers,
            // 'doneOffers' => $doneOffers,
            // 'expiredOffers' => $expiredOffers
        ]);
    }
}
