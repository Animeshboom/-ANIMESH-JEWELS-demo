import React, { useState, useEffect, useRef } from 'react'
import { Sparkles, ShieldCheck, Gem, RefreshCw, Lock } from 'lucide-react'
import { BRAND_CONFIG } from '../config/brand.config'

const PILLAR_ICONS = [Gem, ShieldCheck, RefreshCw, Lock]

export const TrustSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Content is dynamically loaded from BRAND_CONFIG (100% configurable for future verification)
  const pillars = BRAND_CONFIG.trustPillars

  return (
    <section
      id="trust"
      ref={sectionRef}
      className="relative bg-[#FFFDF7] text-[#080E1E] py-14 sm:py-36 border-b border-[#C8A45D]/25 transition-colors duration-500 overflow-hidden"
    >
      {/* Subtle Warm Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#C8A45D]/[0.04] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header: Shift from Storytelling to Confidence & Credibility */}
        <div
          className={`text-center max-w-2xl mx-auto space-y-3 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-[#C8A45D] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>05 / Pillars of Integrity</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-[0.04em] text-[#080E1E]">
            BUILT ON TRUST
          </h2>

          <p className="text-sm sm:text-base text-[#080E1E]/75 font-sans leading-relaxed pt-1">
            Exceptional jewellery deserves exceptional standards.
          </p>
        </div>

        {/* 
          FOUR PILLARS GRID
          Configurable claims loaded from brand.config.ts
          Clean ivory cards, champagne gold numbers, dark sapphire typography
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-10 sm:mt-20">
          {pillars.map((pillar, idx) => {
            const IconComponent = PILLAR_ICONS[idx % PILLAR_ICONS.length]
            const delays = ['delay-[100ms]', 'delay-[200ms]', 'delay-[300ms]', 'delay-[400ms]']
            const delayClass = delays[idx] || 'delay-[100ms]'

            return (
              <div
                key={pillar.number}
                className={`group relative bg-[#F7F1E5] border border-[#C8A45D]/30 hover:border-[#C8A45D] p-5 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#C8A45D]/15 ${delayClass} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Decorative Top Line */}
                <div className="w-8 h-[2px] bg-[#C8A45D]/40 group-hover:w-16 group-hover:bg-[#C8A45D] transition-all duration-500 mb-6" />

                <div>
                  {/* Number & Icon */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#C8A45D]/20">
                    <span className="font-serif text-2xl font-bold tracking-widest text-[#C8A45D]">
                      {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#FFFDF7] border border-[#C8A45D]/40 flex items-center justify-center text-[#C8A45D] group-hover:text-[#080E1E] group-hover:border-[#C8A45D] transition-colors">
                      <IconComponent className="w-4 h-4 stroke-[1.75]" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="pt-5 space-y-1">
                    <h3 className="font-serif text-lg text-[#080E1E] tracking-wide leading-snug group-hover:text-[#C8A45D] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] uppercase tracking-wider text-[#C8A45D] font-semibold">
                      {pillar.subtitle}
                    </p>
                  </div>

                  {/* Configurable Description */}
                  <p className="text-xs text-[#080E1E]/75 leading-relaxed font-sans mt-3">
                    {pillar.description}
                  </p>
                </div>

                {/* Verification Badge */}
                {pillar.certificationCode && (
                  <div className="mt-6 pt-3 border-t border-[#C8A45D]/20 flex items-center justify-between text-[10px] text-[#080E1E]/60 font-mono">
                    <span>ASSURANCE:</span>
                    <span className="text-[#C8A45D] font-semibold">{pillar.certificationCode}</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
