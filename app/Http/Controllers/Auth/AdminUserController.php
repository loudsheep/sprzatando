<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminUserController extends Controller
{
    //
    public function show() {
        return Inertia::render('Admin/Admin');
    }
}
