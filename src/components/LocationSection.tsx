import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Navigation, ShieldCheck, Car, Coffee, Wifi } from 'lucide-react';
import { WhatsAppLogo } from './SocialLogos';
import { WHATSAPP_PHONE_DISPLAY, getWhatsAppUrl, WhatsAppMessages } from '../utils/whatsapp';
import { AMENITIES_LIST } from '../data/barbershopData';

export const LocationSection: React.FC = () => {
  return (
    <section id="ubicacion" className="py-20 bg-[#1A1A1A] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-[#DC143C] text-xs font-mono tracking-widest uppercase mb-2 font-bold">
            <MapPin className="w-4 h-4" />
            <span>Encuéntranos en el Corazón Urbano</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Ubicación & Horarios
          </h2>
          <p className="text-[#B2B2B2] max-w-2xl mx-auto text-sm sm:text-base">
            Visítanos en nuestra sede principal con parqueadero privado, ambiente climatizado y lounge bar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Column (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#121212] border border-neutral-800 p-4 sm:p-8 flex flex-col justify-between shadow-2xl"
          >
            <div className="space-y-5 sm:space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-neutral-800">
                <div className="p-2.5 sm:p-3 bg-[#DC143C]/20 border border-[#DC143C] text-[#DC143C] shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-mono font-bold text-[#B2B2B2] uppercase tracking-wider">Dirección Principal</h3>
                  <p className="text-base sm:text-lg font-bold text-white mt-1">Av. República de El Salvador N34-12 y Moscú</p>
                  <p className="text-xs text-[#B2B2B2] mt-0.5">Edificio Urban Tower, Planta Baja (Junto al café)</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-neutral-800">
                <div className="p-2.5 sm:p-3 bg-[#DC143C]/20 border border-[#DC143C] text-[#DC143C] shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="w-full">
                  <h3 className="text-xs sm:text-sm font-mono font-bold text-[#B2B2B2] uppercase tracking-wider mb-2">Horarios de Atención</h3>
                  <div className="space-y-1.5 text-xs sm:text-sm font-mono">
                    <div className="flex justify-between text-white">
                      <span>Lunes a Viernes:</span>
                      <span className="font-bold text-[#DC143C]">09:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between text-white">
                      <span>Sábados:</span>
                      <span className="font-bold text-[#DC143C]">09:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between text-neutral-400">
                      <span>Domingos:</span>
                      <span className="font-bold text-emerald-400">10:00 - 18:00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="flex items-start gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-neutral-800">
                <div className="p-2.5 sm:p-3 bg-[#DC143C]/20 border border-[#DC143C] text-[#DC143C] shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-mono font-bold text-[#B2B2B2] uppercase tracking-wider">Teléfono / WhatsApp Directo</h3>
                  <p className="text-lg sm:text-xl font-black text-white font-mono mt-1">{WHATSAPP_PHONE_DISPLAY}</p>
                  <p className="text-xs text-emerald-400 mt-0.5">Respuesta inmediata en horario laboral</p>
                </div>
              </div>

              {/* Amenities Checklist */}
              <div>
                <h3 className="text-xs font-mono font-bold text-[#B2B2B2] uppercase tracking-wider mb-3">
                  Comodidades del Local
                </h3>
                <div className="grid grid-cols-2 gap-2 text-xs text-white">
                  {AMENITIES_LIST.slice(0, 4).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 sm:gap-2 bg-neutral-900/60 p-2 border border-neutral-800">
                      <span className="text-sm sm:text-base shrink-0">{item.icon}</span>
                      <span className="text-[10px] sm:text-[11px] leading-tight text-[#B2B2B2]">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Location Inquiry CTA */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-neutral-800">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={getWhatsAppUrl(WhatsAppMessages.locationInquiry)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#DC143C] hover:bg-[#b01030] text-white text-xs font-bold uppercase tracking-wider py-3.5 px-3 transition-all shadow-md text-center"
              >
                <WhatsAppLogo className="w-4 h-4 shrink-0" />
                <span className="truncate">Consultar Ubicación vía WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Map Column (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#121212] border border-neutral-800 relative min-h-[300px] sm:min-h-[400px] overflow-hidden flex flex-col justify-between shadow-2xl"
          >
            {/* Embedded Google Map Iframe */}
            <div className="w-full h-full min-h-[300px] sm:min-h-[420px] relative">
              <iframe
                title="Google Map Iron & Fade Barbershop"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.790103133614!2d-78.4831206852462!3d-0.1806531998681534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a7a13a7c6b7%3A0x8e8b2b6e1e8b2b6e!2sAv.%20Rep%C3%BAblica%20de%20El%20Salvador%2C%20Quito!5e0!3m2!1ses!2sec!4v1690000000000!5m2!1ses!2sec"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(120%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[300px] sm:min-h-[420px]"
              />

              {/* Map Floating Card Badge */}
              <div className="absolute top-3 left-3 bg-[#121212]/95 border border-[#DC143C] p-2.5 sm:p-3 text-xs shadow-xl max-w-[220px] sm:max-w-xs">
                <div className="flex items-center gap-1.5 text-white font-bold uppercase mb-1 text-[11px] sm:text-xs">
                  <Navigation className="w-3.5 h-3.5 text-[#DC143C] shrink-0" />
                  <span>Iron & Fade Central</span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-[#B2B2B2] leading-tight">
                  A 2 min del Parque La Carolina. Valet parking disponible.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
