/**
 * Currency Formatting & Conversion Service
 * Provides clean number formatting conforming to Indian numbering (en-IN) and US (en-US).
 */

import type { CurrencyCode } from '../types/market'

export const CURRENCY_SYMBOLS: Record<CurrencyCode, string> = {
  INR: '₹',
  USD: '$',
}

export const formatCurrency = (
  amount: number,
  currency: CurrencyCode = 'INR',
  options?: {
    minimumFractionDigits?: number
    maximumFractionDigits?: number
    includeSymbol?: boolean
  }
): string => {
  let maxDigits = options?.maximumFractionDigits ?? 2
  let minDigits = options?.minimumFractionDigits ?? (currency === 'INR' && amount >= 1000 ? 0 : (options?.maximumFractionDigits !== undefined ? Math.min(options.maximumFractionDigits, 2) : 2))

  if (minDigits > maxDigits) {
    minDigits = maxDigits
  }

  const includeSymbol = options?.includeSymbol ?? true
  const locale = currency === 'INR' ? 'en-IN' : 'en-US'

  const formattedNumber = amount.toLocaleString(locale, {
    minimumFractionDigits: minDigits,
    maximumFractionDigits: maxDigits,
  })

  if (!includeSymbol) {
    return formattedNumber
  }

  const symbol = CURRENCY_SYMBOLS[currency]
  return `${symbol}${formattedNumber}`
}
