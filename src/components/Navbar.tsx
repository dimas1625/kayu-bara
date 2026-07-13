"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Flame } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    
    if (pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height offset
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

  const navLinks = [
    { name: "Beranda", target: "hero" },
    { name: "Tentang Kami", target: "tentang-kami" },
    { name: "Menu Andalan", target: "menu" },
    { name: "Reservasi", target: "reservasi" },
    { name: "Kontak", target: "footer" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-charcoal-950/80 backdrop-blur-md border-b border-charcoal-800 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection("hero")} 
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-ember-500/10 flex items-center justify-center border border-ember-500/20 group-hover:border-ember-500/40 transition-colors">
              <Flame className="w-5 h-5 text-ember-500 group-hover:text-ember-400 animate-pulse" />
            </div>
            <span className="font-heading text-xl font-bold tracking-wider text-charcoal-50 group-hover:text-gold-500 transition-colors uppercase">
              Kayu <span className="text-ember-500">Bara</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.target)}
                className="text-sm font-medium tracking-wide text-charcoal-200 hover:text-gold-500 transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("reservasi")}
              className="px-6 py-2 rounded bg-gradient-to-r from-ember-600 to-ember-500 text-charcoal-50 font-heading text-sm font-semibold tracking-wide border border-ember-500 hover:from-ember-500 hover:to-gold-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(230,81,0,0.4)] cursor-pointer"
            >
              Reservasi Meja
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-charcoal-200 hover:text-ember-500 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-charcoal-900/95 backdrop-blur-lg border-b border-charcoal-800 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.target)}
              className="block w-full text-left py-2 text-base font-medium text-charcoal-200 hover:text-gold-500 transition-colors"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-4 border-t border-charcoal-800">
            <button
              onClick={() => scrollToSection("reservasi")}
              className="w-full py-3 rounded bg-gradient-to-r from-ember-600 to-ember-500 text-charcoal-50 font-heading text-center font-semibold tracking-wide border border-ember-500 hover:from-ember-500 hover:to-gold-500 transition-all duration-300"
            >
              Reservasi Meja
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
