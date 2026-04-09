@extends('admin.layouts.master')

@section('title', 'Layanan')
@section('page-title', 'Manajemen Layanan')

@section('content')
<div class="row">
    <div class="col-12">
        <a href="{{ route('admin.layanan.create') }}" class="btn btn-primary mb-3">
            <i class="fas fa-plus"></i> Tambah Layanan
        </a>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Daftar Layanan</h3>
            </div>
            <div class="card-body table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nama Layanan</th>
                            <th>Kategori</th>
                            <th>Deskripsi</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($layanans as $layanan)
                            <tr>
                                <td>{{ $loop->iteration }}</td>
                                <td>{{ $layanan->nama_layanan }}</td>
                                <td><span class="badge badge-info">{{ $layanan->kategori }}</span></td>
                                <td>{{ Str::limit($layanan->deskripsi, 50) }}</td>
                                <td>
                                    <a href="{{ route('admin.layanan.edit', $layanan->id_layanan) }}" class="btn btn-sm btn-warning">
                                        <i class="fas fa-edit"></i>
                                    </a>
                                    <form method="POST" action="{{ route('admin.layanan.destroy', $layanan->id_layanan) }}" style="display:inline;" onsubmit="return confirm('Yakin hapus layanan ini?');">
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
                                <td colspan="5" class="text-center">Tidak ada data layanan</td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
            <div class="card-footer clearfix">
                {{ $layanans->links() }}
            </div>
        </div>
    </div>
</div>
@endsection
