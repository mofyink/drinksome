'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { categories } from '@/data/categories';
import AnimatedBackground from './AnimatedBackground';

export default function CategoryShowcase() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">
      
      {/* Анимированный фон */}
      <AnimatedBackground opacity={0.04} />

      <div className="relative">
        {/* Заголовок секции */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-16 h-px bg-gray-900"></div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
                Категории
              </p>
              <div className="w-16 h-px bg-gray-900"></div>
            </div>
            <h2 className="text-5xl lg:text-6xl font-light text-gray-900 tracking-tight">
              Наша продукция
            </h2>
          </div>
        </div>

        {/* Мобильная версия */}
        {isMobile && (
          <div className="space-y-8 px-4 pb-8">
            {categories.map((category, index) => (
              <MobileCard 
                key={category.id} 
                category={category} 
                index={index} 
              />
            ))}
          </div>
        )}

        {/* Десктопная версия */}
        {!isMobile && (
          <div className="w-full overflow-x-auto">
            <div className="flex justify-center" style={{ width: 'max-content', minWidth: '100%' }}>
              {categories.map((category, index) => (
                <DesktopCard 
                  key={category.id} 
                  category={category} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Мобильная карточка — появляется справа с небольшим сдвигом
function MobileCard({ category, index }: { 
  category: typeof categories[0]; 
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Link
      ref={ref}
      href={`/catalog?category=${encodeURIComponent(category.title)}`}
      className="block relative w-full h-[50vh] transition-all duration-700 ease-out"
      style={{
        transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={category.image}
          alt={category.title}
          fill
          className="object-cover"
        />
        
        {/* Полутемная плашка снизу */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 pt-16">
          <div className="space-y-2">
            <p className="text-xs text-white/70 uppercase tracking-widest">
              0{index + 1}
            </p>
            <h3 className="text-2xl font-light text-white tracking-tight">
              {category.title}
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

// Десктопная карточка — перекрывается и выезжает при наведении
function DesktopCard({ category, index }: { 
  category: typeof categories[0]; 
  index: number;
}) {
  return (
    <Link
      href={`/catalog?category=${encodeURIComponent(category.title)}`}
      className="group relative w-[350px] h-screen flex-shrink-0 transition-all duration-700 ease-out hover:-translate-x-20 hover:z-50"
      style={{
        marginLeft: index === 0 ? '0' : '-100px',
        zIndex: index + 1
      }}
    >
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={category.image}
          alt={category.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Полутемная плашка снизу */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8 pt-20">
          <div className="space-y-3">
            <p className="text-xs text-white/70 uppercase tracking-widest">
              0{index + 1}
            </p>
            <h3 className="text-3xl font-light text-white tracking-tight">
              {category.title}
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>

        {/* Оверлей при наведении */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
      </div>
    </Link>
  );
}