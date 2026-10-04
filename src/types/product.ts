/**
 * ANIMESH JEWELS - Luxury Product Types & Data Contracts
 * Defines comprehensive specifications for Haute Joaillerie masterpieces.
 */

import type { CurrencyCode } from './market'

export type ProductAvailability =
  | 'AVAILABLE_FOR_VIEWING'
  | 'MADE_TO_ORDER'
  | 'CURRENTLY_UNAVAILABLE'

export interface ProductStory {
  headline: string
  subtitle?: string
  narrative: string
  craftsmanshipHighlight: string
  quote?: string
  quoteAuthor?: string
  mediaUrl?: string
  mediaType?: 'image' | 'video'
}

export interface ProductAccordionItem {
  id: string
  title: string
  content: string
  bulletPoints?: string[]
}

export interface Product {
  id: string
  slug: string
  name: string
  collection: string
  category: string
  subtitle?: string
  description: string
  price: number // Base price in INR
  currency: CurrencyCode
  goldPurity: string
  goldWeight: string
  diamondCarat?: string
  diamondType?: string
  diamondCertification?: string
  gemstone?: string
  images: string[]
  video?: string
  poster?: string
  sku: string
  availability: ProductAvailability
  dimensions?: string
  deliveryInformation: string
  careInformation: string
  customizable: boolean
  appointmentAvailable: boolean
  story: ProductStory
  accordions: ProductAccordionItem[]
}
