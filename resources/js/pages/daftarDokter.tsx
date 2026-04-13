import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function DaftarDokter() {
    // Data dummy dokter RSUD Haji
    const doctors = [
        { id: 1, name: 'dr. Andi Syarifuddin, Sp.B', poly: 'Bedah Umum', status: 'Tersedia', image: '👨‍⚕️' },
        { id: 2, name: 'dr. Siti Aminah, Sp.A', poly: 'Anak', status: 'Tersedia', image: '👩‍⚕️' },
        { id: 3, name: 'dr. H. Bakri, Sp.PD', poly: 'Penyakit Dalam', status: 'Cuti', image: '👨‍⚕️' },
        { id: 4, name: 'dr. Nurul Huda, Sp.OG', poly: 'Kandungan', status: 'Tersedia', image: '👩‍⚕️' },
        { id: 5, name: 'dr. Faisal, Sp.JP', poly: 'Jantung', status: 'Tersedia', image: '👨‍⚕️' },
        { id: 6, name: 'dr. Kartini, Sp.M', poly: 'Mata', status: 'Tersedia', image: '👩‍⚕️' },
    ];

    return (
        <>
            <Head title="Daftar Dokter - RSUD Haji Makassar" />
            
            <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
                {/* Navbar */}
                <nav className="flex items-center justify-between border-b bg-white px-6 py-4 lg:px-20 shadow-sm">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded bg-green-600 flex items-center justify-center text-white font-bold">H</div>
                        <span className="font-bold text-slate-800 text-lg uppercase">RSUD Haji</span>
                    </Link>
                    <div className="space-x-6 hidden md:block">
                        <Link href="/profil" className="text-sm font-medium text-slate-600 hover:text-green-600">Profil</Link>
                        <Link href="/daftar-dokter" className="text-sm font-bold text-green-600 border-b-2 border-green-600 pb-1">Daftar Dokter</Link>
                    </div>
                </nav>

                {/* Header Section */}
                <header className="bg-white py-12 px-6 text-center border-b">
                    <h1 className="text-3xl font-extrabold text-slate-900 lg:text-4xl">Tenaga Medis Profesional</h1>
                    <p className="mt-3 text-slate-500 max-w-xl mx-auto">
                        Temukan dokter spesialis terbaik kami yang siap melayani Anda dengan sepenuh hati di RSUD Haji Makassar.
                    </p>
                </header>

                {/* Main Content */}
                <main className="max-w-7xl mx-auto px-6 py-12">
                    {/* Filter Sederhana */}
                    <div className="mb-10 flex flex-wrap gap-3 justify-center">
                        {['Semua', 'Anak', 'Bedah', 'Jantung', 'Kandungan', 'Penyakit Dalam'].map((cat) => (
                            <button key={cat} className="px-5 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium hover:border-green-500 hover:text-green-600 transition">
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid Dokter */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {doctors.map((doc) => (
                            <div key={doc.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition group">
                                <div className="flex items-center gap-5">
                                    <div className="h-20 w-20 rounded-2xl bg-green-50 flex items-center justify-center text-4xl grayscale group-hover:grayscale-0 transition">
                                        {doc.image}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-800">{doc.name}</h3>
                                        <p className="text-green-600 font-medium text-sm">Spesialis {doc.poly}</p>
                                        <div className={`mt-2 inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                                            doc.status === 'Tersedia' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'
                                        }`}>
                                            {doc.status}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 pt-4 border-t border-slate-50">
                                    <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-green-700 transition active:scale-95">
                                        Lihat Jadwal
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>

                <footer className="py-10 text-center text-slate-400 text-sm">
                    Sistem Informasi RSUD Haji Makassar &copy; 2026
                </footer>
            </div>
        </>
    );
}