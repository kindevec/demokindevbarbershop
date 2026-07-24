export const WHATSAPP_PHONE_DISPLAY = "099 195 2889";
export const WHATSAPP_NUMBER_RAW = "593991952889";

/**
 * Creates a formatted wa.me WhatsApp URL with encoded message
 */
export function getWhatsAppUrl(message: string): string {
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER_RAW}?text=${encodedText}`;
}

/**
 * Common WhatsApp message generators for specific actions
 */
export const WhatsAppMessages = {
  promoHero: "🔥 Hola Iron & Fade Barbershop! Quisiera agendar un corte de pelo aprovechando la *Promoción del 20% OFF* en mi primera visita.",
  
  generalBooking: "💈 Hola Iron & Fade Barbershop! Me gustaría consultar la disponibilidad de citas para esta semana.",

  serviceBooking: (serviceName: string, price: number) =>
    `✂️ Hola Iron & Fade! Quisiera agendar el servicio: *${serviceName}* (Precio: $${price.toFixed(2)}). ¿Tienen turnos disponibles?`,

  barberBooking: (barberName: string) =>
    `💈 Hola Iron & Fade! Me gustaría agendar un turno con el barbero *${barberName}*.`,

  locationInquiry: "📍 Hola Iron & Fade Barbershop! Quisiera pedir información sobre su ubicación exacta, parqueadero y horarios.",

  customBooking: (data: {
    clientName: string;
    clientPhone: string;
    serviceName: string;
    servicePrice: number;
    finalPrice: number;
    barberName: string;
    date: string;
    time: string;
    notes?: string;
  }) => {
    let msg = `🔥 *NUEVA RESERVA - IRON & FADE BARBERSHOP*\n\n`;
    msg += `👤 *Cliente:* ${data.clientName || 'Cliente'}\n`;
    if (data.clientPhone) msg += `📞 *Teléfono:* ${data.clientPhone}\n`;
    msg += `✂️ *Servicio:* ${data.serviceName}\n`;
    msg += `💈 *Barbero:* ${data.barberName}\n`;
    msg += `📅 *Fecha:* ${data.date}\n`;
    msg += `⏰ *Hora:* ${data.time}\n`;
    msg += `💰 *Precio regular:* $${data.servicePrice.toFixed(2)}\n`;
    msg += `🎁 *Total con 20% OFF:* $${data.finalPrice.toFixed(2)}\n`;
    if (data.notes) msg += `📝 *Notas:* ${data.notes}\n`;
    msg += `\n¿Me confirman la disponibilidad de este turno? ¡Gracias!`;
    return msg;
  }
};
