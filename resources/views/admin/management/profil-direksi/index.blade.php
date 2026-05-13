@extends('admin.layouts.master')

@section('title', 'Profil Direksi')
@section('page-title', 'Manajemen Struktur Direksi')

@section('content')
<div class="alert alert-info">
    Struktur jabatan bersifat tetap. Admin hanya dapat mengubah nama pejabat, foto profil, deskripsi singkat, dan status aktif/nonaktif.
</div>

<div class="card">
    <div class="card-header">
        <h3 class="card-title">Daftar Direksi</h3>
    </div>
    <div class="card-body table-responsive p-0">
        <table class="table table-hover mb-0">
            <thead>
                <tr>
                    <th>Jabatan</th>
                    <th>Nama</th>
                    <th>Status</th>
                    <th>Foto</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                @forelse($positions as $position)
                    @php($profile = $position->profile)
                    <tr>
                        <td>
                            <div class="font-weight-bold">{{ $position->name }}</div>
                        </td>
                        <td>
                            <div>{{ $profile?->nama_display ?? 'Belum diisi' }}</div>
                            @if(!empty($profile?->deskripsi_singkat))
                                <small class="text-muted d-block">{{ $profile->deskripsi_singkat }}</small>
                            @endif
                        </td>
                        <td>
                            @if($profile?->is_active)
                                <span class="badge badge-success">Aktif</span>
                            @else
                                <span class="badge badge-secondary">Nonaktif</span>
                            @endif
                        </td>
                        <td>
                            @if(!empty($profile?->foto_profil_url))
                                <img src="{{ $profile->foto_profil_url }}" alt="{{ $profile->nama_display }}" style="width: 52px; height: 52px; object-fit: cover; border-radius: 50%;">
                            @else
                                <span class="badge badge-light border">Tidak ada</span>
                            @endif
                        </td>
                        <td>
                            <a href="{{ route('admin.profil-direksi.edit', $position->id) }}" class="btn btn-sm btn-warning">
                                <i class="fas fa-edit"></i> Edit
                            </a>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="5" class="text-center">Belum ada struktur jabatan</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>
</div>
@endsection
