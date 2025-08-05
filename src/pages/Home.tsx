import {
  HeroSection,
  FeaturesSection,
  ServicesSection,
  TestimonialsSection,
  PreservationBoxesSection,
  GallerySection,
  CTASection,
} from '../components/home/index.ts';

const Home = () => {
  return (
    <div className='min-h-screen w-full'>
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
      <PreservationBoxesSection />
      <GallerySection />
      <CTASection />
    </div>
  );
};

export default Home;
