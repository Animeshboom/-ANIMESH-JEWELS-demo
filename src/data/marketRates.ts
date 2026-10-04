/**
 * Market Bullion Rates Data & Types
 * Designed to cleanly swap with a real-time bullion API in future stages.
 */

export interface BullionRate {
  id: string
  name: string
  purity: string
  karat?: string
  ratePerGram: number
  unit: string
  currency: string
  changePercent24h: number
  isPositive: boolean
  lastUpdated: string
}

export interface MarketRatesResponse {
  status: 'indicative_demo'
  marketStatus: 'OPEN' | 'CLOSED'
  lastRefreshed: string
  disclaimer: string
  rates: BullionRate[]
}

export const MOCK_MARKET_RATES: MarketRatesResponse = {
  status: 'indicative_demo',
  marketStatus: 'OPEN',
  lastRefreshed: 'Updated 10 mins ago • Live Indicative Rates',
  disclaimer:
    'Indicative bullion rates for estimation and bespoke atelier crafting. Final billing calculated upon daily official market settlement.',
  rates: [
    {
      id: 'gold-24k',
      name: '24K GOLD',
      purity: '999 PURITY',
      karat: '24K',
      ratePerGram: 7485,
      unit: 'g',
      currency: '₹',
      changePercent24h: 0.42,
      isPositive: true,
      lastUpdated: '10 mins ago',
    },
    {
      id: 'gold-22k',
      name: '22K GOLD',
      purity: '916 PURITY',
      karat: '22K',
      ratePerGram: 6860,
      unit: 'g',
      currency: '₹',
      changePercent24h: 0.38,
      isPositive: true,
      lastUpdated: '10 mins ago',
    },
    {
      id: 'gold-18k',
      name: '18K GOLD',
      purity: '750 PURITY',
      karat: '18K',
      ratePerGram: 5615,
      unit: 'g',
      currency: '₹',
      changePercent24h: 0.29,
      isPositive: true,
      lastUpdated: '10 mins ago',
    },
    {
      id: 'silver-999',
      name: '999 SILVER',
      purity: '999 PURITY',
      ratePerGram: 92.4,
      unit: 'g',
      currency: '₹',
      changePercent24h: -0.15,
      isPositive: false,
      lastUpdated: '15 mins ago',
    },
  ],
}
