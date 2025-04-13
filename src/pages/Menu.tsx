import { useState } from 'react'
import { Product, MenuCategory, menuData } from '../data/menuData'
import Navbar from '../components/Navbar'
import SearchAndSort from '../components/SearchAndSort'
import CategoryFilter from '../components/CategoryFilter'
import CategorySection from '../components/CategorySection'
import CartModal from '../components/CartModal'
import ProductModal from '../components/ProductModal'

export interface OrderItem extends Product {
  quantity: number
}

const Menu = () => {
  const [products, setProducts] = useState<Product[]>(
    menuData.flatMap((category) => category.products)
  )
  const [filter, setFilter] = useState<string>('all')
  const [order, setOrder] = useState<OrderItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [sortOption, setSortOption] = useState<string>('default')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null) // Stare pentru modal

  const categories = menuData.map((category) => category.category)
  const totalItems = order.reduce((sum, item) => sum + item.quantity, 0)

  const getFilteredAndSortedProducts = (categoryProducts: Product[]) => {
    return categoryProducts
      .map((product) => products.find((p) => p.id === product.id) || product)
      .filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        switch (sortOption) {
          case 'price-asc':
            return a.price - b.price
          case 'price-desc':
            return b.price - a.price
          case 'name-asc':
            return a.name.localeCompare(b.name)
          case 'name-desc':
            return b.name.localeCompare(a.name)
          case 'available-first':
            return a.available === b.available ? 0 : a.available ? -1 : 1
          default:
            return 0
        }
      })
  }

  const toggleAvailability = (productId: string) => {
    const updatedProducts = products.map((product) =>
      product.id === productId
        ? { ...product, available: !product.available }
        : product
    )
    setProducts(updatedProducts)
  }

  const addToOrder = (product: Product) => {
    if (!product.available) return
    const existingItem = order.find((item) => item.id === product.id)
    if (existingItem) {
      setOrder(
        order.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      setOrder([...order, { ...product, quantity: 1 }])
    }
  }

  const updateQuantity = (productId: string, delta: number) => {
    const updatedOrder = order
      .map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + delta }
          : item
      )
      .filter((item) => item.quantity > 0)
    setOrder(updatedOrder)
  }

  const viewProduct = (product: Product) => {
    setSelectedProduct(product)
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Navbar totalItems={totalItems} onCartOpen={() => setIsCartOpen(true)} />
      <div className="flex-1 p-8">
        <h1 className="mb-6 text-center text-4xl font-bold text-gray-800">
          Meniul Bite Blitz
        </h1>
        <SearchAndSort
          searchTerm={searchTerm}
          sortOption={sortOption}
          onSearchChange={setSearchTerm}
          onSortChange={setSortOption}
        />
        <CategoryFilter
          categories={categories}
          currentFilter={filter}
          onFilterChange={setFilter}
        />
        <div className="mx-auto max-w-6xl">
          {menuData.map((category: MenuCategory) => {
            const filteredProducts = getFilteredAndSortedProducts(
              category.products
            )
            if (filter !== 'all' && filter !== category.category) return null
            if (filteredProducts.length === 0) return null
            return (
              <CategorySection
                key={category.id}
                category={category.category}
                products={filteredProducts}
                onToggleAvailability={toggleAvailability}
                onAddToOrder={addToOrder}
                onViewProduct={viewProduct}
              />
            )
          })}
        </div>
      </div>
      {isCartOpen && (
        <CartModal
          order={order}
          onClose={() => setIsCartOpen(false)}
          onUpdateQuantity={updateQuantity}
        />
      )}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
      <footer className="bg-gray-800 p-4 text-center text-white">
        <p>© 2025 Bite Blitz. Toate drepturile rezervate.</p>
      </footer>
    </div>
  )
}

export default Menu
