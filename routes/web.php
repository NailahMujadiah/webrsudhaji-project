<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DokterController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

Route::get('/admin', [AuthController::class, 'showAdminLoginForm'])->name('admin.login');
Route::post('/admin', [AuthController::class, 'loginWeb'])->name('admin.login.submit');
Route::post('/admin/logout', [AuthController::class, 'logoutWeb'])->name('admin.logout');

Route::get('/dokter', [DokterController::class, 'index']);

require __DIR__.'/settings.php';
