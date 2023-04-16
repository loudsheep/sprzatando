<?php

use App\Http\Controllers\Auth\LoggedInUserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Offers\OfferDetailsController;
use App\Http\Controllers\RankingController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [LoggedInUserController::class, 'show']);


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


// Routes that do not require user to be logged in
Route::get('/offer/{offer}', [OfferDetailsController::class, 'show'])->name('offer.details');
Route::get('/ranking', [RankingController::class, 'show'])->name('ranking');


require __DIR__ . '/admin.php';
require __DIR__ . '/auth.php';
require __DIR__ . '/offers.php';
