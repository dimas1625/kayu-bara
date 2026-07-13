import React from "react";
import { Flame, ChefHat, Sparkles } from "lucide-react";

interface Dish {
  id: number;
  name: string;
  price: string;
  description: string;
  tag: string;
  tagType: "signature" | "favorit" | "premium";
  details: string[];
  // SVG Icon details
  iconType: "steak" | "ribs" | "salmon" | "chicken";
}

const dishes: Dish[] = [
  {
    id: 1,
    name: "T-Bone Wagyu Bakar",
    price: "Rp 475.000",
    description: "Premium Wagyu T-Bone steak panggang dengan kematangan sempurna di atas bara kayu kopi pilihan.",
    tag: "Signature",
    tagType: "signature",
    details: ["400g Premium Wagyu", "Saus Smoked Chimichurri", "Bawang Putih Panggang"],
    iconType: "steak"
  },
  {
    id: 2,
    name: "Iga Bakar Bara",
    price: "Rp 225.000",
    description: "Iga sapi muda pilihan dengan bumbu rempah rahasia, dibakar dengan olesan karamel madu hitam.",
    tag: "Favorit",
    tagType: "favorit",
    details: ["Iga Lembut 350g", "Madu Hitam Hutan", "Sambal Korek Asap"],
    iconType: "ribs"
  },
  {
    id: 3,
    name: "Salmon Asap Kayu",
    price: "Rp 195.000",
    description: "Fillet salmon Atlantik segar yang diasap lambat menggunakan kayu apel untuk aroma buah yang lembut.",
    tag: "Premium",
    tagType: "premium",
    details: ["Salmon Atlantik 200g", "Saus Honey Mustard", "Sayuran Panggang"],
    iconType: "salmon"
  },
  {
    id: 4,
    name: "Ayam Asap Madu",
    price: "Rp 145.000",
    description: "Setengah ekor ayam organik yang dimarinasi rempah pegunungan, diasap selama 4 jam hingga meresap.",
    tag: "Favorit",
    tagType: "favorit",
    details: ["Ayam Organik", "Glace Madu Hutan", "Sambal Matah Kecombrang"],
    iconType: "chicken"
  }
];

export default function MenuSection() {
  const renderDishIcon = (type: string) => {
    switch (type) {
      case "steak":
        return (
          <svg className="w-12 h-12 text-ember-500 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" className="opacity-10" />
            <path d="M8 8c-1.5 0-3 1.5-3 3.5 0 2.5 2.5 4.5 5 4.5s5-2 5-4.5C15 9.5 13.5 8 12 8c-.6 0-1.1.2-1.5.5C10.1 8.2 9.6 8 8 8z" />
            <circle cx="8" cy="11" r="1.5" className="opacity-30" />
            <circle cx="12" cy="12" r="1.5" className="opacity-30" />
          </svg>
        );
      case "ribs":
        return (
          <svg className="w-12 h-12 text-ember-500 fill-current" viewBox="0 0 24 24">
            <path d="M4 19h16v2H4zm0-4h16v2H4zm0-4h16v2H4zm0-4h16v2H4z" className="opacity-10" />
            <path d="M19 5h-2v2h2V5zm-4 0H9v2h6V5zM7 5H5v2h2V5zm12 4h-2v2h2V9zm-4 0H9v2h6V9z" />
          </svg>
        );
      case "salmon":
        return (
          <svg className="w-12 h-12 text-ember-500 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" className="opacity-10" />
            <path d="M20 12c0-2-2-4.5-5-5.5-1 1.5-2 3-4 4-2.5.5-4 1-5 1-1.5 0-2.5-.5-3.5-1.5" />
          </svg>
        );
      case "chicken":
        return (
          <svg className="w-12 h-12 text-ember-500 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" className="opacity-10" />
            <path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6" />
          </svg>
        );
      default:
        return <Flame className="w-10 h-10 text-ember-500" />;
    }
  };

  const getTagStyleClass = (type: string) => {
    switch (type) {
      case "signature":
        return "bg-ember-500/10 text-ember-400 border border-ember-500/20";
      case "favorit":
        return "bg-gold-500/10 text-gold-500 border border-gold-500/20";
      case "premium":
        return "bg-amber-500/10 text-amber-400 border border-amber-500/20";
      default:
        return "bg-charcoal-800 text-charcoal-300 border border-charcoal-700";
    }
  };

  return (
    <section id="menu" className="relative py-24 bg-charcoal-900 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-ember-500/5 rounded-full blur-[80px] z-0 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-charcoal-950 border border-charcoal-800 text-gold-500 text-xs font-semibold uppercase tracking-wider mb-4">
            <ChefHat className="w-4 h-4 text-ember-500" />
            Cita Rasa Premium
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-charcoal-50 mb-4">
            Hidangan Andalan Kami
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ember-500 to-gold-500 mx-auto mb-6" />
          <p className="text-charcoal-200 text-base sm:text-lg font-light font-body">
            Setiap hidangan dipersiapkan secara presisi oleh Chef ahli kami menggunakan teknik grill tradisional di atas bara api kayu bakar yang menyala sempurna.
          </p>
        </div>

        {/* Primary Menu Grid (4 Andalan) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="group relative bg-charcoal-950 border border-charcoal-800/80 rounded-xl p-6 sm:p-8 hover:border-gold-500/30 transition-all duration-500 flex flex-col justify-between hover:shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-ember-500/5 rounded-full blur-2xl group-hover:bg-ember-500/10 transition-all duration-500 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${getTagStyleClass(dish.tagType)}`}>
                    <Sparkles className="w-3 h-3" />
                    {dish.tag}
                  </span>
                  <span className="font-heading text-lg sm:text-xl font-bold text-gold-500 group-hover:text-gold-400 transition-colors">
                    {dish.price}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="w-20 h-20 rounded-lg bg-charcoal-900 border border-charcoal-800 flex items-center justify-center group-hover:border-ember-500/20 transition-all duration-500 shrink-0">
                    <div className="group-hover:scale-110 transition-transform duration-500 text-ember-500 group-hover:text-ember-400">
                      {renderDishIcon(dish.iconType)}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-charcoal-50 group-hover:text-gold-500 transition-colors">
                      {dish.name}
                    </h3>
                    <p className="text-charcoal-200 text-sm sm:text-base font-light leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-charcoal-900 flex flex-wrap gap-2">
                  {dish.details.map((detail, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs rounded bg-charcoal-900 text-charcoal-300 border border-charcoal-800"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-ember-600 via-ember-500 to-gold-500 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
