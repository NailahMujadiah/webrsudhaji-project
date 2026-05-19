import { Head } from '@inertiajs/react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const facilities = [
    {
        title: 'Tempat Parkir',
        images: ['/images/Parkir.jpg', '/images/Parkir-1.png'],
        icon: '🅿️',
    },
    {
        title: 'Ruang Tunggu Pasien',
        images: ['/images/Ruang-Tunggu.png', '/images/Ruang-Tunggu-1.png'],
        icon: '🪑',
    },
    {
        title: 'Perpustakaan',
        images: ['/images/Perpus.png', '/images/Perpus-1.png'],
        icon: '📚',
    },
    {
        title: 'Ruang Arsip',
        images: ['/images/Arsip.png', '/images/Arsip-1.png'],
        icon: '🗂️',
    },
];

export default function SaranaPrasarana() {
    return (
        <>
            <Head title="Sarana dan Prasarana - RSUD Haji Makassar" />
            <Navbar />

            <main className="min-h-screen bg-white">
                {/* Hero */}
                <section className="relative">
                    <img
                        src="/images/rsudhaji.jpg"
                        alt="Sarana dan Prasarana"
                        className="h-64 w-full object-cover lg:h-80"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t from-white to-transparent" />
                    <div className="absolute bottom-8 left-6 lg:left-20">
                        <p className="mb-1 text-sm font-medium text-green-300">
                            Fasilitas Kami
                        </p>
                        <h1 className="text-3xl font-extrabold text-white drop-shadow-lg lg:text-5xl">
                            Sarana dan Prasarana
                        </h1>
                    </div>
                </section>

                {/* Deskripsi */}
                <section className="border-b border-slate-100 bg-white pt-6 pb-10 px-6 lg:px-20 ">
                    <div className="absolute left-6 right-6" />
                    <div className="mx-auto max-w-6xl">
                        <p className="leading-relaxed text-slate-600">
                            RSUD Haji Makassar dilengkapi dengan sarana dan
                            prasarana modern serta teknologi terkini untuk
                            mendukung diagnosis, pengobatan, dan perawatan
                            pasien secara optimal.
                        </p>
                    </div>
                </section>

                {/* Grid */}
                <section className="bg-white pt-5 pb-20 px-6 lg:px-20">
                    <div className="mx-auto max-w-6xl">
                        <h2 className="mb-3 text-2xl font-bold text-slate-800">
                            Sarana dan Prasarana
                        </h2>
                        <div className="mb-8 h-1 w-12 rounded bg-green-600" />
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            {facilities.map((facility) => (
                                <section
                                    key={facility.title}
                                    className="overflow-hidden rounded-[28px] bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <div className="grid grid-cols-2 gap-2 p-3">
                                        {facility.images.map((image, index) => (
                                            <div
                                                key={index}
                                                className="overflow-hidden rounded-2xl"
                                            >
                                                <img
                                                    src={image}
                                                    alt={facility.title}
                                                    className="h-44 w-full object-cover transition duration-300 hover:scale-105"
                                                        onError={(e) => {
                                                            e.currentTarget.src =
                                                                '/images/no-image.svg';
                                                        }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="p-5">
                                        <h2 className="mb-3 text-xl font-bold text-slate-800">
                                            {facility.title}
                                        </h2>
                                    </div>
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