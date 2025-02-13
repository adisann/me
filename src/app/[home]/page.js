import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="flex w-full flex-col min-h-screen">
        <section className="text-center items-center justify-center flex-1 flex flex-col min-h-[90vh]">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">I'm I Made Wisnu Adi Sanjaya</h1>
            <p className="mt-6 text-lg md:text-2xl text-muted-foreground">Data Scientist</p>
          </div>
          <div className="flex gap-4 flex-wrap justify-center mt-8">
            <Link href="/contact" className="flex px-4 py-2 text-white bg-gray-950 rounded-lg hover:bg-gray-800">
              Get in Touch
            </Link>
            <Link href="/projects" className="flex px-4 py-2 text-gray-950 bg-white rounded-lg hover:bg-neutral-100 border">
              View Projects
            </Link>
          </div>
        </section>
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Data Science</h2>
              <p className="text-lg mx-auto text-muted-foreground max-w-2xl">Data Sciene Student that loves to create machine learning for predictions, and crafting dashboard for business analysis.</p>
            </div>
            <div className="grid lg:grid-cols-5 gap-8 items-start mb-16">
              <div className="rounded-xl border bg-card text-card-foreground shadow lg:col-span-2 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="w-6 h-6 " />
                  </div>
                  <h3 className="text-2xl font-semi-bold">Background</h3>
                </div>
                <p>As a Data Science Student, I specialized in developing AI/ML solution, and crafting analytical dashboard for businesses.</p>
              </div>
              <div></div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
