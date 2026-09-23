import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Бренд */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-light tracking-widest text-gray-900 uppercase mb-6">
              Brand
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-md mb-6">
              Премиальные безалкогольные напитки для тех, кто ценит вкус, качество и стиль.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors tracking-wide">
                Instagram
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors tracking-wide">
                Telegram
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors tracking-wide">
                VK
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wide mb-6">
              Навигация
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/catalog" className="text-gray-600 hover:text-gray-900 transition-colors tracking-wide text-sm">
                  Каталог
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors tracking-wide text-sm">
                  О бренде
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-gray-600 hover:text-gray-900 transition-colors tracking-wide text-sm">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wide mb-6">
              Контакты
            </h4>
            <ul className="space-y-4 text-gray-600 text-sm tracking-wide">
              <li>info@brand.ru</li>
              <li>+7 (999) 123-45-67</li>
              <li>Москва, Россия</li>
            </ul>
          </div>
        </div>

        {/* Копирайт */}
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-500 tracking-wide">
            &copy; 2026 Brand. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}