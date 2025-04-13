import { useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import RecommendationsSection from '../components/RecommendationsSection'
import ProductModal from '../components/ProductModal'

interface Recommendation {
  name: string
  description: string
  price: string
  image: string
  category: string
}

const Home = () => {
  const username = 'claudiuBlitz'
  const [filter, setFilter] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState<Recommendation | null>(
    null
  )

  const recommendations: Recommendation[] = [
    {
      name: 'Pizza Margherita',
      description: 'Sos de roșii, mozzarella proaspătă, busuioc.',
      price: '25 RON',
      image:
        'https://images.unsplash.com/photo-1574071318508-1cdbab80d172?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      category: 'Pizza'
    },
    {
      name: 'Pizza Quattro Formaggi',
      description: 'Patru tipuri de brânză topită pe un blat crocant.',
      price: '30 RON',
      image:
        'https://images.unsplash.com/photo-1541745537411-b036b74c5a07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      category: 'Pizza'
    },
    {
      name: 'Cheeseburger Clasic',
      description: 'Carne de vită, cheddar, salată, roșii, sos special.',
      price: '20 RON',
      image:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      category: 'Burgeri'
    },
    {
      name: 'Bacon Burger',
      description: 'Carne de vită, bacon crocant, cheddar, sos BBQ.',
      price: '24 RON',
      image:
        'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      category: 'Burgeri'
    },
    {
      name: 'Limonadă Proaspătă',
      description: 'Lămâie, miere și mentă, perfectă pentru orice masă.',
      price: '10 RON',
      image:
        'https://images.unsplash.com/photo-1623156299278-06ee8d2e2e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      category: 'Băuturi'
    },
    {
      name: 'Cola',
      description: 'Clasică și răcoritoare, ideală cu pizza sau burger.',
      price: '8 RON',
      image:
        'https://images.unsplash.com/photo-1624513395406-a536354f6305?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      category: 'Băuturi'
    }
  ]

  const viewProduct = (recommendation: Recommendation) => {
    setSelectedProduct(recommendation)
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Navbar />
      <Header username={username} />
      <RecommendationsSection
        recommendations={recommendations}
        filter={filter}
        onFilterChange={setFilter}
        onViewProduct={viewProduct}
      />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
      <footer className="bg-gray-800 p-2 sm:p-4 text-center text-white text-sm sm:text-base">
        <p>© 2025 Bite Blitz. Toate drepturile rezervate.</p>
      </footer>
    </div>
  )
}

export default Home
