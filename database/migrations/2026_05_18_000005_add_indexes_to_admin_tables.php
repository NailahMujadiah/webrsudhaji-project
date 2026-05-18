<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Add indexes untuk kolom id_admin di semua tabel yang frequently filtered
        Schema::table('dokter', function (Blueprint $table) {
            $table->index('id_admin');
        });

        Schema::table('jadwal_dokter', function (Blueprint $table) {
            $table->index('id_admin');
            $table->index('id_dokter');
        });

        Schema::table('artikel', function (Blueprint $table) {
            $table->index('id_admin');
        });

        Schema::table('layanan', function (Blueprint $table) {
            $table->index('id_admin');
        });

        Schema::table('banner', function (Blueprint $table) {
            $table->index('id_admin');
        });

        Schema::table('kontak', function (Blueprint $table) {
            $table->index('id_admin');
        });
    }

    public function down(): void
    {
        Schema::table('dokter', function (Blueprint $table) {
            $table->dropIndex(['id_admin']);
        });

        Schema::table('jadwal_dokter', function (Blueprint $table) {
            $table->dropIndex(['id_admin']);
            $table->dropIndex(['id_dokter']);
        });

        Schema::table('artikel', function (Blueprint $table) {
            $table->dropIndex(['id_admin']);
        });

        Schema::table('layanan', function (Blueprint $table) {
            $table->dropIndex(['id_admin']);
        });

        Schema::table('banner', function (Blueprint $table) {
            $table->dropIndex(['id_admin']);
        });

        Schema::table('kontak', function (Blueprint $table) {
            $table->dropIndex(['id_admin']);
        });
    }
};
