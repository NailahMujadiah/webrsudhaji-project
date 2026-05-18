import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { useState } from 'react';

const fasilitasList = [
    {
        title: 'Pelayanan Rawat Inap',
        desc: 'Kami akan memberikan pengobatan dan perawatan dengan suasana senyaman mungkin oleh tenaga profesional.',
        img: '/images/rawatinap.jpg',
        href: '/layanan/rawat-inap',
    },
    {
        title: 'IGD & Rawat Intensif',
        desc: 'Pelayanan gawat darurat 24 jam dengan tenaga medis berpengalaman dan peralatan lengkap.',
        img: '/images/igd.jpg',
        href: '/layanan/rawat-intensif',
    },
    {
        title: 'Fasilitas Penunjang',
        desc: 'Laboratorium, radiologi, farmasi, dan fasilitas penunjang medis lainnya.',
        img: '/images/fasilitas.jpg',
        href: '/layanan/penunjang',
    },
    {
        title: 'Sarana & Prasarana',
        desc: 'Gedung modern, ruang tunggu nyaman, parkir luas, dan fasilitas pendukung pasien.',
        img: '/images/sarana.jpg',
        href: '/layanan/sarana',
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
                    className="relative flex min-h-[500px] items-center bg-cover bg-center bg-no-repeat"
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
                            <p className="mb-6 text-sm text-slate-600">
                                Dalam upaya meningkatkan kualitas layanan, RSUD
                                Haji memiliki fasilitas rawat inap, ICU dan UGD,
                                laboratorium, perpustakaan dan fasilitas
                                lainnya.
                            </p>

                            <div className="flex flex-col">
                                {fasilitasList.map((item, i) => (
                                    <div
                                        key={i}
                                        className="border-b border-slate-400"
                                    >
                                        <button
                                            onClick={() =>
                                                setActiveIndex(
                                                    activeIndex === i
                                                        ? null
                                                        : i,
                                                )
                                            }
                                            className="flex w-full items-center justify-between py-4 text-left transition hover:text-green-700"
                                        >
                                            <span
                                                className={`font-semibold ${activeIndex === i ? 'text-green-700' : 'text-slate-800'}`}
                                            >
                                                {item.title}
                                            </span>
                                            <span className="text-lg font-bold text-green-600">
                                                {activeIndex === i ? '∨' : '›'}
                                            </span>
                                        </button>

                                        {activeIndex === i && (
                                            <div className="pb-4 text-sm text-slate-600">
                                                <p>{item.desc}</p>
                                                {item.href && (
                                                    <Link
                                                        href={item.href}
                                                        className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-green-600 hover:text-green-800"
                                                    >
                                                        Lihat Halaman {item.title} <span>›</span>
                                                    </Link>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8">
                                <Link
                                    href={activeIndex !== null ? fasilitasList[activeIndex].href : '/layanan-fasilitas'}
                                    className="inline-flex items-center gap-2 rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
                                >
                                    {activeIndex !== null
                                        ? `Lihat ${fasilitasList[activeIndex].title}`
                                        : 'Lihat Semua Fasilitas dan Layanan'}{' '}
                                    {'→'}
                                </Link>
                            </div>
                        </div>

                        {/* Kanan - Gambar */}
                        <div className="sticky top-24 flex-1">
                            {activeIndex !== null ? (
                                <img
                                    src={fasilitasList[activeIndex].img}
                                    alt={fasilitasList[activeIndex].title}
                                    className="h-80 w-full rounded-2xl object-cover shadow-lg transition duration-300 lg:h-[400px]"
                                />
                            ) : (
                                <div className="flex h-80 w-full items-center justify-center rounded-2xl bg-white/40 lg:h-[400px]">
                                    <p className="text-sm text-slate-400">
                                        Pilih layanan untuk melihat gambar
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Video Section - YouTube Center */}
                <section className="flex justify-center bg-slate-50 pt-4 pb-16">
                    <div className="aspect-video w-full max-w-5xl overflow-hidden rounded-2xl shadow-xl">
                        <iframe
                            className="h-full w-full"
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
