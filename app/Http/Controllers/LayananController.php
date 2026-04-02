<?php

namespace App\Http\Controllers;

use App\Models\Layanan;
use Illuminate\Http\Request;

class LayananController extends Controller
{
    public function index()
    {
        $layanan = Layanan::query()
            ->orderByDesc('id_layanan')
            ->get();

        return response()->json([
            'layanan' => $layanan,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama_layanan' => ['required', 'string', 'max:255'],
            'kategori' => ['required', 'string', 'max:255'],
            'deskripsi' => ['required', 'string'],
            'gambar_layanan' => ['nullable', 'string', 'max:255'],
            'id_admin' => ['required', 'exists:admin,id_admin'],
        ]);

        $layanan = new Layanan();
        $layanan->nama_layanan = $validated['nama_layanan'];
        $layanan->kategori = $validated['kategori'];
        $layanan->deskripsi = $validated['deskripsi'];
        $layanan->gambar_layanan = $validated['gambar_layanan'] ?? null;
        $layanan->id_admin = $validated['id_admin'];
        $layanan->save();

        return response()->json([
            'message' => 'Layanan berhasil dibuat.',
            'data' => $layanan,
        ], 201);
    }

    public function show(int $id)
    {
        $layanan = Layanan::query()->findOrFail($id);

        return response()->json([
            'layanan' => $layanan,
        ]);
    }

    public function update(Request $request, int $id)
    {
        $layanan = Layanan::query()->findOrFail($id);

        $validated = $request->validate([
            'nama_layanan' => ['sometimes', 'required', 'string', 'max:255'],
            'kategori' => ['sometimes', 'required', 'string', 'max:255'],
            'deskripsi' => ['sometimes', 'required', 'string'],
            'gambar_layanan' => ['nullable', 'string', 'max:255'],
            'id_admin' => ['sometimes', 'required', 'exists:admin,id_admin'],
        ]);

        if (array_key_exists('nama_layanan', $validated)) {
            $layanan->nama_layanan = $validated['nama_layanan'];
        }

        if (array_key_exists('kategori', $validated)) {
            $layanan->kategori = $validated['kategori'];
        }

        if (array_key_exists('deskripsi', $validated)) {
            $layanan->deskripsi = $validated['deskripsi'];
        }

        if (array_key_exists('gambar_layanan', $validated)) {
            $layanan->gambar_layanan = $validated['gambar_layanan'];
        }

        if (array_key_exists('id_admin', $validated)) {
            $layanan->id_admin = $validated['id_admin'];
        }

        $layanan->save();

        return response()->json([
            'message' => 'Layanan berhasil diperbarui.',
            'data' => $layanan,
        ]);
    }

    public function destroy(int $id)
    {
        $layanan = Layanan::query()->findOrFail($id);
        $layanan->delete();

        return response()->json([
            'message' => 'Layanan berhasil dihapus.',
        ]);
    }
}
