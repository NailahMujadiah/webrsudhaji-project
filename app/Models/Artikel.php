<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
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
        'kategori',
        'tanggal',
        'id_admin',
    ];

    public function getGambarArtikelUrlAttribute(): ?string
    {
        if (empty($this->gambar_artikel)) {
            return null;
        }

        if (Str::startsWith($this->gambar_artikel, ['http://', 'https://'])) {
            return $this->gambar_artikel;
        }

        return asset('storage/' . $this->gambar_artikel);
    }

    /**
     * Backwards-compatible accessor for `thumbnail` attribute used in views.
     */
    public function getThumbnailAttribute(): ?string
    {
        return $this->gambar_artikel;
    }

    /**
     * Backwards-compatible accessor for `thumbnail_url` used in views.
     */
    public function getThumbnailUrlAttribute(): ?string
    {
        return $this->getGambarArtikelUrlAttribute();
    }
}
