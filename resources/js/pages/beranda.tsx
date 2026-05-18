import { Head, Link } from '@inertiajs/react'
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

type ServiceCard = {
    headingTop: string
    headingBottom: string
    description: string
    image: string
    alt: string
    href?: string
    asButton?: boolean
}

const unggulanLayanan: ServiceCard[] = [
    {
        headingTop: 'Layanan',
        headingBottom: 'Bronchoscopy',
        description:
            'Pemeriksaan bronchoscopy dengan dukungan tenaga profesional dan fasilitas medis yang memadai.',
        image: '/images/bronscopy.png',
        alt: 'Pemeriksaan Bronchoscopy',
        href: '/layanan/unggulan',
    },
    {
        headingTop: 'Layanan',
        headingBottom: 'Brainstem',
        description:
            'Pemeriksaan brainstem untuk mendukung diagnosis dengan hasil yang lebih akurat.',
        image: '/images/brainstem.png',
        alt: 'Pemeriksaan Brainstem',
        asButton: true,
    },
    {
        headingTop: 'Layanan',
        headingBottom: 'Medical Body',
        description:
            'Pemeriksaan medical body yang nyaman dengan alur layanan yang terarah.',
        image: '/images/medicalbody.png',
        alt: 'Pemeriksaan Medical Body',
        asButton: true,
    },
]

const layananMedis: ServiceCard[] = [
    {
        headingTop: 'Layanan',
        headingBottom: 'Rawat Jalan',
        description:
            'Kami akan memberikan pengobatan dan perawatan dengan suasana senyaman mungkin oleh tenaga profesional',
        image: '/images/Klinik-Spesialis-Paru-1.png',
        alt: 'Rawat Jalan',
        href: '/layanan/rawat-jalan',
    },
    {
        headingTop: 'Layanan',
        headingBottom: 'Rawat Inap',
        description:
            'Kami akan memberikan pengobatan dan perawatan dengan suasana senyaman mungkin oleh tenaga profesional',
        image: '/images/Rawat-Inap-Kautsar-1.png',
        alt: 'Rawat Inap',
        asButton: true,
    },
    {
        headingTop: 'Layanan',
        headingBottom: 'Rawat Intensif',
        description:
            'Kami akan memberikan pengobatan dan perawatan dengan suasana senyaman mungkin oleh tenaga profesional',
        image: '/images/Kamar-Operasi-1.png',
        alt: 'Rawat Intensif',
        asButton: true,
    },
]

function LayananCard({
    headingTop,
    headingBottom,
    description,
    image,
    alt,
    href,
    asButton,
}: ServiceCard) {
    const actionClassName =
        'w-fit rounded-full bg-lime-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-lime-400'

    return (
        <div className="group relative h-[380px] overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <img
                src={image}
                alt={alt}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-800/40 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
                <h3 className="mb-4 text-3xl font-extrabold leading-tight">
                    {headingTop} <br />
                    {headingBottom}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-100">
                    {description}
                </p>
                {href ? (
                    <Link href={href} className={actionClassName}>
                        Read More →
                    </Link>
                ) : asButton ? (
                    <button className={actionClassName}>Read More →</button>
                ) : null}
            </div>
        </div>
    )
}

export default function Beranda() {
    return (
        <>
            <Head title="Selamat Datang - RSUD Haji Makassar" />

            <Navbar />

            {/* 2. Konten Utama */}
            <main className="overflow-x-hidden bg-slate-50 selection:bg-green-500 selection:text-white">
                <section
                    className="relative flex min-h-[calc(100dvh-7rem)] items-center bg-cover bg-center bg-no-repeat px-6 py-12 sm:px-10 lg:px-20"
                    style={{ backgroundImage: "url('/images/rsudhaji.jpg')" }}
                >
                    {/* Overlay gelap */}
                    <div className="absolute inset-0 bg-black/50" />

                    {/* Konten */}
                    <div className="relative z-10 max-w-2xl">
                        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Selamat Datang di <br />
                            <span className="text-green-400">
                                RSUD HAJI MAKASSAR
                            </span>
                        </h1>
                        <p className="max-w-xl text-lg leading-relaxed text-slate-200 lg:text-xl">
                            Silakan pilih menu di bawah ini untuk memulai
                            operasional atau melihat informasi layanan rumah
                            sakit kami.
                        </p>
                    </div>
                </section>

                {/* Layanan Unggulan */}
                <section className="bg-white px-6 py-16 lg:px-20">
                    <h2 className="mb-10 text-center text-3xl font-bold text-slate-800">
                        Layanan Unggulan
                    </h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {unggulanLayanan.map((layanan) => (
                            <LayananCard key={layanan.headingBottom} {...layanan} />
                        ))}
                    </div>
                </section>

                <section className="bg-green-100 px-6 py-16 lg:px-20">
                    <div className="mx-auto max-w-6xl">
                        <h2 className="mb-10 text-center text-3xl font-bold text-slate-900">
                            Layanan Medis
                        </h2>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {layananMedis.map((layanan) => (
                                <LayananCard key={layanan.headingBottom} {...layanan} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Video Section - YouTube Center */}
                <section className="flex justify-center bg-slate-50 px-6 pb-16 pt-4 lg:px-20">
                    <div className="aspect-video w-full max-w-5xl overflow-hidden rounded-2xl shadow-xl">
                        <iframe
                            className="h-full w-full"
                            src="https://www.youtube.com/embed/Yy3HJPLm0lE"
                            title="Video RSUD Haji"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </section>
            </main>

            {/* 3. Footer di Paling Bawah */}
            <Footer />
        </>
    );
}
