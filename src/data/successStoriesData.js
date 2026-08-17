import {
  HiAcademicCap,
  HiBriefcase,
  HiBuildingOffice2,
  HiChatBubbleBottomCenterText,
  HiCheckBadge,
  HiCodeBracket,
  HiDocumentCheck,
  HiStar,
  HiTrophy,
  HiUserGroup,
} from 'react-icons/hi2';

import logoGrameenphone from '../assets/logos/bdtask-logo.webp';
import logoBjit from '../assets/logos/brain-station.webp';
import logoNttData from '../assets/logos/soft-bd.png';
import logoBrainStation23 from '../assets/logos/vivasoft.svg';

export const successStats = [
  {
    id: 1,
    icon: HiAcademicCap,
    value: 10000,
    displayValue: '10,000+',
    label: 'Students Trained',
    description: 'Across web, software, design & AI',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    id: 2,
    icon: HiBriefcase,
    value: 2500,
    displayValue: '2,500+',
    label: 'Career Placements',
    description: 'In top tech firms globally',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    id: 3,
    icon: HiStar,
    value: 4.9,
    displayValue: '4.9 / 5.0',
    label: 'Average Rating',
    description: 'From 5,000+ verified student reviews',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    id: 4,
    icon: HiBuildingOffice2,
    value: 150,
    displayValue: '150+',
    label: 'Hiring Partners',
    description: 'Actively hiring our graduates',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
  },
];

export const featuredStories = [
  {
    id: 1,
    name: 'Tanvir Ahmed',
    position: 'Senior Software Engineer',
    company: 'BJIT Group',
    companyLogo: logoBjit,
    photo:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    previousBackground: 'Fresh Graduate with non-CS background',
    currentAchievement: 'Promoted to Tech Lead in 18 months',
    salaryGrowth: '+220% Salary Increase',
    course: 'Full-Stack Software Development',
    summary:
      'I joined Codexaa Academy with zero professional coding experience. The intensive project-based curriculum, code reviews, and mock interviews helped me secure a Software Engineer role at BJIT within 2 months of graduation.',
    linkedin: 'https://linkedin.com',
    badge: 'Spotlight Story',
  },
  {
    id: 2,
    name: 'Nusrat Jahan',
    position: 'Lead UI/UX Designer',
    company: 'Brain Station 23',
    companyLogo: logoBrainStation23,
    photo:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    previousBackground: 'Graphic Design Specialist',
    currentAchievement: 'Designs apps used by 1M+ users',
    salaryGrowth: '+180% Salary Hike',
    course: 'UI/UX Design & Product Strategy',
    summary:
      'Codexaa taught me how to think like a product designer. I built 4 real client portfolios during the course, which directly landed me my dream role at Brain Station 23.',
    linkedin: 'https://linkedin.com',
    badge: 'Career Switcher',
  },
  {
    id: 3,
    name: 'Rahat Chowdhury',
    position: 'DevOps & Cloud Specialist',
    company: 'NTT DATA',
    companyLogo: logoNttData,
    photo:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    previousBackground: 'System Admin',
    currentAchievement: 'Managing enterprise cloud architecture',
    salaryGrowth: '+250% Growth',
    course: 'DevOps & Cloud Architecture',
    summary:
      'Transitioning from sysadmin to Cloud Engineer seemed daunting until I joined Codexaa. The hands-on AWS & Kubernetes labs gave me the exact skills enterprise recruiters were looking for.',
    linkedin: 'https://linkedin.com',
    badge: 'International Placement',
  },
];

export const timelineSteps = [
  {
    step: '01',
    title: 'Enrollment & Orientation',
    description:
      'Select your career track and get paired with your dedicated mentor.',
    icon: HiUserGroup,
    color: 'bg-blue-50 text-blue-600 border-blue-200',
  },
  {
    step: '02',
    title: 'Core Skill Mastery',
    description:
      'Master modern frameworks and tools through live coding and lectures.',
    icon: HiCodeBracket,
    color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
  },
  {
    step: '03',
    title: 'Capstone Projects',
    description:
      'Build 3+ production-ready real-world applications for your portfolio.',
    icon: HiCheckBadge,
    color: 'bg-amber-50 text-amber-600 border-amber-200',
  },
  {
    step: '04',
    title: 'Certification',
    description:
      'Earn your verified Codexaa Academy industry-recognized certificate.',
    icon: HiDocumentCheck,
    color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
  },
  {
    step: '05',
    title: 'Mock Interviews & CV',
    description:
      'Participate in 1-on-1 technical mock interviews & CV polishing.',
    icon: HiChatBubbleBottomCenterText,
    color: 'bg-violet-50 text-violet-600 border-violet-200',
  },
  {
    step: '06',
    title: 'Job Placement',
    description: 'Get referred directly to 150+ partner hiring companies.',
    icon: HiTrophy,
    color: 'bg-rose-50 text-rose-600 border-rose-200',
  },
];

