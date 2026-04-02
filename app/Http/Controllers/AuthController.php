<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class AuthController extends Controller
{
    public function showAdminLoginForm(): View
    {
        return view('admin-login');
    }

    public function loginWeb(Request $request): RedirectResponse
    {
        $credentials = $request->validate([
            'username' => ['required', 'string'],
            'password' => ['required', 'string'],
        ]);

        if (! Auth::guard('admin')->attempt($credentials)) {
            return back()->withErrors([
                'username' => 'Username atau password salah.',
            ])->onlyInput('username');
        }

        $request->session()->regenerate();

        return redirect()->route('admin.login')->with('status', 'Login admin berhasil.');
    }

    public function logoutWeb(Request $request): RedirectResponse
    {
        Auth::guard('admin')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('admin.login')->with('status', 'Logout berhasil.');
    }

    public function login(Request $request): JsonResponse
    {
        $credentials = $request->validate([
            'username' => ['required', 'string'],
            'password' => ['required', 'string'],
        ]);

        if (! Auth::guard('admin')->validate($credentials)) {
            return response()->json([
                'message' => 'Username atau password salah.',
            ], 401);
        }

        $admin = Admin::query()
            ->select(['id_admin', 'username', 'nama_admin'])
            ->where('username', $credentials['username'])
            ->first();

        return response()->json([
            'message' => 'Login berhasil.',
            'data' => $admin,
        ]);
    }
}