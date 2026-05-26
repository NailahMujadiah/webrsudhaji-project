import { Head } from '@inertiajs/react'
import { useEffect, useMemo, useRef, useState, memo, useCallback } from 'react'
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

// Constants
const SUGGESTION_LIMIT = 10
const DEBOUNCE_DELAY = 350
const CAROUSEL_INTERVAL = 5000
const INTERSECTION_THRESHOLD = 0.1

const BACKGROUNDS = [
    { src: '/images/rsudhaji.webp', position: 'center center', size: 'cover' },
    { src: '/images/rsudhaji-2.webp', position: 'center center', size: 'cover' },
]

type ServiceCard = {
    headingTop: string
    headingBottom: string
    description: string
    image: string
    alt: string
    href?: string
}

type DokterItem = {
    id_dokter: number
    nama_dokter: string
    spesialis: string
}

// Custom Hooks
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
            { threshold: INTERSECTION_THRESHOLD }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [once])

    return [ref, isInView] as const
}

function useDebouncedValue<T>(value: T, delay = DEBOUNCE_DELAY) {
    const [debounced, setDebounced] = useState(value)

    useEffect(() => {
        const timer = window.setTimeout(() => {
            setDebounced(value)
        }, delay)

        return () => window.clearTimeout(timer)
    }, [value, delay])

    return debounced
}

// Utilities
const normalizeSearchText = (value: string) =>
    value.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim()

const navigateToDokter = (doctorOptions: DokterItem[], keyword: string) => {
    const exactMatch = doctorOptions.find(
        (dokter) => normalizeSearchText(dokter.nama_dokter) === normalizeSearchText(keyword),
    )
    window.location.href = exactMatch 
        ? `/detail-dokter/${exactMatch.id_dokter}`
        : `/daftar-dokter?search=${encodeURIComponent(keyword)}`
}

// Service Data
const UNGGULAN_LAYANAN: ServiceCard[] = [
    {
        headingTop: 'Layanan',
        headingBottom: 'Bronchoscopy',
        description: 'Pemeriksaan bronchoscopy dengan dukungan tenaga profesional dan fasilitas medis yang memadai.',
        image: '/images/bronscopy.webp',
        alt: 'Pemeriksaan Bronchoscopy',
    },
    {
        headingTop: 'Layanan',
        headingBottom: 'Brainstem',
        description: 'Pemeriksaan brainstem untuk mendukung diagnosis dengan hasil yang lebih akurat.',
        image: '/images/brainstem.webp',
        alt: 'Pemeriksaan Brainstem',
    },
    {
        headingTop: 'Layanan',
        headingBottom: 'Medical Body',
        description: 'Pemeriksaan medical body yang nyaman dengan alur layanan yang terarah.',
        image: '/images/medicalbody.webp',
        alt: 'Pemeriksaan Medical Body',
    },
]

const LAYANAN_MEDIS: ServiceCard[] = [
    {
        headingTop: 'Layanan',
        headingBottom: 'Rawat Jalan',
        description: 'Kami akan memberikan pengobatan dan perawatan dengan suasana senyaman mungkin oleh tenaga profesional',
        image: '/images/Klinik-Spesialis-Paru-1.webp',
        alt: 'Rawat Jalan',
        href: '/layanan/rawat-jalan',
    },
    {
        headingTop: 'Layanan',
        headingBottom: 'Rawat Inap',
        description: 'Kami akan memberikan pengobatan dan perawatan dengan suasana senyaman mungkin oleh tenaga profesional',
        image: '/images/Rawat-Inap-Kautsar-1.webp',
        alt: 'Rawat Inap',
        href: '/layanan/rawat-inap',
    },
    {
        headingTop: 'Layanan',
        headingBottom: 'Rawat Intensif',
        description: 'Kami akan memberikan pengobatan dan perawatan dengan suasana senyaman mungkin oleh tenaga profesional',
        image: '/images/Kamar-Operasi-1.webp',
        alt: 'Rawat Intensif',
        href: '/layanan/rawat-intensif',
    },
]

