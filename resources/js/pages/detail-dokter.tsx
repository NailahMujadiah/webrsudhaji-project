import { Head } from '@inertiajs/react';
import { useState } from 'react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

interface Jadwal {
    id_jadwal: number;
    hari: string;
    jam_mulai: string;
    jam_selesai: string;
    poli: string;
}

interface Dokter {
    id_dokter: number;
    nama_dokter: string;
    spesialis: string;
    foto_dokter: string | null;
    jadwal: Jadwal[];
}

interface Props {
    dokter: Dokter;
}

export default function DetailDokter({ dokter }: Props) {
    const [activeTab, setActiveTab] = useState<'jadwal' | 'profil'>('jadwal');

    // Kelompokkan jadwal berdasarkan poli
    const jadwalPerPoli = dokter.jadwal.reduce((acc: Record<string, Jadwal[]>, item) => {
        if (!acc[item.poli]) acc[item.poli] = [];
        acc[item.poli].push(item);
        return acc;
    }, {});

    return (
        <>
            <Head title={`${dokter.nama_dokter} - RSUD Haji Makassar`} />
            <Navbar />

            <main className="min-h-screen bg-[#BAEBD4] py-12 px-6 lg:px-20">
                <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-sm">

                    <div className="px-8 pb-6 pt-8">
                        {/* Info Dokter */}
                        <div className="flex items-center gap-5 mb-6">
                            <img
                                src={dokter.foto_dokter ?? '/images/dokterdummy.jpeg'}
                                alt={dokter.nama_dokter}
                                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                            />
                            <div>
                                <h1 className="text-xl font-bold text-slate-800">{dokter.nama_dokter}</h1>
                                <p className="text-sm text-slate-500">{dokter.spesialis}</p>
                            </div>
                        </div>

                        {/* Tab */}
                        <div className="flex gap-2 mb-6">
                            <button
                                onClick={() => setActiveTab('jadwal')}
                                className={`px-5 py-1.5 rounded-full text-sm font-semibold transition ${
                                    activeTab === 'jadwal'
                                        ? 'bg-[#2D8A5B] text-white'
                                        : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-50'
                                }`}
                            >
                                Jadwal
                            </button>
                            <button
                                onClick={() => setActiveTab('profil')}
                                className={`px-5 py-1.5 rounded-full text-sm font-semibold transition ${
                                    activeTab === 'profil'
                                        ? 'bg-[#2D8A5B] text-white'
                                        : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-50'
                                }`}
                            >
                                Profil
                            </button>
                        </div>

                        {/* Tab Jadwal */}
                        {activeTab === 'jadwal' && (
                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                {dokter.jadwal.length === 0 ? (
                                    <p className="text-slate-400 text-sm text-center py-4">Belum ada jadwal tersedia</p>
                                ) : (
                                    Object.entries(jadwalPerPoli).map(([poli, sesi], i) => (
                                        <div key={i} className={i > 0 ? 'mt-6' : ''}>
                                            <p className="font-bold text-slate-700 mb-3">{poli}</p>
                                            <table className="w-full text-sm text-slate-600">
                                                <tbody>
                                                    {sesi.map((s, idx) => (
                                                        <tr key={idx} className="border-b border-slate-100 last:border-0">
                                                            <td className="py-2 w-32">{s.hari}</td>
                                                            <td className="py-2 text-right">{s.jam_mulai} - {s.jam_selesai}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    ))
                                )}
                            </div>
                        )}

                        {/* Tab Profil */}
                        {activeTab === 'profil' && (
                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <h2 className="font-bold text-slate-800 mb-3">Profil Dokter</h2>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {dokter.spesialis} di RSUD Haji Makassar.
                                </p>
                            </div>
                        )}

                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}