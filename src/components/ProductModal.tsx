'use client';

import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { useEffect } from 'react';

interface ProductModalProps {
  product: {
    id: number;
    name: string;
    category: string;
    categoryName: string;
    price: number;
    volume: string;
    image: string;
    description: string;
    ingredients: string;
    slug: string;
  };
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  // Закрытие по Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Получаем ширину скроллбар
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    // Добавляем padding-right чтобы компенсировать исчезновение скроллбар
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.overflow = 'hidden';

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.paddingRight = '';
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      {/* Затемнение фона */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Модальное окно */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-white overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-gray-100 transition-colors shadow-lg"
          aria-label="Закрыть"
        >
          <svg className="w-6 h-6 sm:w-5 sm:h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid md:grid-cols-2 overflow-y-auto max-h-[90vh]">
          {/* Изображение */}
          <div className="relative aspect-[3/4] md:aspect-auto md:h-full min-h-[300px]">
            <Image 
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Контент */}
          <div className="p-6 sm:p-8 md:p-12 flex flex-col">
            <div className="flex-1 space-y-6">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">
                  {product.categoryName}
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 tracking-tight mb-2">
                  {product.name}
                </h2>
                <p className="text-xl sm:text-2xl font-medium text-gray-900">
                  {product.price.toLocaleString('ru-RU')} ₽
                </p>
                <p className="text-sm text-gray-500 mt-2">{product.volume}</p>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wide mb-3">
                  Описание
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="pt-4">
                <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wide mb-3">
                  Состав
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.ingredients}
                </p>
              </div>
            </div>

            {/* Кнопка заказа */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <button className="w-full py-4 bg-gray-900 text-white text-xs font-medium tracking-widest uppercase hover:bg-gray-800 transition-colors">
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}