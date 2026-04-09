<?php

namespace App\Policies;

use App\Models\Admin;
use Illuminate\Database\Eloquent\Model;

class AdminContentPolicy
{
    public function belongsToAdmin(Admin $admin, Model $model): bool
    {
        return $model->id_admin === $admin->id_admin;
    }
}
