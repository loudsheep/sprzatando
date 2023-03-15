<?php

namespace App\Http\Controllers\Offers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Offer\UpdateOfferRequest;
use App\Models\Offer;
use App\Models\OfferImages;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Intervention\Image\Facades\Image;

class EditOfferController extends Controller
{
    // Show edit form and view
    public function edit(Offer $offer)
    {
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
    public function update(UpdateOfferRequest $request, Offer $offer)
    {
        $this->authorize('update', $offer);

        $validated = $request->validated();
        $offerHadMainImage = $offer->main_image !== null &&  $offer->main_image != '/defaults/house.jpg';
        $images = $offer->images;

        $validated["category"] = implode(";", $validated["categories"]);

        $additionalPhotos = [];

        if (count($validated["photos"]) == 0) {
            $validated["main_image"] = "/defaults/house.jpg";
        } else if (count($validated["photos"]) > 0) {
            if (gettype($validated["photos"][0]) == 'string') {
                if (Storage::drive('public')->exists(str_replace("/storage/", '', $validated["photos"][0]))) {
                    $validated["main_image"] = $validated["photos"][0];
                }
            } else {
                $mainImage = $validated["photos"][0]->store('uploads', 'public');
                $image = Image::make(public_path("storage/" . $mainImage))->fit(1000, 1000);
                $image->save();

                $validated["main_image"] = "/storage/" . $mainImage;
            }
        }

        if (count($validated["photos"]) > 1) {
            for ($i = 1; $i < count($validated["photos"]); $i++) {
                if (gettype($validated["photos"][$i]) == 'string') {
                    if (Storage::drive('public')->exists(str_replace("/storage/", '', $validated["photos"][$i]))) {
                        $additionalPhotos[] = $validated["photos"][$i];
                    }
                } else {
                    $path = $validated["photos"][$i]->store('uploads', 'public');

                    $image = Image::make(public_path("storage/" . $path))->fit(1000, 1000);
                    $image->save();

                    $additionalPhotos[] = "/storage/" . $path;
                }
            }
        }
        dd($images, $validated);

        $offer->update($validated);
        if (count($additionalPhotos) > 0) {
            $offer->images()->delete();

            foreach ($additionalPhotos as $value) {
                $offer->images()->save(new OfferImages([
                    'url' => $value,
                ]));
            }
        }

        return back();
    }
}
