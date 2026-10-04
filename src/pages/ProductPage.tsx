import React, { useState, useEffect } from 'react'
import { getProductById, getRelatedProducts, getAllProducts } from '../data/products'
import type { CurrencyCode } from '../types/market'
import { ProductGallery } from '../components/product/ProductGallery'
import { ProductInfo } from '../components/product/ProductInfo'
import { ProductStory } from '../components/product/ProductStory'
import { RelatedProducts } from '../components/product/RelatedProducts'
import { PrivateViewingModal } from '../components/product/PrivateViewingModal'
import { StickyMobileActionBar } from '../components/product/StickyMobileActionBar'
import { ArrowLeft } from 'lucide-react'

interface ProductPageProps {
  productId: string
  onNavigateHome: () => void
  onSelectProduct: (id: string) => void
}

export const ProductPage: React.FC<ProductPageProps> = ({
  productId,
  onNavigateHome,
  onSelectProduct,
}) => {
  const [currency, setCurrency] = useState<CurrencyCode>('INR')
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)

  // Retrieve product or default to first piece
  const product = getProductById(productId) || getAllProducts()[0]
  const related = getRelatedProducts(product.id, 3)

  // Scroll to top on product change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [product.id])

  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#141012] pt-36 sm:pt-40 pb-20 relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-[#C8A45D]/[0.04] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-[#D4AF37]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Back to Curated Collections Button */}
        <div className="mb-6">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#C8A45D] hover:text-[#080E1E] transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>RETURN TO SALON COLLECTIONS</span>
          </button>
        </div>

        {/* 
          PRIMARY PRODUCT SHOWCASE (55% Visual Gallery / 45% Editorial Information)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT: Product Gallery (~55%) */}
          <div className="lg:col-span-7">
            <ProductGallery
              images={product.images}
              video={product.video}
              poster={product.poster}
              productName={product.name}
              collectionName={product.collection}
            />
          </div>

          {/* RIGHT: Product Information (~45%) */}
          <div className="lg:col-span-5">
            <ProductInfo
              product={product}
              currency={currency}
              onCurrencyToggle={setCurrency}
              onBookViewing={() => setIsAppointmentModalOpen(true)}
              onNavigateHome={onNavigateHome}
            />
          </div>
        </div>

        {/* 
          EDITORIAL PRODUCT STORY
          "THE STORY BEHIND THE PIECE"
        */}
        <ProductStory
          story={product.story}
          productName={product.name}
        />

        {/* 
          RELATED PIECES
          "YOU MAY ALSO DISCOVER"
        */}
        <RelatedProducts
          products={related}
          currency={currency}
          onSelectProduct={onSelectProduct}
        />
      </div>

      {/* Private Viewing Appointment Modal */}
      <PrivateViewingModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        product={product}
      />

      {/* Sticky Mobile Action Bar */}
      <StickyMobileActionBar
        product={product}
        currency={currency}
        onBookViewing={() => setIsAppointmentModalOpen(true)}
      />
    </main>
  )
}
