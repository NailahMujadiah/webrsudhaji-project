@extends('admin.layouts.master')

@section('title', 'Dokter')
@section('page-title', 'Manajemen Dokter')

@section('content')
<div class="row">
    <div class="col-12">
        <a href="{{ route('admin.dokter.create') }}" class="btn btn-primary mb-3">
            <i class="fas fa-plus"></i> Tambah Dokter
        </a>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Daftar Dokter</h3>
            </div>
            <div class="card-body table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama Dokter</th>
                            <th>Spesialis</th>
                            <th>Foto</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($dokters as $dokter)
                            <tr>
                                <td>{{ $loop->iteration }}</td>
                                <td>{{ $dokter->nama_dokter }}</td>
                                <td><span class="badge badge-success">{{ $dokter->spesialis }}</span></td>
                                <td>
                                    @if($dokter->foto_dokter)
                                        <img src="{{ $dokter->foto_dokter_url }}" alt="{{ $dokter->nama_dokter }}" style="max-width: 50px; max-height: 50px; border-radius: 50%; object-fit: cover;">
                                    @else
                                        <span class="badge badge-secondary">Tidak ada</span>
                                    @endif
                                </td>
                                <td>
                                    <a href="{{ route('admin.dokter.edit', $dokter->id_dokter) }}" class="btn btn-sm btn-warning">
                                        <i class="fas fa-edit"></i>
                                    </a>
                                    <form method="POST" action="{{ route('admin.dokter.destroy', $dokter->id_dokter) }}" style="display:inline;" onsubmit="return confirm('Yakin hapus dokter ini?');">
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
                                <td colspan="5" class="text-center">Tidak ada data dokter</td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
            <div class="card-footer clearfix">
                {{ $dokters->links() }}
            </div>
        </div>
    </div>
</div>
@endsection
