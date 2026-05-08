import { Head } from '@inertiajs/react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function LayananFasilitas() {
    const layananUnggulan = [
        {
            title: "Brainstem Evoke Response Audiometry",
            description: "Pemeriksaan untuk mendeteksi gangguan pendengaran, dilakukan dengan memberikan stimulasi berupa suara klik atau nada ke telinga pasien. Stimulasi ini akan menghasilkan gelombang otak yang direkam oleh alat Elektroensefalografi (EEG). Serta dapat dilakukan pada bayi, anak, maupun orang dewasa.",
            mainImage: "https://via.placeholder.com/400x300", // Ganti dengan path image asli nanti
            thumbs: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"]
        },
        {
            title: "Pemeriksaan Bronchoscopy",
            description: "Pemeriksaan saluran pernapasan bagian bawah yang dilakukan dengan memasukkan alat bernama bronkoskop ke dalam tubuh pasien. Bronkoskop adalah alat panjang dan tipis yang dilengkapi dengan kamera dan lampu. Dilakukan melalui mulut atau hidung pasien, dan biasa dilakukan oleh dokter spesialis paru-paru.",
            mainImage: "https://via.placeholder.com/400x300",
            thumbs: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"]
        },
        {
            title: "Medical Body Composition Analyzer",
            description: "MBCA adalah alat yang digunakan untuk mengukur komposisi tubuh seseorang. Pengukuran ini meliputi massa lemak, massa otot, massa tulang dan massa air. Pemeriksaan ini tidak menimbulkan rasa sakit dan tidak memerlukan persiapan khusus, hanya memerlukan waktu 15 menit untuk persiapan.",
            mainImage: "https://via.placeholder.com/400x300",
            thumbs: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"]
        }
    ];

    return (
        <>
            <Head title="Layanan Unggulan - RSUD Haji Makassar" />
            <Navbar />

            {/* Background Hijau Muda sesuai Referensi */}
            <main className="bg-[#D1F2E5] min-h-screen py-10 px-4 md:px-0">
                <div className="max-w-4xl mx-auto">
                    
                    {/* Header Judul */}
                    <div className="bg-white rounded-xl p-8 mb-8 shadow-sm text-center">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-[#2D8A5B] tracking-wide uppercase">
                            Layanan Unggulan
                        </h1>
                    </div>

                    {/* List Layanan */}
                    <div className="space-y-8">
                        {layananUnggulan.map((item, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 md:p-10 shadow-md">
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    {/* Gambar Utama */}
                                    <div className="w-full md:w-1/3">
                                        <img 
                                            src={item.mainImage} 
                                            alt={item.title} 
                                            className="rounded-lg w-full object-cover shadow-sm border border-slate-100"
                                        />
                                    </div>
                                    
                                    {/* Deskripsi */}
                                    <div className="w-full md:w-2/3">
                                        <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 leading-tight">
                                            {item.title}
                                        </h2>
                                        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Thumbnail Gambar di Bawahnya (Sesuai Desain) */}
                                <div className="grid grid-cols-3 gap-4 mt-8">
                                    {item.thumbs.map((img, i) => (
                                        <img 
                                            key={i} 
                                            src={img} 
                                            alt="thumbnail" 
                                            className="rounded-lg w-full h-24 md:h-32 object-cover shadow-sm"
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}