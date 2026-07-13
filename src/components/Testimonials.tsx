import React from "react";
import { Star, Quote, Sparkles } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  rating: number;
  initials: string;
  avatarBg: string; // Tailwinds gradient classes
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dimas",
    location: "Jakarta Selatan",
    quote: "T-Bone Wagyu Bakar di sini adalah steak terbaik yang pernah saya coba. Aroma asap dari kayu kopi meresap sempurna hingga ke serat terdalam dagingnya. Layanan luar biasa!",
    rating: 5,
    initials: "D",
    avatarBg: "from-ember-600 to-ember-500"
  },
  {
    id: 2,
    name: "Siti",
    location: "Tangerang Selatan",
    quote: "Ayam Asap Madu-nya sangat empuk dan manis alaminya pas sekali dengan sambal matah kecombrang. Teknik pengasapan mereka menghasilkan rasa yang benar-benar otentik.",
    rating: 5,
    initials: "S",
    avatarBg: "from-gold-600 to-gold-500"
  },
  {
    id: 3,
    name: "Budi",
    location: "Bandung",
    quote: "Iga Bakar Bara dengan glaze madu hitam adalah juara. Dagingnya sangat lembut langsung lepas dari tulangnya. Nilai tambah untuk atmosfer restoran yang sangat mewah.",
    rating: 5,
    initials: "B",
    avatarBg: "from-charcoal-700 to-charcoal-600"
  }
];

export default function Testimonials() {
  return (
    <section
      id="testimoni"
      className="relative py-24 bg-charcoal-900 overflow-hidden"
    >
      {/* Visual background glows */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-gold-500/5 rounded-full blur-[80px] z-0 pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-ember-500/5 rounded-full blur-[100px] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-charcoal-950 border border-charcoal-800 text-gold-500 text-xs font-semibold uppercase tracking-wider mb-4">
            <Star className="w-4 h-4 text-[#C9A227] fill-[#C9A227]" />
            Apa Kata Mereka
          </div>

          {/* Heading */}
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-charcoal-50 mb-4">
            Cerita dari Meja Kami
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ember-500 to-gold-500 mx-auto mb-6" />

          {/* Social Proof Aggregate Banner */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-950/60 border border-charcoal-800/80 font-body text-xs sm:text-sm text-charcoal-200">
            <span className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-[#C9A227] fill-[#C9A227]" />
              ))}
            </span>
            <span className="font-medium text-charcoal-50">4.9 dari 5</span>
            <span className="text-charcoal-300">• berdasarkan 210+ reservasi</span>
          </div>

        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group relative bg-charcoal-950 border border-charcoal-800/80 rounded-xl p-6 sm:p-8 hover:border-gold-500/30 transition-all duration-500 flex flex-col justify-between hover:shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1 overflow-hidden"
            >
              {/* Subtle background decoration */}
              <div className="absolute top-4 right-4 text-charcoal-900 group-hover:text-ember-500/5 transition-colors duration-500 pointer-events-none">
                <Quote className="w-12 h-12 fill-current" />
              </div>

              <div className="space-y-4">
                {/* 5 Stars rating */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#C9A227] fill-[#C9A227]" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-charcoal-200 text-sm sm:text-base font-light leading-relaxed italic font-body">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Customer Profile Row */}
              <div className="mt-6 pt-6 border-t border-charcoal-900 flex items-center gap-4">
                {/* Custom Initials Avatar */}
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.avatarBg} flex items-center justify-center text-charcoal-50 font-heading font-extrabold text-sm shrink-0 shadow-md`}>
                  {item.initials}
                </div>
                
                {/* Name & Location */}
                <div className="space-y-0.5 font-body">
                  <span className="text-sm font-semibold text-charcoal-50 block group-hover:text-gold-500 transition-colors">
                    {item.name}
                  </span>
                  <span className="text-xs text-charcoal-300 block font-light">
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Decorative gradient border line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-ember-600 via-ember-500 to-gold-500 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
