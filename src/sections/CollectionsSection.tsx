import React, { useState, useEffect, useRef } from 'react'
import { Sparkles, ArrowRight, X } from 'lucide-react'
import { JEWELLERY_MEDIA_COLLECTION, type JewelleryMediaItem } from '../data/jewelleryMedia'
import { LuxuryMediaViewer } from '../components/common/LuxuryMediaViewer'

interface CollectionItem {
  id: string
  number: string
  title: string
  tag: string
  description: string
  mediaKey: keyof typeof JEWELLERY_MEDIA_COLLECTION
  microTags: string[]
  metal: string
}

const COLLECTIONS_DATA: CollectionItem[] = [
  {
    id: 'bridal-jadau',
    number: '01',
    title: 'BRIDAL & JADAU HEIRLOOMS',
    tag: 'Royal Wedding Trousseau',
    description:
      'Grand bridal chokers, maang tikkas, and jhumkas handcrafted for historic wedding milestones. Set with certified syndicate Polki diamonds, Burmese rubies, and Columbian emerald drops.',
    mediaKey: 'collectionBridal',
    microTags: ['Polki', 'Jadau', '22K Gold', 'Handcrafted Heritage'],
    metal: '22K BIS 916 Royal Gold',
  },
  {
    id: 'high-solitaires',
    number: '02',
    title: 'HIGH SOLITAIRES & ETERNITY BANDS',
    tag: 'Certified Rare Diamonds',
    description:
      'Bespoke solitaires from 1 to 10 carats, crafted in pure platinum and champagne gold with laser-inscribed GIA certification and triple-excellent symmetry.',
    mediaKey: 'collectionSolitaire',
    microTags: ['Natural Diamonds', '18K / Platinum', 'Solitaire Craft', 'Bespoke Settings'],
    metal: 'Platinum 950 & 18K Gold',
  },
  {
    id: 'royal-heritage',
    number: '03',
    title: 'ROYAL HERITAGE & TEMPLE CRAFT',
    tag: 'Imperial Legacy',
    description:
      'Timeless uncut diamond silhouettes celebrating Mughal, Nizami, and Rajput royal court heritage with sacred temple motifs and intricate enamel.',
    mediaKey: 'collectionHeritage',
    microTags: ['Temple Motifs', 'Heritage Gold', 'Traditional Karigari', 'Contemporary Finish'],
    metal: '22K Traditional Kundan Gold',
  },
]

