import React from "react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  rating: number;
  initials: string;
  avatarBg: string; // Tailwind gradient classes
}

const testimonialsRow1: Testimonial[] = [
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
  },
  {
    id: 4,
    name: "Rani",
    location: "Surabaya",
    quote: "Suasananya hangat dan intim, cocok untuk makan malam romantis. Salmon panggang kayu manisnya juga tidak kalah enak dari menu daging.",
    rating: 5,
    initials: "R",
    avatarBg: "from-ember-500 to-gold-600"
  }
];

const testimonialsRow2: Testimonial[] = [
  {
    id: 5,
    name: "Andi",
    location: "Depok",
    quote: "Pelayanan sangat ramah dan cepat. Porsi Iga Bakar-nya besar dan sangat memuaskan untuk makan bersama keluarga.",
    rating: 5,
    initials: "A",
    avatarBg: "from-gold-500 to-ember-600"
  },
  {
    id: 6,
    name: "Maya",
    location: "Yogyakarta",
    quote: "Cocktail smoky mereka jadi pendamping sempurna untuk T-Bone Wagyu. Presentasi makanannya juga sangat menarik, cocok untuk konten media sosial.",
    rating: 5,
    initials: "M",
    avatarBg: "from-charcoal-600 to-charcoal-700"
  },
  {
    id: 7,
    name: "Fajar",
    location: "Bekasi",
    quote: "Baru pertama kali coba masakan bakar dengan teknik smoking seperti ini, dan langsung jatuh cinta. Pasti balik lagi bawa teman kantor.",
    rating: 5,
    initials: "F",
    avatarBg: "from-ember-600 to-charcoal-700"
  },
  {
    id: 8,
    name: "Laras",
    location: "Bogor",
    quote: "Dari reservasi sampai selesai makan, semuanya rapi dan profesional. Dessert pisang bakar karamelnya jangan sampai terlewat!",
    rating: 5,
    initials: "L",
    avatarBg: "from-gold-600 to-charcoal-600"
  }
];

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div
      className="group relative bg-charcoal-950 border border-charcoal-800/80 rounded-xl p-6 sm:p-8 hover:border-gold-500/30 transition-all duration-500 flex flex-col justify-between hover:shadow-[0_4px_30px_rgba(0,0,0,0.4)] overflow-hidden w-[320px] sm:w-[380px] shrink-0"
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
  );
}

function MarqueeRow({
  items,
  direction = "left",
  speedSeconds = 40
}: {
  items: Testimonial[];
  direction?: "left" | "right";
  speedSeconds?: number;
}) {
  // Duplicate the list so the loop is seamless
  const looped = [...items, ...items];

  return (
    <div className="relative overflow-hidden group/row">
      {/* Fade edges so cards don't hard-cut at the container border */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-charcoal-900 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-charcoal-900 to-transparent z-10" />

      <div
        className="flex gap-6 w-max group-hover/row:[animation-play-state:paused]"
        style={{
          animation: `marquee-${direction} ${speedSeconds}s linear infinite`
        }}
      >
        {looped.map((item, idx) => (
          <TestimonialCard key={`${item.id}-${idx}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimoni"
      className="relative py-24 bg-charcoal-900 overflow-hidden"
    >
      {/* Keyframes for the two scroll directions */}
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="marquee-left"], [style*="marquee-right"] {
            animation: none !important;
          }
        }
      `}</style>

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

        {/* Testimonials Marquee — two rows, opposite directions */}
        <div className="space-y-6 -mx-4 sm:-mx-6 lg:-mx-8">
          <MarqueeRow items={testimonialsRow1} direction="left" speedSeconds={42} />
          <MarqueeRow items={testimonialsRow2} direction="right" speedSeconds={48} />
        </div>

      </div>
    </section>
  );
}