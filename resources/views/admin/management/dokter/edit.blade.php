@extends('admin.layouts.master')

@section('title', 'Edit Dokter')
@section('page-title', 'Edit Dokter')

@section('content')
<div class="row">
    <div class="col-md-8">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Form Edit Dokter</h3>
            </div>
            <form action="{{ route('admin.dokter.update', $dokter->id_dokter) }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <div class="card-body">
                    <div class="form-group">
                        <label for="nama_dokter">Nama Dokter <span class="text-danger">*</span></label>
                        <input type="text" class="form-control @error('nama_dokter') is-invalid @enderror" id="nama_dokter" name="nama_dokter" value="{{ old('nama_dokter', $dokter->nama_dokter) }}" required>
                        @error('nama_dokter')
                            <span class="invalid-feedback">{{ $message }}</span>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label for="spesialis">Spesialis <span class="text-danger">*</span></label>
                        <input type="text" class="form-control @error('spesialis') is-invalid @enderror" id="spesialis" name="spesialis" value="{{ old('spesialis', $dokter->spesialis) }}" required>
                        @error('spesialis')
                            <span class="invalid-feedback">{{ $message }}</span>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label>Foto Dokter Saat Ini</label>
                        <div class="mb-2">
                            @if($dokter->foto_dokter)
                                <img id="foto-dokter-preview" src="{{ $dokter->foto_dokter_url }}" alt="{{ $dokter->nama_dokter }}" class="img-thumbnail" style="max-width: 160px; max-height: 160px; object-fit: cover; border-radius: 12px;">
                            @else
                                <img id="foto-dokter-preview" src="" alt="{{ $dokter->nama_dokter }}" class="img-thumbnail" style="max-width: 160px; max-height: 160px; object-fit: cover; border-radius: 12px; display: none;">
                            @endif
                        </div>

                        <label for="foto_dokter">Ganti Foto Dokter</label>
                        <input type="file" class="form-control-file @error('foto_dokter') is-invalid @enderror" id="foto_dokter" name="foto_dokter" accept=".jpg,.jpeg,.png,.webp">
                        <small class="form-text text-muted">Kosongkan jika tidak ingin mengganti foto. Format JPG, PNG, atau WEBP. Maksimal 2MB.</small>
                        @error('foto_dokter')
                            <span class="invalid-feedback d-block">{{ $message }}</span>
                        @enderror
                    </div>
                </div>
                <div class="card-footer">
                    <a href="{{ route('admin.dokter.index') }}" class="btn btn-secondary">Batal</a>
                    <button type="submit" class="btn btn-primary">Update Dokter</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script>
    (function () {
        const input = document.getElementById('foto_dokter');
        const preview = document.getElementById('foto-dokter-preview');

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
