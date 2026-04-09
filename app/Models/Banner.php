<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Banner extends Model
{
    protected $table = 'banner';
    protected $primaryKey = 'id_banner';
    public $timestamps = false;

    protected $fillable = [
        'judul',
        'gambar_banner',
        'deskripsi',
        'id_admin',
    ];

    public function getGambarBannerUrlAttribute(): ?string
    {
        if (empty($this->gambar_banner)) {
            return null;
        }

        if (Str::startsWith($this->gambar_banner, ['http://', 'https://'])) {
            return $this->gambar_banner;
        }

        return asset('storage/' . $this->gambar_banner);
    }
}
