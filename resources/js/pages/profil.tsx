import { Head } from '@inertiajs/react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const pencapaian = [
    'Menjadi Rumah Sakit Umum milik Pemerintah Daerah Provinsi Sulawesi Selatan dengan Klasifikasi C berdasarkan Keputusan Departemen Kesehatan Republik Indonesia Nomor: 762/XII/1993.',
    'Menjadi rumah sakit kelas B Non Pendidikan berdasarkan Surat Keputusan Menteri Kesehatan Republik Indonesia Nomor 1226/Menkes/SK/VII/2010 tentang penetapan status rumah sakit Haji Makassar.',
    'Menerapkan sistem manajemen ISO 9001 : 2008 tahun 2010.',
    'Lulus tingkat lanjutan akreditasi kedua (12 pelayanan) dengan sertifikat nomor: KARS-Sert/31/VII/2011.',
    'Menjadi rumah sakit umum yang menerapkan Pola Pengelolaan Keuangan Badan Layanan Umum Daerah (PPK-BLUD).',
    'Lulus dan mendapat Predikat PARIPURNA dengan sertifikat nomor: KARS-SERT/793/VIII/2017 dalam Penilaian Akreditasi.',
    'Penghargaan TOP 3 Inovasi Pelayanan Publik Tingkat Sulawesi Selatan.',
];

export default function Profil() {
    return (
        <>
            <Head title="Profil - RSUD Haji Makassar" />
            <Navbar />

            <main className="min-h-screen bg-white">

                {/* Hero - Foto dengan gradasi */}
                <section className="relative">
                    <img
                        src="/images/rsudhaji.jpg"
                        alt="RSUD Haji Makassar"
                        className="w-full h-72 lg:h-[450px] object-cover"
                    />
                    {/* Overlay gelap */}
                    <div className="absolute inset-0 bg-black/30" />
                    {/* Gradasi bawah ke putih */}
                    <div className="absolute bottom-0 left-0 right-0 h-36 bg-linear-to-t from-white to-transparent" />
                    {/* Teks */}
                    <div className="absolute bottom-10 left-6 lg:left-20">
                        <p className="text-green-300 text-sm font-medium mb-1">Tentang Kami</p>
                        <h1 className="text-3xl lg:text-5xl font-extrabold text-white drop-shadow-lg">Profil</h1>
                        <h2 className="text-lg lg:text-2xl font-semibold text-green-100 drop-shadow mt-1">UPT RSUD Haji Makassar</h2>
                    </div>
                </section>

                {/* Sejarah & Latar Belakang */}
                <section className="py-16 px-6 lg:px-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">
                            Sejarah <span className="text-green-600">&amp;</span> Latar Belakang
                        </h2>
                        <div className="w-12 h-1 bg-green-600 rounded mb-8" />

                        <div className="flex flex-col lg:flex-row gap-10 items-start">
                            {/* Teks */}
                            <div className="flex-1 space-y-4 text-sm text-slate-600 leading-relaxed text-justify">
                                <p>
                                    RSUD Haji Makassar Provinsi Sulawesi Selatan merupakan salah satu rumah sakit milik Pemerintah Provinsi Sulawesi Selatan yang berlokasi di Jln. Daeng Ngeppe No. 14 Kelurahan Jongaya, Kecamatan Tamalate, Kota Makassar. Berdirinya diharapkan dapat mendukung kelancaran kegiatan pelayanan calon Jemaah Haji dan masyarakat sekitarnya.
                                </p>
                                <p>
                                    Latar belakang berdirinya Rumah Sakit Haji di Indonesia berawal dari hibah pemerintah Kerajaan Arab Saudi sebagai kompensasi Musibah Terowongan Mina yang menyebabkan gugurnya 631 jemaah haji asal Indonesia, termasuk jemaah yang berasal dari Provinsi Sulawesi Selatan. Didirikan sebagai monument hidup dalam mengenang dan mengambil hikmah terjadinya musibah terowongan Al Muaisim di Mina tanggal 2 Juli 1990.
                                </p>
                                <p>
                                    Diresmikan oleh Presiden Republik Indonesia pada tanggal 16 Juli Tahun 1992. Pengelolaan Rumah Sakit oleh Pemerintah Sulawesi Selatan dengan Surat Keputusan Gubernur Nomor: 802/VII/1992 tentang Susunan Organisasi dan Tata Kerja Rumah Sakit Haji.
                                </p>
                                <p>
                                    Selain Provinsi Sulawesi Selatan, RSUD Haji juga dibangun di tiga kota lain di Indonesia yaitu Jakarta, Medan, dan Surabaya. Rumah Sakit Haji Makassar diresmikan oleh Presiden Republik Indonesia pada tanggal 16 Juli 1992.
                                </p>
                            </div>

                            {/* Kotak Info */}
                            <div className="w-full lg:w-72 shrink-0 space-y-4">
                                <div className="bg-[#BAEBD4] rounded-2xl p-5">
                                    <p className="text-xs text-slate-500 mb-1">Diresmikan</p>
                                    <p className="font-bold text-slate-800">16 Juli 1992</p>
                                </div>
                                <div className="bg-[#BAEBD4] rounded-2xl p-5">
                                    <p className="text-xs text-slate-500 mb-1">Lokasi</p>
                                    <p className="font-bold text-slate-800">Jln. Daeng Ngeppe No. 14, Tamalate, Makassar</p>
                                </div>
                                <div className="bg-[#BAEBD4] rounded-2xl p-5">
                                    <p className="text-xs text-slate-500 mb-1">Kelas Rumah Sakit</p>
                                    <p className="font-bold text-slate-800">Kelas B Non Pendidikan</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pencapaian */}
                <section className="py-16 px-6 lg:px-20 bg-[#BAEBD4]">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">Pencapaian <span className="text-green-700">Kami</span></h2>
                        <div className="w-12 h-1 bg-green-700 rounded mb-8" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {pencapaian.map((item, i) => (
                                <div key={i} className="flex items-start gap-3 bg-white/70 rounded-xl p-4 shadow-sm">
                                    <div className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-slate-600 leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Visi & Misi */}
                <section className="py-16 px-6 lg:px-20 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">
                            Visi <span className="text-green-600">&amp;</span> Misi
                        </h2>
                        <div className="w-12 h-1 bg-green-600 rounded mb-8" />
                        <div className="flex flex-col lg:flex-row gap-6">

                            {/* Visi */}
                            <div className="flex-1 bg-[#2D8A5B] rounded-2xl p-8 text-white">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold mb-3">Visi</h3>
                                <p className="text-sm leading-relaxed text-green-100">
                                    Menjadi Rumah Sakit terbaik, modern, paripurna dan berkualitas untuk semua kalangan di Sulawesi Selatan.
                                </p>
                            </div>

                            {/* Misi */}
                            <div className="flex-[2] bg-slate-50 border border-slate-200 rounded-2xl p-8">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 mb-4">Misi</h3>
                                <ul className="space-y-3 text-sm text-slate-600">
                                    {[
                                        'Meningkatkan kualitas pelayanan kesehatan yang islami, modern dan berkualitas.',
                                        'Meningkatkan sarana dan prasarana rumah sakit sesuai perkembangan ilmu dan teknologi.',
                                        'Meningkatkan kompetensi dan profesionalisme sumber daya manusia.',
                                        'Meningkatkan kesejahteraan karyawan rumah sakit.',
                                    ].map((m, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="mt-1 shrink-0 w-4 h-4 rounded-full bg-green-600 flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                            {m}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}