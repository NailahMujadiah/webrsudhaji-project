import { Head } from '@inertiajs/react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';


export default function Poliklinik() {
    const cards = [
        ['THT', '👂', 'bg-blue-50'],
        ['Saraf', '🧠', 'bg-blue-50'],
        ['Penyakit Dalam', '🩺', 'bg-blue-50'],
        ['Paru', '🫁', 'bg-blue-50'],
        ['Bedah Digestive', '🏥', 'bg-blue-50'],
        ['OBGYN', '🤰', 'bg-pink-50'],
        ['Bedah Ortopedi', '🦴', 'bg-blue-50'],
        ['Mata', '👁️', 'bg-blue-50'],
        ['Kulit & Kelamin', '🧴', 'bg-blue-50'],
        ['Jantung & Pembuluh Darah', '🫀', 'bg-red-50'],
        ['Anak', '👶', 'bg-yellow-50'],
        ['Bedah Vaskuler', '🩸', 'bg-blue-50'],
        ['Pedodontis', '🦷', 'bg-cyan-50'],
        ['Gigi Periodonti', '🪥', 'bg-cyan-50'],
        ['Gigi Endodonsi', '😁', 'bg-cyan-50'],
        ['Prothodonti', '🦷', 'bg-cyan-50'],
        ['Gizi', '🥗', 'bg-green-50'],
        ['Bedah Umum', '⚕️', 'bg-slate-100'],
        ['Jiwa', '🧘', 'bg-purple-50'],
    ];
    return (
        <>
            <Head title="Poliklinik - RSUD Haji Makassar" />
            <style>{'@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css");'}</style>
            <Navbar />

            <main className="min-h-screen bg-slate-50">

                {/* Hero */}
                <section className="relative">
                    <img
                        src="/images/rsudhaji.webp"
                        alt="Poliklinik"
                        className="w-full h-64 lg:h-80 object-cover"
                        onError={(e) => { e.currentTarget.src = '/images/rsudhaji.webp'; }}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-slate-50 to-transparent" />
                    <div className="absolute bottom-8 left-6 lg:left-20">
                        <p className="text-green-300 text-sm font-medium mb-1">Layanan Kami</p>
                        <h1 className="text-3xl lg:text-5xl font-extrabold text-white drop-shadow-lg">Poliklinik</h1>
                    </div>
                </section>

                {/* Deskripsi */}
                <section className="pt-6 pb-10 px-6 lg:px-20 bg-white border-b border-slate-100">
                    <div className="max-w-6xl mx-auto">
                        <p className="text-slate-600 leading-relaxed">
                            RSUD Haji Makassar menyediakan berbagai layanan poliklinik dengan tenaga medis profesional dan berpengalaman untuk memberikan pelayanan kesehatan terbaik bagi masyarakat.
                        </p>
                    </div>
                </section>

                {/* Grid Klinik */}
                <section className="pt-5 pb-20 px-6 lg:px-20 bg-white">
                    <div className="mx-auto w-full max-w-6xl">
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">Daftar Poliklinik</h2>
                        <div className="w-12 h-1 bg-green-600 rounded mb-8" />
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                            {cards.map(([title, emoji, bg]) => (
                                <div
                                    key={title}
                                    className="group bg-green-100 rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className={`w-16 h-16 rounded-full ${bg} flex items-center justify-center mb-4`}>
                                            <span className="text-3xl">{emoji}</span>
                                        </div>
                                        <h3 className="font-semibold text-slate-700">{title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}