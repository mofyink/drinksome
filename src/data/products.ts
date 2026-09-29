export interface Product {
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
  shopUrl: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Gin 0%',
    category: 'spirits',
    categoryName: 'Спириты',
    price: 890,
    volume: '500 мл',
    image: '/test.jpeg',
    description: 'Изысканный безалкогольный джин с яркими нотами можжевельника, цитрусовых и пряных трав. Идеальная основа для классических коктейлей.',
    ingredients: 'Вода, экстракт можжевельника, кориандр, цедра лимона, кардамон, ангелика',
    slug: 'gin-0',
    shopUrl: 'https://example.com/product/gin-0', // ← Ссылка на товар
  },
  {
    id: 2,
    name: 'Whisky Zero',
    category: 'spirits',
    categoryName: 'Спириты',
    price: 1290,
    volume: '500 мл',
    image: '/test.jpeg',
    description: 'Насыщенный безалкогольный виски с дымными нотами, ванилью и дубовыми оттенками. Для ценителей классического вкуса.',
    ingredients: 'Вода, натуральный ароматизатор, экстракт дуба, ваниль, карамель',
    slug: 'whisky-zero',
    shopUrl: 'https://example.com/product/gin-0', // ← Ссылка на товар
  },
  {
    id: 3,
    name: 'Tonic Premium',
    category: 'mixers',
    categoryName: 'Миксеры',
    price: 390,
    volume: '330 мл',
    image: '/test.jpeg',
    description: 'Премиальный тоник с хинином и натуральными цитрусовыми маслами. Идеальный баланс горечи и свежести.',
    ingredients: 'Газированная вода, хинин, натуральный ароматизатор, лимонная кислота, сахар',
    slug: 'tonic-premium',
    shopUrl: 'https://example.com/product/gin-0' // ← Ссылка на товар
  },
  {
    id: 4,
    name: 'Mojito Base',
    category: 'bases',
    categoryName: 'Основы',
    price: 690,
    volume: '500 мл',
    image: '/test.jpeg',
    description: 'Готовая основа для мохито с лаймом и мятой. Просто добавьте содовую и лёд — идеальный коктейль за 30 секунд.',
    ingredients: 'Вода, сахар, сок лайма, экстракт мяты, лимонная кислота',
    slug: 'mojito-base',
    shopUrl: 'https://example.com/product/gin-0', // ← Ссылка на товар
  },
  {
    id: 5,
    name: 'Citrus Spark',
    category: 'drinks',
    categoryName: 'Напитки',
    price: 290,
    volume: '330 мл',
    image: '/test.jpeg',
    description: 'Освежающий цитрусовый напиток с грейпфрутом, апельсином и лимоном. Заряд энергии и витамина C.',
    ingredients: 'Газированная вода, соки цитрусовых, сахар, витамин C',
    slug: 'citrus-spark',
    shopUrl: 'https://example.com/product/gin-0', // ← Ссылка на товар
  },
  {
    id: 6,
    name: 'Elderflower Tonic',
    category: 'mixers',
    categoryName: 'Миксеры',
    price: 450,
    volume: '330 мл',
    image: '/test.jpeg',
    description: 'Изысканный тоник с цветками бузины. Нежный цветочный аромат и лёгкая сладость.',
    ingredients: 'Газированная вода, экстракт бузины, хинин, лимонная кислота, сахар',
    slug: 'elderflower-tonic',
    shopUrl: 'https://example.com/product/gin-0', // ← Ссылка на товар
  }
];