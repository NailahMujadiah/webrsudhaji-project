<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Artikel extends Model
{
    protected $table = 'artikel';
    protected $primaryKey = 'id_artikel';
    public $timestamps = false;

    protected $fillable = [
        'judul',
        'isi_artikel',
        'gambar_artikel',
        'thumbnail',
        'kategori',
        'tanggal',
        'id_admin',
    ];

    protected $appends = [
        'gambar_artikel_url',
        'thumbnail_url',
    ];

    public function getGambarArtikelUrlAttribute(): ?string
    {
        if (empty($this->gambar_artikel)) {
            return null;
        }

        if (Str::startsWith($this->gambar_artikel, ['http://', 'https://'])) {
            return $this->normalizeSupabasePublicUrl($this->gambar_artikel);
        }

        $disk = Storage::disk((string) config('filesystems.media_disk', 'public'));
        if (method_exists($disk, 'url')) {
            $url = $disk->url($this->gambar_artikel);
            return $this->normalizeSupabasePublicUrl($url);
        }

        return null;
    }

    /**
     * Backwards-compatible accessor for `thumbnail` attribute used in views.
     */
    public function getThumbnailAttribute(): ?string
    {
        return $this->attributes['thumbnail'] ?? $this->gambar_artikel;
    }

    /**
     * Backwards-compatible accessor for `thumbnail_url` used in views.
     */
    public function getThumbnailUrlAttribute(): ?string
    {
        $thumbnail = $this->thumbnail;

        if (empty($thumbnail)) {
            return $this->getGambarArtikelUrlAttribute();
        }

        if (Str::startsWith($thumbnail, ['http://', 'https://'])) {
            return $this->normalizeSupabasePublicUrl($thumbnail);
        }

        $disk = Storage::disk((string) config('filesystems.media_disk', 'public'));
        if (method_exists($disk, 'url')) {
            $url = $disk->url($thumbnail);
            return $this->normalizeSupabasePublicUrl($url);
        }

        return null;
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
