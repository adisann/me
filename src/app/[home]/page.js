import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { GraduationCap } from 'lucide-react';
import { Brain, Database, CodeXml } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow container mx-auto px-6 pt-16 pb-8">
        <div className="flex w-full flex-col min-h-screen">
          <section className="text-center items-center justify-center flex-1 flex flex-col min-h-[90vh]">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">I'm Adisan</h1>
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
          <section className="py-24 box-shadow shadow-lg rounded-lg bg-gray-100">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8 relative">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Machine Learning Engineer</h2>
                <p className="text-lg mx-auto text-muted-foreground max-w-2xl">Data Sciene Student that loves to create machine learning for predictions, and crafting dashboard for business analysis.</p>
              </div>
              <div className="grid lg:grid-cols-5 gap-8 items-start mb-16">
                <div className="rounded-xl border bg-card text-card-foreground shadow lg:col-span-2 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-4 rounded-lg bg-primary/10">
                      <GraduationCap className="w-6 h-6 " />
                    </div>
                    <h3 className="text-2xl font-semi-bold">Background</h3>
                  </div>
                  <p>As a Data Science Student, I specialized in developing AI/ML solution, and crafting analytical dashboard for businesses.</p>
                </div>
                <div className="grid lg:col-span-3 sm:grid-cols-2 gap-6">
                  <div className="rounded-xl border bg-card text-card-foreground shadow p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-purple-500/10 ">
                        <Brain className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold">AI & Machine Learning</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold  transition-transform">Meta Heuristics</div>
                      <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold  transition-transform">Natural Language Processing</div>
                      <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold  transition-transform">Deep Learning</div>
                    </div>
                  </div>
                  <div className="rounded-xl border bg-card text-card-foreground shadow p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-purple-500/10 ">
                        <Database className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold">Data Science</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold  transition-transform">Web Scraping</div>
                      <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold  transition-transform">Crafting Analytical Dashboard</div>
                      <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold  transition-transform">Dimensionality Reduction</div>
                      <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold  transition-transform">Statistical Model</div>
                      <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold  transition-transform">Clustering</div>
                      <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold  transition-transform">Classification</div>
                      <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold  transition-transform">Deep Learning</div>
                    </div>
                  </div>

                  <div className="rounded-xl border bg-card text-card-foreground shadow p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-purple-500/10 ">
                        <CodeXml className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold">Programming</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold  transition-transform">Python</div>
                      <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold  transition-transform">JavaScript</div>
                      <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold  transition-transform">Java</div>
                      <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold  transition-transform">C++</div>
                      <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold  transition-transform">Pascal</div>
                      <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold  transition-transform">SQL</div>
                      <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold  transition-transform">Pandas</div>
                      <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold  transition-transform">NumPy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
