import React from 'react'
import { BRAND_CONFIG } from '../config/brand.config'
import showroomImg from '../assets/showroom-hero.jpg'
import { Sparkles, MapPin, Clock, Phone, Calendar, Mail, ArrowRight } from 'lucide-react'

export const StoreExperienceSection: React.FC = () => {
  return (
    <section
      id="store"
      className="relative bg-[#F4EFE6] text-[#141012] py-14 sm:py-32 border-b border-[#C8A45D]/25 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#C8A45D] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>06 / The Flagship Salon</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-[0.04em] text-[#141012]">
            VISIT ANIMESH JEWELS
          </h2>
          <p className="text-sm sm:text-base text-[#141012]/75 font-sans leading-relaxed">
            Immerse yourself in our private VIP viewing salon. Designed for intimate bridal consultations and bespoke heirloom commissions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10 sm:mt-16 items-stretch">
          {/* Left: Boutique Ambience / Virtual Tour with Showroom Photo */}
          <div className="lg:col-span-7 bg-[#141012] text-[#FFFDF7] border border-[#C8A45D]/40 rounded-2xl p-5 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            {/* Showroom background thumbnail */}
            <div className="absolute inset-0 pointer-events-none opacity-50 group-hover:opacity-65 transition-opacity duration-700">
              <img
                src={showroomImg}
                alt="Flagship Boutique Interior"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141012] via-[#141012]/60 to-transparent" />
            </div>

            <div className="relative z-10 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-[#C8A45D]">
              <span>Chanakyapuri, New Delhi</span>
              <span>The Imperial Salon</span>
            </div>

            <div className="relative z-10 my-auto py-16 text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#141012]/90 border border-[#C8A45D]/80 flex items-center justify-center shadow-lg">
                <MapPin className="w-6 h-6 text-[#C8A45D]" />
              </div>
              <div className="font-serif text-2xl text-[#FFFDF7]">
                {BRAND_CONFIG.storeAddress.title}
              </div>
              <div className="pt-2 text-xs text-[#C8A45D] font-medium">
                Champagne Hospitality • Private Vault Access • Master Gemologist on Site
              </div>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#C8A45D]/25 pt-4 text-xs text-[#FFFDF7]/80">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C8A45D]" />
                <span>{BRAND_CONFIG.storeAddress.hours}</span>
              </div>
              <a
                href={BRAND_CONFIG.storeAddress.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8A45D] hover:underline uppercase tracking-wider text-[11px] font-medium"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Right: Private Viewing Reservation Card */}
          <div className="lg:col-span-5 bg-[#FFFDF7] border border-[#C8A45D]/40 rounded-2xl p-5 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#C8A45D] font-semibold">
                By Invitation & Appointment
              </div>
              <h3 className="font-serif text-2xl text-[#141012]">
                Reserve Your Private Salon Viewing
              </h3>
              <p className="text-xs text-[#141012]/75 leading-relaxed font-sans">
                Experience one-on-one consultation with our master gemologists. Select from our guarded vault collection or discuss a bespoke bridal creation.
              </p>

              {/* Contact Quick Details */}
              <div className="space-y-2.5 pt-2 text-xs text-[#141012]/80">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C8A45D]" />
                  <span>{BRAND_CONFIG.phoneDisplay}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#C8A45D]" />
                  <span>{BRAND_CONFIG.email}</span>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="pt-8 space-y-3">
              <button
                onClick={() =>
                  alert(
                    'Appointment concierge demo module. Real booking system integrates in Phase 3.'
                  )
                }
                className="luxury-btn-shine w-full py-4 bg-[#C8A45D] text-[#141012] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#D4AF37] transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer rounded-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Appointment</span>
              </button>
              <a
                href={`https://wa.me/${BRAND_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 border border-[#C8A45D]/60 text-[#141012] text-xs uppercase tracking-[0.18em] hover:border-[#C8A45D] hover:bg-[#F4EFE6] transition-colors flex items-center justify-center gap-2 rounded-lg"
              >
                <span>WhatsApp Private Concierge</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C8A45D]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
