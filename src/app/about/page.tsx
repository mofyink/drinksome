
import Link from 'next/link';
import AnimatedBackground from '@/components/AnimatedBackground';
import PictureWithClip from '@/components/PictureWithClip';
import ProductionProcess from '@/components/ProductionProcess';

export default function AboutPage() {
  return (
    <>
      {/* Hero секция с анимированным изображением */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  
  {/* Изображение на фоне */}
  <div className="absolute inset-0 overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&q=80"
      alt="Hero background"
      className="w-full h-full object-cover animate-slow-zoom"
    />
  </div>

  {/* Двойной оверлей */}
  <div className="absolute inset-0 bg-black/50"></div>
  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70"></div>

  {/* Контент */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10">
    <div className="flex items-center justify-center gap-6 mb-8">
      <div className="w-16 h-px bg-white/80"></div>
      <p className="text-xs uppercase tracking-[0.3em] text-white/90 font-medium">
        О бренде
      </p>
      <div className="w-16 h-px bg-white/80"></div>
    </div>
    
    <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white tracking-tight leading-[0.9] mb-8">
      Мы создаём
      <br />
      <span className="font-serif italic">будущее</span>
      <br />
      напитков
    </h1>
    
    <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
      Бренд, который переосмысливает культуру потребления и доказывает, что качество не требует компромиссов
    </p>
  </div>
</section>

      {/* История */}
      <section className="relative py-24 bg-white overflow-hidden">
        <AnimatedBackground opacity={0.03} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-24">
  <div className="flex items-center justify-center gap-6 mb-8">
    <div className="w-16 h-px bg-gray-900"></div>
    <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
      Наша история
    </p>
    <div className="w-16 h-px bg-gray-900"></div>
  </div>
  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-[0.9]">
    Путь от идеи
    <br />
    <span className="font-serif italic">до коллекции</span>
  </h2>
</div>

          {/* Глава 1 — Арка вверх */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-32">
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-6">
                <span className="text-7xl sm:text-8xl font-light text-gray-200 leading-none">01</span>
                <div className="w-12 h-px bg-gray-900"></div>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">2020</p>
              <h3 className="text-3xl sm:text-4xl font-light text-gray-900 tracking-tight">
                Идея, которая
                <br />
                <span className="font-serif italic">изменила всё</span>
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Всё началось с простого вопроса за ужином: почему каждый раз, когда мы выбираем не пить алкоголь, нам предлагают газировку или сок? Почему осознанный выбор означает отказ от ритуала, эстетики и удовольствия?
                </p>
                <p>
                  В тот вечер родилась идея, которая казалась безумной — создать безалкогольные напитки, которые по сложности вкуса, аромату и подаче не уступают лучшим спиртным напиткам мира.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <PictureWithClip
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80"
                alt="Зарождение идеи"
                shape="notch-left"
              />
            </div>
          </div>

          {/* Глава 2 — Арка вниз */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-32">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <PictureWithClip
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80"
                alt="Лаборатория и эксперименты"
                shape="notch-right"
              />
            </div>
            <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-6">
                <span className="text-7xl sm:text-8xl font-light text-gray-200 leading-none">02</span>
                <div className="w-12 h-px bg-gray-900"></div>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">2021</p>
              <h3 className="text-3xl sm:text-4xl font-light text-gray-900 tracking-tight">
                Год бесконечных
                <br />
                <span className="font-serif italic">экспериментов</span>
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Мы собрали команду мечты: бармены с мировым именем, сомелье, химики-технологи и парфюмеры. Вместе мы начали путь, который потребовал более 400 прототипов и тысяч дегустаций.
                </p>
                <p>
                  Каждая формула проходила строгий отбор. Мы искали не просто «похожий вкус» — мы стремились создать уникальные вкусовые профили, которые существовали бы сами по себе, без сравнения с алкогольными аналогами.
                </p>
              </div>
            </div>
          </div>

          {/* Глава 3 — Арка вверх */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-32">
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-6">
                <span className="text-7xl sm:text-8xl font-light text-gray-200 leading-none">03</span>
                <div className="w-12 h-px bg-gray-900"></div>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">2022</p>
              <h3 className="text-3xl sm:text-4xl font-light text-gray-900 tracking-tight">
                Рождение
                <br />
                <span className="font-serif italic">бренда</span>
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Весной 2022 года мы представили первую коллекцию из четырёх продуктов. Это был не просто запуск — это был манифест. Мы заявили, что безалкогольные напитки заслуживают такого же внимания к деталям, дизайну и качеству, как лучшие вина и спиртные напитки.
                </p>
                <p>
                  Реакция превзошла все ожидания. Первая партия была распродана за 72 часа. Рестораны и бары начали включать наши напитки в свои карты наравне с премиальным алкоголем.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <PictureWithClip
                src="https://images.unsplash.com/photo-1560512823-829485b8bf24?w=900&q=80"
                alt="Запуск бренда"
                shape="notch-left"
              />
            </div>
          </div>

          {/* Глава 4 — Арка вниз */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <PictureWithClip
                src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=900&q=80"
                alt="Сегодня"
                shape="notch-right"
              />
            </div>
            <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-6">
                <span className="text-7xl sm:text-8xl font-light text-gray-200 leading-none">04</span>
                <div className="w-12 h-px bg-gray-900"></div>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">2024 — Сегодня</p>
              <h3 className="text-3xl sm:text-4xl font-light text-gray-900 tracking-tight">
                Движение,
                <br />
                <span className="font-serif italic">которое растёт</span>
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Сегодня наша коллекция насчитывает более 26 продуктов в четырёх категориях. Мы представлены в лучших ресторанах, отелях и специализированных магазинах. Но цифры — не главное.
                </p>
                <p>
                  Главное — это сообщество людей, которые разделяют нашу философию. Людей, которые верят, что осознанный выбор может быть красивым, вкусным и стильным. Мы только в начале пути, и самое интересное ещё впереди.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <ProductionProcess />

      {/* Цифры */}
      <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
        <AnimatedBackground opacity={0.1} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight">
              Наши достижения
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-light mb-2">26</div>
              <p className="text-sm text-white/70 uppercase tracking-wider">Продуктов в коллекции</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-light mb-2">50K+</div>
              <p className="text-sm text-white/70 uppercase tracking-wider">Довольных клиентов</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-light mb-2">15</div>
              <p className="text-sm text-white/70 uppercase tracking-wider">Наград индустрии</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-light mb-2">100%</div>
              <p className="text-sm text-white/70 uppercase tracking-wider">Натуральные ингредиенты</p>
            </div>
          </div>
        </div>
      </section>

      {/* Философия */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium mb-4">
              Философия
            </p>
            <h2 className="text-4xl sm:text-5xl font-light text-gray-900 tracking-tight leading-[0.9]">
              Три принципа,
              <br />
              <span className="font-serif italic">которые нас ведут</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-6xl font-light text-gray-900 mb-6">01</div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">Качество</h3>
              <p className="text-gray-600 leading-relaxed">
                Мы не идём на компромиссы. Каждый ингредиент проходит строгий отбор, каждый рецепт тестируется сотни раз.
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl font-light text-gray-900 mb-6">02</div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">Инновации</h3>
              <p className="text-gray-600 leading-relaxed">
                Мы используем передовые технологии и научные подходы, чтобы создавать вкусы, которые раньше считались невозможными.
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl font-light text-gray-900 mb-6">03</div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">Осознанность</h3>
              <p className="text-gray-600 leading-relaxed">
                Мы верим, что удовольствие и забота о себе могут идти рука об руку. Наши напитки — выбор тех, кто ценит баланс.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-[0.9] mb-8">
            Готовы попробовать?
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Откройте для себя коллекцию премиальных безалкогольных напитков
          </p>
          
          <Link 
            href="/catalog"
            className="inline-flex items-center px-10 py-4 bg-gray-900 text-white text-xs font-medium tracking-widest uppercase hover:bg-gray-800 transition-colors"
          >
            Смотреть каталог
          </Link>
        </div>
      </section>
    </>
  );
}