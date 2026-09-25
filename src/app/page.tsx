import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import PopularProducts from '@/components/PopularProducts';
import CategoryShowcase from '@/components/CategoryShowcase';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <CategoryShowcase />
      <PopularProducts />
      <Testimonials />
    </>
  );
}