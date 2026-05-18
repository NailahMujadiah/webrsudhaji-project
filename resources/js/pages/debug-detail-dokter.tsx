import { Head } from '@inertiajs/react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function DebugDetailDokter(props: any) {
    return (
        <>
            <Head title="Debug Detail Dokter" />
            <Navbar />
            <main className="p-8">
                <pre className="text-sm whitespace-pre-wrap">{JSON.stringify(props, null, 2)}</pre>
            </main>
            <Footer />
        </>
    );
}
