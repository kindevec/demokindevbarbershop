import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES_DATA, BARBERS_DATA } from '../data/barbershopData';
import { Calendar, Clock, Scissors, User, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { WhatsAppLogo } from './SocialLogos';
import { WHATSAPP_PHONE_DISPLAY, getWhatsAppUrl, WhatsAppMessages } from '../utils/whatsapp';

export const BookingSection: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[1].id); // Fade Urbano default
  const [selectedBarberId, setSelectedBarberId] = useState<string>('any');
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState<string>('16:00');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const selectedService = SERVICES_DATA.find(s => s.id === selectedServiceId) || SERVICES_DATA[0];
  const selectedBarber = BARBERS_DATA.find(b => b.id === selectedBarberId);
  const barberDisplayName = selectedBarber ? `${selectedBarber.name} (${selectedBarber.nickname})` : 'Cualquier barbero disponible';

  const regularPrice = selectedService.price;
  const discountAmount = regularPrice * 0.20; // 20% discount on first visit promo
  const finalPrice = regularPrice - discountAmount;

  const timeSlots = ['09:30', '10:30', '11:30', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) {
      alert('Por favor, ingresa tu nombre completo para la reserva.');
      return;
    }

    const whatsappMessage = WhatsAppMessages.customBooking({
      clientName,
      clientPhone,
      serviceName: selectedService.name,
      servicePrice: regularPrice,
      finalPrice: finalPrice,
      barberName: barberDisplayName,
      date,
      time,
      notes,
    });

    const url = getWhatsAppUrl(whatsappMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="cita" className="py-20 bg-[#121212] text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#DC143C]/20 border border-[#DC143C] text-[#DC143C] text-xs font-mono tracking-widest uppercase px-3 py-1 mb-3 font-bold">
            <Clock className="w-4 h-4" />
            <span>Reserva Inmediata sin Complicaciones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Reserva tu Cita
          </h2>
          <p className="text-[#B2B2B2] max-w-2xl mx-auto text-sm sm:text-base">
            Selecciona tu servicio y barbero ideal. Se aplicará automáticamente el <strong className="text-white">20% de descuento en tu primer corte</strong>. La confirmación se enviará directamente a nuestro WhatsApp oficial (<strong className="text-white">{WHATSAPP_PHONE_DISPLAY}</strong>).
          </p>
        </motion.div>

        {/* Booking Form + Live Summary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Form Controls (7 cols) */}
          <motion.form 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit} 
            className="lg:col-span-7 bg-[#1A1A1A] border border-neutral-800 p-4 sm:p-8 space-y-5 sm:space-y-6 shadow-2xl"
          >
            
            {/* Step 1: Service Selection */}
            <div>
              <label className="block text-xs font-mono font-bold text-[#DC143C] uppercase tracking-wider mb-1.5 flex items-center gap-2">
                <Scissors className="w-4 h-4 shrink-0" /> 1. Elige tu Servicio
              </label>
              <select
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
                className="w-full bg-[#121212] border border-neutral-700 text-white text-base sm:text-sm font-semibold p-3 focus:outline-none focus:border-[#DC143C] rounded-none"
              >
                {SERVICES_DATA.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name} — ${service.price.toFixed(2)} ({service.durationMin} min)
                  </option>
                ))}
              </select>
            </div>

            {/* Step 2: Barber Selection */}
            <div>
              <label className="block text-xs font-mono font-bold text-[#DC143C] uppercase tracking-wider mb-1.5 flex items-center gap-2">
                <User className="w-4 h-4 shrink-0" /> 2. Elige tu Barbero
              </label>
              <select
                value={selectedBarberId}
                onChange={(e) => setSelectedBarberId(e.target.value)}
                className="w-full bg-[#121212] border border-neutral-700 text-white text-base sm:text-sm font-semibold p-3 focus:outline-none focus:border-[#DC143C] rounded-none"
              >
                <option value="any">⚡ CUALQUIER BARBERO DISPONIBLE (Asignación rápida)</option>
                {BARBERS_DATA.map((barber) => (
                  <option key={barber.id} value={barber.id}>
                    💈 {barber.name} "{barber.nickname}" — {barber.specialty}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 3: Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold text-[#DC143C] uppercase tracking-wider mb-1.5 flex items-center gap-2">
                  <Calendar className="w-4 h-4 shrink-0" /> 3. Fecha
                </label>
                <input
                  type="date"
                  value={date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#121212] border border-neutral-700 text-white text-base sm:text-sm font-semibold p-3 focus:outline-none focus:border-[#DC143C] rounded-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#DC143C] uppercase tracking-wider mb-1.5 flex items-center gap-2">
                  <Clock className="w-4 h-4 shrink-0" /> 4. Horario Estimado
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-[#121212] border border-neutral-700 text-white text-base sm:text-sm font-semibold p-3 focus:outline-none focus:border-[#DC143C] rounded-none"
                >
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>
                      ⏰ {t} hs
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 4: Personal Info */}
            <div className="space-y-4 pt-2 border-t border-neutral-800">
              <div>
                <label className="block text-xs font-mono font-bold text-[#B2B2B2] uppercase tracking-wider mb-1">
                  Tu Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Carlos Ramírez"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-[#121212] border border-neutral-700 text-white text-base sm:text-sm p-3 focus:outline-none focus:border-[#DC143C] rounded-none placeholder:text-neutral-600"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#B2B2B2] uppercase tracking-wider mb-1">
                  Teléfono / WhatsApp de Contacto
                </label>
                <input
                  type="tel"
                  placeholder="Ej: 099 123 4567"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full bg-[#121212] border border-neutral-700 text-white text-base sm:text-sm p-3 focus:outline-none focus:border-[#DC143C] rounded-none placeholder:text-neutral-600"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#B2B2B2] uppercase tracking-wider mb-1">
                  Notas adicionales (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ej: Prefiero corte bajo con navaja limpia en nuca"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#121212] border border-neutral-700 text-white text-base sm:text-sm p-3 focus:outline-none focus:border-[#DC143C] rounded-none placeholder:text-neutral-600"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2.5 bg-[#DC143C] hover:bg-[#b01030] text-white font-black text-xs sm:text-sm uppercase tracking-widest py-3.5 sm:py-4 rounded-none shadow-[0_0_20px_rgba(220,20,60,0.3)] transition-all"
            >
              <WhatsAppLogo className="w-5 h-5 shrink-0" />
              <span>Confirmar Cita por WhatsApp</span>
            </motion.button>
          </motion.form>

          {/* Live Booking Summary Box (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#121212] border border-[#DC143C]/60 p-4 sm:p-8 space-y-5 sm:space-y-6 shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 bg-[#DC143C] text-white text-[10px] font-mono font-bold uppercase px-3 py-1 tracking-widest">
              20% OFF APLICADO
            </div>

            <h3 className="text-xl font-black text-white uppercase tracking-wider border-b border-neutral-800 pb-4">
              Resumen de tu Turno
            </h3>

            <div className="space-y-4 text-sm font-mono">
              <div className="flex justify-between items-start">
                <span className="text-[#B2B2B2]">Servicio:</span>
                <span className="text-white font-bold text-right max-w-[180px]">{selectedService.name}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-[#B2B2B2]">Duración:</span>
                <span className="text-white font-bold">{selectedService.durationMin} minutos</span>
              </div>

              <div className="flex justify-between items-start">
                <span className="text-[#B2B2B2]">Barbero:</span>
                <span className="text-[#DC143C] font-bold text-right max-w-[180px]">
                  {selectedBarber ? selectedBarber.name : 'Cualquiera disponible'}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-[#B2B2B2]">Fecha y Hora:</span>
                <span className="text-white font-bold">{date} @ {time} hs</span>
              </div>

              <div className="pt-4 border-t border-neutral-800 space-y-2">
                <div className="flex justify-between text-xs text-[#B2B2B2]">
                  <span>Precio regular:</span>
                  <span className="line-through">${regularPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-xs text-emerald-400">
                  <span>Descuento 1ra visita (20%):</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-baseline pt-2 border-t border-neutral-800 text-lg font-black">
                  <span className="text-white uppercase">Total a Pagar:</span>
                  <span className="text-2xl text-[#DC143C]">${finalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-[#1A1A1A] p-4 border border-neutral-800 space-y-2 text-xs text-[#B2B2B2]">
              <div className="font-bold text-white uppercase font-mono flex items-center gap-1.5 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#DC143C]" />
                <span>Tu Cita Incluye Gratis:</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Cerveza artesanal o café de especialidad</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Lavado capilar tonificante con hidromasaje</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Estyling y cera mate de fijación fuerte</span>
              </div>
            </div>

            <div className="text-[11px] text-neutral-500 text-center font-mono">
              🔒 No solicitamos pagos por anticipado. Pagas directamente en el local al terminar tu corte.
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
