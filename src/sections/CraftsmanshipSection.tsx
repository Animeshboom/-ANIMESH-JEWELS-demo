import React, { useState, useEffect, useRef } from 'react'
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'
import { JEWELLERY_MEDIA_COLLECTION } from '../data/jewelleryMedia'
import { LuxuryMediaViewer } from '../components/common/LuxuryMediaViewer'

interface CraftStep {
  id: string
  stepNum: string
  title: string
  subhead: string
  description: string
  artisanMetric: string
}

const CRAFT_STEPS: CraftStep[] = [
  {
    id: 'step-01',
    stepNum: '01',
    title: 'PRECISION SETTING',
    subhead: 'Microscopic Claw Alignment',
    description:
      'Every diamond claw is sculpted under 40x magnification, aligning tension collets to guarantee maximum light reflection and eternal security across centuries.',
    artisanMetric: '0.15mm Micro-Tolerance',
  },
  {
    id: 'step-02',
    stepNum: '02',
    title: 'POLKI SELECTION',
    subhead: 'Syndicate Uncut Curation',
    description:
      'Our gemologists hand-evaluate thousands of uncut natural diamonds, accepting only the top 1% displaying exceptional clarity, fire, and flat-table brilliance.',
    artisanMetric: 'Top 1% Flawless Selection',
  },
  {
    id: 'step-03',
    stepNum: '03',
    title: 'HANDCRAFTED DETAIL',
    subhead: 'Generational Rajasthani Jadau',
    description:
      'Pure 24K gold foil (Kundan) is pressed around each gemstone by 5th-generation master karigars, backed by imperial Jaipur Gulabi Meenakari enamel artistry.',
    artisanMetric: '480 Dedicated Artisan Hours',
  },
  {
    id: 'step-04',
    stepNum: '04',
    title: 'MIRROR LUSTER POLISH',
    subhead: 'Multi-Stage Ultrasonic Finish',
    description:
      'Using natural walnut shell compounds and high-frequency ultrasonic baths, every millimeter of gold is buffed to an unblemished, sovereign mirror reflection.',
    artisanMetric: 'Triple-Stage Luster Polish',
  },
]

const TRANSFORMATION_PILLARS = [
  'MOLTEN GOLD',
  'DESIGN',
  'SETTING',
  'POLKI SELECTION',
  'POLISH',
  'MASTERPIECE',
]

