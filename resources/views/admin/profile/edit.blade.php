@extends('admin.layouts.master')

@section('title', 'Profil Admin')
@section('page-title', 'Pengaturan Profil Admin')

@section('content')
<div class="row">
    <div class="col-md-6">
        <div class="card card-primary card-outline">
            <div class="card-header">
                <h3 class="card-title">Ubah Data Profil</h3>
            </div>
            <form action="{{ route('admin.profile.update') }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PATCH')
                <div class="card-body">
                    @if (session('success_profile'))
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            {{ session('success_profile') }}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    @endif

                    <div class="form-group">
                        <label for="id_admin">ID Admin</label>
                        <input type="text" class="form-control" id="id_admin" value="{{ $admin->id_admin }}" readonly>
                    </div>

                    <div class="form-group">
                        <label>Foto Profil</label>
                        <div class="mb-2" id="foto-preview-wrapper">
                            @if($admin->foto_admin)
                                <img id="foto-preview-image" src="{{ asset('storage/' . $admin->foto_admin) }}" alt="Foto Admin" class="img-circle elevation-2" style="width: 96px; height: 96px; object-fit: cover;">
                            @else
                                <img id="foto-preview-image" src="" alt="Foto Admin" class="img-circle elevation-2" style="width: 96px; height: 96px; object-fit: cover; display: none;">
                            @endif
                        </div>
                        <input
                            type="file"
                            class="form-control-file @error('foto_admin', 'profileUpdate') is-invalid @enderror"
                            id="foto_admin"
                            name="foto_admin"
                            accept=".jpg,.jpeg,.png,.webp"
                        >
                        <small class="form-text text-muted">Format: JPG, PNG, WEBP. Maksimal 2MB.</small>
                        @error('foto_admin', 'profileUpdate')
                            <span class="invalid-feedback d-block">{{ $message }}</span>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label for="username">Username <span class="text-danger">*</span></label>
                        <input
                            type="text"
                            class="form-control @error('username', 'profileUpdate') is-invalid @enderror"
                            id="username"
                            name="username"
                            value="{{ old('username', $admin->username) }}"
                            required
                        >
                        @error('username', 'profileUpdate')
                            <span class="invalid-feedback">{{ $message }}</span>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label for="nama_admin">Nama Admin <span class="text-danger">*</span></label>
                        <input
                            type="text"
                            class="form-control @error('nama_admin', 'profileUpdate') is-invalid @enderror"
                            id="nama_admin"
                            name="nama_admin"
                            value="{{ old('nama_admin', $admin->nama_admin) }}"
                            required
                        >
                        @error('nama_admin', 'profileUpdate')
                            <span class="invalid-feedback">{{ $message }}</span>
                        @enderror
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">Simpan Profil</button>
                </div>
            </form>
        </div>
    </div>

    <div class="col-md-6">
        <div class="card card-warning card-outline">
            <div class="card-header">
                <h3 class="card-title">Ubah Password</h3>
            </div>
            <form action="{{ route('admin.profile.password.update') }}" method="POST">
                @csrf
                @method('PUT')
                <div class="card-body">
                    @if (session('success_password'))
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            {{ session('success_password') }}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    @endif

                    <div class="form-group">
                        <label for="current_password">Password Saat Ini <span class="text-danger">*</span></label>
                        <input
                            type="password"
                            class="form-control @error('current_password', 'passwordUpdate') is-invalid @enderror"
                            id="current_password"
                            name="current_password"
                            required
                        >
                        @error('current_password', 'passwordUpdate')
                            <span class="invalid-feedback">{{ $message }}</span>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label for="password">Password Baru <span class="text-danger">*</span></label>
                        <input
                            type="password"
                            class="form-control @error('password', 'passwordUpdate') is-invalid @enderror"
                            id="password"
                            name="password"
                            required
                        >
                        @error('password', 'passwordUpdate')
                            <span class="invalid-feedback">{{ $message }}</span>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label for="password_confirmation">Konfirmasi Password Baru <span class="text-danger">*</span></label>
                        <input
                            type="password"
                            class="form-control"
                            id="password_confirmation"
                            name="password_confirmation"
                            required
                        >
                        @error('password_confirmation', 'passwordUpdate')
                            <span class="invalid-feedback d-block">{{ $message }}</span>
                        @enderror
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-warning">Simpan Password</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script>
    (function () {
        const input = document.getElementById('foto_admin');
        const previewImage = document.getElementById('foto-preview-image');
        const previewPlaceholder = document.getElementById('foto-preview-placeholder');

        if (!input || !previewImage || !previewPlaceholder) {
            return;
        }

        input.addEventListener('change', function (event) {
            const file = event.target.files && event.target.files[0];

            if (!file) {
                return;
            }

            const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
            if (!allowedTypes.includes(file.type)) {
                return;
            }

            const objectUrl = URL.createObjectURL(file);
            previewImage.src = objectUrl;
            previewImage.style.display = 'inline-block';
            previewPlaceholder.style.display = 'none';

            previewImage.onload = function () {
                URL.revokeObjectURL(objectUrl);
            };
        });
    })();
</script>
@endsection