// Memoized Components
const LayananCard = memo(function LayananCard({
    headingTop,
    headingBottom,
    description,
    image,
    alt,
    href,
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
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-800/40 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
                <h3 className="mb-4 text-3xl font-extrabold leading-tight">
                    {headingTop} <br />
                    {headingBottom}
                </h3>
                <p className="text-sm leading-relaxed text-slate-100">
                    {description}
                </p>
                {href && (
                    <a
                        href={href}
                        className="mt-4 inline-flex w-fit items-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-green-800 transition hover:bg-green-100"
                    >
                        Read More
                    </a>
                )}
            </div>
        </div>
    )
})

export default function Beranda() {
    const [currentBg, setCurrentBg] = useState(0)
    const [heroRef, heroInView] = useInView()
    const [doctorQuery, setDoctorQuery] = useState('')
    const [doctorOptions, setDoctorOptions] = useState<DokterItem[]>([])
    const [highlightIndex, setHighlightIndex] = useState(-1)
    const [videoAvailable, setVideoAvailable] = useState(true)
    
    const debouncedDoctorQuery = useDebouncedValue(doctorQuery, DEBOUNCE_DELAY)

    
const videoRef = useRef<HTMLVideoElement>(null)
const [isPlaying, setIsPlaying] = useState(false)
const [progress, setProgress] = useState(0)
const [duration, setDuration] = useState(0)
const [currentTime, setCurrentTime] = useState(0)

    // Load doctors on mount
    useEffect(() => {
        const controller = new AbortController()
        const loadDoctors = async () => {
            try {
                const response = await fetch('/api/dokter', { signal: controller.signal })
                if (response.ok) {
                    const data = await response.json()
                    if (Array.isArray(data.dokter)) {
                        setDoctorOptions(data.dokter)
                    }
                }
            } catch (error) {
                if (!(error instanceof DOMException && error.name === 'AbortError')) {
                    console.warn('Failed to load doctors')
                }
            }
        }
        loadDoctors()
        return () => controller.abort()
    }, [])

    // Carousel timer
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev === BACKGROUNDS.length - 1 ? 0 : prev + 1))
        }, CAROUSEL_INTERVAL)
        return () => clearInterval(interval)
    }, [])

    // Suggestion names memoization
    const suggestionNames = useMemo(() => {
        const q = normalizeSearchText(debouncedDoctorQuery)
        if (!q) return []
        
        const starts: string[] = []
        const includes: string[] = []
        
        for (const d of doctorOptions) {
            const n = normalizeSearchText(d.nama_dokter)
            if (n.startsWith(q)) starts.push(d.nama_dokter)
            else if (n.includes(q)) includes.push(d.nama_dokter)
        }
        
        return Array.from(new Set([...starts, ...includes])).slice(0, SUGGESTION_LIMIT)
    }, [debouncedDoctorQuery, doctorOptions])

    const suggestionsVisible = suggestionNames.length > 0

    const handleDoctorSearch = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const keyword = doctorQuery.trim()
        if (!keyword) {
            window.location.href = '/daftar-dokter'
            return
        }
        navigateToDokter(doctorOptions, keyword)
    }, [doctorQuery, doctorOptions])

    const handleSuggestionClick = useCallback((name: string) => {
        navigateToDokter(doctorOptions, name)
    }, [doctorOptions])

    const handleInputKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!suggestionsVisible) return

        if (e.key === 'ArrowDown') {
            e.preventDefault()
            setHighlightIndex((i) => Math.min(i + 1, suggestionNames.length - 1))
        } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            setHighlightIndex((i) => Math.max(i - 1, 0))
        } else if (e.key === 'Enter' && highlightIndex >= 0 && highlightIndex < suggestionNames.length) {
            e.preventDefault()
            setDoctorQuery(suggestionNames[highlightIndex])
            setHighlightIndex(-1)
        } else if (e.key === 'Escape') {
            setHighlightIndex(-1)
        }
    }, [suggestionsVisible, highlightIndex, suggestionNames])

    return (
        <>
            <Head title="Beranda - RSUD Haji Makassar">
                <link rel="preload" as="image" href="/images/rsudhaji.webp" />
                <link rel="preload" as="image" href="/images/rsudhaji-2.webp" />
            </Head>

            <Navbar />

            <main className="overflow-x-hidden bg-slate-50 selection:bg-green-500 selection:text-white">
                {/* Hero Section */}
                <section className="relative min-h-[calc(100dvh-7rem)] overflow-hidden">
                    {/* Background Carousel */}
                    {BACKGROUNDS.map((bg, index) => (
                        <div
                            key={bg.src}
                            className={`absolute inset-0 transition-opacity duration-1000 ${
                                currentBg === index ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{
                                backgroundImage: `url(${bg.src})`,
                                backgroundPosition: bg.position,
                                backgroundSize: bg.size,
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: '#000',
                            }}
                        />
                    ))}

                    <div className="absolute inset-0 bg-black/50" />

                    <div className="relative z-10 flex min-h-[calc(100dvh-7rem)] items-center px-6 py-12 sm:px-10 lg:px-20">
                        <div 
                            ref={heroRef}
                            className={`w-full max-w-6xl ${
                                heroInView ? 'animate-[fadeLeft_1s_ease-out]' : 'opacity-0'
                            }`}
                        >
                            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Selamat Datang di <br />
                                <span className="text-green-400">RSUD HAJI MAKASSAR</span>
                            </h1>

                            <div className="w-full rounded-2xl bg-white/10 p-4 backdrop-blur-sm sm:p-5">
                                <p className="mb-3 text-sm font-medium text-slate-100 sm:text-base">
                                    Cari Dokter berdasarkan nama
                                </p>

                                <div className="relative">
                                    {/* Suggestions Dropdown */}
                                    <div
                                        id="doctor-suggestions"
                                        role="listbox"
                                        className={`absolute left-0 right-0 bottom-full mb-3 z-40 max-h-56 overflow-auto rounded-xl bg-white text-slate-900 shadow-lg transition-opacity duration-150 ${suggestionsVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                                    >
                                        <ul className="divide-y">
                                            {suggestionNames.map((name, i) => (
                                                <li key={name} role="option" aria-selected={highlightIndex === i}>
                                                    <button
                                                        type="button"
                                                        onMouseEnter={() => setHighlightIndex(i)}
                                                        onMouseLeave={() => setHighlightIndex(-1)}
                                                        onClick={() => handleSuggestionClick(name)}
                                                        className={`w-full text-left px-4 py-3 text-sm hover:bg-slate-100 ${highlightIndex === i ? 'bg-slate-100' : ''}`}
                                                    >
                                                        {name}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="border-t px-4 py-2 text-center text-sm">
                                            <a href="/daftar-dokter" className="text-blue-600 hover:underline">Lihat Semua Dokter Kami →</a>
                                        </div>
                                    </div>

                                    {/* Search Form */}
                                    <form onSubmit={handleDoctorSearch} className="flex flex-col gap-3 sm:flex-row">
                                        <input
                                            type="text"
                                            value={doctorQuery}
                                            onChange={(e) => setDoctorQuery(e.target.value)}
                                            onKeyDown={handleInputKeyDown}
                                            placeholder="Ketik kata kunci"
                                            aria-autocomplete="list"
                                            aria-controls="doctor-suggestions"
                                            aria-expanded={suggestionsVisible}
                                            className="h-12 flex-1 rounded-xl border border-white/40 bg-white px-4 text-sm text-slate-800 outline-none ring-0 placeholder:text-slate-500 focus:border-green-400"
                                        />
                                        <button
                                            type="submit"
                                            className="h-12 rounded-xl bg-green-500 px-5 text-sm font-semibold text-white transition hover:bg-green-600"
                                        >
                                            Cari Dokter
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Layanan Unggulan */}
                <section className="bg-white px-6 py-16 lg:px-20">
                    <h2 className="mb-10 text-center text-3xl font-bold text-slate-800">
                        LAYANAN UNGGULAN
                    </h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {UNGGULAN_LAYANAN.map((layanan) => (
                            <LayananCard key={layanan.headingBottom} {...layanan} />
                        ))}
                    </div>
                </section>

                {/* Layanan Medis */}
                <section className="bg-green-100 px-6 py-16 lg:px-20">
                    <div className="mx-auto max-w-6xl">
                        <h2 className="mb-10 text-center text-3xl font-bold text-slate-900">
                            LAYANAN MEDIS
                        </h2>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {LAYANAN_MEDIS.map((layanan) => (
                                <LayananCard key={layanan.headingBottom} {...layanan} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Video Section */}
<section className="flex justify-center bg-slate-50 px-6 pb-16 pt-4 lg:px-20">
    <div className="w-full max-w-5xl">
        <div className="rounded-2xl shadow-xl overflow-hidden bg-black">
            {/* Video Wrapper */}
            <div
                className="aspect-video relative group cursor-pointer"
                onClick={() => {
                    const video = videoRef.current
                    if (!video) return
                    if (video.paused) { video.play() } else { video.pause() }
                }}
            >
                {videoAvailable ? (
                    <>
                        <video
                            ref={videoRef}
                            className="h-full w-full"
                            preload="metadata"
                            playsInline
                            poster="/images/thumbnail.webp"
                            onError={() => setVideoAvailable(false)}
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                            onTimeUpdate={() => {
                                const v = videoRef.current
                                if (!v) return
                                setCurrentTime(v.currentTime)
                                setProgress((v.currentTime / v.duration) * 100)
                            }}
                            onLoadedMetadata={() => {
                                if (videoRef.current) setDuration(videoRef.current.duration)
                            }}
                        >
                            <source
                                src="/stream-video/Video Layanan RSUD Haji Makassar 480.mp4"
                                type="video/mp4"
                            />
                        </video>

                        {/* Play/Pause Button Tengah */}
                        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                            isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
                        }`}>
                            <div className="rounded-full bg-black/50 p-5 backdrop-blur-sm transition-transform duration-200 hover:scale-110">
                                {isPlaying ? (
                                    <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                                    </svg>
                                ) : (
                                    <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z"/>
                                    </svg>
                                )}
                            </div>
                        </div>
                    </>
                ) : (
                    <div
                        className="h-full w-full bg-black flex items-center justify-center text-white"
                        style={{ backgroundImage: 'url(/images/thumbnail.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <div className="rounded bg-black/60 px-4 py-2 text-sm font-semibold">Video tidak tersedia</div>
                    </div>
                )}
            </div>

            {/* Bottom Controls */}
            {videoAvailable && (
                <div className="bg-black px-4 pb-3 pt-2">
                    {/* Progress Bar */}
                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={progress}
                        onChange={(e) => {
                            const v = videoRef.current
                            if (!v) return
                            const newTime = (Number(e.target.value) / 100) * v.duration
                            v.currentTime = newTime
                            setProgress(Number(e.target.value))
                        }}
                        className="w-full h-1 accent-green-500 cursor-pointer"
                    />
                    {/* Time + Play Button */}
<div className="flex items-center gap-3 mt-2">
    <button
        onClick={() => {
            const v = videoRef.current
            if (!v) return
            if (v.paused) { v.play() } else { v.pause() }
        }}
        className="text-white"
    >
        {isPlaying ? (
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
        ) : (
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
            </svg>
        )}
    </button>

    <span className="text-xs text-slate-300 flex-1">
        {Math.floor(currentTime / 60)}:{String(Math.floor(currentTime % 60)).padStart(2, '0')} / {Math.floor(duration / 60)}:{String(Math.floor(duration % 60)).padStart(2, '0')}
    </span>

    {/* Fullscreen Button */}
    <button
        onClick={() => {
            const v = videoRef.current
            if (!v) return
            if (document.fullscreenElement) {
                document.exitFullscreen()
            } else {
                v.requestFullscreen()
            }
        }}
        className="text-white hover:text-green-400 transition-colors"
        title="Perbesar"
    >
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
        </svg>
    </button>
</div>
                </div>
            )}
        </div>
    </div>
</section>
            </main>

            <Footer />
        </>
    )
}
