import { Head } from '@inertiajs/react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';


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

			<main className="min-h-screen bg-[#cce9d7] py-10 md:py-16">
				<div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-10">
					<div className="mb-10 rounded-sm bg-white py-8 shadow-sm md:mb-16 md:py-10">
						<h1 className="text-center text-4xl font-extrabold tracking-wide text-green-700 md:text-6xl">
							POLIKLINIK
						</h1>
					</div>

					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
	{clinics.map((clinic) => (
		<section
			key={clinic.title}
			className="rounded-[35px] bg-white p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10"
		>
								<div className="mb-6 flex justify-center">
									<div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-green-700">
										<i className={`fa-solid ${clinic.icon} text-4xl text-green-700`} aria-hidden="true" />
									</div>
								</div>

								<h2 className="mb-8 text-center text-2xl font-bold text-slate-800 md:text-3xl">
									{clinic.title}
								</h2>

								<ul className="space-y-4 text-base text-slate-800 md:text-lg">
									{clinic.items.map((item) => (
										<li key={item} className="flex items-center gap-3">
											<span className="h-2.5 w-2.5 rounded-full bg-green-600" />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</section>
						))}
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
}
