<?php

namespace App\Http\Controllers\Admin\Management;

use App\Http\Controllers\Controller;
use App\Models\Artikel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\View\View;
use Illuminate\Http\RedirectResponse;

class AdminArtikelController extends Controller
{
    public function index(): View
    {
        $admin = Auth::guard('admin')->user();
        $artikels = Artikel::query()
            ->where('id_admin', $admin->id_admin)
            ->orderByDesc('tanggal')
            ->paginate(10);

        return view('admin.management.artikel.index', compact('artikels', 'admin'));
    }

    public function create(): View
    {
        $admin = Auth::guard('admin')->user();

        return view('admin.management.artikel.create', compact('admin'));
    }

    public function store(Request $request): RedirectResponse
    {
        $admin = Auth::guard('admin')->user();

        $validated = $request->validate([
            'judul' => ['required', 'string', 'max:255'],
            'isi_artikel' => ['required', 'string'],
            'gambar_artikel' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            'kategori' => ['required', 'string', 'max:255'],
            'tanggal' => ['required', 'date'],
        ]);

        if ($request->hasFile('gambar_artikel')) {
            $fileName = $this->buildReadableFileName($request->file('gambar_artikel')->getClientOriginalExtension(), 'artikel', $validated['judul']);
            $validated['gambar_artikel'] = $request->file('gambar_artikel')->storeAs('artikel', $fileName, 'public');
        }

        Artikel::create([
            'judul' => $validated['judul'],
            'isi_artikel' => $validated['isi_artikel'],
            'gambar_artikel' => $validated['gambar_artikel'] ?? null,
            'kategori' => $validated['kategori'],
            'tanggal' => $validated['tanggal'],
            'id_admin' => $admin->id_admin,
        ]);

        return redirect()->route('admin.artikel.index')
            ->with('success', 'Artikel berhasil dibuat.');
    }

    public function edit(int $id): View
    {
        $admin = Auth::guard('admin')->user();
        $artikel = Artikel::findOrFail($id);

        $this->authorize('belongsToAdmin', $artikel);

        return view('admin.management.artikel.edit', compact('artikel', 'admin'));
    }

    public function update(Request $request, int $id): RedirectResponse
    {
        $admin = Auth::guard('admin')->user();
        $artikel = Artikel::findOrFail($id);

        $this->authorize('belongsToAdmin', $artikel);

        $validated = $request->validate([
            'judul' => ['required', 'string', 'max:255'],
            'isi_artikel' => ['required', 'string'],
            'gambar_artikel' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            'kategori' => ['required', 'string', 'max:255'],
            'tanggal' => ['required', 'date'],
        ]);

        if ($request->hasFile('gambar_artikel')) {
            if (! empty($artikel->gambar_artikel) && Storage::disk('public')->exists($artikel->gambar_artikel)) {
                Storage::disk('public')->delete($artikel->gambar_artikel);
            }

            $fileName = $this->buildReadableFileName($request->file('gambar_artikel')->getClientOriginalExtension(), 'artikel', $validated['judul']);
            $validated['gambar_artikel'] = $request->file('gambar_artikel')->storeAs('artikel', $fileName, 'public');
        }

        $artikel->update($validated);

        return redirect()->route('admin.artikel.index')
            ->with('success', 'Artikel berhasil diperbarui.');
    }

    public function destroy(int $id): RedirectResponse
    {
        $admin = Auth::guard('admin')->user();
        $artikel = Artikel::findOrFail($id);

        $this->authorize('belongsToAdmin', $artikel);

        if (! empty($artikel->gambar_artikel) && Storage::disk('public')->exists($artikel->gambar_artikel)) {
            Storage::disk('public')->delete($artikel->gambar_artikel);
        }

        $artikel->delete();

        return redirect()->route('admin.artikel.index')
            ->with('success', 'Artikel berhasil dihapus.');
    }

    private function buildReadableFileName(string $extension, string $prefix, string $label): string
    {
        $slug = Str::slug($label);
        $slug = $slug !== '' ? $slug : $prefix;

        return sprintf('%s-%s-%s.%s', $prefix, $slug, now()->format('YmdHis'), Str::lower($extension));
    }
}
