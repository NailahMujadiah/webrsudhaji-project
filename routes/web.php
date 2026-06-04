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
use App\Http\Controllers\Admin\Management\AdminProfilDireksiController;
use App\Http\Controllers\DokterController;
use App\Models\Position;
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
Route::get('/layanan/poliklinik', fn() => Inertia::render('Layanan/poliklinik'))->name('layanan.poliklinik');
Route::get('/layanan/unggulan', fn() => Inertia::render('Layanan/layanan-unggulan'))->name('layanan.unggulan');
Route::get('/layanan/rawat-jalan', fn() => Inertia::render('Layanan/layanan-rawat-jalan'))->name('layanan.rawat-jalan');
Route::get('/layanan/rawat-inap', fn() => Inertia::render('Layanan/layanan-rawat-inap'))->name('layanan.rawat-inap');
Route::get('/layanan/rawat-intensif', fn() => Inertia::render('Layanan/layanan-rawat-intensif'))->name('layanan.rawat-intensif');
Route::get('/layanan/gawat-darurat', fn() => Inertia::render('Layanan/gawat-darurat'))->name('layanan.gawat-darurat');
Route::get('/layanan/sarana', fn() => Inertia::render('Layanan/sarana-prasarana'))->name('layanan.sarana');
Route::get('/layanan/penunjang', fn() => Inertia::render('Layanan/fasilitas-penunjang'))->name('layanan.penunjang');

Route::get('/daftar-dokter', [DokterController::class, 'indexWeb'])->name('daftar-dokter');
Route::get('/detail-dokter/{id}', [DokterController::class, 'showWeb'])->name('detail-dokter');
Route::get('/debug-detail-dokter/{id}', function ($id) {
    $dokter = app(\App\Http\Controllers\DokterController::class)->showWeb($id);
    return Inertia::render('debug-detail-dokter', $dokter->getData());
})->name('debug.detail-dokter');

Route::get('/debug-json-dokter/{id}', function ($id) {
    $dokter = \App\Models\Dokter::with('jadwalDokter')->find($id);
    if (! $dokter) return response()->json(['error' => 'not found'], 404);
    return response()->json([ 'dokter' => $dokter ]);
})->name('debug.json.dokter');

Route::get('/debug-count-dokter', function () {
    $first = \App\Models\Dokter::select('id_dokter','nama_dokter')->first();
    return response()->json([
        'count' => \App\Models\Dokter::count(),
        'first' => $first,
    ]);
})->name('debug.json.count');

Route::get('/struktur-organisasi', function () {
    $positions = Position::query()
        ->with('profile')
        ->orderBy('parent_id')
        ->orderBy('sort_order')
        ->orderBy('id')
        ->get()
        ->map(static function (Position $position): array {
            return [
                'id' => $position->id,
                'code' => $position->code,
                'name' => $position->name,
                'parent_id' => $position->parent_id,
                'sort_order' => $position->sort_order,
                'profile' => $position->profile ? [
                    'id' => $position->profile->id,
                    'position_id' => $position->profile->position_id,
                    'nama_pejabat' => $position->profile->nama_pejabat,
                    'foto_url' => $position->profile->foto_profil_url,
                    'deskripsi_singkat' => $position->profile->deskripsi_singkat,
                    'is_active' => $position->profile->is_active,
                    'nama_display' => $position->profile->nama_display,
                ] : null,
            ];
        })
        ->values();

    $director = $positions->firstWhere('code', 'director');
    $viceDirectors = $director
        ? $positions->where('parent_id', $director['id'])->values()->map(static function (array $viceDirector) use ($positions): array {
            $viceDirector['children'] = $positions->where('parent_id', $viceDirector['id'])->values()->all();

            return $viceDirector;
        })->values()->all()
        : [];

    return Inertia::render('strukturOrganisasi', [
        'organization' => [
            'director' => $director,
            'viceDirectors' => $viceDirectors,
        ],
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

Route::middleware([\App\Http\Middleware\EnsureAdminAuthenticated::class])->group(function () {
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

    Route::get('admin/profil-direksi', [AdminProfilDireksiController::class, 'index'])->name('admin.profil-direksi.index');
    Route::get('admin/profil-direksi/{id}/edit', [AdminProfilDireksiController::class, 'edit'])->name('admin.profil-direksi.edit');
    Route::put('admin/profil-direksi/{id}', [AdminProfilDireksiController::class, 'update'])->name('admin.profil-direksi.update');

});



Route::get('/dokter', [DokterController::class, 'index']);

Route::get('/stream-video/{filename}', function ($filename) {
    $path = public_path('video/' . $filename);
    
    if (!file_exists($path)) abort(404);
    
    $size = filesize($path);
    $start = 0;
    $end = $size - 1;

    $headers = [
        'Content-Type' => 'video/mp4',
        'Accept-Ranges' => 'bytes',
        'Content-Length' => $size,
    ];

    if (request()->hasHeader('Range')) {
        preg_match('/bytes=(\d+)-(\d*)/', request()->header('Range'), $matches);
        $start = (int) $matches[1];
        $end = isset($matches[2]) && $matches[2] !== '' ? (int) $matches[2] : $size - 1;

        $headers['Content-Range'] = "bytes $start-$end/$size";
        $headers['Content-Length'] = $end - $start + 1;

        return response()->stream(function () use ($path, $start, $end) {
            $fp = fopen($path, 'rb');
            fseek($fp, $start);
            $remaining = $end - $start + 1;
            while ($remaining > 0 && !feof($fp)) {
                $chunk = fread($fp, min(8192, $remaining));
                echo $chunk;
                $remaining -= strlen($chunk);
            }
            fclose($fp);
        }, 206, $headers);
    }

    return response()->stream(function () use ($path) {
        readfile($path);
    }, 200, $headers);
})->where('filename', '.*');

require __DIR__.'/settings.php';
