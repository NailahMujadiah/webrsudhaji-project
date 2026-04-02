<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ArtikelController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\DokterController;
use App\Http\Controllers\JadwalDokterController;
use App\Http\Controllers\KontakController;
use App\Http\Controllers\LayananController;
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
