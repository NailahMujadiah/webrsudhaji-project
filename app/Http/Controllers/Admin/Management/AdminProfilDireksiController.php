<?php

namespace App\Http\Controllers\Admin\Management;

use App\Http\Controllers\Controller;
use App\Models\DireksiProfile;
use App\Models\Position;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\View\View;

class AdminProfilDireksiController extends Controller
{
    private function mediaDisk(): string
    {
        return (string) config('filesystems.media_disk', 'public');
    }

    public function index(): View
    {
        $admin = Auth::guard('admin')->user();
        $positions = Position::query()
            ->with(['profile', 'children.profile'])
            ->orderBy('parent_id')
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get();

        return view('admin.management.profil-direksi.index', compact('positions', 'admin'));
    }

    public function edit(int $id): View
    {
        $admin = Auth::guard('admin')->user();
        $position = Position::with('profile')->findOrFail($id);
        $profile = DireksiProfile::firstOrCreate(
            ['position_id' => $position->id],
            ['nama_pejabat' => null, 'foto_profil' => null, 'deskripsi_singkat' => null, 'is_active' => true]
        );

        return view('admin.management.profil-direksi.edit', compact('position', 'profile', 'admin'));
    }

    public function update(Request $request, int $id): RedirectResponse
    {
        $position = Position::findOrFail($id);
        $profile = DireksiProfile::firstOrCreate(
            ['position_id' => $position->id],
            ['nama_pejabat' => null, 'foto_profil' => null, 'deskripsi_singkat' => null, 'is_active' => true]
        );

        $validated = $request->validate([
            'nama_pejabat' => ['required', 'string', 'max:255'],
            'deskripsi_singkat' => ['nullable', 'string'],
            'is_active' => ['required', 'boolean'],
            'foto_profil' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
        ]);

        try {
    if ($request->hasFile('foto_profil')) {
        if (
            !empty($profile->foto_profil) &&
            Storage::disk($this->mediaDisk())->exists($profile->foto_profil)
        ) {
            Storage::disk($this->mediaDisk())->delete($profile->foto_profil);
        }

        $fileName = $this->buildReadableFileName(
            $request->file('foto_profil')->getClientOriginalExtension(),
            'direksi-profile',
            $position->code
        );

        $validated['foto_profil'] = $request->file('foto_profil')->storeAs(
            'direksi-profiles',
            $fileName,
            $this->mediaDisk()
        );
    }
} catch (\Exception $e) {
    return back()->withErrors([
        'foto_profil' => 'Upload ke Supabase gagal: ' . $e->getMessage()
    ]);
}

        $profile->update([
            'position_id' => $position->id,
            'nama_pejabat' => $validated['nama_pejabat'],
            'deskripsi_singkat' => $validated['deskripsi_singkat'] ?? null,
            'is_active' => (bool) $validated['is_active'],
            'foto_profil' => $validated['foto_profil'] ?? $profile->foto_profil,
        ]);

        return redirect()->route('admin.profil-direksi.index')
            ->with('success', 'Profil pejabat berhasil diperbarui.');
    }

    private function buildReadableFileName(string $extension, string $prefix, string $label): string
    {
        $slug = Str::slug($label);
        $slug = $slug !== '' ? $slug : $prefix;

        return sprintf('%s-%s-%s.%s', $prefix, $slug, now()->format('YmdHis'), Str::lower($extension));
    }
}
