import ContactForm from '../components/contact/ContactForm';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import CTASection from '../components/contact/CTASection';
import FAQSection from '../components/contact/FAQSection';
import GoogleMap from '../components/contact/GoogleMap';

export default function Contact() {
  return (
    <div className="pt-15 md:pt-27 min-h-screen bg-slate-50/50">
      {/* Hero Section */}
      <ContactHero />

      {/* Main Form & Info Section */}
      <section className="py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column — Contact Information */}
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>

          {/* Right Column — Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <GoogleMap />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Banner Section */}
      <CTASection />
    </div>
  );
}
