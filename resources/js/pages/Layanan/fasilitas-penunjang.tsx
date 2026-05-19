import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

type Facility = {
    title: string;
    images: string[];
    icon: string;
};

const facilities: Facility[] = [
    {
        title: 'Laboratorium',
        images: ['/images/Laboratorium.png', '/images/Laboratorium-1.png'],
        icon: '🔬',
    },
    {
        title: 'Central Sterile Supply Departement',
        images: [
            '/images/CSSD.png',
            '/images/CSSD-1.png',
            '/images/CSSD-2.png',
            '/images/CSSD-3.png',
        ],
        icon: '🧼',
    },
    {
        title: 'Ruang Tunggu Pasien',
        images: ['/images/Ruang-Tunggu.png', '/images/Ruang-Tunggu-1.png'],
        icon: '🪑',
    },
    {
        title: 'Farmasi',
        images: ['/images/Farmasi.png', '/images/Farmasi-1.png'],
        icon: '💊',
    },
    {
        title: 'Perpustakaan',
        images: ['/images/Perpus.png', '/images/Perpus-1.png'],
        icon: '📚',
    },
    {
        title: 'Radiologi',
        images: [
            '/images/Radiologi.png',
            '/images/Radiologi-1.png',
            '/images/Radiologi-2.png',
            '/images/Radiologi-3.png',
        ],
        icon: '🖼️',
    },
    {
        title: 'Fisioterapi',
        images: ['/images/Fisioterapi.png', '/images/Fisioterapi-1.png'],
        icon: '🏋️',
    },
    {
        title: 'Instalasi Gizi',
        images: ['/images/Gizi.png', '/images/Gizi-1.png'],
        icon: '🥗',
    },
    {
        title: 'Instalasi Pemeriksaan',
        images: ['/images/listrik.png', '/images/listrik-2.png'],
        icon: '🩺',
    },
    {
        title: 'Rekam Medis',
        images: ['/images/medis.png', '/images/medis-1.png'],
        icon: '📋',
    },
];

function FacilityCard({ facility }: { facility: Facility }) {
    const [start, setStart] = useState(0);
    const images = facility.images || [];
    const len = images.length;
    const showCount = 2;

    // advance by showCount so slides move by pairs
    const prev = () => setStart((s) => (s - showCount + len) % len);
    const next = () => setStart((s) => (s + showCount) % len);

    const visible: string[] = [];
    for (let i = 0; i < showCount && i < len; i++) {
        visible.push(images[(start + i) % len]);
    }

    const totalPages = Math.max(1, Math.ceil(len / showCount));
    const currentPage = Math.floor(start / showCount) % totalPages;

    return (
        <section className="overflow-hidden rounded-[28px] bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative bg-slate-100">
                <div className="flex gap-2 p-3 min-h-[188px]">
                    {visible.map((image: string, idx: number) => (
                        <div key={`${start}-${idx}`} className="overflow-hidden rounded-2xl flex-1">
                            <img
                                src={image}
                                alt={`${facility.title} ${idx + 1}`}
                                className="h-44 w-full object-cover transition duration-300 hover:scale-105"
                                onError={(e) => {
                                    e.currentTarget.src = '/images/no-image.svg';
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Navigation only when more than showCount images */}
                {len > showCount && (
                    <>
                        <button
                            onClick={prev}
                            aria-label="Previous"
                            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-green-600 hover:bg-green-700 text-white p-2 shadow-lg hover:shadow-xl transition duration-200 font-bold text-lg w-10 h-10 flex items-center justify-center"
                        >
                            ‹
                        </button>
                        <button
                            onClick={next}
                            aria-label="Next"
                            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-green-600 hover:bg-green-700 text-white p-2 shadow-lg hover:shadow-xl transition duration-200 font-bold text-lg w-10 h-10 flex items-center justify-center"
                        >
                            ›
                        </button>

                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1">
                            {Array.from({ length: totalPages }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full transition ${
                                        i === currentPage ? 'bg-green-600 w-4' : 'bg-white/60'
                                    }`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className="p-5">
                <h2 className="mb-3 text-xl font-bold text-slate-800">{facility.title}</h2>
            </div>
        </section>
    );
}

export default function FasilitasPenunjang() {
    return (
        <>
            <Head title="Fasilitas Penunjang - RSUD Haji Makassar" />
            <Navbar />

            <main className="min-h-screen bg-white">
                {/* Hero */}
                <section className="relative">
                    <img
                        src="/images/no-image.svg"
                        alt="Fasilitas Penunjang"
                        className="h-64 w-full object-cover lg:h-80"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t from-white to-transparent" />
                    <div className="absolute bottom-8 left-6 lg:left-20">
                        <p className="mb-1 text-sm font-medium text-green-300">
                            Fasilitas Kami
                        </p>
                        <h1 className="text-3xl font-extrabold text-white drop-shadow-lg lg:text-5xl">
                            Fasilitas Penunjang
                        </h1>
                    </div>
                </section>

                {/* Deskripsi */}
                <section className="border-b border-slate-100 bg-white pt-6 pb-10 px-6 lg:px-20 ">
                    <div className="absolute left-6 right-6" />
                    <div className="mx-auto max-w-6xl">
                        <p className="leading-relaxed text-slate-600">
                            Fasilitas penunjang medis di RSUD Haji Makassar mencakup
                            laboratorium, radiologi, farmasi, dan layanan diagnostik
                            canggih untuk mendukung diagnosis dan perawatan pasien
                            dengan akurat.
                        </p>
                    </div>
                </section>

                {/* Grid */}
                <section className="bg-white pt-5 pb-20 px-6 lg:px-20">
                    <div className="mx-auto max-w-6xl">
                        <h2 className="mb-3 text-2xl font-bold text-slate-800">
                            Fasilitas Penunjang Medis
                        </h2>
                        <div className="mb-8 h-1 w-12 rounded bg-green-600" />
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            {facilities.map((facility) => (
                                <FacilityCard key={facility.title} facility={facility} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}