<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('admin', function (Blueprint $table) {
            $table->increments('id_admin');
            $table->string('username', 255)->unique();
            $table->string('password', 255);
            $table->string('nama_admin', 255);
        });

        Schema::create('dokter', function (Blueprint $table) {
            $table->increments('id_dokter');
            $table->string('nama_dokter', 255);
            $table->string('spesialis', 255);
            $table->string('foto_dokter', 255)->nullable();
            $table->unsignedInteger('id_admin');

            $table->foreign('id_admin')->references('id_admin')->on('admin')->onDelete('cascade');
        });

        Schema::create('jadwal_dokter', function (Blueprint $table) {
            $table->increments('id_jadwal');
            $table->unsignedInteger('id_dokter');
            $table->string('hari', 255);
            $table->time('jam_mulai');
            $table->time('jam_selesai');
            $table->string('poli', 255);
            $table->unsignedInteger('id_admin');

            $table->foreign('id_dokter')->references('id_dokter')->on('dokter')->onDelete('cascade');
            $table->foreign('id_admin')->references('id_admin')->on('admin')->onDelete('cascade');
        });

        Schema::create('artikel', function (Blueprint $table) {
            $table->increments('id_artikel');
            $table->string('judul', 255);
            $table->text('isi_artikel');
            $table->string('gambar_artikel', 255)->nullable();
            $table->string('kategori', 255);
            $table->date('tanggal');
            $table->unsignedInteger('id_admin');

            $table->foreign('id_admin')->references('id_admin')->on('admin')->onDelete('cascade');
        });

        Schema::create('layanan', function (Blueprint $table) {
            $table->increments('id_layanan');
            $table->string('nama_layanan', 255);
            $table->string('kategori', 255);
            $table->text('deskripsi');
            $table->string('gambar_layanan', 255)->nullable();
            $table->unsignedInteger('id_admin');

            $table->foreign('id_admin')->references('id_admin')->on('admin')->onDelete('cascade');
        });

        Schema::create('banner', function (Blueprint $table) {
            $table->increments('id_banner');
            $table->string('judul', 255);
            $table->string('gambar_banner', 255)->nullable();
            $table->text('deskripsi')->nullable();
            $table->unsignedInteger('id_admin');

            $table->foreign('id_admin')->references('id_admin')->on('admin')->onDelete('cascade');
        });

        Schema::create('kontak', function (Blueprint $table) {
            $table->increments('id_kontak');
            $table->string('telepon', 50);
            $table->string('email', 255);
            $table->text('alamat');
            $table->string('whatsapp', 50)->nullable();
            $table->string('link_maps', 255)->nullable();
            $table->unsignedInteger('id_admin');

            $table->foreign('id_admin')->references('id_admin')->on('admin')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('kontak');
        Schema::dropIfExists('banner');
        Schema::dropIfExists('layanan');
        Schema::dropIfExists('artikel');
        Schema::dropIfExists('jadwal_dokter');
        Schema::dropIfExists('dokter');
        Schema::dropIfExists('admin');
    }
};
