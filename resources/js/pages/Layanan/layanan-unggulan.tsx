import { Head } from '@inertiajs/react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function LayananFasilitas() {
    const layananUnggulan = [
        {
    title: "Brainstem Evoke Response Audiometry",
    description: "Pemeriksaan untuk mendeteksi gangguan pendengaran, dilakukan dengan memberikan stimulasi berupa suara klik atau nada ke telinga pasien. Stimulasi ini akan menghasilkan gelombang otak yang direkam oleh alat Elektroensefalografi (EEG). Serta dapat dilakukan pada bayi, anak, maupun orang dewasa.",
    mainImage: "/images/layanan-unggulan/brainstem/Brainstem-Evoke-Response-Audiometry-utama.png",
    thumbs: [
        "/images/layanan-unggulan/brainstem/Brainstem-Evoke-Response-Audiometry-1.png",
        "/images/layanan-unggulan/brainstem/Brainstem-Evoke-Response-Audiometry-2.png",
        "/images/layanan-unggulan/brainstem/Brainstem-Evoke-Response-Audiometry-3.png",
    ]
},
{
    title: "Pemeriksaan Bronchoscopy",
    description: "Pemeriksaan saluran pernapasan bagian bawah yang dilakukan dengan memasukkan alat bernama bronkoskop ke dalam tubuh pasien. Bronkoskop adalah alat panjang dan tipis yang dilengkapi dengan kamera dan lampu. Dilakukan melalui mulut atau hidung pasien, dan biasa dilakukan oleh dokter spesialis paru-paru.",
    mainImage: "/images/layanan-unggulan/bronchoscopy/Pemeriksaan-Bronchoscopy-utama.png",
    thumbs: [
        "/images/layanan-unggulan/bronchoscopy/Pemeriksaan-Bronchoscopy-1.png",
        "/images/layanan-unggulan/bronchoscopy/Pemeriksaan-Bronchoscopy-2.png",
        "/images/layanan-unggulan/bronchoscopy/Pemeriksaan-Bronchoscopy-3.png",
    ]
},
       {
    title: "Medical Body Composition Analyzer",
    description: "MBCA adalah alat yang digunakan untuk mengukur komposisi tubuh seseorang. Pengukuran ini meliputi massa lemak, massa otot, massa tulang dan massa air. Pemeriksaan ini tidak menimbulkan rasa sakit dan tidak memerlukan persiapan khusus, hanya memerlukan waktu 15 menit untuk persiapan.",
    mainImage: "/images/layanan-unggulan/mbca/Medical-Body-utama.png",
    thumbs: [
        "/images/layanan-unggulan/mbca/Medical-Body-1.png",
        "/images/layanan-unggulan/mbca/Medical-Body-2.png",
        "/images/layanan-unggulan/mbca/Medical-Body-3.png",
    ]
}
    ];

    return (
        <>
            <Head title="Layanan Unggulan - RSUD Haji Makassar" />
            <Navbar />

            <main className="min-h-screen bg-slate-50">
                {/* Hero */}
                <section className="relative">
                    <img
                        src="/images/rsudhaji.jpg"
                        alt="Layanan Unggulan"
                        className="w-full h-64 lg:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-slate-50 to-transparent" />
                    <div className="absolute bottom-8 left-6 lg:left-20">
                        <p className="text-green-300 text-sm font-medium mb-1">Layanan Kami</p>
                        <h1 className="text-3xl lg:text-5xl font-extrabold text-white drop-shadow-lg">Layanan Unggulan</h1>
                    </div>
                </section>

                {/* Deskripsi */}
                <section className="py-10 px-6 lg:px-20 bg-white border-b border-slate-100">
                    <div className="max-w-6xl mx-auto">
                        <p className="text-slate-600 leading-relaxed">
                            RSUD Haji Makassar menghadirkan layanan unggulan dengan teknologi medis modern dan dukungan tim spesialis untuk memastikan perawatan terbaik bagi pasien.
                        </p>
                    </div>
                </section>

                {/* Daftar Layanan Unggulan */}
                <section className="py-16 px-6 lg:px-20">
                    <div className="max-w-6xl mx-auto space-y-8">
                        {layananUnggulan.map((item, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 md:p-10 shadow-md border border-slate-100">
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="w-full md:w-1/3">
                                        <img
                                            src={item.mainImage}
                                            alt={item.title}
                                            className="rounded-xl w-full object-cover shadow-sm border border-slate-100"
                                        />
                                    </div>

                                    <div className="w-full md:w-2/3">
                                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 leading-tight">
                                            {item.title}
                                        </h2>
                                        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-4 mt-8">
                                    {item.thumbs.map((img, i) => (
                                        <img
                                            key={i}
                                            src={img}
                                            alt={`${item.title} thumbnail ${i + 1}`}
                                            className="rounded-xl w-full h-24 md:h-32 object-cover shadow-sm"
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}