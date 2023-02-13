<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Offer;
use Illuminate\Http\Request;

class BanOfferController extends Controller
{
    //
    public function update(Request $request, Offer $offer) {
        $this->authorize('ban', $offer);

        $offer->is_banned = !$offer->is_banned;
        $offer->save();

        return back();
    }

    public function report(Request $request, Offer $offer) {
        if($offer->is_reported) {
            return back();
        }

        $offer->is_reported = true;
        $offer->save();

        return back();
    }
}
