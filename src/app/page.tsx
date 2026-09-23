import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import Philosophy from '@/components/Philosophy';
import PopularProducts from '@/components/PopularProducts';

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Philosophy />
      <PopularProducts />
    </>
  );
}