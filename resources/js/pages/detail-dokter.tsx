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

    // Urutan hari agar selalu Senin..Minggu
    const dayOrder = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];

    const formatTime = (t: string) => {
        // expect 'HH:MM:SS' or 'HH:MM'
        if (!t) return '';
        const hhmm = t.slice(0,5);
        return hhmm.replace(':', '.');
    };

    return (
        <>
            <Head title={`${dokter.nama_dokter} - RSUD Haji Makassar`} />
            <Navbar />

            <main className="min-h-screen bg-white py-12 px-6 lg:px-20">
                <div className="max-w-3xl mx-auto bg-[#BAEBD4] backdrop-blur-sm rounded-3xl overflow-hidden shadow-sm">

                    <div className="px-8 pb-6 pt-8">
                        {/* Info Dokter */}
                        <div className="flex items-center gap-5 mb-6">
                            <img
                                src={dokter.foto_dokter ?? '/images/editable-doctor-vector.jpg'}
                                alt={dokter.nama_dokter}
                                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                                onError={(e) => {
                                    e.currentTarget.src = '/images/editable-doctor-vector.jpg';
                                }}
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
                                    <p className="text-slate-400 text-sm text-center py-8">Belum ada jadwal tersedia</p>
                                ) : (
                                    <div className="space-y-6">
                                        {Object.entries(jadwalPerPoli).map(([poli, sesi], i) => {
                                            const sorted = [...sesi].sort((a, b) => {
                                                const da = dayOrder.indexOf(a.hari);
                                                const db = dayOrder.indexOf(b.hari);
                                                if (da !== db) return da - db;
                                                return a.jam_mulai.localeCompare(b.jam_mulai);
                                            });

                                            return (
                                                <div key={i} className="border-l-4 border-[#2D8A5B] pl-4">
                                                    {/* Header Poli */}
                                                    <div className="mb-4">
                                                        <h3 className="text-lg font-bold text-slate-800">{poli}</h3>
                                                        <p className="text-xs text-slate-500 mt-1">{dokter.spesialis}</p>
                                                    </div>

                                                    {/* Grid Jadwal */}
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                                        {sorted.map((s, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="bg-gradient-to-br from-[#E8F5F1] to-[#D4EDE8] border border-[#B8E0D5] rounded-xl p-4 hover:shadow-md transition hover:scale-105"
                                                            >
                                                                <div className="flex items-start justify-between mb-2">
                                                                    <div className="flex-1">
                                                                        <p className="text-sm font-semibold text-slate-700">{s.hari}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex items-center gap-2 mt-3">
                                                                    <svg className="w-4 h-4 text-[#2D8A5B]" fill="currentColor" viewBox="0 0 20 20">
                                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                                    </svg>
                                                                    <p className="text-sm font-bold text-slate-800">
                                                                        {formatTime(s.jam_mulai)} - {formatTime(s.jam_selesai)}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
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