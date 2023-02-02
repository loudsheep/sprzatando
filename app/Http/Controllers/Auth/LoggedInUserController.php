<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Offer;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        // dd($request->user()->interestedInOffers->first()->creator);
        // dd(Offer::first()->images->all());
        // dd($request->user()->reviews->avg('rating'));
        // dd(Offer::with('creator')->orderBy('created_at', 'desc')->get()->toArray());

        $cities = Offer::select('city')->distinct()->get()->toArray();
        $cities = array_map(function ($city) {
            return $city['city'];
        }, $cities);

        // if user is logged in
        if (Auth::check()) {
            $offers = Offer::with('creator')->orderBy('created_at', 'desc')
                ->where('creator_id', '!=', $request->user()->id)
                ->where('is_done', '==', 'false')
                ->where('is_banned', '==', 'false')
                ->where('is_reported', '==', 'false')
                ->get()->toArray();
        } else {
            $offers = Offer::with('creator')->orderBy('created_at', 'desc')->get()->toArray();
        }

        for ($i = 0; $i < count($offers); $i++) {
            $offers[$i]["category"] = str_replace(";", ", ", $offers[$i]["category"]);
        }

        $categories = Offer::select('category')->get()->toArray();
        $cat = [];
        foreach ($categories as $value) {
            foreach (explode(";", $value["category"]) as $c) {
                if (!in_array($c, $cat)) {
                    $cat[] = $c;
                }
            }
        }

        return Inertia::render('Welcome', [
            'cities' => $cities,
            'offers' => $offers,
            'minPrice' => Offer::min('price') ?? 0,
            'maxPrice' => Offer::max('price') ?? 0,
            'categories' => $cat,
        ]);
    }
}
