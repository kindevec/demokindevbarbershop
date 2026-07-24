import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA } from '../data/barbershopData';
import { Service } from '../types';
import { Scissors, Sparkles, Check, Clock } from 'lucide-react';
import { WhatsAppLogo } from './SocialLogos';
import { getWhatsAppUrl, WhatsAppMessages } from '../utils/whatsapp';

export const ServicesPriceList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'todos' | 'cortes' | 'barba' | 'combos' | 'tratamientos'>('todos');

  const categories = [
    { id: 'todos', label: 'Todos los Servicios' },
    { id: 'cortes', label: 'Cortes & Fades' },
    { id: 'barba', label: 'Afeitado & Barba' },
    { id: 'combos', label: 'Combos VIP' },
    { id: 'tratamientos', label: 'Tratamientos' },
  ];

  const filteredServices = activeTab === 'todos' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === activeTab);

  return (
    <section id="servicios" className="py-20 bg-[#1A1A1A] text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-[#DC143C] text-xs font-mono tracking-widest uppercase mb-2 font-bold">
            <Scissors className="w-4 h-4" />
            <span>Carta de Servicios & Precios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Módulo de Precios & Servicios
          </h2>
          <p className="text-[#B2B2B2] max-w-2xl mx-auto text-sm sm:text-base">
            Todos nuestros servicios incluyen bebida de cortesía (Cerveza artesanal o Café de especialidad) y lavado con masaje capilar tonificante.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="overflow-x-auto no-scrollbar flex sm:flex-wrap justify-start sm:justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12 border-b border-neutral-800 pb-3 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as any)}
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all rounded-none whitespace-nowrap shrink-0 ${
                activeTab === cat.id
                  ? 'bg-[#DC143C] text-white shadow-lg scale-105'
                  : 'bg-[#121212] text-[#B2B2B2] hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Price List with Dotted Lines */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#121212] border border-neutral-800 p-4 sm:p-8 lg:p-10 shadow-2xl relative"
        >
          
          {/* Subtle Corner Accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#DC143C]" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#DC143C]" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#DC143C]" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#DC143C]" />

          <motion.div layout className="space-y-6 sm:space-y-8">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service: Service) => (
                <motion.div 
                  key={service.id} 
                  layout
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="group relative flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 p-2.5 sm:p-3 -mx-1.5 sm:-mx-3 hover:bg-neutral-900/60 transition-colors border-b border-neutral-800/60 last:border-0"
                >
                  {/* Service Info */}
                  <div className="flex-1 min-w-0 pr-0 sm:pr-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wide group-hover:text-[#DC143C] transition-colors">
                        {service.name}
                      </h3>
                      {service.popular && (
                        <span className="inline-flex items-center gap-1 bg-[#DC143C]/20 border border-[#DC143C] text-[#DC143C] text-[10px] font-mono px-2 py-0.5 uppercase tracking-widest font-bold">
                          <Sparkles className="w-3 h-3" /> Popular
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-[#B2B2B2] mt-1">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2 text-[10px] sm:text-[11px] font-mono text-neutral-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#DC143C]" /> {service.durationMin} min
                      </span>
                      <span className="hidden xs:inline">&bull;</span>
                      <span className="text-emerald-400 font-semibold">20% off 1ra visita: ${(service.price * 0.8).toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Dotted Leader Line */}
                  <div className="hidden sm:block border-b-2 border-dotted border-[#B2B2B2]/30 flex-grow mx-3 self-baseline my-auto" />

                  {/* Price & Booking Button */}
                  <div className="flex items-center justify-between sm:justify-end gap-3 mt-3 sm:mt-0 pt-2 sm:pt-0 border-t sm:border-0 border-neutral-800/40">
                    <span className="text-lg sm:text-2xl font-black text-white font-mono tracking-tight">
                      ${service.price.toFixed(2)}
                    </span>

                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={getWhatsAppUrl(WhatsAppMessages.serviceBooking(service.name, service.price))}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Agendar ${service.name} por WhatsApp`}
                      className="inline-flex items-center gap-1.5 bg-[#DC143C] hover:bg-[#b01030] text-white text-xs font-bold uppercase tracking-wider px-3 sm:px-3.5 py-2 transition-all"
                    >
                      <span>Reservar</span>
                      <WhatsAppLogo className="w-3.5 h-3.5" />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Guarantee Note */}
          <div className="mt-10 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B2B2B2]">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500" />
              <span>Garantía de satisfacción Iron & Fade: Si requieres un retoque dentro de los 3 días, es totalmente gratis.</span>
            </div>
            <a
              href="#cita"
              className="text-[#DC143C] hover:underline font-bold uppercase tracking-wider whitespace-nowrap"
            >
              Ir a la calculadora de citas &rarr;
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
