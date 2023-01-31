<?php

namespace App\Http\Controllers\Offers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AddOfferController extends Controller
{
    public function show()
    {
        return Inertia::render('AddOffer');
    }

    public function store(Request $request)
    {
        dd($request);
        $validatedData = $request->validate([
            'title' => ['required', 'max:100'],
            'description' => ['required', 'max:500'],
            'date' => ['date'],
            'city' => ['number'],
        ]);
    }
}
