'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import AnimatedBackground from './AnimatedBackground';

// Компонент для анимации чисел
function AnimatedCounter({ 
  end, 
  duration = 2000, 
  suffix = '',
  reverse = false 
}: { 
  end: number; 
  duration?: number;
  suffix?: string;
  reverse?: boolean;
}) {
  const [count, setCount] = useState(reverse ? 50 : 0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setCount(reverse ? 50 : 0);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [reverse]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = reverse ? 50 : 0;
    const endValue = reverse ? 0 : end;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentValue = Math.round(startValue + (endValue - startValue) * easeOutQuart);
      setCount(currentValue);

      if (progress >= 1) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration, reverse]);

  return (
    <div ref={ref} className="text-5xl lg:text-6xl font-light text-gray-900 mb-2">
      {count}{suffix}
    </div>
  );
}

// Компонент для анимированного знака бесконечности
function AnimatedInfinity() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-5xl lg:text-6xl font-light text-gray-900 mb-2">
      <span className={isVisible ? 'animate-pulse-slow' : ''}>∞</span>
    </div>
  );
}

export default function Philosophy() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      
      {/* Анимированный фон */}
      <AnimatedBackground opacity={0.04} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
                {/* Верхняя часть: заголовок по центру */}
        <div className="mb-24 text-center">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-16 h-px bg-gray-900"></div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
              Философия бренда
            </p>
            <div className="w-16 h-px bg-gray-900"></div>
          </div>
          
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 tracking-tight leading-[0.9]">
            Мы верим, что <span className="font-serif italic">удовольствие</span>
            <br />
            не требует компромиссов
          </h2>
        </div>

        {/* Средняя часть: изображение и текст */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          
          {/* Изображение */}
          <div className="lg:col-span-5 lg:col-start-2">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80"
                alt="Философия бренда"
                fill
                className="object-cover"
              />
              
              {/* Декоративная рамка */}
              <div className="absolute inset-4 border border-white/30 pointer-events-none"></div>
            </div>
            
            {/* Подпись под изображением */}
            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-px bg-gray-900"></div>
              <p className="text-xs text-gray-500 tracking-wide">
                Качество в каждой детали
              </p>
            </div>
          </div>

          {/* Текст */}
          <div className="lg:col-span-5 lg:col-start-8 space-y-8">
            
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Каждый наш напиток — это результат тщательного отбора ингредиентов и мастерства создания вкуса.
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                Мы создаём напитки для тех, кто выбирает осознанность, не отказываясь от удовольствия.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed pt-4 border-l-2 border-gray-900 pl-6">
                Наша коллекция — это не просто альтернатива алкоголю. Это новый взгляд на культуру потребления, где качество, вкус и стиль идут рука об руку с заботой о себе.
              </p>
            </div>

          </div>
        </div>

                {/* Нижняя часть: статистика */}
        <div className="border-t border-gray-200 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="group text-center">
              <AnimatedCounter end={100} suffix="%" duration={2000} />
              <div className="mt-4 space-y-2">
                <div className="w-0 h-px bg-gray-900 mx-auto group-hover:w-16 transition-all duration-500 ease-out"></div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Натуральные ингредиенты высшего качества
                </p>
              </div>
            </div>

            <div className="group text-center">
              <AnimatedCounter end={0} suffix="%" duration={2000} reverse={true} />
              <div className="mt-4 space-y-2">
                <div className="w-0 h-px bg-gray-900 mx-auto group-hover:w-16 transition-all duration-500 ease-out"></div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Алкоголя и сахара — только чистый вкус
                </p>
              </div>
            </div>

            <div className="group text-center">
              <AnimatedInfinity />
              <div className="mt-4 space-y-2">
                <div className="w-0 h-px bg-gray-900 mx-auto group-hover:w-16 transition-all duration-500 ease-out"></div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Удовольствия без границ и компромиссов
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}