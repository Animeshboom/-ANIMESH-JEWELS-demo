import React from 'react'
import { HeroSection } from '../sections/HeroSection'
import { TrustBanner } from '../components/common/TrustBanner'
import { LiveRateSection } from '../sections/LiveRateSection'
import { SignatureCollectionSection } from '../sections/SignatureCollectionSection'
import { FeaturedProductSection } from '../sections/FeaturedProductSection'
import { CollectionsSection } from '../sections/CollectionsSection'
import { CraftsmanshipSection } from '../sections/CraftsmanshipSection'
import { TrustSection } from '../sections/TrustSection'
import { StoreExperienceSection } from '../sections/StoreExperienceSection'
import { FinalCtaSection } from '../sections/FinalCtaSection'

export const HomePage: React.FC = () => {
  return (
    <main className="w-full">
      {/* 1. Cinematic Luxury Editorial Hero (Warm Ivory + Realistic Solitaire) */}
      <HeroSection />

      {/* Trust & Certification Banner (Moved out of Hero) */}
      <TrustBanner />

      {/* 2. Live Gold & Silver Market Bullion Rates */}
      <div id="market">
        <LiveRateSection />
      </div>

      {/* 3. The Signature Collection */}
      <SignatureCollectionSection />

      {/* 4. Featured Jewellery Spotlight */}
      <FeaturedProductSection />

      {/* 5. Discover Our Collections */}
      <CollectionsSection />

      {/* 6. The Art of Craftsmanship */}
      <CraftsmanshipSection />

      {/* 7. Why Animesh Jewels - Pillars of Trust */}
      <TrustSection />

      {/* 8. Visit Animesh Jewels - Flagship Salon Experience */}
      <StoreExperienceSection />

      {/* 9. Final Majestic Call to Action */}
      <FinalCtaSection />
    </main>
  )
}
