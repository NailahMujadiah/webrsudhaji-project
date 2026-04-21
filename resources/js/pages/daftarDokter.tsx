import { Head } from '@inertiajs/react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { useState } from 'react';
import { Link } from '@inertiajs/react';

const dokterList = [
    {
        img: '/images/dokter1.jpg',
        nama: 'dr. Gracia Angga Widjaja, SpA',
        spesialis: 'Spesialis Gizi Klinik',
    },
    {
        img: '/images/dokter2.jpg',
        nama: 'dr. Gracia Angga Widjaja, SpA',
        spesialis: 'Spesialis Gizi Klinik',
    },
    {
        img: '/images/dokter3.jpg',
        nama: 'dr. Gracia Angga Widjaja, SpA',
        spesialis: 'Spesialis Gizi Klinik',
    },
    {
        img: '/images/dokter4.jpg',
        nama: 'dr. Gracia Angga Widjaja, SpA',
        spesialis: 'Spesialis Gizi Klinik',
    },
    {
        img: '/images/dokter5.jpg',
        nama: 'dr. Gracia Angga Widjaja, SpA',
        spesialis: 'Spesialis Gizi Klinik',
    },
    {
        img: '/images/dokter6.jpg',
        nama: 'dr. Gracia Angga Widjaja, SpA',
        spesialis: 'Spesialis Gizi Klinik',
    },
];

export default function DaftarDokter() {
    const [search, setSearch] = useState('');
    const [showFilter, setShowFilter] = useState(false);

    const filtered = dokterList.filter(
        (d) =>
            d.nama.toLowerCase().includes(search.toLowerCase()) ||
            d.spesialis.toLowerCase().includes(search.toLowerCase()),
    );

    return (
        <>
            <Head title="Dokter Kami - RSUD Haji Makassar" />
            <Navbar />

            <main className="min-h-screen bg-[#BAEBD4] px-6 py-12 lg:px-20">
                <div className="mx-auto max-w-5xl rounded-3xl bg-white/60 p-8 shadow-sm backdrop-blur-sm">
                    {/* Search & Filter */}
                    <div className="mb-8 flex items-center gap-3">
                        {/* Tombol Filter */}
                        <button
                            onClick={() => setShowFilter(!showFilter)}
                            className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M7 12h10M10 18h4"
                                />
                            </svg>
                            Filter
                        </button>

                        {/* Search Input */}
                        <div className="flex flex-1 items-center overflow-hidden rounded-xl border border-slate-300 bg-white">
                            <input
                                type="text"
                                placeholder="Nama Dokter, Spesialis"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="flex-1 bg-transparent px-4 py-3 text-sm text-slate-700 outline-none"
                            />
                            <button className="flex items-center gap-2 bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                                    />
                                </svg>
                                Cari
                            </button>
                        </div>
                    </div>

                    {/* Filter Panel */}
                    {showFilter && (
                        <div className="mb-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                            <p className="mb-3 text-sm font-semibold text-slate-700">
                                Filter Spesialis
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    'Semua',
                                    'Spesialis Gizi Klinik',
                                    'Spesialis Anak',
                                    'Spesialis Bedah',
                                    'Spesialis Penyakit Dalam',
                                ].map((s, i) => (
                                    <button
                                        key={i}
                                        className="rounded-full border border-green-600 px-3 py-1 text-xs font-medium text-green-700 transition hover:bg-green-600 hover:text-white"
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Grid Dokter */}
                    {filtered.length > 0 ? (
                        <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
                            {filtered.map((dokter, i) => (
                                <div
                                    key={i}
                                    className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md"
                                >
                                    <div className="overflow-hidden p-3">
                                        <img
                                            src="/images/dokterdummy.jpeg"
                                            alt={dokter.nama}
                                            className="h-48 w-full rounded-xl object-cover transition duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <p className="mb-1 text-sm font-bold text-slate-800">
                                            {dokter.nama}
                                        </p>
                                        <div className="flex items-center gap-1 text-xs text-slate-500">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 text-green-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 12h6m-3-3v6m9-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                                                />
                                            </svg>
                                            {dokter.spesialis}
                                        </div>
                                        <Link
                                            href="/detail-dokter"
                                            className="mt-3 block w-full rounded-lg bg-green-600 py-2 text-center text-xs font-semibold text-white transition hover:bg-green-700"
                                        >
                                            Selengkapnya
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center text-slate-400">
                            <p className="text-lg font-medium">
                                Dokter tidak ditemukan
                            </p>
                            <p className="mt-1 text-sm">Coba kata kunci lain</p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </>
    );
}
