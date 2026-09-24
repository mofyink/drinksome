import AnimatedBackground from './AnimatedBackground';
import { testimonials } from '@/data/testimonials';

// Дублируем массив для бесшовной анимации
const duplicatedTestimonials = [...testimonials, ...testimonials];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="w-[280px] sm:w-[400px] flex-shrink-0 mx-3 p-6 sm:p-8 bg-white border border-gray-100 hover:border-gray-300 transition-colors duration-300">
      <StarRating count={testimonial.rating} />
      
      <p className="mt-4 sm:mt-6 text-gray-700 leading-relaxed text-xs sm:text-sm">
        «{testimonial.text}»
      </p>
      
      <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100">
        <p className="text-xs sm:text-sm font-medium text-gray-900">{testimonial.name}</p>
        <p className="text-xs text-gray-500 mt-1">{testimonial.role}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      
      <AnimatedBackground opacity={0.03} />

      <div className="relative">
        {/* Заголовок секции */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-16 h-px bg-gray-900"></div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
                Отзывы
              </p>
              <div className="w-16 h-px bg-gray-900"></div>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 tracking-tight leading-[0.9]">
              Что говорят
              <br />
              <span className="font-serif italic">наши клиенты</span>
            </h2>
          </div>
        </div>

        {/* Первый ряд — движется влево */}
        <div className="mb-6 overflow-hidden">
          <div className="flex animate-marquee-left" style={{ width: 'max-content' }}>
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={`row1-${testimonial.id}-${index}`} 
                testimonial={testimonial} 
              />
            ))}
          </div>
        </div>

        {/* Второй ряд — движется вправо */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee-right" style={{ width: 'max-content' }}>
            {[...duplicatedTestimonials].reverse().map((testimonial, index) => (
              <TestimonialCard 
                key={`row2-${testimonial.id}-${index}`} 
                testimonial={testimonial} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}