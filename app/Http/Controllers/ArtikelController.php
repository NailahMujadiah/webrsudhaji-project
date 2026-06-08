<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ArtikelController extends Controller
{
    private function mediaDisk(): string
    {
        return (string) config('filesystems.media_disk', 'public');
    }
    public function index()
    {
        $artikel = Artikel::query()
            ->orderByDesc('id_artikel')
            ->get();

        return response()->json([
            'artikel' => $artikel,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'judul' => ['required', 'string', 'max:255'],
            'isi_artikel' => ['required', 'string'],
            'gambar_artikel' => ['nullable'],
            'kategori' => ['required', 'string', 'max:255'],
            'tanggal' => ['required', 'date'],
            'id_admin' => ['required', 'exists:admin,id_admin'],
        ]);

        if ($request->hasFile('gambar_artikel')) {
            $request->validate([
                'gambar_artikel' => ['image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            ]);

            $validated['gambar_artikel'] = $request->file('gambar_artikel')->store('artikel', $this->mediaDisk());
        } elseif (! empty($validated['gambar_artikel'])) {
            $request->validate([
                'gambar_artikel' => ['string', 'max:255'],
            ]);
        } else {
            $validated['gambar_artikel'] = null;
        }

        $artikel = new Artikel();
        $artikel->judul = $validated['judul'];
        $artikel->isi_artikel = $validated['isi_artikel'];
        $artikel->gambar_artikel = $validated['gambar_artikel'];
        $artikel->kategori = $validated['kategori'];
        $artikel->tanggal = $validated['tanggal'];
        $artikel->id_admin = $validated['id_admin'];
        $artikel->save();

        return response()->json([
            'message' => 'Artikel berhasil dibuat.',
            'data' => $artikel,
        ], 201);
    }

    public function show(int $id)
    {
        $artikel = Artikel::query()->findOrFail($id);

        return response()->json([
            'artikel' => $artikel,
        ]);
    }

    public function update(Request $request, int $id)
    {
        $artikel = Artikel::query()->findOrFail($id);

        $validated = $request->validate([
            'judul' => ['sometimes', 'required', 'string', 'max:255'],
            'isi_artikel' => ['sometimes', 'required', 'string'],
            'gambar_artikel' => ['nullable'],
            'kategori' => ['sometimes', 'required', 'string', 'max:255'],
            'tanggal' => ['sometimes', 'required', 'date'],
            'id_admin' => ['sometimes', 'required', 'exists:admin,id_admin'],
        ]);

        if ($request->hasFile('gambar_artikel')) {
            $request->validate([
                'gambar_artikel' => ['image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            ]);

            if (! empty($artikel->gambar_artikel) && ! Str::startsWith($artikel->gambar_artikel, ['http://', 'https://']) && Storage::disk($this->mediaDisk())->exists($artikel->gambar_artikel)) {
                Storage::disk($this->mediaDisk())->delete($artikel->gambar_artikel);
            }

            $validated['gambar_artikel'] = $request->file('gambar_artikel')->store('artikel', $this->mediaDisk());
        } elseif (array_key_exists('gambar_artikel', $validated) && ! empty($validated['gambar_artikel'])) {
            $request->validate([
                'gambar_artikel' => ['string', 'max:255'],
            ]);
        }

        if (array_key_exists('judul', $validated)) {
            $artikel->judul = $validated['judul'];
        }

        if (array_key_exists('isi_artikel', $validated)) {
            $artikel->isi_artikel = $validated['isi_artikel'];
        }

        if (array_key_exists('gambar_artikel', $validated)) {
            $artikel->gambar_artikel = $validated['gambar_artikel'];
        }

        if (array_key_exists('kategori', $validated)) {
            $artikel->kategori = $validated['kategori'];
        }

        if (array_key_exists('tanggal', $validated)) {
            $artikel->tanggal = $validated['tanggal'];
        }

        if (array_key_exists('id_admin', $validated)) {
            $artikel->id_admin = $validated['id_admin'];
        }

        $artikel->save();

        return response()->json([
            'message' => 'Artikel berhasil diperbarui.',
            'data' => $artikel,
        ]);
    }

    public function destroy(int $id)
    {
        $artikel = Artikel::query()->findOrFail($id);
        $artikel->delete();

        return response()->json([
            'message' => 'Artikel berhasil dihapus.',
        ]);
    }
}
