import { useEffect, useState, useRef } from 'react'
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';


function useInView(once = false) {
    const ref = useRef<HTMLDivElement>(null)
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting)
                if (entry.isIntersecting && once) {
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.1 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [once])

    return [ref, isInView] as const
}


type ServiceCard = {
    headingTop: string
    headingBottom: string
    description: string
    image: string
    alt: string
}

const unggulanLayanan: ServiceCard[] = [
    {
        headingTop: 'Layanan',
        headingBottom: 'Bronchoscopy',
        description:
            'Pemeriksaan bronchoscopy dengan dukungan tenaga profesional dan fasilitas medis yang memadai.',
        image: '/images/bronscopy.png',
        alt: 'Pemeriksaan Bronchoscopy',
    },
    {
        headingTop: 'Layanan',
        headingBottom: 'Brainstem',
        description:
            'Pemeriksaan brainstem untuk mendukung diagnosis dengan hasil yang lebih akurat.',
        image: '/images/brainstem.png',
        alt: 'Pemeriksaan Brainstem',
    },
    {
        headingTop: 'Layanan',
        headingBottom: 'Medical Body',
        description:
            'Pemeriksaan medical body yang nyaman dengan alur layanan yang terarah.',
        image: '/images/medicalbody.png',
        alt: 'Pemeriksaan Medical Body',
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
    },
    {
        headingTop: 'Layanan',
        headingBottom: 'Rawat Inap',
        description:
            'Kami akan memberikan pengobatan dan perawatan dengan suasana senyaman mungkin oleh tenaga profesional',
        image: '/images/Rawat-Inap-Kautsar-1.png',
        alt: 'Rawat Inap',
    },
    {
        headingTop: 'Layanan',
        headingBottom: 'Rawat Intensif',
        description:
            'Kami akan memberikan pengobatan dan perawatan dengan suasana senyaman mungkin oleh tenaga profesional',
        image: '/images/Kamar-Operasi-1.png',
        alt: 'Rawat Intensif',
    },
]

function LayananCard({
    headingTop,
    headingBottom,
    description,
    image,
    alt,
}: ServiceCard) {
    const [ref, isInView] = useInView()

    return (
        <div 
            ref={ref}
            className={`group relative h-[380px] overflow-hidden rounded-2xl shadow-lg transition-all duration-600 hover:-translate-y-2 hover:shadow-2xl ${
                isInView 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
            }`}
        >
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
                <p className=" text-sm leading-relaxed text-slate-100">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default function Beranda() {

const backgrounds = [
    '/images/rsudhaji.jpg',
    '/images/rsudhaji-2.png',
]

const [currentBg, setCurrentBg] = useState(0)
const [heroRef, heroInView] = useInView()

useEffect(() => {
    const interval = setInterval(() => {
        setCurrentBg((prev: number) =>
            prev === backgrounds.length - 1 ? 0 : prev + 1
        )
    }, 5000)

    return () => clearInterval(interval)
}, [backgrounds.length])

    return (
        <>
                

            <Navbar />

            {/* 2. Konten Utama */}
            <main className="overflow-x-hidden bg-slate-50 selection:bg-green-500 selection:text-white">
                
               <section className="relative min-h-[calc(100dvh-7rem)] overflow-hidden">

    {/* Background */}
    <div
        key={currentBg}
        className="
            absolute inset-0
            bg-cover bg-center bg-no-repeat
            animate-[slideIn_1.2s_ease-out]
        "
        style={{
            backgroundImage: `url(${backgrounds[currentBg]})`,
        }}
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50" />

    {/* Content */}
    <div className="relative z-10 flex min-h-[calc(100dvh-7rem)] items-center px-6 py-12 sm:px-10 lg:px-20">

        <div 
            ref={heroRef}
            className={`max-w-2xl ${
                heroInView ? 'animate-[fadeLeft_1s_ease-out]' : 'opacity-0'
            }`}
        >

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
