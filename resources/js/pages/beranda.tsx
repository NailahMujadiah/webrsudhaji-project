import { Head } from '@inertiajs/react'
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { useState } from 'react';

const fasilitasList = [
    {
        title: 'Pelayanan Rawat Inap',
        desc: 'Kami akan memberikan pengobatan dan perawatan dengan suasana senyaman mungkin oleh tenaga profesional.',
        img: '/images/rawatinap.jpg',
        href: '/layanan-fasilitas',
    },
    {
        title: 'IGD & Rawat Intensif',
        desc: 'Pelayanan gawat darurat 24 jam dengan tenaga medis berpengalaman dan peralatan lengkap.',
        img: '/images/igd.jpg',
        href: '/layanan-fasilitas',
    },
    {
        title: 'Fasilitas Penunjang',
        desc: 'Laboratorium, radiologi, farmasi, dan fasilitas penunjang medis lainnya.',
        img: '/images/fasilitas.jpg',
        href: '/layanan-fasilitas',
    },
    {
        title: 'Sarana & Prasarana',
        desc: 'Gedung modern, ruang tunggu nyaman, parkir luas, dan fasilitas pendukung pasien.',
        img: '/images/sarana.jpg',
        href: '/layanan-fasilitas',
    },
];

export default function Beranda() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
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
<section className="py-16 px-6 lg:px-20 bg-[#BAEBD4]">
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start">

        {/* Kiri - Accordion */}
        <div className="flex-1">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Fasilitas dan Layanan</h2>
            <p className="text-slate-600 text-sm mb-6">
                Dalam upaya meningkatkan kualitas layanan, RSUD Haji memiliki fasilitas rawat inap, ICU dan UGD, laboratorium, perpustakaan dan fasilitas lainnya.
            </p>

            <div className="flex flex-col">
                {fasilitasList.map((item, i) => (
                    <div key={i} className="border-b border-slate-400">
                        <button
                            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                            className="w-full flex justify-between items-center py-4 text-left hover:text-green-700 transition"
                        >
                            <span className={`font-semibold ${activeIndex === i ? 'text-green-700' : 'text-slate-800'}`}>
                                {item.title}
                            </span>
                            <span className="text-green-600 font-bold text-lg">
                                {activeIndex === i ? '∨' : '›'}
                            </span>
                        </button>

                        {activeIndex === i && (
                            <p className="text-slate-600 text-sm pb-4">{item.desc}</p>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-8">
                <Link
                    href="/layanan-fasilitas"
                    className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
                >
                    Lihat Semua Fasilitas dan Layanan {'→'}
                </Link>
            </div>
        </div>

        {/* Kanan - Gambar */}
        <div className="flex-1 sticky top-24">
            {activeIndex !== null ? (
                <img
                    src={fasilitasList[activeIndex].img}
                    alt={fasilitasList[activeIndex].title}
                    className="w-full rounded-2xl shadow-lg object-cover h-80 lg:h-[400px] transition duration-300"
                />
            ) : (
                <div className="w-full rounded-2xl bg-white/40 h-80 lg:h-[400px] flex items-center justify-center">
                    <p className="text-slate-400 text-sm">Pilih layanan untuk melihat gambar</p>
                </div>
            )}
        </div>

    </div>
</section>

                
                {/* Video Section - YouTube Center */}
<section className="bg-slate-50 pt-4 pb-16 flex justify-center">
    <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-xl">

        <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Yy3HJPLm0lE"
            title="Video RSUD Haji"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />

    </div>
</section>
            </main>

            {/* 3. Footer di Paling Bawah */}
            <Footer />
        </>
    );
}
