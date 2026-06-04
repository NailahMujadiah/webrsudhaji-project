@extends('admin.layouts.master')

@section('title', 'Artikel')
@section('page-title', 'Manajemen Artikel')

@section('content')
<div class="space-y-4">

    {{-- Card --}}
    <section class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        {{-- Card Header --}}
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-6 py-4">
            <div>
                <p class="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Data</p>
                <h2 class="mt-0.5 text-xl font-semibold text-slate-900">Artikel</h2>
            </div>
            <div class="flex items-center gap-3">
                <div class="relative">
                    <i class="fas fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400"></i>
                    <input
                        type="text"
                        placeholder="Cari artikel..."
                        class="h-9 w-52 rounded-2xl border border-slate-200 bg-slate-50 pl-9 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-100"
                        oninput="filterTable(this.value)"
                    >
                </div>
                    <a href="{{ route('admin.artikel.create') }}"
                       class="inline-flex h-9 items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-white hover:text-slate-900">
                        <i class="fas fa-plus text-xs text-slate-500"></i>
                    Tambah Artikel
                </a>
            </div>
        </div>

        {{-- Table --}}
        <div class="overflow-x-auto">
            <table class="w-full text-sm table-auto divide-y divide-slate-100" id="artikel-table">
                <thead class="bg-slate-50">
                    <tr class="border-b border-slate-100 text-left">
                        <th class="px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 w-10">No</th>
                        <th class="px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Judul</th>
                        <th class="w-40 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Thumbnail</th>
                        <th class="px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Kategori</th>
                        <th class="px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Status</th>
                        <th class="px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Published At</th>
                        <th class="px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 text-right">Aksi</th>
                    </tr>
                </thead>
                <tbody id="artikel-tbody">
                    @forelse($artikels as $artikel)
                        <tr class="border-b border-slate-200 odd:bg-white even:bg-slate-50 transition hover:bg-slate-50/70">

                            {{-- No --}}
                            <td class="px-6 py-4 text-slate-400 text-center">{{ $loop->iteration }}</td>

                            {{-- Judul + Slug --}}
                            <td class="px-6 py-4 align-middle">
    <div class="max-w-[350px]">
        <p class="break-words font-medium text-slate-900">
            {{ $artikel->judul }}
        </p>
        <p class="mt-0.5 text-xs text-slate-400 break-all">
            {{ $artikel->slug }}
        </p>
    </div>
</td>

                            {{-- Thumbnail --}}
                            <td class="w-40 p-0">
                            @if($artikel->thumbnail)
                                <img
                                    src="{{ $artikel->thumbnail_url }}"
                                    alt="{{ $artikel->judul }}"
                                    class="block w-full h-24 object-cover rounded-lg"
                                >
                            @else
                                <span class="flex items-center justify-center w-full h-full bg-slate-50">
                                    <i class="fas fa-image text-slate-300"></i>
                                </span>
                            @endif
                        </td>

                            {{-- Kategori --}}
                            <td class="px-6 py-4">
                                <span class="inline-flex items-center rounded-full bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-700">
                                    {{ $artikel->id_kategori ?? '-' }}. {{ $artikel->kategori_label }}
                                </span>
                            </td>

                            {{-- Status --}}
                            <td class="px-6 py-4">
                                @if($artikel->status === 'published')
                                    <span class="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                                        <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                                        Published
                                    </span>
                                @else
                                    <span class="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500">
                                        <span class="h-1.5 w-1.5 rounded-full bg-slate-300"></span>
                                        Draft
                                    </span>
                                @endif
                            </td>

                            {{-- Published At --}}
                            <td class="px-6 py-4 text-xs text-slate-400 whitespace-nowrap">
                                {{ optional($artikel->published_at)->format('d/m/Y H:i') ?? '—' }}
                            </td>

                            {{-- Aksi --}}
                            <td class="px-6 py-4">
                                <div class="flex items-center justify-end gap-1.5">
                                    <a href="{{ route('admin.artikel.edit', $artikel->id_artikel) }}"
                                       class="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-amber-200 hover:bg-amber-50 hover:text-amber-600"
                                       title="Edit">
                                        <i class="fas fa-edit text-xs"></i>
                                    </a>
                                    <form method="POST" action="{{ route('admin.artikel.destroy', $artikel->id_artikel) }}" class="inline" onsubmit="return confirm('Yakin hapus artikel ini?');">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit"
                                            class="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600"
                                            title="Hapus">
                                            <i class="fas fa-trash text-xs"></i>
                                        </button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    @empty
                        <tr id="empty-row">
                            <td colspan="7" class="px-6 py-16 text-center">
                                <div class="flex flex-col items-center gap-3 ">
                                    <span class="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-300">
                                        <i class="fas fa-newspaper text-2xl"></i>
                                    </span>
                                    <p class="text-sm text-slate-500">Belum ada artikel yang dibuat.</p>
                                    <a href="{{ route('admin.artikel.create') }}"
                                       class="inline-flex h-9 items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-white hover:text-slate-900">
                                        <i class="fas fa-plus text-xs text-slate-500"></i>
                                        Tambah Sekarang
                                    </a>
                                </div>
                            </td>
                        </tr>
                    @endforelse
                </tbody>
            </table>

            {{-- No result saat search --}}
            <div id="no-result" class="hidden px-5 py-16 text-center">
                <p class="text-sm text-slate-400">Tidak ada artikel yang cocok.</p>
            </div>
        </div>

        {{-- Pagination --}}
        @if($artikels->hasPages())
            <div class="flex items-center justify-between border-t border-slate-100 px-6 py-3">
                <p class="text-xs text-slate-400">
                    Menampilkan {{ $artikels->firstItem() }}–{{ $artikels->lastItem() }} dari {{ $artikels->total() }} artikel
                </p>
                <div>
                    {{ $artikels->links() }}
                </div>
            </div>
        @endif

    </section>
</div>
@endsection

@section('scripts')
<script>
    function filterTable(q) {
        const rows = document.querySelectorAll('#artikel-tbody tr');
        const noResult = document.getElementById('no-result');
        const keyword = q.toLowerCase().trim();
        let visible = 0;

        rows.forEach(function (row) {
            const text = row.textContent.toLowerCase();
            const match = !keyword || text.includes(keyword);
            row.style.display = match ? '' : 'none';
            if (match) visible++;
        });

        noResult.classList.toggle('hidden', visible > 0 || !keyword);
    }
</script>
@endsection