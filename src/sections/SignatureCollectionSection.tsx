import React, { useState, useEffect, useRef } from 'react'
import { Sparkles, ArrowRight, Heart, X } from 'lucide-react'
import { JEWELLERY_MEDIA_COLLECTION, type JewelleryMediaItem } from '../data/jewelleryMedia'
import { LuxuryMediaViewer } from '../components/common/LuxuryMediaViewer'

interface SignatureProduct {
  id: string
  productId: string
  num: string
  name: string
  collection: string
  metal: string
  diamondCarat: string
  price: string
  mediaKey: keyof typeof JEWELLERY_MEDIA_COLLECTION
}

const SIGNATURE_PRODUCTS: SignatureProduct[] = [
  {
    id: 'sig-01',
    productId: 'animesh-celestial-solitaire',
    num: '01',
    name: 'SIGNATURE SOLITAIRE',
    collection: 'High Solitaires & Eternity Bands',
    metal: '18K CHAMPAGNE GOLD',
    diamondCarat: '3.50 CT D-FLAWLESS DIAMOND',
    price: '₹ 18,50,000',
    mediaKey: 'signatureSolitaire',
  },
  {
    id: 'sig-02',
    productId: 'celestial-maharani-polki-choker',
    num: '02',
    name: 'MAHARANI POLKI',
    collection: 'Royal Bridal Suite',
    metal: '22K HALLMARK GOLD',
    diamondCarat: '28.40 CT SYNDICATE POLKI',
    price: '₹ 24,75,000',
    mediaKey: 'signatureJadau',
  },
  {
    id: 'sig-03',
    productId: 'maharani-chandelier-earrings',
    num: '03',
    name: 'CELESTIAL EARRINGS',
    collection: 'High Fine Jewellery',
    metal: 'PLATINUM & 18K GOLD',
    diamondCarat: '12.80 CT BRILLIANT DIAMONDS',
    price: '₹ 14,20,000',
    mediaKey: 'signatureEarrings',
  },
  {
    id: 'sig-04',
    productId: 'royal-heritage-necklace',
    num: '04',
    name: 'ROYAL HERITAGE NECKLACE',
    collection: 'Imperial Legacy',
    metal: '22K KUNDAN GOLD',
    diamondCarat: '34.20 CT UNCUT POLKI',
    price: '₹ 32,50,000',
    mediaKey: 'collectionHeritage',
  },
]

