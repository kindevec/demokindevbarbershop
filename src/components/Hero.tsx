import React from 'react';
import { motion } from 'motion/react';
import { Award, Sparkles, Scissors, ChevronDown } from 'lucide-react';
import { WhatsAppLogo } from './SocialLogos';
import { WHATSAPP_PHONE_DISPLAY, getWhatsAppUrl, WhatsAppMessages } from '../utils/whatsapp';
import { HERO_STATS } from '../data/barbershopData';

export const Hero: React.FC = () => {
  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector('#servicios');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section id="inicio" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#1A1A1A] py-10 sm:py-16 lg:py-24">
      {/* Background Layer (avoid bg-fixed on mobile for better performance) */}
      <motion.div 
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center md:bg-fixed filter grayscale contrast-125 brightness-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1920&auto=format&fit=crop')`,
        }}
      />

      {/* Dark Vignette & Color Gradients Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/95 via-transparent to-[#1A1A1A]/95" />
      
      {/* Subtle Red Grid Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#DC143C_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      {/* Hero Content Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 text-center flex flex-col items-center"
      >
        
        {/* Sub-badge */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#121212]/90 border border-[#DC143C] px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-none mb-4 sm:mb-6 text-[10px] sm:text-xs font-mono tracking-wider text-white uppercase shadow-[0_0_15px_rgba(220,20,60,0.3)] max-w-full"
        >
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DC143C] shrink-0" />
          <span className="truncate">Barbería Urbana &bull; 20% OFF PRIMERA VISITA</span>
        </motion.div>

        {/* Required H1 Title */}
        <motion.h1 
          variants={itemVariants}
          className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase font-sans leading-none mb-4 sm:mb-6 max-w-4xl drop-shadow-lg"
        >
          El estilo que te define, <br className="hidden xs:inline" />
          <span className="text-[#DC143C] relative inline-block underline decoration-[#DC143C]/40 decoration-wavy underline-offset-4 sm:underline-offset-8">
            la precisión que mereces
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          variants={itemVariants}
          className="text-sm sm:text-base md:text-xl text-[#B2B2B2] max-w-2xl mb-6 sm:mb-8 font-normal leading-relaxed px-1"
        >
          Experiencia de barbería premium en ambiente industrial. Especialistas en <strong className="text-white">Skin Fades</strong>, <strong className="text-white">cortes a tijera</strong> y <strong className="text-white">rituales de barba a navaja tradicional</strong> con cerveza artesanal helada incluida.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-12"
        >
          {/* Main Required Button: "Cortarme el Pelo" */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={getWhatsAppUrl(WhatsAppMessages.promoHero)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-[#DC143C] hover:bg-[#b01030] text-white font-black text-xs sm:text-sm uppercase tracking-widest px-6 sm:px-8 py-3.5 sm:py-4 rounded-none shadow-[0_0_20px_rgba(220,20,60,0.4)] transition-all group"
          >
            <Scissors className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform group-hover:rotate-45" />
            <span>Cortarme el Pelo</span>
            <WhatsAppLogo className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
          </motion.a>

          {/* Secondary Button */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#servicios"
            onClick={handleScrollToServices}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#121212] hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-5 sm:px-6 py-3.5 sm:py-4 border border-neutral-700 hover:border-[#DC143C] transition-colors"
          >
            <span>Ver Precios & Servicios</span>
          </motion.a>
        </motion.div>

        {/* Quick Phone Banner */}
        <motion.div 
          variants={itemVariants}
          className="text-[11px] sm:text-xs font-mono text-[#B2B2B2] mb-8 sm:mb-12 flex items-center justify-center gap-2 text-center flex-wrap px-2"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
          <span>Turnos disponibles hoy vía WhatsApp: <strong className="text-white">{WHATSAPP_PHONE_DISPLAY}</strong></span>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 w-full max-w-4xl pt-6 sm:pt-8 border-t border-neutral-800"
        >
          {HERO_STATS.map((stat, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -4, borderColor: '#DC143C' }}
              transition={{ duration: 0.2 }}
              className="bg-[#121212]/80 border border-neutral-800 p-2.5 sm:p-4 text-center transition-colors"
            >
              <div className="text-lg sm:text-2xl font-black text-[#DC143C] font-mono">{stat.value}</div>
              <div className="text-[10px] sm:text-xs text-[#B2B2B2] font-medium uppercase tracking-wider mt-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.a 
          variants={itemVariants}
          href="#servicios" 
          onClick={handleScrollToServices}
          className="mt-12 text-[#B2B2B2] hover:text-[#DC143C] transition-colors animate-bounce"
          aria-label="Ir a servicios"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.a>
      </motion.div>
    </section>
  );
};
