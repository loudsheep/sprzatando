<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Offer;
use App\Models\User;
use Carbon\Carbon;
use Database\Factories\UserFactory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminUserController extends Controller
{
    //
    public function show()
    {
        dd(User::all());
    }

    public function detail(User $user) {
        dd($user);
    }

    public function time()
    {
        $offers = Offer::all();

        foreach ($offers as $value) {
            $offer = $value;

            $date = new Carbon($offer->ends);
            $offer->ends = $date->addDays(1);
            $offer->save();
        }

        echo "SUCCESS ADDING ENDS DATE";
    }
}
