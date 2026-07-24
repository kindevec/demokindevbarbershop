import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Camera, ZoomIn, X, Scissors, ArrowRight } from 'lucide-react';
import { WhatsAppLogo } from './SocialLogos';
import { getWhatsAppUrl, WhatsAppMessages } from '../utils/whatsapp';

export interface HaircutStyle {
  id: string;
  title: string;
  category: 'fades' | 'urbanos' | 'clasicos' | 'barba' | 'disenos';
  categoryLabel: string;
  tag: string;
  barber: string;
  description: string;
  imageUrl: string;
  priceEstimate: string;
}

export const HAIRCUT_GALLERY_DATA: HaircutStyle[] = [
  {
    id: 'skin-fade-high',
    title: 'Skin Fade High & Tight',
    category: 'fades',
    categoryLabel: 'Fades & Degradados',
    tag: 'Skin Fade',
    barber: 'Mateo Silva',
    description: 'Degradado a cero milimétrico con navaja pulida y contraste alto superior.',
    imageUrl: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop',
    priceEstimate: '$22.00',
  },
  {
    id: 'crop-fade-french',
    title: 'Mid Fade + French Crop',
    category: 'urbanos',
    categoryLabel: 'Estilos Urbanos',
    tag: 'French Crop',
    barber: 'Carlos Rossi',
    description: 'Flequillo recto texturizado con masa superior densa y sombra media pulida.',
    imageUrl: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop',
    priceEstimate: '$22.00',
  },
  {
    id: 'low-taper-lineup',
    title: 'Low Taper Fade & Line Up',
    category: 'fades',
    categoryLabel: 'Fades & Degradados',
    tag: 'Taper Fade',
    barber: 'Alex Vega',
    description: 'Degradado sutil en patillas y nuca con perfilado geométrico nítido a navaja.',
    imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop',
    priceEstimate: '$22.00',
  },
  {
    id: 'pompadour-beard',
    title: 'Pompadour Clásico & Barba Imperial',
    category: 'clasicos',
    categoryLabel: 'Cortes Clásicos',
    tag: 'Pompadour',
    barber: 'Mateo Silva',
    description: 'Peinado de alto volumen estructurado con brillo moderado y barba perfilada.',
    imageUrl: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop',
    priceEstimate: '$32.00 (Combo)',
  },
  {
    id: 'ritual-barba-royal',
    title: 'Ritual de Barba Royal & Navaja',
    category: 'barba',
    categoryLabel: 'Barba & Navaja',
    tag: 'Barba Royal',
    barber: 'Diego Mendoza',
    description: 'Toalla caliente aromatizada con eucalipto, aceites orgánicos y perfilado tradicional.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    priceEstimate: '$20.00',
  },
  {
    id: 'mullet-burst-fade',
    title: 'Mullet Urbano & Burst Fade',
    category: 'urbanos',
    categoryLabel: 'Estilos Urbanos',
    tag: 'Mullet Urbano',
    barber: 'Carlos Rossi',
    description: 'Estilo de vanguardia con caída trasera texturizada y degradado circular en oreja.',
    imageUrl: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=800&auto=format&fit=crop',
    priceEstimate: '$25.00',
  },
  {
    id: 'scissor-flow',
    title: 'Corte a Tijera & Texture Flow',
    category: 'clasicos',
    categoryLabel: 'Cortes Clásicos',
    tag: 'Tijera & Flow',
    barber: 'Alex Vega',
    description: 'Trabajo exclusivo a tijera respetando la caída natural, volumen suave y movilidad.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    priceEstimate: '$18.00',
  },
  {
    id: 'hair-tattoo-design',
    title: 'Hair Tattoo & Diseño Freestyle',
    category: 'disenos',
    categoryLabel: 'Diseños & Navaja',
    tag: 'Hair Design',
    barber: 'Alex Vega',
    description: 'Líneas dobles y patrones geométricos trazados a navaja de precisión.',
    imageUrl: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop',
    priceEstimate: '$25.00',
  },
];

