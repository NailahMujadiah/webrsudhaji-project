@extends('admin.layouts.master')

@section('title', 'Jadwal Dokter')
@section('page-title', 'Manajemen Jadwal Dokter')

@section('content')
<div class="space-y-6">

  {{-- Header --}}
  <div class="flex items-center justify-between">
    <div>
      <h1 class="text-xl font-semibold tracking-tight">Jadwal Dokter</h1>
      <p class="text-sm text-muted-foreground">Manajemen jadwal praktek dokter</p>
    </div>
    <a href="{{ route('admin.jadwal.create') }}"
       class="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
      </svg>
      Tambah Jadwal
    </a>
  </div>

  {{-- Card --}}
  <div class="rounded-xl border border-border bg-card shadow-sm">

    {{-- Card Header --}}
    <div class="flex items-center justify-between border-b border-border px-5 py-4">
      <div>
        <p class="text-sm font-medium">Daftar Jadwal</p>
        <p class="text-xs text-muted-foreground">{{ $jadwals->total() }} jadwal terdaftar</p>
      </div>
    </div>

    {{-- Table --}}
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="bg-muted/50 text-xs uppercase tracking-wide text-muted-foreground">
            <th class="px-4 py-3 text-left font-medium w-10">#</th>
            <th class="px-4 py-3 text-left font-medium">Foto</th>
            <th class="px-4 py-3 text-left font-medium">Dokter</th>
            <th class="px-4 py-3 text-left font-medium">Jadwal (Hari & Jam WITA)</th>
            <th class="px-4 py-3 text-left font-medium">Poli</th>
            <th class="px-4 py-3 text-left font-medium w-24">Aksi</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border">
          @php
            $grouped = $jadwals->groupBy(function($j) {
    return $j->dokter->id_dokter ?? 'unknown';
});
          @endphp

          @forelse($grouped as $idDokter => $items)
          @php
            $first = $items->first();
            $dokter = $first->dokter;
          @endphp
          <tr class="hover:bg-muted/30 transition-colors">
            <td class="px-4 py-3 text-muted-foreground align-top">{{ $loop->iteration }}</td>

            {{-- Foto --}}
            <td class="px-4 py-3 align-top">
              @if($dokter && $dokter->foto)
                <img src="{{ asset('storage/' . $dokter->foto) }}"
                     alt="{{ $dokter->nama_dokter }}"
                     class="h-9 w-9 rounded-full object-cover border border-border">
              @else
                <div class="h-9 w-9 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground border border-border">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
              @endif
            </td>

            {{-- Nama Dokter --}}
            <td class="px-4 py-3 font-medium align-top">
              {{ $dokter->nama_dokter ?? '-' }}
            </td>

            {{-- Jadwal digabung --}}
            <td class="px-4 py-3 align-top">
              <div class="flex flex-col gap-1">
                @foreach($items as $jadwal)
                  <div class="inline-flex items-center gap-2">
                    <span class="w-20 text-xs font-medium text-foreground">{{ $jadwal->hari }}</span>
                    <span class="font-mono text-xs text-muted-foreground">{{ $jadwal->jam_mulai }} – {{ $jadwal->jam_selesai }}</span>
                  </div>
                @endforeach
              </div>
            </td>

            {{-- Poli --}}
            <td class="px-4 py-3 align-top">
              <span class="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">
                {{ $first->poli }}
              </span>
            </td>

            {{-- Aksi: edit & hapus per jadwal --}}
            <td class="px-4 py-3 align-top">
              <div class="flex flex-col gap-1">
                @foreach($items as $jadwal)
                  <div class="flex items-center gap-1.5">
                    <a href="{{ route('admin.jadwal.edit', $jadwal->id_jadwal) }}"
                       class="inline-flex items-center rounded-md border border-amber-300 px-2 py-1 text-xs font-medium text-amber-700 hover:bg-amber-50 transition-colors"
                       title="Edit jadwal {{ $jadwal->hari }}">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                      </svg>
                    </a>
                    <form method="POST" action="{{ route('admin.jadwal.destroy', $jadwal->id_jadwal) }}"
                          style="display:inline;"
                          onsubmit="return confirm('Yakin hapus jadwal {{ $jadwal->hari }} ini?')">
                      @csrf
                      @method('DELETE')
                      <button type="submit"
                              class="inline-flex items-center rounded-md border border-red-200 bg-red-50 px-2 py-1 text-xs font-medium text-red-700 hover:bg-red-100 transition-colors"
                              title="Hapus jadwal {{ $jadwal->hari }}">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                        </svg>
                      </button>
                    </form>
                  </div>
                @endforeach
              </div>
            </td>
          </tr>
          @empty
          <tr>
            <td colspan="6" class="px-4 py-12 text-center text-sm text-muted-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto mb-2 h-8 w-8 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              Tidak ada data jadwal
            </td>
          </tr>
          @endforelse
        </tbody>
      </table>
    </div>

    {{-- Footer / Pagination --}}
    <div class="flex items-center justify-between border-t border-border px-5 py-3">
      <p class="text-xs text-muted-foreground">
        Menampilkan {{ $jadwals->firstItem() }}–{{ $jadwals->lastItem() }} dari {{ $jadwals->total() }} jadwal
      </p>
      {{ $jadwals->links() }}
    </div>

  </div>
</div>
@endsection