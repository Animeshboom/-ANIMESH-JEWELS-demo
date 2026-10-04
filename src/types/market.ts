/**
 * Market Types & Data Contracts
 * Defines all structures for live precious metals, currencies, charts, and calculator.
 */

export type CurrencyCode = 'INR' | 'USD'
export type MarketTimeRange = '24H' | '7D' | '30D'
export type MarketStatus = 'LIVE' | 'DELAYED' | 'LAST_AVAILABLE'
export type PriceType = 'GLOBAL_SPOT' | 'ESTIMATED_RETAIL_JEWELLERY'

export interface MetalRateItem {
  id: string
  name: string
  purityLabel: string
  purityFactor: number
  category: 'gold' | 'silver'
  pricePerGram: number
  change24hPercent: number
  change24hAbsolute: number
  isPositive: boolean
  unit: string
  currency: CurrencyCode
  lastUpdated: string
  priceType: PriceType
}

export interface ChartPoint {
  timestamp: string
  displayTime: string
  price: number
}

export interface MarketResponse {
  status: MarketStatus
  statusMessage: string
  currency: CurrencyCode
  lastUpdated: string
  lastUpdatedTimestamp: number
  exchangeRateUsdToInr: number
  metals: {
    gold24k: MetalRateItem
    gold22k: MetalRateItem
    gold18k: MetalRateItem
    silver999: MetalRateItem
    silver925: MetalRateItem
  }
  history24k: Record<MarketTimeRange, ChartPoint[]>
}

export interface CalculatorState {
  selectedMetalId: string
  weightGrams: number
  makingChargeMode: 'PERCENT' | 'PER_GRAM'
  makingChargeValue: number
  gstPercent: number
}

export interface CalculatorBreakdown {
  metalRatePerGram: number
  baseMetalValue: number
  makingCharges: number
  gstAmount: number
  estimatedTotal: number
  currency: CurrencyCode
}
