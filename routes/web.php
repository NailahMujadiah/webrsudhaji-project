<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use Inertia\Inertia;

Route::get('/beranda', function () {
    return Inertia::render('beranda'); // Nama file .tsx tadi
});

Route::get('/profil', function () {
    return Inertia::render('profil');
});

Route::get('/daftar-dokter', function () {
    return Inertia::render('daftarDokter');
});

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
