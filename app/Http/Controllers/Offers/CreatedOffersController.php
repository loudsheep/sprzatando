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
        $activeOffers = $request->user()->createdOffers()->with('creator')->withCount('usersInterested')
            ->where('is_banned', '=', false)
            ->where('is_done', '=', false)
            ->where('ends', '>=', today())
            ->orderBy('created_at', 'desc')->get()->toArray();

        $bannedOffers = $request->user()->createdOffers()->with('creator')
            ->where('is_banned', '=', true)
            ->orderBy('created_at', 'desc')->get()->toArray();

        $doneOffers = $request->user()->createdOffers()->with('creator')
            ->where('is_done', '=', true)
            ->where('is_banned', '=', false)
            ->orderBy('created_at', 'desc')->get()->toArray();

        $expiredOffers = $request->user()->createdOffers()->with('creator')
            ->where('is_banned', '=', false)
            ->where('is_done', '=', false)
            ->where('ends', '<', today())
            ->orderBy('created_at', 'desc')->get()->toArray();

        return Inertia::render('Offers/UserOffer', [
            'activeOffers' => $activeOffers,
            'bannedOffers' => $bannedOffers,
            'doneOffers' => $doneOffers,
            'expiredOffers' => $expiredOffers
        ]);
    }
}
