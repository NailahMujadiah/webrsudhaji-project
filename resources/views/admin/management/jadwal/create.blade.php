@extends('admin.layouts.master')

@section('title', 'Tambah Jadwal Dokter')
@section('page-title', 'Tambah Jadwal Dokter Baru')

@section('content')
<div class="row">
    <div class="col-md-8">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Form Tambah Jadwal Dokter</h3>
            </div>
            <form action="{{ route('admin.jadwal.store') }}" method="POST">
                @csrf
                <div class="card-body">
                    <div class="form-group">
                        <label for="id_dokter">Dokter <span class="text-danger">*</span></label>
                        <select class="form-control @error('id_dokter') is-invalid @enderror" id="id_dokter" name="id_dokter" required>
                            <option value="">-- Pilih Dokter --</option>
                            @foreach($dokters as $dokter)
                                <option value="{{ $dokter->id_dokter }}" data-spesialis="{{ $dokter->spesialis }}" {{ old('id_dokter') == $dokter->id_dokter ? 'selected' : '' }}>
                                    {{ $dokter->nama_dokter }}
                                </option>
                            @endforeach
                        </select>
                        @error('id_dokter')
                            <span class="invalid-feedback">{{ $message }}</span>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label for="poli_otomatis">Poli (otomatis dari dokter)</label>
                        <input type="text" class="form-control" id="poli_otomatis" value="" readonly>
                    </div>

                    <div class="form-group">
                        <label>Detail Jadwal <span class="text-danger">*</span></label>
                        <small class="form-text text-muted mb-2">Tambah baris sesuai kebutuhan jika jam berbeda tiap hari.</small>
                        <div id="schedule-rows">
                            @php($oldSchedules = old('schedules', [['hari' => '', 'jam_mulai' => '', 'jam_selesai' => '', 'poli' => '']]))
                            @foreach($oldSchedules as $index => $schedule)
                                <div class="border rounded p-3 mb-3 schedule-row" data-index="{{ $index }}">
                                    <div class="form-row align-items-end">
                                        <div class="form-group col-md-3">
                                            <label for="hari_{{ $index }}">Hari</label>
                                            <select class="form-control @error("schedules.$index.hari") is-invalid @enderror" id="hari_{{ $index }}" name="schedules[{{ $index }}][hari]" required>
                                                <option value="">-- Hari --</option>
                                                @foreach(['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'] as $hari)
                                                    <option value="{{ $hari }}" {{ ($schedule['hari'] ?? '') === $hari ? 'selected' : '' }}>{{ $hari }}</option>
                                                @endforeach
                                            </select>
                                            @error("schedules.$index.hari")
                                                <span class="invalid-feedback">{{ $message }}</span>
                                            @enderror
                                        </div>

                                        <div class="form-group col-md-2">
                                            <label for="jam_mulai_{{ $index }}">Jam Mulai (WITA)</label>
                                            <input type="time" class="form-control @error("schedules.$index.jam_mulai") is-invalid @enderror" id="jam_mulai_{{ $index }}" name="schedules[{{ $index }}][jam_mulai]" value="{{ $schedule['jam_mulai'] ?? '' }}" required>
                                            @error("schedules.$index.jam_mulai")
                                                <span class="invalid-feedback">{{ $message }}</span>
                                            @enderror
                                        </div>

                                        <div class="form-group col-md-2">
                                            <label for="jam_selesai_{{ $index }}">Jam Selesai (WITA)</label>
                                            <input type="time" class="form-control @error("schedules.$index.jam_selesai") is-invalid @enderror" id="jam_selesai_{{ $index }}" name="schedules[{{ $index }}][jam_selesai]" value="{{ $schedule['jam_selesai'] ?? '' }}" required>
                                            @error("schedules.$index.jam_selesai")
                                                <span class="invalid-feedback">{{ $message }}</span>
                                            @enderror
                                        </div>

                                        <div class="form-group col-md-5 text-right">
                                            <button type="button" class="btn btn-outline-danger btn-sm remove-schedule-row" title="Hapus baris">&times;</button>
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        </div>

                        @error('schedules')
                            <div class="text-danger small">{{ $message }}</div>
                        @enderror
                    </div>

                    <button type="button" class="btn btn-outline-primary btn-sm mb-3" id="add-schedule-row">
                        <i class="fas fa-plus"></i> Tambah Baris Jadwal
                    </button>
                </div>
                <div class="card-footer">
                    <a href="{{ route('admin.jadwal.index') }}" class="btn btn-secondary">Batal</a>
                    <button type="submit" class="btn btn-primary">Simpan Jadwal</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script>
    (function () {
        const container = document.getElementById('schedule-rows');
        const addButton = document.getElementById('add-schedule-row');

        if (!container || !addButton) {
            return;
        }

        const dayOptions = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];

        const buildRow = function (index) {
            const optionsHtml = ['<option value="">-- Hari --</option>']
                .concat(dayOptions.map(function (day) {
                    return '<option value="' + day + '">' + day + '</option>';
                }))
                .join('');

            return [
                '<div class="border rounded p-3 mb-3 schedule-row" data-index="' + index + '">',
                '  <div class="form-row align-items-end">',
                '    <div class="form-group col-md-3">',
                '      <label for="hari_' + index + '">Hari</label>',
                '      <select class="form-control" id="hari_' + index + '" name="schedules[' + index + '][hari]" required>',
                optionsHtml,
                '      </select>',
                '    </div>',
                '    <div class="form-group col-md-2">',
                '      <label for="jam_mulai_' + index + '">Jam Mulai (WITA)</label>',
                '      <input type="time" class="form-control" id="jam_mulai_' + index + '" name="schedules[' + index + '][jam_mulai]" required>',
                '    </div>',
                '    <div class="form-group col-md-2">',
                '      <label for="jam_selesai_' + index + '">Jam Selesai (WITA)</label>',
                '      <input type="time" class="form-control" id="jam_selesai_' + index + '" name="schedules[' + index + '][jam_selesai]" required>',
                '    </div>',
                '    <div class="form-group col-md-5 text-right">',
                '      <button type="button" class="btn btn-outline-danger btn-sm remove-schedule-row" title="Hapus baris">&times;</button>',
                '    </div>',
                '  </div>',
                '</div>',
            ].join('');
        };

        const dokterSelect = document.getElementById('id_dokter');
        const poliDisplay = document.getElementById('poli_otomatis');

        const syncPoli = function () {
            if (!dokterSelect || !poliDisplay) {
                return;
            }

            const selectedOption = dokterSelect.options[dokterSelect.selectedIndex];
            poliDisplay.value = selectedOption ? (selectedOption.getAttribute('data-spesialis') || '') : '';
        };

        if (dokterSelect) {
            dokterSelect.addEventListener('change', syncPoli);
            syncPoli();
        }

        const getNextIndex = function () {
            const rows = container.querySelectorAll('.schedule-row');
            let highest = -1;
            rows.forEach(function (row) {
                const idx = parseInt(row.getAttribute('data-index'), 10);
                if (!isNaN(idx) && idx > highest) {
                    highest = idx;
                }
            });
            return highest + 1;
        };

        addButton.addEventListener('click', function () {
            const nextIndex = getNextIndex();
            container.insertAdjacentHTML('beforeend', buildRow(nextIndex));
        });

        container.addEventListener('click', function (event) {
            const target = event.target;
            if (!target.classList.contains('remove-schedule-row')) {
                return;
            }

            const rows = container.querySelectorAll('.schedule-row');
            if (rows.length <= 1) {
                return;
            }

            target.closest('.schedule-row').remove();
        });
    })();
</script>
@endsection
