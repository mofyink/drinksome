/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Статический экспорт для Beget
  
  images: {
    unoptimized: true, // ⚠️ ВАЖНО: отключает серверную оптимизацию картинок
  },
};

export default nextConfig;