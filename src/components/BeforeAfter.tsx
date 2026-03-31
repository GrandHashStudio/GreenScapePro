import { useState, useRef } from 'react';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfter({ beforeImage, afterImage }: BeforeAfterProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSliderMove = (event: MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    let clientX = 0;
    
    if ('clientX' in event) {
      clientX = event.clientX;
    } else if (event.touches && event.touches.length > 0) {
      clientX = event.touches[0].clientX;
    }

    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(position);
  };

  const onMouseDown = () => {
    window.addEventListener('mousemove', handleSliderMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchmove', handleSliderMove);
    window.addEventListener('touchend', onMouseUp);
  };

  const onMouseUp = () => {
    window.removeEventListener('mousemove', handleSliderMove);
    window.removeEventListener('mouseup', onMouseUp);
    window.removeEventListener('touchmove', handleSliderMove);
    window.removeEventListener('touchend', onMouseUp);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[16/9] rounded-[2rem] overflow-hidden shadow-2xl cursor-ew-resize select-none"
      onMouseDown={onMouseDown}
      onTouchStart={onMouseDown}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${afterImage})` }}
      ></div>
      
      <div 
        className="absolute inset-0 bg-cover bg-center border-r-[3px] border-brand-gold shadow-lg"
        style={{ 
          backgroundImage: `url(${beforeImage})`,
          width: `${sliderPos}%`
        }}
      ></div>

      {/* Slider Knob */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center shadow-2xl pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="flex space-x-1">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>

      <div className="absolute top-6 left-6 inline-block bg-black/40 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
        Before
      </div>
      <div className="absolute top-6 right-6 inline-block bg-brand-gold/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
        After
      </div>
    </div>
  );
}
