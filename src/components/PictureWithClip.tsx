import Image from 'next/image';

type Shape = 'arch-up' | 'arch-down' | 'notch-left' | 'notch-right';

interface PictureWithClipProps {
  src: string;
  alt: string;
  shape: Shape;
  aspectRatio?: string;
}

const shapes = {
  // Арка вверх — выпуклость сверху
  'arch-up': {
    clipPath: 'M 0 0.3 C 0.2 0, 0.8 0, 1 0.3 L 1 1 L 0 1 Z',
    stroke: 'M 20 160 C 100 20, 300 20, 380 160 L 380 513 L 20 513 Z',
  },
  // Арка вниз — выпуклость снизу
  'arch-down': {
    clipPath: 'M 0 0 L 1 0 L 1 0.7 C 0.8 1, 0.2 1, 0 0.7 Z',
    stroke: 'M 20 20 L 380 20 L 380 373 C 300 513, 100 513, 20 373 Z',
  },
  // Вырез слева со скруглёнными углами
  'notch-left': {
    clipPath: 'M 0 0 L 1 0 L 1 1 L 0 1 L 0 0.65 Q 0 0.63, 0.02 0.63 L 0.06 0.63 Q 0.08 0.63, 0.08 0.61 L 0.08 0.39 Q 0.08 0.37, 0.06 0.37 L 0.02 0.37 Q 0 0.37, 0 0.35 Z',
    stroke: 'M 0 0 L 400 0 L 400 533 L 0 533 L 0 346 Q 0 335, 8 335 L 24 335 Q 32 335, 32 327 L 32 206 Q 32 198, 24 198 L 8 198 Q 0 198, 0 187 Z',
  },
  // Вырез справа со скруглёнными углами
  'notch-right': {
    clipPath: 'M 0 0 L 1 0 L 1 0.35 Q 1 0.37, 0.98 0.37 L 0.94 0.37 Q 0.92 0.37, 0.92 0.39 L 0.92 0.61 Q 0.92 0.63, 0.94 0.63 L 0.98 0.63 Q 1 0.63, 1 0.65 L 1 1 L 0 1 Z',
    stroke: 'M 0 0 L 400 0 L 400 187 Q 400 198, 392 198 L 376 198 Q 368 198, 368 206 L 368 327 Q 368 335, 376 335 L 392 335 Q 400 335, 400 346 L 400 533 L 0 533 Z',
  },
};

export default function PictureWithClip({ src, alt, shape, aspectRatio = 'aspect-[4/3]' }: PictureWithClipProps) {
  const currentShape = shapes[shape];

  return (
    <div className={`relative ${aspectRatio}`}>
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 400 533" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <clipPath id={`clip-${shape}`} clipPathUnits="objectBoundingBox">
            <path d={currentShape.clipPath} />
          </clipPath>
        </defs>
        
        {/* Изображение с clip-path */}
        <foreignObject 
          x="0" 
          y="0" 
          width="100%" 
          height="100%" 
          clipPath={`url(#clip-${shape})`}
        >
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
            />
          </div>
        </foreignObject>
        
        
      </svg>
    </div>
  );
}