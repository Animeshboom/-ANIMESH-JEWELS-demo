import React from 'react'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts'
import type { ChartPoint, CurrencyCode, MarketTimeRange } from '../../types/market'
import { formatCurrency } from '../../services/currencyService'

interface MarketChartProps {
  data: ChartPoint[]
  currency: CurrencyCode
  timeRange: MarketTimeRange
  onTimeRangeChange: (range: MarketTimeRange) => void
  currentPrice: number
  changePercent: number
  isPositive: boolean
}

interface CustomTooltipProps {
  active?: boolean
  payload?: Array<{ value: number }>
  label?: string
  currency: CurrencyCode
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label, currency }) => {
  if (active && payload && payload.length) {
    const price = payload[0].value
    return (
      <div className="bg-[#080E1E] text-[#FFFDF7] border border-[#C8A45D]/60 rounded-xl px-4 py-2.5 shadow-2xl backdrop-blur-md">
        <p className="text-[10px] uppercase tracking-wider text-[#C8A45D] font-mono font-medium">
          {label}
        </p>
        <p className="font-serif text-base font-semibold text-[#FFFDF7] mt-0.5">
          {formatCurrency(price, currency)} <span className="text-[10px] font-sans text-[#FFFDF7]/60">/ g</span>
        </p>
      </div>
    )
  }
  return null
}

export const MarketChart: React.FC<MarketChartProps> = ({
  data,
  currency,
  timeRange,
  onTimeRangeChange,
  currentPrice,
  changePercent,
  isPositive,
}) => {
  const timeRanges: MarketTimeRange[] = ['24H', '7D', '30D']

  // Find min and max for graceful auto-scaling
  const prices = data.map((d) => d.price)
  const minPrice = prices.length ? Math.min(...prices) : 0
  const maxPrice = prices.length ? Math.max(...prices) : 100
  const padding = (maxPrice - minPrice) * 0.15 || 5

  const yDomain = [Math.floor(minPrice - padding), Math.ceil(maxPrice + padding)]

  return (
    <div className="w-full bg-[#FFFDF7] border border-[#C8A45D]/35 rounded-2xl p-4 sm:p-8 shadow-xl relative overflow-hidden">
      {/* Top Header: Price & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#C8A45D]/20">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A45D] font-semibold">
              24K Gold • Spot Trend
            </span>
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                isPositive ? 'text-emerald-800 bg-emerald-100/70' : 'text-amber-800 bg-amber-100/70'
              }`}
            >
              {isPositive ? '↑ +' : '↓ '}
              {changePercent}%
            </span>
          </div>

          <div className="flex items-baseline gap-2 mt-1">
            <span className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#080E1E]">
              {formatCurrency(currentPrice, currency)}
            </span>
            <span className="text-xs uppercase tracking-wider text-[#080E1E]/60 font-medium">
              / gram
            </span>
          </div>
        </div>

        {/* Time Range Switcher */}
        <div className="inline-flex items-center p-1 bg-[#F4EFE6] border border-[#C8A45D]/30 rounded-xl self-start sm:self-auto">
          {timeRanges.map((range) => (
            <button
              key={range}
              onClick={() => onTimeRangeChange(range)}
              className={`px-3.5 py-1.5 text-xs font-mono font-semibold rounded-lg transition-all cursor-pointer ${
                timeRange === range
                  ? 'bg-[#080E1E] text-[#FFFDF7] shadow-md'
                  : 'text-[#080E1E]/60 hover:text-[#080E1E]'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="h-64 sm:h-72 w-full mt-6">
        {data && data.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: 5, bottom: 0 }}>
              <defs>
                <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#C8A45D" stopOpacity={0.28} />
                  <stop offset="95%" stopColor="#C8A45D" stopOpacity={0.0} />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#C8A45D"
                strokeOpacity={0.12}
                vertical={false}
              />

              <XAxis
                dataKey="displayTime"
                tick={{ fill: '#080E1E', opacity: 0.6, fontSize: 11, fontFamily: 'monospace' }}
                axisLine={{ stroke: '#C8A45D', strokeOpacity: 0.2 }}
                tickLine={false}
              />

              <YAxis
                domain={yDomain}
                width={70}
                tick={{ fill: '#080E1E', opacity: 0.6, fontSize: 11, fontFamily: 'monospace' }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(val) => formatCurrency(val, currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
              />

              <Tooltip content={<CustomTooltip currency={currency} />} />

              <Area
                type="monotone"
                dataKey="price"
                stroke="#C8A45D"
                strokeWidth={2.2}
                fillOpacity={1}
                fill="url(#goldGradient)"
                isAnimationActive={true}
                animationDuration={900}
              />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-full flex items-center justify-center text-xs text-[#080E1E]/50 font-sans">
            Historical market data unavailable from the current provider.
          </div>
        )}
      </div>

      {/* Micro Legend & Clarification */}
      <div className="mt-4 pt-3 border-t border-[#C8A45D]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[10px] text-[#080E1E]/60 font-sans">
        <span>*Global spot bullion price movement. Excludes local import customs & store making charges.</span>
        <span className="font-mono text-[#C8A45D]">Period: {timeRange} View</span>
      </div>
    </div>
  )
}
