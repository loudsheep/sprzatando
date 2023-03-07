<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Offer;
use Illuminate\Http\Request;

class AdminReportedController extends Controller
{
    public function show()
    {
        dd(
            Offer::all()
                ->where('is_reported', '=', true)
                ->where('is_banned', '=', false)
                ->where('is_done', '=', false)
        );
    }
}
