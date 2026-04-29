@extends('admin.layouts.master')

@section('title', 'Edit Profil Pejabat')
@section('page-title', 'Edit Profil Pejabat')

@section('content')
<div class="row">
    <div class="col-md-8">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Form Edit Profil Pejabat</h3>
            </div>
            <form action="{{ route('admin.profil-direksi.update', $position->id) }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <div class="card-body">
                    <div class="form-group">
                        <label for="position_name">Jabatan</label>
                        <input type="text" class="form-control" id="position_name" value="{{ $position->name }}" disabled>
                        <small class="form-text text-muted">Hierarki jabatan dikunci dan tidak dapat diubah dari admin.</small>
                    </div>

                    <div class="form-group">
                        <label for="nama_pejabat">Nama Pejabat <span class="text-danger">*</span></label>
                        <input type="text" class="form-control @error('nama_pejabat') is-invalid @enderror" id="nama_pejabat" name="nama_pejabat" value="{{ old('nama_pejabat', $profile->nama_pejabat) }}" required>
                        @error('nama_pejabat')
                            <span class="invalid-feedback">{{ $message }}</span>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label for="deskripsi_singkat">Deskripsi Singkat</label>
                        <textarea class="form-control @error('deskripsi_singkat') is-invalid @enderror" id="deskripsi_singkat" name="deskripsi_singkat" rows="4">{{ old('deskripsi_singkat', $profile->deskripsi_singkat) }}</textarea>
                        @error('deskripsi_singkat')
                            <span class="invalid-feedback">{{ $message }}</span>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label for="is_active">Status</label>
                        <select class="form-control @error('is_active') is-invalid @enderror" id="is_active" name="is_active" required>
                            <option value="1" {{ old('is_active', $profile->is_active ? 1 : 0) ? 'selected' : '' }}>Aktif</option>
                            <option value="0" {{ old('is_active', $profile->is_active ? 1 : 0) ? '' : 'selected' }}>Nonaktif</option>
                        </select>
                        @error('is_active')
                            <span class="invalid-feedback d-block">{{ $message }}</span>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label>Foto Saat Ini</label>
                        <div class="mb-2">
                            @if($profile->foto_profil_url)
                                <img id="foto-profile-preview" src="{{ $profile->foto_profil_url }}" alt="{{ $profile->nama_display }}" class="img-thumbnail" style="max-width: 160px; max-height: 160px; object-fit: cover; border-radius: 12px;">
                            @else
                                <img id="foto-profile-preview" src="" alt="{{ $profile->nama_display }}" class="img-thumbnail" style="max-width: 160px; max-height: 160px; object-fit: cover; border-radius: 12px; display: none;">
                            @endif
                        </div>

                        <label for="foto_profil">Ganti Foto</label>
                        <input type="file" class="form-control-file @error('foto_profil') is-invalid @enderror" id="foto_profil" name="foto_profil" accept=".jpg,.jpeg,.png,.webp">
                        <small class="form-text text-muted">Kosongkan jika tidak ingin mengganti foto. Format JPG, PNG, WEBP. Maksimal 2MB.</small>
                        @error('foto_profil')
                            <span class="invalid-feedback d-block">{{ $message }}</span>
                        @enderror
                    </div>
                </div>
                <div class="card-footer">
                    <a href="{{ route('admin.profil-direksi.index') }}" class="btn btn-secondary">Batal</a>
                    <button type="submit" class="btn btn-primary">Update Profil Pejabat</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script>
    (function () {
        const input = document.getElementById('foto_profil');
        const preview = document.getElementById('foto-profile-preview');

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
