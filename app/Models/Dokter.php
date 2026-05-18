<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Dokter extends Model
{
    protected $table = 'dokter';
    protected $primaryKey = 'id_dokter';
    public $timestamps = false;

    protected $fillable = [
        'nama_dokter',
        'spesialis',
        'foto_dokter',
        'id_admin',
    ];

    public function getRouteKeyName(): string
    {
        return 'id_dokter';
    }

    /**
     * Get the admin that owns the dokter
     */
    public function admin(): BelongsTo
    {
        return $this->belongsTo(Admin::class, 'id_admin', 'id_admin');
    }

    /**
     * Get the scheduled sessions for this dokter
     */
    public function jadwalDokter(): HasMany
    {
        return $this->hasMany(JadwalDokter::class, 'id_dokter', 'id_dokter');
    }

    public function getFotoDokterUrlAttribute(): ?string
    {
        if (empty($this->foto_dokter)) {
            return null;
        }

        if (Str::startsWith($this->foto_dokter, ['http://', 'https://'])) {
            return $this->normalizeSupabasePublicUrl($this->foto_dokter);
        }

        // If path starts with /images/ or images/, serve from public folder
        if (Str::startsWith($this->foto_dokter, ['/', 'images/'])) {
            $path = Str::startsWith($this->foto_dokter, '/') ? $this->foto_dokter : '/' . $this->foto_dokter;
            return rtrim((string) config('app.url'), '/') . $path;
        }

        $url = Storage::disk((string) config('filesystems.media_disk', 'public'))->url($this->foto_dokter);

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
}
