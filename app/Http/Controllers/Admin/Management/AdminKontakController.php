<?php

namespace App\Http\Controllers\Admin\Management;

use App\Http\Controllers\Controller;
use App\Models\Kontak;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;
use Illuminate\Http\RedirectResponse;

class AdminKontakController extends Controller
{
    public function index(): View
    {
        $admin = Auth::guard('admin')->user();
        $kontaks = Kontak::query()
            ->where('id_admin', $admin->id_admin)
            ->orderByDesc('id_kontak')
            ->paginate(10);

        return view('admin.management.kontak.index', compact('kontaks', 'admin'));
    }

    public function create(): View
    {
        $admin = Auth::guard('admin')->user();

        return view('admin.management.kontak.create', compact('admin'));
    }

    public function store(Request $request): RedirectResponse
    {
        $admin = Auth::guard('admin')->user();

        $validated = $request->validate([
            'telepon' => ['required', 'string', 'max:50'],
            'email' => ['required', 'email', 'max:255'],
            'alamat' => ['required', 'string'],
            'whatsapp' => ['nullable', 'string', 'max:50'],
            'link_maps' => ['nullable', 'string', 'max:255'],
        ]);

        Kontak::create([
            'telepon' => $validated['telepon'],
            'email' => $validated['email'],
            'alamat' => $validated['alamat'],
            'whatsapp' => $validated['whatsapp'],
            'link_maps' => $validated['link_maps'],
            'id_admin' => $admin->id_admin,
        ]);

        return redirect()->route('admin.kontak.index')
            ->with('success', 'Kontak berhasil dibuat.');
    }

    public function edit(int $id): View
    {
        $admin = Auth::guard('admin')->user();
        $kontak = Kontak::findOrFail($id);

        $this->authorize('belongsToAdmin', $kontak);

        return view('admin.management.kontak.edit', compact('kontak', 'admin'));
    }

    public function update(Request $request, int $id): RedirectResponse
    {
        $admin = Auth::guard('admin')->user();
        $kontak = Kontak::findOrFail($id);

        $this->authorize('belongsToAdmin', $kontak);

        $validated = $request->validate([
            'telepon' => ['required', 'string', 'max:50'],
            'email' => ['required', 'email', 'max:255'],
            'alamat' => ['required', 'string'],
            'whatsapp' => ['nullable', 'string', 'max:50'],
            'link_maps' => ['nullable', 'string', 'max:255'],
        ]);

        $kontak->update($validated);

        return redirect()->route('admin.kontak.index')
            ->with('success', 'Kontak berhasil diperbarui.');
    }

    public function destroy(int $id): RedirectResponse
    {
        $admin = Auth::guard('admin')->user();
        $kontak = Kontak::findOrFail($id);

        $this->authorize('belongsToAdmin', $kontak);

        $kontak->delete();

        return redirect()->route('admin.kontak.index')
            ->with('success', 'Kontak berhasil dihapus.');
    }
}
