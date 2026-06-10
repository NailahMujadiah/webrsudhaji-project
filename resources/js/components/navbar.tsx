import { Link } from '@inertiajs/react';
import { useRef, useState } from 'react';
import { useCurrentUrl } from '@/hooks/use-current-url';
import { cn } from '@/lib/utils';

const layananMenu = [
    { label: 'Layanan Unggulan', href: '/layanan/unggulan' },
    { label: 'Layanan Gawat Darurat', href: '/layanan/gawat-darurat' },
    { label: 'Layanan Rawat Jalan', href: '/layanan/rawat-jalan' },
    { label: 'Layanan Rawat Inap', href: '/layanan/rawat-inap' },
    { label: 'Layanan Rawat Intensif', href: '/layanan/rawat-intensif' },
    { label: 'Sarana dan Prasarana', href: '/layanan/sarana' },
    { label: 'Fasilitas Penunjang', href: '/layanan/penunjang' },
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
    const { isCurrentUrl, isCurrentOrParentUrl } = useCurrentUrl();
    const profilCloseTimer = useRef<number | null>(null);
    const layananCloseTimer = useRef<number | null>(null);

    const clearTimer = (timerRef: React.MutableRefObject<number | null>) => {
        if (timerRef.current !== null) {
            window.clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };

    const openDropdown = (
        setOpen: React.Dispatch<React.SetStateAction<boolean>>,
        timerRef: React.MutableRefObject<number | null>,
    ) => {
        clearTimer(timerRef);
        setOpen(true);
    };

    const closeDropdown = (
        setOpen: React.Dispatch<React.SetStateAction<boolean>>,
        timerRef: React.MutableRefObject<number | null>,
    ) => {
        clearTimer(timerRef);
        timerRef.current = window.setTimeout(() => {
            setOpen(false);
            timerRef.current = null;
        }, 140);
    };

    const topLinkClass = (active: boolean) =>
        cn(
            'inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ease-out',
            active
                ? 'bg-green-600 text-white shadow-md shadow-green-200/70 ring-1 ring-green-500/20'
                : 'text-slate-600 hover:-translate-y-0.5 hover:bg-green-50 hover:text-green-700 hover:shadow-md hover:shadow-green-100/60',
        );

    const dropdownTriggerClass = (active: boolean) =>
        cn(
            'inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ease-out',
            active
                ? 'bg-green-600 text-white shadow-md shadow-green-200/70 ring-1 ring-green-500/20'
                : 'text-slate-600 hover:-translate-y-0.5 hover:bg-green-50 hover:text-green-700 hover:shadow-md hover:shadow-green-100/60',
        );

    const dropdownPanelClass = (open: boolean, widthClass: string) =>
        cn(
            'absolute left-0 top-full z-50 mt-1 origin-top rounded-2xl border border-slate-100 bg-white py-2 shadow-xl shadow-slate-200/70 transition-all duration-200 ease-out',
            widthClass,
            open
                ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
                : 'pointer-events-none -translate-y-2 scale-95 opacity-0',
        );

    const submenuClass = (active: boolean) =>
        cn(
            'block px-4 py-2 text-sm transition-all duration-200',
            active
                ? 'bg-green-50 font-semibold text-green-700'
                : 'text-slate-600 hover:bg-green-50 hover:text-green-700',
        );

    const mobileLinkClass = (active: boolean) =>
        cn(
            'text-sm font-medium py-2 transition-all duration-200',
            active
                ? 'text-green-700 font-semibold'
                : 'text-slate-600 hover:text-green-700',
        );

    const mobileSubmenuClass = (active: boolean) =>
        cn(
            'text-sm py-1.5 transition-all duration-200',
            active
                ? 'text-green-700 font-semibold'
                : 'text-slate-500 hover:text-green-700',
        );

    const isProfilActive = isCurrentUrl('/profil') || isCurrentUrl('/struktur-organisasi');
    const isLayananActive = isCurrentOrParentUrl('/layanan');
    const isEdukasiActive = isCurrentUrl('/edukasi');
    const isDokterActive = isCurrentUrl('/daftar-dokter');

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
                    <a href="tel:081352507039" className="hover:text-green-200">Ambulans Peduli</a>
                </div>
            </div>

            {/* MAIN NAV */}
            <div className="bg-white/90 backdrop-blur-md border-b px-6 py-4 lg:px-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
    <img
        src="/images/LogoHAJI.webp"
        alt="Logo RSUD Haji"
        className="h-12 w-auto"
    />
</Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    <Link href="/" className={topLinkClass(isCurrentUrl('/'))}>
                        Beranda
                    </Link>

                    {/* Dropdown Profil */}
                    <div
                        className="relative"
                        onMouseEnter={() => openDropdown(setShowProfil, profilCloseTimer)}
                        onMouseLeave={() => closeDropdown(setShowProfil, profilCloseTimer)}
                    >
                        <button type="button" className={dropdownTriggerClass(isProfilActive)}>
                            Profil
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div
                            className={dropdownPanelClass(showProfil, 'w-52')}
                            onMouseEnter={() => openDropdown(setShowProfil, profilCloseTimer)}
                            onMouseLeave={() => closeDropdown(setShowProfil, profilCloseTimer)}
                        >
                            {profilMenu.map((item, i) => (
                                <Link key={i} href={item.href} className={submenuClass(isCurrentUrl(item.href))}>
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Dropdown Layanan */}
                    <div
                        className="relative"
                        onMouseEnter={() => openDropdown(setShowLayanan, layananCloseTimer)}
                        onMouseLeave={() => closeDropdown(setShowLayanan, layananCloseTimer)}
                    >
                        <button type="button" className={dropdownTriggerClass(isLayananActive)}>
                            Layanan
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div
                            className={dropdownPanelClass(showLayanan, 'w-60')}
                            onMouseEnter={() => openDropdown(setShowLayanan, layananCloseTimer)}
                            onMouseLeave={() => closeDropdown(setShowLayanan, layananCloseTimer)}
                        >
                            {layananMenu.map((item, i) => (
                                <Link key={i} href={item.href} className={submenuClass(isCurrentUrl(item.href))}>
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link href="/edukasi" className={topLinkClass(isEdukasiActive)}>
                        Edukasi
                    </Link>
                    <Link href="/daftar-dokter" className={topLinkClass(isDokterActive)}>
                        Dokter Kami
                    </Link>
                </div>

                {/* Hamburger Button */}
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
                            className={mobileLinkClass(isCurrentUrl('/'))}
                            onClick={() => setMobileOpen(false)}
                        >
                            Beranda
                        </Link>

                        {/* Accordion Profil */}
                        <div>
                            <button
                                className={cn(
                                    'w-full flex items-center justify-between py-2 text-sm font-medium transition-all duration-200',
                                    isProfilActive ? 'text-green-700 font-semibold' : 'text-slate-600 hover:text-green-700',
                                )}
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
                                            className={mobileSubmenuClass(isCurrentUrl(item.href))}
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
                                className={cn(
                                    'w-full flex items-center justify-between py-2 text-sm font-medium transition-all duration-200',
                                    isLayananActive ? 'text-green-700 font-semibold' : 'text-slate-600 hover:text-green-700',
                                )}
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
                                            className={mobileSubmenuClass(isCurrentUrl(item.href))}
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
                            className={mobileLinkClass(isEdukasiActive)}
                            onClick={() => setMobileOpen(false)}
                        >
                            Edukasi
                        </Link>
                        <Link
                            href="/daftar-dokter"
                            className={mobileLinkClass(isDokterActive)}
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