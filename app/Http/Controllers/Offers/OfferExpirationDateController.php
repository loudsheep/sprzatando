<?php

namespace App\Http\Controllers\Offers;

use App\Http\Controllers\Controller;
use App\Models\Offer;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OfferExpirationDateController extends Controller
{
    public function extend(Offer $offer)
    {
        $this->authorize('update', $offer);

        $offer->ends = Carbon::today()->addWeeks(2);
        $offer->save();

        return back();
    }

    public function deactivate(Offer $offer)
    {
        $this->authorize('update', $offer);

        if ($offer->ends >= today()) {
            $offer->ends = Carbon::today()->subDay();
            $offer->save();
        }

        return back();
    }
}
