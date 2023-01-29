<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Offer;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Symfony\Component\Console\Input\Input;

class LoggedInUserController extends Controller
{
    public function show(Request $request) {
        // dd($request->query('location', 'nothing'));
        // dd($request->user()->contractedOffers->first());

        $cities = Offer::select('city')->distinct()->get()->toArray();
        $cities = array_map(function ($city) {
            return $city['city'];
        }, $cities);

        return Inertia::render('Welcome', [
            'cities' => $cities
        ]);
    }
}
