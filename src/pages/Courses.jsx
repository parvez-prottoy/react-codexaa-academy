import CoursesHero from '../components/courses/CoursesHero';
import CoursesSection from '../components/courses/CoursesSection';
import CTASection from '../components/courses/CTASection';
import WhyChooseAcademy from '../components/courses/WhyChooseAcademy';
import SEO from '../components/common/SEO';

export default function Courses() {
  return (
    <div className="pt-15 md:pt-27 min-h-screen bg-slate-50/50">
      <SEO 
        title="All Courses"
        description="Browse all premium tech courses offered by Codexaa Academy."
      />
      {/* 1. Hero Section */}
      <CoursesHero />

      {/* 2. Featured Course */}
      <CoursesSection />

      {/* 4. Why Choose This Academy */}
      <WhyChooseAcademy />

      {/* 5. Call To Action */}
      <CTASection />
    </div>
  );
}
