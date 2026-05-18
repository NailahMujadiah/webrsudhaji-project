<?php

namespace Database\Seeders;

use App\Models\Dokter;
use Illuminate\Database\Seeder;

class DokterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $dokters = [
            [
                "nama_dokter" => "dr. Renato Vevaldi Kuhuwael, Sp.THT-KL(K)",
                "spesialis" => "THT"
            ],
            [
                "nama_dokter" => "dr. Mahdi Umar, Sp.THT-KL(K)",
                "spesialis" => "THT"
            ],
            [
                "nama_dokter" => "dr. Yarni Alimah, Sp.KL(K)",
                "spesialis" => "THT"
            ],
            [
                "nama_dokter" => "dr.dr. Hj. Nadramaricar, Sp.N(K)",
                "spesialis" => "Saraf"
            ],
            [
                "nama_dokter" => "dr. Lilian Triana Limoa, Sp.N(K)",
                "spesialis" => "Saraf"
            ],
            [
                "nama_dokter" => "dr. Melfa Irfaliza, Sp.N",
                "spesialis" => "Saraf"
            ],
            [
                "nama_dokter" => "dr. Rusman Rahman, Sp.PD",
                "spesialis" => "Penyakit Dalam"
            ],
            [
                "nama_dokter" => "dr. Resha Dermawansyah Rusman, Sp.PD",
                "spesialis" => "Penyakit Dalam"
            ],
            [
                "nama_dokter" => "dr. Endy Adnan, Sp.PD, Ph.D",
                "spesialis" => "Penyakit Dalam"
            ],
            [
                "nama_dokter" => "dr. Khadijah Khairunnisa Hasyim, Sp.PD",
                "spesialis" => "Penyakit Dalam"
            ],
            [
                "nama_dokter" => "dr. Pratiwi Qur'anita Meagaung, Sp.PD",
                "spesialis" => "Penyakit Dalam"
            ],
            [
                "nama_dokter" => "dr. Harry Akza Putrawan, Sp.P(K)",
                "spesialis" => "Paru"
            ],
            [
                "nama_dokter" => "dr. Nur Ahmad Tabri, Sp.PD K-P, Sp.P(K)",
                "spesialis" => "Paru"
            ],
            [
                "nama_dokter" => "dr. Kresentia Anita Raniputri, Sp.P",
                "spesialis" => "Paru"
            ],
            [
                "nama_dokter" => "dr. Sulfikar, Sp.B Subsp. BD(K) ALFO-K",
                "spesialis" => "Bedah Digestive"
            ],
            [
                "nama_dokter" => "Dr. dr. Hj. Fatmawaty Madya, Sp.OG(K)",
                "spesialis" => "OBGYN"
            ],
            [
                "nama_dokter" => "dr. Hj. Ajardiana Idrus, Sp.OG(K)",
                "spesialis" => "OBGYN"
            ],
            [
                "nama_dokter" => "dr. Sari Ifdiana Jalal, M.Kes, Sp.OG",
                "spesialis" => "OBGYN"
            ],
            [
                "nama_dokter" => "dr. Dachlia Sri Sakti, M.Kes, Sp.OG",
                "spesialis" => "OBGYN"
            ],
            [
                "nama_dokter" => "dr. Witono Gunawan, Sp.OG",
                "spesialis" => "OBGYN"
            ],
            [
                "nama_dokter" => "Dr. dr. Ariyanto Arief, Sp.OT., Subsp. C.O(K)",
                "spesialis" => "Bedah Ortopedi"
            ],
            [
                "nama_dokter" => "Dr. dr. Hendrian Chaniago, M.Kes., Sp.OT., Subsp. PL(K), FICS, FISQua",
                "spesialis" => "Bedah Ortopedi"
            ],
            [
                "nama_dokter" => "dr. Diah Tantri Darkutni, Sp.M",
                "spesialis" => "Mata"
            ],
            [
                "nama_dokter" => "dr. Aisyah Muhlisah, M.Kes, Sp.M",
                "spesialis" => "Mata"
            ],
            [
                "nama_dokter" => "dr. Nurul Rumila Roem, M.Kes, Sp.DV",
                "spesialis" => "Kulit & Kelamin"
            ],
            [
                "nama_dokter" => "dr. Solecha, Sp.DV",
                "spesialis" => "Kulit & Kelamin"
            ],
            [
                "nama_dokter" => "dr. Amelia Arindanie Syahri, Sp.JP, FIHA",
                "spesialis" => "Jantung & Pembuluh Darah"
            ],
            [
                "nama_dokter" => "dr. Andi Muhammad Reis R. Saiby, Sp.JP",
                "spesialis" => "Jantung & Pembuluh Darah"
            ],
            [
                "nama_dokter" => "dr. Yati Aisyah Arifin, Sp.A",
                "spesialis" => "Anak"
            ],
            [
                "nama_dokter" => "dr. Rizka Anastasia, Sp.A",
                "spesialis" => "Anak"
            ],
            [
                "nama_dokter" => "dr. Haidir Bima, Sp.B, Subsp. BEV(K)",
                "spesialis" => "Bedah Vaskuler"
            ],
            [
                "nama_dokter" => "dr. Maya Rosita, Sp.KGA",
                "spesialis" => "Pedodontis"
            ],
            [
                "nama_dokter" => "drg. Firman Salam, Sp.Perio",
                "spesialis" => "Gigi Periodonti"
            ],
            [
                "nama_dokter" => "drg. Eriana Sutono, Sp.KG",
                "spesialis" => "Gigi Endodonsi"
            ],
            [
                "nama_dokter" => "drg. Armawati Arafi, Sp.Pros",
                "spesialis" => "Prothodonti"
            ],
            [
                "nama_dokter" => "dr. Hj. Risma Irnawati, Sp.GK",
                "spesialis" => "Gizi"
            ],
            [
                "nama_dokter" => "dr. Sri Selvia Sharif, M.Kes, Sp.GK",
                "spesialis" => "Gizi"
            ],
            [
                "nama_dokter" => "dr. Baharuddin, Sp.B",
                "spesialis" => "Bedah Umum"
            ],
            [
                "nama_dokter" => "dr. Muhammad Abduh, Sp.B",
                "spesialis" => "Bedah Umum"
            ],
            [
                "nama_dokter" => "dr. Arvita R. Akbar, Sp.KJ",
                "spesialis" => "Jiwa"
            ],
            [
                "nama_dokter" => "dr. Andi Tenri Padad, M.Med.Ed, Sp.KJ",
                "spesialis" => "Jiwa"
            ],
            [
                "nama_dokter" => "dr. Masita R. Akbar, Sp.KJ",
                "spesialis" => "Jiwa"
            ]
        ];

        // Insert all doctors with id_admin = 1 (the main admin)
        // Adjust this if you need a different admin account
        foreach ($dokters as $dokter) {
            Dokter::updateOrCreate(
                ['nama_dokter' => $dokter['nama_dokter']],
                [
                    'spesialis' => $dokter['spesialis'],
                    'foto_dokter' => 'images/editable-doctor-vector.jpg', // Default doctor image
                    'id_admin' => 1, // Using the main admin account
                ]
            );
        }

        $this->command->info('Inserted ' . count($dokters) . ' doctors into database');
    }
}
