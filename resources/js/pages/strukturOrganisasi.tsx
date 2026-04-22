import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const tabsConfig = [
    { id: 1, label: 'Struktur Organisasi dan SK' },
    { id: 2, label: 'Profil Direksi' },
    { id: 3, label: 'Daftar Unit Kerja' },
];

const viceDirectors = [
    {
        id: 1,
        name: 'Dr. AAA',
        role: 'Wadir Pelayanan Medik, Keperawatan, dan Diklit',
        focus: 'Pelayanan klinis terpadu',
        field: 'Medik & Keperawatan',
        responsibility: 'Mengkoordinasikan pelayanan klinis, keperawatan, dan pendidikan.',
    },
    {
        id: 2,
        name: 'Dr. AAA',
        role: 'Wadir SDM, Keuangan, dan Umum',
        focus: 'Manajemen internal',
        field: 'SDM & Keuangan',
        responsibility: 'Mengelola sumber daya manusia, administrasi, keuangan, dan urusan umum.',
    },
    {
        id: 3,
        name: 'Dr. AAA',
        role: 'Wadir Pelayanan Penunjang, Kefarmasian, dan Pemasaran',
        focus: 'Dukungan layanan rumah sakit',
        field: 'Penunjang & Pemasaran',
        responsibility: 'Mengoordinasikan pelayanan penunjang, farmasi, dan pengembangan pemasaran.',
    },
];

