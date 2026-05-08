import { Link } from '@inertiajs/react';
import { useState } from 'react';

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
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileLayanan, setMobileLayanan] = useState(false);
    const [mobileProfil, setMobileProfil] = useState(false);

    return (
        <nav className="sticky top-0 z-50 shadow-sm">
            {/* TOP BAR */}
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

            {/* MAIN NAV */}
            <div className="bg-white/90 backdrop-blur-md border-b px-6 py-4 lg:px-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <img
                        src="/images/LogoHaji.png"
                        alt="Logo RSUD Haji"
                        className="w-20 h-10 object-cover rounded-xl"
                    />
                    <span className="flex flex-col leading-tight text-lg font-bold tracking-tight text-slate-800">
                        <span>RSUD HAJI</span>
                        <span className="text-green-600">MAKASSAR</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-sm font-medium text-slate-600 hover:text-green-600 transition">
                        Beranda
                    </Link>

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
                            <div className="absolute top-full left-0 mt-0 w-48 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-50">
                                {profilMenu.map((item, i) => (
                                    <Link key={i} href={item.href} className="block px-4 py-2 text-sm text-slate-600 hover:bg-green-50 hover:text-green-600 transition">
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
                            <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-50">
                                {layananMenu.map((item, i) => (
                                    <Link key={i} href={item.href} className="block px-4 py-2 text-sm text-slate-600 hover:bg-green-50 hover:text-green-600 transition">
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link href="/edukasi" className="text-sm font-medium text-slate-600 hover:text-green-600 transition">Edukasi</Link>
                    <Link href="/daftar-dokter" className="text-sm font-medium text-slate-600 hover:text-green-600 transition">Dokter Kami</Link>
                </div>

                {/* Hamburger Button (mobile only) */}
                <button
                    className="md:hidden flex items-center justify-center p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-green-50 hover:text-green-600 transition"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white border-b border-slate-100 px-6 pb-4">
                    <div className="flex flex-col pt-2 gap-1">
                        <Link
                            href="/"
                            className="text-sm font-medium text-slate-600 hover:text-green-600 py-2 transition"
                            onClick={() => setMobileOpen(false)}
                        >
                            Beranda
                        </Link>

                        {/* Accordion Profil */}
                        <div>
                            <button
                                className="w-full flex items-center justify-between text-sm font-medium text-slate-600 hover:text-green-600 py-2 transition"
                                onClick={() => setMobileProfil(!mobileProfil)}
                            >
                                Profil
                                <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 transition-transform ${mobileProfil ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {mobileProfil && (
                                <div className="pl-4 flex flex-col gap-1 border-l-2 border-green-100 ml-1">
                                    {profilMenu.map((item, i) => (
                                        <Link
                                            key={i}
                                            href={item.href}
                                            className="text-sm text-slate-500 hover:text-green-600 py-1.5 transition"
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Accordion Layanan */}
                        <div>
                            <button
                                className="w-full flex items-center justify-between text-sm font-medium text-slate-600 hover:text-green-600 py-2 transition"
                                onClick={() => setMobileLayanan(!mobileLayanan)}
                            >
                                Layanan
                                <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 transition-transform ${mobileLayanan ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {mobileLayanan && (
                                <div className="pl-4 flex flex-col gap-1 border-l-2 border-green-100 ml-1">
                                    {layananMenu.map((item, i) => (
                                        <Link
                                            key={i}
                                            href={item.href}
                                            className="text-sm text-slate-500 hover:text-green-600 py-1.5 transition"
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link
                            href="/edukasi"
                            className="text-sm font-medium text-slate-600 hover:text-green-600 py-2 transition"
                            onClick={() => setMobileOpen(false)}
                        >
                            Edukasi
                        </Link>
                        <Link
                            href="/daftar-dokter"
                            className="text-sm font-medium text-slate-600 hover:text-green-600 py-2 transition"
                            onClick={() => setMobileOpen(false)}
                        >
                            Dokter Kami
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}