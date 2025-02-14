import { Brain, Database, CodeXml } from 'lucide-react';
export const skills = [
  {
    title: 'AI & Machine Learning',
    icon: <Brain className="w-6 h-6" />,
    skills: ['Meta Heuristics', 'Natural Language Processing', 'Deep Learning'],
  },
  {
    title: 'Data Science',
    icon: <Database className="w-6 h-6" />,
    skills: ['Web Scraping', 'Crafting Analytical Dashboard', 'Dimensionality Reduction', 'Statistical Model', 'Clustering', 'Classification'],
  },
  {
    title: 'Programming',
    icon: <CodeXml className="w-6 h-6" />,
    skills: ['Python', 'JavaScript', 'Java', 'C++', 'Pascal', 'Pandas', 'NumPy', 'SQL'],
  },
];

export const projects = [
  {
    title: 'Web Portofolio',
    image: '',
    type: 'Personal Project',
    description: 'Yadda yadda',
    tags: ['Next.js', 'Vercel', 'SQLite', 'PrismaORM', 'TailwindCSS'],
    github: '',
    demo: '',
    category: 'web development',
    featured: false,
  },
  {
    title: 'SPP Dashboard for My Highschool',
    image: '',
    type: 'Personal Project',
    description: 'Yadda yadda',
    tags: ['PHP', 'MySQL', 'Bootstrap'],
    github: '',
    demo: '',
    category: 'web development',
    featured: false,
  },
  {
    title: 'Montracker',
    image: '',
    type: 'Personal Project',
    description: 'Implementing CRUD in Next.js with AppBackend as database',
    tags: ['Next.js', 'Vercel', 'AppBacked'],
    github: 'https://github.com/adisann/montracker',
    demo: 'https://montracker.vercel.app',
    category: 'web development',
    featured: true,
  },
  {
    title: 'Analytical Dashboard & School Segmentation',
    image: '',
    type: 'Research',
    description: 'Crafting analytical dashboard',
    tags: ['Python', 'Clustering', 'Tableau', 'PCA'],
    github: '',
    demo: '',
    category: 'web development',
    featured: true,
  },
  {
    title: 'Stunting Detection',
    image: '',
    type: 'Research',
    description: '',
    tags: ['Python', 'Classification', 'PCA', 'SMOTE'],
    github: '',
    demo: '',
    category: 'web development',
    featured: true,
  },
];

export const works = [
  {
    title: 'On The Job Training at PT. Guna Teknologi Nusantara',
    location: 'Denpasar, Bali, Indonesia',
    duration: '3 Months',
    typeOfWork: 'Work From Office',
    dateOfWork: 'June 2022 - September 2022',
    jobDesc: ['Developing Web Application', 'Implementing CRUD', 'Implementing Authentication', 'Implementing Authorization'],
    tags: ['PHP', 'MySQL', 'Bootstrap', 'Laravel'],
  },
];

export const certificates = [
  {
    title: 'Certificate of Completion R Fundamental for Data Science',
    image: '',
    institution: 'DQLab',
    issuedAt: '30 Sep 2023',
  },
];

export const education = [
  {
    degree: 'Bachelor of Science in Data Science',
    duration: 'September 2023 - Present',
    institution: 'Telkom University Surabaya',
    achievements: ['Dean List', 'Scholarship'],
    organizations: ['Machine Learning Assistent Tech and Curriculum', 'Young Staff of the Data Science Student Association'],
    gpa: '3.9',
  },
];
