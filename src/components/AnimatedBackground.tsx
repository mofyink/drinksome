interface AnimatedBackgroundProps {
  opacity?: number;
}

export default function AnimatedBackground({ opacity = 0.08 }: AnimatedBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity }}>
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Вертикальные линии */}
        <div className="absolute top-0 left-[10%] w-px h-full bg-black animate-slide-down"></div>
        <div className="absolute top-0 left-[20%] w-px h-full bg-black animate-slide-up"></div>
        <div className="absolute top-0 left-[30%] w-px h-full bg-black animate-slide-down"></div>
        <div className="absolute top-0 left-[40%] w-px h-full bg-black animate-slide-up"></div>
        <div className="absolute top-0 left-[50%] w-px h-full bg-black animate-slide-down"></div>
        <div className="absolute top-0 left-[60%] w-px h-full bg-black animate-slide-up"></div>
        <div className="absolute top-0 left-[70%] w-px h-full bg-black animate-slide-down"></div>
        <div className="absolute top-0 left-[80%] w-px h-full bg-black animate-slide-up"></div>
        <div className="absolute top-0 left-[90%] w-px h-full bg-black animate-slide-down"></div>
        
        {/* Горизонтальные линии */}
        <div className="absolute left-0 top-[10%] w-full h-px bg-black animate-slide-right"></div>
        <div className="absolute left-0 top-[20%] w-full h-px bg-black animate-slide-left"></div>
        <div className="absolute left-0 top-[30%] w-full h-px bg-black animate-slide-right"></div>
        <div className="absolute left-0 top-[40%] w-full h-px bg-black animate-slide-left"></div>
        <div className="absolute left-0 top-[50%] w-full h-px bg-black animate-slide-right"></div>
        <div className="absolute left-0 top-[60%] w-full h-px bg-black animate-slide-left"></div>
        <div className="absolute left-0 top-[70%] w-full h-px bg-black animate-slide-right"></div>
        <div className="absolute left-0 top-[80%] w-full h-px bg-black animate-slide-left"></div>
        <div className="absolute left-0 top-[90%] w-full h-px bg-black animate-slide-right"></div>
        
        {/* Диагональные линии */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-[200%] h-px bg-black origin-top-left rotate-45 animate-slide-diagonal"></div>
          <div className="absolute top-[20%] left-0 w-[200%] h-px bg-black origin-top-left rotate-45 animate-slide-diagonal-reverse"></div>
          <div className="absolute top-[40%] left-0 w-[200%] h-px bg-black origin-top-left rotate-45 animate-slide-diagonal"></div>
          <div className="absolute top-[60%] left-0 w-[200%] h-px bg-black origin-top-left rotate-45 animate-slide-diagonal-reverse"></div>
          <div className="absolute top-[80%] left-0 w-[200%] h-px bg-black origin-top-left rotate-45 animate-slide-diagonal"></div>
        </div>
      </div>
    </div>
  );
}