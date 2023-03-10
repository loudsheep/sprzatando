<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Offer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminReportedController extends Controller
{
    public function show()
    {
        $offers = Offer::with('creator')
            ->where('is_reported', '=', true)
            ->where('is_banned', '=', false)
            ->where('is_done', '=', false)
            ->get();

        return Inertia::render('Admin/Reported', [
            'offers' => $offers
        ]);
    }
}
