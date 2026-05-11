import { Head } from '@inertiajs/react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const facilities = [
	{
		title: 'Tempat Parkir',
		description: 'Area parkir luas dan nyaman untuk kendaraan pasien maupun pengunjung.',
		images: [
			'/images/rsudhaji.jpg',
			'/images/medicalbody.png',
		],
		icon: '🅿️',
	},
	{
		title: 'Ruang Tunggu Pasien',
		description: 'Ruang tunggu bersih dan nyaman dilengkapi kursi serta pendingin ruangan.',
		images: [
			'/images/medicalbody.png',
			'/images/rsudhaji.jpg',
		],
		icon: '🪑',
	},
	{
		title: 'Perpustakaan',
		description: 'Menyediakan berbagai koleksi bacaan dan referensi kesehatan.',	
		images: [
			'/images/bronscopy.png',
			'/images/brainstem.png',
		],
		icon: '📚',
	},
	{
		title: 'Ruang Arsip',
		description: 'Penyimpanan dokumen dan arsip rumah sakit yang tertata dengan baik.',
		images: [
			'/images/brainstem.png',
			'/images/bronscopy.png',
		],
		icon: '🗂️',
	},
];

export default function SaranaPrasarana() {
	return (
		<>
			<Head title="Sarana & Prasarana - RSUD Haji Makassar" />

			<Navbar />

			<main className="min-h-screen bg-white">
				{/* Hero */}
				<section className="relative">
					<img
						src="/images/rsudhaji.jpg"
						alt="Sarana & Prasarana"
						className="w-full h-64 lg:h-80 object-cover"
					/>
					<div className="absolute inset-0 bg-black/50" />
					<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
					<div className="absolute bottom-8 left-6 lg:left-20">
						<p className="text-green-300 text-sm font-medium mb-1">Fasilitas Kami</p>
						<h1 className="text-3xl lg:text-5xl font-extrabold text-white drop-shadow-lg">Sarana & Prasarana</h1>
					</div>
				</section>

				{/* Deskripsi */}
				<section className="py-10 px-6 lg:px-20 bg-white border-b border-slate-100">
					<div className="max-w-6xl mx-auto">
						<p className="text-slate-600 leading-relaxed">
							RSUD Haji Makassar menyediakan berbagai sarana dan prasarana penunjang yang dirancang untuk memberikan kenyamanan maksimal bagi pasien, keluarga, dan pengunjung. Fasilitas kami terus ditingkatkan untuk mendukung pelayanan kesehatan terbaik.
						</p>
					</div>
				</section>

				<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
					{/* Section Title */}
					<div className="mb-12">
						<h2 className="text-2xl font-bold text-slate-800 mb-3">Sarana dan Prasarana</h2>
						<div className="w-12 h-1 bg-green-600 rounded" />
					</div>

					{/* Grid Fasilitas */}
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">

						{facilities.map((facility) => (
							<section
								key={facility.title}
								className="overflow-hidden rounded-[28px] bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
							>

								{/* Foto */}
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
											/>
										</div>
									))}
								</div>

								{/* Content */}
								<div className="p-5">
									<h2 className="mb-3 text-xl font-bold text-slate-800">
										{facility.title}
									</h2>

									<p className="text-sm leading-relaxed text-slate-600">
										{facility.description}
									</p>
								</div>

							</section>
						))}

					</div>
				</div>
			</main>

			<Footer />
		</>
	);
}
