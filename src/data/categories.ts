export interface Category {
  id: number;
  title: string;
  description: string;
  slug: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: 1,
    title: 'Спириты',
    description: 'Безалкогольные альтернативы классическим напиткам',
    slug: 'spirits',
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=600&q=80'
  },
  {
    id: 2,
    title: 'Основы',
    description: 'Профессиональные базы для коктейлей',
    slug: 'bases',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&q=80'
  },
  {
    id: 3,
    title: 'Напитки',
    description: 'Готовые освежающие напитки',
    slug: 'drinks',
    image: 'https://images.unsplash.com/photo-1622543925917-1856240108ae?w=600&q=80'
  },
  {
    id: 4,
    title: 'Миксеры',
    description: 'Премиальные миксеры для идеального вкуса',
    slug: 'mixers',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80'
  }
];