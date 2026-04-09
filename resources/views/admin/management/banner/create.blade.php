@extends('admin.layouts.master')

@section('title', 'Tambah Banner')
@section('page-title', 'Tambah Banner Baru')

@section('content')
<div class="row">
    <div class="col-md-8">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Form Tambah Banner</h3>
            </div>
            <form action="{{ route('admin.banner.store') }}" method="POST" enctype="multipart/form-data">
                @csrf
                <div class="card-body">
                    <div class="form-group">
                        <label for="judul">Judul <span class="text-danger">*</span></label>
                        <input type="text" class="form-control @error('judul') is-invalid @enderror" id="judul" name="judul" value="{{ old('judul') }}" required>
                        @error('judul')
                            <span class="invalid-feedback">{{ $message }}</span>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label for="deskripsi">Deskripsi</label>
                        <textarea class="form-control @error('deskripsi') is-invalid @enderror" id="deskripsi" name="deskripsi" rows="4">{{ old('deskripsi') }}</textarea>
                        @error('deskripsi')
                            <span class="invalid-feedback">{{ $message }}</span>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label for="gambar_banner">Upload Gambar Banner</label>
                        <input type="file" class="form-control-file @error('gambar_banner') is-invalid @enderror" id="gambar_banner" name="gambar_banner" accept=".jpg,.jpeg,.png,.webp">
                        <small class="form-text text-muted">Format JPG, PNG, atau WEBP. Maksimal 2MB.</small>
                        @error('gambar_banner')
                            <span class="invalid-feedback d-block">{{ $message }}</span>
                        @enderror
                    </div>
                </div>
                <div class="card-footer">
                    <a href="{{ route('admin.banner.index') }}" class="btn btn-secondary">Batal</a>
                    <button type="submit" class="btn btn-primary">Simpan Banner</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
