import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const updatePointer = (e: MouseEvent) => {
      const target = document.elementFromPoint(e.clientX, e.clientY);
      const isHoveringClickable = target && (
        target.closest('a') || 
        target.closest('button') || 
        window.getComputedStyle(target).cursor === 'pointer'
      );
      
      setIsPointer(!!isHoveringClickable);
    };

    window.addEventListener('mousemove', (e) => {
      updatePosition(e);
      updatePointer(e);
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Cursor Dot */}
      <div 
        className="fixed top-0 left-0 w-3 h-3 bg-brand-forest rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ease-out"
        style={{ 
          transform: `translate(${position.x - 6}px, ${position.y - 6}px) scale(${isPointer ? 2.5 : 1})`,
        }}
      />
      {/* Trailing Glow */}
      <div 
        className="fixed top-0 left-0 w-12 h-12 bg-brand-forest/20 rounded-full blur-xl pointer-events-none z-[9998] transition-transform duration-500 ease-out"
        style={{ 
          transform: `translate(${position.x - 24}px, ${position.y - 24}px) scale(${isPointer ? 1.5 : 1})`,
        }}
      />
      {/* Outer Ring */}
      <div 
        className="fixed top-0 left-0 w-8 h-8 border border-brand-forest/30 rounded-full pointer-events-none z-[9999] transition-transform duration-300 ease-out"
        style={{ 
          transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isPointer ? 1.2 : 1})`,
        }}
      />
    </>
  );
};

export default CustomCursor;
