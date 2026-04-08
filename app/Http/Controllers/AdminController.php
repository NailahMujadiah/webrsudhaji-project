<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Artikel;
use App\Models\Banner;
use App\Models\Dokter;
use App\Models\JadwalDokter;
use App\Models\Kontak;
use App\Models\Layanan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class AdminController extends Controller
{
    public function index()
    {
        $admins = Admin::query()
            ->select(['id_admin', 'username', 'nama_admin'])
            ->orderByDesc('id_admin')
            ->get();

        $admins->transform(function (Admin $admin) {
            $admin->jumlah_dokter = Dokter::query()->where('id_admin', $admin->id_admin)->count();
            $admin->jumlah_jadwal_dokter = JadwalDokter::query()->where('id_admin', $admin->id_admin)->count();
            $admin->jumlah_artikel = Artikel::query()->where('id_admin', $admin->id_admin)->count();
            $admin->jumlah_layanan = Layanan::query()->where('id_admin', $admin->id_admin)->count();
            $admin->jumlah_banner = Banner::query()->where('id_admin', $admin->id_admin)->count();
            $admin->jumlah_kontak = Kontak::query()->where('id_admin', $admin->id_admin)->count();

            return $admin;
        });

        return response()->json($admins);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'username' => ['required', 'string', 'max:255', Rule::unique('admin', 'username')],
            'password' => ['required', 'string', 'min:8'],
            'nama_admin' => ['required', 'string', 'max:255'],
        ]);

        $admin = Admin::create([
            'username' => $validated['username'],
            'password' => Hash::make($validated['password']),
            'nama_admin' => $validated['nama_admin'],
        ]);

        return response()->json([
            'message' => 'Admin berhasil dibuat.',
            'data' => $admin,
        ], 201);
    }

    public function show(int $id)
    {
        $admin = Admin::query()
            ->select(['id_admin', 'username', 'nama_admin'])
            ->findOrFail($id);

        return response()->json([
            'admin' => $admin,
            'dokter' => Dokter::query()->where('id_admin', $id)->get(),
            'jadwal_dokter' => JadwalDokter::query()->where('id_admin', $id)->get(),
            'artikel' => Artikel::query()->where('id_admin', $id)->get(),
            'layanan' => Layanan::query()->where('id_admin', $id)->get(),
            'banner' => Banner::query()->where('id_admin', $id)->get(),
            'kontak' => Kontak::query()->where('id_admin', $id)->get(),
        ]);
    }

    public function update(Request $request, int $id)
    {
        $admin = Admin::query()->findOrFail($id);

        $validated = $request->validate([
            'username' => [
                'sometimes',
                'required',
                'string',
                'max:255',
                Rule::unique('admin', 'username')->ignore($admin->id_admin, 'id_admin'),
            ],
            'password' => ['nullable', 'string', 'min:8'],
            'nama_admin' => ['sometimes', 'required', 'string', 'max:255'],
        ]);

        if (isset($validated['username'])) {
            $admin->username = $validated['username'];
        }

        if (isset($validated['nama_admin'])) {
            $admin->nama_admin = $validated['nama_admin'];
        }

        if (! empty($validated['password'])) {
            $admin->password = Hash::make($validated['password']);
        }

        $admin->save();

        return response()->json([
            'message' => 'Admin berhasil diperbarui.',
            'data' => $admin,
        ]);
    }

    public function destroy(int $id)
    {
        $admin = Admin::query()->findOrFail($id);

        DB::transaction(function () use ($id, $admin) {
            $dokterIds = Dokter::query()
                ->where('id_admin', $id)
                ->pluck('id_dokter');

            JadwalDokter::query()->where('id_admin', $id)->delete();
            if ($dokterIds->isNotEmpty()) {
                JadwalDokter::query()->whereIn('id_dokter', $dokterIds)->delete();
            }

            Dokter::query()->where('id_admin', $id)->delete();
            Artikel::query()->where('id_admin', $id)->delete();
            Layanan::query()->where('id_admin', $id)->delete();
            Banner::query()->where('id_admin', $id)->delete();
            Kontak::query()->where('id_admin', $id)->delete();
            $admin->delete();
        });

        return response()->json([
            'message' => 'Admin dan data relasinya berhasil dihapus.',
        ]);
    }
}
