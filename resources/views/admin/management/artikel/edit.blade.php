@extends('admin.layouts.master')

@section('title', 'Edit Artikel')
@section('page-title', 'Edit Artikel')

@section('content')
<div class="max-w-3xl mx-auto">
    <section class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        <div class="border-b border-slate-100 px-4 py-3">
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Form</p>
            <h2 class="mt-1 text-xl font-semibold text-slate-900">Edit Artikel</h2>
        </div>

        <form action="{{ route('admin.artikel.update', $artikel->id_artikel) }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')
            <div class="space-y-5 px-6 py-3">

                {{-- Judul --}}
                <div class="space-y-1.5">
                    <label for="judul" class="block text-sm font-medium text-slate-700">
                        Judul <span class="text-rose-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="judul"
                        name="judul"
                        value="{{ old('judul', $artikel->judul) }}"
                        required
                        class="h-10 w-full rounded-2xl border px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-100 transition
                            {{ $errors->has('judul') ? 'border-rose-300 bg-rose-50 focus:border-rose-300' : 'border-slate-200 bg-slate-50 focus:border-slate-300 focus:bg-white' }}"
                        placeholder="Tulis judul artikel..."
                    >
                    @error('judul')
                        <p class="text-xs text-rose-500">{{ $message }}</p>
                    @enderror
                </div>

                {{-- Isi Artikel --}}
                <div class="space-y-1.5">
                    <label for="isi_artikel" class="block text-sm font-medium text-slate-700">
                        Isi Artikel <span class="text-rose-500">*</span>
                    </label>
                    <textarea
                        id="isi_artikel"
                        name="isi_artikel"
                        rows="8"
                        required
                        class="w-full rounded-2xl border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-100 transition resize-none
                            {{ $errors->has('isi_artikel') ? 'border-rose-300 bg-rose-50 focus:border-rose-300' : 'border-slate-200 bg-slate-50 focus:border-slate-300 focus:bg-white' }}"
                        placeholder="Tulis isi artikel di sini..."
                    >{{ old('isi_artikel', $artikel->isi_artikel) }}</textarea>
                    @error('isi_artikel')
                        <p class="text-xs text-rose-500">{{ $message }}</p>
                    @enderror
                </div>

                {{-- Kategori & Tanggal --}}
                <div class="grid gap-4 sm:grid-cols-2">

                    <div class="space-y-1.5">
                        <label for="kategori" class="block text-sm font-medium text-slate-700">
                            Kategori <span class="text-rose-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="kategori"
                            name="kategori"
                            value="{{ old('kategori', $artikel->kategori) }}"
                            required
                            class="h-10 w-full rounded-2xl border px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-100 transition
                                {{ $errors->has('kategori') ? 'border-rose-300 bg-rose-50 focus:border-rose-300' : 'border-slate-200 bg-slate-50 focus:border-slate-300 focus:bg-white' }}"
                            placeholder="Contoh: Kesehatan"
                        >
                        @error('kategori')
                            <p class="text-xs text-rose-500">{{ $message }}</p>
                        @enderror
                    </div>

                    <div class="space-y-1.5">
                        <label for="tanggal" class="block text-sm font-medium text-slate-700">
                            Tanggal <span class="text-rose-500">*</span>
                        </label>
                        <input
                            type="date"
                            id="tanggal"
                            name="tanggal"
                            value="{{ old('tanggal', \Carbon\Carbon::parse($artikel->tanggal)->format('Y-m-d')) }}"
                            required
                            class="h-10 w-full rounded-2xl border px-4 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-100 transition
                                {{ $errors->has('tanggal') ? 'border-rose-300 bg-rose-50 focus:border-rose-300' : 'border-slate-200 bg-slate-50 focus:border-slate-300 focus:bg-white' }}"
                        >
                        @error('tanggal')
                            <p class="text-xs text-rose-500">{{ $message }}</p>
                        @enderror
                    </div>

                </div>

                {{-- Upload Gambar --}}
                <div class="space-y-1.5">
                    <label for="gambar_artikel" class="block text-sm font-medium text-slate-700">
                        Upload Media Gambar
                    </label>

                    <label
                        for="gambar_artikel"
                        class="relative h-56 w-full cursor-pointer overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-slate-50 transition hover:border-slate-400 hover:bg-slate-100"
                    >
                        {{-- Preview Image (gambar existing atau baru) --}}
                        <img
                            id="preview-image"
                            src="{{ $artikel->gambar_artikel ? asset('storage/' . $artikel->gambar_artikel) : '' }}"
                            alt="Preview"
                            class="{{ $artikel->gambar_artikel ? '' : 'hidden' }} h-full w-full object-cover absolute inset-0 z-10"
                        >

                        {{-- Placeholder --}}
                        <div
                            id="upload-placeholder"
                            class="absolute inset-0 flex flex-col items-center justify-center text-center z-0 {{ $artikel->gambar_artikel ? 'hidden' : '' }}"
                        >
                            <span class="flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-400 shadow-sm">
                                <i class="fas fa-cloud-arrow-up text-4xl"></i>
                            </span>
                            <span class="mt-3 text-sm font-medium text-slate-600">
                                Klik untuk ganti gambar
                            </span>
                            <span class="text-xs text-slate-400">
                                Kosongkan jika tidak ingin mengganti. Format JPG, PNG, atau WEBP. Maks. 2MB.
                            </span>
                        </div>

                        <input
                            type="file"
                            id="gambar_artikel"
                            name="gambar_artikel"
                            accept=".jpg,.jpeg,.png,.webp"
                            class="sr-only"
                            onchange="updateFileName(this)"
                        >
                    </label>

                    <p id="file-name" class="text-xs text-slate-500 hidden"></p>

                    @error('gambar_artikel')
                        <p class="text-xs text-rose-500">{{ $message }}</p>
                    @enderror
                </div>

            </div>

            {{-- Footer Actions --}}
            <div class="flex items-center justify-end gap-3 border-t border-slate-100 px-6 py-3">
                <a href="{{ route('admin.artikel.index') }}"
                   class="inline-flex h-10 items-center gap-2 rounded-2xl border border-slate-200 px-5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                    <i class="fas fa-arrow-left text-xs"></i>
                    Batal
                </a>
                <button type="submit"
                    class="inline-flex h-10 items-center gap-2 rounded-2xl bg-slate-900 px-5 text-sm font-medium text-white transition hover:bg-slate-700">
                    <i class="fas fa-floppy-disk text-xs"></i>
                    Update Artikel
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