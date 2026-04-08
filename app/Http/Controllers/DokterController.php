<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Dokter;
use App\Models\JadwalDokter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DokterController extends Controller
{
    public function index()
    {
        $dokter = Dokter::query()
            ->with('admin:id_admin,nama_admin')
            ->orderByDesc('id_dokter')
            ->get();

        $dokter->transform(function (Dokter $item) {
            $item->jumlah_jadwal = JadwalDokter::query()
                ->where('id_dokter', $item->id_dokter)
                ->count();

            return $item;
        });

        return response()->json([
            'dokter' => $dokter,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama_dokter' => ['required', 'string', 'max:255'],
            'spesialis' => ['required', 'string', 'max:255'],
            'foto_dokter' => ['nullable', 'string', 'max:255'],
            'id_admin' => ['required', 'exists:admin,id_admin'],
        ]);

        $dokter = Dokter::create($validated);

        return response()->json([
            'message' => 'Dokter berhasil dibuat.',
            'data' => $dokter,
        ], 201);
    }

    public function show(int $id)
    {
        $dokter = Dokter::query()
            ->with(['admin:id_admin,nama_admin', 'jadwalDokter'])
            ->findOrFail($id);

        return response()->json([
            'dokter' => $dokter,
        ]);
    }

    public function update(Request $request, int $id)
    {
        $dokter = Dokter::query()->findOrFail($id);

        $validated = $request->validate([
            'nama_dokter' => ['sometimes', 'required', 'string', 'max:255'],
            'spesialis' => ['sometimes', 'required', 'string', 'max:255'],
            'foto_dokter' => ['nullable', 'string', 'max:255'],
            'id_admin' => ['sometimes', 'required', 'exists:admin,id_admin'],
        ]);

        $dokter->update($validated);

        return response()->json([
            'message' => 'Dokter berhasil diperbarui.',
            'data' => $dokter,
        ]);
    }

    public function destroy(int $id)
    {
        $dokter = Dokter::query()->findOrFail($id);

        DB::transaction(function () use ($dokter) {
            JadwalDokter::query()
                ->where('id_dokter', $dokter->id_dokter)
                ->delete();

            $dokter->delete();
        });

        return response()->json([
            'message' => 'Dokter dan jadwal terkait berhasil dihapus.',
        ]);
    }

    public function adminOptions()
    {
        $admins = Admin::query()
            ->select(['id_admin', 'nama_admin'])
            ->orderBy('nama_admin')
            ->get();

        return response()->json([
            'admins' => $admins,
        ]);
    }
}
