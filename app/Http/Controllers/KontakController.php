<?php

namespace App\Http\Controllers;

use App\Models\Kontak;
use Illuminate\Http\Request;

class KontakController extends Controller
{
    public function index()
    {
        $kontak = Kontak::query()
            ->orderByDesc('id_kontak')
            ->get();

        return response()->json([
            'kontak' => $kontak,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'telepon' => ['required', 'string', 'max:50'],
            'email' => ['required', 'email', 'max:255'],
            'alamat' => ['required', 'string'],
            'whatsapp' => ['nullable', 'string', 'max:50'],
            'link_maps' => ['nullable', 'string', 'max:255'],
            'id_admin' => ['required', 'exists:admin,id_admin'],
        ]);

        $kontak = new Kontak();
        $kontak->telepon = $validated['telepon'];
        $kontak->email = $validated['email'];
        $kontak->alamat = $validated['alamat'];
        $kontak->whatsapp = $validated['whatsapp'] ?? null;
        $kontak->link_maps = $validated['link_maps'] ?? null;
        $kontak->id_admin = $validated['id_admin'];
        $kontak->save();

        return response()->json([
            'message' => 'Kontak berhasil dibuat.',
            'data' => $kontak,
        ], 201);
    }

    public function show(int $id)
    {
        $kontak = Kontak::query()->findOrFail($id);

        return response()->json([
            'kontak' => $kontak,
        ]);
    }

    public function update(Request $request, int $id)
    {
        $kontak = Kontak::query()->findOrFail($id);

        $validated = $request->validate([
            'telepon' => ['sometimes', 'required', 'string', 'max:50'],
            'email' => ['sometimes', 'required', 'email', 'max:255'],
            'alamat' => ['sometimes', 'required', 'string'],
            'whatsapp' => ['nullable', 'string', 'max:50'],
            'link_maps' => ['nullable', 'string', 'max:255'],
            'id_admin' => ['sometimes', 'required', 'exists:admin,id_admin'],
        ]);

        if (array_key_exists('telepon', $validated)) {
            $kontak->telepon = $validated['telepon'];
        }

        if (array_key_exists('email', $validated)) {
            $kontak->email = $validated['email'];
        }

        if (array_key_exists('alamat', $validated)) {
            $kontak->alamat = $validated['alamat'];
        }

        if (array_key_exists('whatsapp', $validated)) {
            $kontak->whatsapp = $validated['whatsapp'];
        }

        if (array_key_exists('link_maps', $validated)) {
            $kontak->link_maps = $validated['link_maps'];
        }

        if (array_key_exists('id_admin', $validated)) {
            $kontak->id_admin = $validated['id_admin'];
        }

        $kontak->save();

        return response()->json([
            'message' => 'Kontak berhasil diperbarui.',
            'data' => $kontak,
        ]);
    }

    public function destroy(int $id)
    {
        $kontak = Kontak::query()->findOrFail($id);
        $kontak->delete();

        return response()->json([
            'message' => 'Kontak berhasil dihapus.',
        ]);
    }
}
