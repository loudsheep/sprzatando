<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Notifications\ResetPasswordNotification;
use App\Notifications\VerifyEmailNotification;
use Carbon\Carbon;
use Illuminate\Auth\MustVerifyEmail;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\URL;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, CanResetPassword, MustVerifyEmail;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'email',
        'email_verified_at',
        'remember_token',
        'role',
        'ban_ending',
        'created_at',
        'updated_at',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'ban_ending' => 'datetime',
    ];

    /**
     * Send a password reset notification to the user.
     *
     * @param  string  $token
     * @return void
     */
    public function sendPasswordResetNotification($token)
    {
        $url = route('password.reset', [
            "token" => $token,
            "email" => $this->email,
        ]);

        $this->notify(new ResetPasswordNotification($url, $this->name));
    }

    public function sendEmailVerificationNotification($ip = null)
    {
        $url = URL::temporarySignedRoute(
            "verification.verify",
            Carbon::now()->addMinutes(60),
            [
                "id" => $this->id,
                "hash" => sha1($this->email),
            ]
        );

        $this->notify(new VerifyEmailNotification($url, $this->name, $ip));
    }


    // RELATIONS:

    public function createdOffers()
    {
        return $this->hasMany(Offer::class, 'creator_id', 'id');
    }

    public function contractedOffers()
    {
        return $this->hasMany(Offer::class, 'contractor_id', 'id');
    }

    public function interestedInOffers()
    {
        return $this->belongsToMany(Offer::class, 'intrested_in_offer', 'intrested_user_id', 'offer_id')
            ->withTimestamps();
    }

    public function reviews()
    {
        return $this->hasManyThrough(UserReviews::class, Offer::class, 'creator_id', 'offer_id', 'id', 'id');
    }
}
