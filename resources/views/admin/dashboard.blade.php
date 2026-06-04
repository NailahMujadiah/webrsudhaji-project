@extends('admin.layouts.master')

@section('title', 'Dashboard')
@section('page-title', 'Dashboard Admin')

@section('content')
<div class="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.85fr)]">
    <div class="space-y-6">

        {{-- Stats Cards --}}
        <section class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div class="border-b border-slate-100 px-6 py-5">
                <p class="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Ringkasan</p>
                <h2 class="mt-1 text-xl font-semibold text-slate-900">Konten yang Anda kelola</h2>
            </div>

            <div class="grid gap-px bg-slate-100 md:grid-cols-2 xl:grid-cols-4">

                <a href="{{ route('admin.banner.index') }}"
                   class="group block bg-white p-6 transition hover:bg-slate-50">
                    <div class="flex items-center justify-between gap-4">
                        <div>
                            <p class="text-sm font-medium text-slate-500">Total Banner</p>
                            <p class="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                                {{ \App\Models\Banner::where('id_admin', $admin->id_admin)->count() }}
                            </p>
                        </div>
                        <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 transition group-hover:bg-sky-100">
                            <i class="fas fa-image text-lg"></i>
                        </span>
                    </div>
                    <span class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-500">
                        Lihat banner
                        <i class="fas fa-arrow-right text-xs transition group-hover:translate-x-0.5"></i>
                    </span>
                </a>

                <a href="{{ route('admin.artikel.index') }}"
                   class="group block bg-white p-6 transition hover:bg-slate-50">
                    <div class="flex items-center justify-between gap-4">
                        <div>
                            <p class="text-sm font-medium text-slate-500">Total Artikel</p>
                            <p class="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                                {{ \App\Models\Artikel::where('id_admin', $admin->id_admin)->count() }}
                            </p>
                        </div>
                        <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition group-hover:bg-emerald-100">
                            <i class="fas fa-newspaper text-lg"></i>
                        </span>
                    </div>
                    <span class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-500">
                        Lihat artikel
                        <i class="fas fa-arrow-right text-xs transition group-hover:translate-x-0.5"></i>
                    </span>
                </a>

                <a href="{{ route('admin.dokter.index') }}"
                   class="group block bg-white p-6 transition hover:bg-slate-50">
                    <div class="flex items-center justify-between gap-4">
                        <div>
                            <p class="text-sm font-medium text-slate-500">Total Dokter</p>
                            <p class="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                                {{ \App\Models\Dokter::where('id_admin', $admin->id_admin)->count() }}
                            </p>
                        </div>
                        <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 transition group-hover:bg-amber-100">
                            <i class="fas fa-user-md text-lg"></i>
                        </span>
                    </div>
                    <span class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-500">
                        Lihat dokter
                        <i class="fas fa-arrow-right text-xs transition group-hover:translate-x-0.5"></i>
                    </span>
                </a>

                <a href="{{ route('admin.layanan.index') }}"
                   class="group block bg-white p-6 transition hover:bg-slate-50">
                    <div class="flex items-center justify-between gap-4">
                        <div>
                            <p class="text-sm font-medium text-slate-500">Total Layanan</p>
                            <p class="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                                {{ \App\Models\Layanan::where('id_admin', $admin->id_admin)->count() }}
                            </p>
                        </div>
                        <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 transition group-hover:bg-rose-100">
                            <i class="fas fa-heartbeat text-lg"></i>
                        </span>
                    </div>
                    <span class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-500">
                        Lihat layanan
                        <i class="fas fa-arrow-right text-xs transition group-hover:translate-x-0.5"></i>
                    </span>
                </a>

            </div>
        </section>

        {{-- Profile Card --}}
        <section class="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div class="flex items-center justify-between gap-4 border-b border-slate-100 px-6 py-5">
                <div>
                    <p class="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Profil</p>
                    <h2 class="mt-1 text-xl font-semibold text-slate-900">Informasi Profil Admin</h2>
                </div>
                <a href="{{ route('admin.profile.edit') }}"
                   class="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                    <i class="fas fa-pencil text-xs"></i>
                    Edit Profil
                </a>
            </div>

            <div class="grid gap-4 p-6 sm:grid-cols-3">
                <div class="rounded-2xl bg-slate-50 px-4 py-3">
                    <p class="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">ID Admin</p>
                    <p class="mt-2 text-sm font-medium text-slate-900">{{ $admin->id_admin }}</p>
                </div>
                <div class="rounded-2xl bg-slate-50 px-4 py-3">
                    <p class="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Username</p>
                    <p class="mt-2 text-sm font-medium text-slate-900">{{ $admin->username }}</p>
                </div>
                <div class="rounded-2xl bg-slate-50 px-4 py-3">
                    <p class="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Nama Admin</p>
                    <p class="mt-2 text-sm font-medium text-slate-900">{{ $admin->nama_admin }}</p>
                </div>
            </div>
        </section>

    </div>

    {{-- Sidebar: Quick Access --}}
    <aside class="space-y-6">
        <section class="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div class="border-b border-slate-100 px-6 py-5">
                <p class="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Panduan Cepat</p>
                <h2 class="mt-1 text-xl font-semibold text-slate-900">Akses menu yang sering dipakai</h2>
            </div>

            <div class="space-y-1 p-3">
                <a href="{{ route('admin.banner.index') }}"
                   class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
                    <i class="fas fa-image w-5 text-center"></i>
                    <span>Kelola Banner</span>
                    <i class="fas fa-chevron-right ml-auto text-xs text-slate-400"></i>
                </a>
                <a href="{{ route('admin.artikel.index') }}"
                   class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
                    <i class="fas fa-newspaper w-5 text-center"></i>
                    <span>Kelola Artikel</span>
                    <i class="fas fa-chevron-right ml-auto text-xs text-slate-400"></i>
                </a>
                <a href="{{ route('admin.dokter.index') }}"
                   class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
                    <i class="fas fa-user-md w-5 text-center"></i>
                    <span>Kelola Dokter</span>
                    <i class="fas fa-chevron-right ml-auto text-xs text-slate-400"></i>
                </a>
                <a href="{{ route('admin.layanan.index') }}"
                   class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
                    <i class="fas fa-heartbeat w-5 text-center"></i>
                    <span>Kelola Layanan</span>
                    <i class="fas fa-chevron-right ml-auto text-xs text-slate-400"></i>
                </a>
                <a href="{{ route('admin.kontak.index') }}"
                   class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
                    <i class="fas fa-phone w-5 text-center"></i>
                    <span>Kelola Kontak</span>
                    <i class="fas fa-chevron-right ml-auto text-xs text-slate-400"></i>
                </a>
                <a href="{{ route('admin.jadwal.index') }}"
                   class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
                    <i class="fas fa-calendar w-5 text-center"></i>
                    <span>Kelola Jadwal Dokter</span>
                    <i class="fas fa-chevron-right ml-auto text-xs text-slate-400"></i>
                </a>
            </div>
        </section>
    </aside>
</div>
@endsection