<?php

namespace App\Http\Controllers\Admin\Management;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\View\View;
use Illuminate\Http\RedirectResponse;

class AdminBannerController extends Controller
{
    public function index(): View
    {
        $admin = Auth::guard('admin')->user();
        $banners = Banner::query()
            ->where('id_admin', $admin->id_admin)
            ->orderByDesc('id_banner')
            ->paginate(10);

        return view('admin.management.banner.index', compact('banners', 'admin'));
    }

    public function create(): View
    {
        $admin = Auth::guard('admin')->user();

        return view('admin.management.banner.create', compact('admin'));
    }

    public function store(Request $request): RedirectResponse
    {
        $admin = Auth::guard('admin')->user();

        $validated = $request->validate([
            'judul' => ['required', 'string', 'max:255'],
            'gambar_banner' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            'deskripsi' => ['nullable', 'string'],
        ]);

        if ($request->hasFile('gambar_banner')) {
            $fileName = $this->buildReadableFileName($request->file('gambar_banner')->getClientOriginalExtension(), 'banner', $validated['judul']);
            $validated['gambar_banner'] = $request->file('gambar_banner')->storeAs('banner', $fileName, 'public');
        }

        Banner::create([
            'judul' => $validated['judul'],
            'gambar_banner' => $validated['gambar_banner'] ?? null,
            'deskripsi' => $validated['deskripsi'],
            'id_admin' => $admin->id_admin,
        ]);

        return redirect()->route('admin.banner.index')
            ->with('success', 'Banner berhasil dibuat.');
    }

    public function edit(int $id): View
    {
        $admin = Auth::guard('admin')->user();
        $banner = Banner::findOrFail($id);

        $this->authorize('belongsToAdmin', $banner);

        return view('admin.management.banner.edit', compact('banner', 'admin'));
    }

    public function update(Request $request, int $id): RedirectResponse
    {
        $admin = Auth::guard('admin')->user();
        $banner = Banner::findOrFail($id);

        $this->authorize('belongsToAdmin', $banner);

        $validated = $request->validate([
            'judul' => ['required', 'string', 'max:255'],
            'gambar_banner' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            'deskripsi' => ['nullable', 'string'],
        ]);

        if ($request->hasFile('gambar_banner')) {
            if (! empty($banner->gambar_banner) && Storage::disk('public')->exists($banner->gambar_banner)) {
                Storage::disk('public')->delete($banner->gambar_banner);
            }

            $fileName = $this->buildReadableFileName($request->file('gambar_banner')->getClientOriginalExtension(), 'banner', $validated['judul']);
            $validated['gambar_banner'] = $request->file('gambar_banner')->storeAs('banner', $fileName, 'public');
        }

        $banner->update($validated);

        return redirect()->route('admin.banner.index')
            ->with('success', 'Banner berhasil diperbarui.');
    }

    public function destroy(int $id): RedirectResponse
    {
        $admin = Auth::guard('admin')->user();
        $banner = Banner::findOrFail($id);

        $this->authorize('belongsToAdmin', $banner);

        if (! empty($banner->gambar_banner) && Storage::disk('public')->exists($banner->gambar_banner)) {
            Storage::disk('public')->delete($banner->gambar_banner);
        }

        $banner->delete();

        return redirect()->route('admin.banner.index')
            ->with('success', 'Banner berhasil dihapus.');
    }

    private function buildReadableFileName(string $extension, string $prefix, string $label): string
    {
        $slug = Str::slug($label);
        $slug = $slug !== '' ? $slug : $prefix;

        return sprintf('%s-%s-%s.%s', $prefix, $slug, now()->format('YmdHis'), Str::lower($extension));
    }
}
