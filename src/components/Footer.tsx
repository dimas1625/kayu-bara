"use client";

import React from "react";
import { Flame, Phone, Mail, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="relative bg-charcoal-950 border-t border-charcoal-800 text-charcoal-300 py-16 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-ember-500/5 rounded-full blur-[80px] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-ember-500/10 flex items-center justify-center border border-ember-500/20">
                <Flame className="w-4 h-4 text-ember-500" />
              </div>
              <span className="font-heading text-lg font-bold tracking-wider text-charcoal-50 uppercase">
                Kayu <span className="text-ember-500">Bara</span>
              </span>
            </div>
            <p className="text-sm text-charcoal-200 font-light leading-relaxed font-body">
              Restoran grill kayu bakar premium yang menyajikan potongan daging pilihan berkualitas tinggi dengan cita rasa aroma asap dan kematangan sempurna.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/40 text-charcoal-300 hover:text-gold-500 flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/40 text-charcoal-300 hover:text-gold-500 flex items-center justify-center transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/40 text-charcoal-300 hover:text-gold-500 flex items-center justify-center transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="font-heading text-base font-bold text-charcoal-50 tracking-wider uppercase border-l-2 border-ember-500 pl-3">
              Jam Operasional
            </h4>
            <ul className="space-y-3 font-body text-sm font-light text-charcoal-200">
              <li className="flex justify-between border-b border-charcoal-900 pb-1.5">
                <span>Senin - Jumat</span>
                <span className="font-medium text-gold-500">12:00 - 22:00 WIB</span>
              </li>
              <li className="flex justify-between border-b border-charcoal-900 pb-1.5">
                <span>Sabtu - Minggu</span>
                <span className="font-medium text-gold-500">12:00 - 23:00 WIB</span>
              </li>
              <li className="text-[11px] text-ember-500 font-medium italic">
                * Dapur terakhir menerima pesanan 45 menit sebelum jam tutup.
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading text-base font-bold text-charcoal-50 tracking-wider uppercase border-l-2 border-ember-500 pl-3">
              Hubungi Kami
            </h4>
            <ul className="space-y-3 font-body text-sm font-light text-charcoal-200">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-ember-500 shrink-0" />
                <div>
                  <span className="block text-xs text-charcoal-300">Telepon / WhatsApp</span>
                  <a href="tel:+622188997766" className="hover:text-gold-500 transition-colors font-medium">
                    +62 21 8899 7766
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-ember-500 shrink-0" />
                <div>
                  <span className="block text-xs text-charcoal-300">E-mail Resmi</span>
                  <a href="mailto:info@kayubara.com" className="hover:text-gold-500 transition-colors font-medium">
                    info@kayubara.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Location Info */}
          <div className="space-y-4">
            <h4 className="font-heading text-base font-bold text-charcoal-50 tracking-wider uppercase border-l-2 border-ember-500 pl-3">
              Lokasi Restoran
            </h4>
            <div className="flex items-start gap-3 font-body text-sm font-light text-charcoal-200">
              <MapPin className="w-5 h-5 text-ember-500 shrink-0" />
              <div>
                <span className="block text-xs text-charcoal-300">Alamat</span>
                <p className="leading-relaxed">
                  Jl. Hang Lekir No. 12, Senayan, Kebayoran Baru, Jakarta Selatan 12120
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright area */}
        <div className="pt-8 border-t border-charcoal-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-body font-light text-charcoal-300">
          <p>
            &copy; {currentYear} Kayu Bara Grill. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gold-500 transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Syarat & Ketentuan</a>
            
            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-charcoal-900 border border-charcoal-800 hover:border-ember-500 text-charcoal-300 hover:text-ember-500 transition-all duration-300 cursor-pointer shadow-md"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
