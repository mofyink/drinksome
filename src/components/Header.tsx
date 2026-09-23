import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-emerald-600 transition-colors">
            BRAND
          </Link>

          {/* Навигация */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/catalog" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Каталог
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              О бренде
            </Link>
            <Link href="/contacts" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Контакты
            </Link>
          </div>

          {/* Кнопка CTA */}
          <div className="flex items-center space-x-4">
            <button className="bg-emerald-600 text-white px-6 py-2 rounded-full font-medium hover:bg-emerald-700 transition-colors">
              Заказать
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}