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
            ->where('ban_ending', '=', null)
            ->limit(5)
            ->get()->toArray();

        return Inertia::render('Ranking', [
            'users' => $users
        ]);
    }
}
