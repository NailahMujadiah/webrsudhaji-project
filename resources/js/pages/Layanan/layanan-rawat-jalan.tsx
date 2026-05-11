import { Head } from '@inertiajs/react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { useState } from 'react';

const klinikList = [
    { nama: 'Klinik Spesialis Bedah Umum', foto: ['/images/klinik/bedah-umum-1.jpg', '/images/klinik/bedah-umum-2.jpg'] },
    { nama: 'Klinik Spesialis Anak', foto: ['/images/klinik/anak-1.jpg', '/images/klinik/anak-2.jpg'] },
    { nama: 'Klinik Spesialis Obstetri', foto: ['/images/klinik/obstetri-1.jpg', '/images/klinik/obstetri-2.jpg'] },
    { nama: 'Klinik Spesialis Saraf', foto: ['/images/klinik/saraf-1.jpg', '/images/klinik/saraf-2.jpg'] },
    { nama: 'Klinik Spesialis THT', foto: ['/images/klinik/tht-1.jpg', '/images/klinik/tht-2.jpg'] },
    { nama: 'Klinik Spesialis Gigi dan Mulut', foto: ['/images/klinik/gigi-1.jpg', '/images/klinik/gigi-2.jpg'] },
    { nama: 'Klinik Spesialis Mata', foto: ['/images/klinik/mata-1.jpg', '/images/klinik/mata-2.jpg'] },
    { nama: 'Klinik Spesialis Kulit Kelamin', foto: ['/images/klinik/kulit-1.jpg', '/images/klinik/kulit-2.jpg'] },
    { nama: 'Klinik Spesialis Dalam', foto: ['/images/klinik/dalam-1.jpg', '/images/klinik/dalam-2.jpg'] },
    { nama: 'Klinik Spesialis Jiwa', foto: ['/images/klinik/jiwa-1.jpg', '/images/klinik/jiwa-2.jpg'] },
    { nama: 'Klinik Konsultan Gizi', foto: ['/images/klinik/gizi-1.jpg', '/images/klinik/gizi-2.jpg'] },
    { nama: 'Klinik Medical Check Up', foto: ['/images/klinik/mcu-1.jpg', '/images/klinik/mcu-2.jpg'] },
    { nama: 'Klinik Bedah Vasculer', foto: ['/images/klinik/vasculer-1.jpg', '/images/klinik/vasculer-2.jpg'] },
    { nama: 'Klinik Khusus Geriatri', foto: ['/images/klinik/geriatri-1.jpg', '/images/klinik/geriatri-2.jpg'] },
    { nama: 'Klinik Spesialis Jantung', foto: ['/images/klinik/jantung-1.jpg', '/images/klinik/jantung-2.jpg'] },
    { nama: 'Klinik Spesialis Paru & Bronchoscopy', foto: ['/images/klinik/paru-1.jpg', '/images/klinik/paru-2.jpg'] },
    { nama: 'Klinik Ortopedi', foto: ['/images/klinik/ortopedi-1.jpg', '/images/klinik/ortopedi-2.jpg'] },
    { nama: 'Klinik Bedah Digestive', foto: ['/images/klinik/digestive-1.jpg', '/images/klinik/digestive-2.jpg'] },
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
                    onError={(e) => { e.currentTarget.src = '/images/rsudhaji.jpg'; }}
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
                            onError={(e) => { e.currentTarget.src = '/images/rsudhaji.jpg'; }}
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
                        src="/images/rsudhaji.jpg"
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
                <section className="py-10 px-6 lg:px-20 bg-white border-b border-slate-100">
                    <div className="max-w-6xl mx-auto">
                        <p className="text-slate-600 leading-relaxed">
                            RSUD Haji Makassar menyediakan layanan rawat jalan dengan berbagai klinik spesialis yang ditangani oleh dokter-dokter berpengalaman dan profesional. Kami berkomitmen memberikan pelayanan kesehatan terbaik untuk masyarakat.
                        </p>
                    </div>
                </section>

                {/* Grid Klinik */}
                <section className="py-16 px-6 lg:px-20">
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