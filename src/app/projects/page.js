import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { projects } from '@/app/_constants/constants';
import { ProjectComponent } from '../[home]/_components/project-component';

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex-grow container mx-auto px-36 pt-16 pb-8">
        <div className="container py-12">
          <div className="mx-auto max-w-[58rem] space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">Projects</h1>
            <p className="text-xl text-muted-foreground">
              A curated portfolio showcasing my diverse projects at the intersection of data science, research, and web development. This collection highlights innovative applications such as multi-modal classification for early stunting
              detection, advanced clustering analyses, and the creation of analytical dashboards for business segmentation at Telkom University Surabaya. In addition, you'll find examples of my hands-on web development work, including
              dynamic CRUD implementations using Next.js and secure authentication systems built with MVC PHP.
            </p>
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
