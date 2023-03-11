<?php

use App\Http\Controllers\Admin\AdminReportedController;
use App\Http\Controllers\Admin\BanOfferController;
use App\Http\Controllers\Admin\AdminUserController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\Offers\FollowOfferController;
use App\Http\Controllers\Offers\AddOfferController;
use App\Http\Controllers\Offers\CreatedOffersController;
use App\Http\Controllers\Offers\EditOfferController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// guest
Route::middleware('guest')->group(function () {
    Route::get('register', [RegisteredUserController::class, 'create'])
        ->name('register');

    Route::post('register', [RegisteredUserController::class, 'store']);

    Route::get('login', [AuthenticatedSessionController::class, 'create'])
        ->name('login');

    Route::post('login', [AuthenticatedSessionController::class, 'store']);

    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
        ->name('password.request');

    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
        ->name('password.email');

    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
        ->name('password.reset');

    Route::post('reset-password', [NewPasswordController::class, 'store'])
        ->name('password.store');

    Route::get('landing-page', function () {
        return Inertia::render('Auth/LandingPage');
    })->name('landing.page');
});

// user
Route::middleware('auth')->group(function () {
    Route::get('verify-email', [EmailVerificationPromptController::class, '__invoke'])
        ->name('verification.notice');

    Route::get('verify-email/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
        ->middleware(['signed', 'throttle:6,1'])
        ->name('verification.verify');

    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
        ->middleware('throttle:6,1')
        ->name('verification.send');

    Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
        ->name('password.confirm');

    Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');
});

// offers
Route::middleware('auth')->group(function () {
    Route::get('add-offer', [AddOfferController::class, 'show'])
        ->middleware(['auth', 'verified'])
        ->name('add.offer');

    Route::post('add-offer', [AddOfferController::class, 'store'])
        ->middleware(['auth', 'verified'])
        ->name('offer.store');

    Route::get('user-offer', [CreatedOffersController::class, 'showCreated'])
        ->middleware('auth')
        ->name('offers.created');

    Route::get('offer-interested', [CreatedOffersController::class, 'showInterested'])
        ->middleware('auth')
        ->name('offers.interested');

    Route::get('offer-done', [CreatedOffersController::class, 'showDone'])
        ->middleware('auth')
        ->name('offers.done');

    Route::post('follow-offer/{offer}', [FollowOfferController::class, 'store'])
        ->middleware('auth')
        ->name('offer.follow');

    Route::post('extend-expiration/{offer}', [FollowOfferController::class, 'store'])
        ->middleware('auth');

    Route::get('/offer/{offer}/edit', [EditOfferController::class, 'edit'])
        ->middleware('auth')
        ->name('offer.edit');

    Route::patch('/offer/{offer}/edit', [EditOfferController::class, 'update'])
        ->middleware('auth')
        ->name('offer.update');
});


// admin related
Route::middleware('auth')->group(function () {
    Route::post('ban-offer/{offer}', [BanOfferController::class, 'update'])
        ->middleware('auth')
        ->name('offer.ban');

    Route::post('report-offer/{offer}', [BanOfferController::class, 'report'])
        ->middleware(['auth', 'throttle:3,1'])
        ->name('offer.report');

    Route::get('admin/users', [AdminUserController::class, 'show'])
        ->middleware('can:manage_users', 'auth')
        ->name('admin');

    Route::get('admin/users/{user}', [AdminUserController::class, 'detail'])
        ->middleware('can:manage_users', 'auth')
        ->name('admin');

    Route::get('admin/reported', [AdminReportedController::class, 'show'])
        ->middleware('can:manage_users', 'auth')
        ->name('admin');

    Route::get('time', [AdminUserController::class, 'time'])
        ->middleware('can:manage_users', 'auth')
        ->name('time');
});