export const SignatureCollectionSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState<JewelleryMediaItem | null>(null)
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({})

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

  const toggleWishlist = (id: string) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  // Editorial Featured Piece
  const editorialMedia = JEWELLERY_MEDIA_COLLECTION.collectionBridal

  return (
    <section
      id="signature"
      ref={sectionRef}
      className="relative bg-[#FFFDF7] text-[#141012] py-14 sm:py-32 border-b border-[#C8A45D]/30 transition-colors duration-500 overflow-hidden"
    >
      {/* Background Champagne Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#C8A45D]/[0.05] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* 
          CINEMATIC TRANSITION HEADING
          Large elegant heading with supportive text as user scrolls beyond market section
        */}
        <div
          className={`text-center max-w-3xl mx-auto space-y-3 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-[#C8A45D] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>01 / The Sovereign Curation</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-[0.04em] text-[#141012] leading-[1.1]">
            THE SIGNATURE <br className="hidden sm:inline" />
            <span className="text-[#C8A45D]">COLLECTION</span>
          </h2>

          <p className="text-sm sm:text-base text-[#141012]/75 font-sans leading-relaxed pt-2 max-w-xl mx-auto">
            Selected pieces for those who understand the difference.
          </p>
        </div>

        {/* 
          4 SIGNATURE PRODUCTS GRID
          01 Signature Solitaire, 02 Maharani Polki, 03 Celestial Earrings, 04 Royal Heritage Necklace
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mt-10 sm:mt-20">
          {SIGNATURE_PRODUCTS.map((prod, index) => {
            const mediaItem = JEWELLERY_MEDIA_COLLECTION[prod.mediaKey]
            const isSaved = wishlist[prod.id]
            const delays = ['delay-[100ms]', 'delay-[250ms]', 'delay-[400ms]', 'delay-[550ms]']
            const delayClass = delays[index] || 'delay-[100ms]'

            return (
              <div
                key={prod.id}
                className={`group relative bg-[#F7F1E5] border border-[#C8A45D]/30 hover:border-[#C8A45D] p-5 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C8A45D]/20 rounded-2xl ${delayClass} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Top Meta Bar: Index Number & Wishlist */}
                <div className="flex items-center justify-between pb-3 border-b border-[#C8A45D]/20 text-xs">
                  <span className="font-serif text-sm font-semibold tracking-widest text-[#C8A45D]">
                    {prod.num}
                  </span>
                  <button
                    onClick={() => toggleWishlist(prod.id)}
                    className="p-1 text-[#C8A45D] hover:text-[#141012] transition-colors cursor-pointer"
                    aria-label={`Save ${prod.name} to wishlist`}
                  >
                    <Heart
                      className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                        isSaved ? 'text-[#C8A45D] fill-[#C8A45D]' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Jewellery Media Container with Smooth Subtle Zoom on Hover */}
                <div className="mt-4 relative overflow-hidden rounded-xl bg-[#FFFDF7] p-2 border border-[#C8A45D]/15">
                  <div className="transform transition-transform duration-700 ease-out group-hover:scale-105">
                    <LuxuryMediaViewer
                      item={mediaItem}
                      aspectRatioClass="aspect-[4/5]"
                      onExpand={() => setSelectedItem(mediaItem)}
                    />
                  </div>
                </div>

                {/* Product Information */}
                <div className="pt-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#C8A45D] font-semibold block">
                      {prod.collection}
                    </span>
                    <h3 className="font-serif text-lg text-[#141012] group-hover:text-[#C8A45D] transition-colors mt-0.5 leading-snug">
                      {prod.name}
                    </h3>

                    {/* Gold Purity & Diamond/Carat Details */}
                    <div className="mt-3 py-2 px-2.5 bg-[#FFFDF7] rounded-lg border border-[#C8A45D]/20 space-y-1 text-[11px] font-sans">
                      <div className="flex justify-between text-[#141012]/80">
                        <span className="text-[#141012]/60 uppercase text-[9px] tracking-wider">Metal:</span>
                        <span className="font-semibold text-[#141012]">{prod.metal}</span>
                      </div>
                      <div className="flex justify-between text-[#141012]/80">
                        <span className="text-[#141012]/60 uppercase text-[9px] tracking-wider">Stones:</span>
                        <span className="font-semibold text-[#C8A45D]">{prod.diamondCarat}</span>
                      </div>
                    </div>
                  </div>

                  {/* Price & Action Row */}
                  <div className="pt-4 border-t border-[#C8A45D]/20 mt-4 flex items-baseline justify-between">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-[#141012]/60 block">Price</span>
                      <span className="font-serif text-lg font-semibold text-[#141012] group-hover:text-[#C8A45D] transition-colors">
                        {prod.price}
                      </span>
                    </div>

                    <a
                      href={`#product/${prod.productId}`}
                      className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-semibold text-[#C8A45D] group-hover:text-[#141012] transition-colors cursor-pointer"
                    >
                      <span>VIEW PIECE</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* 
          6. LARGE EDITORIAL PRODUCT PRESENTATION
          Asymmetrical luxury editorial presentation occupying significant screen space
        */}
        <div className="mt-14 sm:mt-32 relative bg-[#080E1E] text-[#FFFDF7] rounded-3xl p-5 sm:p-12 lg:p-16 border-2 border-[#C8A45D]/40 shadow-2xl overflow-hidden">
          {/* Subtle Ambient Gold Radiance */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C8A45D]/[0.08] rounded-full blur-[140px] pointer-events-none" />

          {/* Corner Ornate Accents */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#C8A45D]" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#C8A45D]" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#C8A45D]" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#C8A45D]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
            {/* Large Visual (Occupies Significant Screen Space) */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-full max-w-[560px] rounded-2xl overflow-hidden border border-[#C8A45D]/50 shadow-2xl group">
                <LuxuryMediaViewer
                  item={editorialMedia}
                  aspectRatioClass="aspect-[4/3] sm:aspect-[16/10]"
                  autoPlay={true}
                  onExpand={() => setSelectedItem(editorialMedia)}
                />
                {/* Subtle Luxury Film Grain / Shimmer Tag */}
                <div className="absolute bottom-3 left-3 bg-[#080E1E]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#C8A45D]/30 text-[9px] uppercase tracking-[0.25em] text-[#C8A45D]">
                  High Fine Jewellery Edition • Live Reel
                </div>
              </div>
            </div>

            {/* Asymmetrical Editorial Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#C8A45D] font-semibold block">
                  Editorial Spotlight • Atelier Piece
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[0.03em] text-[#FFFDF7] leading-[1.15]">
                  THE ART OF <br />
                  <span className="text-[#C8A45D]">TIMELESS BEAUTY</span>
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#FFFDF7]/80 font-sans leading-relaxed">
                Forged in the quiet sanctuary of our private atelier, where generational karigari secrets breathe sovereign majesty into syndicate uncut diamonds, hand-woven gold scrolls, and royal Columbian emeralds.
              </p>

              <div className="py-3 px-4 bg-[#FFFDF7]/[0.05] border border-[#C8A45D]/30 rounded-xl space-y-2 text-xs font-sans">
                <div className="flex justify-between text-[#FFFDF7]/70">
                  <span className="text-[#C8A45D]">Crafted Material:</span>
                  <span className="font-medium text-[#FFFDF7]">22K BIS Hallmarked Sovereign Gold</span>
                </div>
                <div className="flex justify-between text-[#FFFDF7]/70">
                  <span className="text-[#C8A45D]">Gemstone Suite:</span>
                  <span className="font-medium text-[#FFFDF7]">Syndicate Polki & Burmese Rubies</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#product/celestial-maharani-polki-choker"
                  className="luxury-btn-shine inline-flex items-center gap-2.5 px-8 py-4 bg-[#C8A45D] text-[#080E1E] text-xs font-semibold uppercase tracking-[0.22em] hover:bg-[#D4AF37] transition-all rounded cursor-pointer shadow-lg shadow-[#C8A45D]/20"
                >
                  <span>DISCOVER THE PIECE</span>
                  <ArrowRight className="w-4 h-4 text-[#080E1E]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        MODAL INSPECTION VIEWER (100% In-Site, No External Redirect)
      */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080E1E]/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#FFFDF7] border-2 border-[#C8A45D] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 text-[#141012] hover:text-[#080E1E] bg-[#F7F1E5] rounded-full border border-[#C8A45D]/40 cursor-pointer z-30"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-2">
              <div className="md:col-span-6 flex justify-center">
                <div className="w-full max-w-[360px]">
                  <LuxuryMediaViewer
                    item={selectedItem}
                    aspectRatioClass="aspect-[4/5]"
                    autoPlay={true}
                  />
                </div>
              </div>

              <div className="md:col-span-6 space-y-4">
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#C8A45D] font-semibold block">
                  {selectedItem.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#141012]">
                  {selectedItem.title}
                </h3>
                <p className="text-sm text-[#141012]/80 font-sans leading-relaxed">
                  {selectedItem.description}
                </p>

                <div className="bg-[#F7F1E5] p-4 rounded-xl border border-[#C8A45D]/30 space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-[#C8A45D]/20">
                    <span className="text-[#141012]/60">Collection</span>
                    <strong className="text-[#141012]">{selectedItem.collection}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#C8A45D]/20">
                    <span className="text-[#141012]/60">Precious Metal</span>
                    <strong className="text-[#141012]">{selectedItem.specs.metal}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#C8A45D]/20">
                    <span className="text-[#141012]/60">Gemstones</span>
                    <strong className="text-[#141012]">{selectedItem.specs.stones}</strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#141012]/60">Certification</span>
                    <strong className="text-[#C8A45D]">{selectedItem.specs.certification}</strong>
                  </div>
                </div>

                <div className="pt-4 flex gap-4">
                  <a
                    href="#store"
                    onClick={() => setSelectedItem(null)}
                    className="luxury-btn-shine flex-1 text-center py-3.5 bg-[#C8A45D] text-[#080E1E] text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#D4AF37] rounded"
                  >
                    Book Salon Viewing
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
