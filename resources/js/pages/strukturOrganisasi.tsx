import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const tabsConfig = [
    { id: 1, label: 'Struktur Organisasi dan SK' },
    { id: 2, label: 'Profil Direksi' },
    { id: 3, label: 'Kepala Instalasi' },
];

type ProfileNode = {
    id: number;
    position_id: number;
    nama_pejabat: string | null;
    foto_url: string | null;
    deskripsi_singkat: string | null;
    is_active: boolean;
    nama_display: string;
};

type OrganizationNode = {
    id: number;
    code: string;
    name: string;
    parent_id: number | null;
    sort_order: number;
    profile: ProfileNode | null;
    children?: OrganizationNode[];
};

type OrganizationProps = {
    organization?: {
        director: OrganizationNode | null;
        viceDirectors: OrganizationNode[];
    };
};

const viceDirectorStyles = [
    { border: 'border-green-500', text: 'text-green-600' },
    { border: 'border-amber-500', text: 'text-amber-600' },
    { border: 'border-indigo-500', text: 'text-indigo-600' },
];

function getDisplayName(node?: OrganizationNode | null): string {
    return node?.profile?.nama_display ?? node?.name ?? 'Belum diisi';
}

function getDisplayRole(node?: OrganizationNode | null): string {
    return node?.name ?? 'Jabatan belum tersedia';
}

function getPhotoUrl(node?: OrganizationNode | null): string {
    return node?.profile?.foto_url ?? '/images/struktur-organisasi/dokter.jpg';
}

function isActive(node?: OrganizationNode | null): boolean {
    return node?.profile?.is_active ?? true;
}

