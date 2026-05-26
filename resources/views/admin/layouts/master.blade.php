<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title') | Admin RSUD Haji</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/css/adminlte.min.css">
    @vite(['resources/css/app.css'])
</head>
<body class="min-h-screen bg-slate-50 text-slate-900 antialiased">
@php($currentAdmin = Auth::guard('admin')->user())
<div class="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.06),_transparent_30%),linear-gradient(180deg,_#f8fafc_0%,_#eef2ff_100%)]">
    <div class="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col lg:flex-row">
        <aside class="border-b border-slate-200/80 bg-white/95 backdrop-blur lg:sticky lg:top-0 lg:h-screen lg:w-80 lg:border-b-0 lg:border-r">
            <div class="flex h-full flex-col">
                <div class="border-b border-slate-200 px-6 py-5">
                    <a href="{{ route('admin.dashboard') }}" class="flex items-center gap-3 text-slate-900 no-underline">
                        <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white shadow-sm">RS</span>
                        <span>
                            <span class="block text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Admin Panel</span>
                            <span class="block text-xl font-semibold leading-none">RSUD Haji</span>
                        </span>
                    </a>
                </div>

                <div class="border-b border-slate-200 px-6 py-5">
                    <div class="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                        <div class="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-slate-900 text-white">
                            @if (!empty($currentAdmin?->foto_admin))
                                <img src="{{ $currentAdmin->foto_admin_url }}" alt="Foto Admin" class="h-full w-full object-cover">
                            @else
                                <i class="fas fa-user-circle text-xl"></i>
                            @endif
                        </div>
                        <div class="min-w-0">
                            <p class="truncate text-sm font-semibold text-slate-900">{{ $currentAdmin?->nama_admin }}</p>
                            <p class="truncate text-xs text-slate-500">{{ $currentAdmin?->username }}</p>
                        </div>
                    </div>
                </div>

                <nav class="flex-1 space-y-6 overflow-y-auto px-4 py-6">
                    <div>
                        <p class="px-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Navigasi</p>
                        <div class="mt-3 space-y-1">
                            <a href="{{ route('admin.dashboard') }}" class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition {{ request()->routeIs('admin.dashboard') ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900' }}">
                                <i class="fas fa-gauge-high w-5 text-center"></i>
                                <span>Dashboard</span>
                            </a>
                            <a href="{{ route('admin.profile.edit') }}" class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition {{ request()->routeIs('admin.profile.*') ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900' }}">
                                <i class="fas fa-user-gear w-5 text-center"></i>
                                <span>Profil Admin</span>
                            </a>
                            <a href="{{ route('admin.media-manager.index') }}" class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition {{ request()->routeIs('admin.media-manager.*') ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900' }}">
                                <i class="fas fa-photo-film w-5 text-center"></i>
                                <span>Media Manager</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <p class="px-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Management Konten</p>
                        <div class="mt-3 space-y-1">
                            <a href="{{ route('admin.banner.index') }}" class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition {{ request()->routeIs('admin.banner.*') ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900' }}">
                                <i class="fas fa-image w-5 text-center"></i>
                                <span>Banner</span>
                            </a>
                            <a href="{{ route('admin.artikel.index') }}" class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition {{ request()->routeIs('admin.artikel.*') ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900' }}">
                                <i class="fas fa-newspaper w-5 text-center"></i>
                                <span>Artikel</span>
                            </a>
                            <a href="{{ route('admin.layanan.index') }}" class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition {{ request()->routeIs('admin.layanan.*') ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900' }}">
                                <i class="fas fa-heartbeat w-5 text-center"></i>
                                <span>Layanan</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <p class="px-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Management Rumah Sakit</p>
                        <div class="mt-3 space-y-1">
                            <a href="{{ route('admin.dokter.index') }}" class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition {{ request()->routeIs('admin.dokter.*') ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900' }}">
                                <i class="fas fa-user-md w-5 text-center"></i>
                                <span>Dokter</span>
                            </a>
                            <a href="{{ route('admin.profil-direksi.index') }}" class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition {{ request()->routeIs('admin.profil-direksi.*') ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900' }}">
                                <i class="fas fa-id-badge w-5 text-center"></i>
                                <span>Profil Direksi</span>
                            </a>
                            <a href="{{ route('admin.jadwal.index') }}" class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition {{ request()->routeIs('admin.jadwal.*') ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900' }}">
                                <i class="fas fa-calendar w-5 text-center"></i>
                                <span>Jadwal Dokter</span>
                            </a>
                            <a href="{{ route('admin.kontak.index') }}" class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition {{ request()->routeIs('admin.kontak.*') ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900' }}">
                                <i class="fas fa-phone w-5 text-center"></i>
                                <span>Kontak</span>
                            </a>
                        </div>
                    </div>
                </nav>

                <div class="border-t border-slate-200 px-6 py-5">
                    <form action="{{ route('admin.logout') }}" method="POST" class="mb-0">
                        @csrf
                        <button type="submit" class="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600">
                            <i class="fas fa-right-from-bracket"></i>
                            Logout
                        </button>
                    </form>
                </div>
            </div>
        </aside>

        <div class="flex min-w-0 flex-1 flex-col">
            <header class="sticky top-0 z-20 border-b border-slate-200 bg-white/85 backdrop-blur">
                <div class="flex flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-8">
                    <div>
                        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">@yield('title')</p>
                        <h1 class="mt-1 text-2xl font-semibold tracking-tight text-slate-900">@yield('page-title', 'Admin Panel')</h1>
                    </div>

                    <div class="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-3 py-2">
                        @if (!empty($currentAdmin?->foto_admin))
                            <img src="{{ $currentAdmin->foto_admin_url }}" alt="Foto Admin" class="h-8 w-8 rounded-full object-cover">
                        @else
                            <div class="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white">
                                <i class="fas fa-user"></i>
                            </div>
                        @endif
                        <div class="hidden sm:block">
                            <p class="text-sm font-semibold text-slate-900">{{ $currentAdmin?->nama_admin }}</p>
                            <p class="text-xs text-slate-500">{{ $currentAdmin?->username }}</p>
                        </div>
                    </div>
                </div>
            </header>

            <main class="flex-1 px-4 py-6 lg:px-8 lg:py-8">
                <div class="mx-auto w-full max-w-7xl space-y-6">
                    @if ($errors->any())
                        <div class="rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-rose-700 shadow-sm" role="alert">
                            <div class="flex items-start justify-between gap-4">
                                <div>
                                    <h4 class="text-sm font-semibold">Gagal!</h4>
                                    <ul class="mt-2 list-disc space-y-1 pl-5 text-sm">
                                        @foreach ($errors->all() as $error)
                                            <li>{{ $error }}</li>
                                        @endforeach
                                    </ul>
                                </div>
                                <button type="button" class="text-rose-500 transition hover:text-rose-700" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>
                    @endif

                    @if (session('success'))
                        <div class="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-emerald-700 shadow-sm" role="alert">
                            <div class="flex items-center justify-between gap-4">
                                <p class="text-sm font-medium">{{ session('success') }}</p>
                                <button type="button" class="text-emerald-500 transition hover:text-emerald-700" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>
                    @endif

                    @yield('content')
                </div>
            </main>

            <footer class="border-t border-slate-200 bg-white/70 px-6 py-4 text-sm text-slate-500 backdrop-blur lg:px-8">
                <div class="mx-auto flex w-full max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <span><strong class="font-semibold text-slate-700">Copyright &copy; 2026</strong> Web RSUD Haji.</span>
                    <span><strong class="font-semibold text-slate-700">Version</strong> 1.0.0</span>
                </div>
            </footer>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/js/adminlte.min.js"></script>
@yield('scripts')
</body>
</html>