function ProfilDireksiTab() {
    const [activeViceDirectorId, setActiveViceDirectorId] = useState<number | null>(null);
    const activeViceDirector = viceDirectors.find((vd) => vd.id === activeViceDirectorId) ?? null;

    return (
        <div className="p-6">
            {/* Direktur Utama */}
            <div className="group bg-white border border-[#E5E7E9] rounded-2xl shadow-md p-6 text-center max-w-xs mx-auto transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <img
                    src="/images/struktur-organisasi/dokter.jpg"
                    className="mx-auto aspect-[3/4] w-36 rounded-lg border-2 border-[#E5E7E9] object-cover transition duration-300 group-hover:scale-[1.02]"
                    alt="Direktur"
                />
                <h3 className="mt-4 font-semibold text-gray-800">Dr. AAA</h3>
                <p className="text-green-600 text-sm font-medium">Direktur RSUD Haji Makassar</p>
            </div>

            {/* Wakil Direktur */}
            <div
                className="mt-8 rounded-2xl border border-[#E5E7E9] bg-[#F8F9FA] p-6 shadow-sm"
                onMouseLeave={() => setActiveViceDirectorId(null)}
            >
                <div className="text-center mb-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">Wakil Direktur</p>
                    <h3 className="mt-1 text-lg font-bold text-gray-800">
                        {activeViceDirector ? activeViceDirector.name : 'Arahkan kursor ke salah satu kartu'}
                    </h3>
                </div>

                {!activeViceDirector ? (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {viceDirectors.map((vd) => (
                            <button
                                key={vd.id}
                                type="button"
                                onMouseEnter={() => setActiveViceDirectorId(vd.id)}
                                onFocus={() => setActiveViceDirectorId(vd.id)}
                                className="group rounded-2xl border border-[#E5E7E9] bg-white p-4 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                            >
                                <img
                                    src="/images/struktur-organisasi/dokter.jpg"
                                    className="mx-auto aspect-[3/4] w-28 rounded-lg border-2 border-[#E5E7E9] object-cover transition duration-300 group-hover:scale-[1.03]"
                                    alt={vd.role}
                                />
                                <h4 className="mt-3 font-semibold text-gray-800 text-sm">{vd.name}</h4>
                                <p className="text-green-600 text-xs font-medium mt-1 line-clamp-2">{vd.role}</p>
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="mt-2">
                        <div className="mx-auto max-w-sm rounded-2xl border border-[#E5E7E9] bg-white p-6 text-center shadow-xl">
                            <img
                                src="/images/struktur-organisasi/dokter.jpg"
                                className="mx-auto aspect-[3/4] w-36 rounded-lg border-2 border-[#E5E7E9] object-cover"
                                alt={activeViceDirector.role}
                            />
                            <h4 className="mt-4 text-base font-semibold text-gray-800">{activeViceDirector.name}</h4>
                            <p className="text-green-600 text-sm font-medium mt-1">{activeViceDirector.role}</p>
                        </div>

                        <div className="mt-4 grid gap-3 md:grid-cols-3">
                            <div className="rounded-xl bg-white p-4 shadow-sm h-24 flex flex-col justify-between">
                                <p className="text-xs uppercase tracking-wide text-gray-400">Bidang</p>
                                <p className="text-sm font-semibold text-gray-800 line-clamp-2">{activeViceDirector.field}</p>
                            </div>
                            <div className="rounded-xl bg-white p-4 shadow-sm h-24 flex flex-col justify-between">
                                <p className="text-xs uppercase tracking-wide text-gray-400">Fokus</p>
                                <p className="text-sm font-semibold text-gray-800 line-clamp-2">{activeViceDirector.focus}</p>
                            </div>
                            <div className="rounded-xl bg-white p-4 shadow-sm h-24 flex flex-col justify-between">
                                <p className="text-xs uppercase tracking-wide text-gray-400">Peran</p>
                                <p className="text-sm font-semibold text-gray-800 line-clamp-2">{activeViceDirector.responsibility}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

const tabContents: Record<number, React.ReactNode> = {
    1: (
        <div className="p-6">
            <h3 className="text-xl font-bold mb-4 text-slate-800">Struktur Organisasi RSUD Haji</h3>
            <p className="text-slate-500 text-sm mb-4">Berikut adalah struktur organisasi rumah sakit kami:</p>
            <div className="mb-6 overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                <iframe
                    src="/pdfs/Struktur%20RSUD%20Haji%20Makassar.pdf"
                    title="Struktur Organisasi RSUD Haji"
                    className="h-[700px] w-full"
                />
            </div>
            <h4 className="font-semibold mb-3 text-slate-800">Daftar Struktur:</h4>
            <ul className="space-y-2 text-sm text-slate-600">
                {['Direktur Utama', 'Wakil Direktur Pelayanan', 'Wakil Direktur Penunjang', 'Kepala Instalasi Rawat Jalan', 'Kepala Instalasi Rawat Inap', 'Kepala Sub Bagian Umum'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-600 shrink-0" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    ),
    2: <ProfilDireksiTab />,
    3: (
        <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-slate-800">Daftar Unit Kerja</h3>
            <p className="text-slate-500 text-sm mb-6">Unit-unit kerja di RSUD Haji Makassar:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                    { label: 'Rawat Jalan', color: 'bg-blue-50 border-blue-200 text-blue-900' },
                    { label: 'Rawat Inap', color: 'bg-green-50 border-green-200 text-green-900' },
                    { label: 'Laboratorium', color: 'bg-purple-50 border-purple-200 text-purple-900' },
                    { label: 'Farmasi', color: 'bg-orange-50 border-orange-200 text-orange-900' },
                    { label: 'Radiologi', color: 'bg-pink-50 border-pink-200 text-pink-900' },
                    { label: 'IGD', color: 'bg-red-50 border-red-200 text-red-900' },
                ].map((unit, i) => (
                    <div key={i} className={`p-4 rounded-xl border font-semibold text-sm ${unit.color}`}>
                        {unit.label}
                    </div>
                ))}
            </div>
        </div>
    ),
};

export default function StrukturOrganisasi() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <Head title="Struktur Organisasi - RSUD Haji Makassar" />
            <Navbar />

            <main className="min-h-screen bg-[#BAEBD4] py-12 px-6 lg:px-20">
                <div className="max-w-6xl mx-auto">

                    {/* Judul */}
                    <div className="mb-6">
                        <h1 className="text-3xl font-extrabold text-slate-800">Struktur Organisasi</h1>
                        <div className="w-12 h-1 bg-green-600 rounded mt-2" />
                    </div>

                    {/* Tab Buttons */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tabsConfig.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                type="button"
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                                    activeTab === tab.id
                                        ? 'bg-[#2D8A5B] text-white'
                                        : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-50'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Konten Tab */}
                    <div className="rounded-2xl bg-white shadow-sm border border-slate-100 min-h-96">
                        {tabContents[activeTab]}
                    </div>

                </div>
            </main>

            <Footer />
        </>
    );
}