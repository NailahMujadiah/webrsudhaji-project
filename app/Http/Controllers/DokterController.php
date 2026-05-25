<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Admin;
use App\Models\Dokter;
use App\Models\JadwalDokter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class DokterController extends Controller
{
    public function indexWeb()
    {
        $dokter = Cache::remember('public.dokter.list', now()->addMinutes(10), function () {
            return Dokter::query()
                ->select(['id_dokter', 'nama_dokter', 'spesialis', 'foto_dokter'])
                ->orderByDesc('id_dokter')
                ->get()
                ->map(static function (Dokter $item): array {
                    return [
                        'id_dokter' => $item->id_dokter,
                        'nama_dokter' => $item->nama_dokter,
                        'spesialis' => $item->spesialis,
                        'foto_dokter' => $item->foto_dokter_url,
                    ];
                })
                ->values()
                ->all();
        });

        return Inertia::render('daftar-dokter', [
            'dokters' => $dokter,
        ]);
    }

    public function showWeb(int $id)
    {
        $dokter = Cache::remember("public.dokter.detail.{$id}", now()->addMinutes(10), function () use ($id) {
            $dokter = Dokter::query()
                ->select(['id_dokter', 'nama_dokter', 'spesialis', 'foto_dokter'])
                ->with(['jadwalDokter' => function ($query) {
                    $query->select(['id_jadwal', 'id_dokter', 'hari', 'jam_mulai', 'jam_selesai', 'poli'])
                        ->orderBy('hari')
                        ->orderBy('jam_mulai');
                }])
                ->findOrFail($id);

            return [
                'id_dokter' => $dokter->id_dokter,
                'nama_dokter' => $dokter->nama_dokter,
                'spesialis' => $dokter->spesialis,
                'foto_dokter' => $dokter->foto_dokter_url,
                'jadwal' => $dokter->jadwalDokter->map(static function (JadwalDokter $jadwal): array {
                    return [
                        'id_jadwal' => $jadwal->id_jadwal,
                        'hari' => $jadwal->hari,
                        'jam_mulai' => $jadwal->jam_mulai,
                        'jam_selesai' => $jadwal->jam_selesai,
                        'poli' => $jadwal->poli,
                    ];
                })->values()->all(),
            ];
        });

        return Inertia::render('detail-dokter', [
            'dokter' => $dokter,
        ]);
    }

    public function index()
    {
        $dokter = Cache::remember('api.dokter.list', now()->addMinutes(5), function () {
            return Dokter::query()
                ->select(['id_dokter', 'nama_dokter', 'spesialis', 'foto_dokter', 'id_admin'])
                ->with('admin:id_admin,nama_admin')
                ->withCount('jadwalDokter')
                ->orderByDesc('id_dokter')
                ->get()
                ->map(function (Dokter $item) {
                    return [
                        'id_dokter' => $item->id_dokter,
                        'nama_dokter' => $item->nama_dokter,
                        'spesialis' => $item->spesialis,
                        'foto_dokter' => $item->foto_dokter_url,
                        'jumlah_jadwal' => $item->jadwal_dokter_count ?? 0,
                        'admin' => $item->admin ? [
                            'id_admin' => $item->admin->id_admin,
                            'nama_admin' => $item->admin->nama_admin,
                        ] : null,
                    ];
                })
                ->values()
                ->all();
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
        $this->flushPublicDokterCache($dokter->id_dokter);

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
        $this->flushPublicDokterCache($dokter->id_dokter);

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

        $this->flushPublicDokterCache($id);

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

    private function flushPublicDokterCache(?int $dokterId = null): void
    {
        Cache::forget('public.dokter.list');

        if ($dokterId !== null) {
            Cache::forget("public.dokter.detail.{$dokterId}");
        }
    }
}
