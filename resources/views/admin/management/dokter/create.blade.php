@extends('admin.layouts.master')

@section('title', 'Tambah Dokter')
@section('page-title', 'Tambah Dokter Baru')

@section('content')
<div class="row">
    <div class="col-md-8">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Form Tambah Dokter</h3>
            </div>
            <form action="{{ route('admin.dokter.store') }}" method="POST" enctype="multipart/form-data">
                @csrf
                <div class="card-body">
                    <div class="form-group">
                        <label for="nama_dokter">Nama Dokter <span class="text-danger">*</span></label>
                        <input type="text" class="form-control @error('nama_dokter') is-invalid @enderror" id="nama_dokter" name="nama_dokter" value="{{ old('nama_dokter') }}" required>
                        @error('nama_dokter')
                            <span class="invalid-feedback">{{ $message }}</span>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label for="spesialis">Spesialis <span class="text-danger">*</span></label>
                        <input type="text" class="form-control @error('spesialis') is-invalid @enderror" id="spesialis" name="spesialis" value="{{ old('spesialis') }}" required>
                        @error('spesialis')
                            <span class="invalid-feedback">{{ $message }}</span>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label for="foto_dokter">Upload Foto Dokter</label>
                        <input type="file" class="form-control-file @error('foto_dokter') is-invalid @enderror" id="foto_dokter" name="foto_dokter" accept=".jpg,.jpeg,.png,.webp">
                        <small class="form-text text-muted">Format JPG, PNG, atau WEBP. Maksimal 2MB.</small>
                        @error('foto_dokter')
                            <span class="invalid-feedback d-block">{{ $message }}</span>
                        @enderror
                    </div>
                </div>
                <div class="card-footer">
                    <a href="{{ route('admin.dokter.index') }}" class="btn btn-secondary">Batal</a>
                    <button type="submit" class="btn btn-primary">Simpan Dokter</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
