import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { projects } from '@/app/_constants/constants';
import { ProjectComponent } from '../[home]/_components/project-component';

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-16 pb-8">
        <div className="container py-12">
          <div className="mx-auto max-w-[58rem] space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">Projects</h1>
            <p className="text-xl text-muted-foreground">A collection of projects</p>
          </div>
          <div className="mt-16">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((item, index) => (
                  <ProjectComponent key={index} title={item.title} image={item.image} type={item.type} description={item.description} tags={item.tags} github={item.github} demo={item.demo} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
