import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Декоративные круги на фоне */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 -right-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Левая часть: текст */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Вкус без
                <span className="text-emerald-600"> компромиссов</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Премиальные безалкогольные напитки, основы для коктейлей и миксеры для тех, кто ценит качество и заботится о здоровье
              </p>
            </div>

            {/* Кнопки */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/catalog"
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Смотреть каталог
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full border-2 border-gray-200 hover:border-emerald-600 hover:text-emerald-600 transition-all"
              >
                О бренде
              </Link>
            </div>

            {/* Преимущества */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-emerald-600">0%</div>
                <div className="text-sm text-gray-600 mt-1">Алкоголя</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">100%</div>
                <div className="text-sm text-gray-600 mt-1">Натурально</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">∞</div>
                <div className="text-sm text-gray-600 mt-1">Удовольствия</div>
              </div>
            </div>
          </div>

          {/* Правая часть: изображение/визуал */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-8xl">🍹</div>
                <p className="text-gray-600 text-lg">Место для изображения продукта</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}