export const videoTestimonials = [
  {
    id: 1,
    studentName: 'Farhan Kabir',
    company: 'Grameenphone',
    companyLogo: logoGrameenphone,
    course: 'Full-Stack Web Development',
    duration: '2:45',
    thumbnail:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    quote:
      'How I went from zero coding knowledge to a Senior Developer role in 6 months.',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 2,
    studentName: 'Samiya Rahman',
    company: 'Brain Station 23',
    companyLogo: logoBrainStation23,
    course: 'UI/UX Design Mastery',
    duration: '3:12',
    thumbnail:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    quote:
      'The mentorship at Codexaa completely transformed my portfolio & career confidence.',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 3,
    studentName: 'Ayman Zubair',
    company: 'BJIT Group',
    companyLogo: logoBjit,
    course: 'Cyber Security & Ethical Hacking',
    duration: '2:18',
    thumbnail:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    quote:
      'Hands-on labs made all the difference when interviewing for security roles.',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];

export const successGrid = [
  {
    id: 1,
    name: 'Arif Hossain',
    jobTitle: 'React Native Developer',
    company: 'Kaz Software',
    course: 'Mobile App Development',
    photo:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    quote:
      'The project mentorship at Codexaa was the single best investment I made for my career.',
    salaryGrowth: '+190%',
  },
  {
    id: 2,
    name: 'Sabrina Islam',
    jobTitle: 'Frontend Engineer',
    company: 'Technext',
    course: 'Full-Stack Web Development',
    photo:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    quote:
      'I landed my job before even graduating from the boot camp. Highly recommended!',
    salaryGrowth: '+150%',
  },
  {
    id: 3,
    name: 'Mehedi Hasan',
    jobTitle: 'Data Analyst',
    company: 'DataSoft',
    course: 'Data Science & Analytics',
    photo:
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80',
    quote:
      'Learning SQL, Python, and Power BI with real datasets helped me stand out in interviews.',
    salaryGrowth: '+170%',
  },
  {
    id: 4,
    name: 'Zarin Tasnim',
    jobTitle: 'Product Designer',
    company: 'Shikho',
    course: 'UI/UX Design',
    photo:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    quote:
      'The Figma design system module was top-tier. I felt ready for real industry work on day 1.',
    salaryGrowth: '+210%',
  },
  {
    id: 5,
    name: 'Mahmudul Karim',
    jobTitle: 'Cloud Engineer',
    company: 'Therap BD',
    course: 'DevOps & Cloud Architecture',
    photo:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    quote:
      'From Docker containers to CI/CD pipelines, everything was taught practically.',
    salaryGrowth: '+240%',
  },
  {
    id: 6,
    name: 'Lamia Haque',
    jobTitle: 'Software QA Engineer',
    company: 'SELISE Digital',
    course: 'Software Testing & Automation',
    photo:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    quote:
      'The mock interview practice gave me the confidence to crack the technical rounds effortlessly.',
    salaryGrowth: '+160%',
  },
];

export const studentReviews = [
  {
    id: 1,
    name: 'Tanvir Ahmed',
    position: 'Software Engineer @ BJIT',
    photo:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    review:
      'Codexaa Academy is hands-down the best tech academy in the country. The instructors are active software engineers who teach what actually matters in the job market.',
  },
  {
    id: 2,
    name: 'Nusrat Jahan',
    position: 'Product Designer @ Brain Station 23',
    photo:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    review:
      'The curriculum is updated every cohort. I was able to build an outstanding portfolio of 4 live applications that impressed every interviewer.',
  },
  {
    id: 3,
    name: 'Rahat Chowdhury',
    position: 'Cloud Specialist @ NTT DATA',
    photo:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    review:
      "Career support team didn't just help me build a CV; they conducted 3 1-on-1 mock interviews and directly referred me to NTT DATA.",
  },
  {
    id: 4,
    name: 'Sabrina Islam',
    position: 'Frontend Dev @ Technext',
    photo:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    review:
      'Joining Codexaa was the best decision for my career. The live mentor sessions cleared every doubt I had immediately.',
  },
];

export const successFaqs = [
  {
    id: 1,
    question: 'How long does it take to become job-ready?',
    answer:
      'Most of our comprehensive tracks take 4 to 6 months of dedicated learning and project building. With 10-12 hours per week, students are ready for entry and mid-level roles upon graduation.',
  },
  {
    id: 2,
    question: 'Do you provide career support?',
    answer:
      'Yes! Our dedicated Career Services team provides resume reviews, portfolio optimization, 1-on-1 technical mock interviews, and direct job referrals to our 150+ hiring partners.',
  },
  {
    id: 3,
    question: 'Will I receive a certificate?',
    answer:
      'Yes. Every graduate who completes the capstone project receives a verified digital Codexaa Academy certificate that can be shared on LinkedIn and verified by employers.',
  },
  {
    id: 4,
    question: 'Can beginners join?',
    answer:
      'Absolutely! We start from basic programming fundamentals before moving on to advanced frameworks. No prior coding experience is required.',
  },
  {
    id: 5,
    question: 'How do placements work?',
    answer:
      'Top performers in each batch are directly recommended to our partner companies for exclusive interview calls and hiring drives.',
  },
  {
    id: 6,
    question: 'What projects will I build?',
    answer:
      'You will build 3 to 4 full-stack real-world applications, including SaaS platforms, e-commerce stores, mobile apps, and interactive dashboards.',
  },
  {
    id: 7,
    question: 'Do you provide internships?',
    answer:
      'Yes, top-ranking graduates are offered paid internship placements at Codexaa Ltd or partner software firms.',
  },
  {
    id: 8,
    question: 'Can I study online?',
    answer:
      'Yes! We offer live interactive online batches with access to class recordings, live Q&A sessions, and Discord mentor channels.',
  },
];
