import React, { useState, useEffect, useRef } from 'react'
import showroomBg from '../assets/showroom-hero.jpg'
import showroomMobileBg from '../assets/showroom-hero-mobile.jpg'
import { Sparkles } from 'lucide-react'

// Strategic coordinates of natural chandelier crystals
const SCINTILLATION_GLINTS = [
  { id: 1, top: '16%', left: '50%', size: 'w-4 h-4', delay: '0s', duration: '2.8s' },
  { id: 2, top: '24%', left: '47%', size: 'w-3.5 h-3.5', delay: '1.2s', duration: '3.4s' },
  { id: 3, top: '32%', left: '52%', size: 'w-4 h-4', delay: '2.0s', duration: '3.8s' },
  { id: 4, top: '40%', left: '49%', size: 'w-3 h-3', delay: '0.6s', duration: '3.1s' },
  { id: 5, top: '48%', left: '7%', size: 'w-3.5 h-3.5', delay: '1.8s', duration: '3.6s' },
  { id: 6, top: '54%', left: '16%', size: 'w-3 h-3', delay: '2.4s', duration: '4.0s' },
  { id: 7, top: '48%', left: '93%', size: 'w-3.5 h-3.5', delay: '1.4s', duration: '3.5s' },
  { id: 8, top: '54%', left: '84%', size: 'w-3 h-3', delay: '2.6s', duration: '4.2s' },
  { id: 9, top: '82%', left: '22%', size: 'w-4 h-4', delay: '0.8s', duration: '3.2s' },
  { id: 10, top: '82%', left: '78%', size: 'w-4 h-4', delay: '1.9s', duration: '3.7s' },
]

