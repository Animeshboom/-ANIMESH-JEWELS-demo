import React, { useState, useEffect } from 'react'
import type { CurrencyCode, MarketResponse, MarketTimeRange } from '../types/market'
import { fetchMarketRates } from '../services/marketPriceService'
import { formatCurrency } from '../services/currencyService'
import { MarketChart } from '../components/market/MarketChart'
import { JewelleryCalculator } from '../components/market/JewelleryCalculator'
import {
  TrendingUp,
  TrendingDown,
  Clock,
  ShieldCheck,
  ArrowUpRight,
  RefreshCw,
} from 'lucide-react'

export const LiveRateSection: React.FC = () => {
  const [currency, setCurrency] = useState<CurrencyCode>('INR')
  const [timeRange, setTimeRange] = useState<MarketTimeRange>('24H')
  const [marketData, setMarketData] = useState<MarketResponse | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false)

  // Load market rates when currency changes or initial mount
  useEffect(() => {
    let isMounted = true

    const loadRates = async () => {
      setLoading(true)
      const data = await fetchMarketRates(currency)
      if (isMounted) {
        setMarketData(data)
        setLoading(false)
      }
    }

    loadRates()

    // 60-second polling interval (respects public API limits)
    const interval = setInterval(async () => {
      const refreshed = await fetchMarketRates(currency)
      if (isMounted) {
        setMarketData(refreshed)
      }
    }, 60000)

    return () => {
      isMounted = false
      clearInterval(interval)
    }
  }, [currency])

  const handleManualRefresh = async () => {
    setIsRefreshing(true)
    const fresh = await fetchMarketRates(currency)
    setMarketData(fresh)
    setTimeout(() => setIsRefreshing(false), 600)
  }

  if (!marketData && loading) {
    return (
      <section className="bg-[#F4EFE6] text-[#080E1E] py-24 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C8A45D]">
          <RefreshCw className="w-4 h-4 animate-spin" />
          <span>Synchronizing precious metals market feeds...</span>
        </div>
      </section>
    )
  }

  const data = marketData!
  const gold24k = data.metals.gold24k
  const supportingMetals = [
    data.metals.gold22k,
    data.metals.gold18k,
    data.metals.silver999,
    data.metals.silver925,
  ]

  const chartPoints = data.history24k[timeRange] || []
  const isLive = data.status === 'LIVE'

  return (
    <section
      id="market"
      className="relative bg-[#F4EFE6] text-[#080E1E] pt-12 sm:pt-20 pb-16 sm:pb-28 border-b border-[#C8A45D]/25 transition-colors duration-500 overflow-hidden"
    >
      {/* Background Subtle Radiance */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#C8A45D]/[0.06] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-10 sm:space-y-12">
        {/* 
          1. SECTION HEADER: TITLE, CURRENCY SWITCHER, STATUS BADGE & TIMESTAMPS
        */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#C8A45D]/30">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              {/* Status Badge */}
              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase font-semibold border ${
                  isLive
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                    : 'bg-amber-50 text-amber-900 border-amber-300'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isLive ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
                  }`}
                />
                <span>{isLive ? 'LIVE MARKET FEED' : 'LAST AVAILABLE DATA'}</span>
              </div>

              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A45D] font-semibold">
                Daily Bullion Index
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-[0.04em] text-[#080E1E]">
              TODAY'S MARKET
            </h2>

            <p className="text-xs sm:text-sm text-[#080E1E]/70 font-sans tracking-wide">
              Precious metals. Real-time perspective.
            </p>
          </div>

          {/* Right Header Controls: Currency Switcher & Timestamp */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-sans">
            {/* Currency Switcher */}
            <div className="inline-flex items-center p-1 bg-[#FFFDF7] border border-[#C8A45D]/40 rounded-xl shadow-sm">
              <button
                type="button"
                onClick={() => setCurrency('INR')}
                className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${
                  currency === 'INR'
                    ? 'bg-[#080E1E] text-[#FFFDF7] shadow-sm'
                    : 'text-[#080E1E]/60 hover:text-[#080E1E]'
                }`}
              >
                ₹ INR
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${
                  currency === 'USD'
                    ? 'bg-[#080E1E] text-[#FFFDF7] shadow-sm'
                    : 'text-[#080E1E]/60 hover:text-[#080E1E]'
                }`}
              >
                $ USD
              </button>
            </div>

            {/* Refresh & Last Updated */}
            <button
              onClick={handleManualRefresh}
              className="p-2 bg-[#FFFDF7] border border-[#C8A45D]/40 rounded-xl text-[#080E1E]/70 hover:text-[#080E1E] hover:border-[#C8A45D] transition-colors cursor-pointer"
              title="Refresh Market Rates"
              aria-label="Refresh rates"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
            </button>

            <div className="flex items-center gap-1.5 text-[#080E1E]/80 text-xs">
              <Clock className="w-3.5 h-3.5 text-[#C8A45D]" />
              <span className="font-mono text-[11px]">{data.lastUpdated}</span>
            </div>
          </div>
        </div>

        {/* 
          2. MAIN MARKET FEATURE: 24K GOLD & REAL INTERACTIVE GRAPH
        */}
        <div className="space-y-4">
          <MarketChart
            data={chartPoints}
            currency={currency}
            timeRange={timeRange}
            onTimeRangeChange={setTimeRange}
            currentPrice={gold24k.pricePerGram}
            changePercent={gold24k.change24hPercent}
            isPositive={gold24k.isPositive}
          />
        </div>

        {/* 
          3. SUPPORTING METALS CARDS (22K, 18K, 999 SILVER, 925 SILVER)
        */}
        <div>
          <div className="flex items-center justify-between pb-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A45D] font-semibold font-mono">
              Supporting Precious Metals & Jewellery Purity Tiers
            </span>
            <span className="text-[10px] text-[#080E1E]/60 font-sans">
              Prices per 1 Gram Standard
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {supportingMetals.map((metal) => (
              <div
                key={metal.id}
                className="group relative bg-[#FFFDF7] border border-[#C8A45D]/30 hover:border-[#C8A45D] p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#C8A45D]/10"
              >
                {/* Decorative Top Accent */}
                <div className="absolute top-0 right-0 w-6 h-6 pointer-events-none overflow-hidden">
                  <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#C8A45D]" />
                </div>

                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-serif text-base text-[#080E1E] group-hover:text-[#C8A45D] transition-colors">
                        {metal.name}
                      </h4>
                      <p className="text-[10px] uppercase tracking-wider text-[#C8A45D] font-semibold mt-0.5 font-mono">
                        {metal.purityLabel}
                      </p>
                    </div>

                    <div
                      className={`inline-flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded font-medium ${
                        metal.isPositive
                          ? 'text-emerald-800 bg-emerald-100/70 border border-emerald-300'
                          : 'text-amber-800 bg-amber-100/70 border border-amber-300'
                      }`}
                    >
                      {metal.isPositive ? (
                        <TrendingUp className="w-3 h-3 text-emerald-700" />
                      ) : (
                        <TrendingDown className="w-3 h-3 text-amber-700" />
                      )}
                      <span>
                        {metal.isPositive ? '+' : ''}
                        {metal.change24hPercent}%
                      </span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="font-serif text-2xl font-semibold tracking-tight text-[#080E1E] group-hover:text-[#C8A45D] transition-colors">
                      {formatCurrency(metal.pricePerGram, currency)}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-[#080E1E]/60 font-medium">
                      / {metal.unit}
                    </span>
                  </div>

                  <p className="text-[10px] text-[#080E1E]/50 font-sans mt-1">
                    {metal.priceType === 'ESTIMATED_RETAIL_JEWELLERY'
                      ? 'Estimated Atelier Purity'
                      : 'Global Spot Standard'}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#C8A45D]/20 flex items-center justify-between text-xs">
                  <span className="text-[10px] text-[#080E1E]/60 font-mono">24h Shift</span>
                  <a
                    href="#store"
                    className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#C8A45D] hover:text-[#080E1E] font-semibold transition-colors"
                  >
                    <span>Price Lock</span>
                    <ArrowUpRight className="w-3 h-3 text-[#C8A45D]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 
          4. JEWELLERY PRICE CALCULATOR
        */}
        <div className="pt-4">
          <JewelleryCalculator metals={data.metals} currency={currency} />
        </div>

        {/* 
          5. LEGAL DISCLAIMERS & API DOCUMENTATION NOTE
        */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-[#080E1E]/70 border-t border-[#C8A45D]/25 pt-6">
          <p className="max-w-3xl leading-relaxed">
            <span className="font-semibold text-[#080E1E]">Market Disclosure:</span> Bullion rates
            are fetched via real-time global spot endpoints (Gold-API.com). Global spot prices reflect
            unprocessed international bullion and differ from domestic retail jewellery rates due to
            import duties, local refinery charges, GST, and bespoke Karigari fabrication.
          </p>
          <div className="flex items-center gap-2 shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#C8A45D]" />
            <span className="font-mono text-[10px] text-[#C8A45D] uppercase tracking-widest font-semibold">
              BIS Hallmarking Standards
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
