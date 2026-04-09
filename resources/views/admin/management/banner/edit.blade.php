@extends('admin.layouts.master')

@section('title', 'Edit Banner')
@section('page-title', 'Edit Banner')

@section('content')
<div class="row">
    <div class="col-md-8">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Form Edit Banner</h3>
            </div>
            <form action="{{ route('admin.banner.update', $banner->id_banner) }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <div class="card-body">
                    <div class="form-group">
                        <label for="judul">Judul <span class="text-danger">*</span></label>
                        <input type="text" class="form-control @error('judul') is-invalid @enderror" id="judul" name="judul" value="{{ old('judul', $banner->judul) }}" required>
                        @error('judul')
                            <span class="invalid-feedback">{{ $message }}</span>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label for="deskripsi">Deskripsi</label>
                        <textarea class="form-control @error('deskripsi') is-invalid @enderror" id="deskripsi" name="deskripsi" rows="4">{{ old('deskripsi', $banner->deskripsi) }}</textarea>
                        @error('deskripsi')
                            <span class="invalid-feedback">{{ $message }}</span>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label>Gambar Banner Saat Ini</label>
                        <div class="mb-2">
                            @if($banner->gambar_banner)
                                <img id="banner-preview" src="{{ $banner->gambar_banner_url }}" alt="{{ $banner->judul }}" class="img-thumbnail" style="max-width: 260px; max-height: 160px; object-fit: cover; border-radius: 12px;">
                            @else
                                <img id="banner-preview" src="" alt="{{ $banner->judul }}" class="img-thumbnail" style="max-width: 260px; max-height: 160px; object-fit: cover; border-radius: 12px; display: none;">
                            @endif
                        </div>

                        <label for="gambar_banner">Ganti Gambar Banner</label>
                        <input type="file" class="form-control-file @error('gambar_banner') is-invalid @enderror" id="gambar_banner" name="gambar_banner" accept=".jpg,.jpeg,.png,.webp">
                        <small class="form-text text-muted">Kosongkan jika tidak ingin mengganti gambar. Format JPG, PNG, atau WEBP. Maksimal 2MB.</small>
                        @error('gambar_banner')
                            <span class="invalid-feedback d-block">{{ $message }}</span>
                        @enderror
                    </div>
                </div>
                <div class="card-footer">
                    <a href="{{ route('admin.banner.index') }}" class="btn btn-secondary">Batal</a>
                    <button type="submit" class="btn btn-primary">Update Banner</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script>
    (function () {
        const input = document.getElementById('gambar_banner');
        const preview = document.getElementById('banner-preview');

        if (!input || !preview) {
            return;
        }

        input.addEventListener('change', function (event) {
            const file = event.target.files && event.target.files[0];

            if (!file) {
                return;
            }

            const objectUrl = URL.createObjectURL(file);
            preview.src = objectUrl;
            preview.style.display = 'inline-block';

            preview.onload = function () {
                URL.revokeObjectURL(objectUrl);
            };
        });
    })();
</script>
@endsection
