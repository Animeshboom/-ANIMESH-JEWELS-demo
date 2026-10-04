import React, { useState, useEffect } from 'react'
import { Navbar } from './components/navigation/Navbar'
import { HomePage } from './pages/HomePage'
import { ProductPage } from './pages/ProductPage'
import { Footer } from './components/footer/Footer'

export const App: React.FC = () => {
  const [currentProductId, setCurrentProductId] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash
      if (hash.startsWith('#product/')) {
        return hash.replace('#product/', '').trim()
      }
    }
    return null
  })

  // Listen to hash changes (e.g. back button, forward button, or internal links)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash.startsWith('#product/')) {
        const id = hash.replace('#product/', '').trim()
        setCurrentProductId(id)
      } else {
        setCurrentProductId(null)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleNavigateHome = () => {
    window.location.hash = ''
    setCurrentProductId(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSelectProduct = (id: string) => {
    window.location.hash = `#product/${id}`
    setCurrentProductId(id)
  }

  return (
    <div className="min-h-screen bg-[#FFFDF7] text-[#141012] flex flex-col font-sans selection:bg-[#C8A45D] selection:text-[#141012]">
      {/* Sticky Luxury Editorial Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <div className="flex-1">
        {currentProductId ? (
          <ProductPage
            productId={currentProductId}
            onNavigateHome={handleNavigateHome}
            onSelectProduct={handleSelectProduct}
          />
        ) : (
          <HomePage />
        )}
      </div>

      {/* Royal Luxury Footer */}
      <Footer />
    </div>
  )
}

export default App
