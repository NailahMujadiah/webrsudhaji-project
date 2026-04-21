import { Head } from '@inertiajs/react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { useState } from 'react';
import { Link } from '@inertiajs/react';



export default function DetailDokter() {
    const [activeTab, setActiveTab] = useState<'jadwal' | 'profil'>('jadwal');

    const dokter = {
        nama: 'dr. Gracia Angga Widjaja, SpA',
        spesialis: 'Spesialis Gizi Klinik',
        img: '/images/dokterdummy.jpeg',
        profil: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam uma tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.',
        jadwal: [
            {
                klinik: 'Klinik Paru Padma',
                sesi: [
                    { hari: 'Selasa', jam: '17:00 - 18:00' },
                    { hari: 'Kamis', jam: '17:00 - 18:00' },
                    { hari: 'Sabtu', jam: '11:00 - 12:00' },
                ],
            },
            {
                klinik: 'Klinik Jantung',
                sesi: [
                    { hari: 'Senin', jam: '08:00 - 10:00' },
                    { hari: 'Rabu', jam: '13:00 - 15:00' },
                ],
            },
        ],
    };

    return (
        <>
            <Head title={`${dokter.nama} - RSUD Haji Makassar`} />
            <Navbar />

            <main className="min-h-screen bg-[#BAEBD4] py-12 px-6 lg:px-20">
                <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-sm">

                    {/* Header Hijau */}
                    {/* <div className="bg-[#2D8A5B] h-28" /> */}

                    {/* Info Dokter */}
                    <div className="px-8 pb-6 pt-8">
                        <div className="flex items-end gap-5 mb-6">
                            <img
                                src={dokter.img}
                                alt={dokter.nama}
                                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                            />
                            <div className="mb-2">
                                <h1 className="text-xl font-bold text-slate-800">{dokter.nama}</h1>
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

                        {/* Konten Tab Jadwal */}
                        {activeTab === 'jadwal' && (
                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                {dokter.jadwal.map((j, i) => (
                                    <div key={i} className={i > 0 ? 'mt-6' : ''}>
                                        <p className="font-bold text-slate-700 mb-3">{j.klinik}</p>
                                        <table className="w-full text-sm text-slate-600">
                                            <tbody>
                                                {j.sesi.map((s, idx) => (
                                                    <tr key={idx} className="border-b border-slate-100 last:border-0">
                                                        <td className="py-2 w-32">{s.hari}</td>
                                                        <td className="py-2 text-right">{s.jam}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Konten Tab Profil */}
                        {activeTab === 'profil' && (
                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <h2 className="font-bold text-slate-800 mb-3">Profil Dokter</h2>
                                <p className="text-sm text-slate-600 leading-relaxed">{dokter.profil}</p>
                            </div>
                        )}

                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}