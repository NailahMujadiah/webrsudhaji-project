import { Link } from '@inertiajs/react';
import { useState } from 'react';
const [showProfil, setShowProfil] = useState(false);
const [showLayanan, setShowLayanan] = useState(false);
let profilTimeout: ReturnType<typeof setTimeout>;
let layananTimeout: ReturnType<typeof setTimeout>;

const layananMenu = [
    { label: 'Poliklinik', href: '/layanan-fasilitas#poliklinik' },
    { label: 'Layanan Unggulan', href: '/layanan-fasilitas#unggulan' },
    { label: 'Layanan Rawat Jalan', href: '/layanan-fasilitas#rawat-jalan' },
    { label: 'Layanan Rawat Inap', href: '/layanan-fasilitas#rawat-inap' },
    { label: 'Layanan Rawat Intensif', href: '/layanan-fasilitas#rawat-intensif' },
    { label: 'Sarana dan Prasarana', href: '/layanan-fasilitas#sarana' },
    { label: 'Fasilitas Penunjang', href: '/layanan-fasilitas#penunjang' },
];

const profilMenu = [
    { label: 'Profil', href: '/profil' },
    { label: 'Struktur Organisasi', href: '/struktur-organisasi' },
];

export default function Navbar() {
    const [showLayanan, setShowLayanan] = useState(false);
    const [showProfil, setShowProfil] = useState(false);

    return (
        <nav className="sticky top-0 z-50 shadow-sm">
            {/* --- BARIS ATAS (TOP BAR HIJAU) --- */}
            <div className="bg-[#2D8A5B] text-white py-2 px-6 lg:px-20 flex justify-between items-center text-xs md:text-sm">
                <div className="flex gap-4">
                    <span className="flex items-center gap-1">
                        📞 (0411) 8111411
                    </span>
                    <span className="hidden md:flex items-center gap-1">
                        ✉️ info@rsudhaji.com
                    </span>
                </div>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-green-200">Emergency</a>
                    <a href="#" className="hover:text-green-200">Bantuan</a>
                </div>
            </div>

            {/* --- BARIS BAWAH (MENU NAVIGASI PUTIH) --- */}
            <div className="bg-white/90 backdrop-blur-md border-b px-6 py-4 lg:px-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <img
                        src="/images/LogoHaji.png"
                        alt="Gedung RSUD Haji"
                        className="w-20 h-10 object-cover rounded-xl"
                    />
                    <span className="flex flex-col leading-tight text-lg font-bold tracking-tight text-slate-800">
                        <span>RSUD HAJI</span>
                        <span className="text-green-600">MAKASSAR</span>
                    </span>
                </Link>

                {/* Menu Tengah */}
                <div className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-sm font-medium text-slate-600 hover:text-green-600 transition">Beranda</Link>

                    {/* Dropdown Profil */}
                    <div
                        className="relative"
                        onMouseEnter={() => setShowProfil(true)}
                        onMouseLeave={() => setShowProfil(false)}
                    >
                        <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-green-600 transition">
                            Profil
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {showProfil && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-50">
                                {profilMenu.map((item, i) => (
                                    <Link
                                        key={i}
                                        href={item.href}
                                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-green-50 hover:text-green-600 transition"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Dropdown Layanan */}
                    <div
                        className="relative"
                        onMouseEnter={() => setShowLayanan(true)}
                        onMouseLeave={() => setShowLayanan(false)}
                    >
                        <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-green-600 transition">
                            Layanan
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {showLayanan && (
                            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-50">
                                {layananMenu.map((item, i) => (
                                    <Link
                                        key={i}
                                        href={item.href}
                                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-green-50 hover:text-green-600 transition"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link href="/edukasi" className="text-sm font-medium text-slate-600 hover:text-green-600 transition">Edukasi</Link>
                    <Link href="/daftar-dokter" className="text-sm font-medium text-slate-600 hover:text-green-600 transition">Dokter Kami</Link>
                </div>
            </div>
        </nav>
    );
}