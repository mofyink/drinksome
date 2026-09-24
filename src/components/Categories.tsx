import Link from 'next/link';
import Image from 'next/image';
import AnimatedBackground from './AnimatedBackground';
import { categories } from '@/data/categories';

export default function Categories() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      
      <AnimatedBackground opacity={0.05} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
  <div className="flex items-center justify-center gap-6 mb-8">
    <div className="w-16 h-px bg-gray-900"></div>
    <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
      Категории
    </p>
    <div className="w-16 h-px bg-gray-900"></div>
  </div>
  <h2 className="text-5xl lg:text-6xl font-light text-gray-900 tracking-tight">
    Наша коллекция
  </h2>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/catalog?category=${category.slug}`}
              className="group relative bg-white hover:bg-gray-50 transition-colors"
            >
              <div className="p-12">
                <div className="space-y-6">
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <Image 
                      src={category.image} 
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-3xl font-light text-gray-900 tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  <div className="inline-flex items-center text-sm font-medium text-gray-900 tracking-wide pt-4">
                    Смотреть коллекцию
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}