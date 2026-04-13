import { Head, Link } from '@inertiajs/react';

export default function Profil() {
    return (
        <>
            <Head title="Profil - RSUD Haji Makassar" />
            
            <div className="min-h-screen bg-white font-sans text-slate-900">
                {/* Simple Navbar */}
                <nav className="flex items-center justify-between border-b bg-white px-6 py-4 lg:px-20">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded bg-green-600 flex items-center justify-center text-white font-bold">H</div>
                        <span className="font-bold text-slate-800 text-lg">RSUD HAJI</span>
                    </Link>
                    <Link href="/beranda" className="text-sm font-medium text-green-600 hover:underline">
                        &larr; Kembali ke Beranda
                    </Link>
                </nav>

                {/* Hero Section Profil */}
                <div className="bg-slate-50 py-16 px-6 text-center">
                    <h1 className="text-4xl font-extrabold text-slate-900 lg:text-5xl">Profil Rumah Sakit</h1>
                    <p className="mt-4 text-lg text-slate-600">Mengenal lebih dekat RSUD Haji Makassar.</p>
                </div>

                {/* Konten Utama */}
                <main className="max-w-5xl mx-auto px-6 py-12 leading-relaxed">
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl font-bold text-green-700 mb-4 italic">"Melayani dengan Hati dan Profesional"</h2>
                            <p className="text-slate-600 mb-4">
                                RSUD Haji Makassar merupakan rumah sakit milik Pemerintah Provinsi Sulawesi Selatan yang berkomitmen memberikan pelayanan kesehatan berkualitas dengan nilai-nilai islami dan profesionalisme tinggi.
                            </p>
                            <p className="text-slate-600">
                                Terletak di jantung kota Makassar, kami terus bertransformasi menjadi pusat layanan kesehatan rujukan yang modern dan terpercaya bagi masyarakat Sulawesi Selatan.
                            </p>
                        </div>
                        <div className="bg-slate-200 aspect-video rounded-2xl flex items-center justify-center text-slate-400 border-2 border-dashed border-slate-300">
                            [ Foto Gedung RSUD Haji ]
                        </div>
                    </section>

                    <hr className="my-16 border-slate-100" />

                    {/* Visi & Misi */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
                            <h3 className="text-xl font-bold text-green-800 mb-4">Visi</h3>
                            <p className="text-green-900 leading-relaxed">
                                Menjadi Rumah Sakit Rujukan Utama di Sulawesi Selatan yang Unggul dalam Pelayanan, Pendidikan, dan Penelitian yang Berstandar Internasional.
                            </p>
                        </div>
                        <div className="bg-slate-900 p-8 rounded-2xl text-white">
                            <h3 className="text-xl font-bold mb-4">Misi</h3>
                            <ul className="list-disc list-inside space-y-2 text-slate-300">
                                <li>Memberikan pelayanan kesehatan paripurna yang bermutu.</li>
                                <li>Meningkatkan SDM yang profesional dan berintegritas.</li>
                                <li>Menyediakan sarana prasarana medis yang modern.</li>
                                <li>Menyelenggarakan tata kelola RS yang akuntabel.</li>
                            </ul>
                        </div>
                    </section>
                </main>

                <footer className="py-10 border-t mt-10 text-center text-slate-400 text-sm">
                    RSUD Haji Makassar &copy; 2026 - Proyek Magang Nailah
                </footer>
            </div>
        </>
    );
}