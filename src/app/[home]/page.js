import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div>
        <div>
          <h3 className="text-2xl">I'm I Made Wisnu Adi Sanjaya</h3>
          <p>Data Scientist</p>
        </div>
        <div>
          <Link href="/contact" className="flex px-4 py-2 text-white bg-gray-950">
            Get in Touch
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
