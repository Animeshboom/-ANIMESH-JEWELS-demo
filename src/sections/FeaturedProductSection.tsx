import React, { useState, useEffect, useRef } from 'react'
import { Sparkles, MessageCircle, Calendar, ShieldCheck, Heart, Award } from 'lucide-react'
import { JEWELLERY_MEDIA_COLLECTION } from '../data/jewelleryMedia'
import { LuxuryMediaViewer } from '../components/common/LuxuryMediaViewer'
import { BRAND_CONFIG } from '../config/brand.config'

export const FeaturedProductSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [activeTab, setActiveTab] = useState<'specs' | 'provenance' | 'karigari'>('specs')

  const media = JEWELLERY_MEDIA_COLLECTION.featuredSpotlight

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

  return (
    <section
      id="featured"
      ref={sectionRef}
      className="relative bg-[#080E1E] text-[#FFFDF7] py-14 sm:py-36 border-b border-[#C8A45D]/30 overflow-hidden"
    >
      {/* Cinematic Deep Atmosphere & Warm Golden Halo */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C8A45D]/[0.08] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#122347]/40 rounded-full blur-[160px] pointer-events-none" />

      {/* Decorative Top Hairline Transition Accent */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A45D]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Eyebrow Header: Cinematic Reveal */}
        <div
          className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 sm:pb-12 border-b border-[#C8A45D]/30 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-[#C8A45D] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>02 / The High Jewellery Campaign</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-[0.04em] text-[#FFFDF7]">
              FEATURED MASTERPIECE
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-4 py-1.5 bg-[#FFFDF7]/[0.08] border border-[#C8A45D]/40 text-[#C8A45D] text-[10px] uppercase tracking-[0.25em] font-semibold rounded-full">
              Sovereign Bridal Suite
            </span>
            <span className="text-xs text-[#C8A45D] font-mono font-medium">Piece № 001</span>
          </div>
        </div>

        {/* Campaign Layout: Video Reel (Left) & Narrative Specs (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-12 sm:mt-16">
          {/* 
            LEFT COLUMN: High-Definition Autoplaying Video Stream
            Autoplays on scroll, muted by default, discrete sound toggle, zero external redirects
          */}
          <div
            className={`lg:col-span-5 flex justify-center transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[400px] bg-[#0C182F] border-2 border-[#C8A45D]/60 p-4 sm:p-5 rounded-2xl shadow-2xl shadow-[#C8A45D]/15 group">
              {/* Corner Ornate Accents */}
              <div className="absolute -top-1.5 -left-1.5 w-5 h-5 border-t-2 border-l-2 border-[#C8A45D]" />
              <div className="absolute -top-1.5 -right-1.5 w-5 h-5 border-t-2 border-r-2 border-[#C8A45D]" />
              <div className="absolute -bottom-1.5 -left-1.5 w-5 h-5 border-b-2 border-l-2 border-[#C8A45D]" />
              <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5 border-b-2 border-r-2 border-[#C8A45D]" />

              {/* Status Header above video */}
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#FFFDF7]/80 pb-3 px-1 border-b border-[#C8A45D]/25">
                <span className="flex items-center gap-1.5 text-[#C8A45D] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D] animate-pulse" />
                  Live Campaign Reel
                </span>
                <span className="font-mono text-[#C8A45D]">ANIMESH ATELIER</span>
              </div>

              {/* Luxury Video Player Container (Plays Locally - Never Redirects!) */}
              <div className="mt-3 overflow-hidden rounded-xl bg-black">
                <LuxuryMediaViewer
                  item={media}
                  aspectRatioClass="aspect-[9/16]"
                  autoPlay={true}
                />
              </div>

              {/* Quick Spec Footer under Video */}
              <div className="mt-3 pt-3 border-t border-[#C8A45D]/25 flex items-center justify-between text-[11px] text-[#FFFDF7]/85 font-mono px-1">
                <span>POLKI: 42.50 CTS</span>
                <span>EMERALD: 18.20 CTS</span>
                <span className="text-[#C8A45D] font-bold">22K BIS 916</span>
              </div>
            </div>
          </div>

          {/* 
            RIGHT COLUMN: Editorial Typography & Product Campaign Narrative
            Sequential entrance from side
          */}
          <div
            className={`lg:col-span-7 space-y-7 transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Title & Collection Name */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFDF7]/[0.06] border border-[#C8A45D]/40 rounded-full text-[10px] uppercase tracking-widest text-[#C8A45D] font-semibold">
                <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Imperial Royal Provenance</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FFFDF7] leading-[1.15]">
                CELESTIAL MAHARANI <br />
                <span className="text-[#C8A45D]">POLKI CHOKER</span>
              </h3>
            </div>

            {/* Key Quality Pillars Requested */}
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#FFFDF7]/90 font-mono">
              <span className="px-3 py-1.5 bg-[#FFFDF7]/[0.07] border border-[#C8A45D]/40 rounded">
                22K GOLD
              </span>
              <span className="text-[#C8A45D]">•</span>
              <span className="px-3 py-1.5 bg-[#FFFDF7]/[0.07] border border-[#C8A45D]/40 rounded">
                HAND-SET POLKI
              </span>
              <span className="text-[#C8A45D]">•</span>
              <span className="px-3 py-1.5 bg-[#FFFDF7]/[0.07] border border-[#C8A45D]/40 rounded">
                BESPOKE CRAFTSMANSHIP
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#FFFDF7]/80 font-sans leading-relaxed">
              A sovereign bridal masterwork honoring centuries-old Rajasthani Jadau traditions. Hand-set with syndicate uncut diamonds, certified Columbian emerald cabochons, and hand-strung natural Basra seed pearls. The reverse side is adorned with imperial Gulabi Meenakari Jaipur enamel.
            </p>

            {/* Pricing / Viewing Tag */}
            <div className="py-3 px-5 bg-[#FFFDF7]/[0.05] border border-[#C8A45D]/35 rounded-xl flex items-baseline justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#C8A45D] block font-mono">
                  Commission Status
                </span>
                <span className="font-serif text-xl sm:text-2xl font-semibold text-[#FFFDF7]">
                  PRIVATE VIEWING
                </span>
              </div>
              <span className="text-xs text-[#C8A45D] font-mono">Price On Private Request</span>
            </div>

            {/* Interactive Specs Tabs */}
            <div className="border border-[#C8A45D]/30 bg-[#FFFDF7]/[0.04] p-1 rounded-lg flex gap-1">
              <button
                onClick={() => setActiveTab('specs')}
                className={`flex-1 py-2 text-xs uppercase tracking-wider font-semibold rounded transition-all cursor-pointer ${
                  activeTab === 'specs'
                    ? 'bg-[#C8A45D] text-[#080E1E] shadow-sm'
                    : 'text-[#FFFDF7]/70 hover:text-[#FFFDF7]'
                }`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab('provenance')}
                className={`flex-1 py-2 text-xs uppercase tracking-wider font-semibold rounded transition-all cursor-pointer ${
                  activeTab === 'provenance'
                    ? 'bg-[#C8A45D] text-[#080E1E] shadow-sm'
                    : 'text-[#FFFDF7]/70 hover:text-[#FFFDF7]'
                }`}
              >
                Certification
              </button>
              <button
                onClick={() => setActiveTab('karigari')}
                className={`flex-1 py-2 text-xs uppercase tracking-wider font-semibold rounded transition-all cursor-pointer ${
                  activeTab === 'karigari'
                    ? 'bg-[#C8A45D] text-[#080E1E] shadow-sm'
                    : 'text-[#FFFDF7]/70 hover:text-[#FFFDF7]'
                }`}
              >
                Karigari
              </button>
            </div>

            {/* Tab Details */}
            <div className="bg-[#FFFDF7]/[0.05] border border-[#C8A45D]/35 rounded-xl p-5 space-y-3">
              {activeTab === 'specs' && (
                <div className="grid grid-cols-2 gap-4 text-xs font-sans">
                  <div>
                    <span className="text-[#C8A45D] uppercase tracking-wider text-[10px] block">
                      Metal Purity
                    </span>
                    <strong className="text-[#FFFDF7] text-sm font-serif">
                      22K Hallmarked Royal Gold
                    </strong>
                  </div>
                  <div>
                    <span className="text-[#C8A45D] uppercase tracking-wider text-[10px] block">
                      Diamond Weight
                    </span>
                    <strong className="text-[#FFFDF7] text-sm font-serif">
                      42.50 Carats Natural Polki
                    </strong>
                  </div>
                  <div>
                    <span className="text-[#C8A45D] uppercase tracking-wider text-[10px] block">
                      Precious Gemstones
                    </span>
                    <strong className="text-[#FFFDF7] text-sm font-serif">
                      Zambian & Columbian Emeralds
                    </strong>
                  </div>
                  <div>
                    <span className="text-[#C8A45D] uppercase tracking-wider text-[10px] block">
                      Enamel Work
                    </span>
                    <strong className="text-[#FFFDF7] text-sm font-serif">
                      Jaipur Gulabi Meenakari
                    </strong>
                  </div>
                </div>
              )}

              {activeTab === 'provenance' && (
                <div className="space-y-2.5 text-xs text-[#FFFDF7]/85">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C8A45D]" />
                    <span><strong>BIS 916 Hallmark:</strong> Certified government purity stamped on every link.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C8A45D]" />
                    <span><strong>GII Certified:</strong> Certified natural uncut diamonds, 100% untreated.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C8A45D]" />
                    <span><strong>Lifetime Exchange:</strong> Guaranteed valuation at all ANIMESH JEWELS salons.</span>
                  </div>
                </div>
              )}

              {activeTab === 'karigari' && (
                <div className="space-y-2 text-xs text-[#FFFDF7]/85 leading-relaxed">
                  <p>
                    Forged over <strong>480 artisan hours</strong> by 5th-generation master karigars in our private Jaipur atelier.
                  </p>
                  <p>
                    Each polki gem is encased in pure 24K gold foil (kundan jadau) to maximize natural ambient light reflection.
                  </p>
                </div>
              )}
            </div>

            {/* 
              PRIMARY & SECONDARY CTAS:
              Primary: BOOK A PRIVATE VIEWING
              Secondary: WHATSAPP CONCIERGE (+91 70086 65245)
            */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#store"
                className="luxury-btn-shine inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#C8A45D] text-[#080E1E] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#D4AF37] transition-all cursor-pointer shadow-lg shadow-[#C8A45D]/25 rounded"
              >
                <Calendar className="w-4 h-4 text-[#080E1E]" />
                <span>BOOK A PRIVATE VIEWING</span>
              </a>

              <a
                href={`https://wa.me/${BRAND_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 border border-[#C8A45D]/60 bg-[#FFFDF7]/[0.06] text-[#FFFDF7] text-xs uppercase tracking-[0.18em] hover:border-[#C8A45D] hover:bg-[#FFFDF7]/[0.12] transition-all cursor-pointer rounded"
              >
                <MessageCircle className="w-4 h-4 text-[#C8A45D]" />
                <span>WHATSAPP CONCIERGE</span>
              </a>

              <button
                onClick={() => setIsSaved(!isSaved)}
                className="p-4 border border-[#C8A45D]/40 rounded hover:border-[#C8A45D] transition-colors cursor-pointer flex items-center justify-center"
                aria-label="Save to Wishlist"
              >
                <Heart className={`w-4 h-4 ${isSaved ? 'text-[#C8A45D] fill-[#C8A45D]' : 'text-[#C8A45D]'}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
