import React from 'react'
import { BRAND_CONFIG } from '../config/brand.config'
import showroomImg from '../assets/showroom-hero.jpg'
import { Sparkles, ArrowRight, Calendar } from 'lucide-react'

// Subtle scintillation glints on the background chandelier and vitrine displays
const GLINTS = [
  { id: 1, top: '24%', left: '50%', size: 'w-3.5 h-3.5', delay: '0s', duration: '3s' },
  { id: 2, top: '32%', left: '48%', size: 'w-3 h-3', delay: '1.2s', duration: '3.5s' },
  { id: 3, top: '48%', left: '16%', size: 'w-3 h-3', delay: '0.6s', duration: '3.2s' },
  { id: 4, top: '48%', left: '84%', size: 'w-3 h-3', delay: '1.8s', duration: '3.8s' },
]

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="relative bg-[#080E1E] text-[#FFFDF7] py-16 sm:py-36 border-b border-[#C8A45D]/30 overflow-hidden">
      {/* 
        CLEAR, BEAUTIFULLY ILLUMINATED SHOWROOM BACKGROUND
        Much more visible with warm luxury boutique lighting
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Salon Interior Image - High Clarity & Warm Radiance */}
        <img
          src={showroomImg}
          alt="ANIMESH JEWELS Salon Atmosphere"
          className="w-full h-full object-cover object-center transform scale-[1.02]"
          style={{
            filter: 'brightness(0.92) contrast(1.08) saturate(1.15)',
          }}
        />

        {/* Chandelier & Center Boutique Warm Gold Luminescence Aura */}
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C8A45D]/[0.22] rounded-full blur-[140px] animate-pulse" />

        {/* Ambient Radial Spotlight illuminating the showroom depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle 800px at 50% 45%, rgba(8, 14, 30, 0.45) 0%, rgba(8, 14, 30, 0.78) 70%, rgba(8, 14, 30, 0.94) 100%)',
          }}
        />

        {/* Soft Vignettes at top & bottom for smooth transitions between sections */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#080E1E] to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#080E1E] to-transparent" />
      </div>

      {/* Subtle Scintillation Glints on Background Chandelier */}
      <div className="absolute inset-0 pointer-events-none z-10" aria-hidden="true">
        {GLINTS.map((glint) => (
          <div
            key={glint.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              top: glint.top,
              left: glint.left,
              animationDelay: glint.delay,
              animationDuration: glint.duration,
            }}
          >
            <div className="relative flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-[#D4AF37] opacity-25" />
              <Sparkles className={`${glint.size} text-[#FFFDF7] drop-shadow-[0_0_8px_rgba(212,175,55,0.9)] animate-pulse`} />
            </div>
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-8 z-20">
        <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-[#C8A45D] font-semibold bg-[#080E1E]/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#C8A45D]/40 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>A Bespoke Royal Legacy</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium tracking-[0.04em] text-[#FFFDF7] leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          CRAFTED FOR ETERNITY, <br />
          <span className="font-editorial italic text-[#D4AF37] font-light">
            Destined for You.
          </span>
        </h2>

        <p className="max-w-xl mx-auto text-sm sm:text-base md:text-lg text-[#F4EFE6] font-sans leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
          Step into a world where rare gemstones meet sovereign Karigari. Begin crafting your personal heirloom with {BRAND_CONFIG.brandName}.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#collections"
            className="luxury-btn-shine w-full sm:w-auto px-9 py-4 bg-[#C8A45D] text-[#080E1E] text-xs font-semibold uppercase tracking-[0.22em] hover:bg-[#D4AF37] transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#C8A45D]/30 cursor-pointer rounded"
          >
            <span>Explore Collections</span>
            <ArrowRight className="w-4 h-4 text-[#080E1E]" />
          </a>

          <a
            href="#store"
            className="w-full sm:w-auto px-9 py-4 border border-[#C8A45D]/80 bg-[#080E1E]/80 backdrop-blur-md text-[#FFFDF7] text-xs uppercase tracking-[0.22em] hover:border-[#D4AF37] hover:bg-[#0C182F] transition-all flex items-center justify-center gap-2 cursor-pointer rounded shadow-xl"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C8A45D]" />
            <span>Book Private Consultation</span>
          </a>
        </div>
      </div>
    </section>
  )
}
