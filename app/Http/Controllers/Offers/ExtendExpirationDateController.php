<?php

namespace App\Http\Controllers\Offers;

use App\Http\Controllers\Controller;
use App\Models\Offer;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExtendExpirationDateController extends Controller
{
    public function updateEndDate(Offer $offer)
    {
        $this->authorize('update', $offer);

        $offer->ends = Carbon::parse($offer->ends)->addMonth();
        $offer->save();

        return Inertia::location('#');
    }
}