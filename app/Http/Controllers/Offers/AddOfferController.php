<?php

namespace App\Http\Controllers\Offers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Offer\CreateOfferRequest;
use App\Models\Offer;
use App\Models\OfferImages;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Intervention\Image\Facades\Image;


class AddOfferController extends Controller
{
    public function show()
    {
        $this->authorize('create', Offer::class);

        return Inertia::render('Offers/AddOffer');
    }

    public function store(CreateOfferRequest $request)
    {
        $this->authorize('create', Offer::class);

        $validatedData = $request->validated();

        $mainImage = "";
        if (count($validatedData["photos"]) == 0) {
            $mainImage = "/defaults/house.jpg";
        } else {
            $mainImage = $validatedData["photos"][0]->store('uploads', 'public');
            $image = Image::make(public_path("storage/" . $mainImage))->fit(1000, 1000);
            $image->save();

            $mainImage = "/storage/" . $mainImage;
        }

        $additionalPhotos = [];
        if (count($validatedData["photos"]) > 1) {
            for ($i = 1; $i < count($validatedData["photos"]); $i++) {
                $path = $validatedData["photos"][$i]->store('uploads', 'public');

                $image = Image::make(public_path("storage/" . $path))->fit(1000, 1000);
                $image->save();

                $additionalPhotos[] = "/storage/" . $path;
            }
        }


        $offer = $request->user()->createdOffers()->create([
            'title' => $validatedData["title"],
            'zip_code' => '124231',
            'city' => $validatedData["city"],
            'price' => $validatedData["price"],
            'description' => $validatedData["description"],
            'ends' => substr($validatedData["selectedDate"], 0, 10),
            'category' => implode(';', $validatedData["categories"]),
            'main_image' => $mainImage,
        ]);

        foreach ($additionalPhotos as $value) {
            $offer->images()->save(new OfferImages([
                'url' => $value,
            ]));
        }
    }
}