// Ambient golden floating bokeh/dust motes (Desktop only)
const FLOATING_MOTES = [
  { id: 1, top: '25%', left: '30%', sizePx: 8, delay: '0s', duration: '6s', opacity: 0.35 },
  { id: 2, top: '40%', left: '70%', sizePx: 10, delay: '1.5s', duration: '7.5s', opacity: 0.4 },
  { id: 3, top: '60%', left: '20%', sizePx: 6, delay: '3s', duration: '5.5s', opacity: 0.3 },
  { id: 4, top: '35%', left: '85%', sizePx: 8, delay: '2s', duration: '8s', opacity: 0.35 },
  { id: 5, top: '50%', left: '50%', sizePx: 12, delay: '4s', duration: '6.8s', opacity: 0.25 },
  { id: 6, top: '75%', left: '40%', sizePx: 8, delay: '0.5s', duration: '7.2s', opacity: 0.3 },
  { id: 7, top: '20%', left: '60%', sizePx: 6, delay: '2.5s', duration: '6.2s', opacity: 0.35 },
]

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

  // Track scroll progress within the Hero section
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const progress = Math.min(
        Math.max(-rect.top / (rect.height - windowHeight * 0.35), 0),
        1
      )
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Interactive subtle mouse parallax spotlight (Only on devices with fine pointer / hover)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return
    if (
      typeof window !== 'undefined' &&
      !window.matchMedia('(hover: hover) and (pointer: fine)').matches
    ) {
      return
    }
    const rect = heroRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePos({ x, y })
  }

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative h-[78vh] min-h-[560px] max-h-[760px] md:h-[88vh] md:min-h-[88vh] lg:min-h-screen lg:h-screen lg:max-h-none bg-[#141012] text-[#FFFDF7] flex flex-col justify-end pb-6 sm:pb-8 overflow-hidden select-none"
    >
      {/* 
        CRISP, CLEAR SHOWROOM BACKGROUND (Responsive Mobile & Desktop)
      */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <picture className="w-full h-full block">
          <source media="(max-width: 768px)" srcSet={showroomMobileBg} />
          <img
            src={showroomBg}
            alt="ANIMESH JEWELS Flagship Salon"
            className="w-full h-full object-cover object-top sm:object-center transform transition-transform duration-700 ease-out"
            style={{
              transform: `scale(${1 + scrollProgress * 0.05 + (50 - mousePos.y) * 0.0003}) translate(${(50 - mousePos.x) * 0.1}px, ${(50 - mousePos.y) * 0.06}px)`,
              filter: 'brightness(1.02) contrast(1.06) saturate(1.06)',
            }}
          />
        </picture>

        {/* Dynamic Interactive Ambient Spotlight (Desktop Only) */}
        <div
          className="absolute inset-0 transition-opacity duration-500 ease-out hidden md:block"
          style={{
            background: `radial-gradient(circle 460px at ${mousePos.x}% ${mousePos.y}%, rgba(212, 175, 55, 0.16), transparent 75%)`,
          }}
        />

        {/* Chandelier Warm Center Luminescence Aura */}
        <div className="absolute top-[18%] sm:top-[20%] left-[50%] -translate-x-1/2 w-[340px] sm:w-[600px] lg:w-[720px] h-[300px] sm:h-[460px] bg-[#C8A45D]/[0.12] rounded-full blur-[90px] sm:blur-[140px] pointer-events-none" />

        {/* Soft Vignettes for smooth top header blending and bottom transition */}
        <div className="absolute top-0 inset-x-0 h-24 sm:h-28 bg-gradient-to-b from-[#141012]/85 via-[#141012]/30 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-36 sm:h-44 bg-gradient-to-t from-[#141012]/90 via-[#141012]/50 to-transparent" />
      </div>

      {/* 
        NATURAL JEWELLERY SCINTILLATION EFFECTS
        Sparkling golden stars twinkling organically on crystal chandelier
      */}
      <div className="absolute inset-0 pointer-events-none z-10" aria-hidden="true">
        {SCINTILLATION_GLINTS.slice(0, 3).map((glint) => (
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
              <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-[#D4AF37] opacity-25" />
              <Sparkles className={`${glint.size} text-[#FFFDF7] drop-shadow-[0_0_8px_rgba(212,175,55,0.9)] animate-pulse`} />
            </div>
          </div>
        ))}

        {/* Additional side vitrine glints (Desktop/Tablet only) */}
        {SCINTILLATION_GLINTS.slice(3).map((glint) => (
          <div
            key={glint.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 hidden md:block"
            style={{
              top: glint.top,
              left: glint.left,
              animationDelay: glint.delay,
              animationDuration: glint.duration,
            }}
          >
            <div className="relative flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-[#D4AF37] opacity-25" />
              <Sparkles className={`${glint.size} text-[#FFFDF7] drop-shadow-[0_0_9px_rgba(212,175,55,0.95)] animate-pulse`} />
            </div>
          </div>
        ))}

        {/* Ambient floating golden dust/bokeh motes (Desktop only) */}
        <div className="hidden md:block">
          {FLOATING_MOTES.map((mote) => (
            <div
              key={mote.id}
              className="absolute rounded-full bg-[#E8CF82] blur-[1px] animate-pulse"
              style={{
                top: mote.top,
                left: mote.left,
                width: `${mote.sizePx}px`,
                height: `${mote.sizePx}px`,
                opacity: mote.opacity,
                animationDelay: mote.delay,
                animationDuration: mote.duration,
                boxShadow: '0 0 8px rgba(212, 175, 55, 0.7)',
              }}
            />
          ))}
        </div>
      </div>

      {/* 
        COMPACT LUXURY MOBILE HERO CONTENT
        (Controlled typography, perfect line-height, and zero horizontal overflow)
      */}
      <div className="relative z-20 w-full max-w-xl mx-auto px-5 sm:px-6 text-center space-y-3 pb-2">
        <div className="space-y-1">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#C8A45D] font-mono font-semibold block">
            ANIMESH JEWELS • HAUTE JOAILLERIE
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FFFDF7] tracking-wide leading-tight drop-shadow-md">
            CRAFTED FOR ETERNITY.
          </h1>
          <p className="text-xs sm:text-sm text-[#FFFDF7]/80 font-sans tracking-wide max-w-sm mx-auto line-clamp-2">
            Private appointments • Sovereign fine jewellery & high solitaires
          </p>
        </div>

        {/* Primary & Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 pt-1">
          <a
            href="#store"
            className="w-full sm:w-auto px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C8A45D] to-[#996515] text-[#080E1E] text-xs font-mono font-semibold uppercase tracking-[0.18em] shadow-lg shadow-[#C8A45D]/25 hover:shadow-xl active:scale-[0.98] transition-all flex items-center justify-center gap-1.5"
          >
            <span>BOOK PRIVATE VIEWING</span>
          </a>

          <a
            href="#signature"
            className="w-full sm:w-auto px-6 py-2.5 sm:py-3 rounded-xl bg-[#080E1E]/60 backdrop-blur-md border border-[#C8A45D]/60 text-[#FFFDF7] hover:border-[#C8A45D] hover:text-[#C8A45D] text-xs font-mono font-medium uppercase tracking-[0.18em] transition-all flex items-center justify-center gap-1.5"
          >
            <span>EXPLORE COLLECTION</span>
          </a>
        </div>

        {/* Minimal Scroll Cue */}
        <div className="pt-2 flex justify-center">
          <a
            href="#market"
            className="opacity-70 hover:opacity-100 transition-opacity p-1"
            aria-label="Scroll down to view live rates"
          >
            <div className="w-[1.5px] h-6 bg-[#C8A45D]/40 rounded-full relative overflow-hidden">
              <div className="w-full bg-[#D4AF37] animate-scroll-line" />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
