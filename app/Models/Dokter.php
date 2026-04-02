<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

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
}
