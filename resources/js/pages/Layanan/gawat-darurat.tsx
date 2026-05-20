import { Head } from '@inertiajs/react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const layananGawatDarurat = [
    {
        title: 'Pelayanan 24 Jam',
        description: 'Instalasi Gawat Darurat RSUD Haji Makassar siap melayani pasien kapan pun diperlukan, dengan respon cepat dan penanganan segera.',
    },
    {
        title: 'Tenaga Medis Spesialis',
        description: 'Tim dokter, perawat, dan tenaga kesehatan terlatih tersedia untuk menangani kondisi kritis dan keadaan darurat medis.',
    },
    {
        title: 'Fasilitas Penunjang Lengkap',
        description: 'Dilengkapi laboratorium, radiologi, dan farmasi untuk mendukung diagnosis dan perawatan darurat secara efektif.',
    },
];

export default function GawatDarurat() {
    return (
        <>
            <Head title="Layanan Gawat Darurat - RSUD Haji Makassar" />
            <Navbar />

            <main className="min-h-screen bg-slate-50">
                <section className="relative">
                    <img
                        src="/images/rsudhaji.webp"
                        alt="Layanan Gawat Darurat"
                        className="w-full h-64 lg:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-slate-50 to-transparent" />
                    <div className="absolute bottom-8 left-6 lg:left-20">
                        <p className="text-green-300 text-sm font-medium mb-1">Layanan Kami</p>
                        <h1 className="text-3xl lg:text-5xl font-extrabold text-white drop-shadow-lg">Layanan Gawat Darurat</h1>
                    </div>
                </section>

                <section className="py-10 px-6 lg:px-20 bg-white border-b border-slate-100">
                    <div className="max-w-6xl mx-auto">
                        <p className="text-slate-600 leading-relaxed">
                            Instalasi Gawat Darurat (IGD) RSUD Haji Makassar melayani pasien dalam kondisi darurat dengan standar keselamatan tertinggi dan dukungan medis penuh.
                        </p>
                    </div>
                </section>

                <section className="py-16 px-6 lg:px-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">Keunggulan Layanan Gawat Darurat</h2>
                        <div className="w-12 h-1 bg-green-600 rounded mb-8" />
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {layananGawatDarurat.map((item, index) => (
                                <div key={index} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                                    <h3 className="text-xl font-semibold text-slate-800 mb-3">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
