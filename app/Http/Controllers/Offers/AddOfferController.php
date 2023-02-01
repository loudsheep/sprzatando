<?php

namespace App\Http\Controllers\Offers;

use App\Http\Controllers\Controller;
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
        return Inertia::render('AddOffer');
    }

    public function store(Request $request)
    {
        // dd($request);
        $validatedData = $request->validate(
            [
                'title' => ['required', 'max:100'],
                'texarea' => ['required', 'max:500'],
                'selectedDate' => ['date'],
                'city' => ['required', 'max:50'],
                'price' => ['numeric'],
                'photos[]' => ['image'],
                'categories' => ['array', 'required']
            ],
            [
                'price.numeric' => 'The price must be a number',
                // 'selectedDate.date' => '',
                // 'title.required' => '',
                // 'title.max:100' => '',
                // 'city.required' => '',
                // 'city.max:50' => '',
                // 'photos.*.image' => 'Only image accepatble',
                // 'categories.required' => 'At least 1 category required'
            ]
        );


        $mainImage = "";
        if (count($request->photos) == 0) {
            // throw ValidationException::withMessages(['photos' => 'At least 1 photo required']);

            // TODO change this
            $mainImage = "Some image";
        } else {
            $mainImage = $request->file('photos.0')->store('uploads', 'public');
            $image = Image::make(public_path("storage/" . $mainImage))->fit(1000, 1000);
            $image->save();

            $mainImage = "/storage/" . $mainImage;
        }

        $additionalPhotos = [];
        if (count($request->photos)  > 1) {
            for ($i = 1; $i < count($request->photos); $i++) {
                $path = $request->file('photos.' . $i)->store('uploads', 'public');

                $image = Image::make(public_path("storage/" . $path))->fit(1000, 1000);
                $image->save();

                $additionalPhotos[] = "/storage/" . $path;
            }
        }


        $offer = Offer::create([
            'title' => $request->title,
            'creator_id' => $request->user()->id,
            'zip_code' => '124231',
            'city' => $request->city,
            'price' => $request->price,
            'description' => $request->texarea,
            'ends' => substr($request->selectedDate, 0, 10),
            'category' => implode(';', $request->categories),
            'main_image' => $mainImage,
        ]);

        foreach ($additionalPhotos as $value) {
            $offer->images()->save(new OfferImages([
                'url' => $value,
            ]));
        }
    }
}
