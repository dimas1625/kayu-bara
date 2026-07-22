import React from "react";
import Image from "next/image";
import { Flame } from "lucide-react";

export default function About() {
  return (
    <section
      id="tentang-kami"
      className="relative py-24 bg-charcoal-950 overflow-hidden"
    >
      {/* Decorative ambient glowing lines */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-ember-500/5 rounded-full blur-[120px] z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-gold-500/5 rounded-full blur-[100px] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Column 1: Text Content (Left) */}
          <div className="lg:col-span-7 space-y-6">

            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-charcoal-900 border border-charcoal-800 text-gold-500 text-xs font-semibold uppercase tracking-wider">
              <Flame className="w-4 h-4 text-[#E8622C]" />
              Kisah Kami
            </div>

            {/* Heading */}
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-charcoal-50 leading-tight">
              Dari Bara, Bukan dari Gas
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-[#E8622C] to-gold-500" />

            {/* Body copy paragraphs */}
            <div className="space-y-4 font-body text-charcoal-200 text-base sm:text-lg font-light leading-relaxed">
              <p>
                Di Kayu Bara, kami menolak kompromi dalam menyajikan cita rasa asap sejati.
                Kami sepenuhnya meninggalkan penggunaan kompor gas konvensional dan kembali ke akar kuliner tradisional memanggang secara perlahan di atas bara kayu alami yang menyala membara.
              </p>
              <p>
                Setiap jenis kayu dipilih secara saksama oleh Chef kami demi karakter aroma yang dihasilkan.
                Kami memadukan kayu kopi yang berkarakter kuat untuk steak wagyu premium, serta kayu apel beraroma buah yang lembut untuk mengasap hidangan laut dan ayam secara sempurna.
              </p>
            </div>
          </div>

          {/* Column 2: Chef Image Visual (Right) */}
          <div className="lg:col-span-5 relative group">
            {/* Visual background glows behind the image frame */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#E8622C] to-gold-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />

            {/* Actual image frame */}
            <div className="relative bg-charcoal-900 border border-charcoal-800 rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/620822fa2205ef6d7cbd0854/1774572273505-F8H5E34B6RKGY1HRDAKD/Blog-Why-Wood-Fired-Cooking-Tastes-Better-Asador.jpg"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Overlay shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent opacity-60" />

              {/* Micro badge on image */}
              <div className="absolute bottom-4 left-4 right-4 bg-charcoal-950/80 backdrop-blur-md border border-charcoal-800 rounded-xl p-4 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-[10px] text-[#E8622C] font-semibold uppercase tracking-wider block">Head Chef</span>
                  <span className="text-sm font-heading font-bold text-charcoal-50 block">Chef Bara Sentosa</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#E8622C]/10 border border-[#E8622C]/20 flex items-center justify-center">
                  <Flame className="w-4 h-4 text-[#E8622C]" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
