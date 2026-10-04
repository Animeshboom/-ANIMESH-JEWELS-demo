import React, { useRef, useState, useEffect } from 'react'
import { Volume2, VolumeX, Sparkles, Maximize2 } from 'lucide-react'
import type { JewelleryMediaItem } from '../../data/jewelleryMedia'

interface LuxuryMediaViewerProps {
  item: JewelleryMediaItem
  className?: string
  aspectRatioClass?: string
  onExpand?: () => void
  autoPlay?: boolean
}

export const LuxuryMediaViewer: React.FC<LuxuryMediaViewerProps> = ({
  item,
  className = '',
  aspectRatioClass = 'aspect-[9/16]',
  onExpand,
  autoPlay = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  // Scroll-driven auto run: Plays automatically when scrolled into viewport!
  useEffect(() => {
    if (item.mediaType !== 'video' || !containerRef.current) return

    const el = containerRef.current
    const video = videoRef.current

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!video) return
          if (entry.isIntersecting) {
            video
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => {
                // If autoplay is blocked by browser policy, try muted
                video.muted = true
                setIsMuted(true)
                video.play().then(() => setIsPlaying(true)).catch(() => {})
              })
          } else {
            video.pause()
            setIsPlaying(false)
          }
        })
      },
      {
        threshold: 0.15, // Starts playing as soon as 15% is visible on scroll
      }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
    }
  }, [item.mediaType])

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setIsMuted(videoRef.current.muted)
  }

  const handleContainerClick = () => {
    if (onExpand) {
      onExpand()
    } else if (item.mediaType === 'video' && videoRef.current) {
      // Toggle audio on container click if no expand handler
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  return (
    <div
      ref={containerRef}
      onClick={handleContainerClick}
      className={`group relative overflow-hidden rounded-xl bg-[#141012] border border-[#C8A45D]/50 shadow-2xl cursor-pointer select-none transition-all duration-300 ${aspectRatioClass} ${className}`}
    >
      {/* 24K Gold Filigree Corner Accents */}
      <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#D4AF37] z-20 pointer-events-none" />
      <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#D4AF37] z-20 pointer-events-none" />
      <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#D4AF37] z-20 pointer-events-none" />
      <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#D4AF37] z-20 pointer-events-none" />

      {item.mediaType === 'video' && item.videoUrl ? (
        <>
          {/* HTML5 Direct Video Stream (Continuous Auto-Run On Scroll) */}
          <video
            ref={videoRef}
            src={item.videoUrl}
            poster={item.posterUrl}
            loop
            muted={isMuted}
            playsInline
            autoPlay={autoPlay}
            preload="auto"
            className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Top Status & Audio Badges */}
          <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
            <span className="px-2.5 py-1 bg-[#1A1416]/85 backdrop-blur-md border border-[#C8A45D]/40 rounded text-[9px] uppercase tracking-wider text-[#C8A45D] font-mono flex items-center gap-1.5 shadow-md">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-[#C8A45D]'
                }`}
              />
              {isPlaying ? 'Auto-Playing Reel' : 'Live Atelier Reel'}
            </span>

            {/* Sound Toggle Button */}
            <button
              onClick={toggleMute}
              className="p-1.5 bg-[#1A1416]/85 backdrop-blur-md border border-[#C8A45D]/40 rounded-full text-[#FFFDF7] hover:text-[#C8A45D] pointer-events-auto transition-transform hover:scale-110 shadow-md"
              aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5 text-[#FFFDF7]/80" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-[#C8A45D]" />
              )}
            </button>
          </div>

          {/* Bottom Bar: Title & Expand */}
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#141012] via-[#141012]/80 to-transparent z-20 flex items-end justify-between pointer-events-none">
            <div className="space-y-0.5 max-w-[80%]">
              <span className="text-[9px] uppercase tracking-widest text-[#C8A45D] font-semibold block">
                {item.collection}
              </span>
              <div className="font-serif text-xs sm:text-sm text-[#FFFDF7] truncate">
                {item.title}
              </div>
            </div>

            {onExpand && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onExpand()
                }}
                className="p-1.5 bg-[#1A1416]/85 border border-[#C8A45D]/40 rounded-full text-[#FFFDF7] hover:text-[#C8A45D] hover:scale-110 transition-transform pointer-events-auto cursor-pointer"
                aria-label="Inspect Fullscreen"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </>
      ) : (
        <>
          {/* Direct High-Resolution Macro Photography */}
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-110"
            loading="lazy"
          />

          {/* Top Badge */}
          <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
            <span className="px-2.5 py-1 bg-[#1A1416]/85 backdrop-blur-md border border-[#C8A45D]/40 rounded text-[9px] uppercase tracking-wider text-[#C8A45D] font-mono flex items-center gap-1.5 shadow-md">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              Haute Scintillation
            </span>
          </div>

          {/* Hover Scrim & Tap to Inspect */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141012]/90 via-[#141012]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-4">
            <div className="space-y-1">
              <span className="text-[9px] uppercase tracking-widest text-[#C8A45D] font-semibold block">
                {item.category}
              </span>
              <div className="font-serif text-sm text-[#FFFDF7]">{item.title}</div>
              <div className="text-[10px] text-[#C8A45D] font-mono pt-1 flex items-center gap-1">
                <Maximize2 className="w-3 h-3" />
                <span>Click to Inspect High-Res Macro</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
