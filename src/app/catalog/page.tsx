'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ProductModal from '@/components/ProductModal';
import { products } from '@/data/products';

const categories = [
  { id: 'all', name: 'Все продукты' },
  { id: 'spirits', name: 'Спириты' },
  { id: 'bases', name: 'Основы' },
  { id: 'drinks', name: 'Напитки' },
  { id: 'mixers', name: 'Миксеры' }
];

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
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
            
            <div className="mt-8 flex justify-center">
              <motion.div 
                className="w-24 h-px bg-gray-900"
                key={selectedCategory}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
            </div>
            
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
      </div>

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
        
        <motion.div 
          className="absolute inset-0 bg-black/0"
          whileHover={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
          transition={{ duration: 0.3 }}
        />
        
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