function ProfilDireksiTab() {
    const { organization } = usePage<OrganizationProps>().props;
    const director = organization?.director ?? null;
    const viceDirectors = organization?.viceDirectors ?? [];

    const maxChildren = Math.max(...viceDirectors.map((w) => (w.children ?? []).length), 0);

    return (
        <div className="p-6">
            {/* Direktur */}
            <div className="flex justify-center mb-12">
    <div className={`group bg-white border border-[#E5E7E9] rounded-2xl shadow-md p-6 text-center w-full max-w-xs transition duration-300 hover:-translate-y-1 hover:shadow-xl ${!isActive(director) ? 'opacity-70' : ''}`}>
        <img
            src={getPhotoUrl(director)}
            className="mx-auto aspect-[3/4] w-40 rounded-lg border-2 border-[#E5E7E9] object-cover transition duration-300 group-hover:scale-[1.02]"
            alt={getDisplayName(director)}
        />
        <h3 className="mt-4 font-semibold text-gray-800">{getDisplayName(director)}</h3>
        <p className="text-green-600 text-sm font-medium">{getDisplayRole(director)}</p>
        {director?.profile?.deskripsi_singkat ? (
            <p className="mt-2 text-xs text-slate-500 leading-relaxed">{director.profile.deskripsi_singkat}</p>
        ) : null}
        {!isActive(director) ? (
            <span className="mt-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">Nonaktif</span>
        ) : null}
    </div>
</div>

            <div className="border-t-2 border-dashed border-gray-300 mb-12" />

            {/* Baris 1: Card Wadir */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-0">
                {viceDirectors.map((wadir, index) => {
                    const styles = viceDirectorStyles[index] ?? viceDirectorStyles[0];
                    return (
                        <div key={wadir.id} className="flex flex-col items-center">
                            <div className={`bg-white border border-[#E5E7E9] rounded-2xl shadow-md p-4 text-center w-full h-full transition duration-300 hover:-translate-y-1 hover:shadow-xl border-t-4 ${styles.border} ${!isActive(wadir) ? 'opacity-70' : ''}`}>
                                <img
                                    src={getPhotoUrl(wadir)}
                                    className="mx-auto aspect-[3/4] w-24 rounded-lg border-2 border-[#E5E7E9] object-cover"
                                    alt={getDisplayName(wadir)}
                                />
                                <h4 className="mt-3 font-semibold text-gray-800 text-sm">{getDisplayName(wadir)}</h4>
                                <p className={`${styles.text} text-xs font-medium mt-1 line-clamp-2`}>{getDisplayRole(wadir)}</p>
                                {wadir.profile?.deskripsi_singkat ? (
                                    <p className="mt-2 text-[11px] text-slate-500 leading-relaxed line-clamp-3">{wadir.profile.deskripsi_singkat}</p>
                                ) : null}
                            </div>
                            {/* Connector ke baris children */}
                            <div className="w-0.5 h-6 bg-gray-300 mt-3" />
                        </div>
                    );
                })}
            </div>

            {/* Baris 2 dst: Children per baris, sejajar antar kolom */}
            {Array.from({ length: maxChildren }).map((_, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-3">
                    {viceDirectors.map((wadir, colIndex) => {
                        const styles = viceDirectorStyles[colIndex] ?? viceDirectorStyles[0];
                        const kb = (wadir.children ?? [])[rowIndex];
                        return (
                            <div key={`${wadir.id}-${rowIndex}`} className="flex flex-col items-center">
                                {kb ? (
                                    <div className={`bg-white border border-[#E5E7E9] rounded-2xl shadow-sm p-3 text-center w-full h-full transition duration-300 hover:-translate-y-1 hover:shadow-lg border-t-4 ${styles.border} ${!isActive(kb) ? 'opacity-70' : ''}`}>
                                        <img
                                            src={getPhotoUrl(kb)}
                                            className="mx-auto aspect-[3/4] w-20 rounded-lg border-2 border-[#E5E7E9] object-cover"
                                            alt={getDisplayName(kb)}
                                        />
                                        <h5 className="mt-2 font-semibold text-gray-800 text-xs">{getDisplayName(kb)}</h5>
                                        <p className="text-slate-500 text-xs font-medium mt-0.5 line-clamp-2">{getDisplayRole(kb)}</p>
                                        {kb.profile?.deskripsi_singkat ? (
                                            <p className="mt-1 text-[11px] text-slate-500 leading-relaxed line-clamp-3">{kb.profile.deskripsi_singkat}</p>
                                        ) : null}
                                    </div>
                                ) : (
                                    <div className="w-full" />
                                )}
                                {/* Connector ke baris berikutnya kalau masih ada */}
                                {kb && rowIndex < maxChildren - 1 ? (
                                    <div className="w-0.5 h-6 bg-gray-300 mt-3" />
                                ) : null}
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}

const tabContents: Record<number, React.ReactNode> = {
    1: (
        <div className="p-6">
    <h3 className="mb-4 text-xl font-bold text-slate-800">
        Struktur Organisasi RSUD Haji Makassar
    </h3>

    <div className="mx-auto mb-6 max-w-5xl overflow-hidden rounded-xl border border-slate-200 shadow-sm">
        <iframe
            src="/pdfs/Struktur-organisasi.pdf"
            title="Struktur Organisasi RSUD Haji"
            className="h-[700px] w-full"
        />
    </div>
</div>
    ),
    2: <ProfilDireksiTab />,
    3: (
        <div className="p-6">
            <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="min-w-full divide-y divide-slate-200 text-sm">
                    <thead className="bg-slate-100">
                        <tr>
                            <th className="px-4 py-3 text-left font-semibold text-slate-700">Nama Kepala Instalasi</th>
                            <th className="px-4 py-3 text-left font-semibold text-slate-700">Nama Pimpinan</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                        {[
                            { unit: 'Ka. Instalasi Rawat Inap', pimpinan: 'H. Isbair, S. Kep, Ns' },
                            { unit: 'Ka. Instalasi Rawat Jalan', pimpinan: 'dr. Hj. A. Diamarni Gandhis, MARS' },
                            { unit: 'Ka. Instalasi Gawat Darurat (IGD)', pimpinan: 'dr. Ardiansyah Sirajuddin, Sp.An' },
                            { unit: 'Ka. Instalasi OKB', pimpinan: 'dr. Haidir Bima, Sp. B(K)V' },
                            { unit: 'Ka. Instalasi Perawatan Intensif', pimpinan: 'dr. Kartika Handayani, Sp.An' },
                            { unit: 'Ka. Instalasi Radiologi', pimpinan: 'dr. Raden Selma, Sp.Rad' },
                            { unit: 'Ka. Instalasi Gizi', pimpinan: 'Yuli Yanti, S.ST' },
                            { unit: 'Ka. Instalasi Laboratorium', pimpinan: 'dr. Saraswati Wulandari Hartono, Sp.PK' },
                            { unit: 'Ka. Instalasi Farmasi', pimpinan: 'Hj. Fischa Rahmatullaily, S.Si, Apt' },
                            { unit: 'Ka. Instalasi IPS - RS', pimpinan: 'Darma, S.Si' },
                            { unit: 'Ka. Instalasi CSSD/ Laundry', pimpinan: 'Apt Salman, S.Si, M.Kes' },
                            { unit: 'Ka. Instalasi Rehabilitasi Medik', pimpinan: 'Agung Sahari, S. Ft, Physio' },
                        ].map((row, i) => (
                            <tr key={i} className="hover:bg-slate-50">
                                <td className="px-4 py-3 text-slate-700">{row.unit}</td>
                                <td className="px-4 py-3 text-slate-600">{row.pimpinan}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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

            <header>
                <section className="min-h-[50vh] bg-white">
                    {/* Hero */}
                    <section className="relative">
                        <img
                            src="/images/rsudhaji.jpg"
                            alt="Struktur Organisasi RSUD Haji Makassar"
                            className="h-64 w-full object-cover lg:h-80"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                        <div className="absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t from-white to-transparent" />
                        <div className="absolute bottom-8 left-6 lg:left-20">
                            <p className="mb-1 text-sm font-medium text-green-300">
                                Profil Organisasi
                            </p>
                            <h1 className="text-3xl font-extrabold text-white drop-shadow-lg lg:text-5xl">
                                Struktur Organisasi
                            </h1>
                        </div>
                    </section>
                    </section>
            </header>

            <main className="min-h-screen bg-white pb-12 px-6 lg:px-20">
                <div className="max-w-6xl mx-auto">

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