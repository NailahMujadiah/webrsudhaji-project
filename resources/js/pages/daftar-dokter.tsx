import { Head, Link } from '@inertiajs/react'
import { useState } from 'react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';


interface Dokter {
    id_dokter: number;
    nama_dokter: string;
    spesialis: string;
    foto_dokter: string | null;
}

interface Props {
    dokters: Dokter[];
}

const normalizeSearchText = (value: string) =>
    value
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

const toSearchTokens = (value: string) =>
    normalizeSearchText(value).split(' ').filter(Boolean);

export default function DaftarDokter({ dokters }: Props) {
    const [search, setSearch] = useState(() => {
        if (typeof window === 'undefined') {
            return '';
        }

        return new URLSearchParams(window.location.search).get('search') ?? '';
    });
    const [spesialisFilter, setSpesialisFilter] = useState('');

    const filtered = dokters.filter((d) => {
        const nameText = normalizeSearchText(d.nama_dokter);
        const spesialisText = normalizeSearchText(d.spesialis);
        const searchTokens = toSearchTokens(search);

        const matchesSearch =
            searchTokens.length === 0 ||
            searchTokens.every(
                (token) =>
                    nameText.includes(token) || spesialisText.includes(token),
            );

        return (
            matchesSearch &&
            spesialisText.includes(normalizeSearchText(spesialisFilter))
        );
    });

    const spesialisList = Array.from(
        new Set(dokters.map((dokter) => dokter.spesialis)),
    ).sort();

    return (
        <>
            <Head title="Dokter Kami - RSUD Haji Makassar" />
            <Navbar />
            <main className="min-h-screen bg-slate-50">

                {/* Hero */}
                <section className="relative">
                    <img
                        src="/images/rsudhaji.webp"
                        alt="Dokter Kami"
                        className="w-full h-64 lg:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-slate-50 to-transparent" />
                    <div className="absolute bottom-8 left-6 lg:left-20">
                        <p className="text-emerald-300 text-sm font-medium mb-1">Tenaga Medis</p>
                        <h1 className="text-3xl lg:text-5xl font-extrabold text-white drop-shadow-lg">Dokter Kami</h1>
                    </div>
                </section>

                {/* Deskripsi */}
                <section className="pt-6 pb-10 px-6 lg:px-20 bg-white border-b border-slate-100">
                    <div className="max-w-6xl mx-auto">
                        <p className="text-slate-600 leading-relaxed">
                            Temukan dokter terbaik untuk kebutuhan kesehatan Anda. Cari dokter berdasarkan nama atau spesialis, dan gunakan filter untuk menemukan dokter dengan keahlian yang tepat.
                        </p>
                    </div>
                </section>

                <div className="px-6 py-10 lg:px-20">
                <div className="mx-auto max-w-6xl space-y-8">

                    <section>
                        {/* Search + Filter digabung dalam satu card */}
                        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/40">
                            {/* Header card */}
                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="10" cy="10" r="6" />
                                        <path d="M21 21l-4.35-4.35" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">Cari Dokter</p>
                                    <p className="text-xs text-slate-500">Nama dokter atau spesialis</p>
                                </div>
                            </div>

                            {/* Input pencarian */}
                            <div className="mt-4 flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Cari nama atau spesialis..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="h-10 flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                                />
                                <button
                                    className="rounded-2xl bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
                                    type="button"
                                >
                                    Cari
                                </button>
                            </div>

                            {/* Divider */}
                            <div className="my-4 border-t border-slate-100" />

                            {/* Filter spesialis */}
                            <div className="flex items-center justify-between gap-3">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                                    Filter spesialis
                                </p>
                                {spesialisFilter && (
                                    <button
                                        type="button"
                                        onClick={() => setSpesialisFilter('')}
                                        className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100"
                                    >
                                        Reset
                                    </button>
                                )}
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                                <button
                                    type="button"
                                    onClick={() => setSpesialisFilter('')}
                                    className={`rounded-full border px-4 py-1.5 text-xs font-medium transition ${
                                        spesialisFilter === ''
                                            ? 'border-emerald-600 bg-emerald-600 text-white'
                                            : 'border-slate-200 bg-slate-100 text-slate-700 hover:border-emerald-600 hover:bg-emerald-50'
                                    }`}
                                >
                                    Semua
                                </button>
                                {spesialisList.map((s) => (
                                    <button
                                        key={s}
                                        type="button"
                                        onClick={() => setSpesialisFilter(s)}
                                        className={`rounded-full border px-4 py-1.5 text-xs font-medium transition ${
                                            spesialisFilter === s
                                                ? 'border-emerald-600 bg-emerald-600 text-white'
                                                : 'border-slate-200 bg-slate-100 text-slate-700 hover:border-emerald-600 hover:bg-emerald-50'
                                        }`}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>

                            {/* Info hasil filter (opsional, tampil hanya jika ada filter aktif) */}
                            {(spesialisFilter || search) && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    <span className="rounded-2xl bg-slate-100 px-3 py-1 text-xs text-slate-600">
                                        Total dokter: {dokters.length}
                                    </span>
                                    <span className="rounded-2xl bg-emerald-50 px-3 py-1 text-xs text-emerald-700">
                                        Hasil: {filtered.length}
                                    </span>
                                    {spesialisFilter && (
                                        <span className="rounded-2xl bg-emerald-100 px-3 py-1 text-xs text-emerald-800">
                                            Spesialis: {spesialisFilter}
                                        </span>
                                    )}
                                </div>
                            )}
                        </div>
                    </section>

                    {filtered.length > 0 ? (
                        <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">Daftar Dokter</h2>
                        <div className="w-12 h-1 bg-emerald-600 rounded mb-8" />
                        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                            {filtered.map((dokter) => (
                                <div
                                    key={dokter.id_dokter}
                                    className="group overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={dokter.foto_dokter ?? '/images/editable-doctor-vector.jpg'}
                                            alt={dokter.nama_dokter}
                                            className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                                            onError={(e) => {
                                                e.currentTarget.src = '/images/editable-doctor-vector.jpg';
                                            }}
                                        />
                                        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-900/80 to-transparent p-4 text-white">
                                            <p className="text-sm font-semibold line-clamp-2">{dokter.nama_dokter}</p>
                                            <p className="mt-1 text-xs text-slate-200">{dokter.spesialis}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4 p-5">
                                        <div className="flex items-center justify-between gap-3">
                                            <div>
                                                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Spesialis</p>
                                                <p className="mt-2 text-sm font-medium text-slate-800">{dokter.spesialis}</p>
                                            </div>
                                            <span className="rounded-2xl bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Tersedia</span>
                                        </div>
                                        <Link
                                            href={`/detail-dokter/${dokter.id_dokter}`}
                                            className="block rounded-3xl bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-700"
                                        >
                                            Selengkapnya
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        </section>
                    ) : (
                        <section className="rounded-4xl border border-dashed border-slate-300 bg-white p-16 text-center shadow-sm">
                            <p className="text-xl font-semibold text-slate-900">Dokter tidak ditemukan</p>
                            <p className="mt-2 text-sm text-slate-500">Coba gunakan kata kunci atau filter lain untuk mencari dokter.</p>
                        </section>
                    )}
                </div>
                </div>

            </main>

            <Footer />
        </>
    );
}
