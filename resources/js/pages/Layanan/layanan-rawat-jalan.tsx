import { Head } from '@inertiajs/react';
import { useState } from 'react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const klinikList = [
    { nama: 'Klinik Spesialis Bedah Umum', foto: ['/images/rawat-jalan/Klinik-Spisialis-Bedah-Umum-1.png', '/images/rawat-jalan/Klinik-Spisialis-Bedah-Umum-2.png'] },
    { nama: 'Klinik Spesialis Anak', foto: ['/images/rawat-jalan/Klinik-Spesialis-Anak-1.png', '/images/rawat-jalan/Klinik-Spesialis-Anak-2.png'] },
    { nama: 'Klinik Spesialis Obstetri', foto: ['/images/rawat-jalan/Klinik-Spesialis-Obsetri-2.png', '/images/rawat-jalan/Klinik-Spesialis-Obsetri-3.png'] },
    { nama: 'Klinik Spesialis Saraf', foto: ['/images/rawat-jalan/Klinik-Spesialis-Saraf-1.png', '/images/rawat-jalan/Klinik-Spesialis-Saraf-1-1.png'] },
    { nama: 'Klinik Spesialis THT', foto: ['/images/rawat-jalan/Klinik-SPESIALIS-THT-1.png', '/images/rawat-jalan/Klinik-SPESIALIS-THT.png'] },
    { nama: 'Klinik Spesialis Gigi dan Mulut', foto: ['/images/rawat-jalan/SPESIALIS-GIGI-1.png', '/images/rawat-jalan/SPESIALIS-GIGI.png'] },
    { nama: 'Klinik Spesialis Mata', foto: ['/images/rawat-jalan/Klinik-Spesialis-Mata-1.png', '/images/rawat-jalan/Klinik-Spesialis-Mata-3.png'] },
    { nama: 'Klinik Spesialis Kulit Kelamin', foto: ['/images/rawat-jalan/Klinik-Spesialis-Kulit-1.png', '/images/rawat-jalan/Klinik-Spesialis-Kulit-2.png'] },
    { nama: 'Klinik Spesialis Dalam', foto: ['/images/rawat-jalan/Klinis-Spesialis-dalam-1.png', '/images/rawat-jalan/Klinis-Spesialis-dalam-2.png'] },
    { nama: 'Klinik Spesialis Jiwa', foto: ['/images/rawat-jalan/Spesialis-Jiwa-1.png', '/images/rawat-jalan/Spesialis-Jiwa-1.png'] },
    { nama: 'Klinik Konsultan Gizi', foto: ['/images/rawat-jalan/Klinik-Spesialis-Gizi.png', '/images/rawat-jalan/Klinik-Spesialis-Gizi-2.png'] },
    { nama: 'Klinik Medical Check Up', foto: ['/images/rawat-jalan/Klinik-Medical-Cack-Up-1.png', '/images/rawat-jalan/Klinik-Medical-Cack-Up-2.png'] },
    { nama: 'Klinik Bedah Vasculer', foto: ['/images/rawat-jalan/Klinik-Bedah-Vasculer-1.png', '/images/rawat-jalan/Klinik-Bedah-Vasculer-2.png'] },
    { nama: 'Klinik Khusus Geriatri', foto: ['/images/rawat-jalan/Klinik-Khusus-Geriatri-1.png', '/images/rawat-jalan/Klinik-Khusus-Geriatri.png'] },
    { nama: 'Klinik Spesialis Jantung', foto: ['/images/rawat-jalan/Klinik-Spesialis-Jantung-1.png', '/images/rawat-jalan/Klinik-Spesialis-Jantung-2.png'] },
    { nama: 'Klinik Spesialis Paru & Bronchoscopy', foto: ['/images/rawat-jalan/Klinik-Spesialis-Paru-1.png', '/images/rawat-jalan/Klinik-Spesialis-Paru-2.png'] },
    { nama: 'Klinik Spesialis Ortopedi', foto: ['/images/rawat-jalan/Klinik-Spesialis-Ortopedi-1.png', '/images/rawat-jalan/Klinik-Spesialis-Ortopedi-2.png'] },
    { nama: 'Klinik Bedah Digestive', foto: ['/images/rawat-jalan/Klinik-Bedah-Umum.png', '/images/rawat-jalan/Klinik-Bedah-Umum.png'] },
];
function KlinikCard({ nama, foto }: { nama: string; foto: string[] }) {
    const [activefoto, setActivefoto] = useState(0);

    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition">
            {/* Foto Utama */}
            <div className="relative overflow-hidden">
                <img
                    src={foto[activefoto]}
                    alt={nama}
                    className="w-full h-52 object-cover transition duration-300"
                    onError={(e) => { e.currentTarget.src = '/images/rsudhaji.webp'; }}
                />
                {/* Badge nomor foto */}
                <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                    {activefoto + 1} / {foto.length}
                </div>
            </div>

            {/* Thumbnail */}
            <div className="flex gap-2 px-4 pt-3">
                {foto.map((f, i) => (
                    <button
                        key={i}
                        onClick={() => setActivefoto(i)}
                        className={`flex-1 overflow-hidden rounded-lg border-2 transition ${
                            activefoto === i ? 'border-green-500' : 'border-transparent'
                        }`}
                    >
                        <img
                            src={f}
                            alt={`${nama} foto ${i + 1}`}
                            className="w-full h-16 object-cover"
                            onError={(e) => { e.currentTarget.src = '/images/rsudhaji.webp'; }}
                        />
                    </button>
                ))}
            </div>

            {/* Nama Klinik */}
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

export default function RawatJalan() {
    return (
        <>
            <Head title="Layanan Rawat Jalan - RSUD Haji Makassar" />
            <Navbar />

            <main className="min-h-screen bg-slate-50">

                {/* Hero */}
                <section className="relative">
                    <img
                        src="/images/rsudhaji.webp"
                        alt="Layanan Rawat Jalan"
                        className="w-full h-64 lg:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-slate-50 to-transparent" />
                    <div className="absolute bottom-8 left-6 lg:left-20">
                        <p className="text-green-300 text-sm font-medium mb-1">Layanan Kami</p>
                        <h1 className="text-3xl lg:text-5xl font-extrabold text-white drop-shadow-lg">Layanan Rawat Jalan</h1>
                    </div>
                </section>

                {/* Deskripsi */}
                <section className="pt-6 pb-10 px-6 lg:px-20 bg-white border-b border-slate-100">
                    <div className="max-w-6xl mx-auto">
                        <p className="text-slate-600 leading-relaxed">
                            RSUD Haji Makassar menyediakan layanan rawat jalan dengan berbagai klinik spesialis yang ditangani oleh dokter-dokter berpengalaman dan profesional. Kami berkomitmen memberikan pelayanan kesehatan terbaik untuk masyarakat.
                        </p>
                    </div>
                </section>

                {/* Grid Klinik */}
                <section className="pt-5 pb-20 px-6 lg:px-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">Daftar Klinik</h2>
                        <div className="w-12 h-1 bg-green-600 rounded mb-8" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {klinikList.map((klinik, i) => (
                                <KlinikCard key={i} nama={klinik.nama} foto={klinik.foto} />
                            ))}
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}