import SEO from '../components/common/SEO';
import CoursesSection from '../components/courses/CoursesSection';
import CrossPlatformSection from '../components/crossplatform/CrossPlatformSection';
import FooterCTA from '../components/footer/FooterCTA';
import HeroSlider from '../components/hero/HeroSlider';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';
import TrustedCompanies from '../components/trusted/TrustedCompanies';

export default function Home() {
  return (
    <>
      <SEO />
      {/* Sticky navbar offset: 36px announcement + 72px nav = 108px */}
      <div className="pt-15 md:pt-27">
        <HeroSlider />
      </div>

      <TrustedCompanies />

      <CoursesSection featuredOnly={false} />

      <CrossPlatformSection />

      <TestimonialsSection />

      {/* Pre-footer CTA */}
      <div className="py-12 sm:py-16">
        <FooterCTA />
      </div>
    </>
  );
}
