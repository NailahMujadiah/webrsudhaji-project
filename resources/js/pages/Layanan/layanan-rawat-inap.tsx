import { useState } from 'react';
import { Head } from '@inertiajs/react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const rawatInapList = [
    { nama: 'Rawat Inap Ar Raodah', foto: ['/images/rawat-inap/ar-raodah-1.jpg', '/images/rawat-inap/ar-raodah-2.jpg'] },
    { nama: 'Rawat Inap Az Zahrah', foto: ['/images/rawat-inap/az-zahrah-1.jpg', '/images/rawat-inap/az-zahrah-2.jpg'] },
    { nama: 'Rawat Inap Al Khautsar', foto: ['/images/rawat-inap/al-khautsar-1.jpg', '/images/rawat-inap/al-khautsar-2.jpg'] },
    { nama: 'Rawat Inap Ar Raihan', foto: ['/images/rawat-inap/ar-raihan-1.jpg', '/images/rawat-inap/ar-raihan-2.jpg'] },
    { nama: 'Rawat Inap Al Fajr', foto: ['/images/rawat-inap/al-fajr-1.jpg', '/images/rawat-inap/al-fajr-2.jpg'] },
    { nama: 'Rawat Inap Ad Duha', foto: ['/images/rawat-inap/ad-duha-1.jpg', '/images/rawat-inap/ad-duha-2.jpg'] },
    { nama: 'Rawat Inap Rinra Sayang', foto: ['/images/rawat-inap/rinra-sayang-1.jpg', '/images/rawat-inap/rinra-sayang-2.jpg'] },
];

function RawatInapCard({ nama, foto }: { nama: string; foto: string[] }) {
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

export default function RawatInap() {
    return (
        <>
            <Head title="Layanan Rawat Inap - RSUD Haji Makassar" />
            <Navbar />

            <main className="min-h-screen bg-slate-50">

                {/* Hero */}
                <section className="relative">
                    <img
                        src="/images/rsudhaji.jpg"
                        alt="Layanan Rawat Inap"
                        className="w-full h-64 lg:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-slate-50 to-transparent" />
                    <div className="absolute bottom-8 left-6 lg:left-20">
                        <p className="text-green-300 text-sm font-medium mb-1">Layanan Kami</p>
                        <h1 className="text-3xl lg:text-5xl font-extrabold text-white drop-shadow-lg">Layanan Rawat Inap</h1>
                    </div>
                </section>

                {/* Deskripsi */}
                <section className="py-10 px-6 lg:px-20 bg-white border-b border-slate-100">
                    <div className="max-w-6xl mx-auto">
                        <p className="text-slate-600 leading-relaxed">
                            RSUD Haji Makassar menyediakan fasilitas rawat inap yang nyaman dengan nuansa Islami. Setiap ruangan dirancang untuk memberikan kenyamanan pasien dan keluarga selama masa perawatan.
                        </p>
                    </div>
                </section>

                {/* Grid Rawat Inap */}
                <section className="py-16 px-6 lg:px-20 bg-[#BAEBD4]">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">Daftar Ruang Rawat Inap</h2>
                        <div className="w-12 h-1 bg-green-600 rounded mb-8" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {rawatInapList.map((item, i) => (
                                <RawatInapCard key={i} nama={item.nama} foto={item.foto} />
                            ))}
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}