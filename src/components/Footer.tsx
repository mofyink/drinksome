import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Бренд */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">BRAND</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Премиальные безалкогольные напитки для тех, кто ценит вкус и заботится о здоровье.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                Telegram
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                VK
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="text-white font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/catalog" className="hover:text-emerald-500 transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-500 transition-colors">
                  О бренде
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-emerald-500 transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li>info@brand.ru</li>
              <li>+7 (999) 123-45-67</li>
              <li>Москва, Россия</li>
            </ul>
          </div>
        </div>

        {/* Копирайт */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2026 BRAND. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}