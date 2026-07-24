import React from 'react';
import { WhatsAppLogo } from './SocialLogos';
import { getWhatsAppUrl, WhatsAppMessages } from '../utils/whatsapp';

export const WhatsAppFloatingButton: React.FC = () => {
  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-50">
      {/* Main Round Floating Button */}
      <a
        href={getWhatsAppUrl(WhatsAppMessages.promoHero)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-[0_0_25px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 group"
      >
        <WhatsAppLogo className="w-8 h-8 text-white" />
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-[#1A1A1A]"></span>
        </span>
      </a>
    </div>
  );
};