export const CraftsmanshipSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Scroll detection to highlight active step as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      if (rect.top <= windowHeight * 0.4 && rect.bottom >= 0) {
        setIsVisible(true)
        const progress = Math.min(
          Math.max((-rect.top + windowHeight * 0.3) / (rect.height - windowHeight * 0.3), 0),
          0.99
        )
        const newIndex = Math.min(Math.floor(progress * CRAFT_STEPS.length), CRAFT_STEPS.length - 1)
        setActiveStepIndex(newIndex)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const activeStep = CRAFT_STEPS[activeStepIndex]
  const craftMedia = JEWELLERY_MEDIA_COLLECTION.atelierCraft
  const finishedMasterpiece = JEWELLERY_MEDIA_COLLECTION.signatureJadau

  return (
    <section
      id="craftsmanship"
      ref={sectionRef}
      className="relative bg-[#080E1E] text-[#FFFDF7] py-14 sm:py-36 border-b border-[#C8A45D]/30 transition-colors duration-500 overflow-hidden"
    >
      {/* Background Luminescence & Vault Ambiance */}
      <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-[#C8A45D]/[0.06] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#122347]/50 rounded-full blur-[160px] pointer-events-none" />

      {/* Decorative Hairline Top Border */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A45D]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto space-y-3 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-[#C8A45D] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>04 / Atelier Savoir-Faire</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-[0.04em] text-[#FFFDF7] leading-[1.15]">
            THE ART OF <br />
            <span className="text-[#C8A45D]">CRAFTSMANSHIP</span>
          </h2>

          <p className="text-sm sm:text-base text-[#FFFDF7]/80 font-sans leading-relaxed pt-1 max-w-2xl mx-auto">
            From molten gold to a masterpiece shaped by generations of Indian artistry.
          </p>
        </div>

        {/* 
          TRANSFORMATION PROCESS BAR
          MOLTEN GOLD → DESIGN → SETTING → POLKI SELECTION → POLISH → MASTERPIECE
        */}
        <div className="mt-12 py-3 px-4 bg-[#FFFDF7]/[0.04] border border-[#C8A45D]/30 rounded-full max-w-4xl mx-auto overflow-x-auto">
          <div className="flex items-center justify-between min-w-[620px] text-[10px] uppercase tracking-[0.2em] font-mono text-[#FFFDF7]/70 px-4">
            {TRANSFORMATION_PILLARS.map((stage, sIdx) => (
              <React.Fragment key={stage}>
                <span
                  className={`${
                    sIdx <= activeStepIndex + 1 ? 'text-[#C8A45D] font-bold' : 'text-[#FFFDF7]/40'
                  }`}
                >
                  {stage}
                </span>
                {sIdx < TRANSFORMATION_PILLARS.length - 1 && (
                  <span className="text-[#C8A45D]/40">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 
          CRAFTSMANSHIP STORYTELLING MAIN GRID
          Left: Stable Haute Video Stream (The Visual Focus)
          Right: Scroll-Driven Choreographed Steps (01 Precision Setting, 02 Polki Selection, etc.)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mt-10 sm:mt-20">
          {/* Left Column: Stable Atelier Karigari Video Stream */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] bg-[#0C182F] border-2 border-[#C8A45D]/60 p-4 sm:p-5 rounded-2xl shadow-2xl shadow-[#C8A45D]/15 group">
              {/* Corner Ornate Accents */}
              <div className="absolute -top-1.5 -left-1.5 w-5 h-5 border-t-2 border-l-2 border-[#C8A45D]" />
              <div className="absolute -top-1.5 -right-1.5 w-5 h-5 border-t-2 border-r-2 border-[#C8A45D]" />
              <div className="absolute -bottom-1.5 -left-1.5 w-5 h-5 border-b-2 border-l-2 border-[#C8A45D]" />
              <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5 border-b-2 border-r-2 border-[#C8A45D]" />

              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#FFFDF7]/80 pb-3 px-1 border-b border-[#C8A45D]/25">
                <span className="flex items-center gap-1.5 text-[#C8A45D] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D] animate-pulse" />
                  Atelier Karigari Reel
                </span>
                <span className="font-mono text-[#C8A45D]">JAIPUR VAULT</span>
              </div>

              {/* Main Crafts Video (Autoplays cleanly without covering text) */}
              <div className="mt-3 overflow-hidden rounded-xl bg-black">
                <LuxuryMediaViewer
                  item={craftMedia}
                  aspectRatioClass="aspect-[9/16]"
                  autoPlay={true}
                />
              </div>

              <div className="mt-3 pt-3 border-t border-[#C8A45D]/25 flex items-center justify-between text-[11px] text-[#FFFDF7]/85 font-mono px-1">
                <span>ACTIVE PHASE:</span>
                <span className="text-[#C8A45D] font-bold">{activeStep.title}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Scroll-Driven Steps Sequence with Gold Highlights */}
          <div className="lg:col-span-6 space-y-5">
            {CRAFT_STEPS.map((step, idx) => {
              const isActive = idx === activeStepIndex

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`group p-4 sm:p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                    isActive
                      ? 'bg-[#FFFDF7]/[0.08] border-[#C8A45D] shadow-xl shadow-[#C8A45D]/10 translate-x-1'
                      : 'bg-[#FFFDF7]/[0.02] border-[#C8A45D]/20 hover:border-[#C8A45D]/50 hover:bg-[#FFFDF7]/[0.04]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-serif text-lg font-bold tracking-wider transition-colors ${
                          isActive ? 'text-[#C8A45D]' : 'text-[#FFFDF7]/30'
                        }`}
                      >
                        STEP {step.stepNum}
                      </span>
                      {isActive && (
                        <div className="w-8 h-[1px] bg-[#C8A45D] animate-pulse" />
                      )}
                    </div>

                    <span
                      className={`text-[9px] uppercase tracking-wider font-mono px-2 py-0.5 rounded border transition-colors ${
                        isActive
                          ? 'border-[#C8A45D] text-[#C8A45D] bg-[#C8A45D]/10'
                          : 'border-transparent text-[#FFFDF7]/30'
                      }`}
                    >
                      {step.artisanMetric}
                    </span>
                  </div>

                  <h3
                    className={`font-serif text-xl sm:text-2xl mt-2 transition-colors ${
                      isActive ? 'text-[#FFFDF7]' : 'text-[#FFFDF7]/60 group-hover:text-[#FFFDF7]'
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm font-sans leading-relaxed mt-2 transition-all duration-300 ${
                      isActive ? 'text-[#FFFDF7]/85 opacity-100' : 'text-[#FFFDF7]/50 line-clamp-1'
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* 
          13. FINAL CRAFTSMANSHIP MOMENT: THE FINISHED MASTERPIECE
          Payoff of the craftsmanship story
        */}
        <div className="mt-24 sm:mt-32 relative bg-[#FFFDF7] text-[#141012] rounded-3xl p-8 sm:p-12 border-2 border-[#C8A45D] shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C8A45D]/[0.08] rounded-full blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center relative z-10">
            {/* Finished Jewellery Visual */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[320px] rounded-2xl overflow-hidden border border-[#C8A45D]/50 shadow-xl bg-[#F4EFE6] p-2">
                <LuxuryMediaViewer
                  item={finishedMasterpiece}
                  aspectRatioClass="aspect-[4/5]"
                />
              </div>
            </div>

            {/* Narrative Conclusion */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#C8A45D] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A45D]" />
                <span>The Sovereign Culmination</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#141012] leading-tight">
                THE FINISHED MASTERPIECE
              </h3>

              <p className="font-serif text-lg sm:text-xl text-[#C8A45D] italic">
                Crafted by hand. Designed to endure.
              </p>

              <p className="text-xs sm:text-sm text-[#141012]/80 font-sans leading-relaxed pt-1">
                Centuries of ancestral Rajasthani goldsmithing converge in an unrepeatable sovereign creation. Designed not merely to be worn, but to be passed down through generations as a living family heirloom.
              </p>

              <div className="pt-3">
                <a
                  href="#collections"
                  className="luxury-btn-shine inline-flex items-center gap-2.5 px-8 py-4 bg-[#C8A45D] text-[#080E1E] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#D4AF37] transition-all rounded shadow-lg shadow-[#C8A45D]/25"
                >
                  <span>EXPLORE THE COLLECTION</span>
                  <ArrowRight className="w-4 h-4 text-[#080E1E]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
