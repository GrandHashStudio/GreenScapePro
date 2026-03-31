import { LucideIcon } from 'lucide-react';

interface PremiumIconProps {
  icon: LucideIcon;
  className?: string;
  size?: number;
  glow?: boolean;
}

export default function PremiumIcon({ icon: Icon, className = "", size = 24, glow = true }: PremiumIconProps) {
  return (
    <div className={`premium-icon-bg w-16 h-16 ${glow ? 'premium-glow' : ''} ${className}`}>
      {/* Decorative Rotating Element */}
      <div className="absolute inset-0 premium-rotate pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-gold rounded-full"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-forest rounded-full"></div>
      </div>
      
      {/* The Actual Icon */}
      <Icon 
        size={size} 
        className="text-brand-forest dark:text-brand-gold relative z-10 transition-transform group-hover:scale-110" 
        strokeWidth={2.5}
      />
      
      {/* Dynamic Glow Layer */}
      <div className="absolute inset-0 bg-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
    </div>
  );
}
