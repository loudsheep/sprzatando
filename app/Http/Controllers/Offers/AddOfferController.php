<?php

namespace App\Http\Controllers\Offers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AddOfferController extends Controller
{
    public function show() {
        return Inertia::render('AddOffer');
    }
}
