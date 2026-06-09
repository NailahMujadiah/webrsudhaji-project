@extends('admin.layouts.master')

@section('title', 'Edit Profil Pejabat')
@section('page-title', 'Edit Profil Pejabat')

@section('content')
<div class="row items-center justify-center">
    <div class="col-md-8">
        <div class="card">
            <div class="border-b border-slate-100 px-4 py-3">
                <p class="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Form</p>
                <h2 class="mt-1 text-xl font-semibold text-slate-900">Edit Profil Pejabat</h2>
            </div>
            <form action="{{ route('admin.profil-direksi.update', $position->id) }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <div class="card-body space-y-4">
                    <div class="form-group">
                        <label for="position_name">Jabatan</label>
                        <input type="text" class="form-control" id="position_name" value="{{ $position->name }}" disabled>
                        <small class="form-text text-muted">Hierarki jabatan dikunci dan tidak dapat diubah dari admin.</small>
                    </div>

                    <div class="form-group">
                        <label for="nama_pejabat">Nama<span class="text-danger">*</span></label>
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

                    <div class="space-y-1.5">
                        <label class="block text-sm font-medium text-slate-700">Foto Profil</label>

                        @php
                            $fotoSaat = null;
                            if ($profile->foto_profil) {
                                $fotoSaat = str_starts_with($profile->foto_profil, '/') || str_starts_with($profile->foto_profil, 'http')
                                    ? $profile->foto_profil
                                    : asset('storage/' . $profile->foto_profil);
                            }
                        @endphp

                        <label
                            for="foto_profil"
                            class="relative block h-56 w-full cursor-pointer overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-slate-50 transition hover:border-slate-400 hover:bg-slate-100"
                        >
                            <img
                                id="preview-image"
                                src="{{ $fotoSaat ?? '' }}"
                                alt="{{ $profile->nama_pejabat }}"
                                class="{{ $fotoSaat ? '' : 'hidden' }} absolute inset-0 z-10 h-full w-full object-cover"
                            >

                            <div
                                id="upload-placeholder"
                                class="absolute inset-0 z-0 flex flex-col items-center justify-center text-center {{ $fotoSaat ? 'hidden' : '' }}"
                            >
                                <span class="flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-400 shadow-sm">
                                    <i class="fas fa-cloud-arrow-up text-4xl"></i>
                                </span>
                                <span class="mt-3 text-sm font-medium text-slate-600">Klik untuk pilih foto baru</span>
                                <span class="text-xs text-slate-400">Format JPG, PNG, atau WEBP. Maksimal 2MB.</span>
                            </div>

                            <input
                                type="file"
                                id="foto_profil"
                                name="foto_profil"
                                accept=".jpg,.jpeg,.png,.webp"
                                class="sr-only"
                            >
                        </label>

                        @if($fotoSaat)
                            <p id="file-name" class="text-xs text-slate-500">
                                <i class="fas fa-image mr-1"></i>
                                Foto saat ini tersimpan. Pilih file baru untuk menggantinya.
                            </p>
                        @else
                            <p id="file-name" class="text-xs text-slate-500 hidden"></p>
                        @endif

                        @error('foto_profil')
                            <p class="text-xs text-rose-500">{{ $message }}</p>
                        @enderror
                    </div>
                </div>

                <div class="card-footer flex items-center gap-2">
                    <a href="{{ route('admin.profil-direksi.index') }}" class="btn btn-secondary">Batal</a>
                    <button type="submit" class="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    </div>
</div>

