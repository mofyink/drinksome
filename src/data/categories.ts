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
    image: '/test.jpeg',
  },
  {
    id: 2,
    title: 'Основы',
    description: 'Авторские базы для коктейлей',
    slug: 'bases',
    image: '/test.jpeg',
  },
  {
    id: 3,
    title: 'Напитки',
    description: 'Готовые безалкогольные коктейли',
    slug: 'drinks',
    image: '/test.jpeg',
  },
  {
    id: 4,
    title: 'Миксеры',
    description: 'Тоники, содовые и биттеры',
    slug: 'mixers',
    image: '/test.jpeg',
  },
];