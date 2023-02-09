<?php

namespace App\Http\Controllers\Offers;

use App\Http\Controllers\Controller;
use App\Models\Offer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EditOfferController extends Controller
{
    // Show edit form and view
    public function edit(Offer $offer) {
        // CHANGE PATH WHEN VIEW IS CREATED!
        return Inertia::render('Offers/EditOffer', [
            'offer' => $offer,
        ]);
    }

    // store changes in database
    public function update(Offer $offer) {
    }
}
