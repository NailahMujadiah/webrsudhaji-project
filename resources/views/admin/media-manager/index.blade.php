@extends('admin.layouts.master')

@section('title', 'Media Manager')
@section('page-title', 'Media Manager')

@section('content')
<div class="space-y-6">

    {{-- Stats --}}
    <div class="grid gap-px bg-slate-100 overflow-hidden rounded-2xl border border-slate-200 shadow-sm sm:grid-cols-2 xl:grid-cols-4">

        <div class="group bg-white p-6">
            <div class="flex items-center justify-between gap-4">
                <div>
                    <p class="text-sm font-medium text-slate-500">Total Media</p>
                    <p class="mt-2 text-3xl font-semibold tracking-tight text-slate-900">{{ $stats['total'] }}</p>
                </div>
                <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                    <i class="fas fa-photo-video text-lg"></i>
                </span>
            </div>
        </div>

        <div class="group bg-white p-6">
            <div class="flex items-center justify-between gap-4">
                <div>
                    <p class="text-sm font-medium text-slate-500">Profil Admin</p>
                    <p class="mt-2 text-3xl font-semibold tracking-tight text-slate-900">{{ $stats['admin_profiles'] }}</p>
                </div>
                <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                    <i class="fas fa-user-cog text-lg"></i>
                </span>
            </div>
        </div>

        <div class="group bg-white p-6">
            <div class="flex items-center justify-between gap-4">
                <div>
                    <p class="text-sm font-medium text-slate-500">Artikel</p>
                    <p class="mt-2 text-3xl font-semibold tracking-tight text-slate-900">{{ $stats['artikel'] }}</p>
                </div>
                <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <i class="fas fa-newspaper text-lg"></i>
                </span>
            </div>
        </div>

        <div class="group bg-white p-6">
            <div class="flex items-center justify-between gap-4">
                <div>
                    <p class="text-sm font-medium text-slate-500">Dokter + Banner</p>
                    <p class="mt-2 text-3xl font-semibold tracking-tight text-slate-900">{{ $stats['dokter'] + $stats['banner'] }}</p>
                </div>
                <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                    <i class="fas fa-image text-lg"></i>
                </span>
            </div>
        </div>

    </div>

    {{-- Filter --}}
    <section class="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div class="border-b border-slate-100 px-6 py-5">
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Filter</p>
            <h2 class="mt-1 text-xl font-semibold text-slate-900">Filter Media</h2>
        </div>
        <div class="px-6 py-5">
            <form method="GET" action="{{ route('admin.media-manager.index') }}" class="flex flex-wrap gap-3">
                <input
                    type="text"
                    name="q"
                    class="h-10 flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-100 min-w-[180px]"
                    placeholder="Cari nama file atau folder..."
                    value="{{ $query }}"
                >
                <select
                    name="category"
                    class="h-10 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 focus:border-slate-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-100"
                >
                    <option value="">Semua kategori</option>
                    @foreach($directories as $directory => $label)
                        <option value="{{ $directory }}" {{ $selectedCategory === $directory ? 'selected' : '' }}>
                            {{ $label }}
                        </option>
                    @endforeach
                </select>
                <div class="flex gap-2">
                    <button type="submit"
                        class="inline-flex h-10 items-center gap-2 rounded-2xl bg-slate-900 px-5 text-sm font-medium text-white transition hover:bg-slate-700">
                        <i class="fas fa-filter text-xs"></i>
                        Terapkan
                    </button>
                    <a href="{{ route('admin.media-manager.index') }}"
                        class="inline-flex h-10 items-center gap-2 rounded-2xl border border-slate-200 px-5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                        <i class="fas fa-rotate-left text-xs"></i>
                        Reset
                    </a>
                </div>
            </form>
        </div>
    </section>

    {{-- Media Grid --}}
    <section class="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div class="flex items-center justify-between border-b border-slate-100 px-6 py-5">
            <div>
                <p class="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Galeri</p>
                <h2 class="mt-1 text-xl font-semibold text-slate-900">Daftar Media</h2>
            </div>
            <span class="text-xs text-slate-400">Semua file dari folder upload public storage</span>
        </div>

        <div class="p-6">
            @if(count($media))
                <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                    @foreach($media as $item)
                        <div class="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-slate-300 hover:shadow-md">
                            <div class="relative overflow-hidden bg-slate-100">
                                <img
                                    src="{{ $item['url'] }}"
                                    alt="{{ $item['name'] }}"
                                    class="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
                                >
                            </div>
                            <div class="p-4">
                                <div class="flex items-center justify-between gap-2">
                                    <span class="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                                        {{ $item['category'] }}
                                    </span>
                                    <span class="text-xs text-slate-400">{{ $item['size'] }}</span>
                                </div>
                                <p class="mt-2 text-xs text-slate-500">
                                    <span class="font-medium text-slate-700">Upload:</span>
                                    {{ $item['last_modified']->format('d M Y H:i') }}
                                </p>
                            </div>
                            <div class="border-t border-slate-100 px-4 py-3">
                                <a href="{{ $item['url'] }}"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   class="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                                    <i class="fas fa-arrow-up-right-from-square text-xs"></i>
                                    Buka File
                                </a>
                            </div>
                        </div>
                    @endforeach
                </div>
            @else
                <div class="flex flex-col items-center justify-center py-20 text-center">
                    <span class="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                        <i class="fas fa-photo-video text-2xl"></i>
                    </span>
                    <p class="mt-4 text-sm font-medium text-slate-500">Belum ada media yang diupload.</p>
                </div>
            @endif
        </div>
    </section>

</div>
@endsection