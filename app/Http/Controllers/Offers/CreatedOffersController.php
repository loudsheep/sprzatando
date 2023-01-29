<?php

namespace App\Http\Controllers\Offers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CreatedOffersController extends Controller
{
    public function show(Request $request)
    {
        $offers = $request->user()->createdOffers->toArray();

        return Inertia::render('UserOffer', [
            'createdOffers' => $offers
        ]);
    }
}
