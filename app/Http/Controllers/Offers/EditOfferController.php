<?php

namespace App\Http\Controllers\Offers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Offer\UpdateOfferRequest;
use App\Models\Offer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EditOfferController extends Controller
{
    // Show edit form and view
    public function edit(Offer $offer) {
        $this->authorize('update', $offer);

        $images = $offer->images;

        foreach ($images as $key => $value) {
            $images[$key] = $value->url;
        }

        return Inertia::render('Offers/EditOffer', [
            'offer' => $offer,
            'images' => $images,
        ]);
    }

    // store changes in database
    public function update(UpdateOfferRequest $request, Offer $offer) {
        $this->authorize('update', $offer);

        dd($request);

        $validated = $request->validated();
        $validated["category"] = implode(";", $validated["categories"]);
        $offer->update($validated);

        // return redirect("/offer/{$offer->id}");
        return back();
    }
}
