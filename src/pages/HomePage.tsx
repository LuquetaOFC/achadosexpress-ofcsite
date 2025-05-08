import React from 'react';
import HeroSection from '../components/home/HeroSection';
import BenefitsBanner from '../components/ui/BenefitsBanner';
import CategorySection from '../components/home/CategorySection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import BestSellers from '../components/home/BestSellers';
import Testimonials from '../components/home/Testimonials';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsBanner variant="full" className="hidden md:block" />
      <BenefitsBanner variant="compact" className="md:hidden" />
      <CategorySection />
      <FeaturedProducts />
      <BestSellers />
      <Testimonials />
    </div>
  );
};

export default HomePage;