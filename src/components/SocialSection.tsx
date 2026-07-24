import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Share2, Sparkles } from 'lucide-react';
import { FacebookLogo, InstagramLogo, WhatsAppLogo } from './SocialLogos';
import { WHATSAPP_PHONE_DISPLAY, getWhatsAppUrl, WhatsAppMessages } from '../utils/whatsapp';

export const SocialSection: React.FC = () => {
  const socialChannels = [
    {
      id: 'facebook',
      name: 'Facebook',
      handle: '@kindevec',
      url: 'https://www.facebook.com/kindevec/',
      icon: FacebookLogo,
      tag: 'Comunidad & Eventos',
      description: 'Sigue nuestras transmisiones en vivo, transformaciones de imagen antes y después, y promociones exclusivas para la comunidad.',
      ctaText: 'Ir a Facebook',
      accentColor: '#1877F2',
      metric: '+15K Seguidores',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@kindevx',
      url: 'https://www.instagram.com/kindevx/',
      icon: InstagramLogo,
      tag: 'Galería de Cortes & Fades',
      description: 'Explora nuestro feed oficial con los mejores Skin Fades, diseños a navaja, estilos urbanos y tendencias internacionales diarias.',
      ctaText: 'Ver Feed en Instagram',
      accentColor: '#E4405F',
      metric: '+28K Seguidores',
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Directo',
      handle: WHATSAPP_PHONE_DISPLAY,
      url: getWhatsAppUrl(WhatsAppMessages.promoHero),
      icon: WhatsAppLogo,
      tag: 'Atención & Citas 24/7',
      description: 'Escríbenos directamente para agendar tu turno, consultar disponibilidad en tiempo real o solicitar asesoría de imagen personalizada.',
      ctaText: 'Escribir por WhatsApp',
      accentColor: '#25D366',
      metric: 'Respuesta en < 5 min',
    },
  ];

  return (
    <section id="redes" className="py-20 bg-[#121212] text-white relative overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#DC143C_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-[#DC143C] text-xs font-mono tracking-widest uppercase mb-2 font-bold">
            <Share2 className="w-4 h-4" />
            <span>Conecta con Iron & Fade</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Nuestras Redes
          </h2>
          <p className="text-[#B2B2B2] max-w-2xl mx-auto text-sm sm:text-base">
            Únete a nuestra comunidad urbana en redes sociales. Mantente al día con los últimos estilos, promociones exclusivas y reserva tu cita directamente.
          </p>
        </motion.div>

        {/* 3 Main Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {socialChannels.map((channel, idx) => {
            const Icon = channel.icon;
            return (
              <motion.div
                key={channel.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative bg-[#1A1A1A] border border-neutral-800 p-5 sm:p-8 flex flex-col justify-between transition-colors duration-300 hover:border-[#DC143C] hover:shadow-[0_0_25px_rgba(220,20,60,0.25)]"
              >
                {/* Top Corner Badge */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="p-3 sm:p-4 bg-[#121212] border border-neutral-800 text-[#DC143C] group-hover:bg-[#DC143C] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 fill-current" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-2 sm:px-2.5 py-1 uppercase tracking-wider">
                    {channel.metric}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  <span className="text-[11px] sm:text-xs font-mono font-bold text-[#DC143C] uppercase tracking-wider block">
                    {channel.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide group-hover:text-[#DC143C] transition-colors">
                    {channel.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-[#B2B2B2] font-semibold break-all">
                    {channel.handle}
                  </p>
                  <p className="text-xs text-[#B2B2B2] leading-relaxed pt-1 sm:pt-2">
                    {channel.description}
                  </p>
                </div>

                {/* CTA Link Button */}
                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between bg-[#121212] hover:bg-[#DC143C] text-white text-xs font-bold uppercase tracking-wider px-4 sm:px-5 py-3 sm:py-3.5 border border-neutral-800 hover:border-[#DC143C] transition-all duration-300 group/btn"
                >
                  <span className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span>{channel.ctaText}</span>
                  </span>
                  <ExternalLink className="w-4 h-4 opacity-70 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all shrink-0" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Community Highlights / Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1A1A1A] border border-neutral-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#DC143C]/20 border border-[#DC143C] text-[#DC143C] shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white uppercase tracking-wider">
                ¿Mencionaste a @kindevx en tu historia de Instagram?
              </h4>
              <p className="text-xs text-[#B2B2B2] mt-0.5">
                Menciónanos en tu publicación o historia de tu nuevo corte para recibir un <strong className="text-white">10% OFF extra</strong> en tu siguiente visita.
              </p>
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={getWhatsAppUrl(WhatsAppMessages.promoHero)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#DC143C] hover:bg-[#b01030] text-white text-xs font-black uppercase tracking-widest px-6 py-3.5 whitespace-nowrap transition-all"
          >
            <WhatsAppLogo className="w-4 h-4" />
            <span>Agendar Cita en WhatsApp</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};
