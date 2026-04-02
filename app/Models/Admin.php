<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Admin extends Authenticatable
{
    protected $table = 'admin';
    protected $primaryKey = 'id_admin';
    public $timestamps = false;

    protected $fillable = [
        'username',
        'password',
        'nama_admin',
    ];

    protected $hidden = [
        'password',
    ];

    /**
     * Get all dokter managed by this admin
     */
    public function dokter(): HasMany
    {
        return $this->hasMany(Dokter::class, 'id_admin', 'id_admin');
    }
}
