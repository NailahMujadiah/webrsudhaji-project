@extends('admin.layouts.master')

@section('title', 'Banner')
@section('page-title', 'Manajemen Banner')

@section('content')
<div class="row">
    <div class="col-12">
        <a href="{{ route('admin.banner.create') }}" class="btn btn-primary mb-3">
            <i class="fas fa-plus"></i> Tambah Banner
        </a>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Daftar Banner</h3>
            </div>
            <div class="card-body table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Judul</th>
                            <th>Deskripsi</th>
                            <th>Gambar</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($banners as $banner)
                            <tr>
                                <td>{{ $loop->iteration }}</td>
                                <td>{{ $banner->judul }}</td>
                                <td>{{ Str::limit($banner->deskripsi, 50) }}</td>
                                <td>
                                    @if($banner->gambar_banner)
                                        <img src="{{ $banner->gambar_banner_url }}" alt="{{ $banner->judul }}" style="max-width: 50px; max-height: 50px; object-fit: cover;">
                                    @else
                                        <span class="badge badge-secondary">Tidak ada</span>
                                    @endif
                                </td>
                                <td>
                                    <a href="{{ route('admin.banner.edit', $banner->id_banner) }}" class="btn btn-sm btn-warning">
                                        <i class="fas fa-edit"></i>
                                    </a>
                                    <form method="POST" action="{{ route('admin.banner.destroy', $banner->id_banner) }}" style="display:inline;" onsubmit="return confirm('Yakin hapus banner ini?');">
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
                                <td colspan="5" class="text-center">Tidak ada data banner</td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
            <div class="card-footer clearfix">
                {{ $banners->links() }}
            </div>
        </div>
    </div>
</div>
@endsection
