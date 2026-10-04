import React from 'react'
import { Calendar, MessageCircle } from 'lucide-react'
import { BRAND_CONFIG } from '../../config/brand.config'
import type { Product } from '../../types/product'
import type { CurrencyCode } from '../../types/market'
import { formatCurrency } from '../../services/currencyService'

interface StickyMobileActionBarProps {
  product: Product
  currency: CurrencyCode
  onBookViewing: () => void
}

export const StickyMobileActionBar: React.FC<StickyMobileActionBarProps> = ({
  product,
  currency,
  onBookViewing,
}) => {
  const displayedPrice =
    currency === 'USD'
      ? Math.round((product.price / 96.35) * 100) / 100
      : product.price

  const rawPhone = BRAND_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')
  const whatsappMessage = encodeURIComponent(
    `Hello ANIMESH JEWELS Concierge, I am inquiring regarding the "${product.name}" (${product.sku}).`
  )
  const whatsappUrl = `https://wa.me/${rawPhone}?text=${whatsappMessage}`

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#080E1E]/95 backdrop-blur-lg border-t border-[#C8A45D]/40 p-3.5 shadow-2xl safe-area-pb">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        {/* Price and Name Snapshot */}
        <div className="min-w-0 flex-1">
          <span className="text-[9px] uppercase tracking-wider text-[#C8A45D] font-mono block truncate">
            {product.name}
          </span>
          <span className="font-serif text-base font-semibold text-[#FFFDF7] leading-tight block">
            {formatCurrency(displayedPrice, currency)}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-[#FFFDF7]/10 border border-[#C8A45D]/50 text-[#25D366] hover:bg-[#FFFDF7]/20 transition-all"
            aria-label="Enquire via WhatsApp"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
          </a>

          <button
            onClick={onBookViewing}
            className="py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C8A45D] to-[#996515] text-[#080E1E] text-xs font-mono font-semibold uppercase tracking-wider shadow-lg flex items-center gap-1.5 active:scale-95 transition-transform"
          >
            <Calendar className="w-4 h-4" />
            <span>BOOK VIEWING</span>
          </button>
        </div>
      </div>
    </div>
  )
}
