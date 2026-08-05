import AboutHero from '../components/about/AboutHero';
import AboutStory from '../components/about/AboutStory';
import AchievementSection from '../components/about/AchievementSection';
import CTASection from '../components/about/CTASection';
import InstructorPreview from '../components/about/InstructorPreview';
import MissionVision from '../components/about/MissionVision';
import OurJourney from '../components/about/OurJourney';
import WhyChooseUs from '../components/about/WhyChooseUs';

export default function About() {
  return (
    <div className="pt-15 md:pt-27 min-h-screen bg-slate-50/50">
      {/* 1. About Hero */}
      <AboutHero />
      {/* 2. Our Story */}
      <AboutStory />
      {/* 3. Mission & Vision */}
      <MissionVision />
      {/* 4. Why Choose Our Academy */}
      <WhyChooseUs />
      {/* 5. Our Journey */}
      <OurJourney />
      {/* 6. Achievements */}
      <AchievementSection />
      {/* 7. Our Mentors Preview */}
      <InstructorPreview />

      {/* 9. Call To Action */}
      <CTASection />
    </div>
  );
}
