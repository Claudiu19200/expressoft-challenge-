import { Product } from '../data/menuData'
import ProductCard from '../components/ProductCard'

// Define the props (inputs) that CategorySection needs
interface CategorySectionProps {
  category: string // Name of the category (e.g., "Pizza" or "Burgers")
  products: Product[] // List of products in this category
  onToggleAvailability: (productId: string) => void // Function to toggle a product’s availability
  onAddToOrder: (product: Product) => void // Function to add a product to the cart
  onViewProduct: (product: Product) => void // Function to view product details when clicked
}

// CategorySection displays a group of products under a category title
const CategorySection = ({
  category,
  products,
  onToggleAvailability,
  onAddToOrder,
  onViewProduct
}: CategorySectionProps) => {
  return (
    <div className="mb-8">
      <h2 className="mb-6 border-b-2 border-red-500 pb-2 text-center font-serif text-3xl font-extrabold tracking-wide text-gray-900">
        {category}
      </h2>
      {/* Grid to display products; 1 column on mobile, 2 on tablets, 3 on desktops */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Loop through each product to create a ProductCard */}
        {products.map((product) => (
          <ProductCard
            key={product.id} // Unique key for React to track each product
            product={product} // The product data (name, price, etc.)
            onToggleAvailability={onToggleAvailability}
            onAddToOrder={onAddToOrder}
            onViewProduct={onViewProduct}
          />
        ))}
      </div>
    </div>
  )
}

export default CategorySection
