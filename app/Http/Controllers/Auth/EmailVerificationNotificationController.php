<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;

class EmailVerificationNotificationController extends Controller
{
    /**
     * Send a new email verification notification.
     */
    public function store(Request $request): RedirectResponse
    {
        if ($request->user()->hasVerifiedEmail()) {
            return redirect()->intended(RouteServiceProvider::HOME);
        }

        // $request->user()->sendEmailVerificationNotification();
        $emailUrl = URL::temporarySignedRoute(
            "verification.verify",
            Carbon::now()->addMinutes(60),
            [
                "id" => $request->user()->id,
                "hash" => sha1($request->user()->email),
            ]
        );

        Mail::send('emails.verify', ["url" => $emailUrl], function ($message) use ($request) {
            $message->to($request->user()->email);
            $message->subject("Zweryfikuj swój adres email");
        });

        return back()->with('status', 'verification-link-sent');
    }
}
