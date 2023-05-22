<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Offer;
use Inertia\Inertia;

class AdminBannedController extends Controller
{
    public function show()
    {
        $offers = Offer::with('creator')
            ->where('is_banned', '=', true)
            ->where('done_at', '=', null)
            ->get();

        return Inertia::render('Admin/Banned', [
            'offers' => $offers
        ]);
    }
}
