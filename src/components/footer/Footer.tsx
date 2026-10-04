import React, { useState } from 'react'
import { BRAND_CONFIG } from '../../config/brand.config'
import {
  Sparkles,
  ShieldCheck,
  Phone,
  MapPin,
  Clock,
  Check,
} from 'lucide-react'

// Elegant custom SVG icons for social channels
const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

export const Footer: React.FC = () => {
  const [emailSubscribed, setEmailSubscribed] = useState(false)
  const [newsletterEmail, setNewsletterEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (newsletterEmail) {
      setEmailSubscribed(true)
      setTimeout(() => setEmailSubscribed(false), 4000)
      setNewsletterEmail('')
    }
  }

  return (
    <footer className="bg-[#141012] text-[#FFFDF7] border-t border-[#C8A45D]/30 pt-12 sm:pt-20 pb-10 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* VIP Salon Gazette / Newsletter Section */}
        <div className="pb-10 sm:pb-16 border-b border-[#C8A45D]/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8A45D] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              The Privilege Circle
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#FFFDF7]">
              Exclusive Salon Invitations & Private Previews
            </h3>
            <p className="text-xs sm:text-sm text-[#F4EFE6]/70 font-sans leading-relaxed">
              Receive private notifications of rare gemstone acquisitions and invitations to closed-door jewellery viewings.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 bg-[#1A1416] border border-[#C8A45D]/40 px-5 py-3.5 text-xs text-[#FFFDF7] placeholder-[#C8A45D]/60 focus:outline-none focus:border-[#C8A45D] transition-colors rounded"
              />
              <button
                type="submit"
                className="luxury-btn-shine px-8 py-3.5 bg-[#C8A45D] text-[#141012] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#D4AF37] transition-all shrink-0 cursor-pointer shadow-lg rounded"
              >
                {emailSubscribed ? 'Subscribed' : 'Join Privé'}
              </button>
            </form>
            {emailSubscribed && (
              <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1 font-sans">
                <Check className="w-3.5 h-3.5" />
                <span>Thank you. You have been added to our private register.</span>
              </p>
            )}
          </div>
        </div>

        {/* Main Footer Navigation Columns */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Atelier Address */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="font-serif text-xl sm:text-2xl font-semibold tracking-[0.16em] text-[#FFFDF7]">
                {BRAND_CONFIG.brandName}
              </span>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#C8A45D] mt-0.5 font-medium">
                {BRAND_CONFIG.tagline}
              </p>
            </div>
            <p className="text-xs text-[#F4EFE6]/70 leading-relaxed font-sans max-w-sm">
              An haute joaillerie maison dedicated to certified natural diamonds, uncut royal polki, and sovereign heirloom craftsmanship.
            </p>

            <div className="space-y-2 pt-2 text-xs text-[#FFFDF7]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C8A45D] shrink-0 mt-0.5" />
                <span>
                  {BRAND_CONFIG.storeAddress.title}, {BRAND_CONFIG.storeAddress.line2},{' '}
                  {BRAND_CONFIG.storeAddress.city}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                <span>{BRAND_CONFIG.storeAddress.hours}</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center space-x-3">
              <a
                href={BRAND_CONFIG.socialLinks[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded bg-[#1A1416] border border-[#C8A45D]/40 flex items-center justify-center text-[#FFFDF7]/80 hover:text-[#C8A45D] hover:border-[#C8A45D] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={BRAND_CONFIG.socialLinks[1].href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded bg-[#1A1416] border border-[#C8A45D]/40 flex items-center justify-center text-[#FFFDF7]/80 hover:text-[#C8A45D] hover:border-[#C8A45D] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${BRAND_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded bg-[#1A1416] border border-[#C8A45D]/40 flex items-center justify-center text-[#FFFDF7]/80 hover:text-[#C8A45D] hover:border-[#C8A45D] transition-colors"
                aria-label="WhatsApp Concierge"
              >
                <Phone className="w-4 h-4 text-[#C8A45D]" />
              </a>
            </div>
          </div>

          {/* Column 2: Collections */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.24em] text-[#C8A45D] font-semibold">
              Collections
            </h4>
            <ul className="space-y-2 text-xs text-[#8E9AAF]">
              <li>
                <a href="#collections" className="hover:text-[#C8A45D] transition-colors">
                  High Solitaires
                </a>
              </li>
              <li>
                <a href="#featured" className="hover:text-[#C8A45D] transition-colors">
                  Bridal & Jadau
                </a>
              </li>
              <li>
                <a href="#signature" className="hover:text-[#C8A45D] transition-colors">
                  Polki Masterpieces
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#C8A45D] transition-colors">
                  Heritage Sets
                </a>
              </li>
              <li>
                <a href="#store" className="hover:text-[#C8A45D] transition-colors">
                  Bespoke Commissions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: About & Craft */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.24em] text-[#C8A45D] font-semibold">
              The Maison
            </h4>
            <ul className="space-y-2 text-xs text-[#8E9AAF]">
              <li>
                <a href="#craftsmanship" className="hover:text-[#C8A45D] transition-colors">
                  The Art of Karigari
                </a>
              </li>
              <li>
                <a href="#trust" className="hover:text-[#C8A45D] transition-colors">
                  Our Diamond Heritage
                </a>
              </li>
              <li>
                <a href="#trust" className="hover:text-[#C8A45D] transition-colors">
                  Ethical Gemstone Sourcing
                </a>
              </li>
              <li>
                <a href="#store" className="hover:text-[#C8A45D] transition-colors">
                  Private Salon Viewing
                </a>
              </li>
              <li>
                <a href="#market" className="hover:text-[#C8A45D] transition-colors">
                  Daily Bullion Index
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Client Care & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.24em] text-[#C8A45D] font-semibold">
              Client Concierge
            </h4>
            <ul className="space-y-2 text-xs text-[#8E9AAF]">
              <li>
                <a href="#store" className="hover:text-[#C8A45D] transition-colors">
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="#trust" className="hover:text-[#C8A45D] transition-colors">
                  BIS Hallmark & Certificates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C8A45D] transition-colors">
                  Jewellery Care Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C8A45D] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C8A45D] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications & Hallmark Statement */}
        <div className="pt-8 pb-10 border-t border-[#C8A45D]/20 flex flex-wrap items-center justify-between gap-4 text-[11px] text-[#8E9AAF]">
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6">
            <span className="flex items-center gap-1.5 text-[#C8A45D]">
              <ShieldCheck className="w-3.5 h-3.5" />
              BIS 916 Pure Gold Hallmarked
            </span>
            <span>•</span>
            <span>GIA & IGI Natural Diamond Certified</span>
            <span>•</span>
            <span>100% Conflict-Free Provenance</span>
          </div>

          <div className="text-[10px] uppercase tracking-widest text-[#C8A45D] font-semibold">
            ROYAL SAPPHIRE & IMPERIAL GOLD FLAGSHIP SALON
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-[#C8A45D]/15 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8E9AAF]">
          <div>
            © {new Date().getFullYear()} {BRAND_CONFIG.brandName}. All rights reserved.
          </div>
          <div className="mt-2 sm:mt-0 font-serif tracking-[0.2em] text-[#C8A45D] text-[11px]">
            {BRAND_CONFIG.tagline}
          </div>
        </div>
      </div>
    </footer>
  )
}
