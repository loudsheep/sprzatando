<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class RankingController extends Controller
{
    public function show()
    {
        $users = User::withAvg('reviews', 'rating')
            ->orderBy('reviews_avg_rating', 'DESC')
            // TODO uncomment once more reviews are in DB
            // ->having('reviews_avg_rating', '!=', 'null')
            ->limit(5)
            ->get()->toArray();

        return Inertia::render('Ranking', [
            'users' => $users
        ]);
    }
}
