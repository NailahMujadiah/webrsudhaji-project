import { Head } from '@inertiajs/react';
import { useEffect, useMemo, useState } from 'react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

interface Artikel {
    id_artikel: number;
    judul: string;
    isi_artikel: string;
    kategori: string;
    tanggal: string;
    gambar_artikel: string | null;
    gambar_artikel_url?: string | null;
    thumbnail?: string | null;
    thumbnail_url?: string | null;
}

const formatImageUrl = (artikel: Artikel) => {
    if (artikel.thumbnail_url) {
        return artikel.thumbnail_url;
    }

    if (artikel.gambar_artikel_url) {
        return artikel.gambar_artikel_url;
    }

    if (!artikel.gambar_artikel) {
        return '/images/no-image.svg';
    }

    if (artikel.gambar_artikel.startsWith('http://') || artikel.gambar_artikel.startsWith('https://')) {
        return artikel.gambar_artikel;
    }

    if (artikel.gambar_artikel.startsWith('/storage/')) {
        return artikel.gambar_artikel;
    }

    return `/storage/${artikel.gambar_artikel}`;
};

export default function Edukasi() {
    const [articles, setArticles] = useState<Artikel[]>([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadArticles = async () => {
            try {
                const response = await fetch('/api/artikel');
                if (!response.ok) {
                    throw new Error('Failed to fetch articles');
                }
                const data = await response.json();
                setArticles(Array.isArray(data.artikel) ? data.artikel : []);
            } catch (err) {
                console.error(err);
                setError('Tidak dapat memuat artikel saat ini.');
            } finally {
                setLoading(false);
            }
        };

        loadArticles();
    }, []);

    const filters = useMemo(() => {
        const categories = Array.from(new Set(articles.map((artikel) => artikel.kategori).filter(Boolean)));
        return ['All', ...categories.sort()];
    }, [articles]);

    const filteredArticles = useMemo(() => {
        const searchTerm = search.trim().toLowerCase();

        return articles.filter((article) => {
            const matchesFilter = activeFilter === 'All' || article.kategori === activeFilter;
            const matchesSearch =
                !searchTerm ||
                article.judul.toLowerCase().includes(searchTerm) ||
                article.isi_artikel.toLowerCase().includes(searchTerm);
            return matchesFilter && matchesSearch;
        });
    }, [activeFilter, articles, search]);

    return (
        <>
            <Head title="Edukasi Kesehatan - RSUD Haji Makassar" />
            <Navbar />

            <main className="min-h-screen bg-slate-50">
                <section className="relative">
                    <img
                        src="/images/rsudhaji.webp"
                        alt="Edukasi Kesehatan RSUD Haji Makassar"
                        className="w-full h-64 lg:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-slate-50 to-transparent" />
                    <div className="absolute bottom-8 left-6 lg:left-20">
                        <p className="text-emerald-300 text-sm font-medium mb-1">Edukasi</p>
                        <h1 className="text-3xl lg:text-5xl font-extrabold text-white drop-shadow-lg">Informasi Kesehatan</h1>
                        <h2 className="text-lg lg:text-2xl font-semibold text-emerald-100 drop-shadow mt-1">Artikel & Berita RSUD Haji Makassar</h2>
                    </div>
                </section>


                <section className="border-b border-slate-200 bg-white py-10 shadow-sm">
                    <div className="mx-auto max-w-6xl px-6 lg:px-8">
                        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                            {/* <div className="max-w-3xl">
                                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Edukasi</p>
                                <h1 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">Artikel Kesehatan dan Berita RSUD Haji Makassar</h1>
                                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                                    Artikel yang ditayangkan di halaman ini otomatis mengambil data dari admin. Upload artikel melalui dashboard admin agar muncul di sini.
                                </p>
                            </div> */}

                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                                <div className="relative w-full sm:w-80">
                                    <input
                                        type="text"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder="Cari informasi"
                                        className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 pr-12 text-sm text-slate-700 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                                    />
                                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    className="inline-flex h-12 items-center justify-center rounded-2xl bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700"
                                    onClick={() => setSearch('')}
                                >
                                    Reset
                                </button>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap items-center gap-2">
                            {filters.map((filter) => (
                                <button
                                    key={filter}
                                    type="button"
                                    onClick={() => setActiveFilter(filter)}
                                    className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                                        activeFilter === filter
                                            ? 'bg-emerald-600 text-white'
                                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                    }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-6 lg:px-8 py-10">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h2 className="text-xl font-bold text-slate-900">Artikel Kesehatan</h2>
                                <div className="mt-2 h-1 w-16 rounded-full bg-emerald-600"></div>
                            </div>
                        </div>

                        {loading ? (
                            <div className="rounded-3xl border border-slate-200 bg-white p-16 text-center text-slate-500">
                                Memuat artikel...
                            </div>
                        ) : error ? (
                            <div className="rounded-3xl border border-red-200 bg-red-50 p-16 text-center text-red-700">
                                {error}
                            </div>
                        ) : filteredArticles.length > 0 ? (
                            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                                {filteredArticles.map((article) => (
                                    <article key={article.id_artikel} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                        <div className="h-48 overflow-hidden">
                                            <img
                                                src={formatImageUrl(article)}
                                                alt={article.judul}
                                                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                            />
                                        </div>
                                        <div className="space-y-4 p-6">
                                            <div className="flex items-center justify-between text-xs text-slate-500">
                                                <span>{article.tanggal}</span>
                                                <span>Tidak ada komentar</span>
                                            </div>
                                            <h3 className="text-lg font-semibold text-slate-900">{article.judul}</h3>
                                            <p className="text-sm leading-6 text-slate-600">{article.isi_artikel.slice(0, 120)}…</p>
                                            <div className="mt-4 flex items-center justify-between">
                                                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                                                    {article.kategori}
                                                </span>
                                                <a href={`/edukasi/${article.id_artikel}`} className="text-sm font-semibold text-emerald-600 transition hover:text-emerald-700">
                                                    Read More →
                                                </a>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-16 text-center text-slate-500">
                                <p className="text-lg font-semibold text-slate-900">Tidak ada artikel yang cocok</p>
                                <p className="mt-2 text-sm">Coba ubah kata kunci atau kembali ke filter All.</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
