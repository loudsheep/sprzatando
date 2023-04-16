<?php

use App\Http\Controllers\Offers\FollowOfferController;
use App\Http\Controllers\Offers\AddOfferController;
use App\Http\Controllers\Offers\CreatedOffersController;
use App\Http\Controllers\Offers\EditOfferController;
use App\Http\Controllers\Offers\OfferExpirationDateController;
use App\Http\Controllers\Offers\OfferInterestedUsersController;
use App\Http\Controllers\Offers\ReviewOfferController;

use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('add-offer', [AddOfferController::class, 'show'])
        ->middleware(['auth', 'verified'])
        ->name('add.offer');

    Route::post('add-offer', [AddOfferController::class, 'store'])
        ->middleware(['auth', 'verified'])
        ->name('offer.store');

    Route::get('user-offer', [CreatedOffersController::class, 'show'])
        ->middleware('auth')
        ->name('offers.created');

    Route::get('offer-interested', [FollowOfferController::class, 'show'])
        ->middleware('auth')
        ->name('offers.interested');

    Route::post('follow-offer/{offer}', [FollowOfferController::class, 'store'])
        ->middleware('auth')
        ->name('offer.follow');

    Route::get('follow-offer/{offer}', [FollowOfferController::class, 'store'])
        ->middleware('auth')
        ->name('offer.follow');

    Route::post('extend-expiration/{offer}', [OfferExpirationDateController::class, 'extend'])
        ->middleware('auth')
        ->name('offer.extend');

    Route::get('extend-expiration/{offer}', [OfferExpirationDateController::class, 'extend'])
        ->middleware('auth')
        ->name('offer.extend');

    Route::post('deactivate/{offer}', [OfferExpirationDateController::class, 'deactivate'])
        ->middleware('auth');

    Route::get('/offer/{offer}/edit', [EditOfferController::class, 'edit'])
        ->middleware('auth')
        ->name('offer.edit');

    Route::post('/offer/{offer}/edit', [EditOfferController::class, 'update'])
        ->middleware('auth')
        ->name('offer.update');

    Route::get('/offer/{offer}/interested-users', [OfferInterestedUsersController::class, 'show'])
        ->middleware('auth')
        ->name('offer.interested.users');

    Route::post('/offer/{offer}/select/{user}', [OfferInterestedUsersController::class, 'store'])
        ->middleware('auth')
        ->name('offer.user.select');

    Route::post('/offer/{offer}/review', [ReviewOfferController::class, 'review'])
        ->middleware('auth')
        ->name('offer.review');
});
