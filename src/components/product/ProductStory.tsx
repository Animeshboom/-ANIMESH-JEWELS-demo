import React from 'react'
import { Sparkles, Quote, Compass } from 'lucide-react'
import type { ProductStory as StoryType } from '../../types/product'

interface ProductStoryProps {
  story: StoryType
  productName: string
}

export const ProductStory: React.FC<ProductStoryProps> = ({
  story,
  productName,
}) => {
  return (
    <section className="relative my-20 sm:my-28 bg-[#080E1E] text-[#FFFDF7] rounded-3xl p-8 sm:p-14 lg:p-20 border-2 border-[#C8A45D]/40 shadow-2xl overflow-hidden">
      {/* Background Soft Radiance */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C8A45D]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Ornate Corner Accents */}
      <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#C8A45D]" />
      <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#C8A45D]" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#C8A45D]" />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#C8A45D]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Editorial Sub-header */}
        <div className="text-center space-y-2 mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#C8A45D] font-mono font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            THE ART OF HAUTE JOAILLERIE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FFFDF7]">
            The Story Behind The Piece
          </h2>
          <div className="w-16 h-0.5 bg-[#C8A45D] mx-auto mt-4" />
        </div>

        {/* Editorial 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Media Feature Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#C8A45D]/50 shadow-2xl aspect-[4/5] bg-black">
              {story.mediaType === 'video' && story.mediaUrl ? (
                <video
                  src={story.mediaUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={story.mediaUrl}
                  alt={`${productName} — Editorial Story View`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080E1E] via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* Decorative Overlay Label */}
            <div className="absolute -bottom-4 right-4 sm:-bottom-6 sm:right-6 bg-[#080E1E] border border-[#C8A45D] py-2 px-4 rounded-xl shadow-xl flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#C8A45D]" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#FFFDF7]">
                Atelier Archive • New Delhi
              </span>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              {story.subtitle && (
                <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#C8A45D] block mb-2 font-semibold">
                  {story.subtitle}
                </span>
              )}
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FFFDF7] leading-snug">
                {story.headline}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[#FFFDF7]/80 font-sans leading-relaxed">
              {story.narrative}
            </p>

            {/* Craftsmanship Callout Box */}
            <div className="p-5 rounded-2xl bg-[#FFFDF7]/5 border-l-4 border-[#C8A45D] border-t border-r border-b border-[#C8A45D]/20 space-y-2">
              <span className="text-[10px] uppercase tracking-wider font-mono text-[#C8A45D] font-semibold block">
                ATELIER CRAFTSMANSHIP INSIGHT
              </span>
              <p className="text-xs sm:text-sm text-[#FFFDF7]/90 font-sans leading-relaxed">
                {story.craftsmanshipHighlight}
              </p>
            </div>

            {/* Master Goldsmith Quote */}
            {story.quote && (
              <div className="pt-4 border-t border-[#C8A45D]/30 flex gap-3">
                <Quote className="w-8 h-8 text-[#C8A45D] shrink-0 rotate-180 opacity-60" />
                <div className="space-y-1">
                  <p className="font-serif italic text-sm text-[#FFFDF7]/90 leading-relaxed">
                    “{story.quote}”
                  </p>
                  {story.quoteAuthor && (
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A45D] block">
                      — {story.quoteAuthor}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