{{-- Cropper Modal --}}
<div id="cropper-modal" class="fixed inset-0 z-50 hidden bg-slate-950/70 px-4 py-6">
    <div class="cropper-dialog w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <div class="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <div>
                <p class="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Crop Foto</p>
                <h3 class="mt-1 text-lg font-semibold text-slate-900">Atur posisi foto sebelum disimpan</h3>
            </div>
            <button type="button" id="cropper-cancel-top" class="rounded-md p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700">
                <i class="fas fa-times text-lg"></i>
            </button>
        </div>

        <div class="grid gap-6 p-5 lg:grid-cols-[minmax(0,1fr)_260px]">
            {{-- Area crop --}}
            <div class="space-y-3">
                <div class="cropper-stage flex w-full items-center justify-center overflow-hidden rounded-2xl bg-slate-900">
                    <img id="crop-image" alt="Preview crop foto" class="block max-h-full max-w-full">
                </div>
                <p class="text-sm text-slate-500">Seret foto untuk mengubah posisi. Scroll untuk zoom.</p>
            </div>

            {{-- Panel kontrol --}}
            <div class="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div class="space-y-2 text-sm text-slate-600">
                    <p><span class="font-medium text-slate-800">Geser:</span> drag foto ke posisi yang diinginkan.</p>
                    <p><span class="font-medium text-slate-800">Zoom:</span> scroll mouse atau pinch di layar sentuh.</p>
                    <p><span class="font-medium text-slate-800">Rotate:</span> gunakan tombol di bawah.</p>
                </div>

                {{-- Tombol rotate --}}
                <div class="flex items-center gap-2">
                    <button type="button" id="crop-rotate-left" class="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
                        <i class="fas fa-rotate-left"></i> Kiri
                    </button>
                    <button type="button" id="crop-rotate-right" class="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
                        <i class="fas fa-rotate-right"></i> Kanan
                    </button>
                </div>

                {{-- Tombol flip --}}
                <div class="flex items-center gap-2">
                    <button type="button" id="crop-flip-h" class="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
                        <i class="fas fa-left-right"></i> Flip H
                    </button>
                    <button type="button" id="crop-flip-v" class="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
                        <i class="fas fa-up-down"></i> Flip V
                    </button>
                </div>

                <div class="flex flex-col gap-2 pt-2">
                    <button type="button" id="cropper-reset" class="inline-flex w-full items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
                        Reset
                    </button>
                    <button type="button" id="cropper-apply" class="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90">
                        Simpan Crop
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
{{-- Cropper.js --}}
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.6.2/cropper.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.6.2/cropper.min.js"></script>

<style>
    #cropper-modal:not(.hidden) {
        position: fixed !important;
        inset: 0 !important;
        display: flex !important;
        align-items: flex-start !important;
        justify-content: center !important;
        box-sizing: border-box;
        height: 100dvh;
        overflow-y: auto;
        padding: 1.5rem;
        z-index: 9999;
    }

    #cropper-modal .cropper-dialog {
        margin: 0 auto;
        max-height: calc(100dvh - 3rem);
        position: relative;
        top: 0;
        transform: none;
    }

    #cropper-modal .cropper-stage {
        height: min(320px, calc(100dvh - 20rem));
        min-height: 220px;
    }
</style>

