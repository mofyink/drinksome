'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь можно добавить отправку на сервер
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: 'general', message: '' });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero секция */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-white overflow-hidden">
        <AnimatedBackground opacity={0.05} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-16 h-px bg-gray-900"></div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
              Связаться с нами
            </p>
            <div className="w-16 h-px bg-gray-900"></div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-gray-900 tracking-tight leading-[0.9] mb-8">
            Мы всегда
            <br />
            <span className="font-serif italic">на связи</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Есть вопросы о продукции, сотрудничестве или хотите стать частью нашего сообщества? Мы будем рады услышать вас
          </p>
        </div>
      </section>

      {/* Основная секция */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Левая колонка — информация */}
            <div className="space-y-12">
              
              {/* Контактная информация */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-px bg-gray-900"></div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
                    Контактная информация
                  </p>
                </div>

                <div className="space-y-6">
                  <ContactItem 
                    label="Email"
                    value="hello@brand.ru"
                    href="mailto:hello@brand.ru"
                  />
                  <ContactItem 
                    label="Телефон"
                    value="+7 (495) 123-45-67"
                    href="tel:+74951234567"
                  />
                  <ContactItem 
                    label="Адрес"
                    value="Москва, ул. Тверская, 15"
                    href="https://yandex.ru/maps/"
                  />
                </div>
              </div>

              {/* Часы работы */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-px bg-gray-900"></div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
                    Часы работы
                  </p>
                </div>

                <div className="space-y-3">
                  <ScheduleItem day="Понедельник — Пятница" time="10:00 — 20:00" />
                  <ScheduleItem day="Суббота" time="11:00 — 19:00" />
                  <ScheduleItem day="Воскресенье" time="Выходной" />
                </div>
              </div>

              {/* Социальные сети */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-px bg-gray-900"></div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
                    Социальные сети
                  </p>
                </div>

                <div className="flex gap-4">
                  <SocialLink href="https://instagram.com" label="Instagram">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </SocialLink>
                  <SocialLink href="https://t.me" label="Telegram">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </SocialLink>
                  <SocialLink href="https://vk.com" label="VKontakte">
                    <path d="M15.073 2.935H8.926C4.45 2.935 2 5.57 2 9.355v5.69C2 18.83 4.45 21.065 8.926 21.065h.714V12.79H7.45c-.23 0-.418-.208-.418-.462v-1.37c0-.254.188-.462.418-.462h2.19V8.86c0-1.89 1.13-3.12 2.87-3.12h1.72c.23 0 .418.208.418.462v1.74c0 .254-.188.462-.418.462h-1.25c-.9 0-1.29.428-1.29 1.248v1.644h2.45c.248 0 .44.22.41.478l-.17 1.37c-.025.212-.19.384-.41.384h-2.28v8.275h3.91c4.476 0 6.926-2.235 6.926-6.02v-5.69c0-3.785-2.45-6.42-6.926-6.42z"/>
                  </SocialLink>
                </div>
              </div>

            </div>

            {/* Правая колонка — форма */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-gray-900"></div>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
                  Напишите нам
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-50 p-12 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-900 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-3">
                    Сообщение отправлено
                  </h3>
                  <p className="text-gray-600">
                    Спасибо! Мы свяжемся с вами в ближайшее время.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <FormField
                    label="Имя"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 font-medium mb-3">
                      Тема
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:border-gray-900 focus:outline-none transition-colors"
                    >
                      <option value="general">Общий вопрос</option>
                      <option value="partnership">Сотрудничество</option>
                      <option value="wholesale">Оптовые закупки</option>
                      <option value="press">Для прессы</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 font-medium mb-3">
                      Сообщение
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:border-gray-900 focus:outline-none transition-colors resize-none"
                      placeholder="Расскажите, чем мы можем помочь..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gray-900 text-white text-xs font-medium tracking-widest uppercase hover:bg-gray-800 transition-colors"
                  >
                    Отправить сообщение
                  </motion.button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Карта */}
      <section className="relative bg-gray-100">
        <div className="relative h-[500px]">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=37.615560%2C55.757860&z=15"
            // замени ll=37.615560%2C55.757860 на свои координаты в iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Наш офис на карте"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 tracking-tight leading-[0.9] mb-8">
            Хотите стать
            <br />
            <span className="font-serif italic">частью бренда?</span>
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Присоединяйтесь к нашему сообществу и узнавайте о новинках первыми
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/catalog"
              className="inline-flex items-center justify-center px-10 py-4 bg-gray-900 text-white text-xs font-medium tracking-widest uppercase hover:bg-gray-800 transition-colors"
            >
              Смотреть каталог
            </Link>
            <Link 
              href="/about"
              className="inline-flex items-center justify-center px-10 py-4 border border-gray-900 text-gray-900 text-xs font-medium tracking-widest uppercase hover:bg-gray-900 hover:text-white transition-colors"
            >
              О бренде
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// Вспомогательные компоненты

function ContactItem({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <div className="flex items-start gap-6 group">
      <div className="w-24 flex-shrink-0">
        <p className="text-xs uppercase tracking-widest text-gray-500">{label}</p>
      </div>
      <a 
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="text-lg text-gray-900 group-hover:text-gray-600 transition-colors"
      >
        {value}
      </a>
    </div>
  );
}

function ScheduleItem({ day, time }: { day: string; time: string }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100">
      <p className="text-gray-900">{day}</p>
      <p className="text-gray-600">{time}</p>
    </div>
  );
}

function SocialLink({ href, label, children }: { 
  href: string; 
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group w-14 h-14 flex items-center justify-center border border-gray-200 hover:border-gray-900 hover:bg-gray-900 transition-all duration-300"
    >
      <svg 
        className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        {children}
      </svg>
    </a>
  );
}

function FormField({ label, name, type, value, onChange, required }: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-gray-500 font-medium mb-3">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:border-gray-900 focus:outline-none transition-colors"
      />
    </div>
  );
}