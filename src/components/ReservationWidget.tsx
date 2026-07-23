"use client";

import React, { useState } from "react";
import { Calendar as CalendarIcon, Users, Clock, Phone, User, CheckCircle, ShieldCheck } from "lucide-react";

interface ReservationData {
  name: string;
  phone: string;
  date: string;
  guests: number;
  timeSlot: string;
}

const getOperationalHours = (dateString: string) => {
  if (!dateString) return null;
  const parts = dateString.split("-");
  if (parts.length < 3) return null;
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);
  const date = new Date(year, month, day);
  const dayOfWeek = date.getDay(); // 0 is Sunday, 6 is Saturday
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
  if (isWeekend) {
    return {
      open: "12:00",
      close: "23:00",
      lastOrder: "22:15",
      label: "Sabtu - Minggu: 12:00 - 23:00 WIB (order terakhir 22:15)"
    };
  } else {
    return {
      open: "12:00",
      close: "22:00",
      lastOrder: "21:15",
      label: "Senin - Jumat: 12:00 - 22:00 WIB (order terakhir 21:15)"
    };
  }
};

const checkTimeSlotAvailability = (time: string, dateString: string) => {
  if (!time || !dateString) return null;

  const parts = time.split(":");
  if (parts.length < 2) return null;
  const hour = parseInt(parts[0], 10);
  const minute = parseInt(parts[1], 10);
  const totalMinutes = hour * 60 + minute;

  const op = getOperationalHours(dateString);
  if (!op) return null;

  const openParts = op.open.split(":");
  const lastParts = op.lastOrder.split(":");
  const openLimit = parseInt(openParts[0], 10) * 60 + parseInt(openParts[1], 10);
  const lastLimit = parseInt(lastParts[0], 10) * 60 + parseInt(lastParts[1], 10);

  if (totalMinutes < openLimit || totalMinutes > lastLimit) {
    return { available: false, message: "Di luar jam operasional" };
  }

  // Peak dinner slots: 19:00 - 19:45 is fully booked
  if (totalMinutes >= 19 * 60 && totalMinutes <= 19 * 60 + 45) {
    return { available: false, message: "Penuh, coba jam lain" };
  }

  return { available: true, message: "Tersedia" };
};

