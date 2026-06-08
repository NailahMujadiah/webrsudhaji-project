import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

interface Props {
    id_artikel: number;
}

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
    if (artikel.gambar_artikel_url) {
        return artikel.gambar_artikel_url;
    }

    if (artikel.thumbnail_url) {
        return artikel.thumbnail_url;
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

export default function DetailArtikel({ id_artikel }: Props) {
    const [article, setArticle] = useState<Artikel | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadArtikel = async () => {
            try {
                const response = await fetch(`/api/artikel/${id_artikel}`);
                if (!response.ok) {
                    throw new Error('Gagal memuat detail artikel');
                }
                const data = await response.json();
                setArticle(data.artikel ?? null);
            } catch (err) {
                console.error(err);
                setError('Tidak dapat memuat detail artikel saat ini.');
            } finally {
                setLoading(false);
            }
        };

        loadArtikel();
    }, [id_artikel]);

    const contentParagraphs = article?.isi_artikel
        .split(/\r?\n/)
        .filter((paragraph) => paragraph.trim().length > 0) ?? [];

    return (
        <>
            <Head title={article ? `${article.judul} - RSUD Haji Makassar` : 'Detail Artikel'} />
            <Navbar />

            <main className="min-h-screen bg-slate-50 py-10 px-6 lg:px-20">
                <div className="mx-auto max-w-6xl space-y-10">
                    <section className="relative overflow-hidden rounded-4xl bg-white shadow-xl">
                        <img
                            src={article ? formatImageUrl(article) : '/images/rsudhaji.webp'}
                            alt={article?.judul ?? 'Detail Artikel'}
                            className="h-72 w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/40" />
                        <div className="absolute bottom-8 left-6 right-6 text-white sm:left-12 sm:right-auto">
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Artikel</p>
                            <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">{article?.judul ?? 'Loading...'}</h1>
                        </div>
                    </section>

                    <section className="rounded-4xl bg-white p-8 shadow-sm">
                        {loading ? (
                            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-16 text-center text-slate-500">
                                Memuat detail artikel...
                            </div>
                        ) : error ? (
                            <div className="rounded-3xl border border-red-200 bg-red-50 p-16 text-center text-red-700">
                                {error}
                            </div>
                        ) : article ? (
                            <div className="space-y-8">
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="space-y-2">
                                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">{article.kategori}</p>
                                        <p className="text-sm text-slate-500">{article.tanggal}</p>
                                    </div>
                                    <a
                                        href="/edukasi"
                                        className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700"
                                    >
                                        Kembali ke Edukasi
                                    </a>
                                </div>

                                <div className="space-y-6 text-slate-700">
                                    {contentParagraphs.length > 0 ? (
                                        contentParagraphs.map((paragraph, index) => (
                                            <p key={index} className="leading-relaxed text-sm sm:text-base">
                                                {paragraph}
                                            </p>
                                        ))
                                    ) : (
                                        <p className="leading-relaxed text-sm sm:text-base text-slate-500">Artikel tidak memiliki konten yang dapat ditampilkan.</p>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-16 text-center text-slate-500">
                                Artikel tidak ditemukan.
                            </div>
                        )}
                    </section>
                </div>
            </main>

            <Footer />
        </>
    );
}
