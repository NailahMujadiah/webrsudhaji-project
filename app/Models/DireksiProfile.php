<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class DireksiProfile extends Model
{
    protected $table = 'direksi_profiles';

    protected $fillable = [
        'position_id',
        'nama_pejabat',
        'foto_profil',
        'deskripsi_singkat',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function position(): BelongsTo
    {
        return $this->belongsTo(Position::class, 'position_id');
    }

    public function getFotoProfilUrlAttribute(): ?string
    {
        if (empty($this->foto_profil)) {
            return null;
        }

        if (Str::startsWith($this->foto_profil, ['http://', 'https://'])) {
            return $this->normalizeSupabasePublicUrl($this->foto_profil);
        }

        $url = Storage::disk((string) config('filesystems.media_disk', 'public'))->url($this->foto_profil);

        return $this->normalizeSupabasePublicUrl($url);
    }

    private function normalizeSupabasePublicUrl(string $url): string
    {
        if (! Str::contains($url, '/storage/v1/s3/')) {
            return $url;
        }

        $supabaseUrl = rtrim((string) env('SUPABASE_URL'), '/');
        $bucket = trim((string) env('AWS_BUCKET'));

        if ($supabaseUrl === '' || $bucket === '') {
            return $url;
        }

        $prefix = $supabaseUrl . '/storage/v1/object/public/' . $bucket . '/';
        $path = parse_url($url, PHP_URL_PATH) ?: '';
        $path = preg_replace('#^/storage/v1/s3/' . preg_quote($bucket, '#') . '/#', '', $path) ?? ltrim($path, '/');

        return $prefix . ltrim($path, '/');
    }

    public function getNamaDisplayAttribute(): string
    {
        return $this->nama_pejabat ?: ($this->position?->name ?? 'Belum diisi');
    }

    public function getNamaAttribute(): ?string
    {
        return $this->nama_pejabat;
    }

    public function getFotoAttribute(): ?string
    {
        return $this->foto_profil;
    }

    public function getFotoUrlAttribute(): ?string
    {
        return $this->foto_profil_url;
    }

    public function getJabatanAttribute(): ?string
    {
        return $this->position?->name;
    }

    public function getUrutanAttribute(): ?int
    {
        return $this->position?->sort_order;
    }
}
