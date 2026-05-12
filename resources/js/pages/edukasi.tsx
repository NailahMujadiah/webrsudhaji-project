import { Head } from '@inertiajs/react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
export default function Edukasi() {
    const categories = [
        {
            title: "Artikel Kesehatan",
            desc: "Informasi tips dan trik menjaga kesehatan harian.",
            icon: "📄",
            color: "border-green-500",
            bg: "bg-green-50"
        },
        {
            title: "Berita",
            desc: "Update terbaru mengenai kegiatan dan informasi RSUD Haji.",
            icon: "📰",
            color: "border-blue-500",
            bg: "bg-blue-50"
        },
        {
            title: "Majalah Kesehatan",
            desc: "Publikasi berkala mengenai riset dan edukasi medis mendalam.",
            icon: "📚",
            color: "border-purple-500",
            bg: "bg-purple-50"
        }
    ];

    return (
        <>
            <Head title="Edukasi Kesehatan - RSUD Haji Makassar" />
            <Navbar />

            <main className="min-h-screen bg-white py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    
                    {/* Header Edukasi */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Pusat Edukasi & Informasi</h1>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            Dapatkan akses informasi kesehatan terpercaya langsung dari para tenaga medis profesional RSUD Haji Makassar.
                        </p>
                    </div>

                    {/* Layout Branching / Grid */}
                    <div className="relative">
                        {/* Garis Dekorasi ala Mind Map (Hanya muncul di desktop) */}
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-green-100 -translate-x-1/2 rounded-full"></div>

                        <div className="space-y-12 lg:space-y-24 relative">
                            {categories.map((cat, index) => (
                                <div 
                                    key={index} 
                                    className={`flex flex-col lg:flex-row items-center gap-8 ${
                                        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    }`}
                                >
                                    {/* Card Kategori */}
                                    <div className={`w-full lg:w-5/12 p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all duration-300 ${cat.bg} ${cat.color}`}>
                                        <div className="text-4xl mb-4">{cat.icon}</div>
                                        <h3 className="text-2xl font-bold text-slate-800 mb-2">{cat.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                            {cat.desc}
                                        </p>
                                        <button className="px-6 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold hover:bg-slate-900 hover:text-white transition">
                                            Lihat Selengkapnya
                                        </button>
                                    </div>

                                    {/* Titik Tengah Penghubung (Mind Map Node) */}
                                    <div className="hidden lg:flex h-12 w-12 rounded-full bg-white border-4 border-green-500 items-center justify-center z-10 shadow-md">
                                        <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                                    </div>

                                    {/* Spacer untuk sisi seberang */}
                                    <div className="hidden lg:block lg:w-5/12"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}