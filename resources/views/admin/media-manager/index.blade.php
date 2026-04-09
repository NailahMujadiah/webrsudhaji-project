@extends('admin.layouts.master')

@section('title', 'Media Manager')
@section('page-title', 'Media Manager')

@section('content')
<div class="row mb-3">
    <div class="col-md-3 col-6">
        <div class="small-box bg-primary">
            <div class="inner">
                <h3>{{ $stats['total'] }}</h3>
                <p>Total Media</p>
            </div>
            <div class="icon">
                <i class="fas fa-photo-video"></i>
            </div>
        </div>
    </div>

    <div class="col-md-3 col-6">
        <div class="small-box bg-info">
            <div class="inner">
                <h3>{{ $stats['admin_profiles'] }}</h3>
                <p>Profil Admin</p>
            </div>
            <div class="icon">
                <i class="fas fa-user-cog"></i>
            </div>
        </div>
    </div>

    <div class="col-md-3 col-6">
        <div class="small-box bg-success">
            <div class="inner">
                <h3>{{ $stats['artikel'] }}</h3>
                <p>Artikel</p>
            </div>
            <div class="icon">
                <i class="fas fa-newspaper"></i>
            </div>
        </div>
    </div>

    <div class="col-md-3 col-6">
        <div class="small-box bg-warning">
            <div class="inner">
                <h3>{{ $stats['dokter'] + $stats['banner'] }}</h3>
                <p>Dokter + Banner</p>
            </div>
            <div class="icon">
                <i class="fas fa-image"></i>
            </div>
        </div>
    </div>
</div>

<div class="card card-outline card-primary">
    <div class="card-header">
        <h3 class="card-title">Filter Media</h3>
    </div>
    <div class="card-body">
        <form method="GET" action="{{ route('admin.media-manager.index') }}" class="row">
            <div class="col-md-5 mb-2">
                <input
                    type="text"
                    name="q"
                    class="form-control"
                    placeholder="Cari nama file atau folder..."
                    value="{{ $query }}"
                >
            </div>
            <div class="col-md-4 mb-2">
                <select name="category" class="form-control">
                    <option value="">Semua kategori</option>
                    @foreach($directories as $directory => $label)
                        <option value="{{ $directory }}" {{ $selectedCategory === $directory ? 'selected' : '' }}>
                            {{ $label }}
                        </option>
                    @endforeach
                </select>
            </div>
            <div class="col-md-3 mb-2 d-flex">
                <button type="submit" class="btn btn-primary mr-2">Terapkan</button>
                <a href="{{ route('admin.media-manager.index') }}" class="btn btn-secondary">Reset</a>
            </div>
        </form>
    </div>
</div>

<div class="card">
    <div class="card-header d-flex justify-content-between align-items-center">
        <h3 class="card-title mb-0">Daftar Media</h3>
        <small class="text-muted">Semua file dari folder upload public storage</small>
    </div>
    <div class="card-body">
        @if(count($media))
            <div class="row">
                @foreach($media as $item)
                    <div class="col-md-4 col-lg-3 mb-4">
                        <div class="card h-100 shadow-sm">
                            <img src="{{ $item['url'] }}" class="card-img-top" alt="{{ $item['name'] }}" style="height: 180px; object-fit: cover;">
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-start mb-2">
                                    <span class="badge badge-info">{{ $item['category'] }}</span>
                                    <small class="text-muted">{{ $item['size'] }}</small>
                                </div>
                                <p class="card-text small mb-0">
                                    <strong>Upload:</strong> {{ $item['last_modified']->format('d M Y H:i') }}
                                </p>
                            </div>
                            <div class="card-footer bg-white border-top-0 pt-0">
                                <a href="{{ $item['url'] }}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary btn-sm btn-block">
                                    Buka File
                                </a>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        @else
            <div class="text-center py-5">
                <i class="fas fa-photo-video fa-3x text-muted mb-3"></i>
                <p class="mb-0 text-muted">Belum ada media yang diupload.</p>
            </div>
        @endif
    </div>
</div>
@endsection
