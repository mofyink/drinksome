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
    description: 'Безалкогольные джин, виски и ром',
    slug: 'spirits',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80',
  },
  {
    id: 2,
    title: 'Основы',
    description: 'Авторские базы для коктейлей',
    slug: 'bases',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&q=80',
  },
  {
    id: 3,
    title: 'Напитки',
    description: 'Готовые безалкогольные коктейли',
    slug: 'drinks',
    image: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?w=800&q=80',
  },
  {
    id: 4,
    title: 'Миксеры',
    description: 'Тоники, содовые и биттеры',
    slug: 'mixers',
    image: 'https://images.unsplash.com/photo-1546171753-97dcd6745b7e?w=800&q=80',
  },
];