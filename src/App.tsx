/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesPriceList } from './components/ServicesPriceList';
import { HaircutGallery } from './components/HaircutGallery';
import { SocialSection } from './components/SocialSection';
import { LocationSection } from './components/LocationSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicios', 'galeria', 'redes', 'ubicacion', 'cita'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white font-sans selection:bg-[#DC143C] selection:text-white antialiased">
      {/* Top Header with Nav Sections & Announcement Banner */}
      <Header activeSection={activeSection} />

      {/* Main Content Areas */}
      <main>
        {/* Section 1: Inicio / Hero */}
        <Hero />

        {/* Section 2: Servicios & Precios */}
        <ServicesPriceList />

        {/* Section 3: Galería de Cortes de Cabello */}
        <HaircutGallery />

        {/* Section 4: Redes Sociales */}
        <SocialSection />

        {/* Section 5: Ubicación & Horarios */}
        <LocationSection />

        {/* Section 6: Cita & Reservas */}
        <BookingSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom Navigation Bar */}
      <MobileBottomNav activeSection={activeSection} />

      {/* Floating WhatsApp Quick Action */}
      <WhatsAppFloatingButton />
    </div>
  );
}
