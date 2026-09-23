'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import AnimatedBackground from './AnimatedBackground';

const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=1000&q=80',
    collection: '26',
    alt: 'Безалкогольные напитки премиум класса'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1000&q=80',
    collection: '25',
    alt: 'Новая коллекция напитков'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=1000&q=80',
    collection: '24',
    alt: 'Премиальные миксеры'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1622543925917-1856240108ae?w=1000&q=80',
    collection: '23',
    alt: 'Освежающие напитки'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Автоматическая смена слайдов каждые 5 секунд
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      
      {/* Анимированный фон */}
      <AnimatedBackground opacity={0.08} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 min-h-screen items-center py-20">
          
          {/* Текстовая часть */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="w-12 h-px bg-gray-900 mb-8 mx-auto lg:mx-0"></div>
              
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
                Безалкогольные напитки
              </p>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-[0.9] tracking-tight">
                Новый
                <br />
                <span className="font-normal">вкус</span>
                <br />
                свободы
              </h1>
              
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-sm mx-auto lg:mx-0 pt-4">
                Коллекция премиальных безалкогольных напитков для тех, кто выбирает осознанность без потери качества
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center lg:justify-start">
              <Link 
                href="/catalog"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gray-900 text-white text-xs font-medium tracking-widest uppercase hover:bg-gray-800 transition-colors"
              >
                Каталог
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3.5 text-gray-900 text-xs font-medium tracking-widest uppercase border border-gray-300 hover:border-gray-900 transition-colors"
              >
                О нас
              </Link>
            </div>
          </div>

          {/* Изображение с анимацией */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={heroSlides[currentSlide].image}
                    alt={heroSlides[currentSlide].alt}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Декоративный элемент с номером коллекции */}
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white flex items-center justify-center hidden sm:flex">
              <AnimatePresence mode="wait">
                <motion.div
                  key={heroSlides[currentSlide].collection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl font-light text-gray-900">
                    {heroSlides[currentSlide].collection}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-500">
                    Коллекция
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Индикаторы слайдов */}
            <div className="absolute bottom-8 right-8 hidden lg:flex gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gray-900 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Слайд ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}