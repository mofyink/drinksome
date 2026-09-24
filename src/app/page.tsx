import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import Philosophy from '@/components/Philosophy';
import PopularProducts from '@/components/PopularProducts';
import CategoryShowcase from '@/components/CategoryShowcase';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Categories /> доп вариант карточками, если не нравится шторка */} 
      <Philosophy />
      <CategoryShowcase />
      <PopularProducts />
      <Testimonials />
    </>
  );
}