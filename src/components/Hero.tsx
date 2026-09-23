import Link from 'next/link';
import Image from 'next/image';
import AnimatedBackground from './AnimatedBackground';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      
      {/* Подключаем анимированный фон */}
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

          {/* Изображение */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/5] lg:aspect-[3/4]">
              <Image 
                src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=1000&q=80"
                alt="Безалкогольные напитки премиум класса"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Декоративный элемент */}
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white flex items-center justify-center ">
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900">26</div>
                <div className="text-[10px] uppercase tracking-wider text-gray-500">Коллекция</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}