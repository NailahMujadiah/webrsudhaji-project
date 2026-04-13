import { Head } from '@inertiajs/react';

export default function Beranda() {
    return (
        <>
            <Head title="Beranda RSUD Haji" />
            <div className="min-h-screen bg-slate-50 p-8">
                <header className="bg-white shadow-sm p-4 rounded-lg flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-green-700">RSUD HAJI MAKASSAR</h1>
                    <nav className="space-x-4">
                        <a href="#" className="text-slate-600 hover:text-green-600">Layanan</a>
                        <a href="#" className="text-slate-600 hover:text-green-600">Kontak</a>
                    </nav>
                </header>

                <main className="mt-10 text-center">
                    <h2 className="text-4xl font-extrabold text-slate-800">Selamat Datang di Sistem Informasi</h2>
                    <p className="text-slate-500 mt-2">Silakan pilih menu untuk memulai operasional.</p>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500">
                            <h3 className="font-bold">Pendaftaran</h3>
                            <p className="text-sm text-slate-400">Input data pasien baru</p>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}