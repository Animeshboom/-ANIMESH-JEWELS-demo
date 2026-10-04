import React from 'react'
import { ShieldCheck, Award, Gem, Lock } from 'lucide-react'

const TRUST_BADGES = [
  {
    icon: Gem,
    label: 'Certified Natural Diamonds',
    detail: 'GIA & IGI Verified',
  },
  {
    icon: Award,
    label: 'BIS 916 Hallmark Gold',
    detail: 'Govt. Authorized Standard',
  },
  {
    icon: ShieldCheck,
    label: 'Lifetime Buyback Value',
    detail: 'Enduring Heirloom Guarantee',
  },
  {
    icon: Lock,
    label: 'Insured Armored Handover',
    detail: 'Discreet Private Logistics',
  },
]

export const TrustBanner: React.FC = () => {
  return (
    <section className="w-full bg-[#FFFDF7] border-y border-[#C8A45D]/30 py-4 sm:py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 items-stretch">
          {TRUST_BADGES.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-2 rounded-xl bg-[#080E1E]/[0.02] sm:bg-transparent border border-[#C8A45D]/20 sm:border-0 min-w-0"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#080E1E] border border-[#C8A45D]/60 flex items-center justify-center shrink-0 text-[#C8A45D] shadow-sm">
                  <Icon className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 stroke-[1.75]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] sm:text-xs font-semibold text-[#141012] tracking-tight sm:tracking-wide leading-tight line-clamp-1 sm:line-clamp-none">
                    {item.label}
                  </div>
                  <div className="text-[8px] sm:text-[10px] text-[#C8A45D] uppercase tracking-wider font-mono font-medium truncate sm:whitespace-normal mt-0.5">
                    {item.detail}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
