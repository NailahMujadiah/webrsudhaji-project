import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

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
    const activeViceDirector = viceDirectors.find((viceDirector) => viceDirector.id === activeViceDirectorId) ?? null;

    return (
        <div className="p-6">
            <div className="group bg-white border border-[#E5E7E9] rounded shadow-md p-6 text-center max-w-3xl mx-auto transition duration-300 ease-out hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl">
                <img
                    src="/images/struktur-organisasi/dokter.jpg"
                    className="mx-auto aspect-[3/4] w-44 rounded-lg border-2 border-[#E5E7E9] object-cover transition duration-300 ease-out group-hover:scale-[1.02] sm:w-52"
                    alt="Direktur"
                />
                <h3 className="mt-4 font-semibold text-gray-800">Dr. AAA</h3>
                <p className="text-green-600 font-medium">
                    Direktur RSUD Haji Makassar
                </p>
            </div>

            <div
                className="mt-8 rounded-2xl border border-[#E5E7E9] bg-[#F8F9FA] p-4 shadow-sm"
                onMouseLeave={() => setActiveViceDirectorId(null)}
            >
                <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">Wakil Direktur</p>
                    <h3 className="mt-1 text-xl font-bold text-gray-800">
                        {activeViceDirector ? 'Fokus pada kartu aktif' : 'Arahkan kursor ke salah satu kartu'}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                        {activeViceDirector
                            ? 'Kartu aktif berada di tengah dan informasi tambahan ditampilkan di bawahnya.'
                            : 'Saat kursor masuk ke salah satu kartu, kartu tersebut akan diperbesar dan yang lain disembunyikan.'}
                    </p>
                </div>

                {!activeViceDirector ? (
                    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                        {viceDirectors.map((viceDirector) => (
                            <button
                                key={viceDirector.id}
                                type="button"
                                onMouseEnter={() => setActiveViceDirectorId(viceDirector.id)}
                                onFocus={() => setActiveViceDirectorId(viceDirector.id)}
                                className="group rounded-2xl border border-[#E5E7E9] bg-white p-4 text-center shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                            >
                                <img
                                    src="/images/struktur-organisasi/dokter.jpg"
                                    className="mx-auto aspect-[3/4] w-32 rounded-lg border-2 border-[#E5E7E9] object-cover transition duration-300 ease-out group-hover:scale-[1.03] sm:w-36"
                                    alt={viceDirector.role}
                                />
                                <h4 className="mt-3 font-semibold text-gray-800">{viceDirector.name}</h4>
                                <p className="text-green-600 text-sm font-medium">{viceDirector.role}</p>
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="mt-6">
                        <div className="mx-auto max-w-xl rounded-2xl border border-[#E5E7E9] bg-white p-6 text-center shadow-xl transition duration-300 ease-out">
                            <img
                                src="/images/struktur-organisasi/dokter.jpg"
                                className="mx-auto aspect-[3/4] w-40 rounded-lg border-2 border-[#E5E7E9] object-cover transition duration-300 ease-out sm:w-48"
                                alt={activeViceDirector.role}
                            />
                            <h4 className="mt-4 text-lg font-semibold text-gray-800">{activeViceDirector.name}</h4>
                            <p className="text-green-600 font-medium">{activeViceDirector.role}</p>
                            <p className="mt-3 text-sm text-gray-500">
                                {activeViceDirector.focus}
                            </p>
                        </div>

                        <div className="mt-6 grid gap-3 md:grid-cols-3">
                            <div className="rounded-xl bg-white p-4 shadow-sm">
                                <p className="text-xs uppercase tracking-wide text-gray-500">Bidang</p>
                                <p className="mt-1 text-sm font-semibold text-gray-800">{activeViceDirector.field}</p>
                            </div>
                            <div className="rounded-xl bg-white p-4 shadow-sm">
                                <p className="text-xs uppercase tracking-wide text-gray-500">Fokus</p>
                                <p className="mt-1 text-sm font-semibold text-gray-800">{activeViceDirector.focus}</p>
                            </div>
                            <div className="rounded-xl bg-white p-4 shadow-sm">
                                <p className="text-xs uppercase tracking-wide text-gray-500">Peran</p>
                                <p className="mt-1 text-sm font-semibold text-gray-800">{activeViceDirector.responsibility}</p>
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
            <h3 className="text-xl font-bold mb-4">Struktur Organisasi RSUD Haji</h3>
            <p className="text-slate-600 mb-4">Berikut adalah struktur organisasi rumah sakit kami:</p>
            
            <div className="mb-6 overflow-hidden rounded border border-slate-300 bg-slate-100 shadow-sm">
                <iframe
                    src="/pdfs/Struktur%20RSUD%20Haji%20Makassar.pdf"
                    title="Struktur Organisasi RSUD Haji"
                    className="h-[700px] w-full"
                />
            </div>
            
            <h4 className="font-semibold mb-3 text-slate-900">Daftar Struktur:</h4>
            <ul className="space-y-3 list-disc list-inside text-slate-700">
                <li>Direktur Utama</li>
                <li>Wakil Direktur Pelayanan</li>
                <li>Wakil Direktur Penunjang</li>
                <li>Kepala Instalasi Rawat Jalan</li>
                <li>Kepala Instalasi Rawat Inap</li>
                <li>Kepala Sub Bagian Umum</li>
            </ul>
        </div>
    ),
    2: <ProfilDireksiTab />,
    3: (
        <div className="p-6">
            <h3 className="text-xl font-bold mb-4">Daftar Unit Kerja</h3>
            <p className="text-slate-600 mb-4">Unit-unit kerja di RSUD Haji:</p>
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <p className="font-semibold text-blue-900">Rawat Jalan</p>
                </div>
                <div className="bg-green-50 p-3 rounded border border-green-200">
                    <p className="font-semibold text-green-900">Rawat Inap</p>
                </div>
                <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <p className="font-semibold text-purple-900">Laboratorium</p>
                </div>
                <div className="bg-orange-50 p-3 rounded border border-orange-200">
                    <p className="font-semibold text-orange-900">Farmasi</p>
                </div>
            </div>
        </div>
    ),
};

export default function StrukturOrganisasi() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <Head title="Struktur Organisasi" />

            <div className="min-h-screen bg-white text-slate-900 dark:bg-white dark:text-slate-900">
                <nav className="flex items-center justify-between bg-teal-700 px-6 py-3 text-white">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-white" />
                        <span className="font-semibold">RSUD Haji Makassar</span>
                    </Link>

                    <ul className="hidden gap-6 text-sm md:flex">
                        <li><Link href="/profil">Profil</Link></li>
                        <li><Link href="/daftar-dokter">Layanan &amp; Fasilitas</Link></li>
                        <li><Link href="/daftar-dokter">Dokter Kami</Link></li>
                        <li><Link href="/struktur-organisasi">Edukasi</Link></li>
                        <li><Link href="/struktur-organisasi">Kontak</Link></li>
                    </ul>
                </nav>

                <div className="mx-auto mt-6 max-w-6xl rounded bg-green-200 p-6">
                    <div className="rounded bg-green-400 py-3 text-center text-lg font-bold text-white">
                        STRUKTUR ORGANISASI
                    </div>

                    <div className="mt-4 flex flex-wrap">
                        {tabsConfig.map((tab) => (
                            <button
                                key={tab.label}
                                onClick={() => setActiveTab(tab.id)}
                                type="button"
                                className={[
                                    'px-4 py-2 text-sm font-medium',
                                    activeTab === tab.id ? 'bg-yellow-400' : 'bg-gray-200',
                                ].join(' ')}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="mt-4 rounded bg-white border border-gray-300 min-h-96">
                        {tabContents[activeTab]}
                    </div>
                </div>
            </div>
        </>
    );
}