<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
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
            return $this->foto_dokter;
        }

        return asset('storage/' . $this->foto_dokter);
    }
}
