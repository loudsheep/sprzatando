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
        $activeOffers = $request->user()->createdOffers()->with('creator')
            ->where('is_banned', '=', false)
            ->where('is_done', '=', false)
            ->orderBy('created_at', 'desc')->get()->toArray();
        $bannedOffers = $request->user()->createdOffers()->with('creator')
            ->where('is_banned', '=', true)
            ->orderBy('created_at', 'desc')->get()->toArray();
        $doneOffers = $request->user()->createdOffers()->with('creator')
            ->where('is_done', '=', true)
            ->orderBy('created_at', 'desc')->get()->toArray();

        return Inertia::render('Offers/UserOffer', [
            'activeOffers' => $activeOffers,
            'bannedOffers' => $bannedOffers,
            'doneOffers' => $doneOffers
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
}
