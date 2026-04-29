<?php

use App\Http\Controllers\Admin\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Admin\MediaManagerController;
use App\Http\Controllers\Admin\ProfileController as AdminProfileController;
use App\Http\Controllers\Admin\Management\AdminBannerController;
use App\Http\Controllers\Admin\Management\AdminArtikelController;
use App\Http\Controllers\Admin\Management\AdminDokterController;
use App\Http\Controllers\Admin\Management\AdminLayananController;
use App\Http\Controllers\Admin\Management\AdminKontakController;
use App\Http\Controllers\Admin\Management\AdminJadwalDokterController;
use App\Http\Controllers\DokterController;
use App\Models\Dokter;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use Inertia\Inertia;

Route::get('/beranda', function () {
    return Inertia::render('beranda'); // Nama file .tsx tadi
});

Route::get('/profil', function () {
    return Inertia::render('profil');
});

Route::get('/daftar-dokter', [DokterController::class, 'indexWeb'])->name('daftar-dokter');
Route::get('/detail-dokter/{id}', [DokterController::class, 'showWeb'])->name('detail-dokter');

Route::get('/struktur-organisasi', function () {
    $direksi = Dokter::query()
        ->select('id_dokter', 'nama_dokter', 'spesialis', 'foto_dokter')
        ->orderByDesc('id_dokter')
        ->limit(4)
        ->get()
        ->map(static function (Dokter $dokter): array {
            return [
                'id_dokter' => $dokter->id_dokter,
                'nama_dokter' => $dokter->nama_dokter,
                'jabatan' => $dokter->spesialis,
                'foto_url' => $dokter->foto_dokter_url,
            ];
        })
        ->values();

    return Inertia::render('strukturOrganisasi', [
        'direksi' => $direksi,
    ]);
});

Route::get('/detail-dokter', fn() => Inertia::render('detaildokter'))->name('dokter.detail');

Route::get('/edukasi', function () {
    return Inertia::render('edukasi');
});

Route::get('/layanan-fasilitas', function () {
    return Inertia::render('layananFasilitas');
});

Route::inertia('/', 'beranda', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

Route::get('/admin', [AuthenticatedSessionController::class, 'create'])->name('admin.login');

Route::middleware('guest:admin')->group(function () {
    Route::post('/admin/login', [AuthenticatedSessionController::class, 'store'])->name('admin.login.store');
});

Route::middleware('auth:admin')->group(function () {
    Route::get('/admin/dashboard', function () {
        return view('admin.dashboard', [
            'admin' => Auth::guard('admin')->user(),
        ]);
    })->name('admin.dashboard');

    Route::get('/admin/profile', [AdminProfileController::class, 'edit'])->name('admin.profile.edit');
    Route::patch('/admin/profile', [AdminProfileController::class, 'updateProfile'])->name('admin.profile.update');
    Route::put('/admin/profile/password', [AdminProfileController::class, 'updatePassword'])->name('admin.profile.password.update');

    Route::get('/admin/media-manager', [MediaManagerController::class, 'index'])->name('admin.media-manager.index');

    Route::post('/admin/logout', [AuthenticatedSessionController::class, 'destroy'])->name('admin.logout');

    // Management CRUD Routes
    Route::resource('admin/banner', AdminBannerController::class, [
        'names' => 'admin.banner',
        'parameters' => ['banner' => 'id_banner'],
    ])->except(['show']);

    Route::resource('admin/artikel', AdminArtikelController::class, [
        'names' => 'admin.artikel',
        'parameters' => ['artikel' => 'id_artikel'],
    ])->except(['show']);

    Route::resource('admin/dokter', AdminDokterController::class, [
        'names' => 'admin.dokter',
        'parameters' => ['dokter' => 'id_dokter'],
    ])->except(['show']);

    Route::resource('admin/layanan', AdminLayananController::class, [
        'names' => 'admin.layanan',
        'parameters' => ['layanan' => 'id_layanan'],
    ])->except(['show']);

    Route::resource('admin/kontak', AdminKontakController::class, [
        'names' => 'admin.kontak',
        'parameters' => ['kontak' => 'id_kontak'],
    ])->except(['show']);

    Route::resource('admin/jadwal-dokter', AdminJadwalDokterController::class, [
        'names' => 'admin.jadwal',
        'parameters' => ['jadwal_dokter' => 'id_jadwal'],
    ])->except(['show']);
});

Route::get('/dokter', [DokterController::class, 'index']);

require __DIR__.'/settings.php';
