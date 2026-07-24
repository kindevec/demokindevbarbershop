import React, { useState, useEffect } from 'react';
import { VintageEmblem } from './VintageEmblem';
import { WhatsAppLogo } from './SocialLogos';
import { WHATSAPP_PHONE_DISPLAY, getWhatsAppUrl, WhatsAppMessages } from '../utils/whatsapp';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio', id: 'inicio' },
    { name: 'Servicios', href: '#servicios', id: 'servicios' },
    { name: 'Cortes', href: '#galeria', id: 'galeria' },
    { name: 'Redes', href: '#redes', id: 'redes' },
    { name: 'Ubicación', href: '#ubicacion', id: 'ubicacion' },
    { name: 'Cita', href: '#cita', id: 'cita' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#1A1A1A] border-b border-neutral-800">
      {/* Marquee Banner Superior (Thin Crimson Red Stripe) */}
      <div className="bg-[#DC143C] text-white text-[11px] sm:text-sm font-bold py-1.5 px-2 sm:px-4 overflow-hidden shadow-inner flex items-center justify-between w-full">
        <div className="animate-marquee whitespace-nowrap flex gap-8 sm:gap-12 w-full justify-around font-mono tracking-wide uppercase shrink-0">
          <span>🔥 Promoción: 20% off en tu primer corte. Agenda hoy. 🔥</span>
          <span className="hidden sm:inline">✂️ Barbería Urbana de Alto Nivel - Cerveza Gratis con tu corte</span>
          <span>🔥 Promoción: 20% off en tu primer corte. Agenda hoy. 🔥</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-300 ${scrolled ? 'py-2.5 sm:py-3 bg-[#1A1A1A]/95 backdrop-blur-md shadow-2xl' : 'py-3 sm:py-4 bg-[#1A1A1A]'}`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          
          {/* Logo */}
          <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="group shrink-0">
            <VintageEmblem size="md" showText={true} />
          </a>

          {/* Desktop Navigation (5 Exact Sections) */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 text-xs lg:text-sm font-bold tracking-wider uppercase transition-colors relative ${
                    isActive
                      ? 'text-[#DC143C]'
                      : 'text-[#B2B2B2] hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#DC143C]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-4">
            {/* Direct WhatsApp Call Button */}
            <a
              href={getWhatsAppUrl(WhatsAppMessages.promoHero)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#DC143C] hover:bg-[#b01030] text-white text-xs font-black uppercase tracking-wider px-4 py-2.5 rounded-none shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <WhatsAppLogo className="w-4 h-4" />
              <span className="hidden sm:inline">{WHATSAPP_PHONE_DISPLAY}</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};
