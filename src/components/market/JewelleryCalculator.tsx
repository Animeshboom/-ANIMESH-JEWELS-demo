import React, { useState } from 'react'
import { Calculator, Info, Sparkles } from 'lucide-react'
import type { CurrencyCode, MetalRateItem } from '../../types/market'
import { formatCurrency } from '../../services/currencyService'

interface JewelleryCalculatorProps {
  metals: Record<string, MetalRateItem>
  currency: CurrencyCode
}

export const JewelleryCalculator: React.FC<JewelleryCalculatorProps> = ({ metals, currency }) => {
  const [selectedMetalKey, setSelectedMetalKey] = useState<string>('gold22k')
  const [weight, setWeight] = useState<number>(10)
  const [makingMode, setMakingMode] = useState<'PERCENT' | 'PER_GRAM'>('PERCENT')
  const [makingCharge, setMakingCharge] = useState<number>(12)
  const [gstPercent, setGstPercent] = useState<number>(3)

  const selectedMetal = metals[selectedMetalKey] || metals.gold22k
  const metalRate = selectedMetal ? selectedMetal.pricePerGram : 0

  // Calculation formulas
  const baseMetalValue = Math.round(metalRate * (weight || 0) * 100) / 100

  const makingCharges =
    makingMode === 'PERCENT'
      ? Math.round(baseMetalValue * ((makingCharge || 0) / 100) * 100) / 100
      : Math.round((makingCharge || 0) * (weight || 0) * 100) / 100

  const taxableAmount = baseMetalValue + makingCharges
  const gstAmount = Math.round(taxableAmount * ((gstPercent || 0) / 100) * 100) / 100
  const estimatedTotal = Math.round((taxableAmount + gstAmount) * 100) / 100

  const weightPresets = [5, 10, 20, 50]

  return (
    <div className="w-full bg-[#FFFDF7] border border-[#C8A45D]/35 rounded-3xl p-4 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Decorative Corner Trim */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#C8A45D]" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#C8A45D]" />

      {/* Header */}
      <div className="pb-6 border-b border-[#C8A45D]/20">
        <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#C8A45D] font-semibold">
          <Calculator className="w-3.5 h-3.5 text-[#C8A45D]" />
          <span>Interactive Valuation Atelier</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-[#080E1E] mt-1">
          ESTIMATE YOUR JEWELLERY VALUE
        </h3>
        <p className="text-xs sm:text-sm text-[#080E1E]/70 font-sans mt-0.5">
          A quick estimate based on current metal prices.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 items-start">
        {/* Form Inputs (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Metal Selector */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-[#080E1E]/80 block mb-2 font-mono">
              1. Select Precious Metal & Purity
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {[
                { key: 'gold24k', label: '24K Gold', sub: '999 Purity' },
                { key: 'gold22k', label: '22K Gold', sub: '916 Hallmark' },
                { key: 'gold18k', label: '18K Gold', sub: '750 Purity' },
                { key: 'silver999', label: '999 Silver', sub: 'Fine Bullion' },
                { key: 'silver925', label: '925 Silver', sub: 'Sterling' },
              ].map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setSelectedMetalKey(item.key)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedMetalKey === item.key
                      ? 'border-[#C8A45D] bg-[#F4EFE6] text-[#080E1E] shadow-sm'
                      : 'border-[#C8A45D]/25 bg-[#FFFDF7] text-[#080E1E]/70 hover:border-[#C8A45D]/60'
                  }`}
                >
                  <span className="font-serif text-sm font-semibold block">{item.label}</span>
                  <span className="text-[10px] text-[#C8A45D] font-mono block mt-0.5">
                    {item.sub}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Weight Input */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#080E1E]/80 font-mono">
                2. Weight in Grams
              </label>
              <div className="flex items-center gap-1.5">
                {weightPresets.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setWeight(preset)}
                    className={`px-2 py-0.5 text-[10px] font-mono rounded border transition-colors cursor-pointer ${
                      weight === preset
                        ? 'bg-[#080E1E] text-[#FFFDF7] border-[#080E1E]'
                        : 'bg-[#F4EFE6] text-[#080E1E]/70 border-[#C8A45D]/30 hover:border-[#C8A45D]'
                    }`}
                  >
                    {preset}g
                  </button>
                ))}
              </div>
            </div>

            <div className="relative">
              <input
                type="number"
                min="0.1"
                step="0.1"
                value={weight || ''}
                onChange={(e) => setWeight(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full px-4 py-3 bg-[#F4EFE6] border border-[#C8A45D]/40 rounded-xl font-mono text-base text-[#080E1E] focus:outline-none focus:border-[#C8A45D]"
                placeholder="Enter weight in grams"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-[#080E1E]/60 uppercase">
                Grams
              </span>
            </div>
          </div>

          {/* Making Charge & GST (Advanced Mode) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#C8A45D]/20">
            {/* Making Charge */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-[#080E1E]/80 font-mono">
                  Making Charges
                </label>
                <div className="flex items-center text-[10px] font-mono border border-[#C8A45D]/40 rounded overflow-hidden">
                  <button
                    type="button"
                    onClick={() => {
                      setMakingMode('PERCENT')
                      setMakingCharge(12)
                    }}
                    className={`px-2 py-0.5 ${
                      makingMode === 'PERCENT' ? 'bg-[#C8A45D] text-[#080E1E] font-bold' : 'bg-[#F4EFE6]'
                    }`}
                  >
                    %
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMakingMode('PER_GRAM')
                      setMakingCharge(currency === 'INR' ? 1200 : 15)
                    }}
                    className={`px-2 py-0.5 ${
                      makingMode === 'PER_GRAM' ? 'bg-[#C8A45D] text-[#080E1E] font-bold' : 'bg-[#F4EFE6]'
                    }`}
                  >
                    / g
                  </button>
                </div>
              </div>
              <input
                type="number"
                min="0"
                step="0.5"
                value={makingCharge || ''}
                onChange={(e) => setMakingCharge(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full px-3.5 py-2.5 bg-[#F4EFE6] border border-[#C8A45D]/40 rounded-xl font-mono text-sm text-[#080E1E] focus:outline-none focus:border-[#C8A45D]"
              />
            </div>

            {/* GST % */}
            <div>
              <label className="text-[11px] font-semibold uppercase tracking-wider text-[#080E1E]/80 font-mono block mb-1.5">
                Applicable GST / Tax (%)
              </label>
              <input
                type="number"
                min="0"
                step="0.1"
                value={gstPercent || ''}
                onChange={(e) => setGstPercent(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full px-3.5 py-2.5 bg-[#F4EFE6] border border-[#C8A45D]/40 rounded-xl font-mono text-sm text-[#080E1E] focus:outline-none focus:border-[#C8A45D]"
              />
            </div>
          </div>
        </div>

        {/* Breakdown & Result Card (5 Cols) */}
        <div className="lg:col-span-5 bg-[#080E1E] text-[#FFFDF7] border-2 border-[#C8A45D] rounded-2xl p-4 sm:p-7 shadow-2xl relative flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#C8A45D]/30">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A45D] font-semibold font-mono">
                Estimated Breakdown
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#FFFDF7]/60 font-mono">
                {selectedMetal.name}
              </span>
            </div>

            {/* Itemized Line Items */}
            <div className="mt-4 space-y-2.5 text-xs font-sans">
              <div className="flex justify-between text-[#FFFDF7]/80">
                <span>
                  Base Metal ({weight}g @ {formatCurrency(metalRate, currency)}/g)
                </span>
                <span className="font-mono font-medium text-[#FFFDF7]">
                  {formatCurrency(baseMetalValue, currency)}
                </span>
              </div>

              <div className="flex justify-between text-[#FFFDF7]/80">
                <span>
                  Making Charges ({makingMode === 'PERCENT' ? `${makingCharge}%` : `${formatCurrency(makingCharge, currency)}/g`})
                </span>
                <span className="font-mono font-medium text-[#FFFDF7]">
                  {formatCurrency(makingCharges, currency)}
                </span>
              </div>

              <div className="flex justify-between text-[#FFFDF7]/80">
                <span>GST ({gstPercent}%)</span>
                <span className="font-mono font-medium text-[#FFFDF7]">
                  {formatCurrency(gstAmount, currency)}
                </span>
              </div>
            </div>

            {/* Grand Total */}
            <div className="mt-6 pt-4 border-t border-[#C8A45D]/40">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A45D] font-mono block">
                Estimated Total Value
              </span>
              <div className="font-serif text-3xl sm:text-4xl font-semibold text-[#FFFDF7] mt-1 drop-shadow-md">
                {formatCurrency(estimatedTotal, currency)}
              </div>
            </div>
          </div>

          {/* Warnings & Notes */}
          <div className="mt-6 pt-4 border-t border-[#C8A45D]/25 space-y-2">
            <div className="flex items-start gap-2 text-[10px] text-[#C8A45D] leading-relaxed">
              <Sparkles className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              <span>
                <strong>Note:</strong> Diamond and gemstone pricing is not included in this metal-only estimate.
              </span>
            </div>
            <div className="flex items-start gap-2 text-[10px] text-[#FFFDF7]/60 leading-relaxed">
              <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              <span>
                *Estimate only. Final pricing depends on selected jewellery piece, artisanal complexity, gemstones, official market settlement, and salon policies.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
