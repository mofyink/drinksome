'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ProductModal from '@/components/ProductModal';
import AnimatedBackground from '@/components/AnimatedBackground';

const categories = [
  { id: 'all', name: 'Все продукты' },
  { id: 'spirits', name: 'Спириты' },
  { id: 'bases', name: 'Основы' },
  { id: 'drinks', name: 'Напитки' },
  { id: 'mixers', name: 'Миксеры' }
];

const products = [
  {
    id: 1,
    name: 'Gin 0%',
    category: 'spirits',
    categoryName: 'Спириты',
    price: 890,
    volume: '500 мл',
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&q=80',
    description: 'Изысканный безалкогольный джин с яркими нотами можжевельника, цитрусовых и пряных трав. Идеальная основа для классических коктейлей.',
    ingredients: 'Вода, экстракт можжевельника, кориандр, цедра лимона, кардамон, ангелика',
    slug: 'gin-0'
  },
  {
    id: 2,
    name: 'Whisky Zero',
    category: 'spirits',
    categoryName: 'Спириты',
    price: 1290,
    volume: '500 мл',
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&q=80',
    description: 'Насыщенный безалкогольный виски с дымными нотами, ванилью и дубовыми оттенками. Для ценителей классического вкуса.',
    ingredients: 'Вода, натуральный ароматизатор, экстракт дуба, ваниль, карамель',
    slug: 'whisky-zero'
  },
  {
    id: 3,
    name: 'Tonic Premium',
    category: 'mixers',
    categoryName: 'Миксеры',
    price: 390,
    volume: '330 мл',
    image: 'https://images.unsplash.com/photo-1546171753-97dcd6745b7e?w=800&q=80',
    description: 'Премиальный тоник с хинином и натуральными цитрусовыми маслами. Идеальный баланс горечи и свежести.',
    ingredients: 'Газированная вода, хинин, натуральный ароматизатор, лимонная кислота, сахар',
    slug: 'tonic-premium'
  },
  {
    id: 4,
    name: 'Mojito Base',
    category: 'bases',
    categoryName: 'Основы',
    price: 690,
    volume: '500 мл',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&q=80',
    description: 'Готовая основа для мохито с лаймом и мятой. Просто добавьте содовую и лёд — идеальный коктейль за 30 секунд.',
    ingredients: 'Вода, сахар, сок лайма, экстракт мяты, лимонная кислота',
    slug: 'mojito-base'
  },
  {
    id: 5,
    name: 'Citrus Spark',
    category: 'drinks',
    categoryName: 'Напитки',
    price: 290,
    volume: '330 мл',
    image: 'https://images.unsplash.com/photo-1622543925917-1856240108ae?w=800&q=80',
    description: 'Освежающий цитрусовый напиток с грейпфрутом, апельсином и лимоном. Заряд энергии и витамина C.',
    ingredients: 'Газированная вода, соки цитрусовых, сахар, витамин C',
    slug: 'citrus-spark'
  },
  {
    id: 6,
    name: 'Elderflower Tonic',
    category: 'mixers',
    categoryName: 'Миксеры',
    price: 450,
    volume: '330 мл',
    image: 'https://images.unsplash.com/photo-1546171753-97dcd6745b7e?w=800&q=80',
    description: 'Изысканный тоник с цветками бузины. Нежный цветочный аромат и лёгкая сладость.',
    ingredients: 'Газированная вода, экстракт бузины, хинин, лимонная кислота, сахар',
    slug: 'elderflower-tonic'
  }
];

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <>
      <Header />
      
      <main className="pt-20 min-h-screen bg-white">
        <AnimatedBackground opacity={0.03} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
          {/* Заголовок страницы */}
          <div className="mb-20 text-center">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-16 h-px bg-gray-900"></div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
                Каталог
              </p>
              <div className="w-16 h-px bg-gray-900"></div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 tracking-tight leading-[0.9]">
              Наша
              <br />
              <span className="font-serif italic">коллекция</span>
            </h1>
          </div>

          {/* Фильтры */}
          <div className="mb-20">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`relative px-8 py-4 text-xs font-medium tracking-widest uppercase transition-all duration-500 ${
                    selectedCategory === category.id
                      ? 'text-white'
                      : 'text-gray-900 hover:text-gray-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {selectedCategory === category.id && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-gray-900"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                      }}
                    />
                  )}
                  <span className="relative z-10">{category.name}</span>
                </motion.button>
              ))}
            </div>
            
            {/* Линия под фильтрами */}
            <div className="mt-8 flex justify-center">
              <motion.div 
                className="w-24 h-px bg-gray-900"
                key={selectedCategory}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
            </div>
            
            {/* Количество продуктов */}
            <div className="mt-6 text-center">
              <motion.p 
                key={filteredProducts.length}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-gray-500 tracking-wide"
              >
                {filteredProducts.length} {filteredProducts.length === 1 ? 'продукт' : filteredProducts.length < 5 ? 'продукта' : 'продуктов'}
              </motion.p>
            </div>
          </div>

          {/* Сетка продуктов */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product}
                  onClick={() => setSelectedProduct(product)}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Сообщение, если продуктов нет */}
          {filteredProducts.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <p className="text-gray-500 text-lg">В этой категории пока нет продуктов</p>
            </motion.div>
          )}

        </div>
      </main>

      <Footer />
      <ScrollToTop />

      {/* Модальное окно продукта */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}

// Компонент карточки продукта
function ProductCard({ product, onClick }: { 
  product: typeof products[0];
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      {/* Номер и категория */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-gray-400 font-mono">
          0{product.id}
        </span>
        <motion.div 
          className="h-px bg-gray-300 flex-1 ml-4 group-hover:bg-gray-900 transition-colors duration-500"
          initial={false}
          whileHover={{ scaleX: 1.1 }}
        />
      </div>

      {/* Изображение */}
      <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-gray-50">
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
  src={product.image}
  alt={product.name}
  className="w-full h-full object-cover transition-transform duration-700"
/>
        </motion.div>
        
        {/* Оверлей */}
        <motion.div 
          className="absolute inset-0 bg-black/0"
          whileHover={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Кнопка "Быстрый просмотр" */}
        <motion.div 
          className="absolute inset-x-4 bottom-4"
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white/95 backdrop-blur-sm text-center py-3 text-xs uppercase tracking-widest font-medium text-gray-900 shadow-lg">
            Подробнее
          </div>
        </motion.div>
      </div>

      {/* Информация о продукте */}
      <div className="space-y-3">
        <div className="flex items-baseline justify-between">
          <h3 className="text-xl font-light text-gray-900 tracking-tight group-hover:text-gray-600 transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-lg font-medium text-gray-900">
            {product.price.toLocaleString('ru-RU')} ₽
          </p>
        </div>
        
        <div className="flex items-center justify-between text-xs">
          <p className="text-gray-500 uppercase tracking-wider">
            {product.categoryName}
          </p>
          <p className="text-gray-400">
            {product.volume}
          </p>
        </div>
      </div>
    </motion.div>
  );
}