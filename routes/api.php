<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ArtikelController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\DokterController;
use App\Http\Controllers\JadwalDokterController;
use App\Http\Controllers\KontakController;
use App\Http\Controllers\LayananController;
use App\Models\Position;
use Illuminate\Support\Facades\Route;

Route::get('admin/login', function () {
	return response()->json([
		'message' => 'Gunakan method POST untuk endpoint ini.',
		'supported_methods' => ['POST'],
	], 405);
});
Route::post('admin/login', [AuthController::class, 'login']);
Route::apiResource('admin', AdminController::class);
Route::apiResource('dokter', DokterController::class);
Route::get('dokter-admin-options', [DokterController::class, 'adminOptions']);
Route::apiResource('jadwal-dokter', JadwalDokterController::class);
Route::apiResource('artikel', ArtikelController::class);
Route::apiResource('layanan', LayananController::class);
Route::apiResource('banner', BannerController::class);
Route::apiResource('kontak', KontakController::class);

Route::get('struktur-organisasi', function () {
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
					'foto_url' => $position->profile->fotoProfilUrl,
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

	return response()->json([
		'director' => $director,
		'vice_directors' => $viceDirectors,
		'positions' => $positions,
	]);
});
