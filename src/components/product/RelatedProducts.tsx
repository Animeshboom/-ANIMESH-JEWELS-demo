import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import type { Product } from '../../types/product'
import type { CurrencyCode } from '../../types/market'
import { formatCurrency } from '../../services/currencyService'

interface RelatedProductsProps {
  products: Product[]
  currency: CurrencyCode
  onSelectProduct: (productId: string) => void
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({
  products,
  currency,
  onSelectProduct,
}) => {
  if (!products || products.length === 0) return null

  return (
    <section className="pt-16 sm:pt-24 pb-12 border-t border-[#C8A45D]/30">
      <div className="space-y-3 text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A45D] font-mono font-semibold flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          CURATED HARMONY
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#141012]">
          You May Also Discover
        </h2>
        <p className="text-xs sm:text-sm text-[#141012]/70 font-sans">
          Heirloom pieces sharing aesthetic lineage and complementary craftsmanship.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((item) => {
          const itemPrice =
            currency === 'USD'
              ? Math.round((item.price / 96.35) * 100) / 100
              : item.price

          return (
            <div
              key={item.id}
              onClick={() => onSelectProduct(item.id)}
              className="group bg-[#FFFDF7] rounded-2xl border border-[#C8A45D]/30 hover:border-[#C8A45D] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#C8A45D]/15 cursor-pointer"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#080E1E]">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080E1E]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#080E1E]/80 backdrop-blur-md border border-[#C8A45D]/40 text-[#C8A45D] text-[9px] font-mono tracking-wider uppercase">
                  {item.category}
                </span>
              </div>

              {/* Information */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#C8A45D] font-mono font-semibold block">
                    {item.collection}
                  </span>
                  <h3 className="font-serif text-lg text-[#141012] group-hover:text-[#C8A45D] transition-colors mt-0.5 leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#141012]/60 font-sans mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#C8A45D]/20 flex items-baseline justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-[#141012]/50 font-mono block">
                      Price
                    </span>
                    <span className="font-serif text-base font-semibold text-[#141012] group-hover:text-[#C8A45D] transition-colors">
                      {formatCurrency(itemPrice, currency)}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-semibold font-mono text-[#C8A45D] group-hover:text-[#141012] transition-colors">
                    <span>EXPLORE PIECE</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
