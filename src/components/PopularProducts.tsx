'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import AnimatedBackground from './AnimatedBackground';
import ProductModal from './ProductModal';
import { products } from '@/data/products';

const popularProducts = products.slice(0, 4);

export default function PopularProducts() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      
      <AnimatedBackground opacity={0.03} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-24 text-center">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-16 h-px bg-gray-900"></div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
              Коллекция
            </p>
            <div className="w-16 h-px bg-gray-900"></div>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 tracking-tight leading-[0.9]">
            Популярные
            <br />
            <span className="font-serif italic">продукты</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {popularProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>

        <div className="text-center mt-24">
          <Link 
            href="/catalog"
            className="inline-flex items-center px-10 py-4 border border-gray-900 text-gray-900 text-xs font-medium tracking-widest uppercase hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            Смотреть весь каталог
          </Link>
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
    </section>
  );
}

function ProductCard({ product, index, onClick }: { 
  product: typeof products[0]; 
  index: number;
  onClick: () => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-gray-400 font-mono">
          0{index + 1}
        </span>
        <div className="w-8 h-px bg-gray-300 group-hover:w-20 group-hover:bg-gray-900 transition-all duration-300"></div>
      </div>

      <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-gray-50">
        <Image 
          src={product.image} 
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700"
        />
        
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
      </div>

      <div className="space-y-3">
        <div className="flex items-baseline justify-between">
          <h3 className="text-lg font-light text-gray-900 tracking-tight group-hover:text-gray-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-lg font-medium text-gray-900">
            {product.price.toLocaleString('ru-RU')} ₽
          </p>
        </div>
        
        <p className="text-xs text-gray-500 uppercase tracking-wider">
          {product.categoryName}
        </p>
      </div>
    </div>
  );
}