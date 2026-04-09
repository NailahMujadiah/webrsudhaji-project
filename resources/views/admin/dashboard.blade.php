@extends('admin.layouts.master')

@section('title', 'Dashboard')
@section('page-title', 'Dashboard Admin')

@section('content')
<div class="row">
    <div class="col-lg-3 col-6">
        <div class="small-box bg-info">
            <div class="inner">
                <h3>{{ \App\Models\Banner::where('id_admin', $admin->id_admin)->count() }}</h3>
                <p>Total Banner</p>
            </div>
            <div class="icon">
                <i class="fas fa-image"></i>
            </div>
            <a href="{{ route('admin.banner.index') }}" class="small-box-footer">Lihat <i class="fas fa-arrow-circle-right"></i></a>
        </div>
    </div>

    <div class="col-lg-3 col-6">
        <div class="small-box bg-success">
            <div class="inner">
                <h3>{{ \App\Models\Artikel::where('id_admin', $admin->id_admin)->count() }}</h3>
                <p>Total Artikel</p>
            </div>
            <div class="icon">
                <i class="fas fa-newspaper"></i>
            </div>
            <a href="{{ route('admin.artikel.index') }}" class="small-box-footer">Lihat <i class="fas fa-arrow-circle-right"></i></a>
        </div>
    </div>

    <div class="col-lg-3 col-6">
        <div class="small-box bg-warning">
            <div class="inner">
                <h3>{{ \App\Models\Dokter::where('id_admin', $admin->id_admin)->count() }}</h3>
                <p>Total Dokter</p>
            </div>
            <div class="icon">
                <i class="fas fa-user-md"></i>
            </div>
            <a href="{{ route('admin.dokter.index') }}" class="small-box-footer">Lihat <i class="fas fa-arrow-circle-right"></i></a>
        </div>
    </div>

    <div class="col-lg-3 col-6">
        <div class="small-box bg-danger">
            <div class="inner">
                <h3>{{ \App\Models\Layanan::where('id_admin', $admin->id_admin)->count() }}</h3>
                <p>Total Layanan</p>
            </div>
            <div class="icon">
                <i class="fas fa-heartbeat"></i>
            </div>
            <a href="{{ route('admin.layanan.index') }}" class="small-box-footer">Lihat <i class="fas fa-arrow-circle-right"></i></a>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-md-6">
        <div class="card card-primary card-outline">
            <div class="card-header">
                <h3 class="card-title">Informasi Profil Admin</h3>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label>ID Admin</label>
                    <p class="form-control-plaintext">{{ $admin->id_admin }}</p>
                </div>
                <div class="form-group">
                    <label>Username</label>
                    <p class="form-control-plaintext">{{ $admin->username }}</p>
                </div>
                <div class="form-group">
                    <label>Nama Admin</label>
                    <p class="form-control-plaintext">{{ $admin->nama_admin }}</p>
                </div>

                <a href="{{ route('admin.profile.edit') }}" class="btn btn-primary btn-sm">
                    Edit Profil Admin
                </a>
            </div>
        </div>
    </div>

    <div class="col-md-6">
        <div class="card card-success card-outline">
            <div class="card-header">
                <h3 class="card-title">Panduan Cepat</h3>
            </div>
            <div class="card-body">
                <ul class="list-unstyled">
                    <li><i class="fas fa-chevron-right"></i> <a href="{{ route('admin.banner.index') }}">Kelola Banner</a></li>
                    <li><i class="fas fa-chevron-right"></i> <a href="{{ route('admin.artikel.index') }}">Kelola Artikel</a></li>
                    <li><i class="fas fa-chevron-right"></i> <a href="{{ route('admin.dokter.index') }}">Kelola Dokter</a></li>
                    <li><i class="fas fa-chevron-right"></i> <a href="{{ route('admin.layanan.index') }}">Kelola Layanan</a></li>
                    <li><i class="fas fa-chevron-right"></i> <a href="{{ route('admin.kontak.index') }}">Kelola Kontak</a></li>
                    <li><i class="fas fa-chevron-right"></i> <a href="{{ route('admin.jadwal.index') }}">Kelola Jadwal Dokter</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
@endsection
