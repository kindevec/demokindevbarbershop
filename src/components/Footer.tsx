import React from 'react';
import { VintageEmblem } from './VintageEmblem';
import { Heart, MapPin, Phone, Code } from 'lucide-react';
import { FacebookLogo, InstagramLogo, WhatsAppLogo } from './SocialLogos';
import { WHATSAPP_PHONE_DISPLAY, getWhatsAppUrl, WhatsAppMessages } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121212] border-t border-neutral-800 text-white pt-12 sm:pt-16 pb-28 md:pb-12 relative overflow-hidden">
      {/* Top Crimson Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DC143C] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-8 sm:pb-12 border-b border-neutral-800">
          
          {/* Brand & Emblem (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <VintageEmblem size="lg" showText={true} />
            <p className="text-xs sm:text-sm text-[#B2B2B2] max-w-sm leading-relaxed">
              Barbería urbana de alto nivel. Fusionamos la elegancia de la navaja tradicional con las técnicas modernas de corte y degradado.
            </p>
            <div className="text-xs font-mono text-[#DC143C] font-bold">
              🔥 20% OFF en tu primer corte &bull; Cerveza artesanal gratis
            </div>
          </div>

          {/* Direct Navigation Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-widest border-b border-neutral-800 pb-2">
              Secciones Principales
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs font-semibold uppercase tracking-wider text-[#B2B2B2]">
              <li><a href="#inicio" className="hover:text-[#DC143C] transition-colors">&bull; 1. Inicio</a></li>
              <li><a href="#servicios" className="hover:text-[#DC143C] transition-colors">&bull; 2. Servicios</a></li>
              <li><a href="#redes" className="hover:text-[#DC143C] transition-colors">&bull; 3. Redes</a></li>
              <li><a href="#ubicacion" className="hover:text-[#DC143C] transition-colors">&bull; 4. Ubicación</a></li>
              <li><a href="#cita" className="hover:text-[#DC143C] transition-colors">&bull; 5. Cita</a></li>
            </ul>
          </div>

          {/* Social Icons & WhatsApp Contact (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-widest border-b border-neutral-800 pb-2">
              SÍGUENOS EN REDES
            </h4>

            {/* Social Icons with required Crimson Red & 10 degree rotation hover effect */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/kindevec/"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook @kindevec"
                className="p-3 bg-[#1A1A1A] border border-neutral-800 text-[#B2B2B2] hover:text-[#DC143C] hover:border-[#DC143C] transform hover:rotate-10 transition-all duration-300 shadow-md group"
              >
                <FacebookLogo className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/kindevx/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram @kindevx"
                className="p-3 bg-[#1A1A1A] border border-neutral-800 text-[#B2B2B2] hover:text-[#DC143C] hover:border-[#DC143C] transform hover:rotate-10 transition-all duration-300 shadow-md group"
              >
                <InstagramLogo className="w-5 h-5" />
              </a>

              {/* WhatsApp */}
              <a
                href={getWhatsAppUrl(WhatsAppMessages.generalBooking)}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp 099 195 2889"
                className="p-3 bg-[#1A1A1A] border border-neutral-800 text-[#B2B2B2] hover:text-[#DC143C] hover:border-[#DC143C] transform hover:rotate-10 transition-all duration-300 shadow-md group"
              >
                <WhatsAppLogo className="w-5 h-5" />
              </a>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl(WhatsAppMessages.generalBooking)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white bg-[#DC143C] hover:bg-[#b01030] px-4 py-2 uppercase tracking-wider transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{WHATSAPP_PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#B2B2B2] gap-4">
          <div>
            &copy; {currentYear} <strong className="text-white">Iron & Fade Barbershop</strong>. Todos los derechos reservados.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-1.5 font-mono text-[11px] text-[#B2B2B2]">
            <span>Barbería Urbana de Alto Nivel</span>
            <span>&bull;</span>
            <span className="flex items-center gap-1 text-white font-semibold">
              <Code className="w-3.5 h-3.5 text-[#DC143C]" />
              <span>Desarrollado por</span>
              <a 
                href="https://www.facebook.com/kindevec/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#DC143C] hover:text-white underline font-bold tracking-wider transition-colors ml-0.5"
              >
                Kindev
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
