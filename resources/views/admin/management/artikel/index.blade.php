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
                            <th>No</th>
                            <th>Judul</th>
                            <th>Slug</th>
                            <th>Thumbnail</th>
                            <th>ID Kategori</th>
                            <th>Status</th>
                            <th>Published At</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($artikels as $artikel)
                            <tr>
                                <td>{{ $loop->iteration }}</td>
                                <td>{{ $artikel->judul }}</td>
                                <td><code>{{ $artikel->slug }}</code></td>
                                <td>
                                    @if($artikel->thumbnail)
                                        <img src="{{ $artikel->thumbnail_url }}" alt="{{ $artikel->judul }}" style="width: 56px; height: 40px; object-fit: cover; border-radius: 6px;">
                                    @else
                                        <span class="badge badge-secondary">Tidak ada</span>
                                    @endif
                                </td>
                                <td>
                                    <span class="badge badge-info">{{ $artikel->id_kategori ?? '-' }}. {{ $artikel->kategori_label }}</span>
                                </td>
                                <td>
                                    @if($artikel->status === 'published')
                                        <span class="badge badge-success">Published</span>
                                    @else
                                        <span class="badge badge-secondary">Draft</span>
                                    @endif
                                </td>
                                <td>{{ optional($artikel->published_at)->format('d/m/Y H:i') ?? '-' }}</td>
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
                                <td colspan="8" class="text-center">Tidak ada data artikel</td>
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
