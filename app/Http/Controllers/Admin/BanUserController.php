<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;

class BanUserController extends Controller
{
    public function banUser(User $user)
    {
        if ($user->ban_ending == null) {
            $date = now();
            $user->ban_ending = $date->addDays(1);
        } else {
            $user->ban_ending = null;
        }

        $user->save();

        return back();
    }
}
