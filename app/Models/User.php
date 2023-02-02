<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Notifications\ResetPasswordNotification;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, CanResetPassword;

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
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
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

        $this->notify(new ResetPasswordNotification($url));
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

    public function intrestedInOffers()
    {
        return $this->belongsToMany(Offer::class, 'intrested_in_offer', 'intrested_user_id', 'offer_id')
            ->withTimestamps();
    }

    public function reviews()
    {
        return $this->hasManyThrough(UserReviews::class, Offer::class, 'contractor_id', 'offer_id', 'id', 'id');
    }
}
