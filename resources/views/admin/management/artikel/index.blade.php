@extends('admin.layouts.master')

@section('title', 'Artikel')
@section('page-title', 'Manajemen Artikel')

@section('content')
<div class="row">
    <div class="col-12">
        <a href="{{ route('admin.artikel.create') }}" class="btn btn-primary mb-3">
            <i class="fas fa-plus"></i> Tambah Artikel
        </a>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Daftar Artikel</h3>
            </div>
            <div class="card-body table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Judul</th>
                            <th>Media</th>
                            <th>Kategori</th>
                            <th>Tanggal</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($artikels as $artikel)
                            <tr>
                                <td>{{ $loop->iteration }}</td>
                                <td>{{ $artikel->judul }}</td>
                                <td>
                                    @if($artikel->gambar_artikel)
                                        <img src="{{ $artikel->gambar_artikel_url }}" alt="{{ $artikel->judul }}" style="width: 56px; height: 40px; object-fit: cover; border-radius: 6px;">
                                    @else
                                        <span class="badge badge-secondary">Tidak ada</span>
                                    @endif
                                </td>
                                <td><span class="badge badge-info">{{ $artikel->kategori }}</span></td>
                                <td>{{ \Carbon\Carbon::parse($artikel->tanggal)->format('d/m/Y') }}</td>
                                <td>
                                    <a href="{{ route('admin.artikel.edit', $artikel->id_artikel) }}" class="btn btn-sm btn-warning">
                                        <i class="fas fa-edit"></i>
                                    </a>
                                    <form method="POST" action="{{ route('admin.artikel.destroy', $artikel->id_artikel) }}" style="display:inline;" onsubmit="return confirm('Yakin hapus artikel ini?');">
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
                                <td colspan="6" class="text-center">Tidak ada data artikel</td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
            <div class="card-footer clearfix">
                {{ $artikels->links() }}
            </div>
        </div>
    </div>
</div>
@endsection
