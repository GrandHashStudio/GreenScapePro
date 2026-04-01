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
      className="relative w-full aspect-[16/9] rounded-[2rem] overflow-hidden shadow-2xl cursor-ew-resize select-none border-4 border-white/10"
      onMouseDown={onMouseDown}
      onTouchStart={onMouseDown}
    >
      {/* After Image (Base Layer) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${afterImage})` }}
      ></div>
      
      {/* Before Image (Clipping Layer) */}
      <div 
        className="absolute inset-0 bg-cover bg-center border-r-[3px] border-brand-gold shadow-[10px_0_30px_rgba(0,0,0,0.5)] z-10"
        style={{ 
          backgroundImage: `url(${beforeImage})`,
          clipPath: `inset(0 ${100 - sliderPos}% 0 0)`
        }}
      ></div>

      {/* Slider Visual Indicator (Line + Knob) */}
      <div 
        className="absolute top-0 bottom-0 z-20 pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute inset-y-0 -left-[1.5px] w-[3px] bg-brand-gold shadow-[0_0_20px_rgba(184,142,47,0.5)]"></div>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.4)] border-2 border-brand-gold">
          <div className="flex space-x-1.5">
            <div className="w-1 h-4 bg-brand-gold rounded-full"></div>
            <div className="w-1 h-4 bg-brand-gold rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="absolute top-6 left-6 z-30 inline-block bg-black/60 backdrop-blur-md text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/10">
        Before
      </div>
      <div className="absolute top-6 right-6 z-30 inline-block bg-brand-gold text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
        After
      </div>
    </div>
  );
}
