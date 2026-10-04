import React, { useState } from 'react'
import {
  Calendar,
  MessageCircle,
  Heart,
  ChevronDown,
} from 'lucide-react'
import { BRAND_CONFIG } from '../../config/brand.config'
import type { Product } from '../../types/product'
import type { CurrencyCode } from '../../types/market'
import { formatCurrency } from '../../services/currencyService'

interface ProductInfoProps {
  product: Product
  currency: CurrencyCode
  onCurrencyToggle: (c: CurrencyCode) => void
  onBookViewing: () => void
  onNavigateHome: () => void
}

export const ProductInfo: React.FC<ProductInfoProps> = ({
  product,
  currency,
  onCurrencyToggle,
  onBookViewing,
  onNavigateHome,
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    specifications: true,
    materials: false,
    certification: false,
    craftsmanship: false,
    delivery: false,
    care: false,
  })

  // Conversion rate for USD
  const displayedPrice =
    currency === 'USD'
      ? Math.round((product.price / 96.35) * 100) / 100
      : product.price

  // WhatsApp concierge pre-filled message
  const rawPhone = BRAND_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')
  const whatsappMessage = encodeURIComponent(
    `Hello ANIMESH JEWELS Concierge, I am inquiring regarding the "${product.name}" (${product.sku}). I would like to explore private viewing availability and bespoke bespoke details.`
  )
  const whatsappUrl = `https://wa.me/${rawPhone}?text=${whatsappMessage}`

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="w-full space-y-7">
      {/* 
        1. MINIMAL BREADCRUMBS
      */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#141012]/60 uppercase"
      >
        <button
          onClick={onNavigateHome}
          className="hover:text-[#C8A45D] transition-colors cursor-pointer"
        >
          HOME
        </button>
        <span>/</span>
        <span className="hover:text-[#C8A45D] transition-colors cursor-pointer">
          {product.collection}
        </span>
        <span>/</span>
        <span className="text-[#C8A45D] font-medium truncate max-w-[200px]">
          {product.name}
        </span>
      </nav>

      {/* 
        2. HEADER & TITLE
      */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C8A45D] font-mono font-semibold">
            {product.category} • {product.collection}
          </span>

          {/* Availability Status Badge */}
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold border ${
              product.availability === 'AVAILABLE_FOR_VIEWING'
                ? 'bg-emerald-900/10 text-emerald-800 border-emerald-500/30'
                : 'bg-amber-900/10 text-amber-800 border-amber-500/30'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                product.availability === 'AVAILABLE_FOR_VIEWING'
                  ? 'bg-emerald-600 animate-pulse'
                  : 'bg-amber-600'
              }`}
            />
            {product.availability === 'AVAILABLE_FOR_VIEWING'
              ? 'AVAILABLE FOR PRIVATE VIEWING'
              : 'MADE TO ORDER'}
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight text-[#141012]">
          {product.name}
        </h1>

        {product.subtitle && (
          <p className="text-xs uppercase tracking-widest text-[#C8A45D] font-mono font-semibold pt-0.5">
            {product.subtitle}
          </p>
        )}
      </div>

      {/* 
        3. PRICE DISPLAY & CURRENCY TOGGLE
      */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#080E1E] text-[#FFFDF7] border border-[#C8A45D]/40 shadow-xl flex items-center justify-between">
        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A45D] font-mono block">
            ESTIMATED ATELIER VALUE
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="font-serif text-3xl sm:text-4xl font-semibold text-[#FFFDF7]">
              {formatCurrency(displayedPrice, currency)}
            </span>
            <span className="text-xs font-mono text-[#FFFDF7]/60 uppercase">
              ({currency} Incl. of Taxes)
            </span>
          </div>
        </div>

        {/* Currency Switcher */}
        <div className="flex items-center bg-[#141012] p-1 rounded-xl border border-[#C8A45D]/30">
          <button
            onClick={() => onCurrencyToggle('INR')}
            className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition-all ${
              currency === 'INR'
                ? 'bg-[#C8A45D] text-[#080E1E] shadow-sm font-semibold'
                : 'text-[#FFFDF7]/70 hover:text-[#FFFDF7]'
            }`}
          >
            ₹ INR
          </button>
          <button
            onClick={() => onCurrencyToggle('USD')}
            className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition-all ${
              currency === 'USD'
                ? 'bg-[#C8A45D] text-[#080E1E] shadow-sm font-semibold'
                : 'text-[#FFFDF7]/70 hover:text-[#FFFDF7]'
            }`}
          >
            $ USD
          </button>
        </div>
      </div>

      {/* 
        4. EDITORIAL DESCRIPTION
      */}
      <p className="text-sm sm:text-base text-[#141012]/80 font-sans leading-relaxed">
        {product.description}
      </p>

      {/* 
        5. PRIMARY HIGH-VALUE LUXURY ACTION BUTTONS
      */}
      <div className="space-y-3 pt-2">
        <button
          onClick={onBookViewing}
          className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C8A45D] to-[#996515] text-[#080E1E] font-semibold text-xs uppercase tracking-[0.25em] font-mono shadow-xl shadow-[#C8A45D]/25 hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2 group"
        >
          <Calendar className="w-4 h-4 transition-transform group-hover:scale-110" />
          <span>BOOK PRIVATE VIEWING</span>
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 px-4 rounded-xl border border-[#C8A45D] bg-[#FFFDF7] text-[#080E1E] hover:bg-[#C8A45D]/10 text-xs uppercase tracking-wider font-mono font-semibold transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WHATSAPP CONCIERGE</span>
          </a>

          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`py-3.5 px-4 rounded-xl border transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-mono font-semibold ${
              isWishlisted
                ? 'border-rose-400 bg-rose-50 text-rose-700'
                : 'border-[#C8A45D]/40 bg-[#FFFDF7] text-[#141012] hover:border-[#C8A45D]'
            }`}
          >
            <Heart
              className={`w-4 h-4 ${
                isWishlisted
                  ? 'fill-rose-600 text-rose-600'
                  : 'text-[#141012]/70'
              }`}
            />
            <span>{isWishlisted ? 'SAVED TO WISHLIST' : 'ADD TO WISHLIST'}</span>
          </button>
        </div>
      </div>

      {/* 
        6. KEY SPECIFICATIONS GRID
      */}
      <div className="p-5 rounded-2xl bg-[#FFFDF7] border border-[#C8A45D]/30 shadow-sm space-y-3">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8A45D] font-mono font-semibold block">
          MASTER SPECIFICATIONS
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-sans">
          <div className="p-2.5 rounded-lg bg-[#080E1E]/5 border border-[#C8A45D]/15">
            <span className="text-[10px] uppercase tracking-wider text-[#141012]/50 font-mono block">
              Gold Purity
            </span>
            <span className="font-semibold text-[#141012] mt-0.5 block">
              {product.goldPurity}
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-[#080E1E]/5 border border-[#C8A45D]/15">
            <span className="text-[10px] uppercase tracking-wider text-[#141012]/50 font-mono block">
              Gold Weight
            </span>
            <span className="font-semibold text-[#141012] mt-0.5 block">
              {product.goldWeight}
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-[#080E1E]/5 border border-[#C8A45D]/15">
            <span className="text-[10px] uppercase tracking-wider text-[#141012]/50 font-mono block">
              Stones / Carat
            </span>
            <span className="font-semibold text-[#C8A45D] mt-0.5 block">
              {product.diamondCarat || 'Pure Gold Solid'}
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-[#080E1E]/5 border border-[#C8A45D]/15">
            <span className="text-[10px] uppercase tracking-wider text-[#141012]/50 font-mono block">
              Certification
            </span>
            <span className="font-semibold text-[#141012] mt-0.5 block">
              {product.diamondCertification?.split('(')[0] || 'BIS 916 Hallmark'}
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-[#080E1E]/5 border border-[#C8A45D]/15">
            <span className="text-[10px] uppercase tracking-wider text-[#141012]/50 font-mono block">
              Gemstone
            </span>
            <span className="font-semibold text-[#141012] mt-0.5 block truncate">
              {product.gemstone?.split('&')[0] || 'Diamond'}
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-[#080E1E]/5 border border-[#C8A45D]/15">
            <span className="text-[10px] uppercase tracking-wider text-[#141012]/50 font-mono block">
              SKU
            </span>
            <span className="font-mono font-semibold text-[#141012] mt-0.5 block">
              {product.sku}
            </span>
          </div>
        </div>
      </div>

      {/* 
        7. EXPANDABLE LUXURY ACCORDIONS
      */}
      <div className="pt-2 divide-y divide-[#C8A45D]/25 border-t border-b border-[#C8A45D]/30">
        {product.accordions.map((item) => {
          const isOpen = openAccordions[item.id]
          return (
            <div key={item.id} className="py-4">
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full flex items-center justify-between text-left cursor-pointer group"
                aria-expanded={isOpen}
              >
                <span className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#141012] group-hover:text-[#C8A45D] transition-colors">
                  {item.title}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#C8A45D] transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="mt-3 text-xs sm:text-sm text-[#141012]/80 font-sans leading-relaxed space-y-2 animate-fadeIn">
                  <p>{item.content}</p>
                  {item.bulletPoints && item.bulletPoints.length > 0 && (
                    <ul className="space-y-1.5 pl-1 pt-1 font-mono text-xs text-[#141012]/85">
                      {item.bulletPoints.map((bp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D] shrink-0 mt-1.5" />
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
