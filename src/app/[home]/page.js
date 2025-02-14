import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { GraduationCap } from 'lucide-react';
import { UserRoundSearch } from 'lucide-react';
import { SkillComponent } from './_components/skill-components';
import { ProjectComponent } from './_components/project-component';
import { skills, projects } from '@/app/_constants/constants';

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
                  {skills.map((item, index) => (
                    <SkillComponent key={index} title={item.title} icon={item.icon} skills={item.skills} />
                  ))}
                </div>
              </div>
              <div className="text-center group relative">
                <Link href="/about" className="inline-flex h-12 items-center justify-center text-sm  hover:bg-gray-800 font-medium text-white rounded-lg bg-gray-950 space-x-4 p-4">
                  Learn more about me
                  <UserRoundSearch className="ml-2  group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </section>
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-21">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Recent Projects</h2>
                <p className="mt-4 text-lg text-muted-foreground">Selection of my projects as a Data Science Student</p>
              </div>
              <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((item, index) =>
                  item.featured ? <ProjectComponent key={index} title={item.title} image={item.image} type={item.type} description={item.description} tags={item.tags} github={item.github} demo={item.demo} /> : ''
                )}
              </div>
              <div className="mt-12 text-center">
                <Link href="/projects" className="inline-flex h-12 border border-gray-300 justify-center rounded-lg px-8 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors items-center">
                  View All Projects
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