<script>
(function () {
    const input        = document.getElementById('foto_profil');
    const preview      = document.getElementById('preview-image');
    const placeholder  = document.getElementById('upload-placeholder');
    const fileNameEl   = document.getElementById('file-name');
    const modal        = document.getElementById('cropper-modal');
    const cropDialog   = document.querySelector('#cropper-modal .cropper-dialog');
    const cropStage    = document.querySelector('#cropper-modal .cropper-stage');
    const cropImageEl  = document.getElementById('crop-image');

    const btnCancelTop    = document.getElementById('cropper-cancel-top');
    const btnReset        = document.getElementById('cropper-reset');
    const btnApply        = document.getElementById('cropper-apply');
    const btnRotateLeft   = document.getElementById('crop-rotate-left');
    const btnRotateRight  = document.getElementById('crop-rotate-right');
    const btnFlipH        = document.getElementById('crop-flip-h');
    const btnFlipV        = document.getElementById('crop-flip-v');

    let cropper   = null;
    let origFile  = null;
    let cropObjectUrl = null;

    if (modal && modal.parentElement !== document.body) {
        document.body.appendChild(modal);
    }

    // ── Buka modal ──────────────────────────────────────────────
    function openModal(objectUrl) {
        cropObjectUrl = objectUrl;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        modal.scrollTop = 0;
        if (cropDialog) {
            cropDialog.scrollTop = 0;
        }
        document.body.classList.add('overflow-hidden');

        // Inisialisasi Cropper.js setelah gambar dimuat
        cropImageEl.onload = function () {
            if (cropper) {
                cropper.destroy();
            }

            cropper = new Cropper(cropImageEl, {
                aspectRatio: 3 / 4,
                viewMode: 1,
                dragMode: 'move',
                autoCropArea: 1,
                cropBoxMovable: false,
                cropBoxResizable: false,
                toggleDragModeOnDblclick: false,
                background: false,
                minContainerHeight: cropStage?.clientHeight || 300,
            });
        };

        cropImageEl.src = objectUrl;
    }

    // ── Tutup modal ─────────────────────────────────────────────
    function closeModal() {
        if (cropper) {
            cropper.destroy();
            cropper = null;
        }

        cropImageEl.src = '';
        cropImageEl.onload = null;
        if (cropObjectUrl) {
            URL.revokeObjectURL(cropObjectUrl);
            cropObjectUrl = null;
        }
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.classList.remove('overflow-hidden');
    }

    // ── Update preview thumbnail di form ────────────────────────
    function updatePreview(file) {
        const url = URL.createObjectURL(file);
        preview.src = url;
        preview.classList.remove('hidden');
        placeholder.classList.add('hidden');
        fileNameEl.textContent = file.name;
        fileNameEl.classList.remove('hidden');

        preview.onload = () => URL.revokeObjectURL(url);
    }

    // ── Inject file hasil crop ke input[type=file] ───────────────
    function setInputFile(file) {
        const dt = new DataTransfer();
        dt.items.add(file);
        input.files = dt.files;
        updatePreview(file);
    }

    // ── Simpan hasil crop ────────────────────────────────────────
    function applyCrop() {
        if (!cropper) return;

        const canvas = cropper.getCroppedCanvas({
            width: 768,
            height: 1024,
            imageSmoothingEnabled: true,
            imageSmoothingQuality: 'high',
        });

        canvas.toBlob(function (blob) {
            if (!blob) return;

            const baseName = origFile.name.replace(/\.[^.]+$/, '');
            const croppedFile = new File([blob], `${baseName}-cropped.jpg`, {
                type: 'image/jpeg',
                lastModified: Date.now(),
            });

            setInputFile(croppedFile);
            closeModal();
        }, 'image/jpeg', 0.92);
    }

    // ── Event: pilih file ────────────────────────────────────────
    input.addEventListener('change', function (e) {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
            input.value = '';
            return;
        }

        origFile = file;
        const objectUrl = URL.createObjectURL(file);
        openModal(objectUrl);
    });

    // ── Tombol kontrol ───────────────────────────────────────────
    btnRotateLeft.addEventListener('click',  () => cropper?.rotate(-45));
    btnRotateRight.addEventListener('click', () => cropper?.rotate(45));

    btnFlipH.addEventListener('click', function () {
        if (!cropper) return;
        const data = cropper.getData();
        cropper.scaleX(data.scaleX === -1 ? 1 : -1);
    });

    btnFlipV.addEventListener('click', function () {
        if (!cropper) return;
        const data = cropper.getData();
        cropper.scaleY(data.scaleY === -1 ? 1 : -1);
    });

    btnReset.addEventListener('click',  () => cropper?.reset());
    btnApply.addEventListener('click',  applyCrop);

    btnCancelTop.addEventListener('click', function () {
        input.value = '';
        origFile = null;
        closeModal();
    });

    // Klik backdrop untuk tutup
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            input.value = '';
            origFile = null;
            closeModal();
        }
    });
})();
</script>
@endsection
