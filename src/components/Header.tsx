'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/catalog', label: 'Каталог' },
    { href: '/about', label: 'О бренде' },
    { href: '/contacts', label: 'Контакты' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Логотип */}
            <Link 
              href="/" 
              className="text-xl font-light tracking-widest text-gray-900 uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              Brand
            </Link>

            {/* Десктопная навигация */}
            <div className="hidden md:flex items-center space-x-12">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="text-sm text-gray-700 hover:text-gray-900 transition-colors tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Кнопка заказа (десктоп) */}
            <div className="hidden md:flex items-center">
              <button className="text-sm text-gray-900 font-medium tracking-wide border border-gray-900 px-6 py-2 hover:bg-gray-900 hover:text-white transition-colors">
                Заказать
              </button>
            </div>

            {/* Бургер-кнопка (мобильная) — скрывается когда меню открыто */}
            <AnimatePresence>
              {!isMenuOpen && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsMenuOpen(true)}
                  className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                  aria-label="Открыть меню"
                >
                  <span className="w-6 h-px bg-gray-900"></span>
                  <span className="w-6 h-px bg-gray-900"></span>
                  <span className="w-6 h-px bg-gray-900"></span>
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </header>

      {/* Мобильное меню */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Затемнение фона */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Само меню */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-white z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Шапка меню */}
                <div className="flex items-center justify-between h-20 px-4 sm:px-6 border-b border-gray-100">
                  <span className="text-xl font-light tracking-widest text-gray-900 uppercase">
                    Menu
                  </span>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors tracking-wide"
                  >
                    Закрыть
                  </button>
                </div>

                {/* Навигация */}
                <nav className="flex-1 px-4 sm:px-6 py-12">
                  <ul className="space-y-8">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="group flex items-baseline justify-between py-2 border-b border-gray-100"
                        >
                          <span className="text-3xl font-light text-gray-900 tracking-tight group-hover:text-gray-600 transition-colors">
                            {link.label}
                          </span>
                          <span className="text-xs text-gray-400 tracking-widest">
                            0{index + 1}
                          </span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Кнопка заказа внизу */}
                <div className="px-4 sm:px-6 pb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                  >
                    <Link
                      href="/catalog"
                      onClick={() => setIsMenuOpen(false)}
                      className="block w-full text-center px-8 py-4 bg-gray-900 text-white text-xs font-medium tracking-widest uppercase hover:bg-gray-800 transition-colors"
                    >
                      Заказать
                    </Link>
                  </motion.div>

                  {/* Контакты */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="mt-8 text-center space-y-2"
                  >
                    <p className="text-xs text-gray-500 tracking-wide">info@brand.ru</p>
                    <p className="text-xs text-gray-500 tracking-wide">+7 (999) 123-45-67</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}