export const HaircutGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedStyle, setSelectedStyle] = useState<HaircutStyle | null>(null);

  const categories = [
    { id: 'todos', name: 'Todos los Cortes' },
    { id: 'fades', name: 'Fades & Degradados' },
    { id: 'urbanos', name: 'Estilos Urbanos' },
    { id: 'clasicos', name: 'Cortes Clásicos' },
    { id: 'barba', name: 'Barba & Navaja' },
    { id: 'disenos', name: 'Diseños Freestyle' },
  ];

  const filteredGallery = activeCategory === 'todos'
    ? HAIRCUT_GALLERY_DATA
    : HAIRCUT_GALLERY_DATA.filter(item => item.category === activeCategory);

  return (
    <section id="galeria" className="py-16 sm:py-20 lg:py-24 bg-[#1A1A1A] relative overflow-hidden border-t border-neutral-800">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#DC143C_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#121212] border border-[#DC143C] px-3 sm:px-4 py-1.5 mb-3 sm:mb-4 text-xs font-mono tracking-widest text-white uppercase shadow-sm">
            <Camera className="w-3.5 h-3.5 text-[#DC143C]" />
            <span>Catálogo de Trabajos Reales</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            Galería de <span className="text-[#DC143C]">Cortes & Estilos</span>
          </h2>
          <p className="text-xs sm:text-base text-[#B2B2B2] mt-3 font-normal max-w-xl mx-auto leading-relaxed">
            Explora nuestros trabajos recientes realizados por nuestros barberos master. Haz clic en cualquier imagen para ver los detalles y agendar tu cita con ese estilo exacto.
          </p>
        </motion.div>

        {/* Category Filters (Scrollable on small mobile screens) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="overflow-x-auto no-scrollbar flex sm:flex-wrap justify-start sm:justify-center gap-2 mb-8 sm:mb-12 border-b border-neutral-800 pb-3 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-none whitespace-nowrap shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-[#DC143C] text-white shadow-lg scale-105'
                  : 'bg-[#121212] text-[#B2B2B2] hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Haircuts Photo Grid with Motion Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((style) => (
              <motion.div
                key={style.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="group bg-[#121212] border border-neutral-800 overflow-hidden flex flex-col justify-between transition-colors duration-300 hover:border-[#DC143C] hover:shadow-[0_0_20px_rgba(220,20,60,0.25)] relative"
              >
                {/* Image Container */}
                <div 
                  className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-900 cursor-pointer"
                  onClick={() => setSelectedStyle(style)}
                >
                  <img
                    src={style.imageUrl}
                    alt={style.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/30 opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 bg-[#121212]/90 border border-[#DC143C] px-2.5 py-1 text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                    {style.tag}
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-3 right-3 bg-[#DC143C] text-white px-2.5 py-1 text-[11px] font-mono font-black shadow-md">
                    {style.priceEstimate}
                  </div>

                  {/* Zoom Hover Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <div className="p-3 bg-[#DC143C] text-white border border-white/20 shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-wide group-hover:text-[#DC143C] transition-colors leading-tight">
                      {style.title}
                    </h3>
                    <p className="text-xs text-[#B2B2B2] mt-1.5 leading-relaxed line-clamp-2">
                      {style.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-neutral-400">
                      Barbero: <strong className="text-white">{style.barber}</strong>
                    </span>

                    <a
                      href={getWhatsAppUrl(`Hola Iron & Fade, quiero agendar el corte de cabello: "${style.title}" con ${style.barber}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#1A1A1A] hover:bg-[#DC143C] text-white border border-neutral-700 hover:border-[#DC143C] text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 transition-all shrink-0"
                    >
                      <Scissors className="w-3 h-3 text-[#DC143C] group-hover:text-white" />
                      <span>Pedir Corte</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Direct WhatsApp Callout Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-[#121212] border border-neutral-800 p-6 sm:p-8 text-center flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div className="text-left max-w-2xl">
            <h4 className="text-lg sm:text-xl font-black uppercase text-white tracking-wide">
              ¿Tienes una foto de un corte de cabello específico que te gusta?
            </h4>
            <p className="text-xs sm:text-sm text-[#B2B2B2] mt-1">
              Envíanos la foto por WhatsApp y nuestros barberos visajistas replicarán el estilo exacto adaptándolo a tu tipo de rostro.
            </p>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={getWhatsAppUrl(WhatsAppMessages.promoHero)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#DC143C] hover:bg-[#b01030] text-white font-black text-xs sm:text-sm uppercase tracking-widest px-6 py-3.5 whitespace-nowrap transition-all shadow-lg shrink-0"
          >
            <WhatsAppLogo className="w-4 h-4" />
            <span>Enviar Foto por WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

      </div>

      {/* Lightbox / Zoom Modal */}
      <AnimatePresence>
        {selectedStyle && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedStyle(null)}
          >
            <motion.div 
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative bg-[#121212] border border-[#DC143C] max-w-2xl w-full p-4 sm:p-6 overflow-hidden shadow-2xl space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedStyle(null)}
                className="absolute top-3 right-3 p-2 bg-[#1A1A1A] text-[#B2B2B2] hover:text-white hover:bg-[#DC143C] transition-colors border border-neutral-700"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative w-full h-72 sm:h-96 overflow-hidden bg-black border border-neutral-800">
                <img
                  src={selectedStyle.imageUrl}
                  alt={selectedStyle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#DC143C] text-white px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider">
                  {selectedStyle.tag}
                </div>
              </div>

              {/* Modal Info */}
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide">
                    {selectedStyle.title}
                  </h3>
                  <span className="text-xl font-black text-[#DC143C] font-mono">
                    {selectedStyle.priceEstimate}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#B2B2B2] leading-relaxed">
                  {selectedStyle.description}
                </p>

                <p className="text-xs font-mono text-neutral-400 pt-1">
                  Barbero sugerido: <strong className="text-white">{selectedStyle.barber}</strong>
                </p>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppUrl(`Hola Iron & Fade, me gustaría agendar el corte de cabello "${selectedStyle.title}" con ${selectedStyle.barber}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#DC143C] hover:bg-[#b01030] text-white font-black text-xs uppercase tracking-widest py-3 transition-all"
                >
                  <WhatsAppLogo className="w-4 h-4" />
                  <span>Reservar este Corte por WhatsApp</span>
                </a>

                <button
                  onClick={() => setSelectedStyle(null)}
                  className="w-full sm:w-auto px-6 py-3 bg-[#1A1A1A] hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider border border-neutral-700"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
