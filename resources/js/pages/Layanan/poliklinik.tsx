import { Head } from '@inertiajs/react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const clinics = [
    {
        title: 'Poli Umum',
        icon: 'fa-heart-pulse',
        items: ['Anak', 'Obgyn', 'Jantung', 'Saraf', 'Paru', 'Kulit & Kelamin'],
    },
    {
        title: 'Poli Bedah',
        icon: 'fa-user-doctor',
        items: ['Bedah Umum', 'Bedah Digestive', 'Bedah Ortopedi', 'Bedah Vaskuler'],
    },
    {
        title: 'Poli Gigi',
        icon: 'fa-tooth',
        items: ['Pedodontis', 'Periodonti', 'Endodonsi', 'Prothodonti'],
    },
];

export default function Poliklinik() {
    return (
        <>
            <Head title="Poliklinik - RSUD Haji Makassar" />
            <style>{'@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css");'}</style>
            <Navbar />

            <main className="min-h-screen bg-slate-50">

                {/* Hero */}
                <section className="relative">
                    <img
                        src="/images/rsudhaji.jpg"
                        alt="Poliklinik"
                        className="w-full h-64 lg:h-80 object-cover"
                        onError={(e) => { e.currentTarget.src = '/images/rsudhaji.jpg'; }}
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
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                            {clinics.map((clinic) => (
                                <section
                                    key={clinic.title}
                                    className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <div className="mb-6 flex justify-center">
                                        <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-green-600 bg-green-50">
                                            <i className={`fa-solid ${clinic.icon} text-3xl text-green-600`} aria-hidden="true" />
                                        </div>
                                    </div>
                                    <h2 className="mb-6 text-center text-xl font-bold text-slate-800">
                                        {clinic.title}
                                    </h2>
                                    <ul className="space-y-3 text-sm text-slate-600">
                                        {clinic.items.map((item) => (
                                            <li key={item} className="flex items-center gap-3">
                                                <span className="h-2 w-2 rounded-full bg-green-500 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            ))}
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}