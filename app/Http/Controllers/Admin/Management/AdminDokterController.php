<?php

namespace App\Http\Controllers\Admin\Management;

use App\Http\Controllers\Controller;
use App\Models\Dokter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\View\View;
use Illuminate\Http\RedirectResponse;

class AdminDokterController extends Controller
{
    private function mediaDisk(): string
    {
        return (string) config('filesystems.media_disk', 'public');
    }

    public function index(): View
    {
        $admin = Auth::guard('admin')->user();
        $dokters = Dokter::query()
            ->where('id_admin', $admin->id_admin)
            ->orderByDesc('id_dokter')
            ->paginate(10);

        return view('admin.management.dokter.index', compact('dokters', 'admin'));
    }

    public function create(): View
    {
        $admin = Auth::guard('admin')->user();

        return view('admin.management.dokter.create', compact('admin'));
    }

    public function store(Request $request): RedirectResponse
    {
        $admin = Auth::guard('admin')->user();

        $validated = $request->validate([
            'nama_dokter' => ['required', 'string', 'max:255'],
            'spesialis' => ['required', 'string', 'max:255'],
            'foto_dokter' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
        ]);

        if ($request->hasFile('foto_dokter')) {
            $fileName = $this->buildReadableFileName($request->file('foto_dokter')->getClientOriginalExtension(), 'dokter', $validated['nama_dokter']);
            $validated['foto_dokter'] = $request->file('foto_dokter')->storeAs('dokter', $fileName, $this->mediaDisk());
        }

        Dokter::create([
            'nama_dokter' => $validated['nama_dokter'],
            'spesialis' => $validated['spesialis'],
            'foto_dokter' => $validated['foto_dokter'] ?? null,
            'id_admin' => $admin->id_admin,
        ]);

        return redirect()->route('admin.dokter.index')
            ->with('success', 'Dokter berhasil dibuat.');
    }

    public function edit(int $id): View
    {
        $admin = Auth::guard('admin')->user();
        $dokter = Dokter::findOrFail($id);

        $this->authorize('belongsToAdmin', $dokter);

        return view('admin.management.dokter.edit', compact('dokter', 'admin'));
    }

    public function update(Request $request, int $id): RedirectResponse
    {
        $admin = Auth::guard('admin')->user();
        $dokter = Dokter::findOrFail($id);

        $this->authorize('belongsToAdmin', $dokter);

        $validated = $request->validate([
            'nama_dokter' => ['required', 'string', 'max:255'],
            'spesialis' => ['required', 'string', 'max:255'],
            'foto_dokter' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
        ]);

        if ($request->hasFile('foto_dokter')) {
            if (! empty($dokter->foto_dokter) && Storage::disk($this->mediaDisk())->exists($dokter->foto_dokter)) {
                Storage::disk($this->mediaDisk())->delete($dokter->foto_dokter);
            }

            $fileName = $this->buildReadableFileName($request->file('foto_dokter')->getClientOriginalExtension(), 'dokter', $validated['nama_dokter']);
            $validated['foto_dokter'] = $request->file('foto_dokter')->storeAs('dokter', $fileName, $this->mediaDisk());
        }

        $dokter->update($validated);

        return redirect()->route('admin.dokter.index')
            ->with('success', 'Dokter berhasil diperbarui.');
    }

    public function destroy(int $id): RedirectResponse
    {
        $admin = Auth::guard('admin')->user();
        $dokter = Dokter::findOrFail($id);

        $this->authorize('belongsToAdmin', $dokter);

        DB::transaction(function () use ($dokter) {
            if (! empty($dokter->foto_dokter) && Storage::disk($this->mediaDisk())->exists($dokter->foto_dokter)) {
                Storage::disk($this->mediaDisk())->delete($dokter->foto_dokter);
            }

            $dokter->jadwalDokter()->delete();
            $dokter->delete();
        });

        return redirect()->route('admin.dokter.index')
            ->with('success', 'Dokter dan jadwal terkait berhasil dihapus.');
    }

    private function buildReadableFileName(string $extension, string $prefix, string $label): string
    {
        $slug = Str::slug($label);
        $slug = $slug !== '' ? $slug : $prefix;

        return sprintf('%s-%s-%s.%s', $prefix, $slug, now()->format('YmdHis'), Str::lower($extension));
    }
}
