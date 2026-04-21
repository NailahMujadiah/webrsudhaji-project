import { Link } from '@inertiajs/react';

export default function Navbar() {
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
                    <Link href="/profil" className="text-sm font-medium text-slate-600 hover:text-green-600 transition">Profil</Link>
                    <Link href="/layanan-fasilitas" className="text-sm font-medium text-slate-600 hover:text-green-600 transition">Layanan</Link>
                    <Link href="/edukasi" className="text-sm font-medium text-slate-600 hover:text-green-600 transition">Edukasi</Link>
                    <Link href="/daftar-dokter" className="text-sm font-medium text-slate-600 hover:text-green-600 transition">Dokter Kami</Link>
                </div>

                {/* Tombol Kanan */}
                {/* <div className="flex items-center gap-3">
                    <Link
                        href={route('login')}
                        className="text-sm font-semibold text-slate-600 hover:text-green-600"
                    >
                        Masuk
                    </Link>
                    <Link
                        href={route('register')}
                        className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 transition"
                    >
                        Daftar
                    </Link>
                </div> */}
            </div>
        </nav>
    );
}