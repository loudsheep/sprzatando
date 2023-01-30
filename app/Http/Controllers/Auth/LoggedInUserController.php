<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Offer;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Symfony\Component\Console\Input\Input;
use Illuminate\Support\Facades\DB;

class LoggedInUserController extends Controller
{
    public function show(Request $request)
    {
        // dd($request->query('location', 'nothing'));
        // dd($request->user()->contractedOffers->first());
        // dd($request->user()->intrestedInOffers->first()->creator);
        // dd(Offer::first()->images->all());
        dd(Offer::first()->review);

        $cities = Offer::select('city')->distinct()->get()->toArray();
        $cities = array_map(function ($city) {
            return $city['city'];
        }, $cities);

        $offers = DB::table('offers')->orderBy('created_at', 'desc')->limit(5)->get()->toArray();

        return Inertia::render('Welcome', [
            'cities' => $cities,
            'offers' => $offers,
        ]);
    }
}
