<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class HospitalDataSeeder extends Seeder
{
    public function run(): void
    {
        $admin1Id = DB::table('admin')->insertGetId([
            'username' => 'admin',
            'password' => Hash::make('123'),
            'nama_admin' => 'Admin Utama',
        ]);

        $admin2Id = DB::table('admin')->insertGetId([
            'username' => 'admin_operasional',
            'password' => Hash::make('password123'),
            'nama_admin' => 'Admin Operasional',
        ]);

        $dokter1Id = DB::table('dokter')->insertGetId([
            'nama_dokter' => 'dr. Andi Pratama',
            'spesialis' => 'Penyakit Dalam',
            'foto_dokter' => 'dokter/andi-pratama.jpg',
            'id_admin' => $admin1Id,
        ]);

        $dokter2Id = DB::table('dokter')->insertGetId([
            'nama_dokter' => 'dr. Siti Lestari',
            'spesialis' => 'Anak',
            'foto_dokter' => 'dokter/siti-lestari.jpg',
            'id_admin' => $admin2Id,
        ]);

        DB::table('jadwal_dokter')->insert([
            [
                'id_dokter' => $dokter1Id,
                'hari' => 'Senin',
                'jam_mulai' => '08:00:00',
                'jam_selesai' => '12:00:00',
                'poli' => 'Poli Penyakit Dalam',
                'id_admin' => $admin1Id,
            ],
            [
                'id_dokter' => $dokter2Id,
                'hari' => 'Selasa',
                'jam_mulai' => '09:00:00',
                'jam_selesai' => '13:00:00',
                'poli' => 'Poli Anak',
                'id_admin' => $admin2Id,
            ],
        ]);

        DB::table('artikel')->insert([
            [
                'judul' => 'Pentingnya Cek Kesehatan Rutin',
                'isi_artikel' => 'Pemeriksaan rutin membantu deteksi dini berbagai penyakit.',
                'gambar_artikel' => 'artikel/cek-rutin.jpg',
                'kategori' => 'Edukasi',
                'tanggal' => '2026-04-01',
                'id_admin' => $admin1Id,
            ],
            [
                'judul' => 'Tips Menjaga Imunitas Keluarga',
                'isi_artikel' => 'Imunitas dapat dijaga dengan tidur cukup, nutrisi baik, dan olahraga.',
                'gambar_artikel' => 'artikel/imunitas-keluarga.jpg',
                'kategori' => 'Kesehatan',
                'tanggal' => '2026-04-02',
                'id_admin' => $admin2Id,
            ],
        ]);

        DB::table('layanan')->insert([
            [
                'nama_layanan' => 'Pemeriksaan Umum',
                'kategori' => 'Rawat Jalan',
                'deskripsi' => 'Layanan pemeriksaan kondisi kesehatan umum pasien.',
                'gambar_layanan' => 'layanan/pemeriksaan-umum.jpg',
                'id_admin' => $admin1Id,
            ],
            [
                'nama_layanan' => 'Vaksinasi Anak',
                'kategori' => 'Imunisasi',
                'deskripsi' => 'Layanan vaksinasi sesuai jadwal imunisasi anak.',
                'gambar_layanan' => 'layanan/vaksinasi-anak.jpg',
                'id_admin' => $admin2Id,
            ],
        ]);

        DB::table('banner')->insert([
            [
                'judul' => 'Promo Medical Check Up',
                'gambar_banner' => 'banner/mcu-promo.jpg',
                'deskripsi' => 'Diskon 20% untuk paket medical check up selama April.',
                'id_admin' => $admin1Id,
            ],
            [
                'judul' => 'Klinik Anak Buka Setiap Hari',
                'gambar_banner' => 'banner/klinik-anak.jpg',
                'deskripsi' => 'Layanan klinik anak tersedia setiap hari pukul 08.00 - 20.00.',
                'id_admin' => $admin2Id,
            ],
        ]);

        DB::table('kontak')->insert([
            [
                'telepon' => '0211234567',
                'email' => 'info@webrsudhaji.local',
                'alamat' => 'Jl. Sehat Selalu No. 10, Jakarta',
                'whatsapp' => '081234567890',
                'link_maps' => 'https://maps.google.com/?q=rsudhaji',
                'id_admin' => $admin1Id,
            ],
            [
                'telepon' => '0217654321',
                'email' => 'cs@webrsudhaji.local',
                'alamat' => 'Jl. Sehat Selalu No. 10, Jakarta',
                'whatsapp' => '089876543210',
                'link_maps' => 'https://maps.google.com/?q=rsudhaji+jakarta',
                'id_admin' => $admin2Id,
            ],
        ]);
    }
}
