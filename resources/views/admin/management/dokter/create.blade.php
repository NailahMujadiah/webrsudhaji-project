@extends('admin.layouts.master')

@section('title', 'Tambah Dokter')
@section('page-title', 'Tambah Dokter Baru')

@section('content')
<div class="max-w-3xl mx-auto">
    <section class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        <div class="border-b border-slate-100 px-4 py-3">
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Form</p>
            <h2 class="mt-1 text-xl font-semibold text-slate-900">Tambah Dokter Baru</h2>
        </div>

        <form action="{{ route('admin.dokter.store') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="space-y-5 px-6 py-5">

                {{-- Nama Dokter --}}
                <div class="space-y-1.5">
                    <label for="nama_dokter" class="block text-sm font-medium text-slate-700">
                        Nama Dokter <span class="text-rose-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="nama_dokter"
                        name="nama_dokter"
                        value="{{ old('nama_dokter') }}"
                        required
                        class="h-10 w-full rounded-2xl border px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-100 transition
                            {{ $errors->has('nama_dokter') ? 'border-rose-300 bg-rose-50 focus:border-rose-300' : 'border-slate-200 bg-slate-50 focus:border-slate-300 focus:bg-white' }}"
                        placeholder="Tulis nama lengkap dokter..."
                    >
                    @error('nama_dokter')
                        <p class="text-xs text-rose-500">{{ $message }}</p>
                    @enderror
                </div>

                {{-- Spesialis --}}
                <div class="space-y-1.5">
                    <label for="spesialis" class="block text-sm font-medium text-slate-700">
                        Spesialis <span class="text-rose-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="spesialis"
                        name="spesialis"
                        value="{{ old('spesialis') }}"
                        required
                        class="h-10 w-full rounded-2xl border px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-100 transition
                            {{ $errors->has('spesialis') ? 'border-rose-300 bg-rose-50 focus:border-rose-300' : 'border-slate-200 bg-slate-50 focus:border-slate-300 focus:bg-white' }}"
                        placeholder="Contoh: Dokter Umum, Spesialis Anak..."
                    >
                    @error('spesialis')
                        <p class="text-xs text-rose-500">{{ $message }}</p>
                    @enderror
                </div>

                {{-- Upload Foto Dokter --}}
                <div class="space-y-1.5">
                    <label for="foto_dokter" class="block text-sm font-medium text-slate-700">
                        Upload Foto Dokter
                    </label>

                    <label
                        for="foto_dokter"
                        class="relative h-56 w-full cursor-pointer overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-slate-50 transition hover:border-slate-400 hover:bg-slate-100"
                    >
                        {{-- Preview Image --}}
                        <img
                            id="preview-image"
                            src=""
                            alt="Preview"
                            class="hidden h-full w-full object-cover absolute inset-0 z-10"
                        >

                        {{-- Placeholder --}}
                        <div
                            id="upload-placeholder"
                            class="absolute inset-0 flex flex-col items-center justify-center text-center z-0"
                        >
                            <span class="flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-400 shadow-sm">
                                <i class="fas fa-cloud-arrow-up text-4xl"></i>
                            </span>
                            <span class="mt-3 text-sm font-medium text-slate-600">
                                Klik untuk pilih foto
                            </span>
                            <span class="text-xs text-slate-400">
                                Format JPG, PNG, atau WEBP. Maksimal 2MB.
                            </span>
                        </div>

                        <input
                            type="file"
                            id="foto_dokter"
                            name="foto_dokter"
                            accept=".jpg,.jpeg,.png,.webp"
                            class="sr-only"
                            onchange="updateFileName(this)"
                        >
                    </label>

                    <p id="file-name" class="text-xs text-slate-500 hidden"></p>
                    @error('foto_dokter')
                        <p class="text-xs text-rose-500">{{ $message }}</p>
                    @enderror
                </div>

            </div>

            {{-- Footer Actions --}}
            <div class="flex items-center justify-end gap-3 border-t border-slate-100 px-6 py-3">
                <a href="{{ route('admin.dokter.index') }}"
                   class="inline-flex h-10 items-center gap-2 rounded-2xl border border-slate-200 px-5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                    <i class="fas fa-arrow-left text-xs"></i>
                    Batal
                </a>
                <button type="submit"
                    class="inline-flex h-10 items-center gap-2 rounded-2xl bg-slate-900 px-5 text-sm font-medium text-white transition hover:bg-slate-700">
                    <i class="fas fa-floppy-disk text-xs"></i>
                    Simpan Dokter
                </button>
            </div>
        </form>

    </section>
</div>

<script>
    function updateFileName(input) {
        const label = document.getElementById('file-name');
        const preview = document.getElementById('preview-image');
        const placeholder = document.getElementById('upload-placeholder');

        if (input.files && input.files[0]) {
            const file = input.files[0];

            if (file.size > 2 * 1024 * 1024) {
                alert('Ukuran file tidak boleh lebih dari 2MB.');
                input.value = '';
                return;
            }

            const reader = new FileReader();
            reader.onload = function (e) {
                preview.src = e.target.result;
                preview.classList.remove('hidden');
                placeholder.classList.add('hidden');
            };
            reader.readAsDataURL(file);

            label.textContent = 'File dipilih: ' + file.name;
            label.classList.remove('hidden');

        } else {
            label.classList.add('hidden');
            preview.classList.add('hidden');
            preview.src = '';
            placeholder.classList.remove('hidden');
        }
    }
</script>

@endsection