export default function ReservationWidget() {
  const [formData, setFormData] = useState<ReservationData>({
    name: "",
    phone: "",
    date: "",
    guests: 1,
    timeSlot: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [errors, setErrors] = useState<Partial<ReservationData>>({});

  const opHours = getOperationalHours(formData.date);
  const minTime = opHours ? opHours.open : "12:00";
  const maxTime = opHours ? opHours.lastOrder : "21:15";
  const availability = checkTimeSlotAvailability(formData.timeSlot, formData.date);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };

    if (name === "date") {
      // Clear time slot if it is no longer within the valid operational hours
      if (formData.timeSlot) {
        const op = getOperationalHours(value);
        if (op) {
          const parts = formData.timeSlot.split(":");
          if (parts.length >= 2) {
            const timeVal = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
            const openParts = op.open.split(":");
            const lastParts = op.lastOrder.split(":");
            const minLimit = parseInt(openParts[0], 10) * 60 + parseInt(openParts[1], 10);
            const maxLimit = parseInt(lastParts[0], 10) * 60 + parseInt(lastParts[1], 10);
            if (timeVal < minLimit || timeVal > maxLimit) {
              newFormData.timeSlot = "";
            }
          }
        }
      }
    }

    setFormData(newFormData);
    if (errors[name as keyof ReservationData]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const setGuests = (count: number) => {
    if (count >= 1 && count <= 12) {
      setFormData({ ...formData, guests: count });
    }
  };

  const validateForm = () => {
    const newErrors: Partial<ReservationData> = {};
    if (!formData.name.trim()) newErrors.name = "Nama lengkap wajib diisi";
    if (!formData.phone.trim()) newErrors.phone = "Nomor WhatsApp wajib diisi";
    if (!formData.date) newErrors.date = "Tanggal reservasi wajib dipilih";

    if (!formData.timeSlot) {
      newErrors.timeSlot = "Waktu reservasi wajib dipilih";
    } else if (formData.date) {
      const avail = checkTimeSlotAvailability(formData.timeSlot, formData.date);
      if (avail && !avail.available) {
        newErrors.timeSlot = avail.message;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = "KB-" + Math.floor(1000 + Math.random() * 9000);
      setBookingId(generatedId);
      setShowModal(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      date: "",
      guests: 2,
      timeSlot: ""
    });
    setShowModal(false);
  };

  return (
    <section id="reservasi" className="relative py-24 bg-charcoal-950 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-ember-500/5 rounded-full blur-[80px] z-0 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-gold-500/5 rounded-full blur-[80px] z-0 pointer-events-none" />

      {/* Structured grid background for widget area */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-charcoal-900 border border-charcoal-800 text-gold-500 text-xs font-semibold uppercase tracking-wider mb-4">
            <Clock className="w-4 h-4 text-ember-500" />
            Eksklusif & Terbatas
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-charcoal-50 mb-4">
            Amankan Meja Anda
          </h2>
          <p className="text-charcoal-200 text-base sm:text-lg font-light font-body">
            Reservasi meja Anda sekarang untuk merasakan petualangan kuliner panggang kayu bakar mewah yang disajikan langsung di hadapan Anda.
          </p>
        </div>

        {/* Reservation Card Container */}
        <div className="bg-charcoal-900 border border-charcoal-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-semibold tracking-wide text-charcoal-200 block">
                  Nama Lengkap
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-charcoal-300">
                    <User className="w-5 h-5 text-ember-500" />
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Masukkan nama lengkap Anda"
                    className="w-full pl-10 pr-4 py-3 bg-charcoal-950 border border-charcoal-800 rounded text-charcoal-50 placeholder-charcoal-300 focus:outline-none focus:border-ember-500 transition-colors font-body text-sm sm:text-base"
                  />
                </div>
                {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
              </div>

              {/* Phone / Whatsapp */}
              <div className="space-y-2">
                <label className="text-sm font-semibold tracking-wide text-charcoal-200 block">
                  Nomor WhatsApp
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-charcoal-300">
                    <Phone className="w-5 h-5 text-ember-500" />
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Contoh: 08123456789"
                    className="w-full pl-10 pr-4 py-3 bg-charcoal-950 border border-charcoal-800 rounded text-charcoal-50 placeholder-charcoal-300 focus:outline-none focus:border-ember-500 transition-colors font-body text-sm sm:text-base"
                  />
                </div>
                {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="text-sm font-semibold tracking-wide text-charcoal-200 block">
                  Tanggal Reservasi
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-charcoal-300 pointer-events-none">
                    <CalendarIcon className="w-5 h-5 text-ember-500" />
                  </span>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full pl-10 pr-4 py-3 bg-charcoal-950 border border-charcoal-800 rounded text-charcoal-50 focus:outline-none focus:border-ember-500 transition-colors font-body text-sm sm:text-base [color-scheme:dark]"
                  />
                </div>
                {errors.date && <p className="text-xs text-red-500">{errors.date}</p>}
              </div>

              {/* Pilih Jam Kedatangan */}
              <div className="space-y-2">
                <label className="text-sm font-semibold tracking-wide text-charcoal-200 block">
                  Pilih Jam Kedatangan
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-charcoal-300 pointer-events-none">
                    <Clock className="w-5 h-5 text-ember-500" />
                  </span>
                  <input
                    type="time"
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleInputChange}
                    disabled={!formData.date}
                    min={minTime}
                    max={maxTime}
                    className="w-full pl-10 pr-4 py-3 bg-charcoal-950 border border-charcoal-800 rounded text-charcoal-50 focus:outline-none focus:border-ember-500 transition-colors font-body text-sm sm:text-base [color-scheme:dark] disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div className="flex justify-between items-center px-1 min-h-[1.25rem]">
                  {!formData.date ? (
                    <p className="text-xs text-red-500/80">Pilih tanggal terlebih dahulu.</p>
                  ) : (
                    <>
                      <p className="text-[11px] text-charcoal-300 leading-normal">
                        {opHours?.label}
                      </p>
                      {availability && (
                        <span className={`text-xs font-semibold shrink-0 ${availability.available ? "text-emerald-400" : "text-red-400"}`}>
                          {availability.available ? "✓ Tersedia" : `✗ ${availability.message}`}
                        </span>
                      )}
                    </>
                  )}
                </div>
                {errors.timeSlot && <p className="text-xs text-red-500">{errors.timeSlot}</p>}
              </div>

              {/* Guest Count Selector */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold tracking-wide text-charcoal-200 block">
                  Jumlah Orang (Tamu)
                </label>
                <div className="flex items-center justify-between bg-charcoal-950 border border-charcoal-800 rounded px-4 py-2">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-ember-500" />
                    <span className="text-charcoal-50 font-medium font-body text-sm sm:text-base">
                      {formData.guests} Orang
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setGuests(formData.guests - 1)}
                      className="w-8 h-8 rounded bg-charcoal-900 border border-charcoal-800 text-charcoal-200 hover:bg-charcoal-800 hover:text-gold-500 transition-colors flex items-center justify-center font-bold"
                    >
                      -
                    </button>
                    <button
                      type="button"
                      onClick={() => setGuests(formData.guests + 1)}
                      className="w-8 h-8 rounded bg-charcoal-900 border border-charcoal-800 text-charcoal-200 hover:bg-charcoal-800 hover:text-gold-500 transition-colors flex items-center justify-center font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded bg-gradient-to-r from-ember-600 via-ember-500 to-gold-500 text-charcoal-50 font-heading text-lg font-bold tracking-wider hover:from-ember-500 hover:to-gold-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(230,81,0,0.4)] cursor-pointer"
              >
                {isSubmitting ? "Memproses Reservasi..." : "Konfirmasi Reservasi"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-charcoal-900 border border-gold-500/30 rounded-2xl w-full max-w-md p-6 sm:p-8 shadow-2xl relative text-center scale-up animate-fade-in gold-glow">

            {/* Header Success Animation */}
            <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mx-auto mb-6 text-gold-500 animate-pulse">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-charcoal-50 mb-2">
              Reservasi Berhasil
            </h3>

            <p className="text-charcoal-200 text-sm font-light font-body mb-6">
              Kode reservasi Anda telah diterbitkan. Silakan simpan detail di bawah ini.
            </p>

            {/* Booking Ticket Card */}
            <div className="bg-charcoal-950 border border-charcoal-800 rounded-xl p-5 mb-8 text-left space-y-4 font-body relative overflow-hidden">
              {/* Decor slice */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold-500/5 to-transparent pointer-events-none" />

              <div className="flex justify-between items-center border-b border-charcoal-800 pb-3">
                <span className="text-[10px] tracking-widest text-charcoal-300 uppercase font-semibold">ID BOOKING</span>
                <span className="font-heading font-bold text-gold-500 tracking-wider">{bookingId}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-[10px] text-charcoal-300 uppercase block mb-0.5">Nama</span>
                  <span className="text-charcoal-50 font-medium truncate block">{formData.name}</span>
                </div>
                <div>
                  <span className="text-[10px] text-charcoal-300 uppercase block mb-0.5">WhatsApp</span>
                  <span className="text-charcoal-50 font-medium block">{formData.phone}</span>
                </div>
                <div>
                  <span className="text-[10px] text-charcoal-300 uppercase block mb-0.5">Tanggal</span>
                  <span className="text-charcoal-50 font-medium block">
                    {new Date(formData.date).toLocaleDateString("id-ID", {
                      weekday: "short",
                      day: "numeric",
                      month: "short",
                      year: "numeric"
                    })}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-charcoal-300 uppercase block mb-0.5">Waktu & Tamu</span>
                  <span className="text-charcoal-50 font-medium block">
                    {formData.timeSlot} • {formData.guests} Orang
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-charcoal-800 flex items-center gap-2 text-[10px] text-charcoal-200">
                <ShieldCheck className="w-4 h-4 text-gold-500 shrink-0" />
                <span>Tunjukkan tiket ini saat kedatangan di resepsionis.</span>
              </div>
            </div>

            {/* CTA Close */}
            <button
              onClick={resetForm}
              className="w-full py-3 rounded bg-charcoal-800 hover:bg-charcoal-700 text-gold-500 hover:text-gold-400 font-heading font-bold border border-charcoal-700 hover:border-gold-500/20 transition-all duration-300 cursor-pointer"
            >
              Tutup & Selesai
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
