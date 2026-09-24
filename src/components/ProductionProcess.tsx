'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import AnimatedBackground from './AnimatedBackground';
import { productionSteps } from '@/data/production';

export default function ProductionProcess() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Вычисляем прогресс скролла по таймлайну (0 = начало, 1 = конец)
      const timelineTop = rect.top;
      const timelineHeight = rect.height;
      
      // Прогресс: когда таймлайн начинает входить в viewport и когда полностью проходит
      const startOffset = windowHeight * 0.5; // Начинаем анимацию когда таймлайн на середине экрана
      const endOffset = windowHeight * 0.3; // Заканчиваем когда таймлайн почти ушёл
      
      const scrolled = Math.max(0, Math.min(1, 
        (startOffset - timelineTop) / (timelineHeight + startOffset - endOffset)
      ));

      setScrollProgress(scrolled);

      // Анимация линии
      if (lineRef.current) {
        const progressPercent = scrolled * 100;
        lineRef.current.style.background = `linear-gradient(to bottom, 
          rgb(17, 24, 39) 0%, 
          rgb(17, 24, 39) ${progressPercent}%, 
          rgb(229, 231, 235) ${progressPercent}%, 
          rgb(229, 231, 235) 100%
        )`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <AnimatedBackground opacity={0.03} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Заголовок секции */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-16 h-px bg-gray-900"></div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
              Процесс
            </p>
            <div className="w-16 h-px bg-gray-900"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-[0.9]">
            Как мы создаём
            <br />
            <span className="font-serif italic">наши спириты</span>
          </h2>
        </div>

        {/* Вертикальный таймлайн */}
        <div className="relative" ref={timelineRef}>
          
          {/* Центральная линия — десктоп */}
          <div 
            ref={lineRef}
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block"
            style={{ background: 'rgb(229, 231, 235)' }}
          ></div>

          {/* Линия — мобильная */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 lg:hidden"></div>

          {/* Этапы */}
          <div className="space-y-20 lg:space-y-32">
            {productionSteps.map((step, index) => (
              <TimelineCard 
                key={step.id} 
                step={step} 
                index={index}
                isLeft={index % 2 === 0}
                scrollProgress={scrollProgress}
                totalSteps={productionSteps.length}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

function TimelineCard({ step, index, isLeft, scrollProgress, totalSteps }: { 
  step: typeof productionSteps[0]; 
  index: number;
  isLeft: boolean;
  scrollProgress: number;
  totalSteps: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Вычисляем, когда линия должна достичь этого шага
  const stepThreshold = (index + 0.5) / totalSteps;
  const isActive = scrollProgress >= stepThreshold;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative">
      
      {/* Десктопная версия — чередование лево/право */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_80px_1fr] lg:gap-8 items-center">
        
        {/* Левая колонка */}
        <div className={`transition-all duration-700 ease-out ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : isLeft 
              ? 'opacity-0 -translate-x-16' 
              : 'opacity-0 translate-x-0'
        }`}>
          {isLeft && <TimelineContent step={step} align="right" />}
        </div>

        {/* Центральная точка */}
        <div className="flex justify-center">
          <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
            isActive 
              ? 'bg-gray-900 border-gray-900' 
              : 'bg-white border-gray-300'
          }`}>
            <span className={`text-sm font-light transition-colors duration-500 ${
              isActive ? 'text-white' : 'text-gray-400'
            }`}>
              0{step.id}
            </span>
          </div>
        </div>

        {/* Правая колонка */}
        <div className={`transition-all duration-700 ease-out ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : !isLeft 
              ? 'opacity-0 translate-x-16' 
              : 'opacity-0 translate-x-0'
        }`}>
          {!isLeft && <TimelineContent step={step} align="left" />}
        </div>

      </div>

      {/* Мобильная версия */}
      <div className="lg:hidden relative pl-16">
        
        {/* Точка */}
        <div className="absolute left-0 top-0 z-10">
          <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
            isActive 
              ? 'bg-gray-900 border-gray-900' 
              : 'bg-white border-gray-300'
          }`}>
            <span className={`text-xs font-light transition-colors duration-500 ${
              isActive ? 'text-white' : 'text-gray-400'
            }`}>
              0{step.id}
            </span>
          </div>
        </div>

        {/* Контент */}
        <div className={`transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}>
          <TimelineContent step={step} align="left" />
        </div>

      </div>

    </div>
  );
}

function TimelineContent({ step, align }: { 
  step: typeof productionSteps[0];
  align: 'left' | 'right';
}) {
  return (
    <div className={`group ${align === 'right' ? 'text-right' : 'text-left'}`}>
      
      {/* Изображение */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-6">
        <Image
          src={step.image}
          alt={step.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Текст */}
      <div className="space-y-4">
        <h3 className="text-2xl sm:text-3xl font-light text-gray-900 tracking-tight">
          {step.title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed">
          {step.description}
        </p>

        {/* Детали */}
        <div className={`flex flex-wrap gap-2 pt-2 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
          {step.details.map((detail, i) => (
            <span 
              key={i}
              className="text-xs text-gray-700 px-3 py-1 bg-gray-100 rounded-full"
            >
              {detail}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}