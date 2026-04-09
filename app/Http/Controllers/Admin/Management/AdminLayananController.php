<?php

namespace App\Http\Controllers\Admin\Management;

use App\Http\Controllers\Controller;
use App\Models\Layanan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;
use Illuminate\Http\RedirectResponse;

class AdminLayananController extends Controller
{
    public function index(): View
    {
        $admin = Auth::guard('admin')->user();
        $layanans = Layanan::query()
            ->where('id_admin', $admin->id_admin)
            ->orderByDesc('id_layanan')
            ->paginate(10);

        return view('admin.management.layanan.index', compact('layanans', 'admin'));
    }

    public function create(): View
    {
        $admin = Auth::guard('admin')->user();

        return view('admin.management.layanan.create', compact('admin'));
    }

    public function store(Request $request): RedirectResponse
    {
        $admin = Auth::guard('admin')->user();

        $validated = $request->validate([
            'nama_layanan' => ['required', 'string', 'max:255'],
            'kategori' => ['required', 'string', 'max:255'],
            'deskripsi' => ['required', 'string'],
            'gambar_layanan' => ['nullable', 'string', 'max:255'],
        ]);

        Layanan::create([
            'nama_layanan' => $validated['nama_layanan'],
            'kategori' => $validated['kategori'],
            'deskripsi' => $validated['deskripsi'],
            'gambar_layanan' => $validated['gambar_layanan'],
            'id_admin' => $admin->id_admin,
        ]);

        return redirect()->route('admin.layanan.index')
            ->with('success', 'Layanan berhasil dibuat.');
    }

    public function edit(int $id): View
    {
        $admin = Auth::guard('admin')->user();
        $layanan = Layanan::findOrFail($id);

        $this->authorize('belongsToAdmin', $layanan);

        return view('admin.management.layanan.edit', compact('layanan', 'admin'));
    }

    public function update(Request $request, int $id): RedirectResponse
    {
        $admin = Auth::guard('admin')->user();
        $layanan = Layanan::findOrFail($id);

        $this->authorize('belongsToAdmin', $layanan);

        $validated = $request->validate([
            'nama_layanan' => ['required', 'string', 'max:255'],
            'kategori' => ['required', 'string', 'max:255'],
            'deskripsi' => ['required', 'string'],
            'gambar_layanan' => ['nullable', 'string', 'max:255'],
        ]);

        $layanan->update($validated);

        return redirect()->route('admin.layanan.index')
            ->with('success', 'Layanan berhasil diperbarui.');
    }

    public function destroy(int $id): RedirectResponse
    {
        $admin = Auth::guard('admin')->user();
        $layanan = Layanan::findOrFail($id);

        $this->authorize('belongsToAdmin', $layanan);

        $layanan->delete();

        return redirect()->route('admin.layanan.index')
            ->with('success', 'Layanan berhasil dihapus.');
    }
}
