<?php

namespace App\Http\Controllers\Auth;

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

        $users = User::factory()
            ->has(Offer::factory()->count(3), 'createdOffers')
            ->create();

        // abort(501);
        // return Inertia::render('Admin/Admin');

        return 'Created 1 new user with 3 new offers!';
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
