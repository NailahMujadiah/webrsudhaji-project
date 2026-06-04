@extends('admin.layouts.master')

@section('title', 'Dokter')
@section('page-title', 'Manajemen Dokter')

@section('content')
<div class="space-y-6">

    {{-- Header --}}
    <div class="flex items-center justify-between">
        <div>
            <h1 class="text-2xl font-semibold tracking-tight text-foreground">Daftar Dokter</h1>
            <p class="text-sm text-muted-foreground mt-1">Kelola data dokter yang terdaftar di sistem</p>
        </div>
        <a href="{{ route('admin.dokter.create') }}"
           class="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 5v14M5 12h14"/>
            </svg>
            Tambah Dokter
        </a>
    </div>

    {{-- Card --}}
    <div class="rounded-xl border border-border bg-card text-card-foreground shadow-sm">

        {{-- Card Header --}}
        <div class="flex items-center justify-between px-6 py-4 border-b border-border">
            <h3 class="text-base font-medium">Semua Dokter</h3>
            <span class="text-sm text-muted-foreground">
                {{ $dokters->total() }} total dokter
            </span>
        </div>

        {{-- Table --}}
        <div class="overflow-x-auto">
            <table class="w-full text-sm">
                <thead>
                    <tr class="border-b border-border bg-muted/50">
                        <th class="h-11 px-6 text-left font-medium text-muted-foreground w-12">No</th>
                        <th class="h-11 px-6 text-left font-medium text-muted-foreground">Dokter</th>
                        <th class="h-11 px-6 text-left font-medium text-muted-foreground">Spesialis</th>
                        <th class="h-11 px-6 text-left font-medium text-muted-foreground w-20">Foto</th>
                        <th class="h-11 px-6 text-right font-medium text-muted-foreground w-28">Aksi</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-border">
                    @forelse($dokters as $dokter)
                        <tr class="hover:bg-muted/50 transition-colors">

                            {{-- No --}}
                            <td class="px-6 py-4 text-muted-foreground">
                                {{ ($dokters->currentPage() - 1) * $dokters->perPage() + $loop->iteration }}
                            </td>

                            {{-- Nama Dokter --}}
                            <td class="px-6 py-4">
                                @php
                                    $fotoPath = null;
                                    if ($dokter->foto_dokter) {
                                        $fotoPath = str_starts_with($dokter->foto_dokter, '/') || str_starts_with($dokter->foto_dokter, 'http')
                                            ? $dokter->foto_dokter
                                            : asset('storage/' . $dokter->foto_dokter);
                                    }
                                @endphp
                                <span class="font-medium text-foreground">{{ $dokter->nama_dokter }}</span>
                            </td>

                            {{-- Spesialis --}}
                            <td class="px-6 py-4">
                                <span class="inline-flex items-center rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                                    {{ $dokter->spesialis }}
                                </span>
                            </td>

                            {{-- Foto (kolom terpisah, opsional hidden) --}}
                            <td class="px-6 py-4">
                                @if($fotoPath)
                                    <img src="{{ $fotoPath }}"
                                         alt="{{ $dokter->nama_dokter }}"
                                         class="h-10 w-10 rounded-md object-cover ring-1 ring-border">
                                @else
                                    <span class="text-xs text-muted-foreground italic">—</span>
                                @endif
                            </td>

                            {{-- Aksi --}}
                            <td class="px-6 py-4">
                                <div class="flex items-center justify-end gap-1">

                                    {{-- Edit --}}
                                    <a href="{{ route('admin.dokter.edit', $dokter->id_dokter) }}"
                                       title="Edit"
                                       class="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background hover:bg-muted text-foreground transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24"
                                             fill="none" stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                                        </svg>
                                    </a>

                                    {{-- Hapus --}}
                                    <form method="POST"
                                          action="{{ route('admin.dokter.destroy', $dokter->id_dokter) }}"
                                          style="display:inline;"
                                          onsubmit="return confirm('Yakin ingin menghapus dokter ini?');">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit"
                                                title="Hapus"
                                                class="inline-flex h-8 w-8 items-center justify-center rounded-md border border-destructive/30 bg-background hover:bg-destructive hover:text-destructive-foreground text-destructive transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24"
                                                 fill="none" stroke="currentColor" stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round">
                                                <polyline points="3 6 5 6 21 6"/>
                                                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                                                <path d="M10 11v6M14 11v6"/>
                                                <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="5" class="px-6 py-16 text-center">
                                <div class="flex flex-col items-center gap-3">
                                    <div class="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-muted-foreground"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                             stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                            <circle cx="12" cy="7" r="4"/>
                                        </svg>
                                    </div>
                                    <p class="text-sm text-muted-foreground">Belum ada data dokter</p>
                                    <a href="{{ route('admin.dokter.create') }}"
                                       class="text-sm text-primary hover:underline underline-offset-4">
                                        Tambah dokter pertama
                                    </a>
                                </div>
                            </td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>

        {{-- Pagination --}}
        @if($dokters->hasPages())
            <div class="flex items-center justify-between px-6 py-4 border-t border-border">
                <p class="text-sm text-muted-foreground">
                    Menampilkan {{ $dokters->firstItem() }}–{{ $dokters->lastItem() }}
                    dari {{ $dokters->total() }} dokter
                </p>
                <div class="[&_.pagination]:flex [&_.pagination]:items-center [&_.pagination]:gap-1
                            [&_.page-link]:inline-flex [&_.page-link]:h-8 [&_.page-link]:min-w-8
                            [&_.page-link]:items-center [&_.page-link]:justify-center [&_.page-link]:rounded-md
                            [&_.page-link]:border [&_.page-link]:border-border [&_.page-link]:bg-background
                            [&_.page-link]:px-3 [&_.page-link]:text-sm [&_.page-link]:text-foreground
                            [&_.page-link]:transition-colors [&_.page-link:hover]:bg-muted
                            [&_.active_.page-link]:bg-primary [&_.active_.page-link]:text-primary-foreground
                            [&_.active_.page-link]:border-primary
                            [&_.disabled_.page-link]:opacity-50 [&_.disabled_.page-link]:pointer-events-none">
                    {{ $dokters->links() }}
                </div>
            </div>
        @endif

    </div>{{-- end card --}}

</div>
@endsection