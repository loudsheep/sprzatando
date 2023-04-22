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
        $cities = Offer::select('city')->distinct()
            ->where('done_at', '=', null)
            ->where('is_banned', '==', 'false')
            ->where('creator_id', '!=', $request->user()->id ?? 0)
            ->get()->toArray();
        $cities = array_map(function ($city) {
            return $city['city'];
        }, $cities);

        // if user is logged in
        if (Auth::check()) {
            $offers = Offer::getOffersForMainPage()
                ->where('creator_id', '!=', $request->user()->id);
        } else {
            $offers = Offer::getOffersForMainPage();
        }

        $offers = $offers->get()->toArray();

        // categories
        // for ($i = 0; $i < count($offers); $i++) {
        //     $offers[$i]["category"] = str_replace(";", ", ", $offers[$i]["category"]);
        // }

        $categories = Offer::select('category')->get()->toArray();
        $cat = [];
        foreach ($categories as $value) {
            foreach (explode(";", $value["category"]) as $c) {
                if (!in_array($c, $cat)) {
                    $cat[] = $c;
                }
            }
        }

        foreach ($offers as $key => $value) {
            unset($offers[$key]["creator"]["email"]);
            unset($offers[$key]["creator"]["email_verified_at"]);
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
