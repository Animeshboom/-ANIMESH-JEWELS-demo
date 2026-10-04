import React, { useState, useEffect } from 'react'
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MessageSquare,
  ShieldCheck,
  CheckCircle,
  Sparkles,
} from 'lucide-react'
import type { Product } from '../../types/product'

interface PrivateViewingModalProps {
  isOpen: boolean
  onClose: () => void
  product: Product
}

export const PrivateViewingModal: React.FC<PrivateViewingModalProps> = ({
  isOpen,
  onClose,
  product,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: '11:00 AM – 01:00 PM',
    salonLocation: 'Flagship Salon, Chanakyapuri, New Delhi',
    notes: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false)
      setIsSubmitting(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate concierge appointment confirmation
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 700)
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="viewing-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080E1E]/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#FFFDF7] text-[#141012] rounded-3xl border-2 border-[#C8A45D]/40 shadow-2xl overflow-hidden p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Corner Accents */}
        <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-[#C8A45D]" />
        <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-[#C8A45D]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#141012]/5 hover:bg-[#141012]/10 text-[#141012]/70 hover:text-[#141012] transition-colors"
          aria-label="Close private viewing modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="text-center space-y-1.5 pb-6 border-b border-[#C8A45D]/25">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A45D] font-mono font-semibold flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                BY PRIVATE APPOINTMENT
              </span>
              <h2
                id="viewing-modal-title"
                className="font-serif text-2xl sm:text-3xl text-[#141012]"
              >
                Book a Private Viewing
              </h2>
              <p className="text-xs text-[#141012]/70 font-sans max-w-md mx-auto">
                Experience <span className="font-semibold text-[#141012]">{product.name}</span> in our private VIP salon suites with a dedicated master gemologist.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#141012]/70 font-mono mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C8A45D]" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maharaja Vikramaditya / Lady Eleanor"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#C8A45D]/30 focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D] bg-[#FFFDF7] text-sm text-[#141012] placeholder-[#141012]/30 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Phone & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#141012]/70 font-mono mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C8A45D]" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#C8A45D]/30 focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D] bg-[#FFFDF7] text-sm text-[#141012] placeholder-[#141012]/30 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#141012]/70 font-mono mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C8A45D]" />
                    <input
                      type="email"
                      required
                      placeholder="client@luxury.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#C8A45D]/30 focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D] bg-[#FFFDF7] text-sm text-[#141012] placeholder-[#141012]/30 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Date & Time Slot Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#141012]/70 font-mono mb-1">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C8A45D]" />
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preferredDate: e.target.value,
                        })
                      }
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#C8A45D]/30 focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D] bg-[#FFFDF7] text-sm text-[#141012] outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#141012]/70 font-mono mb-1">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C8A45D]" />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preferredTime: e.target.value,
                        })
                      }
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#C8A45D]/30 focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D] bg-[#FFFDF7] text-sm text-[#141012] outline-none transition-all"
                    >
                      <option value="11:00 AM – 01:00 PM">11:00 AM – 01:00 PM (Morning)</option>
                      <option value="02:00 PM – 04:00 PM">02:00 PM – 04:00 PM (Afternoon)</option>
                      <option value="05:00 PM – 07:30 PM">05:00 PM – 07:30 PM (Evening)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#141012]/70 font-mono mb-1">
                  Private Notes or Customization Requests (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3 w-4 h-4 text-[#C8A45D]" />
                  <textarea
                    rows={2}
                    placeholder="Specific bridal requirements, ring sizing, or accompanying guests..."
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-2 rounded-xl border border-[#C8A45D]/30 focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D] bg-[#FFFDF7] text-sm text-[#141012] placeholder-[#141012]/30 outline-none transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C8A45D] to-[#996515] text-[#080E1E] font-semibold text-xs uppercase tracking-[0.2em] font-mono shadow-lg shadow-[#C8A45D]/25 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>CONFIRMING APPOINTMENT...</span>
                  ) : (
                    <>
                      <span>REQUEST PRIVATE VIEWING</span>
                      <ShieldCheck className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[10px] text-center text-[#141012]/50 font-sans">
                *Your personal information is strictly confidential under Animesh Jewels diplomatic privacy protocols.
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation Success View */
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#C8A45D]/15 border-2 border-[#C8A45D] flex items-center justify-center text-[#C8A45D] shadow-lg animate-bounce">
              <CheckCircle className="w-8 h-8 text-[#C8A45D]" />
            </div>

            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A45D] font-mono font-semibold block">
              APPOINTMENT RESERVED
            </span>

            <h3 className="font-serif text-3xl text-[#141012]">
              REQUEST RECEIVED
            </h3>

            <p className="text-sm text-[#141012]/80 font-sans max-w-md mx-auto leading-relaxed">
              Our private concierge will contact you at <span className="font-semibold text-[#141012]">{formData.phone || formData.email}</span> shortly to coordinate your private viewing of <span className="font-semibold text-[#C8A45D]">{product.name}</span>.
            </p>

            <div className="pt-6 border-t border-[#C8A45D]/30 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#080E1E] text-[#FFFDF7] text-xs uppercase tracking-wider font-mono hover:bg-[#C8A45D] hover:text-[#080E1E] transition-colors"
              >
                RETURN TO PIECE
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
