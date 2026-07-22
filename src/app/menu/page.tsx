"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Flame, Sparkles, Search, ChevronRight, Calendar } from "lucide-react";

interface Dish {
  id: number;
  name: string;
  price: string;
  description: string;
  tag: string;
  tagType: "signature" | "favorit" | "premium" | "rekomendasi" | "sehat" | "lokal" | "ringan" | "pedas" | "klasik" | "unik" | "segar" | "hangat" | "khas";
  details: string[];
  iconType: "steak" | "ribs" | "salmon" | "chicken" | "fish" | "crab" | "squid" | "shrimp" | "mushroom" | "drink";
  image: string;
  category: "Signature" | "Seafood" | "Ayam & Unggas" | "Vegetarian" | "Minuman";
}

const allDishes: Dish[] = [
  // Signature (6 items)
  {
    id: 1,
    name: "T-Bone Wagyu Bakar",
    price: "Rp 475.000",
    description: "Premium Wagyu T-Bone steak panggang dengan kematangan sempurna di atas bara kayu kopi pilihan.",
    tag: "Signature",
    tagType: "signature",
    details: ["400g Premium Wagyu", "Saus Smoked Chimichurri", "Bawang Putih Panggang"],
    iconType: "steak",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    category: "Signature"
  },
  {
    id: 2,
    name: "Iga Bakar Bara",
    price: "Rp 225.000",
    description: "Iga sapi muda pilihan dengan bumbu rempah rahasia, dibakar dengan olesan karamel madu hitam.",
    tag: "Favorit",
    tagType: "favorit",
    details: ["Iga Lembut 350g", "Madu Hitam Hutan", "Sambal Korek Asap"],
    iconType: "ribs",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80",
    category: "Signature"
  },
  {
    id: 101,
    name: "Sirloin Wagyu Asap",
    price: "Rp 395.000",
    description: "Sirloin wagyu premium diasap dengan kayu kopi selama 2 jam, disajikan dengan kentang purée truffle.",
    tag: "Signature",
    tagType: "signature",
    details: ["300g Wagyu", "Saus Truffle", "Kentang Purée"],
    iconType: "steak",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80",
    category: "Signature"
  },
  {
    id: 102,
    name: "Ribeye Black Angus",
    price: "Rp 345.000",
    description: "Daging ribeye Black Angus dipanggang di atas bara kayu kopi dengan kematangan medium-rare.",
    tag: "Premium",
    tagType: "premium",
    details: ["350g Black Angus", "Garlic Butter", "Sayuran"],
    iconType: "steak",
    image: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?w=600&q=80",
    category: "Signature"
  },
  {
    id: 103,
    name: "Bebek Asap Karamel",
    price: "Rp 185.000",
    description: "Bebek muda diasap lambat dengan kayu apel dan dilapisi glaze jeruk madu.",
    tag: "Favorit",
    tagType: "favorit",
    details: ["Bebek Asap", "Glaze Jeruk", "Nasi Rempah"],
    iconType: "chicken",
    image: "https://images.unsplash.com/photo-1642231877874-ce3e205f39c0?w=600&q=80",
    category: "Signature"
  },
  {
    id: 104,
    name: "Kambing Bakar Madu",
    price: "Rp 215.000",
    description: "Potongan daging kambing muda empuk dibakar dengan bumbu rempah dan madu hutan.",
    tag: "Favorit",
    tagType: "favorit",
    details: ["Daging Kambing 300g", "Madu Hutan", "Sambal Kecap"],
    iconType: "ribs",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80",
    category: "Signature"
  },
  // Seafood (5 items)
  {
    id: 3,
    name: "Salmon Asap Kayu",
    price: "Rp 195.000",
    description: "Fillet salmon Atlantik segar yang diasap lambat menggunakan kayu apel untuk aroma buah yang lembut.",
    tag: "Premium",
    tagType: "premium",
    details: ["Salmon Atlantik 200g", "Saus Honey Mustard", "Sayuran Panggang"],
    iconType: "salmon",
    image: "https://images.unsplash.com/photo-1676300185165-3f543c1fcb72?w=600&q=80",
    category: "Seafood"
  },
  {
    id: 201,
    name: "Kakap Bakar Bumbu Bali",
    price: "Rp 165.000",
    description: "Kakap merah segar dipanggang dengan olesan bumbu Bali otentik dan disajikan dengan sambal matah.",
    tag: "Rekomendasi",
    tagType: "rekomendasi",
    details: ["Kakap Merah", "Bumbu Bali", "Sambal Matah"],
    iconType: "fish",
    image: "https://images.pexels.com/photos/31029753/pexels-photo-31029753.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Seafood"
  },
  {
    id: 202,
    name: "Kepiting Asap Kayu",
    price: "Rp 285.000",
    description: "Kepiting bakau segar dibumbui rempah kelapa kasar dan diasap dengan sabut kelapa alami.",
    tag: "Premium",
    tagType: "premium",
    details: ["Kepiting 500g", "Rempah Kelapa", "Sambal Petis"],
    iconType: "crab",
    image: "https://images.unsplash.com/photo-1710508852956-f1eba75d7580?w=600&q=80",
    category: "Seafood"
  },
  {
    id: 203,
    name: "Cumi Bakar Kecap Asap",
    price: "Rp 125.000",
    description: "Cumi segar dibakar dengan saus kecap manis pedas beraroma asap kelapa.",
    tag: "Favorit",
    tagType: "favorit",
    details: ["Cumi Segar", "Kecap Manis Pedas", "Aroma Kelapa"],
    iconType: "squid",
    image: "https://images.pexels.com/photos/15387326/pexels-photo-15387326.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Seafood"
  },
  {
    id: 204,
    name: "Udang Galah Bakar Mentega",
    price: "Rp 195.000",
    description: "Udang galah tangkapan segar dibakar dengan garlic butter hangat dan perasan jeruk nipis.",
    tag: "Premium",
    tagType: "premium",
    details: ["Udang Galah", "Garlic Butter", "Saus Lemon"],
    iconType: "shrimp",
    image: "https://images.unsplash.com/photo-1625943555419-56a2cb596640?w=600&q=80",
    category: "Seafood"
  },
  // Ayam & Unggas (5 items)
  {
    id: 4,
    name: "Ayam Asap Madu",
    price: "Rp 145.000",
    description: "Setengah ekor ayam organik yang dimarinasi rempah pegunungan, diasap selama 4 jam hingga meresap.",
    tag: "Favorit",
    tagType: "favorit",
    details: ["Ayam Organik", "Glace Madu Hutan", "Sambal Matah Kecombrang"],
    iconType: "chicken",
    image: "https://images.pexels.com/photos/5704254/pexels-photo-5704254.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Ayam & Unggas"
  },
  {
    id: 301,
    name: "Sate Ayam Asap",
    price: "Rp 85.000",
    description: "Sate ayam fillet tebal diasap dengan kayu manis, disajikan dengan saus kacang kental khas Solo.",
    tag: "Klasik",
    tagType: "klasik",
    details: ["10 Tusuk Fillet", "Saus Kacang", "Lontong"],
    iconType: "chicken",
    image: "https://images.pexels.com/photos/37076559/pexels-photo-37076559.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Ayam & Unggas"
  },
  {
    id: 302,
    name: "Ayam Bakar Taliwang",
    price: "Rp 115.000",
    description: "Ayam kampung utuh dibakar dengan bumbu pedas khas Taliwang Lombok.",
    tag: "Pedas",
    tagType: "pedas",
    details: ["Ayam Kampung", "Bumbu Taliwang", "Plecing Kangkung"],
    iconType: "chicken",
    image: "https://images.pexels.com/photos/37320454/pexels-photo-37320454.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Ayam & Unggas"
  },
  {
    id: 303,
    name: "Bebek Goreng Sambal Korek",
    price: "Rp 135.000",
    description: "Bebek muda diungkep rempah kemudian digoreng garing, disajikan dengan sambal korek panas.",
    tag: "Favorit",
    tagType: "favorit",
    details: ["Bebek Garing", "Sambal Korek", "Lalapan"],
    iconType: "chicken",
    image: "https://images.unsplash.com/photo-1645066803665-d16a79a21566?w=600&q=80",
    category: "Ayam & Unggas"
  },
  {
    id: 304,
    name: "Burung Dara Bakar Madu",
    price: "Rp 95.000",
    description: "Burung dara pilihan dimarinasi madu hutan dan dibakar di atas kayu kopi.",
    tag: "Unik",
    tagType: "unik",
    details: ["1 Ekor Dara", "Madu Hutan", "Saus Pedas"],
    iconType: "chicken",
    image: "https://images.pexels.com/photos/37095723/pexels-photo-37095723.jpeg",
    category: "Ayam & Unggas"
  },
  // Vegetarian (4 items)
  {
    id: 401,
    name: "Jamur Portobello Bakar",
    price: "Rp 95.000",
    description: "Jamur Portobello besar dibakar dengan siraman minyak zaitun herbal dan keju vegan meleleh.",
    tag: "Sehat",
    tagType: "sehat",
    details: ["Portobello", "Minyak Zaitun", "Keju Vegan"],
    iconType: "mushroom",
    image: "https://images.pexels.com/photos/5950444/pexels-photo-5950444.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Vegetarian"
  },
  {
    id: 402,
    name: "Terong Bakar Sambal Matah",
    price: "Rp 55.000",
    description: "Terong ungu segar dibakar di atas bara kayu, disiram sambal matah khas Bali yang segar dan pedas.",
    tag: "Segar",
    tagType: "segar",
    details: ["Terong Ungu", "Sambal Matah", "Bawang Goreng"],
    iconType: "mushroom",
    image: "https://images.pexels.com/photos/4294490/pexels-photo-4294490.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Vegetarian"
  },
  {
    id: 403,
    name: "Asparagus Panggang Keju Parmesan",
    price: "Rp 85.000",
    description: "Asparagus segar dipanggang dengan taburan keju parmesan dan perasan lemon, sederhana namun kaya rasa.",
    tag: "Sehat",
    tagType: "sehat",
    details: ["Asparagus Segar", "Keju Parmesan", "Perasan Lemon"],
    iconType: "mushroom",
    image: "https://images.pexels.com/photos/4050985/pexels-photo-4050985.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Vegetarian"
  },
  {
    id: 404,
    name: "Sate Jamur Tiram Asap",
    price: "Rp 75.000",
    description: "Sate jamur tiram segar diasap lambat dan disajikan dengan saus kecap pedas.",
    tag: "Sehat",
    tagType: "sehat",
    details: ["Jamur Tiram", "Kecap Pedas", "Aroma Asap"],
    iconType: "mushroom",
    image: "https://images.pexels.com/photos/7840856/pexels-photo-7840856.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Vegetarian"
  },
  // Minuman (4 items)
  {
    id: 501,
    name: "Bara Sunset Mocktail",
    price: "Rp 48.000",
    description: "Campuran segar jus jeruk, sirup delima merah, dan soda dingin dengan sensasi smoky rosemary.",
    tag: "Segar",
    tagType: "segar",
    details: ["Jeruk", "Soda", "Smoked Rosemary"],
    iconType: "drink",
    image: "https://images.unsplash.com/photo-1654922704274-cd34f165c5e7?w=600&q=80",
    category: "Minuman"
  },
  {
    id: 502,
    name: "Golden Ginger Elixir",
    price: "Rp 45.000",
    description: "Wedang jahe merah hangat diseduh madu hutan asli dan perasan jeruk nipis.",
    tag: "Hangat",
    tagType: "hangat",
    details: ["Jahe Merah", "Madu Hutan", "Jeruk Nipis"],
    iconType: "drink",
    image: "https://images.unsplash.com/photo-1631029098074-be99eb2b425c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2luZ2VyJTIwdGVhJTIwaG9uZXklMjBsaW1lfGVufDB8fDB8fHww",
    category: "Minuman"
  },
  {
    id: 503,
    name: "Es Kelapa Muda Madu",
    price: "Rp 40.000",
    description: "Air kelapa muda segar disajikan dengan serutan kelapa, madu hutan, dan es batu.",
    tag: "Klasik",
    tagType: "klasik",
    details: ["Kelapa Muda", "Madu Hutan", "Es Batu"],
    iconType: "drink",
    image: "https://plus.unsplash.com/premium_photo-1680497044033-5dc96f699b81?w=600&q=80",
    category: "Minuman"
  },
  {
    id: 504,
    name: "Kopi Bara Drip",
    price: "Rp 38.000",
    description: "Kopi Arabika gayo diseduh manual dengan metode drip di atas arang kopi aktif hangat.",
    tag: "Khas",
    tagType: "khas",
    details: ["Arabika Gayo", "Manual Drip", "Arang Aktif"],
    iconType: "drink",
    image: "https://images.unsplash.com/photo-1522675397120-8cb88c83ac16?w=600&q=80",
    category: "Minuman"
  }
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<"Signature" | "Seafood" | "Ayam & Unggas" | "Vegetarian" | "Minuman">("Signature");
  const [searchQuery, setSearchQuery] = useState("");

  const categories: Array<"Signature" | "Seafood" | "Ayam & Unggas" | "Vegetarian" | "Minuman"> = [
    "Signature", "Seafood", "Ayam & Unggas", "Vegetarian", "Minuman"
  ];

  const filteredDishes = allDishes.filter(
    (dish) =>
      dish.category === activeCategory &&
      dish.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      case "fish":
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
      case "crab":
        return (
          <svg className="w-12 h-12 text-ember-500 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" className="opacity-10" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        );
      case "squid":
        return (
          <svg className="w-12 h-12 text-ember-500 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" className="opacity-10" />
            <path d="M12 5c-1.5 0-2.5 1.5-2.5 3s1 3 2.5 3 2.5-1.5 2.5-3" />
          </svg>
        );
      case "shrimp":
        return (
          <svg className="w-12 h-12 text-ember-500 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" className="opacity-10" />
            <path d="M12 6c-2.5 0-4.5 2-4.5 4.5" />
          </svg>
        );
      case "mushroom":
        return (
          <svg className="w-12 h-12 text-ember-500 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 14c-2 0-3.5-1.5-3.5-3.5h7c0 2-1.5 3.5-3.5 3.5z" className="opacity-10" />
            <path d="M12 6c-2.5 0-4.5 2-4.5 4.5h9C16.5 8 14.5 6 12 6z" />
          </svg>
        );
      case "drink":
        return (
          <svg className="w-12 h-12 text-gold-500 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" className="opacity-10" />
            <path d="M7 5l1.5 13h7L17 5H7zM9 7h6" />
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
      case "rekomendasi":
        return "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
      case "sehat":
        return "bg-teal-500/10 text-teal-400 border border-teal-500/20";
      case "lokal":
        return "bg-blue-500/10 text-blue-400 border border-blue-500/20";
      case "ringan":
        return "bg-sky-500/10 text-sky-400 border border-sky-500/20";
      case "pedas":
        return "bg-red-500/10 text-red-400 border border-red-500/20";
      default:
        return "bg-charcoal-800 text-charcoal-300 border border-charcoal-700";
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-charcoal-950 text-charcoal-50 font-body">
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* Hero Section Menu */}
        <section className="relative pt-32 pb-16 bg-charcoal-950 overflow-hidden text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-20%,rgba(232,98,44,0.12),rgba(0,0,0,0))]" />
          <div className="relative z-10 max-w-4xl mx-auto px-4">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-charcoal-900 border border-charcoal-800 text-gold-500 text-xs font-semibold uppercase tracking-wider mb-4">
              <Flame className="w-4 h-4 text-[#E8622C] fill-[#E8622C]/20" />
              Menu Lengkap
            </div>

            {/* Heading */}
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-charcoal-50 mb-4 tracking-tight leading-tight">
              Setiap Hidangan, Satu Bara
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-ember-500 to-gold-500 mx-auto mb-6" />
            <p className="text-charcoal-200 text-sm sm:text-base font-light max-w-2xl mx-auto">
              Jelajahi seluruh koleksi menu grill dan sajian premium kami yang dimasak otentik di atas bara api kayu pilihan.
            </p>
          </div>
        </section>

        {/* Menu Listings & Filtering Section */}
        <section className="relative pb-24 bg-charcoal-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Controls Bar: Category Filter (Left) & Search (Right) */}
            <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center mb-10 pb-6 border-b border-charcoal-800/40">

              {/* Category Filter Tabs */}
              <div className="w-full lg:w-auto flex overflow-x-auto gap-2 pb-2 lg:pb-0 scrollbar-none [mask-image:linear-gradient(to_right,white_90%,transparent_100%)] lg:[mask-image:none]">
                {categories.map((category) => {
                  const isActive = activeCategory === category;
                  return (
                    <button
                      key={category}
                      onClick={() => {
                        setActiveCategory(category);
                        setSearchQuery("");
                      }}
                      className={`px-5 py-2.5 text-sm font-semibold font-heading rounded-full shrink-0 border transition-all duration-300 cursor-pointer ${isActive
                        ? "bg-[#E8622C] border-[#E8622C] text-charcoal-50 shadow-[0_0_15px_rgba(232,98,44,0.3)]"
                        : "bg-charcoal-900 border-charcoal-800 text-charcoal-300 hover:text-gold-500 hover:border-gold-500/20"
                        }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>

              {/* Search Input Box */}
              <div className="w-full lg:w-80 relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-charcoal-300 pointer-events-none">
                  <Search className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Cari menu di ${activeCategory}...`}
                  className="w-full pl-10 pr-4 py-2.5 bg-charcoal-900 border border-charcoal-800 rounded-lg text-charcoal-50 placeholder-charcoal-300 focus:outline-none focus:border-[#E8622C] transition-colors font-body text-sm"
                />
              </div>

            </div>

            {/* Grid List */}
            {filteredDishes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {filteredDishes.map((dish) => (
                  <div
                    key={dish.id}
                    className="group relative bg-charcoal-900 border border-charcoal-800/80 rounded-xl p-6 sm:p-8 hover:border-gold-500/30 transition-all duration-500 flex flex-col justify-between hover:shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1 overflow-hidden"
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
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-charcoal-800 group-hover:border-ember-500/30 transition-all duration-500 shrink-0 bg-charcoal-950">
                          <Image
                            src={dish.image}
                            alt={dish.name}
                            fill
                            sizes="80px"
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              const target = e.currentTarget as HTMLImageElement;
                              target.style.display = "none";
                              const fallback = target.nextElementSibling as HTMLElement | null;
                              if (fallback) fallback.style.display = "flex";
                            }}
                          />
                          <div
                            className="absolute inset-0 items-center justify-center text-ember-500 hidden"
                            aria-hidden="true"
                          >
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

                      <div className="mt-6 pt-6 border-t border-charcoal-950 flex flex-wrap gap-2">
                        {dish.details.map((detail, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 text-xs rounded bg-charcoal-950 text-charcoal-300 border border-charcoal-850"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#E8622C] via-ember-500 to-gold-500 group-hover:w-full transition-all duration-500" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-charcoal-900 border border-charcoal-800/40 rounded-xl">
                <Flame className="w-12 h-12 text-charcoal-300/40 mx-auto mb-4 animate-pulse" />
                <p className="text-charcoal-300 font-body text-base font-light">
                  Tidak ada menu &ldquo;{searchQuery}&rdquo; yang ditemukan di kategori {activeCategory}.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action Banner (to Reservation Section) */}
        <section className="bg-charcoal-900 border-t border-b border-charcoal-800 py-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(230,81,0,0.06),rgba(0,0,0,0))]" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-6">
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-charcoal-50 tracking-tight leading-tight">
              Siap Merasakan Kelezatan Bara Sejati?
            </h2>
            <p className="text-charcoal-200 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
              Tempat duduk sangat terbatas terutama pada akhir pekan. Amankan meja Anda sekarang sebelum kehabisan slot.
            </p>
            <div className="pt-2">
              <Link
                href="/#reservasi"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-gradient-to-r from-ember-600 to-ember-500 text-charcoal-50 font-heading font-bold tracking-wider hover:from-ember-500 hover:to-gold-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(230,81,0,0.4)] cursor-pointer text-sm sm:text-base"
              >
                <Calendar className="w-5 h-5" />
                Reservasi Meja Sekarang
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
