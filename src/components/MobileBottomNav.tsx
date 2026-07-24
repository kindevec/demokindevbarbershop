import React from 'react';
import { Home, Scissors, Share2, MapPin, Clock } from 'lucide-react';

interface MobileBottomNavProps {
  activeSection: string;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: Home, href: '#inicio' },
    { id: 'galeria', label: 'Cortes', icon: Scissors, href: '#galeria' },
    { id: 'servicios', label: 'Precios', icon: Share2, href: '#servicios' },
    { id: 'ubicacion', label: 'Ubicación', icon: MapPin, href: '#ubicacion' },
    { id: 'cita', label: 'Cita', icon: Clock, href: '#cita', isHighlight: true },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#121212]/98 backdrop-blur-md border-t border-neutral-800 shadow-[0_-5px_25px_rgba(0,0,0,0.8)] px-1 py-1 pb-safe">
      <div className="grid grid-cols-5 items-center justify-between text-center max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          if (item.isHighlight) {
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="flex flex-col items-center justify-center py-2 px-1 bg-[#DC143C] text-white font-bold rounded-none transition-transform active:scale-95 shadow-lg border border-[#DC143C]"
              >
                <Icon className="w-5 h-5 text-white" />
                <span className="text-[10px] font-mono uppercase tracking-widest mt-0.5 font-black">{item.label}</span>
              </a>
            );
          }

          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`flex flex-col items-center justify-center py-2 px-1 transition-colors ${
                isActive ? 'text-[#DC143C] font-bold' : 'text-[#B2B2B2] hover:text-white'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-[#DC143C]' : 'text-[#B2B2B2]'}`} />
              <span className="text-[10px] font-mono uppercase tracking-wider mt-0.5">{item.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};
