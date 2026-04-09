@extends('admin.layouts.master')

@section('title', 'Edit Artikel')
@section('page-title', 'Edit Artikel')

@section('content')
<div class="row">
    <div class="col-md-8">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Form Edit Artikel</h3>
            </div>
            <form action="{{ route('admin.artikel.update', $artikel->id_artikel) }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <div class="card-body">
                    <div class="form-group">
                        <label for="judul">Judul <span class="text-danger">*</span></label>
                        <input type="text" class="form-control @error('judul') is-invalid @enderror" id="judul" name="judul" value="{{ old('judul', $artikel->judul) }}" required>
                        @error('judul')
                            <span class="invalid-feedback">{{ $message }}</span>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label for="isi_artikel">Isi Artikel <span class="text-danger">*</span></label>
                        <textarea class="form-control @error('isi_artikel') is-invalid @enderror" id="isi_artikel" name="isi_artikel" rows="6" required>{{ old('isi_artikel', $artikel->isi_artikel) }}</textarea>
                        @error('isi_artikel')
                            <span class="invalid-feedback">{{ $message }}</span>
                        @enderror
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="kategori">Kategori <span class="text-danger">*</span></label>
                            <input type="text" class="form-control @error('kategori') is-invalid @enderror" id="kategori" name="kategori" value="{{ old('kategori', $artikel->kategori) }}" required>
                            @error('kategori')
                                <span class="invalid-feedback">{{ $message }}</span>
                            @enderror
                        </div>

                        <div class="form-group col-md-6">
                            <label for="tanggal">Tanggal <span class="text-danger">*</span></label>
                            <input type="date" class="form-control @error('tanggal') is-invalid @enderror" id="tanggal" name="tanggal" value="{{ old('tanggal', \Carbon\Carbon::parse($artikel->tanggal)->format('Y-m-d')) }}" required>
                            @error('tanggal')
                                <span class="invalid-feedback">{{ $message }}</span>
                            @enderror
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Media Gambar Saat Ini</label>
                        <div class="mb-2">
                            @if($artikel->gambar_artikel)
                                <img id="gambar-preview" src="{{ $artikel->gambar_artikel_url }}" alt="Gambar Artikel" class="img-thumbnail" style="max-width: 220px; max-height: 160px; object-fit: cover;">
                            @else
                                <img id="gambar-preview" src="" alt="Gambar Artikel" class="img-thumbnail" style="max-width: 220px; max-height: 160px; object-fit: cover; display: none;">
                            @endif
                        </div>
                        <label for="gambar_artikel">Ganti Media Gambar</label>
                        <input type="file" class="form-control-file @error('gambar_artikel') is-invalid @enderror" id="gambar_artikel" name="gambar_artikel" accept=".jpg,.jpeg,.png,.webp">
                        <small class="form-text text-muted">Kosongkan jika tidak ingin mengganti gambar. Format JPG, PNG, atau WEBP. Maksimal 2MB.</small>
                        @error('gambar_artikel')
                            <span class="invalid-feedback d-block">{{ $message }}</span>
                        @enderror
                    </div>
                </div>
                <div class="card-footer">
                    <a href="{{ route('admin.artikel.index') }}" class="btn btn-secondary">Batal</a>
                    <button type="submit" class="btn btn-primary">Update Artikel</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script>
    (function () {
        const input = document.getElementById('gambar_artikel');
        const preview = document.getElementById('gambar-preview');

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
