@extends('admin.layouts.master')

@section('title', 'Jadwal Dokter')
@section('page-title', 'Manajemen Jadwal Dokter')

@section('content')
<div class="row">
    <div class="col-12">
        <a href="{{ route('admin.jadwal.create') }}" class="btn btn-primary mb-3">
            <i class="fas fa-plus"></i> Tambah Jadwal
        </a>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Daftar Jadwal Dokter</h3>
            </div>
            <div class="card-body table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Dokter</th>
                            <th>Hari</th>
                            <th>Jam (WITA)</th>
                            <th>Poli</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($jadwals as $jadwal)
                            <tr>
                                <td>{{ $loop->iteration }}</td>
                                <td>{{ $jadwal->dokter->nama_dokter ?? '-' }}</td>
                                <td>{{ $jadwal->hari }}</td>
                                <td>{{ $jadwal->jam_mulai }} - {{ $jadwal->jam_selesai }}</td>
                                <td><span class="badge badge-success">{{ $jadwal->poli }}</span></td>
                                <td>
                                    <a href="{{ route('admin.jadwal.edit', $jadwal->id_jadwal) }}" class="btn btn-sm btn-warning">
                                        <i class="fas fa-edit"></i>
                                    </a>
                                    <form method="POST" action="{{ route('admin.jadwal.destroy', $jadwal->id_jadwal) }}" style="display:inline;" onsubmit="return confirm('Yakin hapus jadwal ini?');">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-sm btn-danger">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="6" class="text-center">Tidak ada data jadwal</td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
            <div class="card-footer clearfix">
                {{ $jadwals->links() }}
            </div>
        </div>
    </div>
</div>
@endsection
