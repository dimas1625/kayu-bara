"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown, Calendar, Flame } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-charcoal-950 overflow-hidden pt-20"
    >
      {/* Background FX: Dark Grid + Orange Ember Glows */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(230,81,0,0.15),rgba(0,0,0,0))]" />
      
      {/* Bottom glowing amber light */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-ember-500/10 rounded-full blur-[120px] z-0 animate-pulse pointer-events-none" />
      
      {/* Top right gold light */}
      <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-gold-500/5 rounded-full blur-[100px] z-0 pointer-events-none" />

      {/* Styled Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-900 border border-charcoal-800 text-gold-500 text-xs font-semibold tracking-widest uppercase mb-8 shadow-inner animate-fade-in">
          <Flame className="w-3.5 h-3.5 text-ember-500 fill-ember-500/20" />
          Restoran Grill Kayu Bakar Premium
        </div>

        {/* Title */}
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-charcoal-50 max-w-4xl leading-tight sm:leading-none mb-6">
          Cita Rasa Asap & <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-ember-500 via-ember-400 to-gold-500 bg-clip-text text-transparent filter drop-shadow-[0_2px_10px_rgba(230,81,0,0.2)]">
            Bara Sejati
          </span>
        </h1>

        {/* Paragraph */}
        <p className="max-w-2xl text-charcoal-200 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-10 font-body">
          Kami memanggang potongan daging terbaik di atas bara kayu kopi pilihan, 
          menghasilkan aroma asap yang memikat dan kelembutan daging steak yang tiada tara.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            onClick={() => scrollToSection("reservasi")}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded bg-gradient-to-r from-ember-600 to-ember-500 text-charcoal-50 font-heading font-bold tracking-wider hover:from-ember-500 hover:to-gold-500 border border-ember-500/50 hover:border-gold-500/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(230,81,0,0.5)] transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
          >
            <Calendar className="w-5 h-5" />
            Reservasi Meja
          </button>
          
          <Link
            href="/menu"
            className="flex items-center justify-center px-8 py-4 rounded bg-charcoal-900 text-gold-500 font-heading font-bold tracking-wider hover:bg-charcoal-800 hover:text-gold-400 border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
          >
            Lihat Semua Menu
          </Link>
        </div>
      </div>

      {/* Down arrow scroll helper */}
      <div 
        onClick={() => scrollToSection("menu")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-10 animate-bounce text-charcoal-300 hover:text-gold-500 transition-colors"
      >
        <span className="sr-only">Scroll down</span>
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
}
