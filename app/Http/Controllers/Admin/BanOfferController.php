<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Offer;
use Illuminate\Http\Request;

class BanOfferController extends Controller
{
    //
    public function update(Offer $offer)
    {
        $this->authorize('ban', $offer);

        $offer->is_banned = !$offer->is_banned;
        $offer->save();

        return back();
    }

    public function report(Offer $offer)
    {
        if ($offer->reported == 'reported' || $offer->reported == 'checked') {
            return back();
        }

        $offer->reported = 'reported';
        $offer->save();

        return back();
    }

    public function markOfferOK(Offer $offer)
    {
        $offer->reported = 'checked';
        $offer->save();

        return back();
    }
}
