import { useState } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import TravelTipsArticle from './pages/TravelTipsArticle'
import PackingHacks from './pages/PackingHacks'
import { LanguageProvider } from './components/LanguageSwitcher'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'travel-tips':
        return <TravelTipsArticle onBack={() => setCurrentPage('home')} />
      case 'packing-hacks':
        return <PackingHacks onBack={() => setCurrentPage('home')} />
      default:
        return <Home 
          onNavigateToTravelTips={() => setCurrentPage('travel-tips')}
          onNavigateToPackingHacks={() => setCurrentPage('packing-hacks')}
        />
    }
  }

  return (
    <LanguageProvider>
      <Layout>
        {renderPage()}
      </Layout>
    </LanguageProvider>
  )
}

export default App