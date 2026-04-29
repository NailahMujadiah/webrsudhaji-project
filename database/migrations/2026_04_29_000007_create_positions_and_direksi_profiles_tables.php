<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('positions', function (Blueprint $table) {
            $table->id();
            $table->string('code', 100)->unique();
            $table->string('name', 255);
            $table->foreignId('parent_id')
                ->nullable()
                ->constrained('positions')
                ->restrictOnDelete();
            $table->unsignedSmallInteger('sort_order')->default(0);
            $table->timestamps();
        });

        Schema::create('direksi_profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('position_id')
                ->unique()
                ->constrained('positions')
                ->restrictOnDelete();
            $table->string('nama_pejabat', 255)->nullable();
            $table->string('foto_profil', 255)->nullable();
            $table->text('deskripsi_singkat')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        $now = now();

        DB::table('positions')->insert([
            ['id' => 1, 'code' => 'director', 'name' => 'Direktur', 'parent_id' => null, 'sort_order' => 1, 'created_at' => $now, 'updated_at' => $now],
            ['id' => 2, 'code' => 'vice-director-medical', 'name' => 'Wakil Direktur Pelayanan Medik, Keperawatan, dan Diklit', 'parent_id' => 1, 'sort_order' => 1, 'created_at' => $now, 'updated_at' => $now],
            ['id' => 3, 'code' => 'vice-director-support', 'name' => 'Wakil Direktur SDM, Keuangan, dan Umum', 'parent_id' => 1, 'sort_order' => 2, 'created_at' => $now, 'updated_at' => $now],
            ['id' => 4, 'code' => 'vice-director-services', 'name' => 'Wakil Direktur Pelayanan Penunjang, Kefarmasian, dan Pemasaran', 'parent_id' => 1, 'sort_order' => 3, 'created_at' => $now, 'updated_at' => $now],
            ['id' => 5, 'code' => 'head-medical-services', 'name' => 'Kepala Bidang Pelayanan Medik', 'parent_id' => 2, 'sort_order' => 1, 'created_at' => $now, 'updated_at' => $now],
            ['id' => 6, 'code' => 'head-nursing', 'name' => 'Kepala Bidang Keperawatan', 'parent_id' => 2, 'sort_order' => 2, 'created_at' => $now, 'updated_at' => $now],
            ['id' => 7, 'code' => 'head-education', 'name' => 'Kepala Bidang Pendidikan dan Diklat', 'parent_id' => 2, 'sort_order' => 3, 'created_at' => $now, 'updated_at' => $now],
            ['id' => 8, 'code' => 'head-hr', 'name' => 'Kepala Bidang SDM', 'parent_id' => 3, 'sort_order' => 1, 'created_at' => $now, 'updated_at' => $now],
            ['id' => 9, 'code' => 'head-finance', 'name' => 'Kepala Bidang Keuangan', 'parent_id' => 3, 'sort_order' => 2, 'created_at' => $now, 'updated_at' => $now],
            ['id' => 10, 'code' => 'head-general', 'name' => 'Kepala Bidang Umum', 'parent_id' => 3, 'sort_order' => 3, 'created_at' => $now, 'updated_at' => $now],
            ['id' => 11, 'code' => 'head-supporting-services', 'name' => 'Kepala Bidang Penunjang', 'parent_id' => 4, 'sort_order' => 1, 'created_at' => $now, 'updated_at' => $now],
            ['id' => 12, 'code' => 'head-pharmacy', 'name' => 'Kepala Bidang Kefarmasian', 'parent_id' => 4, 'sort_order' => 2, 'created_at' => $now, 'updated_at' => $now],
            ['id' => 13, 'code' => 'head-marketing', 'name' => 'Kepala Bidang Pemasaran', 'parent_id' => 4, 'sort_order' => 3, 'created_at' => $now, 'updated_at' => $now],
        ]);

        DB::table('direksi_profiles')->insert([
            ['id' => 1, 'position_id' => 1, 'nama_pejabat' => null, 'foto_profil' => null, 'deskripsi_singkat' => null, 'is_active' => true, 'created_at' => $now, 'updated_at' => $now],
            ['id' => 2, 'position_id' => 2, 'nama_pejabat' => null, 'foto_profil' => null, 'deskripsi_singkat' => null, 'is_active' => true, 'created_at' => $now, 'updated_at' => $now],
            ['id' => 3, 'position_id' => 3, 'nama_pejabat' => null, 'foto_profil' => null, 'deskripsi_singkat' => null, 'is_active' => true, 'created_at' => $now, 'updated_at' => $now],
            ['id' => 4, 'position_id' => 4, 'nama_pejabat' => null, 'foto_profil' => null, 'deskripsi_singkat' => null, 'is_active' => true, 'created_at' => $now, 'updated_at' => $now],
            ['id' => 5, 'position_id' => 5, 'nama_pejabat' => null, 'foto_profil' => null, 'deskripsi_singkat' => null, 'is_active' => true, 'created_at' => $now, 'updated_at' => $now],
            ['id' => 6, 'position_id' => 6, 'nama_pejabat' => null, 'foto_profil' => null, 'deskripsi_singkat' => null, 'is_active' => true, 'created_at' => $now, 'updated_at' => $now],
            ['id' => 7, 'position_id' => 7, 'nama_pejabat' => null, 'foto_profil' => null, 'deskripsi_singkat' => null, 'is_active' => true, 'created_at' => $now, 'updated_at' => $now],
            ['id' => 8, 'position_id' => 8, 'nama_pejabat' => null, 'foto_profil' => null, 'deskripsi_singkat' => null, 'is_active' => true, 'created_at' => $now, 'updated_at' => $now],
            ['id' => 9, 'position_id' => 9, 'nama_pejabat' => null, 'foto_profil' => null, 'deskripsi_singkat' => null, 'is_active' => true, 'created_at' => $now, 'updated_at' => $now],
            ['id' => 10, 'position_id' => 10, 'nama_pejabat' => null, 'foto_profil' => null, 'deskripsi_singkat' => null, 'is_active' => true, 'created_at' => $now, 'updated_at' => $now],
            ['id' => 11, 'position_id' => 11, 'nama_pejabat' => null, 'foto_profil' => null, 'deskripsi_singkat' => null, 'is_active' => true, 'created_at' => $now, 'updated_at' => $now],
            ['id' => 12, 'position_id' => 12, 'nama_pejabat' => null, 'foto_profil' => null, 'deskripsi_singkat' => null, 'is_active' => true, 'created_at' => $now, 'updated_at' => $now],
            ['id' => 13, 'position_id' => 13, 'nama_pejabat' => null, 'foto_profil' => null, 'deskripsi_singkat' => null, 'is_active' => true, 'created_at' => $now, 'updated_at' => $now],
        ]);
    }

    public function down(): void
    {
        Schema::dropIfExists('direksi_profiles');
        Schema::dropIfExists('positions');
    }
};
