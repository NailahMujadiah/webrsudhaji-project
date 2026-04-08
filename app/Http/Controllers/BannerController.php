<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;

class BannerController extends Controller
{
    public function index()
    {
        $banner = Banner::query()
            ->orderByDesc('id_banner')
            ->get();

        return response()->json([
            'banner' => $banner,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'judul' => ['required', 'string', 'max:255'],
            'gambar_banner' => ['nullable', 'string', 'max:255'],
            'deskripsi' => ['nullable', 'string'],
            'id_admin' => ['required', 'exists:admin,id_admin'],
        ]);

        $banner = new Banner();
        $banner->judul = $validated['judul'];
        $banner->gambar_banner = $validated['gambar_banner'] ?? null;
        $banner->deskripsi = $validated['deskripsi'] ?? null;
        $banner->id_admin = $validated['id_admin'];
        $banner->save();

        return response()->json([
            'message' => 'Banner berhasil dibuat.',
            'data' => $banner,
        ], 201);
    }

    public function show(int $id)
    {
        $banner = Banner::query()->findOrFail($id);

        return response()->json([
            'banner' => $banner,
        ]);
    }

    public function update(Request $request, int $id)
    {
        $banner = Banner::query()->findOrFail($id);

        $validated = $request->validate([
            'judul' => ['sometimes', 'required', 'string', 'max:255'],
            'gambar_banner' => ['nullable', 'string', 'max:255'],
            'deskripsi' => ['nullable', 'string'],
            'id_admin' => ['sometimes', 'required', 'exists:admin,id_admin'],
        ]);

        if (array_key_exists('judul', $validated)) {
            $banner->judul = $validated['judul'];
        }

        if (array_key_exists('gambar_banner', $validated)) {
            $banner->gambar_banner = $validated['gambar_banner'];
        }

        if (array_key_exists('deskripsi', $validated)) {
            $banner->deskripsi = $validated['deskripsi'];
        }

        if (array_key_exists('id_admin', $validated)) {
            $banner->id_admin = $validated['id_admin'];
        }

        $banner->save();

        return response()->json([
            'message' => 'Banner berhasil diperbarui.',
            'data' => $banner,
        ]);
    }

    public function destroy(int $id)
    {
        $banner = Banner::query()->findOrFail($id);
        $banner->delete();

        return response()->json([
            'message' => 'Banner berhasil dihapus.',
        ]);
    }
}
