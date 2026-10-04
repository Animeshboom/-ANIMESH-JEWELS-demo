import React, { useRef, useState } from 'react'
import heroRingImg from '../../assets/hero-ring.jpg'
import { Sparkles, Maximize2 } from 'lucide-react'

interface JewelleryHero3DProps {
  scrollProgress?: number
  isMobile?: boolean
  className?: string
}

export const JewelleryHero3D: React.FC<JewelleryHero3DProps> = ({
  scrollProgress = 0,
  isMobile = false,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  // Subtle mouse movement for realistic boutique vitrine depth
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePos({ x, y })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePos({ x: 0, y: 0 })
  }

  // Scroll choreography calculations:
  // 0–25%: subtle rotation
  // 25–50%: gentle scale-in (camera moves closer)
  // 50–75%: reveals another depth angle
  // 75–100%: smooth translation toward center with transition into market section
  const rotY = (mousePos.x * 7) + (scrollProgress * 10)
  const rotX = (-mousePos.y * 5) - (scrollProgress * 4)
  const scale = 1 + Math.sin(scrollProgress * Math.PI) * 0.06
  const translateY = scrollProgress * 30
  const translateX = scrollProgress * -10

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full aspect-square max-w-[480px] flex items-center justify-center select-none ${className}`}
      style={{ perspective: '1200px' }}
      aria-label="ANIMESH JEWELS - Imperial Solitaire 18K Gold Diamond Ring"
      role="img"
    >
      {/* 
        CHANDELIER LIGHTING HALO
        Warm gold radial glow matching the showroom's cascading chandelier
      */}
      <div
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="w-[380px] sm:w-[460px] aspect-square rounded-full bg-gradient-to-tr from-[#C8A45D]/25 via-[#D4AF37]/15 to-transparent blur-3xl opacity-80" />
      </div>

      {/* 
        IMPERIAL BOUTIQUE VITRINE SHOWCASE
        Presents the solitaire ring within a magnificent gold-framed architectural display vitrine
      */}
      <div
        className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale}) rotateY(${rotY}deg) rotateX(${rotX}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="relative p-2.5 sm:p-3 rounded-2xl bg-gradient-to-b from-[#122347]/80 via-[#080E1E]/90 to-[#080E1E] border border-[#C8A45D]/50 shadow-[0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-md group">
          {/* Imperial Vitrine Gold Corner Accents */}
          <div className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#D4AF37]" />
          <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#D4AF37]" />
          <div className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#D4AF37]" />
          <div className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#D4AF37]" />

          {/* Vitrine Header Label */}
          <div className="flex items-center justify-between pb-2 px-1 text-[9px] uppercase tracking-[0.24em] text-[#C8A45D]">
            <span className="flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Imperial Vault • Masterpiece</span>
            </span>
            <span className="font-mono text-[8px] text-[#FFFDF7]/60">AJ-8849</span>
          </div>

          {/* Photorealistic Solitaire Diamond Ring Masterpiece */}
          <div className="relative overflow-hidden rounded-xl border border-[#C8A45D]/30 shadow-inner">
            <img
              src={heroRingImg}
              alt="ANIMESH JEWELS 18K Champagne Gold Solitaire Diamond Ring"
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105 pointer-events-none"
              loading="eager"
            />

            {/* Specular gleam highlight over diamond facets */}
            <div
              className="absolute top-[20%] left-[48%] w-12 h-12 bg-white/40 rounded-full blur-md pointer-events-none transition-opacity duration-500"
              style={{
                opacity: isHovered ? 0.95 : 0.45,
                transform: `translate(${mousePos.x * 12}px, ${mousePos.y * 12}px)`,
              }}
            />
          </div>

          {/* Vitrine Plaque Footer */}
          <div className="pt-2.5 px-1 flex items-center justify-between text-xs">
            <div>
              <div className="font-serif text-[13px] text-[#FFFDF7] tracking-wide">
                The Imperial Solitaire Ring
              </div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-[#C8A45D] mt-0.5">
                18K Champagne Gold • 3.50ct D-Flawless
              </div>
            </div>

            <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#080E1E] border border-[#C8A45D]/40 text-[9px] uppercase tracking-widest text-[#E8CF82]">
              <Maximize2 className="w-2.5 h-2.5 text-[#C8A45D]" />
              <span>Curated</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
