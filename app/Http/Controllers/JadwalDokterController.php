<?php

namespace App\Http\Controllers;

use App\Models\JadwalDokter;
use Illuminate\Http\Request;

class JadwalDokterController extends Controller
{
    public function index()
    {
        $jadwal = JadwalDokter::query()
            ->with('dokter:id_dokter,nama_dokter,spesialis')
            ->orderByDesc('id_jadwal')
            ->get();

        return response()->json([
            'jadwal_dokter' => $jadwal,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'id_dokter' => ['required', 'exists:dokter,id_dokter'],
            'hari' => ['required', 'string', 'max:255'],
            'jam_mulai' => ['required', 'date_format:H:i'],
            'jam_selesai' => ['required', 'date_format:H:i', 'after:jam_mulai'],
            'poli' => ['required', 'string', 'max:255'],
            'id_admin' => ['required', 'exists:admin,id_admin'],
        ]);

        $jadwal = new JadwalDokter();
        $jadwal->id_dokter = $validated['id_dokter'];
        $jadwal->hari = $validated['hari'];
        $jadwal->jam_mulai = $validated['jam_mulai'];
        $jadwal->jam_selesai = $validated['jam_selesai'];
        $jadwal->poli = $validated['poli'];
        $jadwal->id_admin = $validated['id_admin'];
        $jadwal->save();

        return response()->json([
            'message' => 'Jadwal dokter berhasil dibuat.',
            'data' => $jadwal,
        ], 201);
    }

    public function show(int $id)
    {
        $jadwal = JadwalDokter::query()
            ->with('dokter:id_dokter,nama_dokter,spesialis')
            ->findOrFail($id);

        return response()->json([
            'jadwal_dokter' => $jadwal,
        ]);
    }

    public function update(Request $request, int $id)
    {
        $jadwal = JadwalDokter::query()->findOrFail($id);

        $validated = $request->validate([
            'id_dokter' => ['sometimes', 'required', 'exists:dokter,id_dokter'],
            'hari' => ['sometimes', 'required', 'string', 'max:255'],
            'jam_mulai' => ['sometimes', 'required', 'date_format:H:i'],
            'jam_selesai' => ['sometimes', 'required', 'date_format:H:i'],
            'poli' => ['sometimes', 'required', 'string', 'max:255'],
            'id_admin' => ['sometimes', 'required', 'exists:admin,id_admin'],
        ]);

        if (array_key_exists('id_dokter', $validated)) {
            $jadwal->id_dokter = $validated['id_dokter'];
        }

        if (array_key_exists('hari', $validated)) {
            $jadwal->hari = $validated['hari'];
        }

        if (array_key_exists('jam_mulai', $validated)) {
            $jadwal->jam_mulai = $validated['jam_mulai'];
        }

        if (array_key_exists('jam_selesai', $validated)) {
            $jadwal->jam_selesai = $validated['jam_selesai'];
        }

        if (array_key_exists('poli', $validated)) {
            $jadwal->poli = $validated['poli'];
        }

        if (array_key_exists('id_admin', $validated)) {
            $jadwal->id_admin = $validated['id_admin'];
        }

        if (array_key_exists('jam_mulai', $validated) || array_key_exists('jam_selesai', $validated)) {
            if ($jadwal->jam_selesai <= $jadwal->jam_mulai) {
                return response()->json([
                    'message' => 'jam_selesai harus lebih besar dari jam_mulai.',
                ], 422);
            }
        }

        $jadwal->save();

        return response()->json([
            'message' => 'Jadwal dokter berhasil diperbarui.',
            'data' => $jadwal,
        ]);
    }

    public function destroy(int $id)
    {
        $jadwal = JadwalDokter::query()->findOrFail($id);
        $jadwal->delete();

        return response()->json([
            'message' => 'Jadwal dokter berhasil dihapus.',
        ]);
    }
}
