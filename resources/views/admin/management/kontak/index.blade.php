@extends('admin.layouts.master')

@section('title', 'Kontak')
@section('page-title', 'Manajemen Kontak')

@section('content')
<div class="row">
    <div class="col-12">
        <a href="{{ route('admin.kontak.create') }}" class="btn btn-primary mb-3">
            <i class="fas fa-plus"></i> Tambah Kontak
        </a>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Daftar Kontak</h3>
            </div>
            <div class="card-body table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Telepon</th>
                            <th>WhatsApp</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($kontaks as $kontak)
                            <tr>
                                <td>{{ $loop->iteration }}</td>
                                <td>{{ $kontak->email }}</td>
                                <td>{{ $kontak->telepon }}</td>
                                <td>{{ $kontak->whatsapp ?? '-' }}</td>
                                <td>
                                    <a href="{{ route('admin.kontak.edit', $kontak->id_kontak) }}" class="btn btn-sm btn-warning">
                                        <i class="fas fa-edit"></i>
                                    </a>
                                    <form method="POST" action="{{ route('admin.kontak.destroy', $kontak->id_kontak) }}" style="display:inline;" onsubmit="return confirm('Yakin hapus kontak ini?');">
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
                                <td colspan="5" class="text-center">Tidak ada data kontak</td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
            <div class="card-footer clearfix">
                {{ $kontaks->links() }}
            </div>
        </div>
    </div>
</div>
@endsection
