@extends('admin.layouts.master')

@section('title', 'Edit Jadwal Dokter')
@section('page-title', 'Edit Jadwal Dokter')

@section('content')
<div class="row">
    <div class="col-md-8">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Form Edit Jadwal Dokter</h3>
            </div>
            <form action="{{ route('admin.jadwal.update', $jadwal->id_jadwal) }}" method="POST">
                @csrf
                @method('PUT')
                <div class="card-body">
                    <div class="form-group">
                        <label for="id_dokter">Dokter <span class="text-danger">*</span></label>
                        <select class="form-control @error('id_dokter') is-invalid @enderror" id="id_dokter" name="id_dokter" required>
                            <option value="">-- Pilih Dokter --</option>
                            @foreach($dokters as $dokter)
                                <option value="{{ $dokter->id_dokter }}" data-spesialis="{{ $dokter->spesialis }}" {{ old('id_dokter', $jadwal->id_dokter) == $dokter->id_dokter ? 'selected' : '' }}>
                                    {{ $dokter->nama_dokter }}
                                </option>
                            @endforeach
                        </select>
                        @error('id_dokter')
                            <span class="invalid-feedback">{{ $message }}</span>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label for="hari">Hari <span class="text-danger">*</span></label>
                        <select class="form-control @error('hari') is-invalid @enderror" id="hari" name="hari" required>
                            <option value="">-- Pilih Hari --</option>
                            <option value="Senin" {{ old('hari', $jadwal->hari) == 'Senin' ? 'selected' : '' }}>Senin</option>
                            <option value="Selasa" {{ old('hari', $jadwal->hari) == 'Selasa' ? 'selected' : '' }}>Selasa</option>
                            <option value="Rabu" {{ old('hari', $jadwal->hari) == 'Rabu' ? 'selected' : '' }}>Rabu</option>
                            <option value="Kamis" {{ old('hari', $jadwal->hari) == 'Kamis' ? 'selected' : '' }}>Kamis</option>
                            <option value="Jumat" {{ old('hari', $jadwal->hari) == 'Jumat' ? 'selected' : '' }}>Jumat</option>
                            <option value="Sabtu" {{ old('hari', $jadwal->hari) == 'Sabtu' ? 'selected' : '' }}>Sabtu</option>
                            <option value="Minggu" {{ old('hari', $jadwal->hari) == 'Minggu' ? 'selected' : '' }}>Minggu</option>
                        </select>
                        @error('hari')
                            <span class="invalid-feedback">{{ $message }}</span>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label for="poli_otomatis">Poli (otomatis dari dokter)</label>
                        <input type="text" class="form-control" id="poli_otomatis" value="{{ old('poli', $jadwal->poli) }}" readonly>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="jam_mulai">Jam Mulai (WITA) <span class="text-danger">*</span></label>
                            <input type="time" class="form-control @error('jam_mulai') is-invalid @enderror" id="jam_mulai" name="jam_mulai" value="{{ old('jam_mulai', $jadwal->jam_mulai) }}" required>
                            @error('jam_mulai')
                                <span class="invalid-feedback">{{ $message }}</span>
                            @enderror
                        </div>

                        <div class="form-group col-md-6">
                            <label for="jam_selesai">Jam Selesai (WITA) <span class="text-danger">*</span></label>
                            <input type="time" class="form-control @error('jam_selesai') is-invalid @enderror" id="jam_selesai" name="jam_selesai" value="{{ old('jam_selesai', $jadwal->jam_selesai) }}" required>
                            @error('jam_selesai')
                                <span class="invalid-feedback">{{ $message }}</span>
                            @enderror
                        </div>
                    </div>

                </div>
                <div class="card-footer">
                    <a href="{{ route('admin.jadwal.index') }}" class="btn btn-secondary">Batal</a>
                    <button type="submit" class="btn btn-primary">Update Jadwal</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script>
    (function () {
        const dokterSelect = document.getElementById('id_dokter');
        const poliDisplay = document.getElementById('poli_otomatis');

        if (!dokterSelect || !poliDisplay) {
            return;
        }

        const syncPoli = function () {
            const selectedOption = dokterSelect.options[dokterSelect.selectedIndex];
            poliDisplay.value = selectedOption ? (selectedOption.getAttribute('data-spesialis') || '') : '';
        };

        dokterSelect.addEventListener('change', syncPoli);
        syncPoli();
    })();
</script>
@endsection
