<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\View\View;

class ProfileController extends Controller
{
    public function edit(): View
    {
        $admin = Auth::guard('admin')->user();

        return view('admin.profile.edit', compact('admin'));
    }

    public function updateProfile(Request $request): RedirectResponse
    {
        $admin = Auth::guard('admin')->user();

        $validated = $request->validateWithBag('profileUpdate', [
            'username' => [
                'required',
                'string',
                'max:255',
                Rule::unique('admin', 'username')->ignore($admin->id_admin, 'id_admin'),
            ],
            'nama_admin' => ['required', 'string', 'max:255'],
            'foto_admin' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
        ]);

        if ($request->hasFile('foto_admin')) {
            if (! empty($admin->foto_admin) && Storage::disk('public')->exists($admin->foto_admin)) {
                Storage::disk('public')->delete($admin->foto_admin);
            }

            $fileName = $this->buildReadableFileName($request->file('foto_admin')->getClientOriginalExtension(), 'admin-profile', $validated['nama_admin']);
            $validated['foto_admin'] = $request->file('foto_admin')->storeAs('admin/profiles', $fileName, 'public');
        }

        $admin->update($validated);

        return redirect()->route('admin.profile.edit')
            ->with('success_profile', 'Profil admin berhasil diperbarui.');
    }

    public function updatePassword(Request $request): RedirectResponse
    {
        $admin = Auth::guard('admin')->user();

        $validated = $request->validateWithBag('passwordUpdate', [
            'current_password' => ['required', 'current_password:admin'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        $admin->password = Hash::make($validated['password']);
        $admin->save();

        return redirect()->route('admin.profile.edit')
            ->with('success_password', 'Password admin berhasil diperbarui.');
    }

    private function buildReadableFileName(string $extension, string $prefix, string $label): string
    {
        $slug = Str::slug($label);
        $slug = $slug !== '' ? $slug : $prefix;

        return sprintf('%s-%s-%s.%s', $prefix, $slug, now()->format('YmdHis'), Str::lower($extension));
    }
}
