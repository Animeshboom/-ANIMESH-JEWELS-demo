import React, { useState, useEffect } from 'react'
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Volume2,
  VolumeX,
  Sparkles,
} from 'lucide-react'

interface ProductGalleryProps {
  images: string[]
  video?: string
  poster?: string
  productName: string
  collectionName: string
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  video,
  poster,
  productName,
  collectionName,
}) => {
  // Active media: 0..N-1 are images, 'video' is video if available
  const [activeMediaIndex, setActiveMediaIndex] = useState<number | 'video'>(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const [isVideoMuted, setIsVideoMuted] = useState(true)

  const hasVideo = Boolean(video)

  // Keyboard navigation & ESC handler for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return

      if (e.key === 'Escape') {
        setIsLightboxOpen(false)
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % images.length)
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isLightboxOpen, images.length])

  // Mouse move zoom calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePos({ x, y })
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setIsLightboxOpen(true)
  }

  return (
    <div className="w-full space-y-4">
      {/* 
        1. MAIN HERO SHOWCASE
        Large, clean, luxurious framing with subtle borders and micro-zoom
      */}
      <div className="relative bg-[#080E1E] rounded-2xl overflow-hidden border border-[#C8A45D]/30 shadow-2xl aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] flex items-center justify-center group">
        {/* Subtle corner ornate accents */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#C8A45D]/60 pointer-events-none z-10" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#C8A45D]/60 pointer-events-none z-10" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#C8A45D]/60 pointer-events-none z-10" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#C8A45D]/60 pointer-events-none z-10" />

        {/* Collection Watermark Tag */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#080E1E]/80 backdrop-blur-md border border-[#C8A45D]/40 text-[#C8A45D] text-[10px] font-mono tracking-widest uppercase shadow-md">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            {collectionName}
          </span>
        </div>

        {/* Fullscreen / Lightbox Trigger */}
        {activeMediaIndex !== 'video' && (
          <button
            onClick={() => openLightbox(activeMediaIndex as number)}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#080E1E]/70 backdrop-blur-md border border-[#C8A45D]/40 text-[#FFFDF7] hover:text-[#C8A45D] hover:border-[#C8A45D] transition-all opacity-80 group-hover:opacity-100 hover:scale-105"
            aria-label="View Fullscreen High-Resolution Lightbox"
            title="Expand image"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        )}

        {/* Media Display: Video Stream or High-Res Image with Subtle Zoom */}
        {activeMediaIndex === 'video' && video ? (
          <div className="relative w-full h-full flex items-center justify-center bg-black">
            <video
              src={video}
              poster={poster || images[0]}
              autoPlay
              loop
              muted={isVideoMuted}
              playsInline
              className="w-full h-full object-cover"
            />
            {/* Custom Video Controls */}
            <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
              <button
                onClick={() => setIsVideoMuted(!isVideoMuted)}
                className="p-2 rounded-full bg-[#080E1E]/80 backdrop-blur-md border border-[#C8A45D]/50 text-[#FFFDF7] hover:text-[#C8A45D] transition-colors"
                aria-label={isVideoMuted ? 'Unmute video' : 'Mute video'}
              >
                {isVideoMuted ? (
                  <VolumeX className="w-3.5 h-3.5" />
                ) : (
                  <Volume2 className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>
        ) : (
          <div
            className="relative w-full h-full overflow-hidden cursor-zoom-in"
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
            onMouseMove={handleMouseMove}
            onClick={() => openLightbox(activeMediaIndex as number)}
          >
            <img
              src={images[activeMediaIndex as number] || images[0]}
              alt={`${productName} — Macro Fine Jewellery View`}
              className="w-full h-full object-cover transition-transform duration-300 ease-out select-none"
              style={{
                transform: isZoomed ? 'scale(1.4)' : 'scale(1)',
                transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
              }}
              loading="eager"
            />
          </div>
        )}
      </div>

      {/* 
        2. LUXURY THUMBNAILS CAROUSEL
        Generous spacing, clean gold active borders, and video badge
      */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
        {images.map((img, idx) => {
          const isActive = activeMediaIndex === idx
          return (
            <button
              key={`thumb-${idx}`}
              onClick={() => setActiveMediaIndex(idx)}
              className={`relative flex-shrink-0 w-20 h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'border-[#C8A45D] shadow-md shadow-[#C8A45D]/20 scale-102 ring-1 ring-[#C8A45D]'
                  : 'border-[#C8A45D]/30 opacity-70 hover:opacity-100 hover:border-[#C8A45D]/60'
              }`}
              aria-label={`View photo ${idx + 1} of ${productName}`}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {isActive && (
                <div className="absolute inset-0 bg-[#C8A45D]/10 pointer-events-none" />
              )}
            </button>
          )
        })}

        {/* Video Thumbnail (if video exists) */}
        {hasVideo && (
          <button
            onClick={() => setActiveMediaIndex('video')}
            className={`relative flex-shrink-0 w-20 h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer group/vid ${
              activeMediaIndex === 'video'
                ? 'border-[#C8A45D] shadow-md shadow-[#C8A45D]/20 scale-102 ring-1 ring-[#C8A45D]'
                : 'border-[#C8A45D]/30 opacity-70 hover:opacity-100 hover:border-[#C8A45D]/60'
            }`}
            aria-label={`Play atelier craft video for ${productName}`}
          >
            <img
              src={poster || images[0]}
              alt="Atelier Video"
              className="w-full h-full object-cover filter brightness-75 group-hover/vid:brightness-90 transition-all"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#080E1E]/50">
              <div className="w-7 h-7 rounded-full bg-[#C8A45D] flex items-center justify-center text-[#080E1E] shadow-lg group-hover/vid:scale-110 transition-transform">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
              <span className="text-[9px] uppercase tracking-wider font-mono text-[#FFFDF7] mt-1 font-semibold">
                Video
              </span>
            </div>
          </button>
        )}
      </div>

      {/* 
        3. HIGH-RESOLUTION FULLSCREEN LIGHTBOX MODAL
        Keyboard accessible (ESC, Left, Right)
      */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="High-resolution image viewer"
          className="fixed inset-0 z-50 bg-[#080E1E]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          {/* Close Lightbox */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-[#FFFDF7]/10 text-[#FFFDF7] hover:text-[#C8A45D] hover:bg-[#FFFDF7]/20 border border-[#C8A45D]/40 transition-all"
            aria-label="Close Lightbox (Press Escape)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Image */}
          {images.length > 1 && (
            <button
              onClick={() =>
                setLightboxIndex(
                  (prev) => (prev - 1 + images.length) % images.length
                )
              }
              className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-[#FFFDF7]/10 text-[#FFFDF7] hover:text-[#C8A45D] hover:bg-[#FFFDF7]/20 border border-[#C8A45D]/40 transition-all"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Main Lightbox Image */}
          <div className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl border border-[#C8A45D]/40 shadow-2xl flex flex-col items-center">
            <img
              src={images[lightboxIndex]}
              alt={`${productName} full-screen display`}
              className="max-w-full max-h-[80vh] object-contain select-none"
            />
            <div className="w-full py-3 px-6 bg-[#080E1E] border-t border-[#C8A45D]/30 flex items-center justify-between text-xs font-mono text-[#FFFDF7]/70">
              <span className="font-serif text-[#C8A45D] font-medium text-sm">
                {productName}
              </span>
              <span>
                {lightboxIndex + 1} / {images.length}
              </span>
            </div>
          </div>

          {/* Next Image */}
          {images.length > 1 && (
            <button
              onClick={() =>
                setLightboxIndex((prev) => (prev + 1) % images.length)
              }
              className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-[#FFFDF7]/10 text-[#FFFDF7] hover:text-[#C8A45D] hover:bg-[#FFFDF7]/20 border border-[#C8A45D]/40 transition-all"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      )}
    </div>
  )
}
