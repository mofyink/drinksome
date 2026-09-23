'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedBackground from './AnimatedBackground';

const products = [
  {
    id: 1,
    name: 'Gin 0%',
    category: 'Спириты',
    price: 890,
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=600&q=80',
    slug: 'gin-0'
  },
  {
    id: 2,
    name: 'Whisky Zero',
    category: 'Спириты',
    price: 1290,
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=600&q=80',
    slug: 'whisky-zero'
  },
  {
    id: 3,
    name: 'Tonic Premium',
    category: 'Миксеры',
    price: 390,
    image: 'https://images.unsplash.com/photo-1546171753-97dcd6745b7e?w=600&q=80',
    slug: 'tonic-premium'
  },
  {
    id: 4,
    name: 'Mojito Base',
    category: 'Основы',
    price: 690,
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&q=80',
    slug: 'mojito-base'
  }
];

export default function PopularProducts() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      
      {/* Анимированный фон */}
      <AnimatedBackground opacity={0.03} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Заголовок секции */}
        <div className="mb-24 text-center">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-16 h-px bg-gray-900"></div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
              Коллекция
            </p>
            <div className="w-16 h-px bg-gray-900"></div>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 tracking-tight leading-[0.9]">
            Популярные
            <br />
            <span className="font-serif italic">продукты</span>
          </h2>
        </div>

        {/* Сетка продуктов */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Кнопка "Смотреть все" */}
        <div className="text-center mt-24">
          <Link 
            href="/catalog"
            className="inline-flex items-center px-10 py-4 border border-gray-900 text-gray-900 text-xs font-medium tracking-widest uppercase hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            Смотреть весь каталог
          </Link>
        </div>

      </div>
    </section>
  );
}

// Отдельный компонент карточки с анимацией
function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Link
      ref={ref}
      href={`/catalog/${product.slug}`}
      className="group"
    >
      {/* Номер продукта */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-gray-400 font-mono">
          0{index + 1}
        </span>
        <div className="w-8 h-px bg-gray-300 group-hover:w-30 group-hover:bg-gray-900 transition-all duration-300"></div>
      </div>

      {/* Изображение */}
      <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-gray-50">
        <Image 
          src={product.image} 
          alt={product.name}
          fill
          className="object-cover lg:grayscale lg:group-hover:grayscale-0 transition-all duration-700"
        />
        
        {/* Оверлей при наведении */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
      </div>

      {/* Информация о продукте */}
      <div className="space-y-3">
        <div className="flex items-baseline justify-between">
          <h3 className="text-lg font-light text-gray-900 tracking-tight group-hover:text-gray-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-lg font-medium text-gray-900">
            {product.price.toLocaleString('ru-RU')} ₽
          </p>
        </div>
        
        <p className="text-xs text-gray-500 uppercase tracking-wider">
          {product.category}
        </p>
      </div>
    </Link>
  );
}