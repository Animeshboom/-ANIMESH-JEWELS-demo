import React, { useState, useEffect } from 'react'
import { BRAND_CONFIG } from '../../config/brand.config'
import {
  Search,
  Heart,
  User,
  ShoppingBag,
  Menu,
  X,
  Sparkles,
  Phone,
  Clock,
  MapPin,
  ChevronRight,
} from 'lucide-react'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSearch, setActiveSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled
            ? 'bg-[#080E1E]/95 backdrop-blur-md border-b border-[#C8A45D]/30 py-2.5 sm:py-3.5 shadow-xl shadow-[#080E1E]/80'
            : 'bg-[#080E1E]/80 backdrop-blur-md border-b border-[#C8A45D]/20 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* LEFT: Brand Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#"
              className="group flex flex-col items-start focus:outline-none"
              aria-label={BRAND_CONFIG.brandName}
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C8A45D] group-hover:scale-125 transition-transform duration-300" />
                <span className="font-serif text-base sm:text-xl md:text-2xl font-semibold tracking-[0.14em] text-[#FFFDF7] group-hover:text-[#D4AF37] transition-colors duration-300">
                  {BRAND_CONFIG.brandName}
                </span>
              </div>
              <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.3em] text-[#C8A45D] font-sans pl-3 -mt-0.5 font-medium">
                {BRAND_CONFIG.subBrand}
              </span>
            </a>
          </div>

          {/* CENTER: Navigation Links (Desktop) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center space-x-8 xl:space-x-10"
          >
            {BRAND_CONFIG.navigation.primary.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs uppercase tracking-[0.2em] font-medium text-[#FFFDF7]/85 hover:text-[#C8A45D] transition-colors duration-200 relative group py-1"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C8A45D] group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            ))}
          </nav>

          {/* RIGHT: Actions (Search, Wishlist, Account, Cart) & Mobile Toggle */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search Icon */}
            <button
              onClick={() => setActiveSearch(!activeSearch)}
              className="text-[#FFFDF7]/85 hover:text-[#C8A45D] transition-colors p-2 cursor-pointer"
              aria-label="Search Collection"
            >
              <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.75]" />
              <span className="sr-only">Search</span>
            </button>

            {/* Wishlist */}
            <button
              className="text-[#FFFDF7]/85 hover:text-[#C8A45D] transition-colors p-2 relative cursor-pointer"
              aria-label="Wishlist"
            >
              <Heart className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.75]" />
              <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#C8A45D] text-[#080E1E] text-[8px] font-bold font-mono flex items-center justify-center rounded-full">
                0
              </span>
              <span className="sr-only">Wishlist</span>
            </button>

            {/* Account (Desktop Only) */}
            <button
              className="hidden md:inline-flex text-[#FFFDF7]/85 hover:text-[#C8A45D] transition-colors p-2 cursor-pointer"
              aria-label="Client Account"
            >
              <User className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.75]" />
              <span className="sr-only">Account</span>
            </button>

            {/* Cart / Bag (Tablet & Desktop) */}
            <button
              className="hidden sm:inline-flex text-[#FFFDF7]/85 hover:text-[#C8A45D] transition-colors p-2 relative cursor-pointer"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.75]" />
              <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#C8A45D] text-[#080E1E] text-[8px] font-bold font-mono flex items-center justify-center rounded-full">
                0
              </span>
              <span className="sr-only">Cart</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-[#FFFDF7] hover:text-[#C8A45D] transition-colors p-2 ml-0.5 cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 stroke-[2] text-[#C8A45D]" />
              ) : (
                <Menu className="w-5 h-5 stroke-[2]" />
              )}
            </button>
          </div>
        </div>

        {/* Expandable Search Bar Overlay */}
        {activeSearch && (
          <div className="border-t border-[#C8A45D]/30 bg-[#141012]/98 px-6 py-4 animate-in fade-in duration-200">
            <div className="max-w-2xl mx-auto flex items-center gap-3">
              <Search className="w-4 h-4 text-[#C8A45D]" />
              <input
                type="text"
                placeholder="Search solitaires, bridal sets, polki necklaces, heritage cuffs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent text-[#FFFDF7] placeholder-[#C8A45D]/60 text-sm font-sans focus:outline-none"
              />
              <button
                onClick={() => setActiveSearch(false)}
                className="text-xs uppercase tracking-widest text-[#C8A45D] hover:text-[#FFFDF7] transition-colors cursor-pointer font-medium"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#141012]/80 backdrop-blur-md transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <aside className="fixed inset-y-0 right-0 max-w-sm w-full bg-[#141012] border-l border-[#C8A45D]/30 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#C8A45D]/20">
                <div>
                  <div className="font-serif text-lg font-semibold tracking-[0.16em] text-[#FFFDF7]">
                    {BRAND_CONFIG.brandName}
                  </div>
                  <div className="text-[9px] uppercase tracking-[0.24em] text-[#C8A45D] font-medium">
                    {BRAND_CONFIG.tagline}
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-[#FFFDF7]/70 hover:text-[#C8A45D] cursor-pointer"
                  aria-label="Close navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="py-6 flex flex-col space-y-1">
                {BRAND_CONFIG.navigation.primary.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3.5 px-3 rounded text-sm uppercase tracking-[0.18em] text-[#FFFDF7] hover:text-[#C8A45D] hover:bg-[#251C1F] transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#C8A45D]" />
                  </a>
                ))}
              </nav>

              {/* Quick Actions in Mobile Drawer */}
              <div className="pt-4 border-t border-[#C8A45D]/20 space-y-3">
                <a
                  href="#store"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#C8A45D] text-[#141012] text-xs font-semibold uppercase tracking-[0.16em] transition-all hover:bg-[#D4AF37]"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#141012]" />
                  <span>Book Private Appointment</span>
                </a>

                <a
                  href={`https://wa.me/${BRAND_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 border border-[#C8A45D]/60 text-[#FFFDF7] text-xs uppercase tracking-[0.16em] hover:border-[#D4AF37] hover:bg-[#251C1F] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C8A45D]" />
                  <span>Concierge WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Mobile Footer Info */}
            <div className="pt-6 border-t border-[#C8A45D]/20 text-xs text-[#8E9AAF] space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
                <span>{BRAND_CONFIG.storeAddress.title}, New Delhi</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <span>11:00 AM – 8:00 PM</span>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  )
}