export const CollectionsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [selectedMedia, setSelectedMedia] = useState<JewelleryMediaItem | null>(null)
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const dominant = COLLECTIONS_DATA[0]
  const supporting = COLLECTIONS_DATA.slice(1)

  return (
    <section
      id="collections"
      ref={sectionRef}
      className="relative bg-[#FFFDF7] text-[#141012] py-14 sm:py-36 border-b border-[#C8A45D]/30 transition-colors duration-500 overflow-hidden"
    >
      {/* Background Subtle Radiance */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#C8A45D]/[0.05] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-12 border-b border-[#C8A45D]/30 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-[#C8A45D] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>03 / Curated Universes</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-[0.04em] text-[#141012]">
              DISCOVER OUR COLLECTIONS
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#141012]/75 leading-relaxed font-sans">
            Three expressions of Indian artistry, interpreted for the modern collector.
          </p>
        </div>

        {/* 
          EDITORIAL ASYMMETRICAL LUXURY LAYOUT
          Left: Dominant Primary Visual (01 Bridal & Jadau Heirlooms with live video reel)
          Right: Two Stacked Supporting Visuals (02 High Solitaires & 03 Royal Heritage)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mt-10 sm:mt-16 items-stretch">
          {/* Dominant Collection Visual (7 cols) */}
          <div
            className={`lg:col-span-7 flex flex-col transition-all duration-700 delay-100 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div
              onMouseEnter={() => setActiveHoverId(dominant.id)}
              onMouseLeave={() => setActiveHoverId(null)}
              className="group relative bg-[#080E1E] text-[#FFFDF7] rounded-2xl overflow-hidden border border-[#C8A45D]/40 hover:border-[#C8A45D] shadow-2xl transition-all duration-500 flex flex-col justify-between h-full p-4 sm:p-8"
            >
              {/* Corner Ornate Accents */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#C8A45D]/70" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#C8A45D]/70" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#C8A45D]/70" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#C8A45D]/70" />

              {/* Top Meta Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#C8A45D]/25 relative z-10">
                <span className="font-serif text-lg font-bold text-[#C8A45D] tracking-widest">
                  {dominant.number}
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A45D] font-semibold bg-[#FFFDF7]/[0.08] px-3 py-1 rounded-full border border-[#C8A45D]/30">
                  {dominant.tag}
                </span>
              </div>

              {/* Main Media Visual (1.03x Controlled Zoom on Hover) */}
              <div className="my-6 relative overflow-hidden rounded-xl bg-black border border-[#C8A45D]/30">
                <div className="transform transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                  <LuxuryMediaViewer
                    item={JEWELLERY_MEDIA_COLLECTION[dominant.mediaKey]}
                    aspectRatioClass="aspect-[16/10] sm:aspect-[16/10]"
                    autoPlay={true}
                    onExpand={() => setSelectedMedia(JEWELLERY_MEDIA_COLLECTION[dominant.mediaKey])}
                  />
                </div>
                {/* Subtle dark vignette overlay for luxury contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080E1E]/80 via-transparent to-transparent pointer-events-none opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Content & Micro-Interactions */}
              <div className="space-y-4 relative z-10">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#FFFDF7] group-hover:text-[#C8A45D] transition-colors leading-tight">
                    {dominant.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FFFDF7]/80 font-sans leading-relaxed mt-2">
                    {dominant.description}
                  </p>
                </div>

                {/* Supporting Micro-Tags: Polki • Jadau • 22K Gold • Handcrafted Heritage */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {dominant.microTags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className={`text-[10px] uppercase tracking-wider px-2.5 py-1 rounded border transition-colors ${
                        activeHoverId === dominant.id
                          ? 'border-[#C8A45D] bg-[#C8A45D]/15 text-[#FFFDF7]'
                          : 'border-[#C8A45D]/30 bg-[#FFFDF7]/[0.04] text-[#C8A45D]'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Explore Action Button */}
                <div className="pt-3 border-t border-[#C8A45D]/20 flex items-center justify-between">
                  <span className="text-[10px] text-[#C8A45D] font-mono">{dominant.metal}</span>
                  <button
                    onClick={() => setSelectedMedia(JEWELLERY_MEDIA_COLLECTION[dominant.mediaKey])}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#C8A45D] group-hover:text-[#FFFDF7] transition-colors cursor-pointer"
                  >
                    <span>EXPLORE COLLECTION</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Collection Visuals (5 cols: 2 Stacked Cards) */}
          <div
            className={`lg:col-span-5 flex flex-col gap-8 transition-all duration-700 delay-250 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {supporting.map((col) => {
              const mediaItem = JEWELLERY_MEDIA_COLLECTION[col.mediaKey]

              return (
                <div
                  key={col.id}
                  onMouseEnter={() => setActiveHoverId(col.id)}
                  onMouseLeave={() => setActiveHoverId(null)}
                  className="group relative bg-[#F7F1E5] border border-[#C8A45D]/40 hover:border-[#C8A45D] rounded-2xl p-4 sm:p-6 transition-all duration-500 hover:shadow-xl hover:shadow-[#C8A45D]/15 flex flex-col justify-between flex-1"
                >
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#C8A45D]/20">
                    <span className="font-serif text-sm font-bold text-[#C8A45D] tracking-widest">
                      {col.number}
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.22em] text-[#141012] font-semibold bg-[#FFFDF7] px-2.5 py-0.5 rounded-full border border-[#C8A45D]/30">
                      {col.tag}
                    </span>
                  </div>

                  {/* Image with 1.03x Controlled Zoom on Hover */}
                  <div className="my-4 relative overflow-hidden rounded-xl bg-[#FFFDF7] border border-[#C8A45D]/25 max-h-[170px] sm:max-h-[190px]">
                    <div className="transform transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                      <LuxuryMediaViewer
                        item={mediaItem}
                        aspectRatioClass="aspect-[16/9]"
                        onExpand={() => setSelectedMedia(mediaItem)}
                      />
                    </div>
                  </div>

                  {/* Content & Micro-Interactions */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl text-[#141012] group-hover:text-[#C8A45D] transition-colors leading-snug">
                        {col.title}
                      </h3>
                      <p className="text-xs text-[#141012]/75 font-sans leading-relaxed mt-1 line-clamp-2">
                        {col.description}
                      </p>
                    </div>

                    {/* Micro-tags */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      {col.microTags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className={`text-[9px] uppercase tracking-wider px-2 py-0.5 rounded border transition-colors ${
                            activeHoverId === col.id
                              ? 'border-[#C8A45D] bg-[#C8A45D]/15 text-[#141012]'
                              : 'border-[#C8A45D]/30 bg-[#FFFDF7] text-[#C8A45D]'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Explore Link */}
                    <div className="pt-2 border-t border-[#C8A45D]/20 flex items-center justify-between">
                      <span className="text-[10px] text-[#141012]/60 font-mono">{col.metal}</span>
                      <button
                        onClick={() => setSelectedMedia(mediaItem)}
                        className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C8A45D] group-hover:text-[#141012] transition-colors cursor-pointer"
                      >
                        <span>EXPLORE COLLECTION</span>
                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Modal Detail Inspection */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080E1E]/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#FFFDF7] border-2 border-[#C8A45D] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 p-2 text-[#141012] hover:text-[#080E1E] bg-[#F7F1E5] rounded-full border border-[#C8A45D]/40 cursor-pointer z-30"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-2">
              <div className="md:col-span-6 flex justify-center">
                <div className="w-full max-w-[360px]">
                  <LuxuryMediaViewer
                    item={selectedMedia}
                    aspectRatioClass="aspect-[4/5]"
                    autoPlay={true}
                  />
                </div>
              </div>

              <div className="md:col-span-6 space-y-4">
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#C8A45D] font-semibold block">
                  {selectedMedia.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#141012]">
                  {selectedMedia.title}
                </h3>
                <p className="text-sm text-[#141012]/80 font-sans leading-relaxed">
                  {selectedMedia.description}
                </p>

                <div className="bg-[#F7F1E5] p-4 rounded-xl border border-[#C8A45D]/30 space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-[#C8A45D]/20">
                    <span className="text-[#141012]/60">Collection Archetype</span>
                    <strong>{selectedMedia.collection}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#C8A45D]/20">
                    <span className="text-[#141012]/60">Metallurgy</span>
                    <strong>{selectedMedia.specs.metal}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#C8A45D]/20">
                    <span className="text-[#141012]/60">Gemstones</span>
                    <strong>{selectedMedia.specs.stones}</strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#141012]/60">Certification</span>
                    <strong className="text-[#C8A45D]">{selectedMedia.specs.certification}</strong>
                  </div>
                </div>

                <div className="pt-4 flex gap-4">
                  <a
                    href="#store"
                    onClick={() => setSelectedMedia(null)}
                    className="luxury-btn-shine flex-1 text-center py-3.5 bg-[#C8A45D] text-[#080E1E] text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#D4AF37] rounded"
                  >
                    Inquire for Bespoke Suite
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
