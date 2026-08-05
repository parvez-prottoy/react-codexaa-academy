import CareerTimeline from '../components/success/CareerTimeline';
import CTASection from '../components/success/CTASection';
import ReviewSlider from '../components/success/ReviewSlider';
import StatisticsSection from '../components/success/StatisticsSection';
import SuccessGrid from '../components/success/SuccessGrid';
import SuccessHero from '../components/success/SuccessHero';
import VideoTestimonials from '../components/success/VideoTestimonials';

export default function SuccessStories() {
  return (
    <div className="pt-15 md:pt-27 min-h-screen bg-slate-50/50">
      {/* 1. Hero Section */}
      <SuccessHero />

      {/* 2. Success Statistics */}
      <StatisticsSection />

      {/* 4. Student Success Timeline */}
      <CareerTimeline />

      {/* 5. Video Testimonials */}
      <VideoTestimonials />

      {/* 6. Success Story Grid */}
      <SuccessGrid />

      {/* 8. Student Reviews Slider */}
      <ReviewSlider />

      {/* 9. Career Journey CTA */}
      <CTASection />
    </div>
  );
}
