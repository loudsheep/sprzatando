<?php

use App\Http\Controllers\Admin\AdminReportedController;
use App\Http\Controllers\Admin\BanOfferController;
use App\Http\Controllers\Admin\AdminUserController;

use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::post('ban-offer/{offer}', [BanOfferController::class, 'update'])
        ->middleware('auth')
        ->name('offer.ban');

    Route::post('report-offer/{offer}', [BanOfferController::class, 'report'])
        ->middleware(['auth', 'throttle:6,1'])
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