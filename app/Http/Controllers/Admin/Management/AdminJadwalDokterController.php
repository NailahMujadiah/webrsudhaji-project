<?php

namespace App\Http\Controllers\Admin\Management;

use App\Http\Controllers\Controller;
use App\Models\Dokter;
use App\Models\JadwalDokter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\View\View;
use Illuminate\Http\RedirectResponse;

class AdminJadwalDokterController extends Controller
{
    public function index(): View
    {
        $admin = Auth::guard('admin')->user();
        $jadwals = JadwalDokter::query()
            ->where('id_admin', $admin->id_admin)
            ->with('dokter:id_dokter,nama_dokter')
            ->orderByDesc('id_jadwal')
            ->paginate(10);

        return view('admin.management.jadwal.index', compact('jadwals', 'admin'));
    }

    public function create(): View
    {
        $admin = Auth::guard('admin')->user();
        $dokters = Dokter::query()
            ->where('id_admin', $admin->id_admin)
            ->select('id_dokter', 'nama_dokter', 'spesialis')
            ->get();

        return view('admin.management.jadwal.create', compact('admin', 'dokters'));
    }

    public function store(Request $request): RedirectResponse
    {
        $admin = Auth::guard('admin')->user();

        $validated = $request->validate([
            'id_dokter' => ['required', 'exists:dokter,id_dokter'],
            'schedules' => ['required', 'array', 'min:1'],
            'schedules.*.hari' => ['required', 'in:Senin,Selasa,Rabu,Kamis,Jumat,Sabtu,Minggu'],
            'schedules.*.jam_mulai' => ['required', 'date_format:H:i'],
            'schedules.*.jam_selesai' => ['required', 'date_format:H:i'],
        ]);

        foreach ($validated['schedules'] as $index => $schedule) {
            if ($schedule['jam_selesai'] <= $schedule['jam_mulai']) {
                return back()
                    ->withErrors([
                        "schedules.{$index}.jam_selesai" => 'Jam selesai harus lebih besar dari jam mulai.',
                    ])
                    ->withInput();
            }
        }

        $dokter = Dokter::findOrFail($validated['id_dokter']);
        if ($dokter->id_admin !== $admin->id_admin) {
            abort(403);
        }

        foreach ($validated['schedules'] as $schedule) {
            JadwalDokter::create([
                'id_dokter' => $validated['id_dokter'],
                'hari' => $schedule['hari'],
                'jam_mulai' => $schedule['jam_mulai'],
                'jam_selesai' => $schedule['jam_selesai'],
                'poli' => $dokter->spesialis,
                'id_admin' => $admin->id_admin,
            ]);
        }

        Cache::forget('public.dokter.list');
        Cache::forget("public.dokter.detail.{$validated['id_dokter']}");

        return redirect()->route('admin.jadwal.index')
            ->with('success', 'Jadwal dokter berhasil dibuat untuk hari yang dipilih.');
    }

    public function edit(int $id): View
    {
        $admin = Auth::guard('admin')->user();
        $jadwal = JadwalDokter::findOrFail($id);

        $this->authorize('belongsToAdmin', $jadwal);

        $dokters = Dokter::query()
            ->where('id_admin', $admin->id_admin)
            ->select('id_dokter', 'nama_dokter', 'spesialis')
            ->get();

        return view('admin.management.jadwal.edit', compact('jadwal', 'admin', 'dokters'));
    }

    public function update(Request $request, int $id): RedirectResponse
    {
        $admin = Auth::guard('admin')->user();
        $jadwal = JadwalDokter::findOrFail($id);

        $this->authorize('belongsToAdmin', $jadwal);

        $validated = $request->validate([
            'id_dokter' => ['required', 'exists:dokter,id_dokter'],
            'hari' => ['required', 'string', 'max:255'],
            'jam_mulai' => ['required', 'date_format:H:i'],
            'jam_selesai' => ['required', 'date_format:H:i', 'after:jam_mulai'],
        ]);

        $dokter = Dokter::findOrFail($validated['id_dokter']);
        if ($dokter->id_admin !== $admin->id_admin) {
            abort(403);
        }

        $jadwal->update([
            'id_dokter' => $validated['id_dokter'],
            'hari' => $validated['hari'],
            'jam_mulai' => $validated['jam_mulai'],
            'jam_selesai' => $validated['jam_selesai'],
            'poli' => $dokter->spesialis,
        ]);

        Cache::forget('public.dokter.list');
        Cache::forget("public.dokter.detail.{$validated['id_dokter']}");

        return redirect()->route('admin.jadwal.index')
            ->with('success', 'Jadwal dokter berhasil diperbarui.');
    }

    public function destroy(int $id): RedirectResponse
    {
        $admin = Auth::guard('admin')->user();
        $jadwal = JadwalDokter::findOrFail($id);

        $this->authorize('belongsToAdmin', $jadwal);

        $dokterId = $jadwal->id_dokter;
        $jadwal->delete();

        Cache::forget('public.dokter.list');
        Cache::forget("public.dokter.detail.{$dokterId}");

        return redirect()->route('admin.jadwal.index')
            ->with('success', 'Jadwal dokter berhasil dihapus.');
    }
}
