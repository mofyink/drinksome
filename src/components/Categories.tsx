import Link from 'next/link';
import Image from 'next/image';
import AnimatedBackground from './AnimatedBackground';

const categories = [
  {
    id: 1,
    title: 'Спириты',
    description: 'Безалкогольные альтернативы классическим напиткам',
    slug: 'spirits',
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=600&q=80'
  },
  {
    id: 2,
    title: 'Основы',
    description: 'Профессиональные базы для коктейлей',
    slug: 'bases',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&q=80'
  },
  {
    id: 3,
    title: 'Напитки',
    description: 'Готовые освежающие напитки',
    slug: 'drinks',
    image: 'https://images.unsplash.com/photo-1622543925917-1856240108ae?w=600&q=80'
  },
  {
    id: 4,
    title: 'Миксеры',
    description: 'Премиальные миксеры для идеального вкуса',
    slug: 'mixers',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80'
  }
];

export default function Categories() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      
      {/* Подключаем анимированный фон с меньшей прозрачностью */}
      <AnimatedBackground opacity={0.05} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500 font-medium mb-4">
            Категории
          </p>
          <h2 className="text-5xl lg:text-6xl font-light text-gray-900 tracking-tight">
            Наша коллекция
          </h2>
        </div>

        {/* Сетка категорий */}
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