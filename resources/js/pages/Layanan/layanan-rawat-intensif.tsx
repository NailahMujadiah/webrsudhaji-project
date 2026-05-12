import { useState } from 'react';
import { Head } from '@inertiajs/react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const rawatIntensifList = [
    { nama: 'Instalasi Rawat Intensif (ICU)', foto: ['/images/rawat-intensif/icu-1.jpg', '/images/rawat-intensif/icu-2.jpg'] },
    { nama: 'Kamar Operasi', foto: ['/images/rawat-intensif/kamar-operasi-1.jpg', '/images/rawat-intensif/kamar-operasi-2.jpg'] },
    { nama: 'Instalasi Gawat Darurat', foto: ['/images/rawat-intensif/igd-1.jpg', '/images/rawat-intensif/igd-2.jpg'] },
];

function RawatIntensifCard({ nama, foto }: { nama: string; foto: string[] }) {
    const [activeFoto, setActiveFoto] = useState(0);

    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition">
            <div className="relative overflow-hidden">
                <img
                    src={foto[activeFoto]}
                    alt={nama}
                    className="w-full h-52 object-cover transition duration-300"
                    onError={(e) => { e.currentTarget.src = '/images/rsudhaji.jpg'; }}
                />
                <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                    {activeFoto + 1} / {foto.length}
                </div>
            </div>

            <div className="flex gap-2 px-4 pt-3">
                {foto.map((f, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveFoto(i)}
                        className={`flex-1 overflow-hidden rounded-lg border-2 transition ${
                            activeFoto === i ? 'border-green-500' : 'border-transparent'
                        }`}
                    >
                        <img
                            src={f}
                            alt={`${nama} foto ${i + 1}`}
                            className="w-full h-16 object-cover"
                            onError={(e) => { e.currentTarget.src = '/images/rsudhaji.jpg'; }}
                        />
                    </button>
                ))}
            </div>

            <div className="px-4 py-4">
                <h3 className="font-bold text-slate-800 text-sm">{nama}</h3>
                <div className="mt-1 flex items-center gap-1">
                    <div className="w-6 h-0.5 bg-green-500 rounded" />
                    <div className="w-2 h-0.5 bg-green-300 rounded" />
                </div>
            </div>
        </div>
    );
}

export default function RawatIntensif() {
    return (
        <>
            <Head title="Layanan Rawat Intensif - RSUD Haji Makassar" />
            <Navbar />

            <main className="min-h-screen bg-slate-50">

                {/* Hero */}
                <section className="relative">
                    <img
                        src="/images/rsudhaji.jpg"
                        alt="Layanan Rawat Intensif"
                        className="w-full h-64 lg:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-slate-50 to-transparent" />
                    <div className="absolute bottom-8 left-6 lg:left-20">
                        <p className="text-green-300 text-sm font-medium mb-1">Layanan Kami</p>
                        <h1 className="text-3xl lg:text-5xl font-extrabold text-white drop-shadow-lg">Layanan Rawat Intensif</h1>
                    </div>
                </section>

                {/* Deskripsi */}
                <section className="py-10 px-6 lg:px-20 bg-white border-b border-slate-100">
                    <div className="max-w-6xl mx-auto">
                        <p className="text-slate-600 leading-relaxed">
                            RSUD Haji Makassar menyediakan layanan rawat intensif dengan peralatan medis canggih dan tenaga medis terlatih khusus untuk menangani pasien yang membutuhkan perawatan intensif 24 jam.
                        </p>
                    </div>
                </section>

                {/* Grid */}
                <section className="py-16 px-6 lg:px-20 bg-[#BAEBD4]">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">Fasilitas Rawat Intensif</h2>
                        <div className="w-12 h-1 bg-green-600 rounded mb-8" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {rawatIntensifList.map((item, i) => (
                                <RawatIntensifCard key={i} nama={item.nama} foto={item.foto} />
                            ))}
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}