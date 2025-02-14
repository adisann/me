import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Building, GraduationCap, BriefcaseBusiness, FileBadge } from 'lucide-react';
import { SkillComponent } from '../[home]/_components/skill-components';
import { WorkComponent } from '@/components/work-component';
import { CertificateComponent } from '@/components/certificate-component';
import { EducationComponent } from '@/components/education-component';
import { skills, works, certificates, education } from '@/app/_constants/constants';

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <div className="min-h-screen ">
          <div className="container mx-auto px-4 py-24">
            <div className="mb-20">
              <div className="flex  flex-col md:flex-row items-center gap-8">
                <div className="relative h-48 w-48 rounded-full *:overflow-hidden border-4">
                  <img src="" alt="My Profile" className="h-auto" />
                </div>
                <div className="w-full">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Adisan</h1>
                  <p className="text-xl text-muted-foreground mb-4">Data Science Student</p>
                  <div className="flex flex-wrap gap-2">
                    <div className="inline-flex items-center rounded-md text-xs transition-colors font-semibold bg-gray-100 px-4 py-2">Junior AI/ML Engineer</div>
                    <div className="inline-flex items-center rounded-md text-xs transition-colors font-semibold bg-gray-100 px-4 py-2">Junior Full-Stack JavaScript Developer</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-20">
              <div className="rounded-xl border text-card-foreground shadow p-8 backdrop-blur-xl bg-card/50 border-primary/10">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Building />
                  Profesional Summary
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>Data Science Student, bla bla bla</p>
                </div>
              </div>
            </div>
            <div className="mb-20">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Building />
                Skill & Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((item, index) => (
                  <SkillComponent key={index} title={item.title} icon={item.icon} skills={item.skills} />
                ))}
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <BriefcaseBusiness />
                Work Experience
              </h2>
              <div className="space-y-6">
                {works.map((item, index) => (
                  <WorkComponent key={index} title={item.title} location={item.location} duration={item.duration} typeOfWork={item.typeOfWork} dateOfWork={item.dateOfWork} jobDesc={item.jobDesc} tags={item.tags} />
                ))}
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <FileBadge />
                Certificates & Awards
              </h2>
              <div className="space-y-6">
                {certificates.map((item, index) => (
                  <CertificateComponent key={index} title={item.title} image={item.image} institution={item.institution} issuedAt={item.issuedAt} />
                ))}
              </div>
            </div>

            <div className="mb-20">
              <div className="rounded-xl border text-card-foreground shadow p-8 backdrop-blur-xl bg-card/50 border-primary/10">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <GraduationCap />
                  Education
                </h2>

                <div className="space-y-6">
                  {education.map((item, index) => (
                    <EducationComponent key={index} title={item.degree} duration={item.duration} institution={item.institution} achievements={item.achievements} organizations={item.organizations} gpa={item.gpa} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
