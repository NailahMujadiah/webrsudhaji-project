import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { useState } from 'react';

export default function beranda() {
    return (
        <>
            <Head title="Selamat Datang - RSUD Haji Makassar" />

            {/* 1. Navbar Otomatis di Paling Atas */}
            <Navbar />

            {/* 2. Konten Utama */}
            <main className="min-h-screen bg-slate-50 selection:bg-green-500 selection:text-white">
                <section
                    className="relative bg-cover bg-center bg-no-repeat px-6 py-20 text-left lg:py-32"
                    style={{ backgroundImage: "url('/images/rsudhaji.jpg')" }}
                >
                    {/* Overlay gelap */}
                    <div className="absolute inset-0 bg-black/50" />

                    {/* Konten */}
                    <div className="relative z-10 max-w-2xl pl-6 lg:pl-20">
                        <h1 className="text-4lg mb-6 font-extrabold tracking-tight text-white lg:text-6xl">
                            Selamat Datang di <br />
                            <span className="text-green-400">
                                RSUD HAJI MAKASSAR
                            </span>
                        </h1>
                        <p className="text-lg leading-relaxed text-slate-200 lg:text-xl">
                            Silakan pilih menu di bawah ini untuk memulai
                            operasional atau melihat informasi layanan rumah
                            sakit kami.
                        </p>
                    </div>
                </section>

                {/* Layanan Unggulan */}
                <section className="bg-white px-6 py-16 lg:px-20">
                    <h2 className="mb-10 text-center text-3xl font-bold text-slate-800">
                        Layanan Unggulan
                    </h2>
                    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
                        {[
                            {
                                img: '/images/bronscopy.png',
                                title: 'Pemeriksaan Bronchoscopy',
                            },
                            {
                                img: '/images/brainstem.png',
                                title: 'Pemeriksaan Brainstem',
                            },
                            {
                                img: '/images/medicalbody.png',
                                title: 'Pemeriksaan Medical Body',
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-md"
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="h-48 w-full object-cover"
                                />
                                <div className="p-5">
                                    <h3 className="mb-2 text-lg font-bold text-green-600">
                                        {item.title}
                                    </h3>
                                    <p className="mb-4 text-sm leading-relaxed text-slate-500">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua.
                                    </p>
                                    <a
                                        href="#"
                                        className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-green-600"
                                    >
                                        Read More <span>›</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Fasilitas dan Layanan */}
                <section className="bg-[#BAEBD4] px-6 py-16 lg:px-20">
                    <div className="mx-auto flex max-w-6xl flex-col items-start gap-12 lg:flex-row">
                        {/* Kiri - Accordion */}
                        <div className="flex-1">
                            <h2 className="mb-2 text-3xl font-bold text-slate-800">
                                Fasilitas dan Layanan
                            </h2>
                            <p className="mb-6 text-sm text-slate-500">
                                Dalam upaya meningkatkan kualitas layanan, RSUD
                                Haji memiliki fasilitas rawat inap, ICU dan UGD,
                                laboratorium, perpustakaan dan fasilitas
                                lainnya.
                            </p>

                            {/* Accordion Item Aktif */}
                            <div className="border-b border-slate-300">
                                <div className="flex cursor-pointer items-center justify-between py-4">
                                    <span className="font-bold text-slate-800">
                                        Pelayanan Rawat Inap
                                    </span>
                                    <span className="text-xl text-green-600">
                                        ∨
                                    </span>
                                </div>
                                <p className="pb-4 text-sm text-slate-500">
                                    Kami akan memberikan pengobatan dan
                                    perawatan dengan suasana senyaman mungkin
                                    oleh tenaga profesional
                                </p>
                            </div>

                            {/* Accordion Item Lain */}
                            {[
                                'IGD & Rawat Intensif',
                                'Fasilitas Penunjang',
                                'Sarana & Prasarana',
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex cursor-pointer items-center justify-between border-b border-slate-300 py-4 hover:text-green-600"
                                >
                                    <span className="font-medium text-slate-700">
                                        {item}
                                    </span>
                                    <span className="text-slate-400">›</span>
                                </div>
                            ))}

                            {/* Tombol */}
                            <div className="mt-8">
                                <a
                                    href="/layanan-fasilitas"
                                    className="inline-flex items-center gap-2 rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
                                >
                                    Lihat Semua Fasilitas dan Layanan{' '}
                                    <span>→</span>
                                </a>
                            </div>
                        </div>

                        {/* Kanan - Gambar */}
                        <div className="flex-1">
                            <img
                                src="/images/fasilitas.jpg"
                                alt="Fasilitas RSUD Haji"
                                className="h-80 w-full rounded-2xl object-cover shadow-lg lg:h-full"
                            />
                        </div>
                    </div>
                </section>

                {/* Grid Menu Utama */}
                <section className="mx-auto max-w-7xl px-6 pb-32">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {/* Card Pendaftaran */}
                        <div className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition duration-300 hover:shadow-xl">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                                📝
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-slate-800">
                                Pendaftaran Pasien
                            </h3>
                            <p className="mb-6 text-sm leading-relaxed text-slate-500">
                                Input data pasien baru atau cek status antrean
                                pendaftaran hari ini.
                            </p>
                            {/* <Link href={route('register')} className="text-green-600 font-bold text-sm hover:text-green-700 flex items-center gap-2">
                                Mulai Daftar <span>&rarr;</span>
                            </Link> */}
                        </div>

                        {/* Card Cari Dokter */}
                        <div className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition duration-300 hover:shadow-xl">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                                👨‍⚕️
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-slate-800">
                                Cari Dokter
                            </h3>
                            <p className="mb-6 text-sm leading-relaxed text-slate-500">
                                Lihat daftar dokter spesialis yang bertugas dan
                                cek jadwal praktik mereka.
                            </p>
                            <Link
                                href="/daftar-dokter"
                                className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
                            >
                                Lihat Daftar <span>&rarr;</span>
                            </Link>
                        </div>

                        {/* Card Informasi RS */}
                        <div className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition duration-300 hover:shadow-xl">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl text-orange-600 transition group-hover:bg-orange-600 group-hover:text-white">
                                🏥
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-slate-800">
                                Profil Rumah Sakit
                            </h3>
                            <p className="mb-6 text-sm leading-relaxed text-slate-500">
                                Pelajari visi, misi, dan fasilitas unggulan yang
                                tersedia di RSUD Haji Makassar.
                            </p>
                            <Link
                                href="/profil"
                                className="flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700"
                            >
                                Selengkapnya <span>&rarr;</span>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            {/* 3. Footer di Paling Bawah */}
            <Footer />
        </>
    );
}
