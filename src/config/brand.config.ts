/**
 * ANIMESH JEWELS - Global Brand Configuration
 * Central source of truth for all brand identity, contact, and structural data.
 */

export interface NavLink {
  label: string
  href: string
  badge?: string
}

export interface BrandConfig {
  brandName: string
  subBrand: string
  tagline: string
  headlinePart1: string
  headlinePart2: string
  headlinePart3: string
  supportingText: string
  currency: {
    code: string
    symbol: string
    locale: string
  }
  whatsappNumber: string
  phoneDisplay: string
  email: string
  storeAddress: {
    title: string
    line1: string
    line2: string
    city: string
    pincode: string
    country: string
    hours: string
    mapLink: string
  }
  navigation: {
    primary: NavLink[]
    actionButtons: {
      explore: string
      appointment: string
    }
  }
  socialLinks: {
    name: string
    href: string
    handle: string
  }[]
  certifications: string[]
  trustPillars: {
    number: string
    title: string
    subtitle: string
    description: string
    certificationCode?: string
  }[]
}

export const BRAND_CONFIG: BrandConfig = {
  brandName: 'ANIMESH JEWELS',
  subBrand: 'HAUTE JOAILLERIE',
  tagline: 'CRAFTED FOR ETERNITY',
  headlinePart1: 'CRAFTED',
  headlinePart2: 'FOR',
  headlinePart3: 'ETERNITY.',
  supportingText: 'Timeless jewellery, designed to become part of your story.',
  currency: {
    code: 'INR',
    symbol: '₹',
    locale: 'en-IN',
  },
  whatsappNumber: '+91 70086 65245',
  phoneDisplay: '+91 70086 65245',
  email: 'concierge@animeshjewels.com',
  storeAddress: {
    title: 'The Heritage Flagship Salon',
    line1: 'Estate 12, The Imperial Promenade',
    line2: 'Chanakyapuri Diplomatic Enclave',
    city: 'New Delhi',
    pincode: '110021',
    country: 'India',
    hours: 'Monday – Sunday: 11:00 AM – 8:00 PM (By Private Appointment)',
    mapLink: 'https://maps.google.com',
  },
  navigation: {
    primary: [
      { label: 'Collections', href: '#collections' },
      { label: 'New Arrivals', href: '#signature' },
      { label: 'Bridal', href: '#featured' },
      { label: 'Craftsmanship', href: '#craftsmanship' },
      { label: 'Store', href: '#store' },
    ],
    actionButtons: {
      explore: 'EXPLORE COLLECTION',
      appointment: 'BOOK A PRIVATE APPOINTMENT',
    },
  },
  socialLinks: [
    { name: 'Instagram', href: 'https://instagram.com', handle: '@animeshjewels' },
    { name: 'Facebook', href: 'https://facebook.com', handle: 'animeshjewels' },
    { name: 'WhatsApp', href: 'https://whatsapp.com', handle: '+91 70086 65245' },
  ],
  certifications: [
    '100% Certified Natural Diamonds (GIA & IGI)',
    'BIS Hallmarked 22K & 18K Pure Gold',
    'Conflict-Free Ethically Sourced Gemstones',
    'Lifetime Buyback & Authenticity Guarantee',
  ],
  trustPillars: [
    {
      number: '01',
      title: 'CERTIFIED JEWELLERY',
      subtitle: 'GIA / IGI Diamond Certification',
      description: 'Every natural diamond is verified with laser-inscribed international laboratory certification and conflict-free origin guarantees.',
      certificationCode: 'GIA / IGI Verified',
    },
    {
      number: '02',
      title: 'BIS HALLMARKED GOLD',
      subtitle: '22K / 18K Purity',
      description: 'Government of India authorized BIS hallmark stamped on every precious link, certifying exact karat purity and sovereign metallurgy.',
      certificationCode: 'BIS 916 & 750 Stamped',
    },
    {
      number: '03',
      title: 'TRANSPARENT BUYBACK',
      subtitle: 'Clear and documented policies',
      description: 'Permanent documented lifetime exchange and buyback assurance based on official daily market rates with zero hidden deductions.',
      certificationCode: 'Lifetime Value Guarantee',
    },
    {
      number: '04',
      title: 'PRIVATE INSURED DELIVERY',
      subtitle: 'Secure handling from our atelier to you',
      description: 'Complimentary tamper-evident armored courier transit directly from our vault to your residence, fully insured at full appraisal value.',
      certificationCode: 'Armored Vault Transit',
    },
  ],
}

