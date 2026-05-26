<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Dokter;
use App\Models\JadwalDokter;

class JadwalDokterSeeder extends Seeder
{
    public function run(): void
    {
        $data = [
            // ==================== 1. THT ====================
            [
                "nama_dokter" => "dr. Renato Vevaldi Kuhuwael, Sp.THT-KL(K)",
                "poli" => "THT",
                "jadwal" => [
                    ["hari" => "Senin",  "jam" => "08.00-14.00"],
                    ["hari" => "Selasa", "jam" => "08.00-14.00"],
                    ["hari" => "Rabu",   "jam" => "11.35-14.00"],
                    ["hari" => "Kamis",  "jam" => "08.00-14.00"],
                    ["hari" => "Jumat",  "jam" => "11.35-14.00"],
                ],
            ],
            [
                "nama_dokter" => "dr. Mahdi Umar, Sp.THT-KL(K)",
                "poli" => "THT",
                "jadwal" => [
                    ["hari" => "Senin",  "jam" => "09.30-13.30"],
                    ["hari" => "Rabu",   "jam" => "09.30-13.30"],
                    ["hari" => "Jumat",  "jam" => "09.30-13.30"],
                ],
            ],
            [
                "nama_dokter" => "dr. Yarni Alimah, Sp.THT-KL(K)",
                "poli" => "THT",
                "jadwal" => [
                    ["hari" => "Selasa", "jam" => "08.00-14.00"],
                    ["hari" => "Rabu",   "jam" => "08.00-14.00"],
                    ["hari" => "Jumat",  "jam" => "08.00-14.00"],
                    ["hari" => "Sabtu",  "jam" => "08.00-14.00"],
                ],
            ],
 
            // ==================== 2. SARAF ====================
            [
                "nama_dokter" => "Dr. dr. Hj. Nadra Maricar, Sp.N(K)",
                "poli" => "Saraf",
                "jadwal" => [
                    ["hari" => "Senin",  "jam" => "08.00-14.00"],
                    ["hari" => "Selasa", "jam" => "08.00-14.00"],
                    ["hari" => "Kamis",  "jam" => "08.00-14.00"],
                ],
            ],
            [
                "nama_dokter" => "dr. Lilian Triana Limoa, Sp.N(K)",
                "poli" => "Saraf",
                "jadwal" => [
                    ["hari" => "Rabu", "jam" => "08.00-12.00"],
                ],
            ],
            [
                "nama_dokter" => "dr. Melfa Irfaliza, Sp.N",
                "poli" => "Saraf",
                "jadwal" => [
                    ["hari" => "Jumat", "jam" => "08.00-14.00"],
                    ["hari" => "Sabtu", "jam" => "08.00-12.00"],
                ],
            ],
 
            // ==================== 3. PENYAKIT DALAM ====================
            [
                "nama_dokter" => "dr. Rusman Rahman, Sp.PD",
                "poli" => "Penyakit Dalam",
                "jadwal" => [
                    ["hari" => "Senin",  "jam" => "08.00-11.00"],
                    ["hari" => "Selasa", "jam" => "08.00-11.00"],
                ],
            ],
            [
                "nama_dokter" => "dr. Resha Dermawansyah Rusman, Sp.PD",
                "poli" => "Penyakit Dalam",
                "jadwal" => [
                    ["hari" => "Senin", "jam" => "11.05-13.00"],
                ],
            ],
            [
                "nama_dokter" => "dr. Endy Adnan, Sp.PD, Ph.D",
                "poli" => "Penyakit Dalam",
                "jadwal" => [
                    ["hari" => "Rabu",  "jam" => "08.00-13.00"],
                    ["hari" => "Kamis", "jam" => "08.00-12.00"],
                ],
            ],
            [
                "nama_dokter" => "dr. Khadijah Khairunnisa Hasyim, Sp.PD",
                "poli" => "Penyakit Dalam",
                "jadwal" => [
                    ["hari" => "Jumat", "jam" => "08.00-13.00"],
                ],
            ],
            [
                "nama_dokter" => "dr. Pratiwi Qur'anita Meagaung, Sp.PD",
                "poli" => "Penyakit Dalam",
                "jadwal" => [
                    ["hari" => "Sabtu", "jam" => "09.00-11.00"],
                ],
            ],
 
            // ==================== 3. PARU ====================
            [
                "nama_dokter" => "dr. Harry Akza Putrawan, Sp.P(K)",
                "poli" => "Paru",
                "jadwal" => [
                    ["hari" => "Senin",  "jam" => "08.00-11.00"],
                    ["hari" => "Rabu",   "jam" => "08.00-12.00"],
                    ["hari" => "Sabtu",  "jam" => "12.35-14.00"],
                ],
            ],
            [
                "nama_dokter" => "Dr. Nur Ahmad Tabri, Sp.PD K-P, Sp.P(K)",
                "poli" => "Paru",
                "jadwal" => [
                    ["hari" => "Selasa", "jam" => "08.00-13.00"],
                    ["hari" => "Kamis",  "jam" => "08.00-13.00"],
                    ["hari" => "Sabtu",  "jam" => "08.00-13.00"],
                ],
            ],
            [
                "nama_dokter" => "dr. Kresentia Anita Raniputri, Sp.P",
                "poli" => "Paru",
                "jadwal" => [
                    ["hari" => "Jumat", "jam" => "08.00-10.30"],
                    ["hari" => "Sabtu", "jam" => "10.35-12.50"],
                ],
            ],
 
            // ==================== 4. BEDAH DIGESTIVE ====================
            [
                "nama_dokter" => "dr. Sulfikar, Sp.B Subsp.BD(K)",
                "poli" => "Bedah Digestive",
                "jadwal" => [
                    ["hari" => "Kamis", "jam" => "09.00-12.00"],
                    ["hari" => "Jumat", "jam" => "09.00-12.00"],
                ],
            ],
 
            // ==================== 5. OBGYN ====================
            [
                "nama_dokter" => "Dr. dr. Hj. Fatmawaty Madya, Sp.OG(K)",
                "poli" => "Obgyn",
                "jadwal" => [
                    ["hari" => "Senin", "jam" => "08.00-13.00"],
                ],
            ],
            [
                "nama_dokter" => "dr. Hj. Ajardiana Idrus, Sp.OG(K)",
                "poli" => "Obgyn",
                "jadwal" => [
                    ["hari" => "Selasa", "jam" => "08.00-13.00"],
                ],
            ],
            [
                "nama_dokter" => "dr. Sari Ifdiana Jalal, M.Kes, Sp.OG",
                "poli" => "Obgyn",
                "jadwal" => [
                    ["hari" => "Rabu", "jam" => "09.00-13.00"],
                ],
            ],
            [
                "nama_dokter" => "dr. Dachlia Sri Sakti, M.Kes, Sp.OG",
                "poli" => "Obgyn",
                "jadwal" => [
                    ["hari" => "Kamis", "jam" => "09.00-13.00"],
                ],
            ],
            [
                "nama_dokter" => "dr. Witono Gunawan, Sp.OG",
                "poli" => "Obgyn",
                "jadwal" => [
                    ["hari" => "Jumat", "jam" => "08.00-14.00"],
                ],
            ],
            // Sabtu bergantian (tidak disebutkan nama dokter spesifik)
            // ["hari" => "Sabtu", "jam" => "09.00-14.00"] — bergantian
 
            // ==================== 6. BEDAH ORTOPEDI ====================
            [
                "nama_dokter" => "Dr. dr. Ariyanto Arief, Sp.OT, Subsp.C.O(K)",
                "poli" => "Bedah Ortopedi",
                "jadwal" => [
                    ["hari" => "Senin",  "jam" => "09.00-11.00"],
                    ["hari" => "Selasa", "jam" => "09.00-12.00"],
                    ["hari" => "Jumat",  "jam" => "09.00-12.00"],
                ],
            ],
            [
                "nama_dokter" => "Dr. dr. Hendrian Chaniago, M.Kes, Sp.OT, Subsp.PL(K), FICS, FISQua",
                "poli" => "Bedah Ortopedi",
                "jadwal" => [
                    ["hari" => "Kamis", "jam" => "11.00-13.00"],
                    ["hari" => "Sabtu", "jam" => "10.00-11.00"],
                ],
            ],
 
            // ==================== 7. MATA ====================
            [
                "nama_dokter" => "dr. Diah Tantri Darkutni, Sp.M",
                "poli" => "Mata",
                "jadwal" => [
                    ["hari" => "Senin",  "jam" => "09.00-12.00"],
                    ["hari" => "Kamis",  "jam" => "09.00-12.00"],
                    ["hari" => "Jumat",  "jam" => "09.00-12.00"],
                ],
            ],
            [
                "nama_dokter" => "dr. Aisyah Muhlisah, M.Kes, Sp.M",
                "poli" => "Mata",
                "jadwal" => [
                    ["hari" => "Selasa", "jam" => "09.00-12.00"],
                    ["hari" => "Rabu",   "jam" => "09.00-12.00"],
                ],
            ],
 
            // ==================== 8. KULIT & KELAMIN ====================
            [
                "nama_dokter" => "dr. Nurul Rumila Roem, M.Kes, Sp.DV",
                "poli" => "Kulit & Kelamin",
                "jadwal" => [
                    ["hari" => "Senin",  "jam" => "09.00-13.30"],
                    ["hari" => "Rabu",   "jam" => "09.00-13.30"],
                    ["hari" => "Jumat",  "jam" => "09.00-13.30"],
                ],
            ],
            [
                "nama_dokter" => "dr. Solecha, Sp.DV",
                "poli" => "Kulit & Kelamin",
                "jadwal" => [
                    ["hari" => "Selasa", "jam" => "09.00-12.30"],
                    ["hari" => "Kamis",  "jam" => "09.00-12.30"],
                    ["hari" => "Sabtu",  "jam" => "09.00-12.30"],
                ],
            ],
 
            // ==================== 10. JANTUNG & PEMBULUH DARAH ====================
            [
                "nama_dokter" => "dr. Amelia Arindanie Syahri, Sp.JP, FIHA",
                "poli" => "Jantung & Pembuluh Darah",
                "jadwal" => [
                    ["hari" => "Senin", "jam" => "09.15-12.30"],
                    ["hari" => "Rabu",  "jam" => "09.15-12.30"],
                ],
            ],
            [
                "nama_dokter" => "dr. Andi Muhammad Reis R. Saiby, Sp.JP",
                "poli" => "Jantung & Pembuluh Darah",
                "jadwal" => [
                    ["hari" => "Selasa", "jam" => "09.00-12.30"],
                    ["hari" => "Jumat",  "jam" => "09.00-12.30"],
                ],
            ],
 
            // ==================== 11. ANAK ====================
            [
                "nama_dokter" => "dr. Yati Aisyah Arifin, Sp.A",
                "poli" => "Anak",
                "jadwal" => [
                    ["hari" => "Senin",  "jam" => "08.30-14.00"],
                    ["hari" => "Selasa", "jam" => "08.30-14.00"],
                    ["hari" => "Jumat",  "jam" => "08.30-13.00"],
                ],
            ],
            [
                "nama_dokter" => "dr. Rizka Anastasia, Sp.A",
                "poli" => "Anak",
                "jadwal" => [
                    ["hari" => "Rabu",   "jam" => "08.30-14.00"],
                    ["hari" => "Kamis",  "jam" => "08.30-14.00"],
                    ["hari" => "Sabtu",  "jam" => "08.30-13.00"],
                ],
            ],
 
            // ==================== 12. BEDAH VASKULER ====================
            [
                "nama_dokter" => "dr. Haidir Bima, Sp.B, Subsp.BEV(K)",
                "poli" => "Bedah Vaskuler",
                "jadwal" => [
                    ["hari" => "Senin", "jam" => "08.00-14.00"],
                    ["hari" => "Kamis", "jam" => "08.00-14.00"],
                ],
            ],
 
            // ==================== 13. PEDODONTIS ====================
            [
                "nama_dokter" => "dr. Maya Rosita, Sp.KGA",
                "poli" => "Pedodontis",
                "jadwal" => [
                    ["hari" => "Selasa", "jam" => "09.00-12.00"],
                    ["hari" => "Rabu",   "jam" => "09.00-12.00"],
                    ["hari" => "Kamis",  "jam" => "09.00-12.00"],
                    ["hari" => "Jumat",  "jam" => "09.00-12.00"],
                ],
            ],
 
            // ==================== 14. GIGI PERIODONTI ====================
            [
                "nama_dokter" => "drg. Firman Salam, Sp.Perio",
                "poli" => "Gigi Periodonti",
                "jadwal" => [
                    ["hari" => "Senin",  "jam" => "08.00-14.00"],
                    ["hari" => "Selasa", "jam" => "08.00-14.00"],
                    ["hari" => "Rabu",   "jam" => "08.00-14.00"],
                    ["hari" => "Kamis",  "jam" => "08.00-14.00"],
                    ["hari" => "Jumat",  "jam" => "08.00-14.00"],
                    ["hari" => "Sabtu",  "jam" => "08.00-14.00"],
                ],
            ],
 
            // ==================== 15. GIGI ENDODONSI ====================
            [
                "nama_dokter" => "drg. Eriana Sutono, Sp.KG",
                "poli" => "Gigi Endodonsi",
                "jadwal" => [
                    ["hari" => "Senin",  "jam" => "09.00-12.30"],
                    ["hari" => "Selasa", "jam" => "09.00-12.30"],
                    ["hari" => "Rabu",   "jam" => "09.00-12.30"],
                    ["hari" => "Kamis",  "jam" => "09.00-12.30"],
                    ["hari" => "Jumat",  "jam" => "09.00-12.30"],
                ],
            ],
 
            // ==================== 16. PROTHODONTI ====================
            [
                "nama_dokter" => "drg. Armawati Arafi, Sp.Pros",
                "poli" => "Prothodonti",
                "jadwal" => [
                    ["hari" => "Jumat", "jam" => "12.05-14.00"],
                ],
            ],
 
            // ==================== 17. GIZI ====================
            [
                "nama_dokter" => "dr. Hj. Risma Irnawati, Sp.GK",
                "poli" => "Gizi",
                "jadwal" => [
                    ["hari" => "Senin",  "jam" => "08.00-14.00"],
                    ["hari" => "Rabu",   "jam" => "08.00-14.00"],
                    ["hari" => "Jumat",  "jam" => "08.00-14.00"],
                    ["hari" => "Sabtu",  "jam" => "12.00-14.00"],
                ],
            ],
            [
                "nama_dokter" => "dr. Sri Selvia Sharif, M.Kes, Sp.GK",
                "poli" => "Gizi",
                "jadwal" => [
                    ["hari" => "Selasa", "jam" => "11.30-13.00"],
                    ["hari" => "Kamis",  "jam" => "08.00-10.00"],
                ],
            ],
 
            // ==================== 18. BEDAH UMUM ====================
            [
                "nama_dokter" => "dr. Baharuddin, Sp.B",
                "poli" => "Bedah Umum",
                "jadwal" => [
                    ["hari" => "Senin",  "jam" => "10.00-12.00"],
                    ["hari" => "Selasa", "jam" => "10.00-12.00"],
                    ["hari" => "Jumat",  "jam" => "08.00-12.00"],
                ],
            ],
            [
                "nama_dokter" => "dr. Muhammad Abduh, Sp.B",
                "poli" => "Bedah Umum",
                "jadwal" => [
                    ["hari" => "Rabu",   "jam" => "08.00-09.55"],
                    ["hari" => "Kamis",  "jam" => "08.00-12.00"],
                    ["hari" => "Sabtu",  "jam" => "08.00-12.00"],
                ],
            ],
 
            // ==================== 19. JIWA ====================
            [
                "nama_dokter" => "dr. Arvita R. Akbar, Sp.KJ",
                "poli" => "Jiwa",
                "jadwal" => [
                    ["hari" => "Senin",  "jam" => "08.00-14.00"],
                    ["hari" => "Rabu",   "jam" => "08.00-14.00"],
                    ["hari" => "Jumat",  "jam" => "08.00-14.00"],
                ],
            ],
            [
                "nama_dokter" => "dr. Andi Tenri Padad, M.Med.Ed, Sp.KJ",
                "poli" => "Jiwa",
                "jadwal" => [
                    ["hari" => "Selasa", "jam" => "08.00-14.00"],
                    ["hari" => "Kamis",  "jam" => "08.00-14.00"],
                ],
            ],
            [
                "nama_dokter" => "dr. Masita R. Akbar, Sp.KJ",
                "poli" => "Jiwa",
                "jadwal" => [
                    ["hari" => "Sabtu", "jam" => "08.00-14.00"],
                ],
            ],
        ];

        // Ensure there is an admin to satisfy foreign key constraints
        $adminId = DB::table('admin')->value('id_admin');
        if (! $adminId) {
            $adminId = DB::table('admin')->insertGetId([
                'username' => 'seed-admin',
                'password' => bcrypt('password'),
                'nama_admin' => 'Seeder Admin',
            ]);
            $this->command->info("Created admin with id {$adminId} to associate schedules.");
        }

        foreach ($data as $dok) {
            $name = $dok['nama_dokter'];
            $poli = $dok['poli'];

            $dokter = Dokter::where('nama_dokter', $name)->first();

            if (! $dokter) {
                $this->command->warn("Dokter not found: {$name} — skipping.");
                continue;
            }

            foreach ($dok['jadwal'] as $j) {
                $hari = $j['hari'];
                $range = $j['jam'];
                $parts = explode('-', $range);
                if (count($parts) !== 2) {
                    $this->command->warn("Invalid jam format for {$name} on {$hari}: {$range}");
                    continue;
                }

                $start = str_replace('.', ':', trim($parts[0]));
                $end = str_replace('.', ':', trim($parts[1]));

                $jam_mulai = date('H:i:s', strtotime($start));
                $jam_selesai = date('H:i:s', strtotime($end));

                JadwalDokter::create([
                    'id_dokter' => $dokter->id_dokter,
                    'hari' => $hari,
                    'jam_mulai' => $jam_mulai,
                    'jam_selesai' => $jam_selesai,
                    'poli' => $poli,
                    'id_admin' => $dokter->id_admin,
                ]);
                $this->command->info("Inserted schedule for {$name} — {$hari} {$jam_mulai}-{$jam_selesai}");
            }
        }
    }
}
